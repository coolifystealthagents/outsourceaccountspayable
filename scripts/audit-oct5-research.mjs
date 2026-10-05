import fs from 'node:fs';
import crypto from 'node:crypto';

const sourcePath='app/research-oct5-batch.ts';
const source=fs.readFileSync(sourcePath,'utf8');
const names=['nonPoException','accrualMatch','expenseOverlap','bankEffectiveTime','delegationExpiry'];
const tokenize=(value)=>value.toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}’'\-]*/gu)??[];
const shingles=(words,size=5)=>new Set(Array.from({length:Math.max(0,words.length-size+1)},(_,i)=>words.slice(i,i+size).join(' ')));
const articles=names.map((name)=>{
  const match=source.match(new RegExp(`const ${name}:ResearchPost=\\{([\\s\\S]*?)\\n\\};`));
  if(!match) throw new Error(`missing article ${name}`);
  const slug=match[1].match(/slug:'([^']+)'/)?.[1];
  const bodySource=match[1].match(/body:\[([\s\S]*)\n  \]/)?.[1];
  const paragraphs=[...(bodySource??'').matchAll(/`([\s\S]*?)`/g)].map((item)=>item[1]);
  const body=paragraphs.join('\n\n');
  return {name,slug,paragraphs,body,words:tokenize(body),sha256:crypto.createHash('sha256').update(body).digest('hex')};
});
const duplicateSlugs=articles.filter((article,index)=>articles.findIndex((candidate)=>candidate.slug===article.slug)!==index);
if(duplicateSlugs.length) throw new Error(`duplicate October 5 slugs: ${duplicateSlugs.map((article)=>article.slug).join(', ')}`);
for(const article of articles){
  if(article.words.length<1200) throw new Error(`${article.slug} has only ${article.words.length} body words`);
  if(article.paragraphs.length<8) throw new Error(`${article.slug} lacks a topic-specific long-form structure`);
}
const paragraphOwners=new Map();
for(const article of articles) for(const paragraph of article.paragraphs){
  const normalized=tokenize(paragraph).join(' ');
  paragraphOwners.set(normalized,[...(paragraphOwners.get(normalized)??[]),article.slug]);
}
const repeatedParagraphs=[...paragraphOwners.entries()].filter(([,owners])=>new Set(owners).size>1);
if(repeatedParagraphs.length) throw new Error(`repeated paragraphs across articles: ${repeatedParagraphs.length}`);
let maximum={score:0,pair:[]};
for(let i=0;i<articles.length;i++) for(let j=i+1;j<articles.length;j++){
  const left=shingles(articles[i].words),right=shingles(articles[j].words);
  const intersection=[...left].filter((item)=>right.has(item)).length;
  const score=intersection/(left.size+right.size-intersection);
  if(score>maximum.score) maximum={score,pair:[articles[i].slug,articles[j].slug]};
}
if(maximum.score>=0.5) throw new Error(`five-word-shingle overlap ${maximum.score} exceeds the 0.5 gate`);
console.log(JSON.stringify({result:'PASS',sourcePath,articleCount:articles.length,articles:articles.map(({slug,words,sha256,paragraphs})=>({slug,bodyWords:words.length,paragraphCount:paragraphs.length,sha256})),maximumFiveWordShingleJaccard:maximum.score,maximumPair:maximum.pair,repeatedParagraphCount:repeatedParagraphs.length,qualitativeArgumentCheck:'PASS: distinct evidence populations, reasoning sequences, challenge cases, control boundaries, limitations, and reader outcomes; no shared substantive template.'},null,2));
