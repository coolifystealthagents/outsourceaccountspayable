import { Header, Footer, JsonLd } from './components';
import { blogPosts, services, site, staffingOffer } from './data';

const serviceHref = (slug: string) => `/services/${slug}`;

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://outsourceaccountspayable.com/#website',
        name: site.brand,
        url: 'https://outsourceaccountspayable.com',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://outsourceaccountspayable.com/#webpage',
        name: 'Outsourced accounts payable support',
        url: 'https://outsourceaccountspayable.com',
        isPartOf: { '@id': 'https://outsourceaccountspayable.com/#website' },
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="ap-home">
        <JsonLd data={schema} />

        <section className="ap-hero">
          <div className="container ap-hero-grid">
            <div className="ap-hero-copy">
              <p className="eyebrow">Managed accounts payable support</p>
              <h1>Build a calmer AP desk.</h1>
              <ul className="hero-checks" aria-label="Accounts payable support tasks">
                <li>Sort invoices and chase missing details</li>
                <li>Keep due dates and approval owners visible</li>
                <li>Prepare clean packets for finance review</li>
                <li>Log exceptions before they become fire drills</li>
              </ul>
              <a className="btn primary" href="/contact">Request an AP staffing plan</a>
              <p className="hero-assurance">Your finance owner keeps approval and payment control.</p>
            </div>

            <figure className="ap-hero-visual">
              <div className="image-frame">
                <img src="/ap-team.jpg" alt="Finance team reviewing accounts payable work together" />
              </div>
              <figcaption>
                <span>AP support that fits your process</span>
                <strong>Inbox to review-ready packet</strong>
              </figcaption>
            </figure>
          </div>
          <div className="container ap-proof-strip" aria-label="Accounts payable control points">
            <span>Inbox sorted</span>
            <span>Exceptions logged</span>
            <span>Approvals stay in house</span>
          </div>
        </section>

        <section className="container ap-intro" id="tasks">
          <div className="section-kicker">The AP workbench</div>
          <div className="ap-intro-heading">
            <h2>Follow every invoice without chasing the whole office.</h2>
            <p>Start with repeatable admin work. Keep vendor changes, invoice approval, and payment release with named people on your team.</p>
          </div>
          <div className="ap-service-list">
            {services.map((service, index) => (
              <a href={serviceHref(service.slug)} className="ap-service-row" key={service.slug}>
                <span className="service-number">0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <span className="row-link">View role <b aria-hidden="true">↗</b></span>
              </a>
            ))}
          </div>
        </section>

        <section className="ap-control-section">
          <div className="container ap-control-grid">
            <div className="control-copy">
              <p className="eyebrow">Clear control lines</p>
              <h2>Support the work. Keep the money decisions.</h2>
              <p>An AP assistant can prepare records, follow up, and flag gaps. Your company still owns vendor master changes, invoice approval, and payment release.</p>
              <a href="/services/operations-support">See the AP controls</a>
            </div>
            <div className="control-ledger" aria-label="Example AP responsibility split">
              <div className="ledger-head"><span>Work item</span><span>Owner</span></div>
              <div><span>Invoice intake and filing</span><strong>AP support</strong></div>
              <div><span>Missing document follow-up</span><strong>AP support</strong></div>
              <div><span>Vendor bank detail change</span><strong>Finance owner</strong></div>
              <div><span>Invoice and payment approval</span><strong>Finance owner</strong></div>
            </div>
          </div>
        </section>

        <section className="container ap-process">
          <div className="section-kicker">A practical start</div>
          <div className="ap-intro-heading compact">
            <h2>Launch one clean AP lane first.</h2>
            <p>A narrow pilot is easier to check, fix, and expand.</p>
          </div>
          <div className="process-steps">
            <article><span>01</span><h3>Map the lane</h3><p>Choose one inbox, entity, or vendor group. Set the cutoff, examples, and escalation rules.</p></article>
            <article><span>02</span><h3>Review live work</h3><p>Check the first invoice packets together. Fix labels and permissions while the scope is still small.</p></article>
            <article><span>03</span><h3>Add what is stable</h3><p>Expand only after the first tasks are accurate and the finance owner can see every exception.</p></article>
          </div>
        </section>

        <section className="container ap-guides">
          <div className="guides-title">
            <p className="eyebrow">Before you hire</p>
            <h2>Short AP planning guides.</h2>
          </div>
          <div className="guide-list">
            {blogPosts.slice(0, 3).map((post) => (
              <a href={`/blog/${post.slug}`} key={post.slug}>
                <span>{post.minutes} min read</span>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="container ap-final">
          <div>
            <p className="eyebrow">Start with the work</p>
            <h2>Show us where AP gets stuck.</h2>
            <p>{staffingOffer.promise}</p>
          </div>
          <a className="btn primary" href="/contact">Request an AP staffing plan</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
