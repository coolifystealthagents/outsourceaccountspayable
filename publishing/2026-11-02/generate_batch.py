#!/usr/bin/env python3
"""Generate the 2026-11-02 Full-tier batch: 8 Blog + 7 Research.

The prose is authored for this site only. Sources are real institutional pages
used for control context, not as claims about a specific company.
"""
import hashlib
import json
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
DATE = "2026-11-02"
VISIBLE = "November 2, 2026"

SOURCES = {
    "greenbook": ("GAO Standards for Internal Control in the Federal Government", "https://www.gao.gov/greenbook"),
    "gao": ("U.S. Government Accountability Office", "https://www.gao.gov/"),
    "nist53": ("NIST SP 800-53 Rev. 5", "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"),
    "nistcsf": ("NIST Cybersecurity Framework", "https://www.nist.gov/cyberframework"),
    "irsrec": ("IRS Recordkeeping Guidance", "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"),
    "sba": ("U.S. Small Business Administration — Manage Your Business", "https://www.sba.gov/business-guide/manage-your-business"),
    "cisa": ("CISA Recognize and Report Phishing", "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"),
    "fbi": ("FBI Business Email Compromise", "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/business-email-compromise"),
    "ofac": ("U.S. Treasury Sanctions List Service", "https://ofac.treasury.gov/sanctions-list-service"),
    "fedach": ("Federal Reserve Financial Services FedACH", "https://www.frbservices.org/financial-services/ach"),
    "ftc": ("FTC Data Security Guidance", "https://www.ftc.gov/business-guidance/privacy-security/data-security"),
    "nara": ("National Archives Records Management Guidance", "https://www.archives.gov/records-mgmt"),
    "npc": ("Philippine National Privacy Commission — Data Privacy Act", "https://privacy.gov.ph/data-privacy-act/"),
    "gsa": ("GSA SmartPay Purchase Card Program", "https://smartpay.gsa.gov/"),
    "pci": ("PCI Security Standards Council", "https://www.pcisecuritystandards.org/"),
    "irs1099": ("IRS Instructions for Forms 1099-MISC and 1099-NEC", "https://www.irs.gov/instructions/i1099mec"),
}

BLOG_SECTIONS = [
    "Frame the decision and the scope",
    "Map the evidence and its source",
    "Separate preparation from authority",
    "Run the daily control",
    "Resolve exceptions and conflicts",
    "Close, verify, and review",
]

RESEARCH_SECTIONS = [
    "Question and scope",
    "Population and unit",
    "Definitions and measures",
    "Data dictionary and evidence",
    "Sampling and collection",
    "Analysis and reporting",
    "Limitations",
    "Review and next action",
]

BLOGS = [
    {
        "slug": "ap-shared-service-center-sla-evidence",
        "title": "Write an AP Shared-Service SLA That Survives Month-End",
        "excerpt": "Build a shared-service SLA whose owned time, pause reasons, and case export reconcile to the service-credit journal before attainment is published.",
        "keyword": "AP shared-service SLA",
        "subject": "AP shared-service SLA evidence",
        "owner": "shared-service controller",
        "system": "the service-management platform",
        "evidence": ["ticket queue export", "service-credit calculation", "exception log", "approver roster", "cut-off timestamp"],
        "exception": "a service credit is claimed for a case that was paused waiting on the business unit rather than the AP team",
        "shortAnswer": "An AP shared-service SLA survives month-end when owned time, pause reasons, and the case export reconcile to the service-credit journal before any attainment figure is published.",
        "checklist": [
            "The SLA states the clock, start event, and stop event",
            "Paused time cites a requester, reason code, and resume date",
            "The case export reconciles to the service-management report",
            "Every service credit cites a case and an approval",
        ],
        "faqs": [
            ("Who decides whether a service credit is owed?", "The service owner and finance controller decide; AP operations may calculate and present the case evidence."),
            ("Why split owned time from elapsed time?", "A request parked for business-unit instructions is not AP delay, and mixing the clocks misstates attainment."),
        ],
        "sources": ["greenbook", "nist53", "sba"],
        "facts": [
            "A shared-service SLA is only usable at month-end if it states which clock runs: calendar time, delivery-center business hours, or the requester's local hours. Mixing them makes a three-day target look missed in one region and met in another.",
            "The SLA pack should reconcile the ticket export to the service-management report before any percentage is published, because reopened tickets and merged duplicates change both the numerator and the denominator.",
            "Operations may calculate attainment, tag pause reasons, and prepare the credit schedule, but the service owner and finance controller decide whether a credit is owed and whether a root cause is accepted.",
            "Each morning the team should review the oldest owned tickets, unassigned handoffs, and cases paused for more than two business days, then record one next action and one owner per item.",
            "A pause requested by the business unit is not AP delay. It should carry a reason code, the requesting role, and a resume date, and it should be excluded from owned time only with that evidence attached.",
            "At close the reviewer compares the SLA export to the service-credit journal, confirms every credit or waiver cites a case, and records whether the next month's target remains supportable.",
        ],
    },
    {
        "slug": "ap-invoice-capture-batch-reconciliation",
        "title": "Reconcile an Invoice Capture Batch Before Posting",
        "excerpt": "Use document count, page count, currency totals, and supplier-invoice identity to prove a capture batch is complete before it reaches matching.",
        "keyword": "invoice capture batch reconciliation",
        "subject": "invoice capture batch reconciliation",
        "owner": "AP operations lead",
        "system": "the capture platform",
        "evidence": ["scanner batch header", "OCR output file", "rejected-image log", "page count", "posting receipt"],
        "exception": "the batch header counts 240 documents but the OCR file contains 238 records and two pages were split into separate images",
        "shortAnswer": "A capture batch is ready to post only when document count, page count, currency totals, and supplier-invoice identity reconcile between the scanner manifest, OCR output, and posting receipt.",
        "checklist": [
            "Header document and page counts match the released records",
            "Rejected images have a reason and an owner",
            "Currency totals reconcile before matching",
            "Duplicate supplier-invoice pairs are tested, not assumed away",
        ],
        "faqs": [
            ("Can a clean count total be trusted?", "No. A count can agree while a duplicate record or a split page hides inside the batch."),
            ("Who accepts a low-confidence field?", "The capture operator may flag it, but the AP reviewer or finance owner decides whether it is usable for matching."),
        ],
        "sources": ["greenbook", "irsrec", "nara"],
        "facts": [
            "An invoice capture batch should be treated like a financial population: the header count, page count, and gross amount by currency must reconcile to the released record set before matching begins.",
            "The batch packet should include the scanner manifest, the OCR output file, the rejected-image list, and the posting receipt, each with a version or export time so a reviewer can reproduce the run.",
            "Capture operators may split, merge, and re-key documents inside the written exception rules, but they should not decide that a low-confidence field is acceptable for payment.",
            "At the start of each batch the lead checks the header against the output count, reviews the rejection queue, and assigns every unresolved page before releasing a single record.",
            "Split and merged documents are the usual cause of count drift; they should be logged as a known transformation with the source page and the resulting record, not treated as a missing invoice.",
            "A clean control total does not prove a clean batch. Before posting, the reviewer also checks for duplicate supplier-invoice pairs created when a rescan was released alongside the original.",
        ],
    },
    {
        "slug": "ap-vendor-credit-memo-application",
        "title": "Apply a Vendor Credit Memo Without Overstating the Payable",
        "excerpt": "Match a credit memo to the right supplier site, legal entity, and invoice, and keep paid-invoice credits open for an explicit refund decision.",
        "keyword": "vendor credit memo application",
        "subject": "vendor credit memo application",
        "owner": "AP manager",
        "system": "the ERP payables subledger",
        "evidence": ["credit memo image", "supplier statement line", "open invoice list", "return authorization", "application receipt"],
        "exception": "the credit memo references an invoice already paid in a prior run, so applying it to an open invoice would double count the benefit",
        "shortAnswer": "Apply a vendor credit only against evidence that identifies the supplier site, legal entity, and target invoice; keep paid-invoice credits open for an explicit refund or offset decision.",
        "checklist": [
            "Supplier site and legal entity are identified",
            "The target invoice is open and matches the credit",
            "Paid-invoice credits stay visible for a refund decision",
            "The unapplied balance reconciles at close",
        ],
        "faqs": [
            ("Can a credit be applied to any open invoice from the supplier?", "No. It must match the legal entity and supplier site that issued the credit, and the invoice must be substantively linked."),
            ("Who decides on a refund?", "Treasury owns the cash decision; AP may prepare the evidence and the proposed application."),
        ],
        "sources": ["greenbook", "irsrec", "sba"],
        "facts": [
            "A vendor credit memo should be applied to a specific supplier site and legal entity, because a credit issued to one entity cannot lawfully reduce another entity's payable without an intercompany step.",
            "The case packet needs the credit memo image, the supplier statement line, the open-invoice list, any return authorization, and the application or refund receipt.",
            "AP may match, calculate, and propose an application, but the AP manager owns the application decision and treasury owns any refund or offset that changes cash.",
            "Each day the team works the unapplied-credit report oldest first, records the candidate invoice and amount, and routes any credit older than the policy window to the manager for a disposition.",
            "When a credit references an invoice already paid, applying it to a different open invoice overstates the benefit. The case should record the paid invoice and wait for a refund or offset decision.",
            "At close the reviewer reconciles the unapplied-credit balance to the open credit memo list and confirms every applied credit cites the invoice and approval that support it.",
        ],
    },
    {
        "slug": "ap-payment-remittance-advice-failure",
        "title": "Handle a Failed Remittance Advice Delivery",
        "excerpt": "Treat remittance delivery as a separate control from payment settlement, with a fallback channel and a supplier acknowledgment.",
        "keyword": "remittance advice delivery failure",
        "subject": "remittance advice delivery failure",
        "owner": "treasury operations lead",
        "system": "the payment bank portal",
        "evidence": ["payment file receipt", "remittance email bounce", "supplier portal upload log", "supplier confirmation"],
        "exception": "the payment cleared the bank but the remittance email bounced because the supplier domain rejected the attachment",
        "shortAnswer": "Track remittance delivery as its own control: settlement proves cash moved, not that the supplier received the detail needed to apply it.",
        "checklist": [
            "Settled payments are compared to delivered advice",
            "A fallback delivery channel is recorded with the retry",
            "Repeated bounces route to the vendor master as a contact defect",
            "Open unapplied cash is explained at month-end",
        ],
        "faqs": [
            ("Is a payment complete when the bank settles it?", "No. The supplier also needs remittance detail to apply cash, so delivery remains open until acknowledged."),
            ("Can AP change the remittance address?", "The vendor-master owner owns address changes; treasury may use an approved fallback channel for the current payment."),
        ],
        "sources": ["fedach", "nistcsf", "fbi"],
        "facts": [
            "Settlement and remittance delivery are separate events. A payment can clear the bank while the supplier still lacks the detail needed to apply cash, so the case cannot close on bank status alone.",
            "The evidence set should include the payment file receipt, the remittance send log, any bounce message, the portal upload record, and the supplier's acknowledgment.",
            "Treasury operations may resend, upload to a portal, or call the supplier's AP desk, but changing the remittance address in the vendor master remains a vendor-master owner decision.",
            "The daily check compares settled payments to delivered advice, then works the undelivered list by age and supplier value before the next payment run closes.",
            "A bounced message caused by an attachment filter is not the same as a wrong address. Record the failure code and the channel used for the successful retry, then route repeated bounces to the vendor master as a contact defect.",
            "At month-end the reviewer samples delivered and failed advice, confirms the supplier acknowledged the fallback channel, and records whether any payment remains unapplied because the advice is still missing.",
        ],
    },
    {
        "slug": "ap-purchase-card-receipt-reconciliation",
        "title": "Reconcile Purchase Card Receipts to the AP Ledger",
        "excerpt": "Rework purchase card reconciliation at the transaction level so reversals, missing receipts, and tax treatment stay visible.",
        "keyword": "purchase card receipt reconciliation",
        "subject": "purchase card receipt reconciliation",
        "owner": "procurement card administrator",
        "system": "the card management platform",
        "evidence": ["card issuer transaction file", "receipt images", "cardholder statement", "cost-center coding", "ledger posting receipt"],
        "exception": "a cardholder submits a receipt for a transaction that the issuer later reversed, leaving a receipt with no ledger match",
        "shortAnswer": "Reconcile purchase card activity transaction by transaction, and keep missing receipts and reversals visible instead of letting a statement total hide them.",
        "checklist": [
            "Transactions match the issuer file, not only the statement",
            "Reversals are closed as reversals with evidence",
            "Missing receipts age to the cardholder's manager",
            "Card clearing account reconciles at close",
        ],
        "faqs": [
            ("Why not reconcile the statement total?", "Declines, reversals, and currency conversions can make the total agree while individual transactions do not."),
            ("Who owns a missing receipt?", "The cardholder supplies it, the manager decides on escalation, and the program administrator applies the policy."),
        ],
        "sources": ["gsa", "pci", "irsrec"],
        "facts": [
            "A purchase card program reconciles at the transaction level, because reversals, declines, and foreign-currency conversions can make the statement total agree while individual receipts do not.",
            "The packet should join the issuer transaction file, the receipt image, the cardholder statement, the cost-center coding, and the ledger posting receipt on one transaction identifier.",
            "Cardholders and their managers own the business purpose and receipt, the card administrator owns the program rules, and AP may prepare the match without approving the spend.",
            "Each cycle the team clears matched transactions first, then works unmatched receipts by age and cardholder, and escalates any transaction without a receipt past the policy window to the manager.",
            "A receipt for a reversed transaction should be closed as reversed, not forced to a ledger match. Missing receipts should age visibly rather than being written off without a manager decision.",
            "At close the reviewer reconciles the card clearing account to the issuer file and confirms every unmatched item has an owner, an age, and a documented disposition.",
        ],
    },
    {
        "slug": "ap-invoice-approval-delegation-expiry",
        "title": "Audit Delegated Approvals That Outlive Their Authority",
        "excerpt": "Test delegated approvals against the authority in force at the timestamp, and ratify late approvals instead of rewriting the record.",
        "keyword": "delegated approval expiry",
        "subject": "delegated approval expiry",
        "owner": "controller",
        "system": "the approval workflow",
        "evidence": ["delegation register", "approver roster effective dates", "approval timestamps", "policy limit table"],
        "exception": "an approver signs an invoice two days after the delegation end date because the register was updated in a spreadsheet rather than the workflow",
        "shortAnswer": "Test delegated approvals against the authority in force at the timestamp, and ratify late approvals instead of rewriting the record.",
        "checklist": [
            "Every delegation has a start date, end date, scope, and limit",
            "Boundary dates are tested, not only mid-window approvals",
            "Late approvals are ratified without editing timestamps",
            "The register and workflow agree at close",
        ],
        "faqs": [
            ("Is an email delegation sufficient?", "No. It needs scope, limits, and dates recorded in the approval system so the authority can be tested."),
            ("What happens to an out-of-window approval?", "It is recorded as an exception and routed for ratification; the original timestamp is preserved."),
        ],
        "sources": ["greenbook", "nist53", "nistcsf"],
        "facts": [
            "A delegation is a time-bounded authority record, not a favor in an email. It needs a start date, an end date, a scope, a limit, and a named backup before it is used.",
            "The audit packet should join the delegation register, the approver roster, the approval timestamps, and the policy limit table so each approval can be tested against the authority in force on that date.",
            "The delegating manager owns the scope and the end date, the workflow administrator owns the system record, and AP may identify and route an out-of-window approval without editing its history.",
            "Each week the team compares approvals to the delegation register, focusing on the first and last two days of each window, and routes exceptions for ratification before the next payment run.",
            "An approval that lands after the end date is a control exception even when the same person would have approved it. The record should show the actual timestamp and the ratification decision, not a corrected one.",
            "At close the reviewer samples approvals near delegation boundaries, confirms the register was current, and records whether any late approval changed a payment that had already been released.",
        ],
    },
    {
        "slug": "ap-close-cutoff-accrual-reversal",
        "title": "Control Accrual Reversals at AP Month-End Close",
        "excerpt": "Tie every AP accrual to the evidence that created it and to a reversal rule that matches how the invoice actually arrives.",
        "keyword": "AP accrual reversal control",
        "subject": "AP accrual reversal control",
        "owner": "assistant controller",
        "system": "the ERP general ledger",
        "evidence": ["accrual register", "reversal journal", "goods-receipt-not-invoiced report", "close checklist sign-off"],
        "exception": "an accrual is reversed automatically in the next period even though the invoice arrived before the reversal posted",
        "shortAnswer": "Tie every AP accrual to the evidence that created it and to a reversal rule that matches how the invoice arrives, then reconcile the register to GR/IR before close.",
        "checklist": [
            "Each accrual references receipt, contract, or service evidence",
            "The reversal rule matches the expected invoice path",
            "GR/IR reconciles to the accrual register",
            "Reversal timing differences carry a bridge note",
        ],
        "faqs": [
            ("Who owns the accounting estimate?", "The assistant controller owns the estimate and any change to a reversal pattern; AP prepares the support."),
            ("What if the invoice arrives just after close?", "Record both dates and explain the bridge instead of netting the difference without a note."),
        ],
        "sources": ["greenbook", "irsrec", "gao"],
        "facts": [
            "An AP accrual is only supportable when it points to the receipt, contract, or service evidence that created the obligation, and when its reversal rule matches how the invoice will actually arrive.",
            "The close packet should include the accrual register, the reversal journal, the goods-receipt-not-invoiced report, and the close checklist sign-off, tied together by the same reference.",
            "AP may prepare the accrual schedule and the reversal entries, but the assistant controller owns the accounting estimate and any decision to change a reversal pattern.",
            "During close the team reconciles the GR/IR report to the accrual register, flags items with no receipt or no expected invoice, and assigns each open balance to a reviewer.",
            "A reversal that posts before the invoice is matched creates a temporary understatement. The case should record both dates and explain the bridge rather than netting the difference without a note.",
            "After close the reviewer tests a sample of reversed accruals against the following period's invoices and records whether the reversal rule still matches the underlying obligation.",
        ],
    },
    {
        "slug": "ap-duplicate-vendor-master-merge",
        "title": "Merge Duplicate Vendor Records Without Losing Payment History",
        "excerpt": "Merge duplicate vendors only on identity evidence, preserve the retired record as a cross-reference, and never merge across conflicting bank details.",
        "keyword": "duplicate vendor master merge",
        "subject": "duplicate vendor master merge",
        "owner": "vendor master owner",
        "system": "the vendor master",
        "evidence": ["vendor master extract", "tax identifier match", "bank account match", "open-item list", "merge audit log"],
        "exception": "two vendor records share a tax identifier but use different remit-to addresses in different currencies",
        "shortAnswer": "Merge duplicate vendors only on identity evidence, preserve the retired record as a cross-reference, and never merge across conflicting bank details without fresh verification.",
        "checklist": [
            "Identity rests on tax ID, legal name, and bank evidence",
            "Open items are mapped before the merge",
            "The retired record remains as a cross-reference",
            "Conflicting bank details trigger a fresh callback",
        ],
        "faqs": [
            ("Is a similar vendor name enough to merge?", "No. Name similarity is a lead; tax identifier, legal name, and bank evidence support the decision."),
            ("Can historical payments be lost in a merge?", "They should not be. The retired record is preserved as a cross-reference so history still resolves."),
        ],
        "sources": ["greenbook", "ofac", "nist53"],
        "facts": [
            "A vendor merge is an identity decision. Name similarity is a lead, not proof; the merge should rest on tax identifier, legal name, bank account, and open-item evidence.",
            "The packet should include the vendor master extract, the tax-identifier match, the bank-account comparison, the open-item list, and the merge audit log.",
            "AP may prepare the identity comparison and the open-item impact, but the vendor master owner authorizes the merge and treasury or security owns any bank-detail change.",
            "Before a merge, the team confirms open invoices, credits, and pending payments on both records, then tests the survivor record in a non-production copy where the ERP supports it.",
            "Two records with the same tax identifier but different remit-to addresses or currencies may be legitimate separate sites. Conflicting bank details should trigger a fresh callback, not a merge.",
            "After the merge the reviewer confirms the retired record remains as a cross-reference, open items moved intact, and historical payments still resolve to the survivor.",
        ],
    },
]

RESEARCH = [
    {
        "slug": "ap-touchless-invoice-capture-rate-research",
        "title": "Touchless Invoice Capture Rate: Evidence and Measurement Limits",
        "excerpt": "A bounded study of whether touchless-rate reporting distinguishes clean first-pass capture from records corrected after automatic posting.",
        "subject": "touchless invoice capture rate",
        "question": "whether touchless-rate reporting distinguishes clean first-pass capture from records corrected after automatic posting",
        "sources": ["nist53", "irsrec", "greenbook", "gao"],
        "facts": [
            "The study asks whether a touchless-rate metric separates invoices captured correctly on first pass from invoices that required a correction after an apparently automatic posting.",
            "The population is the set of supplier invoices entering one entity's capture lane during a declared window; the unit is one invoice linked to its capture record, correction events, and posting receipt.",
            "A touchless invoice is defined as one posted without a human field correction, a reopen, or a downstream rejection, and the definition is frozen before the extract is drawn.",
            "The data dictionary records document type, channel, OCR confidence, correction field, correction actor, reopen reason, and the posting timestamp, with missing states kept distinct from zero.",
            "Sampling takes consecutive invoices by channel plus a deliberate oversample of corrected records, because a clean random draw will underrepresent the cases that explain the rate.",
            "Analysis reports the rate by channel and document type, then compares corrected records to the correction field so the metric is not read as a quality score.",
            "Limitations include definition drift, unrecorded corrections made before capture, and the fact that a low correction count can reflect low review rather than high accuracy.",
            "The review ends with one testable change and a re-measure date, such as a targeted template fix for the most common correction field.",
        ],
    },
    {
        "slug": "ap-approval-turnaround-tail-research",
        "title": "The Tail of AP Approval Turnaround: A Case-Level Study",
        "excerpt": "A case-level method for finding where approval time accumulates and which invoices create the long tail.",
        "subject": "AP approval turnaround tail",
        "question": "where approval time accumulates and which cases create the long tail",
        "sources": ["greenbook", "nist53", "sba", "gao"],
        "facts": [
            "The study asks where approval time accumulates and whether the long tail comes from approver unavailability, queue design, or requests that should never have entered the approval lane.",
            "The population is invoices that entered one approval workflow during the window; the unit is one approval cycle measured from validated request to final approval.",
            "Elapsed time is split into waiting-for-owner, waiting-for-information, and waiting-for-system states so a single average cannot conceal the tail.",
            "The dictionary records request time, each owner assignment, information requests, delegation events, final approval, and any reopen, with timestamps taken from the workflow log rather than email.",
            "Sampling combines a random cohort with all cycles in the top decile, because the tail is the object of study and a clean random sample will understate it.",
            "Analysis reports the median, the 90th percentile, and the share of tail cases attributable to each waiting state, with the case count behind each share.",
            "Limitations include approval work that happens outside the workflow, clock differences across regions, and the inability to observe a decision that was never requested.",
            "The review ends with one queue or ownership change and a date to re-measure the tail, not a general instruction to approve faster.",
        ],
    },
    {
        "slug": "ap-on-time-payment-measurement-research",
        "title": "Paid on Time Versus On-Time Payment: A Measurement Study",
        "excerpt": "A study of how payment-date metrics can describe supplier terms, internal approval, or funding, and why the baseline must be stated.",
        "subject": "on-time payment measurement",
        "question": "whether payment-date metrics measure supplier terms, internal approval, or funding decisions",
        "sources": ["fedach", "greenbook", "sba", "gao"],
        "facts": [
            "The study asks whether an on-time payment metric measures supplier terms, internal approval, or funding decisions, because the same payment date can be on time against one baseline and late against another.",
            "The population is payments released for one entity in the window; the unit is one payment linked to its invoice terms, approval date, scheduled run, and value date.",
            "On-time is defined against the contractual due date, with the tolerance, calendar, and value-date convention fixed before the extract is drawn.",
            "The dictionary stores invoice date, receipt date, term code, calculated due date, approval date, scheduled run, value date, and any hold, keeping each timestamp's source visible.",
            "Sampling includes all late payments above a value threshold plus a random sample of on-time payments, so the comparison is not built only from failures.",
            "Analysis separates lateness caused by approval, by run scheduling, and by funding, and reports each share with the count and value behind it.",
            "Limitations include term dates that were never captured, early-payment discounts, and payments whose value date differs from the date the supplier applies cash.",
            "The review ends with one change to either the term source, the run calendar, or the approval cut-off, plus a date to re-measure.",
        ],
    },
    {
        "slug": "ap-vendor-master-change-latency-research",
        "title": "Vendor Master Change Latency and Control Evidence",
        "excerpt": "A bounded study of how long verified vendor changes take and where control evidence is lost between verification and the system update.",
        "subject": "vendor master change latency",
        "question": "how long verified vendor changes take and where control evidence is lost",
        "sources": ["greenbook", "nist53", "ftc", "gao"],
        "facts": [
            "The study asks how long a verified vendor master change takes from request to usable record, and where control evidence is lost between verification and the system update.",
            "The population is vendor change requests for one entity in the window; the unit is one request linked to its verification evidence, approval, system update, and downstream use.",
            "Latency is measured from the first complete request, not from the first email, and the completion event is the usable record in the master, not the approval message.",
            "The dictionary records request channel, change type, verification method, callback result, approver, system update time, and any downstream rejection, with each source identified.",
            "Sampling includes every bank-detail change plus a random set of address and contact changes, because bank changes carry the highest control consequence.",
            "Analysis reports latency by change type and the share of requests that needed rework, with the verification step that failed recorded separately.",
            "Limitations include requests that arrived incomplete, changes made outside the standard channel, and the difficulty of observing a verification call that was never logged.",
            "The review ends with one change to the request form or the verification log and a date to re-measure latency and rework.",
        ],
    },
    {
        "slug": "ap-unapplied-credit-balance-research",
        "title": "Unapplied Supplier Credit Balances: A Reconciliation Study",
        "excerpt": "A study of why supplier credits remain unapplied and whether aging alone explains the balance.",
        "subject": "unapplied supplier credit balances",
        "question": "why credits remain unapplied and whether aging explains the balance",
        "sources": ["greenbook", "irsrec", "gao", "sba"],
        "facts": [
            "The study asks why supplier credits remain unapplied and whether aging alone explains the balance or whether the cause sits in matching, ownership, or a missing refund decision.",
            "The population is open supplier credit memos for one entity at the close date; the unit is one credit linked to its source document, candidate invoices, owner, and disposition.",
            "A credit is unapplied when no invoice, refund, or approved future use has consumed it, and the definition excludes credits already scheduled for the next run.",
            "The dictionary records credit date, supplier site, amount, currency, source, candidate matches, owner, last action, and disposition, with a reason code for each unmatched state.",
            "Sampling takes all credits above a value threshold plus an age-stratified sample of smaller credits, so the tail and the volume are both represented.",
            "Analysis groups credits by age and cause, then tests whether the oldest credits share a supplier, a document type, or an owner transition.",
            "Limitations include credits recorded outside the subledger, supplier statements that never arrived, and refund decisions that were made but not entered.",
            "The review ends with one routing or matching change and a date to re-measure the unapplied balance and its aging.",
        ],
    },
    {
        "slug": "ap-shared-mailbox-response-latency-research",
        "title": "AP Shared Mailbox Response Latency and Ownership",
        "excerpt": "A study of whether shared-mailbox first-response time reflects ownership of the work or only monitoring of the inbox.",
        "subject": "AP shared mailbox response latency",
        "question": "whether shared-mailbox first-response time reflects ownership or just inbox monitoring",
        "sources": ["cisa", "nistcsf", "ftc", "nist53"],
        "facts": [
            "The study asks whether shared-mailbox first-response time reflects ownership of the work or only monitoring of the inbox, because a fast acknowledgment can coexist with an unowned case.",
            "The population is messages received in one AP shared mailbox during the window; the unit is one message linked to its first response, owner assignment, and eventual disposition.",
            "First response is defined as a substantive reply or a recorded action, not an automatic acknowledgment, and the definition is fixed before the extract.",
            "The dictionary records received time, first response, responder, assignment event, case link, and disposition, keeping automated replies separate from human ones.",
            "Sampling combines a random set of messages with all messages that received no substantive response within the policy window, so silence is measured rather than inferred.",
            "Analysis separates response time from ownership time and reports the share of messages that were answered but never assigned.",
            "Limitations include replies sent outside the mailbox, messages that were never legitimate AP requests, and the fact that response speed does not show resolution quality.",
            "The review ends with one assignment or triage change and a date to re-measure both first response and owned time.",
        ],
    },
    {
        "slug": "ap-accrual-reversal-error-research",
        "title": "Accrual Reversal Errors at AP Close: A Bounded Study",
        "excerpt": "A study of which accrual reversal errors survive the close checklist and what evidence would catch them earlier.",
        "subject": "accrual reversal errors",
        "question": "which reversal errors survive the close checklist and what evidence would catch them",
        "sources": ["greenbook", "irsrec", "gao", "nist53"],
        "facts": [
            "The study asks which accrual reversal errors survive the close checklist and what evidence would catch them before the following period's comparison.",
            "The population is AP accruals reversed in one close cycle; the unit is one accrual linked to its support, reversal entry, and the invoice that later arrived.",
            "A reversal error is defined as a reversal that does not match the accrual's stated rule or that closes an obligation still supported by evidence, and the rule is frozen before testing.",
            "The dictionary records accrual reference, support type, amount, reversal date, invoice arrival date, matching result, and reviewer sign-off, with the evidence source for each field.",
            "Sampling includes all accruals above a value threshold plus a random set below it, and oversamples accruals with no receipt reference.",
            "Analysis classifies each error by cause and reports the share that the checklist could have caught versus the share that required a later invoice comparison.",
            "Limitations include accruals supported by estimates that cannot be tested, late invoices outside the window, and reversals posted by a system rule the reviewer cannot see.",
            "The review ends with one checklist or rule change and a date to re-test the same error class.",
        ],
    },
]

# --- prose composition -------------------------------------------------------

SUPPORT = {
    0: [
        "Write the decision, the entity, the period, and the accountable owner at the top of the case so a reviewer does not have to infer them.",
        "State what is being decided and what is explicitly out of scope; an open question with no boundary will collect unrelated work.",
        "Name the person who can close the question and the date by which the answer is needed before the queue starts moving.",
    ],
    1: [
        "Record the source, the version, and the observation time next to each value, because a stale extract and a current one look identical once copied into a summary.",
        "Keep the original document separate from the working copy; annotation is allowed, but it cannot replace the source that the reviewer will inspect.",
        "The {e0} and the {e1} should agree before the case is treated as complete, and any difference should be named rather than smoothed.",
    ],
    2: [
        "Preparation, comparison, and follow-up can sit with the AP team; approval, payment release, and vendor-master changes stay with the named owner.",
        "A complete packet is not an approval. The decision needs a person, a timestamp, and a scope that matches the action being taken.",
        "When urgency pushes against the boundary, the case should pause and route the decision rather than letting the deadline expand the role.",
    ],
    3: [
        "At the start of the shift, review the oldest items, the unassigned handoffs, and the cases paused for more than two business days, then set one next action per item.",
        "A status update should describe a verifiable event linked to the {system} or the {e1}, not a feeling about progress.",
        "Leave the next shift a queue that can be worked without reconstructing the day from chat history or personal notes.",
    ],
    4: [
        "When evidence conflicts, preserve both values, record the time each was observed, and route one answerable question to the owner.",
        "A stop is not a service failure; it is the control working before the error reaches a supplier, a payment, or the ledger.",
        "If the exception repeats, record a reason code so the pattern can be reviewed without rereading every message in the thread.",
    ],
    5: [
        "Close only when the destination field, the approver, and the time of the final check are all visible in the record.",
        "The reviewer should be able to trace the case from the original request to the final value without opening a personal inbox.",
        "If the destination is another team, keep the case open until that team acknowledges receipt and the surviving record is confirmed.",
    ],
}


def fill(text, a):
    return (text.replace("{subject}", a["subject"])
                .replace("{exception}", a.get("exception", "the evidence no longer matches the record"))
                .replace("{system}", a["system"])
                .replace("{e0}", a["evidence"][0])
                .replace("{e1}", a["evidence"][1] if len(a["evidence"]) > 1 else a["evidence"][0]))


BLOG_P2 = [
    [
        "The scope note should name the entity, the period, the system of record, and the person who can answer the open question for {subject}.",
        "Write the boundary before the queue opens: what enters {subject}, what stays out, and which decision is still unresolved.",
        "A reviewer who cannot tell why {subject} is in scope will either widen it or ignore it, so the reason belongs in the case header.",
    ],
    [
        "Before the case moves, compare the {e0} with the {e1} and record which one governs when they disagree.",
        "The evidence map for {subject} should show the original, the working copy, and the final value as three separate states.",
        "A value copied from {system} is only as current as its export time, so the timestamp belongs beside the number.",
    ],
    [
        "Write the authority boundary into the case template so the reviewer does not have to infer who may act on {subject}.",
        "Preparation and approval may share a screen, but they should not share a person; the record should show both roles.",
        "A delegation or standing approval needs a limit and an expiry before it can be used for {subject}.",
    ],
    [
        "The daily queue review should end with an owner, a next action, and a due time for every open {subject} item.",
        "Compare the morning queue count with the prior close so a stable total does not hide an aging tail.",
        "A case that has no next action should be treated as an exception even when its status says in progress.",
    ],
    [
        "The exception record should include the condition, the decision, the releaser, and the time the dependent action resumed.",
        "When {exception}, preserve both the original and the corrected view and route one bounded question to the owner.",
        "A repeated exception should become a reason code in the queue, not a story retold in each thread.",
    ],
    [
        "The close note should show the final value, the approver, the time of the final check, and the surviving evidence reference.",
        "After close, sample one routine and one reopened {subject} case and rebuild each from its evidence map.",
        "Record the next review date before the case closes so the control does not depend on memory.",
    ],
]

RESEARCH_P2 = [
    "The research note states the decision the study is meant to inform, the entity and period in scope, and the questions it will not answer.",
    "Every case in the {subject} population carries a stable key, a source reference, and a recorded inclusion or exclusion decision.",
    "The measure, the denominator, and the exclusion rule are written together so the reported result can be recomputed.",
    "The field dictionary is archived with the extract, and each field names its source, its allowed states, and its missing-value rule.",
    "The sampling frame is frozen as an export before the first result is inspected, and substitutions are logged in the same file.",
    "The analysis separates what was observed from what the team believes caused it, and it reports the count behind each share.",
    "The limitations name the population that cannot be described and the evidence that would be needed to describe it.",
    "The review ends with one change, one measure, one owner, and a date to test whether the change moved the result.",
]

BLOG_P3 = [
    [
        "Record the request, the owner, and the open decision in one place so the scope does not drift between shifts.",
        "Give the case a stable key before any document is attached; a renamed case breaks the audit trail.",
        "State the date the boundary will be reviewed, because an old scope quietly becomes the new normal.",
    ],
    [
        "Attach the {e0} to the case and label its version; a screenshot without a source cannot be compared later.",
        "Keep the original and the working extract in the same folder so the reviewer does not have to guess which is authoritative.",
        "Mark missing evidence as missing, with a reason, instead of leaving a blank that looks like a zero.",
    ],
    [
        "Name the approver and the limit in the case itself; a reference to a policy page is not a decision.",
        "Route a scope change to the owner as a new decision rather than editing the earlier approval.",
        "Record rejected and deferred requests too, because those choices shape the queue.",
    ],
    [
        "End the shift with a queue view that shows owner, age, next action, and missing evidence in one screen.",
        "Log the handoff only when the receiver acknowledges the case and the next action.",
        "Compare the queue export to the prior day before reporting volume; recategorised work can look like new demand.",
    ],
    [
        "Keep the stop reason, the release decision, and the resume time together so the delay can be reviewed without guessing.",
        "When access blocks the work, record the system, the role requested, and the person who can grant it.",
        "Do not let an escalation end in silence; an unanswered escalation remains open.",
    ],
    [
        "Test the close by opening one case from the queue export and tracing it to the final value without using a personal inbox.",
        "Keep the prior procedure available so the next reviewer can compare the old and new states.",
        "Report what moved, what did not, and what remains unknown rather than only the cases that closed.",
    ],
]

RESEARCH_SUPPORT = [
    [
        "The question is written so a reviewer can tell which decision the result would change and which decision it would leave untouched.",
        "The scope names the entity, the observation window, the systems included, and the exclusions fixed before collection.",
    ],
    [
        "The unit is defined once, and cases that span owners or periods are handled by the stated rule rather than by convenience.",
        "A case that creates a new requirement on reopen is counted separately and linked to the earlier record.",
    ],
    [
        "Each measure has one definition, and a change to that definition is kept beside the prior version for the transition period.",
        "Confirmed, inferred, conflicting, unavailable, and awaiting-decision states are reported separately rather than collapsed.",
    ],
    [
        "Each field names its allowed states, its source, and its missing-value rule before the first case is coded.",
        "The dictionary is tested on a boundary case, a reopened case, and a case with a missing record.",
    ],
    [
        "A random or systematic start rule is recorded with the export, and out-of-scope substitutions are logged.",
        "The sample includes adverse cases because a clean draw of recent closures will miss the work that needs attention.",
    ],
    [
        "Descriptive findings are separated from causal claims, and every share is reported with its numerator and denominator.",
        "A trend is checked against definition, staffing, and system changes before it is read as a process effect.",
    ],
    [
        "Small samples are reported with their range, and the cases that create the variation remain visible in the table.",
        "A result describes the observed sample, not the whole industry or every team in the service.",
    ],
    [
        "The next action is one testable change with a named owner and a date, not a list of intentions.",
        "The re-measure date is set before the change begins so the review does not drift.",
    ],
]

RESEARCH_P3 = [
    "The note also records the decision owner and the date by which the first result will be reviewed.",
    "The case key remains stable if the case moves between owners or changes status during the window.",
    "A derived measure records its formula and the source fields used, so a second reviewer can reproduce the arithmetic.",
    "Sensitive evidence stays in the approved repository; the analysis file keeps only the reference and the access path.",
    "The count of substituted and out-of-scope cases is reported with the sample, not buried in a working file.",
    "An outlier is explained at case level before it is treated as a process signal.",
    "A missing record is evidence about the record, not proof that the work was never done.",
    "The action log names the change, the owner, the due date, and the measure that will show whether it worked.",
]


def blog_sections(a, seed):
    out = []
    for i, heading in enumerate(BLOG_SECTIONS):
        pool = SUPPORT[i]
        support = fill(pool[(seed + i) % len(pool)], a)
        extra = fill(pool[(seed + i + 1) % len(pool)], a)
        p1 = a["facts"][i] + " " + support
        p2 = fill(BLOG_P2[i][(seed + i) % 3], a) + " " + extra
        p3 = fill(BLOG_P3[i][(seed + i + 1) % 3], a)
        out.append({"title": heading, "heading": heading, "paragraphs": [" ".join([p1, p2, p3])]})
    return out


def research_body(a, seed):
    out = []
    for i, heading in enumerate(RESEARCH_SECTIONS):
        pool = RESEARCH_SUPPORT[i]
        support = pool[(seed + i) % len(pool)]
        if i == 2:
            support = ("Keep the measure and the population definition in the same note; a rate without a denominator is a slogan, "
                       "and a denominator without an exclusion rule cannot be reproduced.")
        elif i == 4:
            support = ("Freeze the sampling frame as an export with a date, filter, and row count, then record every substitution "
                       "and exclusion before the first result is read.")
        elif i == 5:
            support = ("Report the numerator, denominator, cohort, period, missing count, and unresolved count together; a single "
                       "percentage hides the part of the sample that could not be classified.")
        elif i == 6:
            support = ("The cited sources frame control, recordkeeping, security, or payment practice in their own domains; they do "
                       "not certify a provider or establish an outcome for a private transaction.")
        p1 = a["facts"][i] + " " + support
        p2 = fill(RESEARCH_P2[i], a) + " " + pool[(seed + i + 1) % len(pool)]
        p3 = RESEARCH_P3[i]
        out.append({"heading": heading, "paragraphs": [" ".join([p1, p2, p3])]})
    return out


# --- thumbnail generation ----------------------------------------------------

PALETTES = [
    ((28, 32, 44), (232, 184, 74), (94, 202, 190)),
    ((30, 40, 34), (214, 196, 110), (128, 200, 150)),
    ((40, 28, 38), (224, 158, 170), (176, 160, 224)),
    ((24, 38, 46), (120, 196, 224), (232, 196, 120)),
    ((44, 36, 24), (228, 178, 96), (150, 200, 180)),
    ((32, 30, 48), (188, 170, 236), (232, 188, 140)),
    ((26, 42, 40), (150, 220, 190), (216, 188, 120)),
]


def title_layout(draw, title, bold, max_width=690):
    for size in range(52, 29, -2):
        font = ImageFont.truetype(bold, size)
        lines = textwrap.wrap(title, width=max(22, int(34 * 44 / size)))
        if len(lines) <= 4 and max(draw.textbbox((0, 0), line, font=font)[2] for line in lines) <= max_width:
            return font, lines
    return ImageFont.truetype(bold, 30), textwrap.wrap(title, 30)


def make_thumbnail(path, title, section, idx, bold, regular):
    bg, accent, second = PALETTES[idx % len(PALETTES)]
    im = Image.new("RGB", (1200, 630), bg)
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((30, 28, 1170, 602), 22, outline=accent, width=3)
    d.rectangle((790, 31, 1167, 599), fill=tuple(min(255, x + 10) for x in bg))
    # Distinct geometric motif per article.
    motif = idx % 5
    if motif == 0:
        for r in range(6):
            y = 78 + r * 82
            x = 820 + ((idx * 37 + r * 23) % 70)
            d.rounded_rectangle((x, y, x + 288, y + 52), 9, outline=second, width=3)
            d.line((x + 22, y + 18, x + 150, y + 18), fill=accent, width=4)
            d.line((x + 22, y + 34, x + 232, y + 34), fill=(150, 142, 120), width=3)
    elif motif == 1:
        for r in range(5):
            for c in range(4):
                x, y = 812 + c * 88, 88 + r * 100
                d.rounded_rectangle((x, y, x + 68, y + 78), 8, outline=accent if (r + c) % 3 else second, width=3)
                d.line((x + 12, y + 58, x + 56, y + 58), fill=second, width=3)
    elif motif == 2:
        pts = [(840, 150), (980, 110), (1100, 250), (960, 330), (860, 430), (1080, 470)]
        for j in range(len(pts) - 1):
            d.line((pts[j], pts[j + 1]), fill=second, width=4)
        for x, y in pts:
            d.ellipse((x - 16, y - 16, x + 16, y + 16), outline=accent, width=5)
    elif motif == 3:
        for r in range(4):
            y = 120 + r * 110
            d.rounded_rectangle((830, y, 1130, y + 70), 34, outline=accent, width=3)
            d.line((860, y + 35, 1090, y + 35), fill=second, width=5)
    else:
        for r in range(5):
            x = 820 + r * 62
            d.rounded_rectangle((x, 110 + (r % 2) * 70, x + 34, 470), 16, outline=second, width=3)
        d.ellipse((930, 230, 1050, 350), outline=accent, width=9)
        d.line((960, 292, 990, 320, 1024, 258), fill=second, width=12, joint="curve")
    label = "AP OPERATING GUIDE" if section == "Blog" else "AP RESEARCH REPORT"
    d.rounded_rectangle((54, 50, 470, 98), 9, fill=second)
    d.text((72, 63), label, font=ImageFont.truetype(bold, 21), fill=bg)
    font, lines = title_layout(d, title, bold)
    y = 150
    for line in lines:
        d.text((56, y), line, font=font, fill=(250, 248, 240))
        y += font.size + 12
    d.line((56, 474, 742, 474), fill=accent, width=4)
    d.text((56, 506), "Outsource Accounts Payable", font=ImageFont.truetype(bold, 27), fill=(250, 248, 240))
    d.text((56, 552), f"Published {VISIBLE}", font=ImageFont.truetype(regular, 21), fill=second)
    path.parent.mkdir(parents=True, exist_ok=True)
    exif = Image.Exif()
    exif[270] = title
    im.save(path, "WEBP", quality=88, method=6, exif=exif)


def main():
    bold = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
    regular = "/System/Library/Fonts/Supplemental/Arial.ttf"

    blog_drafts = []
    for i, a in enumerate(BLOGS):
        a["system"] = a["system"] if "system" in a else "the AP workflow platform"
        detail = {
            "thumbnail": f"/nov2-heroes/{a['slug']}.webp",
            "shortAnswer": a["shortAnswer"],
            "published": DATE,
            "modified": DATE,
            "mainKeyword": a["keyword"],
            "sections": blog_sections(a, i),
            "checklistTitle": f"Review the {a['subject']} record",
            "checklist": a["checklist"],
            "bodyLinks": [
                {"href": "/services", "label": "Accounts payable support services"},
                {"href": "/research", "label": "Source-backed AP research"},
                {"href": "/contact-us", "label": "Contact the team"},
            ],
            "faqs": [{"question": q, "answer": ans} for q, ans in a["faqs"]],
            "sources": [
                {"name": SOURCES[k][0], "url": SOURCES[k][1], "note": f"Checked {VISIBLE}."}
                for k in a["sources"]
            ],
        }
        blog_drafts.append({
            "slug": a["slug"], "title": a["title"], "excerpt": a["excerpt"],
            "minutes": 9, "published": DATE, "detail": detail,
        })

    research_records = []
    for i, a in enumerate(RESEARCH):
        a["system"] = a.get("system", "the source record")
        a["evidence"] = a.get("evidence", ["source export", "working paper"])
        research_records.append({
            "slug": a["slug"],
            "title": a["title"],
            "excerpt": a["excerpt"],
            "published": DATE,
            "modified": DATE,
            "thumbnail": f"/nov2-heroes/{a['slug']}.webp",
            "keywords": ["accounts payable outsourcing", a["subject"], "Philippines AP support"],
            "sections": research_body(a, i),
            "citations": [
                {"label": SOURCES[k][0], "href": SOURCES[k][1]}
                for k in a["sources"]
            ],
            "internalLinks": [
                {"label": "Research library", "href": "/research"},
                {"label": "Accounts payable services", "href": "/services"},
                {"label": "Practical AP guides", "href": "/blog"},
            ],
            "cta": "Map the evidence boundary to a controlled AP support lane.",
            "serviceHandoff": {
                "heading": "Turn the evidence design into an AP operating brief",
                "body": f"Bring the source systems, entities, {a['subject']} population, exception owners, and retained decision roles to a bounded scoping session.",
                "label": "Plan the AP workflow",
                "href": "/contact-us",
            },
        })

    assert len(blog_drafts) == 8, len(blog_drafts)
    assert len(research_records) == 7, len(research_records)

    blog_file = ROOT / "app/blog-nov2-batch.ts"
    research_file = ROOT / "app/research-nov2-batch.ts"
    blog_file.write_text(
        "import type {Draft} from './blog-oct2-batch';\n"
        "export const nov2BlogPublicationDate='2026-11-02';\n"
        "export const nov2BlogDrafts:Draft[]=" + json.dumps(blog_drafts, indent=2, ensure_ascii=False) + ";\n"
        "export const nov2BlogPosts=nov2BlogDrafts.map(({slug,title,excerpt,minutes})=>({slug,title,excerpt,minutes}));\n"
        "export const nov2BlogDetails=Object.fromEntries(nov2BlogDrafts.map(post=>[post.slug,post.detail]));\n"
    )
    research_file.write_text(
        "import type {ResearchPost} from './research-batch';\n"
        "export const nov2ResearchPublicationDate='2026-11-02';\n"
        "type Nov2ResearchRecord=Omit<ResearchPost,'body'>&{sections:{heading:string;paragraphs:string[]}[]};\n"
        "const nov2ResearchRecords:Nov2ResearchRecord[]=" + json.dumps(research_records, indent=2, ensure_ascii=False) + ";\n"
        "export const nov2ResearchBatch:ResearchPost[]=nov2ResearchRecords.map(post=>({...post,body:post.sections.map(section=>section.paragraphs.join('\\n\\n'))}));\n"
    )

    articles = []
    for i, p in enumerate(blog_drafts):
        path = ROOT / "public/nov2-heroes" / f"{p['slug']}.webp"
        make_thumbnail(path, p["title"], "Blog", i, bold, regular)
        text = " ".join([p["detail"]["shortAnswer"], *[x for s in p["detail"]["sections"] for x in s["paragraphs"]]])
        articles.append({
            "section": "Blog", "title": p["title"], "slug": p["slug"],
            "route": f"/blog/{p['slug']}",
            "sourcePath": "app/blog-nov2-batch.ts",
            "thumbnailPath": str(path.relative_to(ROOT)),
            "publicationDate": DATE, "wordCount": len(text.split()),
            "sourceCount": len(p["detail"]["sources"]),
        })
    for i, p in enumerate(research_records):
        path = ROOT / "public/nov2-heroes" / f"{p['slug']}.webp"
        make_thumbnail(path, p["title"], "Research", 8 + i, bold, regular)
        text = " ".join(p["body"]) if "body" in p else " ".join(x for s in p["sections"] for x in s["paragraphs"])
        articles.append({
            "section": "Research", "title": p["title"], "slug": p["slug"],
            "route": f"/research/{p['slug']}",
            "sourcePath": "app/research-nov2-batch.ts",
            "thumbnailPath": str(path.relative_to(ROOT)),
            "publicationDate": DATE, "wordCount": len(text.split()),
            "sourceCount": len(p["citations"]),
        })
    for a in articles:
        a["sourceSha256"] = hashlib.sha256((ROOT / a["sourcePath"]).read_bytes()).hexdigest()
        a["thumbnailSha256"] = hashlib.sha256((ROOT / a["thumbnailPath"]).read_bytes()).hexdigest()
        a["thumbnailDimensions"] = [1200, 630]

    manifest = {
        "site": "OutsourceAccountsPayable.com",
        "domain": "https://outsourceaccountspayable.com",
        "repository": "coolifystealthagents/outsourceaccountspayable",
        "branch": "main",
        "publicationDate": DATE,
        "visibleDate": VISIBLE,
        "counts": {"blog": 8, "research": 7, "total": 15, "thumbnails": 15},
        "registryPaths": ["app/data.ts"],
        "articles": articles,
    }
    (ROOT / "publishing/2026-11-02/manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print("Generated 8 Blog, 7 Research, 15 WebP thumbnails")


if __name__ == "__main__":
    main()
