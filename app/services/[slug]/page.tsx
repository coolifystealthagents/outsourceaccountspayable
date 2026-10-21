import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';
import { getServiceDetail, serviceDetails } from '../../service-content';

const base = `https://${String(site.domain).toLowerCase()}`;
export function generateStaticParams() { return serviceDetails.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = getServiceDetail(slug);
  if (!service) return { title: 'Service not found' };
  return { title: service.title, description: service.summary, alternates: { canonical: `/services/${service.slug}` }, openGraph: { title: service.title, description: service.summary, url: `${base}/services/${service.slug}`, images: [{ url: `${base}${service.heroImage}`, alt: `${service.title} AP evidence workflow` }] } };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = getServiceDetail(slug); if (!service) notFound();
  const url = `${base}/services/${service.slug}`;
  const related = service.related.map((item) => services.find((candidate) => candidate.slug === item)).filter(Boolean);
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
  return <><Header/><main id="main-content" tabIndex={-1}>
    <JsonLd data={{ '@context':'https://schema.org','@type':'Service',name:service.title,description:service.summary,url,areaServed:'Philippines',provider:{'@type':'Organization',name:site.brand,url:base} }}/><JsonLd data={faqSchema}/>
    <section className="service-hero"><div className="container service-detail-hero"><div><p className="eyebrow">Accounts payable operations desk</p><h1>{service.title}</h1><p className="lead">{service.summary}</p><p className="service-audience"><strong>Built for:</strong> {service.audience}</p><a className="btn primary" href="/contact-us">Discuss this AP service</a></div><figure><img src={service.heroImage} width="1200" height="700" alt={`${service.title} evidence and exception workflow`}/><figcaption>Source records, review status, and ownership stay visible.</figcaption></figure></div></section>
    <section className="section"><div className="container service-detail-layout"><div><p className="eyebrow">The operating problem</p><h2>Make the queue easier to inspect</h2><p>{service.problem}</p><p>The starting scope is documented around your systems, existing controls, and reviewer capacity. The role prepares records and follows the queue without taking authority that belongs to finance.</p></div><div><h3>Inputs required</h3><ul className="service-outcomes">{service.inputs.map((item)=><li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="service-detail-band"><div className="container"><p className="eyebrow">Working deliverables</p><h2>Artifacts your team can inspect and use</h2><div className="service-deliverables">{service.deliverables.map((item)=><article key={item}><h3>{item}</h3><p>Maintained from approved source systems and included in the agreed review cadence.</p></article>)}</div></div></section>
    <section className="section"><div className="container service-detail-layout"><div><p className="eyebrow">Practical outcomes</p><h2>What this support is designed to improve</h2></div><ul className="service-outcomes">{service.outcomes.map((item)=><li key={item}>{item}</li>)}</ul></div></section>
    <section className="section ledger-section"><div className="container"><p className="eyebrow">Operating workflow</p><h2>A controlled path from intake to review</h2><div className="service-workflow">{service.workflow.map((step)=><article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></div></section>
    <section className="relationship"><div className="container"><p className="eyebrow">Authority boundaries</p><h2>Useful support with decisions kept in the right hands</h2><div className="service-boundaries"><article><h3>The specialist can support</h3><ul>{service.boundaries.supports.map((item)=><li key={item}>{item}</li>)}</ul></article><article><h3>Your finance owner keeps</h3><ul>{service.boundaries.ownerKeeps.map((item)=><li key={item}>{item}</li>)}</ul></article></div></div></section>
    <section className="section"><div className="container service-detail-layout"><div><p className="eyebrow">Common starting scenarios</p><h2>Where a focused first lane can help</h2></div><ul className="service-outcomes">{service.scenarios.map((item)=><li key={item}>{item}</li>)}</ul></div></section>
    <section className="section"><div className="container service-faq"><p className="eyebrow">Frequently asked questions</p><h2>Planning this service</h2>{service.faqs.map((faq)=><details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    <section className="container related-services" aria-labelledby="related-services-title"><h2 id="related-services-title">Related AP support services</h2><div className="cards">{related.map((item)=>item?<a className="card" href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.desc}</p><strong>Explore service</strong></a>:null)}</div></section><div className="container"><CTA/></div>
  </main><Footer/></>;
}
