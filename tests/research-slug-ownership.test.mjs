import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const aug14 = readFileSync(new URL('../app/research-aug14-batch.ts', import.meta.url), 'utf8');
const sep7 = readFileSync(new URL('../app/research-sep7-batch.ts', import.meta.url), 'utf8');
const data = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = 'ap-invoice-receipt-date-evidence-research';

assert.doesNotMatch(aug14, new RegExp(`(?:slug:|make\\(')${slug}`), 'the retired August 14 duplicate must stay absent');
assert.match(sep7, new RegExp(`make\\('${slug}'`), 'the September 7 record must remain the route owner');
assert.match(data, /sep7ResearchPostBySlug\.get\(slug\).*?researchPosts\.find/s, 'the route resolver must consult the September 7 owner before the generic fallback');

console.log('research slug ownership contract passed');