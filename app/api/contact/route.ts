import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 15 * 60_000;
const attempts = new Map<string, number[]>();

function clean(value: unknown, max = MAX_FIELD_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function ip(request: NextRequest) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function limited(key: string, max: number) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5_000) {
    for (const [storedKey, times] of attempts) {
      if (!times.some((time) => now - time < WINDOW_MS)) attempts.delete(storedKey);
    }
    while (attempts.size > 5_000) {
      const oldestKey = attempts.keys().next().value as string | undefined;
      if (!oldestKey) break;
      attempts.delete(oldestKey);
    }
  }
  return recent.length > max;
}

async function readBoundedBody(request: NextRequest) {
  if (!request.body) return new Uint8Array();
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error('Request body is too large');
    }
    chunks.push(value);
  }
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return body;
}

function failure(status: number, message: string) {
  return NextResponse.json({ ok: false, error: message }, { status, headers: { 'cache-control': 'no-store' } });
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  const length = Number(request.headers.get('content-length') || 0);
  const origin = request.headers.get('origin');
  const allowedOrigins = new Set([
    'https://outsourceaccountspayable.com',
    'https://www.outsourceaccountspayable.com',
    ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:3000', 'http://127.0.0.1:3000'] : []),
  ]);
  if ((origin && !allowedOrigins.has(origin)) || !Number.isFinite(length) || length > MAX_BODY_BYTES) return failure(400, 'Invalid request.');
  if (limited(`ip:${ip(request)}`, 10)) return failure(429, 'Please wait before trying again.');

  let fields: Record<string, unknown>;
  try {
    const raw = await readBoundedBody(request);
    if (contentType.includes('application/json')) fields = JSON.parse(new TextDecoder().decode(raw));
    else if (contentType.includes('application/x-www-form-urlencoded')) fields = Object.fromEntries(new URLSearchParams(new TextDecoder().decode(raw)));
    else if (contentType.includes('multipart/form-data')) {
      const parsed = await new Request(request.url, { method: 'POST', headers: { 'content-type': contentType }, body: raw }).formData();
      fields = Object.fromEntries(parsed);
    }
    else return failure(415, 'Unsupported form encoding.');
  } catch {
    return failure(400, 'The submitted form could not be read.');
  }
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) return failure(422, 'Invalid request body.');

  if (clean(fields.website_url) || clean(fields.websiteConfirm) || clean(fields.website_confirm) || clean(fields.company_homepage)) return failure(400, 'Invalid submission.');

  const firstName = clean(fields.firstName, 100);
  const lastName = clean(fields.lastName, 100);
  const fullName = clean(fields.fullName || fields.name, 200) || `${firstName} ${lastName}`.trim();
  const email = clean(fields.businessEmail || fields.email, 320).toLowerCase();
  const phone = clean(fields.phone, 100) || `${clean(fields.countryCode, 10)} ${clean(fields.phoneLocal, 80)}`.trim();
  const companyName = clean(fields.companyName || fields.company, 300);
  const companySize = clean(fields.companySize, 100);
  const positions = clean(fields.positionsToFill || fields.positions || fields.role, 100);
  const referral = clean(fields.howTheyHeard || fields.referral || fields.source, 300);
  const referralSpecify = clean(fields.referralSpecify, 300);
  const website = clean(fields.website, 500);
  const message = clean(fields.message || fields.needs || fields.details);

  if (!fullName || !email || !EMAIL_RE.test(email) || !phone || !companyName || !companySize || !positions || !referral || !message) return failure(422, 'Complete all required fields.');
  if (limited(`email:${email}`, 3)) return failure(429, 'Please wait before trying again.');

  const sourcePage = request.headers.get('referer') || new URL('/contact-us', request.url).toString();
  const payload = {
    full_name: fullName,
    email,
    phone,
    company_name: companyName,
    message: [message, `Company size: ${companySize}`, `Positions: ${positions}`, website ? `Website: ${website}` : '', referralSpecify ? `Referral detail: ${referralSpecify}` : ''].filter(Boolean).join('\n'),
    how_they_heard: referral,
    client_event_id: crypto.randomUUID(),
    attribution: { source_page: sourcePage, landing_page: sourcePage, referrer: request.headers.get('referer') || '', page_journey: ['Contact form'] },
  };

  const fallbackPayload = {
    name: fullName,
    email,
    phone,
    business: companyName,
    message,
    companySize,
    positions,
    referral,
    pageUrl: sourcePage,
    userAgent: request.headers.get('user-agent') || undefined,
  };
  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (!token) return failure(503, 'Submission service is temporarily unavailable.');

  try {
    const upstream = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json', 'x-lead-token': token }, body: JSON.stringify(payload), cache: 'no-store', signal: AbortSignal.timeout(12_000) });
    const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) {
      await sendLeadFallbackToMattermost(fallbackPayload).catch(() => undefined);
      return failure(502, 'The request was not accepted. Please try again.');
    }
    if (request.headers.get('accept')?.includes('text/html')) return NextResponse.redirect(new URL('/thank-you?lead=accepted', request.url), 303);
    return NextResponse.json({ ok: true }, { status: 201, headers: { 'cache-control': 'no-store' } });
  } catch {
    await sendLeadFallbackToMattermost(fallbackPayload).catch(() => undefined);
    return failure(502, 'The request could not be delivered. Please try again.');
  }
}
