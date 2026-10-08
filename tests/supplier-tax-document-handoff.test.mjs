import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-sep28-supplier-tax-id.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

assert.match(source, /slug:'supplier-tax-id-collision-review-research'/, 'the selected research record must remain present');
assert.match(source, /modified:'2026-10-08'/, 'the changed research record must refresh its modified date');
assert.match(source, /heading:'Prepare tax-document evidence for owner review'/, 'the route must expose its reader-facing next-step marker');
assert.equal((source.match(/href:'\/services\/tax-document-collection'/g) || []).length, 1, 'the matching service must appear once as the contextual next action');
assert.match(source, /A Philippines-based AP support specialist can request approved forms through the company channel, protect the record, and log a missing or conflicting detail\./, 'the permitted preparation work must be explicit');
assert.match(source, /Your tax or vendor-master owner decides tax treatment, legal identity, vendor changes, and payment eligibility\./, 'the ownership boundary must remain explicit');
assert.doesNotMatch(source, /support specialist can [^.]*?(?:decide|change|release)/i, 'the support role must not receive protected authority');
assert.match(renderer, /\{p\.serviceHandoff&&<section className="plan-block article-block">/, 'the shared renderer must render the data-owned handoff');
assert.match(renderer, /publishedTime:p\.published,.+p\.modified.+modifiedTime:p\.modified/, 'research metadata must expose a truthful optional modification date to Open Graph');

console.log('supplier tax-document handoff source contract passed');
