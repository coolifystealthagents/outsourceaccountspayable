# Accounts-payable topic and link ledger

## Purpose

This ledger records the next useful routes to connect. It does not predict rankings or replace earned editorial links, and it should be checked against built HTML before any public edit.

The site helps finance teams plan Philippines-based AP support. Its money pages describe task lanes, while the supporting articles explain a single buyer question and keep payment approval with the finance owner.

## Existing service pillars

| Pillar route | Buyer job | Existing support routes to review | First contextual-link opportunity |
| --- | --- | --- | --- |
| `/services/invoice-data-capture` | Get invoice details into the approved queue without granting approval power. | `/blog/accounts-payable-virtual-assistant`, `/blog/invoice-approval-workflow-philippines-ap-team`, `/research/ap-invoice-receipt-date-evidence-research` | From an article about invoice intake, link the phrase describing source-field preparation to this lane. |
| `/services/ap-inbox-management` | Keep vendor and invoice messages sorted, visible, and routed to a named owner. | `/blog/invoice-approval-workflow-philippines-ap-team`, `/research/ap-invoice-date-validation-research` | From a page about missing documents or receipt dates, link the instruction to organize the queue to this service. |
| `/services/three-way-match-support` | Prepare purchase-order, receipt, and invoice evidence for an owner to review. | `/blog/accounts-payable-virtual-assistant`, `/research/ap-purchase-order-line-evidence-research`, `/research/ap-receiving-variance-research` | Use the matching phrase only where a reader is comparing those three records. |
| `/services/vendor-onboarding-administration` | Prepare a vendor packet while leaving vendor approval and payment changes with the company. | `/blog/vendor-onboarding-checklist-philippines-ap-team`, `/research/ap-vendor-master-duplicate-research` | Link from a sentence about gathering vendor records, not from a generic closing CTA. |
| `/services/duplicate-invoice-review` | Flag possible duplicates and preserve evidence for a finance owner. | `/blog/accounts-payable-fraud-prevention-philippines`, `/research/ap-vendor-master-duplicate-research` | Pair only with duplicate or fraud-review language and retain the stop-and-escalate boundary. |
| `/services/payment-run-preparation` | Prepare the approved payment list without releasing funds. | `/blog/invoice-approval-workflow-philippines-ap-team`, `/blog/accounts-payable-fraud-prevention-philippines` | Link where the page distinguishes preparation from the finance owner’s release decision. |
| `/services/month-end-ap-close-support` | Gather close evidence while finance keeps accounting judgments. | `/research/ap-invoice-service-period-evidence-research`, `/research/ap-invoice-receipt-date-evidence-research`, `/research/ap-close-unbilled-service-evidence-log` | Link from close-support wording only after confirming the article route renders the exact phrase. |

## Delivery reconciliation

Verified from the 2026-08-27 production build. These records are already present in each source route's local `<main>` and are not candidates for a second CTA:

- `/research/ap-invoice-service-period-evidence-research` has one route-local link to `/services/month-end-ap-close-support`.
- `/research/ap-purchase-order-line-evidence-research` has one route-local link to `/services/purchase-order-reconciliation`. That destination matches the page's line-level reconciliation question; do not replace it with a broader matching link without a separate editorial review.
- `/blog/vendor-onboarding-checklist-philippines-ap-team` has one route-local link to `/services/vendor-onboarding-administration`.

All three source routes and their destination services have generated H1s, canonicals, and sitemap entries. This sitemap intentionally has no `<lastmod>` values.

## Next execution queue

1. Audit `/research/ap-invoice-source-completeness-research` for one body-level route to `/services/invoice-data-capture`. The 2026-08-27 build confirms both routes exist and the source `<main>` has no current link to that service. Keep the link near the source-field preparation guidance and keep invoice approval with the finance owner.
2. Audit `/research/ap-payment-run-exclusion-evidence-research` for one body-level route to `/services/payment-run-preparation`. The 2026-08-27 build confirms both routes exist and the source `<main>` has no current link to that service. Keep the copy about preparing the exclusion record, not releasing payment.

## Authorship and research boundaries

The live article models identify `Outsource Accounts Payable` as the Organization author. Keep that attribution unless an actual named author page and on-site evidence exist; do not manufacture a person or credentials.

Research pages publish citations and label their planning figures as workflow examples rather than benchmarks. Any new research page must keep the same distinction, name its source set, and avoid claims about market size, results, or provider performance that the site cannot support.

## Verification checklist before a public contextual-link release

- Confirm both source and destination routes are generated by the current build.
- Confirm the exact source sentence is visible in the article body and the new link answers the reader’s next question.
- Confirm the target service is Philippines-only and retains the owner-approval boundary.
- Check that the old generic or mismatched link is absent when it is being replaced.
- Build, inspect generated HTML, commit, push, deploy once, and verify the expected marker on cache-busted apex and `www` URLs.
