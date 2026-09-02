import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-aug18-batch.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const recordStart = source.indexOf("modified:s.slug==='ap-invoice-source-completeness-research'");

assert.ok(recordStart >= 0, 'source-completeness route contract is missing');
const record = source.slice(recordStart, recordStart + 1000);
assert.match(record, /modified:s\.slug==='ap-invoice-source-completeness-research'\?'2026-09-02'/, 'route must refresh its modified date');
assert.match(record, /heading:'Set up invoice data capture for review'/, 'route must retain the reader-facing handoff heading');
assert.match(record, /href:'\/services\/invoice-data-capture'/, 'route must use the confirmed invoice-data-capture destination');
assert.match(record, /finance owner still approves the invoice, decides coding or vendor changes, and releases payment/i, 'route must retain the finance-owner boundary');
assert.match(renderer, /p\.serviceHandoff&&<section/, 'research renderer must keep data-owned handoffs route-local');

console.log('invoice source-completeness handoff contract passed');