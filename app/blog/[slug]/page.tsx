import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Header, Footer, CTA, JsonLd} from '../../components';
import {blogDetails, blogPosts, site} from '../../data';

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
    openGraph: {title: post.title, description: post.excerpt, url, type: 'article'},
  };
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
    <Header/>
    <main className="section article-page" data-article-marker={slug}>
      <JsonLd data={articleSchema}/>
      <JsonLd data={breadcrumbSchema}/>
      {faqSchema && <JsonLd data={faqSchema}/>}
      <article className="container guide-article">
        <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a></nav>
        <p className="eyebrow">Philippines AP staffing guide</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        {detail.published && <p className="article-meta">Published {detail.published} · {post.minutes} minute read · Philippines-only staffing</p>}

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

        {detail.sections.map((section: any) => <section className="article-block prose-block" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
        </section>)}

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
      </article>
      <CTA/>
    </main>
    <Footer/>
  </>;
}
