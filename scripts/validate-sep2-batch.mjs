import fs from 'node:fs';
import crypto from 'node:crypto';

const origin=process.env.VALIDATION_ORIGIN || 'http://127.0.0.1:3000';
const site='https://outsourceaccountspayable.com';
const extract=(file,pattern)=>[...fs.readFileSync(file,'utf8').matchAll(pattern)].map(match=>match[1]);
const blogs=extract('app/blog-sep2-batch.ts',/slug:'([^']+)'/g);
const research=extract('app/research-sep2-batch.ts',/make\('([^']+)'/g);
const blogTitles=extract('app/blog-sep2-batch.ts',/slug:'[^']+',title:'([^']+)'/g);
const researchTitles=extract('app/research-sep2-batch.ts',/make\('[^']+','([^']+)'/g);
if(blogs.length!==12)throw new Error(`expected 12 Blog entries, found ${blogs.length}`);
if(research.length!==5)throw new Error(`expected 5 Research entries, found ${research.length}`);
const routes=[...blogs.map(slug=>({family:'blog',slug})),...research.map(slug=>({family:'research',slug}))];
if(new Set(routes.map(item=>item.slug)).size!==17)throw new Error('duplicate September 2 slug');
if(new Set([...blogTitles,...researchTitles]).size!==17)throw new Error('duplicate September 2 title');
const sources=['app/blog-sep2-batch.ts','app/research-sep2-batch.ts'].map(file=>fs.readFileSync(file,'utf8'));
if(sources.some(source=>!source.includes("const date='2026-09-02'")))throw new Error('source date missing');
const assetPaths=extract('app/research-sep2-batch.ts',/,'(\/research-thumbnails\/[^']+)'/g);
for(const asset of assetPaths)if(!fs.existsSync(`public${asset}`))throw new Error(`unapproved or missing asset ${asset}`);

const [blogIndex,researchIndex,sitemap]=await Promise.all(['/blog','/research','/sitemap.xml'].map(async path=>{
  const response=await fetch(`${origin}${path}`,{redirect:'manual'});
  if(response.status!==200)throw new Error(`${path} returned ${response.status}`);
  return response.text();
}));
const hashes=[];
for(const {family,slug} of routes){
  const path=`/${family}/${slug}`;
  const response=await fetch(`${origin}${path}`,{redirect:'manual'});
  if(response.status!==200)throw new Error(`${path} returned ${response.status}`);
  const html=await response.text();
  const canonical=`${site}${path}`;
  if(!html.includes(`<link rel="canonical" href="${canonical}"`))throw new Error(`${path} is not self-canonical`);
  if(!html.includes('September 2, 2026'))throw new Error(`${path} lacks visible reader date`);
  if(!html.includes('"datePublished":"2026-09-02"'))throw new Error(`${path} lacks structured datePublished`);
  const article=html.match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1];
  if(!article)throw new Error(`${path} lacks article body`);
  hashes.push(crypto.createHash('sha256').update(article).digest('hex'));
  const index=family==='blog'?blogIndex:researchIndex;
  if(!index.includes(`href="${path}"`))throw new Error(`${path} missing from ${family} index`);
  if(!sitemap.includes(`<loc>${canonical}</loc>`))throw new Error(`${path} missing from sitemap`);
}
if(new Set(hashes).size!==17)throw new Error('rendered article body hashes are not unique');
console.log(`PASS: ${blogs.length} Blog + ${research.length} Research; HTTP 200, self-canonical, visible and structured date, index, sitemap, approved assets, and ${hashes.length} unique rendered body hashes verified.`);
