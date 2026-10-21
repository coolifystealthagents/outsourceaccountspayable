'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { normalizeInternalHref } from './lib/content-contracts';

export type TocItem = { id: string; label: string };
export type EditorialLink = { href: string; label: string };

export function EditorialLayout({ items, related = [], children }: { items: TocItem[]; related?: EditorialLink[]; children: ReactNode }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');
  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!headings.length) return;
    const update = () => {
      const offset = 150;
      const passed = headings.filter((heading) => heading.getBoundingClientRect().top <= offset);
      setActiveId((passed.at(-1) || headings[0]).id);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [items]);
  const links = <ol>{items.map((item) => <li key={item.id}><a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>{item.label}</a></li>)}</ol>;
  return <div className="editorial-layout">
    <details className="editorial-toc-mobile"><summary>Table of contents</summary><nav aria-label="Table of contents">{links}</nav></details>
    <aside className="editorial-sidebar" aria-label="Article navigation">
      <nav aria-label="Table of contents"><h2>Table of contents</h2>{links}</nav>
      <section aria-labelledby="editorial-related-title"><h2 id="editorial-related-title">Continue exploring</h2><ul><li><a href="/services">Accounts payable support services</a></li><li><a href="/contact-us">Plan a consultation</a></li>{related.slice(0, 4).map((item) => <li key={item.href}><a href={normalizeInternalHref(item.href)}>{item.label}</a></li>)}</ul></section>
    </aside>
    <div className="editorial-content">{children}</div>
  </div>;
}
