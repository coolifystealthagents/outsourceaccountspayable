import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-sep9-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

const start = source.indexOf("{...make('ap-invoice-hold-duration-research'");
const end = source.indexOf("make('ap-remittance-delivery-evidence-research'", start);
assert.ok(start >= 0 && end > start, 'invoice-hold research record boundaries must exist in order');
const record = source.slice(start, end);

assert.match(record, /modified:'2026-10-23'/, 'the changed research record must refresh its modified date');
assert.match(record, /heading:'Prepare an aging review your finance owner can use'/, 'the route must expose its reader-facing next-step marker');
assert.equal((record.match(/href:'\/services\/aging-report-preparation'/g) || []).length, 1, 'aging report preparation must appear once as the contextual next action');
assert.match(record, /A Philippines-based AP support specialist can sort hold reasons, attach source dates, and prepare an owner action list\./, 'the permitted preparation work must be explicit');
assert.match(record, /Your finance owner decides payment priority, write-offs, reserves, and any release\./, 'the finance-owner boundary must remain explicit');
assert.doesNotMatch(record, /support specialist can (?:decide|approve|change|release)\b/i, 'the support role must not receive protected authority');
assert.match(renderer, /publishedTime:p\.published,.+p\.modified.+modifiedTime:p\.modified/, 'research metadata must expose the selected record modification date to Open Graph');
assert.match(renderer, /datePublished:p\.published,.+p\.modified.+dateModified:p\.modified/, 'research schema must expose the selected record modification date');

console.log('invoice-hold aging-report handoff source contract passed');
