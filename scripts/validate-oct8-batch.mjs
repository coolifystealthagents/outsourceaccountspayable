import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import {execFileSync} from 'node:child_process';

const root=process.cwd();
const load=(relative)=>{
  const source=fs.readFileSync(path.join(root,relative),'utf8');
  const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const module={exports:{}};
  vm.runInNewContext(`(function(exports,module){${js}\n})(module.exports,module)`,{module,console});
  return module.exports;
};
const assert=(condition,message)=>{if(!condition)throw new Error(message)};
const words=(value)=>value.trim().split(/\s+/).filter(Boolean).length;
const trackedAsset=(url)=>{try{execFileSync('git',['cat-file','-e',`HEAD:public/${url.replace(/^\//,'')}`],{cwd:root,stdio:'ignore'});return true}catch{return false}};
const blog=load('app/blog-oct8-batch.ts');
const research=load('app/research-oct8-batch.ts');
const blogs=blog.oct8BlogDrafts;
const reports=research.oct8ResearchBatch;
assert(blogs.length===12,`expected 12 Blog articles, got ${blogs.length}`);
assert(reports.length===5,`expected 5 Research articles, got ${reports.length}`);
const slugs=[...blogs.map(p=>p.slug),...reports.map(p=>p.slug)];
assert(new Set(slugs).size===17,'October 8 slugs must be unique');
for(const post of blogs){
  assert(post.detail.published==='2026-10-08',`${post.slug}: incorrect date`);
  const count=words(post.detail.sections.flatMap(s=>s.paragraphs).join(' '));
  assert(count>=1100,`${post.slug}: only ${count} article words`);
  assert(post.detail.sources.length>=2,`${post.slug}: sources missing`);
  assert(fs.existsSync(path.join(root,'public',post.detail.thumbnail.replace(/^\//,'')))||trackedAsset(post.detail.thumbnail),`${post.slug}: missing image`);
}
for(const post of reports){
  assert(post.published==='2026-10-08',`${post.slug}: incorrect date`);
  const count=words(post.body.join(' '));
  assert(count>=1100,`${post.slug}: only ${count} article words`);
  assert(post.citations.length>=3&&post.citations.every(c=>/^https:\/\//.test(c.href)),`${post.slug}: authoritative citations missing`);
  assert(fs.existsSync(path.join(root,'public',post.thumbnail.replace(/^\//,'')))||trackedAsset(post.thumbnail),`${post.slug}: missing image`);
}
const blogManifest=JSON.parse(fs.readFileSync(path.join(root,'.paperclip/daily-content/2026-10-08/blog.json'),'utf8'));
const researchManifest=JSON.parse(fs.readFileSync(path.join(root,'.paperclip/daily-content/2026-10-08/research.json'),'utf8'));
assert(blogManifest.date==='2026-10-08'&&blogManifest.count===12&&blogManifest.articles.length===12,'Blog manifest mismatch');
assert(researchManifest.date==='2026-10-08'&&researchManifest.count===5&&researchManifest.articles.length===5,'Research manifest mismatch');
const data=fs.readFileSync(path.join(root,'app/data.ts'),'utf8');
for(const token of ['...oct8BlogPosts','...oct8BlogDetails','...oct8ResearchBatch','oct8ResearchPostBySlug.get(slug)'])assert(data.includes(token),`registry missing ${token}`);
for(const relative of ['app/blog/page.tsx','app/blog/page/[page]/page.tsx','app/research/page.tsx']){
  const source=fs.readFileSync(path.join(root,relative),'utf8');
  assert(source.includes('<time')&&source.includes('Published '),`${relative}: visible listing date missing`);
}
for(const relative of ['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx']){
  const source=fs.readFileSync(path.join(root,relative),'utf8');
  assert(source.includes('published'),`${relative}: visible detail date missing`);
}
console.log(`October 8 validation passed: Blog ${blogs.length} (min ${Math.min(...blogs.map(p=>words(p.detail.sections.flatMap(s=>s.paragraphs).join(' '))))} words), Research ${reports.length} (min ${Math.min(...reports.map(p=>words(p.body.join(' '))))} words).`);
