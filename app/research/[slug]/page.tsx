import {notFound} from 'next/navigation';
import {Header,Footer,CTA} from '../../components';
import {researchPosts,site} from '../../data';
const readerDate=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});const formatReaderDate=(value?:string)=>!value||!/^\d{4}-\d{2}-\d{2}$/.test(value)?value??'':readerDate.format(new Date(`${value}T00:00:00Z`));

export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=researchPosts.find(x=>x.slug===slug);return p?{title:`${p.title} | ${site.brand}`,description:p.excerpt,alternates:{canonical:`/research/${p.slug}`},openGraph:{images:[p.thumbnail]}}:{}}

export default async function ResearchPost({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=researchPosts.find(x=>x.slug===slug); if(!p)notFound();
  const articleUrl=`https://${site.domain.toLowerCase()}/research/${p.slug}`;
  const schema={'@context':'https://schema.org','@type':'Article',headline:p.title,description:p.excerpt,datePublished:p.published,dateModified:p.modified,mainEntityOfPage:articleUrl,image:`https://${site.domain.toLowerCase()}${p.thumbnail}`,author:{'@type':'Organization',name:site.brand},citation:p.citations.map(c=>c.href)};
  return <><Header/><main className="section article-page"><article className="container guide-article"><p className="eyebrow">Research · Published <time dateTime={p.published}>{formatReaderDate(p.published)}</time></p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p><div className="article-meta">Methodology-led research · {p.citations.length} primary sources · Updated <time dateTime={p.modified}>{formatReaderDate(p.modified)}</time></div><img src={p.thumbnail} alt={`${p.title} research illustration`} width="1200" height="630" style={{width:'100%',height:'auto'}}/>
    {p.body.map((x,i)=><section className={i===2?'plan-block article-block':'article-block'} key={x}><h2>{['Methodology','Evidence and scope','Key Stats','Research-to-practice','Implementation','Key Takeaways'][i]||'Findings'}</h2><p>{x}</p>{i===2&&<div className="number-grid"><div className="number-card"><strong>10</strong><span>primary sources reviewed</span></div><div className="number-card"><strong>3</strong><span>control layers</span></div><div className="number-card"><strong>1</strong><span>owner per exception</span></div></div>}</section>)}
    <section className="article-block sources-block"><h2>Sources</h2><p>These primary sources support the control principles and evidence boundaries in this report.</p><ol>{p.citations.map(c=><li key={c.href}><a href={c.href} target="_blank" rel="noreferrer">{c.label}</a></li>)}</ol></section>
    <section className="article-block faq-block"><h2>FAQs</h2>{[{q:'Are the planning numbers benchmarks?',a:'No. They describe a testable workflow shape and are not promises, market averages, or production targets.'},{q:'What should an outsourced AP assistant own?',a:'Repeatable preparation, documentation, status tracking, and follow-up within least-privilege access. Named finance owners retain approval and payment decisions.'},{q:'When should an item be escalated?',a:'When evidence is missing, a request changes payment details, a duplicate or fraud signal appears, or the item falls outside the written rule.'}].map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</section>
    <section className="article-block related-grid"><a href={p.internalLinks[0].href}>{p.internalLinks[0].label}<span>Related Research</span></a><a href={p.internalLinks[1].href}>{p.internalLinks[1].label}<span>Related Research</span></a><a href={p.internalLinks[2].href}>{p.internalLinks[2].label}<span>Related Research</span></a></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </article><CTA/></main><Footer/></>
}
