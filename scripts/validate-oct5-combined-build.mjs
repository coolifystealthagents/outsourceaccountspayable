import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import ts from 'typescript';

const cache=new Map();
const runTs=(file)=>{const target=path.resolve(file);if(cache.has(target))return cache.get(target).exports;const module={exports:{}};cache.set(target,module);const source=fs.readFileSync(target,'utf8');const javascript=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;vm.runInNewContext(javascript,{module,exports:module.exports,require:(specifier)=>specifier.startsWith('.')?runTs(path.resolve(path.dirname(target),`${specifier}.ts`)):(()=>{throw new Error(`unexpected import ${specifier}`)})()});return module.exports};
const blog=runTs('app/blog-oct5-batch.ts');
const research=runTs('app/research-oct5-batch.ts');
const items=[...blog.oct5BlogPosts.map((post)=>({...post,family:'blog',detail:blog.oct5BlogDetails[post.slug],paragraphs:blog.oct5BlogDetails[post.slug].sections.flatMap((section)=>section.paragraphs),links:blog.oct5BlogDetails[post.slug].bodyLinks})),...research.oct5ResearchBatch.map((post)=>({...post,family:'research',detail:post,paragraphs:post.body,links:post.internalLinks}))];
if(blog.oct5BlogPosts.length!==12||research.oct5ResearchBatch.length!==5||items.length!==17)throw new Error(`combined count ${blog.oct5BlogPosts.length}+${research.oct5ResearchBatch.length}`);
const decode=(value)=>value.replace(/<[^>]*>/g,' ').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const indexes={blog:fs.readFileSync('.next/server/app/blog.html','utf8'),research:fs.readFileSync('.next/server/app/research.html','utf8')};
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
const report=[];
for(const item of items){
  const html=fs.readFileSync(`.next/server/app/${item.family}/${item.slug}.html`,'utf8');const text=decode(html);const url=`https://outsourceaccountspayable.com/${item.family}/${item.slug}`;
  if(!text.includes(item.title))throw new Error(`full title missing ${item.slug}`);
  if(!html.includes(`rel="canonical" href="${url}"`))throw new Error(`canonical missing ${item.slug}`);
  if(!html.includes('"datePublished":"2026-10-06"')||!text.includes('October 6, 2026'))throw new Error(`date mismatch ${item.slug}`);
  if(html.includes('"dateModified"'))throw new Error(`untruthful dateModified ${item.slug}`);
  for(const paragraph of item.paragraphs)if(!text.includes(decode(paragraph)))throw new Error(`source paragraph missing from render ${item.slug}`);
  for(const link of item.links)if(!html.includes(`href="${link.href}"`))throw new Error(`contextual link missing ${item.slug} ${link.href}`);
  const image=item.detail.thumbnail,asset=`public${image}`,bytes=fs.readFileSync(asset);if(!html.includes(image))throw new Error(`render image missing ${item.slug}`);if(!bytes.subarray(0,500).toString('utf8').includes('<svg'))throw new Error(`image signature/decode failed ${item.slug}`);
  if(!indexes[item.family].includes(`/${item.family}/${item.slug}`)||!sitemap.includes(`<loc>${url}</loc>`))throw new Error(`index or sitemap missing ${item.slug}`);
  report.push({family:item.family,slug:item.slug,paragraphs:item.paragraphs.length,renderHash:crypto.createHash('sha256').update(text).digest('hex'),image,mime:'image/svg+xml',signature:'svg',links:item.links.map((link)=>link.href)});
}
console.log(JSON.stringify({result:'PASS',publicationDate:'2026-10-06',timezone:'UTC',blogCount:12,researchCount:5,combinedCount:17,checks:['full rendered source paragraphs','render hash','full title','canonical','visible and structured publication date','no untruthful dateModified','rendered image','image MIME/signature/decode','contextual links','family index','sitemap'],routes:report},null,2));
