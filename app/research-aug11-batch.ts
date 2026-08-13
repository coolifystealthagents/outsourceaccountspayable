import type {ResearchPost} from './research-batch';

const gov = {
  greenBook: {label:'GAO: Green Book Internal Control Standards',href:'https://www.gao.gov/greenbook'},
  nistLeastPrivilege: {label:'NIST: Least Privilege Glossary',href:'https://csrc.nist.gov/glossary/term/least_privilege'},
  nist80053: {label:'NIST SP 800-53 Rev. 5',href:'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'},
  cisaPhishing: {label:'CISA: Recognize and Report Phishing',href:'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing'},
  irsW9: {label:'IRS: About Form W-9',href:'https://www.irs.gov/forms-pubs/about-form-w-9'},
  irsW9Instructions: {label:'IRS: Instructions for Form W-9',href:'https://www.irs.gov/instructions/iw9'},
  ftcBreach: {label:'FTC: Data Breach Response Guide',href:'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business'},
};

const links = [{label:'AP services',href:'/services'},{label:'AP inbox management',href:'/services/ap-inbox-management'},{label:'Research library',href:'/research'}];
const thumbnails:Record<string,string> = {
  'ap-invoice-date-validation-research':'ap-invoice-cutoff-research.svg',
  'ap-remittance-address-research':'ap-remittance-advice-research.svg',
  'ap-invoice-split-coding-research':'ap-invoice-coding-control-research.svg',
  'ap-vendor-credit-balance-research':'ap-credit-memo-reconciliation-research.svg',
  'ap-vendor-email-verification-research':'ap-vendor-inquiry-response-research.svg',
  'ap-invoice-attachment-completeness-research':'ap-receipt-evidence-research.svg',
  'ap-payment-status-inquiry-research':'ap-payment-calendar-control-research.svg',
  'ap-vendor-w9-follow-up-research':'ap-tax-document-collection-research.svg',
  'ap-access-review-evidence-research':'ap-outsourced-ap-access-review-research.svg',
  'ap-data-incident-invoice-records-research':'ap-document-retention-research.svg'
};
const base = (slug:string,title:string,excerpt:string,published:string,body:string[],citations:ResearchPost['citations']):ResearchPost => ({
  slug,title,excerpt,published,modified:published,thumbnail:`/research-thumbnails/${thumbnails[slug]}`,
  keywords:['accounts payable outsourcing','AP controls','finance operations'],body,citations,internalLinks:links,
  cta:'Use this research to define a controlled AP support lane.'
});

export const aug11ResearchBatch:ResearchPost[] = [
  base('ap-invoice-date-validation-research','Invoice date validation in AP support','How to distinguish invoice-date evidence, service-period questions, and owner decisions before an invoice enters approval.','2026-08-12',[
    'Research question: which date fields can a support lane compare without deciding accounting treatment? The answer is to preserve the invoice date, receipt date, service period, and source location as separate evidence rather than collapsing them into one “correct” date.',
    'Evidence design: the preparation record should identify missing or conflicting dates, link the source document, and route the exception to a named finance owner. A complete field comparison is useful; an unsupported correction is not.',
    'Application: sample ordinary invoices and exception cases separately. Reviewers can then see whether date checks reduce avoidable rework while keeping cutoff and accounting judgments with the responsible employee.'
  ],[gov.greenBook]),
  base('ap-remittance-address-research','Remittance-address verification research','A source-backed look at verifying remittance information while protecting the boundary around vendor changes and payment release.','2026-08-12',[
    'Research question: when does a remittance address become a payment-risk signal? A mismatch between the invoice, approved vendor record, and a new email request should be preserved as an exception, not silently normalized by a preparation role.',
    'Control implication: compare the request against approved records, retain the original message and document, and use an independently verified channel for any sensitive change. CISA’s phishing guidance supports treating urgent or unusual requests as signals requiring care.',
    'Operating model: the support lane can assemble the comparison and stop the packet. An authorized finance owner verifies the change, approves the master-data update, and decides whether a payment may proceed.'
  ],[gov.greenBook,gov.cisaPhishing]),
  base('ap-invoice-split-coding-research','Split-coding preparation research for invoices','How to prepare multi-line invoice coding evidence without turning a support role into the final accounting decision-maker.','2026-08-12',[
    'Research question: what makes a split-coded invoice reviewable? The packet should retain line descriptions, allocation rationale, purchase-order or receipt references where available, and the source of any proposed department or account mapping.',
    'Finding: recurring patterns can be prepared from approved examples, but unusual allocations need a visible stop condition. A reviewer should be able to compare the proposed split with the source record and the finance owner’s documented rule.',
    'Pilot method: select recurring and unusual invoices, measure how often proposed splits need correction, and record why. The measure describes review friction; it is not a benchmark or a promise of accounting accuracy.'
  ],[gov.greenBook]),
  base('ap-vendor-credit-balance-research','Vendor credit-balance follow-up research','A practical research model for locating open credits, linking them to invoices, and routing reconciliation decisions to finance owners.','2026-08-12',[
    'Research question: why do credits remain unresolved? Common evidence gaps include a credit memo without the originating invoice, a statement balance without transaction detail, or an owner who has not decided whether a credit should be applied or refunded.',
    'Evidence model: the support packet should list the vendor, credit reference, amount as shown on the source, related invoice candidates, statement date, and unresolved question. It should avoid inventing an application or netting outcome.',
    'Review design: age the queue by evidence completeness and named owner, then inspect a sample of closed items for source links and decision records. This keeps follow-up measurable without granting authority to settle the balance.'
  ],[gov.greenBook]),
  base('ap-vendor-email-verification-research','Vendor-email verification controls research','How AP teams can separate ordinary vendor correspondence from requests that need independent verification or escalation.','2026-08-12',[
    'Research question: which email characteristics deserve a second look? A new bank instruction, urgent payment pressure, a changed domain, or an unusual attachment can all change the risk of an otherwise ordinary invoice conversation.',
    'Control boundary: a support lane can preserve the message, compare it with approved vendor details, and route it. It should not rely on the requesting message itself as independent proof or authorize a sensitive record change.',
    'Implementation: define approved verification channels, record who completed the verification, and retain stopped examples for reviewer training. CISA’s phishing guidance is a relevant external reference for recognizing suspicious requests.'
  ],[gov.cisaPhishing,gov.greenBook]),
  base('ap-invoice-attachment-completeness-research','Invoice-attachment completeness research','A reviewable method for identifying missing invoice support before approval packets move forward.','2026-08-12',[
    'Research question: what is “complete” for an invoice packet? The answer depends on the organization’s written policy, but the evidence trail should make the required document set, received files, missing items, and next owner visible.',
    'Finding: completeness checks are strongest when they distinguish absence from irrelevance. A missing receipt, order, tax document, or approval reference should be named rather than hidden behind a generic status.',
    'Pilot method: compare stopped and completed packets, record the evidence gap and resolution path, and review whether the checklist reflects the actual policy. The support lane prepares the packet; the owner decides if an exception is acceptable.'
  ],[gov.greenBook,gov.irsW9]),
  base('ap-payment-status-inquiry-research','AP payment-status inquiry research','How to answer routine vendor status questions while keeping payment commitments, exceptions, and release decisions with authorized owners.','2026-08-12',[
    'Research question: what can be stated safely in a status response? A support lane can report the current recorded stage, missing evidence, or assigned owner when those facts are supported by the system record.',
    'Boundary: it should not promise a payment date, disclose information outside the approved communication policy, or override an approval or exception state. Unclear status belongs in a named review queue.',
    'Measurement: sample responses for source traceability, accurate stage language, and escalation quality. These checks improve communication without creating a new payment authority.'
  ],[gov.greenBook]),
  base('ap-vendor-w9-follow-up-research','Vendor W-9 follow-up research','A source-led approach to collecting missing W-9 information and routing tax-form questions without deciding vendor tax treatment.','2026-08-12',[
    'Research question: what is the proper role for AP support when a vendor tax form is missing? The support lane can request the organization’s approved form, check whether a response was received, and preserve the form with the vendor record according to policy.',
    'Finding: Form W-9 is a source document, not a substitute for tax advice. The packet should flag incomplete or inconsistent information and send tax-status questions to the responsible finance or tax owner.',
    'Control design: record request date, response status, document location, and escalation owner. The IRS instructions provide the authoritative reference for questions that exceed document collection.'
  ],[gov.irsW9,gov.irsW9Instructions]),
  base('ap-access-review-evidence-research','AP support access-review evidence research','What evidence helps a finance owner review whether AP support access still matches the assigned work.','2026-08-12',[
    'Research question: what should an access review compare? The reviewer needs the role’s current scope, systems and permissions, active user list, last review, exceptions, and removal actions—not merely a confirmation that access exists.',
    'Least-privilege implication: access should be limited to what the starting lane needs, with sensitive changes and approvals kept outside the support role. NIST’s least-privilege guidance gives a clear principle for that boundary.',
    'Operating model: retain the review decision, any remediation ticket, and the next review owner. A support lane can assemble evidence; an authorized owner approves, changes, or removes access.'
  ],[gov.nistLeastPrivilege,gov.nist80053]),
  base('ap-data-incident-invoice-records-research','Invoice-record data incident response research','How to organize the first evidence trail when invoice or vendor records may have been exposed or altered.','2026-08-12',[
    'Research question: what should happen when an AP record appears compromised? Preserve the original signal, identify affected records and systems, stop questionable changes, and escalate through the organization’s incident process.',
    'Evidence boundary: do not overwrite suspicious records, speculate about scope, or notify outside parties without the authorized owner. The FTC response guide emphasizes a structured response that includes securing systems and understanding what information was involved.',
    'Preparation model: the AP support lane can assemble record identifiers, timestamps, source messages, and observed actions for the incident owner. The incident and finance owners decide containment, notification, and recovery steps.'
  ],[gov.ftcBreach,gov.nist80053])
];
