# Service-led topical authority ledger

Updated: 2026-08-23

This planning ledger maps existing Philippines-based accounts payable services to existing research. It is an editorial control list, not a claim that the listed research has been linked to a service page or verified in public. Each future handoff needs a separate route, schema, sitemap, build, deployment, and public-review check.

| Service pillar | Existing supporting research | Buyer question | Controlled next action |
| --- | --- | --- | --- |
| Invoice Data Capture | `/research/ap-invoice-source-completeness-research` | Which source fields must be present before an assistant prepares an invoice packet? | Review a source-page handoff to `/services/invoice-data-capture`. |
| Three-Way Match Support | `/research/ap-purchase-order-line-evidence-research` | What should the preparer compare before the finance owner reviews a PO match? | Review a source-page handoff to `/services/three-way-match-support`. |
| Purchase Order Reconciliation | `/research/ap-purchase-order-line-evidence-research` | How can a team keep unmatched PO details visible for the right owner? | Existing handoff to `/services/purchase-order-reconciliation` is documented in the source model; do not add a second link without an editorial review. |
| Vendor Statement Reconciliation | `/research/ap-vendor-statement-cutoff-evidence-research` | Which dates and open-item records make a vendor statement reviewable? | Review a source-page handoff to `/services/vendor-statement-reconciliation`. |
| Payment Run Preparation | `/research/ap-payment-run-exclusion-evidence-research` | What evidence should explain why an approved invoice stays out of a payment run? | Review a source-page handoff to `/services/payment-run-preparation`. |
| Vendor Onboarding Administration | `/research/ap-vendor-contact-source-research` | Which vendor contact record should support a follow-up or escalation? | Review a source-page handoff to `/services/vendor-onboarding-administration`. |
| Expense Report Review | `/research/ap-invoice-receipt-date-evidence-research` | Which received-date evidence helps a reviewer separate timing questions from approval? | Review a source-page handoff to `/services/expense-report-review`. |
| AP Inbox Management | `/research/ap-payment-status-inquiry-research` | What can a support team say about an invoice without promising a payment result? | Existing research batches include this service route; check the exact source before considering another placement. |
| Duplicate Invoice Review | `/research/ap-invoice-number-normalization-research` | How can an assistant search for possible duplicates without changing the supplier's record? | Review a source-page handoff to `/services/duplicate-invoice-review`. |
| Aging Report Preparation | `/research/ap-invoice-queue-aging-cause-research` | How can a finance team separate age caused by missing evidence from owner delay? | Review a source-page handoff to `/services/aging-report-preparation`. |
| Tax Document Collection | `/research/ap-vendor-w9-follow-up-research` | What may an AP support role collect before a tax owner needs to decide? | Review a source-page handoff to `/services/tax-document-collection`. |
| Month-End AP Close Support | `/research/ap-invoice-service-period-evidence-research` | Which service-period records should a close owner see before reviewing an AP item? | Existing handoff to `/services/month-end-ap-close-support` is documented in the source model; do not duplicate it. |

## Release rule

Use one contextual service link only when the research question and service task match. The link must state that the Philippines-based support role prepares evidence or follows up, while the finance owner retains accounting, approval, vendor-change, and payment decisions. Do not publish this ledger as reader copy.
