import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source=readFileSync(new URL('../app/research-sep7-batch.ts',import.meta.url),'utf8');
const renderer=readFileSync(new URL('../app/research/[slug]/page.tsx',import.meta.url),'utf8');
const start=source.indexOf("make('ap-invoice-receipt-date-evidence-research'");
const end=source.indexOf("make('ap-supplier-master-duplicate-detection-research'",start);
assert.ok(start>=0&&end>start,'receipt-date research record boundaries must exist in order');
const record=source.slice(start,end);

assert.match(record,/modified:'2026-09-23'/,'the changed research record must refresh its modified date');
assert.match(record,/heading:'Prepare receipt-date evidence for month-end close'/,'the route must expose its reader-facing next-step marker');
assert.match(record,/href:'\/services\/month-end-ap-close-support'/,'the handoff must use the matching existing service');
assert.match(record,/The finance owner decides cutoff, accounting treatment, approval, and posting/,'the finance-owner boundary must remain explicit');
assert.doesNotMatch(record,/support role can [^.]*decide cutoff/i,'the support role must not receive accounting authority');
assert.match(renderer,/publishedTime:p\.published,modifiedTime:p\.modified/,'research metadata must expose the record freshness dates to Open Graph');

console.log('receipt-date close-support handoff source contract passed');