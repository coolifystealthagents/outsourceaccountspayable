import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-aug11-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

const record = source.slice(source.indexOf("{...base('ap-vendor-w9-follow-up-research'"), source.indexOf("base('ap-access-review-evidence-research'"));
assert.match(record, /ap-vendor-w9-follow-up-research/, 'the selected W-9 research record must remain present');
assert.match(record, /modified:'2026-10-18'/, 'the W-9 research record must refresh its modified date');
assert.match(record, /heading:'Collect the approved tax form before owner review'/, 'the route must expose its reader-facing next-step marker');
assert.equal((record.match(/href:'\/services\/tax-document-collection'/g) || []).length, 1, 'the matching service must appear once as the contextual next action');
assert.match(record, /A Philippines-based AP support specialist can request the approved form, log its receipt or absence, and route conflicting details\./, 'the permitted preparation work must be explicit');
assert.match(record, /Your tax or vendor-master owner decides tax treatment, legal identity, vendor changes, and payment eligibility\./, 'the owner decision boundary must remain explicit');
assert.doesNotMatch(record, /support specialist can [^.]*?(?:decide|change|release)/i, 'the support role must not receive protected authority');
assert.match(renderer, /\{p\.serviceHandoff&&<section className="plan-block article-block">/, 'the shared renderer must render the data-owned handoff');

console.log('vendor W-9 tax-document handoff source contract passed');