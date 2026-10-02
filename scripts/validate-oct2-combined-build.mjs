import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const runTs=(path,imports={})=>{
  const source=fs.readFileSync(path,'utf8');
  const javascript=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
  const module={exports:{}};
  vm.runInNewContext(javascript,{module,exports:module.exports,require:(specifier)=>imports[specifier]??(()=>{throw new Error(`unexpected import ${specifier}`);})()});
  return module.exports;
};
const remaining=runTs('app/blog-oct2-remaining.ts');
const blog=runTs('app/blog-oct2-batch.ts',{'./blog-oct2-remaining':remaining});
const research=runTs('app/research-oct2-batch.ts');
const blogItems=blog.oct2BlogPosts.map((post)=>({...post,family:'blog',detail:blog.oct2BlogDetails[post.slug]}));
const researchItems=research.oct2ResearchBatch.map((post)=>({...post,family:'research',detail:post}));
const items=[...blogItems,...researchItems];
if(blogItems.length!==12||researchItems.length!==5||items.length!==17) throw new Error(`combined count ${blogItems.length}+${researchItems.length}`);
const indexHtml={blog:fs.readFileSync('.next/server/app/blog.html','utf8'),research:fs.readFileSync('.next/server/app/research.html','utf8')};
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
for(const item of items){
  const html=fs.readFileSync(`.next/server/app/${item.family}/${item.slug}.html`,'utf8');
  const url=`https://outsourceaccountspayable.com/${item.family}/${item.slug}`;
  if(!html.includes(item.title)) throw new Error(`title missing ${item.slug}`);
  if(!html.includes(`rel="canonical" href="${url}"`)) throw new Error(`canonical missing ${item.slug}`);
  if(!html.includes('"datePublished":"2026-10-02"')) throw new Error(`datePublished missing ${item.slug}`);
  if(!html.includes('October 2, 2026')) throw new Error(`visible date missing ${item.slug}`);
  const image=item.detail.thumbnail;
  if(!image||!html.includes(image)) throw new Error(`rendered image missing ${item.slug}`);
  if(!fs.existsSync(`public${image}`)) throw new Error(`image asset missing ${item.slug}: ${image}`);
  if(!indexHtml[item.family].includes(`/${item.family}/${item.slug}`)) throw new Error(`index missing ${item.slug}`);
  if(!sitemap.includes(`<loc>${url}</loc>`)) throw new Error(`sitemap missing ${item.slug}`);
}
console.log(JSON.stringify({result:'PASS',publicationDate:'2026-10-02',timezone:'UTC',blogCount:blogItems.length,researchCount:researchItems.length,combinedCount:items.length,checks:['title','canonical','visible date','datePublished','rendered image','image asset','family index','sitemap']},null,2));
