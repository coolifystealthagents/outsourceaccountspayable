import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-sep8-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("make('ap-payment-file-chain-of-custody-research'");
const end = source.indexOf("make('ap-work-queue-continuity-research'", start);
assert.ok(start >= 0 && end > start, 'payment-file research record boundaries must exist in order');
const record = source.slice(start, end);

assert.match(record, /'2026-10-03'/, 'the changed research record must refresh its modified date');
assert.match(record, /heading:'Prepare a payment-run evidence handoff'/, 'the route must expose its reader-facing next-step marker');
assert.match(record, /href:'\/services\/payment-run-preparation'/, 'the handoff must use the matching existing service');
assert.match(record, /Authorized employees still approve changes, release funds, and decide how to handle bank responses\./, 'the ownership boundary must remain explicit');
assert.doesNotMatch(record, /support role can [^.]*release funds/i, 'the support role must not be given payment-release authority');
assert.match(renderer, /publishedTime:p\.published,modifiedTime:p\.modified/, 'research metadata must expose the record freshness dates to Open Graph');

console.log('payment-file chain handoff source contract passed');
