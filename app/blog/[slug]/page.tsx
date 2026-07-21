import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const baseUrl = 'https://outsourceaccountspayable.com';

type BlogSlug = keyof typeof blogDetails;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return {
    title: post?.title || 'AP guide',
    description: post?.excerpt,
    alternates: post ? { canonical: `/blog/${post.slug}` } : undefined,
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = blogDetails[post.slug as BlogSlug] || blogDetails['outsource-accounts-payable-planning'];
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${postUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        url: postUrl,
        publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <article className="container guide-article">
          <p className="eyebrow">Accounts payable guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <div className="card guide-body">
            <h2>The short answer</h2>
            <p>{detail.shortAnswer}</p>
            {detail.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <h2>{detail.checklistTitle}</h2>
            <ul>
              {detail.checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
