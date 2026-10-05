import fs from 'node:fs';

const base=process.argv[2]??'http://127.0.0.1:3000';
const source=fs.readFileSync('app/research-oct5-batch.ts','utf8');
const names=['nonPoException','accrualMatch','expenseOverlap','bankEffectiveTime','delegationExpiry'];
const decode=(value)=>value.replaceAll('&#x27;',"'").replaceAll('&quot;','"').replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)));
const text=(html)=>decode(html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim());
const articles=names.map((name)=>{
  const block=source.match(new RegExp(`const ${name}:ResearchPost=\\{([\\s\\S]*?)\\n\\};`))?.[1];
  if(!block) throw new Error(`missing ${name}`);
  return {
    slug:block.match(/slug:'([^']+)'/)?.[1],title:block.match(/title:'([^']+)'/)?.[1],date:block.match(/published:oct5ResearchPublicationDate/) ? '2026-10-05' : null,
    image:block.match(/thumbnail:'([^']+)'/)?.[1],paragraphs:[...(block.match(/body:\[([\s\S]*)\n  \]/)?.[1]??'').matchAll(/`([\s\S]*?)`/g)].map((m)=>m[1]),
    links:[...block.matchAll(/href:'(\/[^']+)'/g)].map((m)=>m[1])
  };
});
const index=await fetch(`${base}/research`).then((r)=>{if(!r.ok) throw new Error(`index ${r.status}`); return r.text();});
const sitemap=await fetch(`${base}/sitemap.xml`).then((r)=>{if(!r.ok) throw new Error(`sitemap ${r.status}`); return r.text();});
const results=[];
for(const article of articles){
  const url=`${base}/research/${article.slug}`;
  const response=await fetch(url);
  if(!response.ok) throw new Error(`${article.slug} HTTP ${response.status}`);
  const html=await response.text(),rendered=text(html),canonical=`https://outsourceaccountspayable.com/research/${article.slug}`;
  if(!html.includes(`<title>${article.title}`)) throw new Error(`${article.slug} full title missing`);
  if(!html.includes(`<link rel="canonical" href="${canonical}"`)) throw new Error(`${article.slug} canonical missing`);
  if(!html.includes(`"datePublished":"${article.date}"`)) throw new Error(`${article.slug} datePublished missing`);
  if(!article.paragraphs.every((paragraph)=>rendered.includes(paragraph.replace(/\s+/g,' ').trim()))) throw new Error(`${article.slug} body excerpted or altered`);
  if(!index.includes(article.slug)) throw new Error(`${article.slug} absent from index`);
  if(!sitemap.includes(canonical)) throw new Error(`${article.slug} absent from sitemap`);
  for(const link of new Set(article.links)){
    const linked=await fetch(`${base}${link}`);
    if(!linked.ok) throw new Error(`${article.slug} internal link ${link} HTTP ${linked.status}`);
  }
  const asset=await fetch(`${base}${article.image}`),assetBody=await asset.text(),mime=asset.headers.get('content-type')??'';
  if(!asset.ok||!mime.includes('image/svg+xml')||!/^\s*<svg[\s>]/.test(assetBody)) throw new Error(`${article.slug} image response/signature/decode failed`);
  results.push({slug:article.slug,http:response.status,title:'PASS',fullBodyParagraphs:article.paragraphs.length,canonical,datePublished:article.date,index:'PASS',sitemap:'PASS',internalLinks:[...new Set(article.links)].length,image:{path:article.image,http:asset.status,mime,signature:'svg',decode:'PASS'}});
}
console.log(JSON.stringify({result:'PASS',base,articles:results},null,2));
