import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source=readFileSync(new URL('../app/research-aug18-batch.ts',import.meta.url),'utf8');
const renderer=readFileSync(new URL('../app/research/[slug]/page.tsx',import.meta.url),'utf8');
const start=source.indexOf("{slug:'ap-invoice-queue-aging-cause-research'");
const end=source.indexOf("{slug:'ap-approval-evidence-chain-research'",start);
const record=source.slice(start,end);

assert.ok(start>=0&&end>start,'queue-aging research record boundaries must exist in order');
assert.match(source,/s\.slug==='ap-invoice-queue-aging-cause-research'\?'2026-11-02'/,'the edited research record must refresh its modified date');
assert.match(source,/heading:'Prepare a clear aging report for finance review'/,'the route must expose its reader-facing next-step marker');
assert.equal((source.match(/href:'\/services\/aging-report-preparation'/g)||[]).length,1,'aging report preparation must appear once as the contextual next action');
assert.match(source,/A Philippines-based AP support specialist can sort aging causes, keep source dates visible, and prepare an owner action list\./,'the permitted preparation work must be explicit');
assert.match(source,/Your finance owner decides priorities, exceptions, write-offs, and any payment release\./,'the finance-owner boundary must remain explicit');
assert.match(record,/Cause-based aging of outsourced AP queues/,'the handoff must stay attached to the queue-aging research record');
assert.doesNotMatch(source,/support specialist can (?:decide|approve|change|release)\b/i,'the support role must not receive protected authority');
assert.match(renderer,/publishedTime:p\.published,.+p\.modified.+modifiedTime:p\.modified/,'research metadata must expose the selected record modification date to Open Graph');
assert.match(renderer,/datePublished:p\.published,.+p\.modified.+dateModified:p\.modified/,'research schema must expose the selected record modification date');

console.log('queue-aging report handoff source contract passed');