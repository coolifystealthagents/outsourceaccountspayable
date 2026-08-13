import {Header,Footer} from '../components';import {blogPosts,site} from '../data';
const acceptedBlogRank = new Map([
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
export const metadata={title:`Blog | ${site.brand}`,description:'Practical Philippines staffing guides.'};
export default function Blog(){const posts=orderedBlogPosts.slice(0,20);const pages=Math.max(1,Math.ceil(orderedBlogPosts.length/20));return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing blog</p><h1>Practical role and handoff guides.</h1><p className="lead">Read concise guidance for scoping and managing Filipino support roles. Existing article addresses remain available.</p><div className="cards">{posts.map(p=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p><span>{p.minutes} min read</span></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({length:pages},(_,i)=><a aria-current={i===0?'page':undefined} href={i===0?'/blog':`/blog/page/${i+1}`} key={i}>{i+1}</a>)}</nav></div></main><Footer/></>}
