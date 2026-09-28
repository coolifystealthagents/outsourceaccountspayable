import fs from 'node:fs';

const slugs = [
  'early-payment-discount-decision-packet',
  'recurring-invoice-change-review',
  'supplier-statement-missing-invoice-triage',
  'goods-return-credit-follow-up',
  'blanket-purchase-order-drawdown-review',
  'milestone-service-invoice-evidence-review',
  'supplier-payment-method-change-review',
  'utility-invoice-account-reconciliation',
  'employee-expense-supplier-invoice-separation',
  'vendor-prepayment-application-review',
  'invoice-tax-line-discrepancy-packet',
  'payment-remittance-allocation-reconciliation',
];

if (slugs.length !== 12) throw new Error(`expected exactly 12 slugs, received ${slugs.length}`);
if (new Set(slugs).size !== slugs.length) throw new Error('duplicate slug in September 28 Blog inventory');

const clean = value => value
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(?:#39|quot);/g, "'")
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();
const words = value => clean(value).match(/[A-Za-z0-9][A-Za-z0-9’'/-]*/g) ?? [];
const shingles = value => {
  const tokens = words(value).map(token => token.toLowerCase());
  return new Set(tokens.slice(0, -4).map((_, index) => tokens.slice(index, index + 5).join(' ')));
};
const jaccard = (a,b) => {
  let intersection = 0;
  for (const item of a) if (b.has(item)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
};

const bodies = new Map();
for (const slug of slugs) {
  const file = `.next/server/app/blog/${slug}.html`;
  if (!fs.existsSync(file)) throw new Error(`missing rendered route: ${file}`);
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes(`<link rel="canonical" href="https://outsourceaccountspayable.com/blog/${slug}"`)) throw new Error(`canonical mismatch: ${slug}`);
  if (!html.includes('"datePublished":"2026-09-28"')) throw new Error(`datePublished mismatch: ${slug}`);
  if (!html.includes('Published:</span>') && !html.includes('Published: <time')) {
    if (!html.includes('September 28, 2026')) throw new Error(`visible date missing: ${slug}`);
  }
  const body = [...html.matchAll(/<p data-narrative="true">([\s\S]*?)<\/p>/g)].map(match => clean(match[1])).join(' ');
  const count = words(body).length;
  if (count < 900) throw new Error(`body-only word count below 900: ${slug} (${count})`);
  bodies.set(slug, {body,count,shingles:shingles(body)});
}

let maximum = {score:0,pair:[]};
for (let i=0;i<slugs.length;i+=1) for (let j=i+1;j<slugs.length;j+=1) {
  const score = jaccard(bodies.get(slugs[i]).shingles,bodies.get(slugs[j]).shingles);
  if (score > maximum.score) maximum = {score,pair:[slugs[i],slugs[j]]};
}
if (maximum.score >= 0.5) throw new Error(`five-word-shingle overlap must be below 50%: ${maximum.pair.join(' / ')} = ${(maximum.score*100).toFixed(2)}%`);

const result = {
  family:'blog',
  requiredCount:12,
  bodyWordCounts:Object.fromEntries(slugs.map(slug=>[slug,bodies.get(slug).count])),
  maximumPairwiseFiveWordShingleJaccard:{slugs:maximum.pair,score:Number(maximum.score.toFixed(6)),percent:`${(maximum.score*100).toFixed(2)}%`},
};
console.log(JSON.stringify(result,null,2));
