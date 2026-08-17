import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Header, Footer, CTA, JsonLd} from '../../components';
import {blogDetails, blogPosts, site} from '../../data';

const publicationDateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
});
const formatPublicationDate = (value?: string) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return value ?? '';
  return publicationDateFormatter.format(new Date(`${value}T00:00:00Z`));
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const url = `https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {canonical: url},
    openGraph: {title: post.title, description: post.excerpt, url, type: 'article', images: detailImage(post.slug)},
  };
}

function detailImage(slug: string) {
  const detail = (blogDetails as Record<string, any>)[slug];
  return detail?.thumbnail ? [{url: `https://${String(site.domain).toLowerCase()}${detail.thumbnail}`, width: 1200, height: 630, alt: blogPosts.find((item) => item.slug === slug)?.title}] : undefined;
}

export default async function Post({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const detail = (blogDetails as Record<string, any>)[slug];
  if (!detail) notFound();

  const url = `https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    datePublished: detail.published,
    dateModified: detail.modified,
    author: {'@type': 'Organization', name: site.brand, url: `https://${String(site.domain).toLowerCase()}`},
    publisher: {'@type': 'Organization', name: site.brand, url: `https://${String(site.domain).toLowerCase()}`},
    keywords: detail.mainKeyword ? [detail.mainKeyword] : undefined,
    citation: detail.sources?.map((source: any) => source.url),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'Home', item: `https://${String(site.domain).toLowerCase()}`},
      {'@type': 'ListItem', position: 2, name: 'Blog', item: `https://${String(site.domain).toLowerCase()}/blog`},
      {'@type': 'ListItem', position: 3, name: post.title, item: url},
    ],
  };
  const faqSchema = detail.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {'@type': 'Answer', text: faq.answer},
    })),
  } : null;

  return <>
    <Header hideScope/>
    <main className="section article-page" data-article-marker={slug}>
      <JsonLd data={articleSchema}/>
      <JsonLd data={breadcrumbSchema}/>
      {faqSchema && <JsonLd data={faqSchema}/>}
      <article className="container guide-article">
        <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a></nav>
        <p className="eyebrow">Philippines AP staffing guide</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        {detail.published && <p className="article-meta">Published <time dateTime={detail.published}>{formatPublicationDate(detail.published)}</time> · {post.minutes} minute read · Philippines-only staffing</p>}

        <section className="answer-card" aria-labelledby="direct-answer">
          <p className="section-kicker">Direct answer</p>
          <h2 id="direct-answer">What this role should do</h2>
          <p>{detail.shortAnswer}</p>
        </section>

        {detail.decisionRows && <section className="article-block" aria-labelledby="task-line">
          <p className="section-kicker">Task and control line</p>
          <h2 id="task-line">What the assistant prepares and what the owner keeps</h2>
          <p>Use this table to write the first role brief. Change the task names to match your system, but keep the approval owner clear.</p>
          <p className="scroll-cue">Swipe or scroll the table sideways on a small screen.</p>
          <div className="table-scroll" tabIndex={0} aria-label="Accounts payable task and owner table">
            <table className="decision-table">
              <thead><tr><th>AP task</th><th>Assistant prepares</th><th>Finance owner keeps</th></tr></thead>
              <tbody>{detail.decisionRows.map((row: any) => <tr key={row.task}><th scope="row">{row.task}</th><td>{row.assistant}</td><td>{row.owner}</td></tr>)}</tbody>
            </table>
          </div>
        </section>}

        {detail.planningNumbers && <section className="article-block plan-block" aria-labelledby="planning-board">
          <p className="section-kicker">Planning example</p>
          <h2 id="planning-board">A small first-month setup</h2>
          <p>These numbers are a sample plan, not a staffing benchmark or a promised result. Adjust them to your invoice mix, reviewer time, and software.</p>
          <div className="number-grid">{detail.planningNumbers.map((item: any) => <div className="number-card" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
        </section>}

        {detail.evidenceStats && <section className="article-block evidence-block" aria-labelledby="evidence-numbers">
          <p className="section-kicker">What the reports show</p>
          <h2 id="evidence-numbers">The email risk reaches the payment desk</h2>
          <div className="evidence-grid">{detail.evidenceStats.map((item: any) => <div className="evidence-card" key={item.value}><strong>{item.value}</strong><span>{item.label}</span><small>{item.context}</small></div>)}</div>
        </section>}

        {detail.riskRows && <section className="article-block" aria-labelledby="risk-control-table">
          <p className="section-kicker">AP control table</p>
          <h2 id="risk-control-table">Match each request with a check and an owner</h2>
          <p className="scroll-cue">Swipe or scroll the table sideways on a small screen.</p>
          <div className="table-scroll" tabIndex={0} aria-label="Accounts payable fraud prevention control table">
            <table className="decision-table"><thead><tr><th>Request</th><th>Risk clue</th><th>Assistant action</th><th>Owner action</th></tr></thead><tbody>{detail.riskRows.map((row: any) => <tr key={row.request}><th scope="row">{row.request}</th><td>{row.clue}</td><td>{row.assistant}</td><td>{row.owner}</td></tr>)}</tbody></table>
          </div>
        </section>}

        {detail.lossChart && <figure className="article-block evidence-figure" aria-labelledby="loss-chart-title" tabIndex={0}>
          <figcaption><p className="section-kicker">FBI complaint data</p><h2 id="loss-chart-title">Reported BEC losses stayed above $2.7 billion</h2></figcaption>
          <p className="scroll-cue">Swipe or scroll the chart sideways on a small screen.</p>
          <svg className="loss-chart" viewBox="0 0 720 390" role="img" aria-labelledby="loss-chart-svg-title loss-chart-svg-desc">
            <title id="loss-chart-svg-title">Reported Business Email Compromise losses for 2022, 2023, and 2024</title>
            <desc id="loss-chart-svg-desc">Three vertical bars show 2.742 billion dollars in 2022, 2.947 billion dollars in 2023, and 2.770 billion dollars in 2024.</desc>
            <line x1="90" y1="315" x2="680" y2="315"/><line x1="90" y1="65" x2="90" y2="315"/>
            <text x="76" y="320" textAnchor="end">$0</text><text x="76" y="238" textAnchor="end">$1B</text><text x="76" y="155" textAnchor="end">$2B</text><text x="76" y="72" textAnchor="end">$3B</text>
            {detail.lossChart.map((item: any, index: number) => {const height=item.value/3000*250;const x=145+index*175;return <g key={item.year}><rect x={x} y={315-height} width="100" height={height} rx="10"/><text className="chart-value" x={x+50} y={300-height} textAnchor="middle">{item.label}</text><text x={x+50} y="350" textAnchor="middle">{item.year}</text></g>})}
          </svg>
          <p className="methods-note"><strong>Method:</strong> Values come from the FBI IC3 three-year complaint-loss table and are rounded to the nearest million for the chart. IC3 records reports submitted to the bureau; the figures are not an AP-only loss count and do not prove every complaint.</p>
        </figure>}

        {detail.controlGraphic && <figure className="article-block control-figure" aria-labelledby="control-graphic-title" tabIndex={0}>
          <figcaption><p className="section-kicker">Separate graphic</p><h2 id="control-graphic-title">A safer path for a changed payment instruction</h2></figcaption>
          <p className="scroll-cue">Swipe or scroll the steps sideways on a small screen.</p>
          <svg viewBox="0 0 920 270" role="img" aria-labelledby="control-svg-title control-svg-desc">
            <title id="control-svg-title">Four-step payment instruction check</title><desc id="control-svg-desc">The assistant logs the request, pauses the change, verifies through a known contact, and sends the verified record to a company owner for approval.</desc>
            {detail.controlGraphic.map((item: any, index: number) => <g key={item.step} transform={`translate(${20+index*225} 45)`}><rect width="190" height="150" rx="18"/><circle cx="28" cy="31" r="17"/><text className="graphic-step" x="28" y="37" textAnchor="middle">{item.step}</text><text className="graphic-title" x="20" y="76">{item.title}</text><foreignObject x="20" y="88" width="150" height="54"><p>{item.text}</p></foreignObject>{index<detail.controlGraphic.length-1&&<path d="M194 75 H220"/>}</g>)}
          </svg>
          <p className="methods-note">This graphic is a sample control path, not a claim about how every company works. Put the known vendor contact and named company approver in your own written procedure.</p>
        </figure>}

        {detail.expertQuote && <blockquote className="article-block expert-quote"><p>"{detail.expertQuote.text}"</p><cite>{detail.expertQuote.cite}</cite></blockquote>}

        {detail.sections.map((section: any, index: number) => <div key={section.title}>
          <section className="article-block prose-block">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph: string) => <p data-narrative="true" key={paragraph}>{paragraph}</p>)}
          </section>
          {detail.banners && (index + 1) % 2 === 0 && detail.banners[(index + 1) / 2 - 1] && <aside className="article-banner" data-article-banner="true"><div><span>{detail.banners[(index + 1) / 2 - 1].eyebrow}</span><strong>{detail.banners[(index + 1) / 2 - 1].title}</strong><p>{detail.banners[(index + 1) / 2 - 1].text}</p></div><a href={detail.banners[(index + 1) / 2 - 1].href}>{detail.banners[(index + 1) / 2 - 1].label}</a></aside>}
        </div>)}

        {detail.bodyLinks && <p className="article-context-links">Continue with <a href={detail.bodyLinks[0].href}>{detail.bodyLinks[0].label}</a> and the <a href={detail.bodyLinks[1].href}>{detail.bodyLinks[1].label}</a>.</p>}

        {detail.workflow && <section className="article-block" aria-labelledby="invoice-path">
          <p className="section-kicker">Sample workflow</p>
          <h2 id="invoice-path">One invoice from inbox to reviewed packet</h2>
          <p>This six-step path gives the assistant a place to start, stop, and ask for help. It also leaves the final approval and payment decision with your company.</p>
          <ol className="workflow-list">{detail.workflow.map((item: any) => <li key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
        </section>}

        {detail.scripts && <section className="article-block" aria-labelledby="copy-scripts">
          <p className="section-kicker">Copy-ready messages</p>
          <h2 id="copy-scripts">Two scripts for common AP stops</h2>
          <p>Put these messages in the SOP and change the bracketed fields. The wording keeps the assistant in a preparation role while the right owner makes the decision.</p>
          <div className="script-grid">{detail.scripts.map((script: any) => <blockquote key={script.title}><h3>{script.title}</h3><p>"{script.text}"</p></blockquote>)}</div>
        </section>}

        {detail.checklist && <section className="article-block checklist-card"><h2>{detail.checklistTitle}</h2><ul>{detail.checklist.map((item: string) => <li key={item}>{item}</li>)}</ul></section>}

        {detail.relatedLinks && <section className="article-block" aria-labelledby="related-planning">
          <p className="section-kicker">Keep planning</p>
          <h2 id="related-planning">Related AP role pages</h2>
          <p>Use the service pages to narrow the first task lane before you contact a staffing provider. The onboarding guide can then turn that lane into a first-week review plan.</p>
          <div className="related-grid">{detail.relatedLinks.map((link: any) => <a href={link.href} key={link.href}>{link.label}<span>Read more</span></a>)}</div>
        </section>}

        {detail.faqs && <section className="article-block faq-block" aria-labelledby="faq-title">
          <p className="section-kicker">Common questions</p>
          <h2 id="faq-title">Accounts payable virtual assistant FAQs</h2>
          {detail.faqs.map((faq: any) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </section>}

        {detail.sources && <section className="article-block sources-block" aria-labelledby="sources-title">
          <p className="section-kicker">Factual checks</p>
          <h2 id="sources-title">Sources</h2>
          <p>These sources support the tax-form, access-control, and phishing guidance in this article. The planning numbers above are labeled examples and do not come from these sources.</p>
          <ol>{detail.sources.map((source: any) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a><span>{source.note}</span></li>)}</ol>
        </section>}
      <p className='article-source-note'><a href="https://www.ilo.org/global/topics/non-standard-employment/WCMS_534825/lang--en/index.htm" target="_blank" rel="noopener noreferrer">International Labour Organization guidance on remote work arrangements</a> reinforces why remote role briefs should document expectations, communication rhythms, and accountable handoffs.</p>
        <p className='article-source-note'><a href='/contact-us'>Contact Us</a> to turn this article into a scoped Philippines-based staffing brief.</p>
        </article>
      <CTA/>
    </main>
    <Footer hideScope/>
  </>;
}
