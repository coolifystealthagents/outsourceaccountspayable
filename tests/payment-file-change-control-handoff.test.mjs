import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-sep4-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("make('ap-payment-file-change-control-research'");
const end = source.indexOf("make('ap-credit-memo-application-evidence-research'", start);
assert.ok(start >= 0 && end > start, 'payment-file change-control record boundaries must exist in order');
const record = source.slice(start, end);

assert.match(record, /'2026-10-05'/, 'the changed research record must refresh its modified date');
assert.match(record, /heading:'Prepare a controlled payment-run handoff'/, 'the route must expose its reader-facing next-step marker');
assert.match(record, /href:'\/services\/payment-run-preparation'/, 'the handoff must use the matching existing service');
assert.match(record, /Authorized employees keep approval, bank-file release, payment changes, and fund-release decisions\./, 'the ownership boundary must remain explicit');
assert.doesNotMatch(record, /support role can [^.]*release (?:funds|payments)/i, 'the support role must not be given payment-release authority');
assert.match(renderer, /\{p\.serviceHandoff&&<section className="plan-block article-block">/, 'the shared renderer must render the data-owned handoff');
assert.match(renderer, /publishedTime:p\.published,modifiedTime:p\.modified/, 'research metadata must expose the record freshness dates to Open Graph');

console.log('payment-file change-control handoff source contract passed');