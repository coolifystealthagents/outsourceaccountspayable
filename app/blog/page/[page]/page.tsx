import { FeaturedComparison } from '../../FeaturedComparison';
import {notFound,redirect} from 'next/navigation';import {Header,Footer} from '../../../components';import {blogPosts} from '../../../data';const acceptedBlogRank = new Map([
  ['ap-invoice-intake-cutoff-rules', 0],
  ['ap-vendor-credit-application-review', 1],
  ['ap-invoice-approval-delegation-log', 2],
  ['ap-rejected-invoice-rework-queue', 3],
  ['ap-vendor-tax-form-review', 4],
  ['ap-invoice-payment-term-review', 5],
  ['ap-purchase-order-closeout', 6],
  ['ap-invoice-dispute-tracking', 7],
  ['ap-vendor-duplicate-record-review', 8],
  ['ap-invoice-scanning-quality-review', 9],
  ['ap-accrual-support-evidence-log', 10],
  ['ap-invoice-due-date-exception-review', 11],
  ['ap-remittance-advice-follow-up', 12],
  ['ap-invoice-company-code-checks', 13],
  ['ap-open-receipt-aging-review', 14],
  ['ap-vendor-bank-verification-log', 15],
  ['ap-invoice-approval-reminder-calendar', 16],
  ['ap-missing-invoice-evidence-review', 17],
  ['ap-ap-close-status-report', 18],
  ['ap-invoice-entity-change-control', 19],
  ['ap-supplier-invoice-portal-review', 20],
  ['ap-ap-workload-handoff-notes', 21],
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
export function generateStaticParams(){const n=Math.max(1,Math.ceil(orderedBlogPosts.length/20));return Array.from({length:n},(_,i)=>({page:String(i+1)}))}export default async function BlogPage({params}:{params:Promise<{page:string}>}){const {page}=await params;const n=Number(page),total=Math.max(1,Math.ceil(orderedBlogPosts.length/20));if(page==='1')redirect('/blog');if(!Number.isInteger(n)||n<1||n>total)notFound();const posts=orderedBlogPosts.slice((n-1)*20,n*20);return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing blog</p><h1>Blog page {n}</h1><div className="cards">{posts.map(p=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({length:total},(_,i)=><a aria-current={i+1===n?'page':undefined} href={i===0?'/blog':`/blog/page/${i+1}`} key={i}>{i+1}</a>)}</nav></div>{n===2&&<FeaturedComparison />}</main><Footer/></>}
