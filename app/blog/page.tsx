import {Header,Footer} from '../components';import {blogPosts,site} from '../data';import {aug20BlogPublicationDates} from '../blog-aug20-batch';import {aug18BlogPublicationDates} from '../blog-aug18-batch';import {aug17BlogPublicationDates} from '../blog-aug17-batch';import {aug14BlogPublicationDates,aug13BlogPublicationDates} from '../blog-batch';
const acceptedBlogRank = new Map([
  ...Object.keys(aug20BlogPublicationDates).map((slug,index)=>[slug,index] as [string,number]),
  ...Object.keys(aug18BlogPublicationDates).map((slug,index)=>[slug,index] as [string,number]),
  ...Object.keys(aug17BlogPublicationDates).map((slug,index)=>[slug,index+Object.keys(aug18BlogPublicationDates).length] as [string,number]),
  ...Object.keys(aug14BlogPublicationDates).map((slug,index)=>[slug,index+Object.keys(aug18BlogPublicationDates).length+Object.keys(aug17BlogPublicationDates).length] as [string,number]),
  ...Object.keys(aug13BlogPublicationDates).map((slug,index)=>[slug,index+Object.keys(aug18BlogPublicationDates).length+Object.keys(aug17BlogPublicationDates).length+Object.keys(aug14BlogPublicationDates).length] as [string,number]),
]);
const orderedBlogPosts = [...blogPosts].sort((a, b) => {
  const aRank = acceptedBlogRank.get(a.slug);
  const bRank = acceptedBlogRank.get(b.slug);
  if (aRank !== undefined || bRank !== undefined) {
    if (aRank === undefined) return 1;
    if (bRank === undefined) return -1;
    return aRank - bRank;
  }
  return 0;
});
export const metadata={title:`Blog | ${site.brand}`,description:'Practical Philippines staffing guides.'};
export default function Blog(){const posts=orderedBlogPosts.slice(0,20);const pages=Math.max(1,Math.ceil(orderedBlogPosts.length/20));return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing blog</p><h1>Practical role and handoff guides.</h1><p className="lead">Read concise guidance for scoping and managing Filipino support roles. Existing article addresses remain available.</p><div className="cards">{posts.map(p=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p><span>{p.minutes} min read</span></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({length:pages},(_,i)=><a aria-current={i===0?'page':undefined} href={i===0?'/blog':`/blog/page/${i+1}`} key={i}>{i+1}</a>)}</nav></div></main><Footer/></>}
