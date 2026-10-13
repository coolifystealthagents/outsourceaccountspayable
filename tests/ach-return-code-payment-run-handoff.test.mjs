import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-oct12-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf('"slug": "ap-ach-return-code-handoff-research"');
const end = source.indexOf('"slug": "ap-supplier-site-hierarchy-research"', start);
assert.ok(start >= 0 && end > start, 'ACH return-code research record boundaries must exist in order');
const record = source.slice(start, end);

assert.match(record, /"modified": "2026-10-12"/, 'the changed research record must retain its current modification date');
assert.match(record, /"heading": "Prepare returned-payment evidence for owner review"/, 'the route must expose its reader-facing next-step marker');
assert.match(record, /"href": "\/services\/payment-run-preparation"/, 'the handoff must use the matching existing service');
assert.match(record, /Treasury, banking, and vendor-master owners decide any bank-detail change, replacement payment, exception, or release\./, 'the ownership boundary must remain explicit');
assert.doesNotMatch(record, /support specialist can [^.]*release/i, 'the support specialist must not receive payment-release authority');
assert.doesNotMatch(record, /"href": "\/contact-us"/, 'the selected route must replace its generic contact handoff');
assert.match(renderer, /\{p\.serviceHandoff&&<section className="plan-block article-block">/, 'the shared renderer must render the data-owned handoff');

console.log('ACH return-code payment-run handoff source contract passed');