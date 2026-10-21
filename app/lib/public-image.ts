import { existsSync } from 'node:fs';
import { join } from 'node:path';

const editorialFallbacks = [
  '/aug19-heroes/accounts-payable-source-of-truth-map.webp',
  '/aug19-heroes/accounts-payable-approval-evidence-matrix.webp',
  '/aug19-heroes/accounts-payable-exception-queue-triage.webp',
  '/aug19-heroes/accounts-payable-quality-review-cadence.webp',
  '/oct12-heroes/ap-invoice-due-date-source-hierarchy.webp',
  '/oct12-heroes/ap-payment-term-precedence-research.webp',
  '/oct13-heroes/ap-duplicate-invoice-false-negative-study.webp',
  '/oct13-heroes/ap-approval-chain-interruption-latency-study.webp',
] as const;

function stableIndex(key: string) {
  return [...key].reduce((sum, character) => (sum * 31 + character.charCodeAt(0)) >>> 0, 0) % editorialFallbacks.length;
}

export function publicImageOrFallback(src: string | undefined, key: string) {
  if (src?.startsWith('/') && existsSync(join(process.cwd(), 'public', src.slice(1)))) return src;
  return editorialFallbacks[stableIndex(key)];
}
