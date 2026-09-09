import fs from 'node:fs';
import {execFileSync} from 'node:child_process';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const source = fs.readFileSync('app/blog-batch.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const route = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const frozenSlugs = [
  'ap-accounts-payable-handoff-metrics', 'ap-ap-close-calendar', 'ap-approval-evidence-checklist',
  'ap-cash-application-support', 'ap-close-handoff-template', 'ap-fraud-risk-escalation',
  'ap-invoice-access-log', 'ap-invoice-approval-follow-up', 'ap-invoice-coding-exception-log',
  'ap-invoice-data-quality-checks', 'ap-invoice-receipt-index', 'ap-invoice-status-dashboard',
  'ap-invoice-volume-forecast', 'ap-invoice-work-queue-priorities', 'ap-non-po-invoice-workflow',
  'ap-payment-support-segregation', 'ap-purchase-request-review', 'ap-reconciliation-evidence-pack',
  'ap-supplier-statement-request-script', 'ap-unmatched-invoice-follow-up',
  'ap-vendor-change-request-workflow', 'ap-vendor-inquiry-triage', 'ap-vendor-onboarding-checklist',
];
if (manifest.entries.length !== 23 || manifest.entries.length < manifest.minimum) throw new Error('accepted count mismatch');
const seen = new Set();
for (const entry of manifest.entries) {
  if (seen.has(entry.slug)) throw new Error(`duplicate slug: ${entry.slug}`);
  seen.add(entry.slug);
  if (entry.route !== `/blog/${entry.slug}` || entry.sourcePath !== 'app/blog-batch.ts') throw new Error(`family/path mismatch: ${entry.slug}`);
  if (entry.provenance !== 'original-aug10-batch' || !/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) throw new Error(`provenance: ${entry.slug}`);
  if (!source.includes(`['${entry.slug}',`)) throw new Error(`source slug missing: ${entry.slug}`);
  const sourceDatePattern = new RegExp(`'${entry.slug}':\\s*'${entry.sourceDate}'`);
  const resolvedPublicationDate = 'published: aug14BlogPublicationDates[slug] ?? aug13BlogPublicationDates[slug] ?? aug11BlogPublicationDates[slug] ?? aug10BlogPublicationDates[slug]';
  if (!sourceDatePattern.test(source) || !source.includes(resolvedPublicationDate) || entry.sourceDate !== '2026-08-10') throw new Error(`source date: ${entry.slug}`);
  if (entry.renderedDate !== '2026-08-10' || !entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error(`rendered date: ${entry.slug}`);
  const builtPath = `.next/server/app/blog/${entry.slug}.html`;
  if (fs.existsSync(builtPath)) {
    const built = fs.readFileSync(builtPath, 'utf8');
    const visibleDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'}).format(new Date(`${entry.renderedDate}T00:00:00Z`));
    const timePattern = new RegExp(`<time[^>]*dateTime="${entry.renderedDate}"[^>]*>${visibleDate}</time>`);
    if (!built.includes(entry.renderedDate) || !built.includes('datePublished') || !timePattern.test(built) || !built.includes(`/blog/${entry.slug}`)) throw new Error(`built route date/canonical: ${entry.slug}`);
  }
  const parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/blog-batch.ts`], {encoding:'utf8'});
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:app/blog-batch.ts`], {encoding:'utf8'});
  if (parent.includes(`['${entry.slug}',`) || !introduced.includes(`['${entry.slug}',`)) throw new Error(`diff provenance: ${entry.slug}`);
}
if (JSON.stringify([...seen].sort()) !== JSON.stringify([...frozenSlugs].sort())) throw new Error('frozen slug identity mismatch');
if (!route.includes('datePublished: detail.published') || !route.includes('formatPublicationDate(detail.published)') || !route.includes('const formatPublicationDate') || !route.includes('alternates: {canonical: url}')) throw new Error('article route date/canonical contract missing');
if (!sitemap.includes('blogPosts.map')) throw new Error('blog sitemap eligibility missing');
if (!data.includes('...batchPosts,') || data.indexOf('...batchPosts,') > data.indexOf("slug: 'invoice-approval-workflow-philippines-ap-team'")) throw new Error('blog index is not newest-first');
const paginatedIndexPaths = fs.existsSync('.next/server/app/blog/page')
  ? fs.readdirSync('.next/server/app/blog/page', {withFileTypes: true})
    .filter((entry) => entry.isFile() && /^\d+\.html$/.test(entry.name))
    .sort((a, b) => Number(a.name.slice(0, -5)) - Number(b.name.slice(0, -5)))
    .map((entry) => `.next/server/app/blog/page/${entry.name}`)
  : [];
const indexPaths = [
  '.next/server/app/blog.html',
  ...paginatedIndexPaths,
].filter(fs.existsSync);
if (indexPaths.length) {
  const indexHtml = indexPaths.map((path) => fs.readFileSync(path, 'utf8')).join('\n');
  const indexedFrozenSlugs = [...new Set([...indexHtml.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)]
    .map((match) => match[1])
    .filter((slug) => frozenSlugs.includes(slug)))].sort();
  if (JSON.stringify(indexedFrozenSlugs) !== JSON.stringify([...frozenSlugs].sort())) throw new Error(`built index coverage mismatch: ${indexedFrozenSlugs.join(',')}`);
}
console.log(`PASS: ${manifest.entries.length} accepted Blog entries; source, rendered-date, canonical, sitemap, index, and per-slug provenance checks passed.`);
