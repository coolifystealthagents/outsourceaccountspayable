import * as data from './data';

const dataAny = data as any;
const site = dataAny.site || {};
const footerItems = (dataAny.services || dataAny.roles || dataAny.industries || dataAny.blogPosts || []).slice(0, 6);
const getTitle = (item: any) => typeof item === 'string' ? item : (item.title || item.name || item.label || item.question || String(item));
const getSlug = (item: any) => typeof item === 'string'
  ? item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  : (item.slug || getTitle(item).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
const domain = site.domain || 'this site';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return (
    <span className="logo-mark-wrap">
      <img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" />
      <span className="logo-name">{site.brand || domain}</span>
    </span>
  );
}

export function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
        <nav className="links" aria-label="Main navigation">
          <a href="/#tasks">AP services</a>
          <a href="/services/reporting-and-qa">Controls</a>
          <a href="/blog">Guides</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="btn nav-cta" href="/contact">Request AP plan</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer legit-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
          <p>Plan help for invoice intake, vendor follow-up, approval tracking, and AP reports while your finance team keeps control of money decisions.</p>
          <p className="footer-note">We recruit and hire talent only in the Philippines. This is an independent informational website. We may route a submitted request to a staffing team or service partner that can follow up.</p>
        </div>
        <div>
          <h3>AP services</h3>
          <div className="footer-links">
            {footerItems.map((item: any, index: number) => <a href={`/services/${getSlug(item)}`} key={index}>{getTitle(item)}</a>)}
          </div>
        </div>
        <div>
          <h3>Site</h3>
          <div className="footer-links">
            <a href="/contact">Contact</a>
            <a href="/blog">Guides</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/cancellation-policy">Cancellation Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} {site.brand || domain}. All rights reserved.</span>
        <span>{domain}</span>
      </div>
    </footer>
  );
}

export function CTA() {
  return (
    <section className="final-cta">
      <p className="eyebrow">Before you hire</p>
      <h2>Map the AP queue before you hire.</h2>
      <p>Share the invoice work, software, schedule, and review owner. We will use those details to outline the role.</p>
      <a className="btn primary" href="/contact">Request an AP staffing plan</a>
    </section>
  );
}
