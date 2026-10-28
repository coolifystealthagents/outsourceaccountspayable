import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-aug14-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

const start = source.indexOf("{slug:'ap-vendor-contact-source-research'");
const end = source.indexOf('\n];', start);
assert.ok(start >= 0 && end > start, 'vendor-contact research record boundaries must exist');
const record = source.slice(start, end);

assert.match(record, /modified:'2026-10-28'/, 'the changed research record must refresh its modified date');
assert.match(record, /heading:'Keep vendor-contact evidence ready for owner review'/, 'the route must expose its reader-facing next-step marker');
assert.equal((record.match(/href:'\/services\/vendor-onboarding-administration'/g) || []).length, 1, 'vendor onboarding administration must appear once as the contextual next action');
assert.match(record, /A Philippines-based AP support role can log the approved contact source, keep the follow-up record, and flag a changed channel for review\./, 'the permitted preparation work must be explicit');
assert.match(record, /Authorized company owners verify bank-detail changes, approve vendor-master updates, and decide any payment action\./, 'the protected decision boundary must remain explicit');
assert.doesNotMatch(record, /support role can (?:decide|approve|change|release)\b/i, 'the support role must not receive protected authority');
assert.match(renderer, /\{p\.serviceHandoff&&<section className="plan-block article-block">/, 'the shared renderer must render the data-owned handoff');

console.log('vendor-contact onboarding handoff source contract passed');