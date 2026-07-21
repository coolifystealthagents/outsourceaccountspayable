import { Header, Footer } from '../components';
import { blogPosts } from '../data';

export const metadata = {
  title: 'Accounts payable outsourcing guides',
  description: 'Read AP outsourcing guides about task scope, provider questions, finance controls, and first-week onboarding.',
};

export default function Blog() {
  return (
    <>
      <Header />
      <main className="section">
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
