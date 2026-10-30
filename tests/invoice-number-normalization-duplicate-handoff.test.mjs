import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-aug14-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("{slug:'ap-invoice-number-normalization-research'");
const end = source.indexOf("{slug:'ap-invoice-currency-evidence-research'", start);
assert.ok(start >= 0 && end > start, 'invoice-number research record boundaries must exist in order');
const record = source.slice(start, end);

assert.match(record, /modified:'2026-10-30'/, 'the changed research record must refresh its modified date');
assert.match(record, /heading:'Prepare duplicate-review evidence for finance'/, 'the route must expose a reader-facing duplicate-review marker');
assert.equal((record.match(/href:'\/services\/duplicate-invoice-review'/g) || []).length, 1, 'the duplicate-review service must appear once as the contextual next action');
assert.match(record, /A Philippines-based AP support specialist can keep the original invoice number, search form, and candidate matches together for review\./, 'the permitted preparation work must be explicit');
assert.match(record, /Your finance owner decides whether records are duplicates, approves any exception, and controls vendor or payment changes\./, 'the finance-owner boundary must remain explicit');
assert.doesNotMatch(record, /support specialist can (?:decide|approve|change|release)\b/i, 'the support role must not receive protected authority');
assert.match(renderer, /datePublished:p\.published,.+p\.modified.+dateModified:p\.modified/, 'research schema must expose the selected record modification date');

console.log('invoice-number normalization duplicate-review handoff source contract passed');