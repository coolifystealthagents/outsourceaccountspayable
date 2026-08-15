export type ResearchPost = {slug:string;title:string;excerpt:string;published:string;modified:string;thumbnail:string;keywords:string[];body:string[];citations:{label:string;href:string}[];internalLinks:{label:string;href:string}[];cta:string;serviceHandoff?:{heading:string;body:string;label:string;href:string}};
const sources=[
{label:'NIST: Least Privilege Glossary',href:'https://csrc.nist.gov/glossary/term/least_privilege'},
{label:'NIST SP 800-53 Rev. 5',href:'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'},
{label:'NIST SP 800-171 Rev. 3',href:'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html'},
{label:'CISA: Recognize and Report Phishing',href:'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing'},
{label:'GAO: Green Book Internal Control Standards',href:'https://www.gao.gov/greenbook'},
{label:'IRS: About Form W-9',href:'https://www.irs.gov/forms-pubs/about-form-w-9'},
{label:'IRS: Instructions for Form W-9',href:'https://www.irs.gov/instructions/iw9'},
{label:'FTC: Data Breach Response Guide',href:'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business'},
{label:'SBA: Manage Your Business Finances',href:'https://www.sba.gov/business-guide/manage-your-business/manage-your-business-finances'},
{label:'U.S. Treasury: Office of Financial Research',href:'https://www.financialresearch.gov/financial-markets/'}
];
const topics=[
['ap-outsourcing-scope-benchmark','AP outsourcing scope benchmark: what to hand off first','A practical benchmark for separating repeatable AP preparation from approvals, bank changes, and payment release.'],
['invoice-intake-control-research','Invoice intake controls for distributed AP teams','Research on the minimum intake fields and review trail a remote AP support lane should capture.'],
['three-way-match-exception-research','Three-way match exception handling: a workflow study','How teams can measure match exceptions without turning an assistant into the final accounting approver.'],
['ap-approval-separation-research','AP approval separation and role design','A source-backed look at separating preparation, review, approval, and payment release.'],
['vendor-bank-change-control-research','Vendor bank-change controls for outsourced AP','Why changed payment details need a distinct escalation path and employee verification step.'],
['ap-aging-handoff-research','AP aging handoff research for finance managers','A simple model for turning aging data into an owner-led review queue.'],
['month-end-ap-capacity-research','Month-end AP capacity planning for support teams','Use volume, exception rate, and review time to plan a safer first outsourced AP lane.'],
['ap-quality-review-scorecard-research','AP quality review scorecard research','Observable quality measures for invoice packets, exception notes, and handoffs.'],
['philippines-ap-support-role-research','Philippines AP support role design research','A role-design brief for teams considering Philippines-based accounts-payable support.'],
['ap-outsourcing-onboarding-research','AP outsourcing onboarding: first-30-day evidence','What to document before expanding a support role beyond its first controlled queue.']
,['ap-invoice-coding-control-research','Invoice coding controls in outsourced AP','How to make coding preparation reviewable while keeping unusual allocations with a finance owner.']
,['ap-payment-run-preparation-research','Payment-run preparation research for AP teams','A control map for preparing payment lists without transferring approval or release authority.']
,['ap-vendor-statement-reconciliation-research','Vendor statement reconciliation workflow research','A practical evidence trail for comparing statements, open invoices, credits, and unresolved items.']
,['ap-expense-report-review-controls-research','Expense report review controls research','What a support lane can check before an employee reviews policy exceptions and approves reimbursement.']
,['ap-duplicate-invoice-detection-research','Duplicate invoice detection workflow research','A source-backed review design for spotting repeated invoice signals before approval.']
,['ap-tax-document-collection-research','AP tax-document collection research','How to collect missing tax forms and protect the boundary around vendor acceptance.']
,['ap-purchase-order-reconciliation-research','Purchase-order reconciliation research','A structured approach to comparing invoice, order, receipt, and exception ownership.']
,['ap-fraud-escalation-queue-research','AP fraud escalation queue research','How suspicious payment and vendor requests should leave the ordinary processing queue.']
,['ap-invoice-approval-aging-research','Invoice approval aging research','A review model for aging approvals, documenting ownership, and separating delay from exception.']
,['ap-outsourced-ap-access-review-research','Outsourced AP access-review research','A least-privilege checklist for granting, reviewing, and removing support-role access.']
,['ap-close-evidence-handoff-research','Month-end AP evidence handoff research','What a close handoff should contain so the finance owner can review open items and source records.']
,['ap-inbox-triage-research','AP inbox triage and evidence research','How to sort inbound AP requests into complete, missing-evidence, and escalation queues.']
,['ap-receipt-evidence-research','Receipt evidence in AP review packets','A research brief on preserving receipt evidence while a support role prepares invoice packets for review.']
,['ap-credit-memo-reconciliation-research','Credit memo reconciliation research','How to identify, document, and route credits without letting a preparation role approve the accounting outcome.']
,['ap-unapplied-cash-ap-research','Unapplied cash and AP follow-up research','A controlled follow-up model for unresolved credits, duplicate payments, and owner-led reconciliation.']
,['ap-vendor-inquiry-response-research','Vendor inquiry response research','What an AP support lane can answer, document, and escalate when vendors ask about invoices or payment status.']
,['ap-invoice-cutoff-research','Invoice cutoff evidence research','A month-end cutoff workflow for capturing source dates, open items, and finance-owner decisions.']
,['ap-ap-system-access-research','AP system access provisioning research','A least-privilege sequence for requesting, approving, reviewing, and removing AP support access.']
,['ap-remittance-advice-research','Remittance advice preparation research','How to prepare remittance information while keeping payment release and exceptions with the finance owner.']
,['ap-invoice-duplicate-signals-research','Invoice duplicate signal research','A practical comparison of invoice number, vendor, amount, date, and attachment signals before review.']
,['ap-close-checklist-evidence-research','AP close checklist evidence research','A source-backed checklist for tying open AP work to a named close owner and retained evidence.']
,['ap-employee-separation-research','AP role separation research','How to divide preparation, review, approval, and release duties across an outsourced AP workflow.']
,['ap-document-retention-research','AP document retention workflow research','A reviewable approach to retaining invoices, approvals, exceptions, and source records in the approved system.']
,['ap-exception-aging-research','AP exception aging research','How to age unresolved AP exceptions by owner, evidence gap, risk, and next action.']
,['ap-approval-matrix-research','AP approval matrix design research','A research-led way to document approval thresholds, evidence requirements, and finance-owner decisions.']
,['ap-vendor-onboarding-controls-research','Vendor onboarding controls for AP support','How to prepare vendor setup evidence while keeping acceptance, tax review, and activation with an authorized owner.']
,['ap-payment-terms-master-data-research','Payment terms master-data research','A control model for reviewing payment terms, documenting changes, and routing unusual requests before they affect a payment run.']
,['ap-accrual-support-research','AP accrual support workflow research','How an AP support lane can collect open-invoice evidence for accrual review without deciding accounting treatment.']
,['ap-ocr-confidence-review-research','OCR confidence review in AP workflows','A practical review design for using extracted invoice fields while requiring source-document checks for uncertain values.']
,['ap-spend-category-coding-research','Spend-category coding research for AP teams','How to make recurring coding preparation consistent while escalating unusual or policy-sensitive allocations.']
,['ap-1099-vendor-records-research','1099 vendor-record preparation research','A source-backed workflow for collecting vendor records and routing tax-form questions to the responsible finance owner.']
,['ap-payment-calendar-control-research','AP payment-calendar control research','How to maintain a reviewable payment calendar with due-date evidence, owner sign-off, and exception notes.']
,['ap-close-open-items-research','AP close open-items research','A structured method for carrying unresolved invoices, credits, and exceptions into a named close-owner queue.']
,['ap-kpi-definition-research','AP KPI definition and evidence research','How to define AP workflow measures so counts, aging, exceptions, and handoffs remain traceable to source records.']
] as const;
export const researchBatch:ResearchPost[]=topics.map(([slug,title,excerpt],index)=>({slug,title,excerpt,published:index<10?'2026-08-08':index<22?'2026-08-09':'2026-08-10',modified:index<10?'2026-08-08':index<22?'2026-08-09':'2026-08-10',thumbnail:`/research-thumbnails/${slug}.svg`,keywords:['accounts payable outsourcing','AP controls','Philippines AP support'],body:[`Methodology: this report examines ${title.toLowerCase()} for a finance team considering outsourced accounts-payable support. We reviewed the ten primary sources listed below and mapped their control principles to a reviewable work packet: source records, prepared fields, exception notes, and a named owner. Recommendations are labeled as recommendations; they are not market benchmarks.`,`Key finding: repeatability matters more than volume. A support role can sort an AP inbox, compare records, prepare a draft packet, and request missing evidence when inputs and stop conditions are written down. Approval, vendor-master changes, bank-detail changes, and payment release remain employee decisions.`,`Key stats for planning: 10 primary sources reviewed; 3 control layers (prepare, review, approve); 1 named owner per exception. These are workflow-design counts, not promised output, rates, or staffing ratios.`,`Review table: a preparation role identifies missing evidence, preserves suspicious requests, and routes packets; a finance owner decides whether exceptions proceed, independently verifies risky changes, and records approval. Keep this separation visible in the queue and permissions.`,`Implementation: pilot one queue for two weeks, retain representative complete and stopped examples, and ask the finance owner to sign off on the boundary before adding another AP lane. Least privilege means granting only the system access needed for the starting lane and reviewing it when scope changes.`,`Takeaway: a useful AP research report ends with an owner, evidence, and an escalation path. For a Philippines-based team, document schedule overlap, escalation timing, communication channel, and the employee who owns unresolved exceptions.`],citations:sources,internalLinks:[{label:'AP services',href:'/services'},{label:'AP inbox management',href:'/services/ap-inbox-management'},{label:'Blog guides',href:'/blog'}],cta:'Map this research to a controlled AP staffing plan.'}));

// Explicit date records for the frozen August 10 batch; these are authoritative per article.
export const aug10ResearchPublicationDates:Record<string,string>={
  'ap-approval-matrix-research':'2026-08-10','ap-vendor-onboarding-controls-research':'2026-08-10',
  'ap-payment-terms-master-data-research':'2026-08-10','ap-accrual-support-research':'2026-08-10',
  'ap-ocr-confidence-review-research':'2026-08-10','ap-spend-category-coding-research':'2026-08-10',
  'ap-1099-vendor-records-research':'2026-08-10','ap-payment-calendar-control-research':'2026-08-10',
  'ap-close-open-items-research':'2026-08-10','ap-kpi-definition-research':'2026-08-10'
};
for (const post of researchBatch) { const date=aug10ResearchPublicationDates[post.slug]; if(date) post.published=date; }
