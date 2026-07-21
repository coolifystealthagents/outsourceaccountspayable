import type { Metadata } from 'next';
import { Header, Footer, JsonLd } from '../components';
import { blogPosts, site } from '../data';

const baseUrl = 'https://outsourceaccountspayable.com';
const pageUrl = `${baseUrl}/blog`;
const pageTitle = 'Accounts payable outsourcing guides';
const pageDescription = 'Read AP outsourcing guides about task scope, provider questions, finance controls, and first-week onboarding.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `${pageTitle} | ${site.brand}`,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
  },
};

export default function Blog() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        name: pageTitle,
        description: pageDescription,
        url: pageUrl,
        mainEntity: { '@id': `${pageUrl}#guides` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#guides`,
        name: 'Accounts payable planning guides',
        numberOfItems: blogPosts.length,
        itemListElement: blogPosts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: post.title,
          url: `${baseUrl}/blog/${post.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <div className="container">
          <p className="eyebrow">AP planning guides</p>
          <h1>Plan the handoff before you hire.</h1>
          <p className="lead">
            Use these guides to choose the first AP queue, protect approval and payment decisions, and ask providers useful questions.
          </p>
          <div className="cards">
            {blogPosts.map((post) => (
              <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="pill">{post.minutes} min read</span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
