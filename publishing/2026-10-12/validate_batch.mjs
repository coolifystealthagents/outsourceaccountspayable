import fs from 'node:fs';
import crypto from 'node:crypto';

const manifest=JSON.parse(fs.readFileSync('publishing/2026-10-12/manifest.json','utf8'));
const blogSource=fs.readFileSync('app/blog-oct12-batch.ts','utf8');
const researchSource=fs.readFileSync('app/research-oct12-batch.ts','utf8');
const blogs=JSON.parse(blogSource.match(/oct12BlogDrafts:Draft\[\]=(\[[\s\S]*\]);\nexport const oct12BlogPosts/)[1]);
const research=JSON.parse(researchSource.match(/oct12ResearchBatch:ResearchPost\[\]=(\[[\s\S]*\]);\n/)[1]);
const errors=[];const check=(v,m)=>{if(!v)errors.push(m)};
const titles=new Set(),slugs=new Set(),hashes=new Set(),paragraphs=new Map();
const normalize=x=>x.replace(/\s+/g,' ').trim().toLowerCase().replace(/[^a-z0-9]+/g,' ');
const addParagraph=(text,owner)=>{const n=normalize(text);if(n.length<180)return;if(paragraphs.has(n))errors.push(`duplicate substantive paragraph: ${owner} and ${paragraphs.get(n)}`);else paragraphs.set(n,owner)};

check(blogs.length===12,`Blog count ${blogs.length}`);
check(research.length===5,`Research count ${research.length}`);
check(manifest.counts.blog===12&&manifest.counts.research===5&&manifest.counts.thumbnails===17,'manifest counts');
for(const a of manifest.articles){check(!titles.has(a.title),`duplicate title ${a.title}`);titles.add(a.title);check(!slugs.has(a.slug),`duplicate slug ${a.slug}`);slugs.add(a.slug);check(!/(oct(?:ober)?\s*12|2026-10-12)/i.test(a.title),`date in title ${a.title}`);check(fs.existsSync(a.thumbnailPath),`missing image ${a.slug}`);if(fs.existsSync(a.thumbnailPath)){const b=fs.readFileSync(a.thumbnailPath),h=crypto.createHash('sha256').update(b).digest('hex');check(b.subarray(0,4).toString()==='RIFF'&&b.subarray(8,12).toString()==='WEBP',`not WebP ${a.slug}`);check(!hashes.has(h),`duplicate image ${a.slug}`);hashes.add(h)}}

for(const b of blogs){check(b.detail.published==='2026-10-12'&&b.detail.modified==='2026-10-12',`Blog date ${b.slug}`);check(b.detail.thumbnail===`/oct12-heroes/${b.slug}.webp`,`Blog thumbnail ${b.slug}`);check(b.detail.sections.length===8,`Blog depth ${b.slug}`);check(b.detail.bodyLinks.some(x=>x.href==='/research')&&b.detail.bodyLinks.some(x=>x.href.startsWith('/services/')),`Blog related links ${b.slug}`);const prose=[b.detail.shortAnswer,...b.detail.sections.flatMap(s=>s.paragraphs),...b.detail.faqs.map(f=>f.answer)];check(prose.join(' ').split(/\s+/).length>=1000,`thin Blog ${b.slug}`);for(const p of prose)addParagraph(p,b.slug)}
for(const r of research){check(r.published==='2026-10-12'&&r.modified==='2026-10-12',`Research date ${r.slug}`);check(r.thumbnail===`/oct12-heroes/${r.slug}.webp`,`Research thumbnail ${r.slug}`);check(r.body.length===14,`Research depth ${r.slug}`);check(r.citations.length===10&&r.citations.every(c=>/^https:\/\//.test(c.href)),`Research sources ${r.slug}`);check(r.internalLinks.some(x=>x.href==='/research')&&r.internalLinks.some(x=>x.href==='/blog'),`Research related links ${r.slug}`);check(r.body.join(' ').split(/\s+/).length>=1000,`thin Research ${r.slug}`);for(const p of r.body)addParagraph(p,r.slug)}

const data=fs.readFileSync('app/data.ts','utf8'),blogRoute=fs.readFileSync('app/blog/[slug]/page.tsx','utf8'),researchRoute=fs.readFileSync('app/research/[slug]/page.tsx','utf8'),blogIndex=fs.readFileSync('app/blog/page.tsx','utf8'),researchIndex=fs.readFileSync('app/research/page.tsx','utf8'),header=fs.readFileSync('app/components.tsx','utf8'),sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
check(data.includes('...oct12BlogPosts')&&data.includes('...oct12BlogDetails'),'Blog registry');check(data.includes('...oct12ResearchBatch')&&data.includes('oct12ResearchPostBySlug'),'Research registry');check((data.match(/export const researchPosts/g)||[]).length===1,'duplicate researchPosts export remains');check((data.match(/export const getResearchPostBySlug/g)||[]).length===1,'duplicate research resolver export remains');check(blogRoute.includes('getBlogDetailBySlug')&&blogRoute.includes('detail.thumbnail'),'Blog route');check(researchRoute.includes('getResearchPostBySlug')&&researchRoute.includes('p.thumbnail'),'Research route');check(blogRoute.includes('formatPublicationDate')&&researchRoute.includes('formatReaderDate'),'visible dates');check(blogIndex.includes('blogPosts')&&researchIndex.includes('researchPosts'),'separate indexes');check(header.includes('/blog')&&header.includes('/research'),'navigation/sidebar');check(sitemap.includes('blogPosts')&&sitemap.includes('researchPosts'),'sitemap');check(hashes.size===17,`image count ${hashes.size}`);

for(const name of fs.readdirSync('app')){if(!/\.(?:ts|tsx)$/.test(name)||name.includes('oct12'))continue;const raw=fs.readFileSync(`app/${name}`,'utf8');for(const [paragraph,owner] of paragraphs)if(raw.toLowerCase().replace(/\s+/g,' ').replace(/[^a-z0-9]+/g,' ').includes(paragraph))errors.push(`existing substantive duplicate: app/${name} and ${owner}`)}
for(const dir of ['content/blog','content/research'])for(const name of fs.readdirSync(dir)){const raw=fs.readFileSync(`${dir}/${name}`,'utf8');for(const part of raw.split(/\n\s*\n/)){const n=normalize(part);if(n.length>=180&&paragraphs.has(n))errors.push(`existing substantive duplicate: ${dir}/${name} and ${paragraphs.get(n)}`)}}

const thumbgen=fs.readFileSync('publishing/2026-10-12/generate_thumbnails.py','utf8');check(thumbgen.includes("a['title']")&&thumbgen.includes("(1200,630)"),'exact-title/dimension thumbnail generator');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log('PASS: 12 Blog + 5 Research, exact dates, distinct registries/routes/indexes/navigation/sitemap, related content, 10-source Research depth, unique prose, and 17 exact-title WebP thumbnails.');
