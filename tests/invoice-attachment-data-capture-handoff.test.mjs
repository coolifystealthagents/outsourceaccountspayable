import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-aug11-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

const start = source.indexOf("base('ap-invoice-attachment-completeness-research'");
const end = source.indexOf("base('ap-payment-status-inquiry-research'", start);
assert.ok(start >= 0 && end > start, 'invoice-attachment research record boundaries must exist in order');
const record = source.slice(start, end);

assert.match(record, /modified:'2026-10-19'/, 'the changed research record must refresh its modified date');
assert.match(record, /heading:'Prepare a complete invoice packet before finance review'/, 'the route must expose its reader-facing next-step marker');
assert.equal((record.match(/href:'\/services\/invoice-data-capture'/g) || []).length, 1, 'invoice data capture must appear once as the contextual next action');
assert.match(record, /A Philippines-based AP support specialist can log received files, flag missing invoice support, and keep the approved queue organized for review\./, 'the permitted preparation work must be explicit');
assert.match(record, /Your finance owner decides whether the packet is complete enough to approve, how to handle exceptions, and any accounting treatment\./, 'the finance-owner boundary must remain explicit');
assert.doesNotMatch(record, /support specialist can (?:decide|approve|change|release)\b/i, 'the support role must not receive protected authority');
assert.match(renderer, /\{p\.serviceHandoff&&<section className="plan-block article-block">/, 'the shared renderer must render the data-owned handoff');

console.log('invoice-attachment data-capture handoff source contract passed');
