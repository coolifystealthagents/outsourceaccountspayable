import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const read = (path) => readFileSync(join(root, path), 'utf8');
const walk = (dir) => readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
  const path = join(dir, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const components = read('app/components.tsx');
const css = read('app/globals.css');
const contact = read('app/contact-us/page.tsx');
const reviews = read('app/booking-components.tsx');
const serviceContent = read('app/service-content.ts');
const servicePage = read('app/services/[slug]/page.tsx');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const editorial = read('app/editorial-layout.tsx');
const config = read('next.config.mjs');
const form = read('app/contact-us/StandardContactForm.tsx');
const leadRoute = read('app/api/contact/route.ts');
const middleware = read('middleware.ts');
const layout = read('app/layout.tsx');
const sitemap = read('app/sitemap.xml/route.ts');
const home = read('app/page.tsx');

assert.match(css, /\.nav\{position:sticky;top:0\}/, 'header must remain sticky');
const primaryNav = [...components.matchAll(/<nav className="links fleet-links"[\s\S]*?<\/nav>/g)].flatMap(([nav]) => [...nav.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].map(([, href, label]) => [href, label]));
assert.deepEqual(primaryNav, [['/', 'Home'], ['/services', 'Services'], ['/contact-us', 'Contact Us']], 'primary navigation must contain exactly Home, Services, and Contact Us');
assert.ok((components.match(/<ParentBrandMark\/>/g) || []).length >= 2, 'official parent attribution must appear in header and footer');
assert.ok(existsSync(join(root, 'public/brand/stealth-agents-logo.png')), 'official parent logo is missing');
assert.ok(existsSync(join(root, 'public/brand/stealth-agents-team-bacolod.jpg')), 'official team image is missing');

const testimonialRecords = [...reviews.matchAll(/\{ name: '([^']+)', role: '([^']+)', quote: '([^']+)' \}/g)];
assert.equal(testimonialRecords.length, 10, 'exactly ten approved review records are required');
assert.equal(new Set(testimonialRecords.map((match) => `${match[1]}|${match[3]}`)).size, 10, 'all reviews must be unique');
assert.doesNotMatch(reviews, /Play reviews|Pause reviews|previous|pagination|scrubber/i, 'review marquee must not expose controls');
assert.match(css, /animation:v3-review-marquee/, 'review rail must move horizontally');
assert.match(css, /prefers-reduced-motion:reduce/, 'review rail must respect reduced motion');
assert.match(contact, /Official team, Bacolod/, 'official team plate is missing');
assert.ok(contact.indexOf('tc-official-team') > contact.indexOf('tc-hero'), 'official team must follow the contact first fold');

assert.equal((serviceContent.match(/^\s+slug\s*:\s*'/gm) || []).length, 12, 'all twelve canonical services require detailed content');
for (const field of ['outcomes', 'deliverables', 'workflow', 'boundaries', 'faqs', 'related']) assert.match(serviceContent, new RegExp(`\\b${field}:`), `service content missing ${field}`);
assert.match(servicePage, /FAQPage/, 'service FAQ schema is missing');
assert.doesNotMatch(home, /className="service-number"|<span>0[1-9]/, 'commercial pages must not use decorative numbering');
assert.doesNotMatch(read('app/research/page.tsx'), /<strong>0[1-9]<\/strong>/, 'research hero must not use decorative numbering');

assert.match(blog, /EditorialLayout/, 'blog details need editorial layout');
assert.match(research, /EditorialLayout/, 'research details need editorial layout');
assert.match(editorial, /aria-current=\{activeId === item\.id \? 'location'/, 'TOC must expose active-section state');
assert.match(css, /\.editorial-sidebar\{position:sticky/, 'desktop editorial sidebar must remain sticky');
assert.match(css, /\.editorial-toc-mobile\{display:block/, 'mobile editorial TOC fallback is missing');

assert.match(form, /window\.location\.assign\("\/thank-you"\)/, 'successful contact route is wrong');
assert.match(form, /role="alert"/, 'form errors must be announced');
assert.match(leadRoute, /readBoundedBody/, 'lead API must bound request bodies');
assert.match(leadRoute, /https:\/\/outsourceaccountspayable\.com/, 'canonical origin is not allowlisted');
assert.doesNotMatch(leadRoute, /outsourcedaccountmanagement\.com|x-forwarded-host/, 'lead API must not trust unrelated or proxy-derived origins');
assert.ok(existsSync(join(root, 'app/thanks-whats-next/page.tsx')), 'booking confirmation route is missing');
assert.match(read('app/thank-you/page.tsx'), /go\.oncehub\.com\/StealthAgentsTeam/, 'OnceHub scheduler URL changed');
assert.match(layout, /funnel_booking_confirmed/, 'booking confirmation analytics step is missing');

for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'X-Frame-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.match(config, new RegExp(header), `missing ${header}`);
assert.match(config, /source:'\/contact'.*destination:'\/contact-us'.*permanent:true/s, 'contact redirect is missing');
assert.match(middleware, /decodeURIComponent/, 'malformed service URLs must be handled safely');
assert.match(middleware, /NextResponse\.redirect\([^)]*,\s*308\)/, 'canonical host and protocol redirects must be permanent');
assert.doesNotMatch(layout, /alternates:\s*\{\s*canonical:\s*['"]\//, 'root layout must not force homepage canonical on every route');
assert.ok(existsSync(join(root, 'app/about/page.tsx')), 'About route is missing');
assert.match(sitemap, /'\/about'/, 'About route is missing from the sitemap');

const sourceFiles = [...walk('app'), ...walk('content')].filter((path) => /\.(?:ts|tsx|json|md|css)$/.test(path));
const missingAssets = [];
for (const path of sourceFiles) {
  const source = read(path);
  for (const match of source.matchAll(/["'`](\/[^"'`?#$]+\.(?:png|jpe?g|webp|svg|avif))(?:\?[^"'`]*)?["'`]/gi)) {
    if (!existsSync(join(root, 'public', match[1].slice(1)))) missingAssets.push(`${path}: ${match[1]}`);
  }
  for (const [tag] of source.matchAll(/<img\b[^>]*>/gs)) assert.match(tag, /\balt=\{?(["'`]).+?\1\}?/s, `${path} contains an image without descriptive alt text`);
}
assert.deepEqual(missingAssets, [], `missing local image assets:\n${missingAssets.join('\n')}`);

console.log('V3 release contracts passed');
