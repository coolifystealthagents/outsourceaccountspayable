import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const sourcePath='app/blog-oct2-batch.ts';
const source=fs.readFileSync(sourcePath,'utf8');
const remainingSource=fs.readFileSync('app/blog-oct2-remaining.ts','utf8');
const remainingJavascript=ts.transpileModule(remainingSource,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const remainingModule={exports:{}};
vm.runInNewContext(remainingJavascript,{module:remainingModule,exports:remainingModule.exports,require:()=>{throw new Error('unexpected runtime import in remaining Blog drafts');}});
const javascript=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const module={exports:{}};
vm.runInNewContext(javascript,{module,exports:module.exports,require:(specifier)=>{
  if(specifier==='./blog-oct2-remaining') return remainingModule.exports;
  throw new Error(`unexpected import in Blog draft source: ${specifier}`);
}});
const posts=module.exports.oct2BlogDrafts;
if(!Array.isArray(posts)||posts.length>12) throw new Error(`invalid draft count: ${posts?.length}`);
const tokenize=(value)=>value.toLowerCase().match(/[a-z0-9][a-z0-9'/-]*/g)??[];
const shingles=(value)=>{const words=tokenize(value);return new Set(words.slice(0,-4).map((_,index)=>words.slice(index,index+5).join(' ')));};

const slugs=new Set();
const paragraphOwners=new Map();
const bodies=[];
const shortBodies=[];
for(const post of posts){
  if(slugs.has(post.slug)) throw new Error(`duplicate slug: ${post.slug}`);
  slugs.add(post.slug);
  if(post.detail.published!==null||post.detail.modified!==null) throw new Error(`premature publication metadata: ${post.slug}`);
  const paragraphs=post.detail.sections.flatMap((section)=>section.paragraphs);
  const body=paragraphs.join(' ');
  const bodyWords=tokenize(body).length;
  if(bodyWords<900) shortBodies.push(`${post.slug} has ${bodyWords} body words`);
  for(const paragraph of paragraphs){
    const normalized=tokenize(paragraph).join(' ');
    paragraphOwners.set(normalized,[...(paragraphOwners.get(normalized)??[]),post.slug]);
  }
  bodies.push({slug:post.slug,body,bodyWords,shingles:shingles(body)});
}
if(shortBodies.length) throw new Error(shortBodies.join('; '));
const repeatedParagraphs=[...paragraphOwners.values()].filter((owners)=>new Set(owners).size>1);
if(repeatedParagraphs.length) throw new Error(`repeated paragraphs: ${repeatedParagraphs.length}`);
let maximum={score:0,pair:[]};
for(let i=0;i<bodies.length;i+=1) for(let j=i+1;j<bodies.length;j+=1){
  let intersection=0;
  for(const shingle of bodies[i].shingles) if(bodies[j].shingles.has(shingle)) intersection+=1;
  const score=intersection/(bodies[i].shingles.size+bodies[j].shingles.size-intersection);
  if(score>maximum.score) maximum={score,pair:[bodies[i].slug,bodies[j].slug]};
}
if(maximum.score>=0.5) throw new Error(`five-word-shingle overlap exceeds gate: ${maximum.score}`);
const forbidden=/[—–]|\b(?:additionally|crucial|pivotal|delve|showcase|underscores?|landscape|vibrant|tapestry)\b|let's (?:dive|explore)|not just|not only/i;
for(const {slug,body} of bodies) if(forbidden.test(body)) throw new Error(`humanizer phrase in ${slug}: ${body.match(forbidden)?.[0]}`);

console.log(JSON.stringify({
  result:'PASS',
  draftCount:posts.length,
  requiredCount:12,
  bodyWordCounts:Object.fromEntries(bodies.map(({slug,bodyWords})=>[slug,bodyWords])),
  maximumPairwiseFiveWordShingleJaccard:maximum,
  repeatedParagraphCount:repeatedParagraphs.length,
  publicationMetadata:'all null',
  humanizerPatternScan:'PASS'
},null,2));
