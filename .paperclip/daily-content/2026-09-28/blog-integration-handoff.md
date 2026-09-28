# September 28, 2026 combined release — Blog integration handoff

## Scope

- Paperclip issue: `OUTAAAAAAA-73` (`e22e7a82-fd67-4fe6-ad55-ea58d99e9d74`)
- Paired Research issue: `OUTAAAAAAA-72` (`097ab8ed-fa1e-444c-a069-92c86d54324e`)
- Repository: `coolifystealthagents/outsourceaccountspayable`
- Production branch: `main`
- Required release: exactly 12 new Blog articles plus exactly 5 new Research articles in one non-force push
- Deployment owner after push: Browser Operator
- Coolify application recorded by the contract: `hbmdk3sbdm0u52xlxnn43r9n`
- Site timezone: `UTC` (from `ops/recurring-routines.json`)

## Baseline inspection

- Remote production SHA fetched on 2026-09-28: `abd51a7d30813f467af6fe9979765a1921d97cc3`
- The fetched SHA exactly matches the cycle's declared exclusion baseline.
- No September 28 Blog or Research batch file, manifest, commit, or inventory exists on that remote SHA.
- Existing September 25 manifests and earlier content are prior-cycle material and are excluded from this cycle.
- The default checkout was clean but stale and was not used for edits.

## Isolated Blog workspace

- Durable worktree: `/tmp/paperclip-run-outaaaaaaa-73-35649081-b93-AYKKWX/blog-2026-09-28`
- Branch: `routine/outaaaaaaa-73-20260928`
- Branch starting point: `abd51a7d30813f467af6fe9979765a1921d97cc3`
- Production has not been pushed or deployed by this routine.

## Research dependency state

At inspection time, `OUTAAAAAAA-72` was `in_progress` and had no issue-thread handoff comment. No September 28 Research branch, full commit SHA, five-item inventory, manifest, word-count audit, similarity audit, or validation evidence had been reported to the Blog integrator. Blog must not substitute old Research work or push a category-only release.

## Required recovery sequence

1. Draft exactly 12 genuinely new Blog articles on this isolated branch, using September 28 only as the cycle label and the truthful UTC first-publication date for metadata.
2. Validate body-only word counts of at least 900 words for each Blog article and compute the maximum pairwise five-word-shingle Jaccard overlap for the Blog family; rewrite any pair at or above 50%.
3. Receive the paired Research task's durable local branch/worktree, full SHA, exact five-item inventory, manifest, sources/hashes, body-only counts of at least 1,200 words, and Research-family overlap result.
4. Integrate the Research commit locally without allowing Research to push or deploy.
5. Reconcile dates immediately before release; validate routes, canonicals, structured data, images, internal links, index/sitemap entries, manifests and hashes, then run typecheck, tests, and a clean production build.
6. Fetch `origin/main` again, rebase the combined head without force, rerun affected checks, and make one non-force push containing exactly 12 Blog plus 5 Research articles.
7. Report the exact pushed SHA and stop all production mutations. The Browser Operator owns Coolify submission; the user owns article-by-article public verification.

## Current counts

- New September 28 Blog articles committed: 0 / 12
- New September 28 Research articles handed off: 0 / 5
- Combined production pushes: 0 / 1
- Deployments submitted by Blog: 0 (required)
- Public articles claimed live: 0 (required until user verification)

