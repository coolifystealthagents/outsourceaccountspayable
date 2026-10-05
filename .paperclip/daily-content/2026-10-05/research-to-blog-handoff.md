# October 5 Research-to-Blog handoff

Local handoff for OUTAAAAAAA-76 to the October 5 Blog sole integrator, OUTAAAAAAA-77. Research has not pushed or deployed.

## Inventory

- `app/research-oct5-batch.ts`: exactly five independent, source-backed Research articles.
- `app/data.ts`: imports, prioritizes, and resolves all five routes.
- `scripts/audit-oct5-research.mjs`: body length, hash, duplicate-slug, repeated-paragraph, and five-word-shingle gates.
- `.paperclip/daily-content/2026-10-05/research.json`: durable inventory, hashes, dates, and validation evidence.
- Existing repository SVG assets are reused and must decode and render in the combined build.

## Routes and body words

- `/research/non-po-invoice-exception-authority-research` — 1,272
- `/research/invoice-accrual-reversal-match-research` — 1,218
- `/research/corporate-card-reimbursement-overlap-research` — 1,207
- `/research/vendor-bank-change-payment-proposal-timing-research` — 1,207
- `/research/invoice-approval-delegation-expiry-research` — 1,200

Originality audit: maximum pairwise five-word-shingle Jaccard 0.0004158004158004158; zero repeated paragraphs. Qualitative review passed: each article has its own population, reasoning sequence, examples, decision boundary, limitations, and reader outcome.

Local validation passed: dependency install, typecheck, repository tests, routine manifest, clean production build (only pre-existing CSS compatibility warnings), and HTTP render audit. Each route returned 200 with its complete title and all nine body paragraphs, self-canonical, `datePublished`, Research index and sitemap entry, three live contextual internal links, and an SVG asset returning 200 with `image/svg+xml` MIME and valid SVG signature.

## Publication timing control

The configured site and routine timezone is UTC. `2026-10-05` is the intended first-publication date, not permission to backdate. Before the sole combined push, reconcile source dates, visible dates, Article `datePublished`, index order, sitemap entries, and the combined manifest to the expected actual live date. If live verification crosses UTC midnight, the affected articles must use their individual actual date.

## Downstream gate

Integrate this local commit into the durable October 5 Blog worktree without force. Re-run this audit and the combined dependency, typecheck, tests, clean build, full-render, link, canonical, index, sitemap, and image-response/decode checks. Blog alone performs the single production push. Browser operator alone deploys Coolify3 resource `hbmdk3sbdm0u52xlxnn43r9n`. Do not count these routes as live until exact-SHA deployment evidence exists and all public checks pass.
