import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from '../components';

export const metadata: Metadata = {
  title: 'About Our Accounts Payable Support',
  description: 'Learn how Outsource Accounts Payable structures Philippines-based support around documented work, review checkpoints, and client-owned finance decisions.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Outsource Accounts Payable',
    description: 'A managed staffing model for documented accounts payable support with clear authority boundaries.',
    url: 'https://outsourceaccountspayable.com/about',
    images: [{ url: '/brand/stealth-agents-team-bacolod.jpg', alt: 'Stealth Agents team in Bacolod supporting managed operations' }],
  },
};

export default function AboutPage() {
  return <><Header/><main id="main-content" tabIndex={-1}>
    <JsonLd data={{ '@context':'https://schema.org', '@type':'AboutPage', name:'About Outsource Accounts Payable', url:'https://outsourceaccountspayable.com/about', isPartOf:{ '@type':'WebSite', name:'Outsource Accounts Payable', url:'https://outsourceaccountspayable.com' } }}/>
    <section className="service-hero"><div className="container service-detail-hero"><div><p className="eyebrow">About the operating model</p><h1>AP support designed around visible work and accountable owners.</h1><p className="lead">Outsource Accounts Payable helps teams define repeatable AP preparation and follow-up work that a Philippines-based specialist can support within the client&apos;s existing controls.</p></div><figure><img src="/brand/stealth-agents-team-bacolod.jpg" width="1200" height="800" alt="Stealth Agents team in Bacolod supporting managed operations"/><figcaption>Managed staffing support from the Stealth Agents team.</figcaption></figure></div></section>
    <section className="section"><div className="container service-detail-layout"><div><p className="eyebrow">How the model works</p><h2>Start with a bounded queue</h2><p>We translate the current queue, source records, required outputs, access limits, and escalation rules into a practical staffing brief. The first lane stays narrow enough for your team to review real work and adjust the handoff.</p></div><div><p className="eyebrow">What stays with the client</p><h2>Finance authority does not move</h2><p>Your named finance owners retain accounting judgment, vendor master approval, invoice approval, payment release, policy decisions, and access governance. The outsourced role prepares, organizes, documents, follows up, and routes exceptions.</p></div></div></section>
    <section className="relationship"><div className="container service-detail-layout"><div><p className="eyebrow">Parent company</p><h2>Powered by Stealth Agents</h2><p>Staffing requests are supported by Stealth Agents, which recruits and manages Philippines-based talent. This relationship provides the recruiting and operating support behind the role while your business keeps control of its systems and financial decisions.</p><a className="btn primary" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Visit Stealth Agents</a></div><img src="/brand/stealth-agents-logo.png" width="447" height="150" alt="Stealth Agents official logo"/></div></section>
    <div className="container"><CTA/></div>
  </main><Footer/></>;
}
