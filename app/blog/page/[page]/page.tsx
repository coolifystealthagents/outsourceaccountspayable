import { FeaturedComparison } from '../../FeaturedComparison';
import {notFound,redirect} from 'next/navigation';import {Header,Footer} from '../../../components';import {blogPosts} from '../../../data';import {aug18BlogPublicationDates} from '../../../blog-aug18-batch';import {aug17BlogPublicationDates} from '../../../blog-aug17-batch';import {aug14BlogPublicationDates,aug13BlogPublicationDates} from '../../../blog-batch';const acceptedBlogRank = new Map(
  [...Object.keys(aug18BlogPublicationDates).map((slug,index)=>[slug,index] as [string,number]),
  ...Object.keys(aug17BlogPublicationDates).map((slug,index)=>[slug,index+Object.keys(aug18BlogPublicationDates).length] as [string,number]),
  ...Object.keys(aug14BlogPublicationDates).map((slug,index)=>[slug,index+Object.keys(aug18BlogPublicationDates).length+Object.keys(aug17BlogPublicationDates).length] as [string,number]),
  ...Object.keys(aug13BlogPublicationDates).map((slug,index)=>[slug,index+Object.keys(aug18BlogPublicationDates).length+Object.keys(aug17BlogPublicationDates).length+Object.keys(aug14BlogPublicationDates).length] as [string,number])],
);
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
export function generateStaticParams(){const n=Math.max(1,Math.ceil(orderedBlogPosts.length/20));return Array.from({length:n},(_,i)=>({page:String(i+1)}))}export default async function BlogPage({params}:{params:Promise<{page:string}>}){const {page}=await params;const n=Number(page),total=Math.max(1,Math.ceil(orderedBlogPosts.length/20));if(page==='1')redirect('/blog');if(!Number.isInteger(n)||n<1||n>total)notFound();const posts=orderedBlogPosts.slice((n-1)*20,n*20);return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing blog</p><h1>Blog page {n}</h1><div className="cards">{posts.map(p=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({length:total},(_,i)=><a aria-current={i+1===n?'page':undefined} href={i===0?'/blog':`/blog/page/${i+1}`} key={i}>{i+1}</a>)}</nav></div>{n===2&&<FeaturedComparison />}</main><Footer/></>}
