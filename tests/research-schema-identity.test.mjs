import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const page = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

assert.match(
  page,
  /const organization=\{'@type':'Organization',name:site\.brand,url:`https:\/\/\$\{site\.domain\.toLowerCase\(\)\}`\};/,
  'research articles must use the site Organization identity with its canonical URL',
);
assert.match(
  page,
  /author:organization,publisher:organization/,
  'research Article JSON-LD must identify the on-site Organization as both author and publisher',
);

console.log('research Article organization identity contract passed');
