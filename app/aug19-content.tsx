import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header, Footer, CTA } from './components';
import { EditorialLayout } from './editorial-layout';
import { seoTitle } from './lib/content-contracts';
import meta from './aug19-meta.json';
const SITE='https://outsourceaccountspayable.com';
type Family='blog'|'research';
type Item={family:Family,title:string,description:string,hero:string};
function item(slug:string):Item{return (meta as Record<string,Item>)[slug]}
function source(family:Family,slug:string){const raw=fs.readFileSync(path.join(process.cwd(),'content',family,slug+'.md'),'utf8');return raw.replace(/^---[\s\S]*?---\s*/,'').replace(/^#[^\n]+\n+/,'').replace(/^\*August 19, 2026\*\s*/,'')}
const headingId=(value:string)=>value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function inlineLinks(text:string,key:string){const nodes:ReactNode[]=[];const pattern=/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;let start=0;for(const match of text.matchAll(pattern)){const index=match.index??0;if(index>start)nodes.push(text.slice(start,index));nodes.push(<a key={`${key}-${index}`} href={match[2]} target="_blank" rel="noopener noreferrer">{match[1]}</a>);start=index+match[0].length}if(start<text.length)nodes.push(text.slice(start));return nodes}
function blocks(text:string){return text.split(/\n\n+/).filter(Boolean).map((part,i)=>{if(part.startsWith('## ')){const heading=part.slice(3);return <h2 id={headingId(heading)} key={i}>{heading}</h2>}if(part.startsWith('- '))return <ul key={i}>{part.split('\n').map((x,j)=><li key={j}>{inlineLinks(x.replace(/^- /,''),`${i}-${j}`)}</li>)}</ul>;return <p key={i}>{inlineLinks(part,String(i))}</p>})}
export function getAug19Metadata(family:Family,slug:string):Metadata{const x=item(slug);return {title:seoTitle(x.title),description:x.description,alternates:{canonical:`/${family}/${slug}`},openGraph:{type:'article',title:x.title,description:x.description,url:`${SITE}/${family}/${slug}`,publishedTime:'2026-08-19',images:[{url:x.hero,alt:x.title}]},twitter:{card:'summary_large_image',title:x.title,description:x.description,images:[x.hero]}}}
export function renderAug19Article(family:Family,slug:string){const x=item(slug);const content=source(family,slug);const toc=[...content.matchAll(/^## (.+)$/gm)].map(match=>({id:headingId(match[1]),label:match[1]}));const related=[{href:family==='research'?'/research':'/blog',label:`Explore the ${family} library`},{href:'/services',label:'Review accounts payable services'}];const schema={'@context':'https://schema.org','@type':'Article',headline:x.title,description:x.description,datePublished:'2026-08-19',dateModified:'2026-08-19',mainEntityOfPage:`${SITE}/${family}/${slug}`,image:`${SITE}${x.hero}`,author:{'@type':'Organization',name:'Outsource Accounts Payable'}};return <><Header/><main className="article-shell" id="main-content" tabIndex={-1}><article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><p className="eyebrow">{family==='research'?'Research':'Blog'}</p><h1>{x.title}</h1><p className="lead">{x.description}</p><img className="hero-img" src={x.hero} alt={`${x.title} editorial illustration`} width="1536" height="1024"/><p><em>Published August 19, 2026 by Outsource Accounts Payable.</em></p><EditorialLayout items={toc} related={related}><div className="article-body">{blocks(content)}<CTA/></div></EditorialLayout></article></main><Footer/></>}
