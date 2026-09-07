import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-aug17-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("{slug:'ap-payment-run-exclusion-evidence-research'");
const end = source.indexOf("{slug:'ap-recurring-invoice-baseline-research'", start);
assert.ok(start >= 0 && end > start, 'payment-run research record boundaries must exist in order');
const record = source.slice(start, end);

assert.match(record, /modified:'2026-09-07'/, 'the changed research record must refresh its modified date');
assert.match(record, /heading:'Set up payment-run preparation support'/, 'the route must expose its reader-facing next-step marker');
assert.match(record, /href:'\/services\/payment-run-preparation'/, 'the handoff must use the matching existing service');
assert.match(record, /authorized employees still verify bank details, approve exceptions, and release payments/, 'the ownership boundary must remain explicit');
assert.doesNotMatch(record, /support role can [^.]*release payments/i, 'the support role must not be given payment-release authority');
assert.match(renderer, /publishedTime:p\.published,modifiedTime:p\.modified/, 'research metadata must expose the record freshness dates to Open Graph');

console.log('payment-run exclusion handoff source contract passed');