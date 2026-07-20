import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const baseUrl = 'https://outsourceaccountspayable.com';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);

  return {
    title: s?.title || 'Service',
    description: s?.desc,
    alternates: s ? { canonical: `/services/${s.slug}` } : undefined,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug) || services[0];
  const serviceUrl = `${baseUrl}/services/${s.slug}`;
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': `${serviceUrl}#faq`,
    mainEntity: s.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        url: serviceUrl,
        name: s.title,
        description: s.desc,
        mainEntity: { '@id': `${serviceUrl}#service` },
        hasPart: [{ '@id': `${serviceUrl}#faq` }],
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: s.title,
        description: s.desc,
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: baseUrl,
        },
        areaServed: 'United States',
        serviceType: 'Accounts payable outsourcing support',
      },
      faqSchema,
      {
        '@type': 'BreadcrumbList',
        '@id': `${serviceUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: s.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{s.title}</h1>
              <p className="lead">{s.desc}</p>
              <a className="btn" href="/contact">Plan this AP role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={`${s.title} offshore service team`} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h2>Best tasks</h2>
              <ul>{s.bestTasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Quality controls</h2>
              <ul>{s.qualityControls.map((control) => <li key={control}>{control}</li>)}</ul>
            </div>
            <div className="card">
              <h2>First week</h2>
              <ul>{s.firstWeek.map((step) => <li key={step}>{step}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section band" id="faq">
          <div className="container">
            <p className="eyebrow">Buyer questions</p>
            <h2>Common AP handoff questions</h2>
            <div className="cards">
              {s.faqs.map((faq) => (
                <div className="card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
