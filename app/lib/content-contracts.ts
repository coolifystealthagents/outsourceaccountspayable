export function seoTitle(value: string, max = 60) {
  const clean = value.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const clipped = clean.slice(0, max + 1);
  const boundary = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, boundary > 35 ? boundary : max).replace(/[,:;\-\s]+$/, '')}…`;
}

export function normalizeInternalHref(href: string) {
  if (!href.startsWith('/services/')) return href;
  const [path, suffix = ''] = href.split(/(?=[?#])/u, 2);
  const service = path.slice('/services/'.length)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/services/${service}${suffix}`;
}
