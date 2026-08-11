import fs from 'node:fs';
import {execFileSync} from 'node:child_process';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/research.json', 'utf8'));
const source = fs.readFileSync('app/research-batch.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const route = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
if (manifest.entries.length < 10) throw new Error('accepted count below minimum');
if (manifest.family !== 'research' || manifest.targetDate !== '2026-08-10') throw new Error('manifest identity');
const seen = new Set();
for (const entry of manifest.entries) {
  if (seen.has(entry.slug)) throw new Error('duplicate slug: ' + entry.slug);
  seen.add(entry.slug);
  if (entry.route !== '/research/' + entry.slug || entry.sourcePath !== 'app/research-batch.ts') throw new Error('family/path mismatch: ' + entry.slug);
  if (entry.provenance !== 'original-aug10-batch' || !/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) throw new Error('provenance: ' + entry.slug);
  const slugMarker = "['" + entry.slug + "',";
  if (!source.includes(slugMarker)) throw new Error('source slug missing: ' + entry.slug);
  if (entry.sourceDateField !== 'published' || entry.sourceDate !== '2026-08-10') throw new Error('source date: ' + entry.slug);
  if (entry.renderedDate !== '2026-08-10' || !entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error('rendered date: ' + entry.slug);
  const builtPath = '.next/server/app/research/' + entry.slug + '.html';
  if (!fs.existsSync(builtPath)) throw new Error('built route missing: ' + entry.slug);
  const built = fs.readFileSync(builtPath, 'utf8');
  if (!built.includes('2026-08-10') || !built.includes('datePublished') || !built.includes('/research/' + entry.slug)) throw new Error('built route date/canonical: ' + entry.slug);
  const parent = execFileSync('git', ['show', entry.introducedByCommit + '^:app/research-batch.ts'], {encoding:'utf8'});
  const introduced = execFileSync('git', ['show', entry.introducedByCommit + ':app/research-batch.ts'], {encoding:'utf8'});
  if (parent.includes(slugMarker) || !introduced.includes(slugMarker)) throw new Error('diff provenance: ' + entry.slug);
}
if (!route.includes('datePublished:p.published') || !route.includes('<time dateTime={p.published}>') || !route.includes('alternates:{canonical:')) throw new Error('article route date/canonical contract missing');
if (!sitemap.includes('researchPosts.map')) throw new Error('research sitemap eligibility missing');
if (!data.includes('researchPosts = [...researchBatch].sort')) throw new Error('research index sort missing');
if (!source.includes("published:index<10?'2026-08-08':index<22?'2026-08-09':'2026-08-10'")) throw new Error('source date mapping missing');
console.log('PASS: ' + manifest.entries.length + ' accepted Research entries; source, rendered-date, canonical, sitemap, index, and per-slug provenance checks passed.');
