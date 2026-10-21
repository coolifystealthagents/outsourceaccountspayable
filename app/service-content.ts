export type ServiceDetail = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  audience: string;
  problem: string;
  inputs: string[];
  outcomes: string[];
  deliverables: string[];
  workflow: Array<{ title: string; body: string }>;
  boundaries: { supports: string[]; ownerKeeps: string[] };
  scenarios: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'invoice-data-capture', title: 'Invoice Data Capture', heroImage: '/oct13-heroes/ap-invoice-scan-legibility-rejection.webp',
    summary: 'Turn incoming invoices into complete, source-linked records that are ready for coding and approval review.',
    audience: 'AP teams with shared inboxes, scanned invoices, portal downloads, or inconsistent entry backlogs.',
    problem: 'Missing fields, unreadable attachments, and inconsistent naming make downstream review slower and weaken the evidence trail.',
    inputs: ['Invoice files and approved intake channels', 'Vendor master reference data', 'Required field and naming rules'],
    outcomes: ['A consistent invoice record', 'Unreadable or incomplete files isolated early', 'Source documents attached to each entry'],
    deliverables: ['Capture queue', 'Field validation log', 'Rejected-file list', 'Source attachment register', 'Daily exception summary'],
    workflow: [{title:'Receive and identify',body:'Collect invoices only from approved channels, confirm the file opens, and identify the entity and vendor.'},{title:'Capture required fields',body:'Enter invoice number, date, amount, currency, due date, and approved reference fields without inferring missing facts.'},{title:'Validate and route',body:'Compare the entry with the source image, hold incomplete records, and route exceptions to the named reviewer.'}],
    boundaries: { supports:['Data entry and source attachment','Completeness and format checks','Exception logging'], ownerKeeps:['Accounting policy and coding approval','Vendor master changes','Invoice and payment approval'] },
    scenarios: ['A shared mailbox has a week of unentered invoices', 'Scans arrive with unreadable totals or missing pages', 'Several entities require different intake rules'],
    faqs: [{question:'Can the specialist infer a missing field?',answer:'No. Missing or unclear facts should be marked as exceptions and sent to the designated owner.'},{question:'How is capture quality checked?',answer:'Use source-to-record sampling, required-field checks, duplicate signals, and a correction log reviewed on a fixed cadence.'}], related:['ap-inbox-management','duplicate-invoice-review','three-way-match-support']
  },
  {
    slug: 'three-way-match-support', title: 'Three-Way Match Support', heroImage: '/research-thumbnails/three-way-match-exception-research.svg',
    summary: 'Compare invoice, purchase order, and receipt evidence so match exceptions reach the right operational owner.',
    audience: 'Procure-to-pay teams that use purchase orders and need a visible queue for quantity, price, and receipt differences.',
    problem: 'A mismatch can sit unresolved when the source record, tolerance rule, or exception owner is unclear.',
    inputs: ['Invoice and purchase order', 'Receipt or service acceptance evidence', 'Approved tolerance and escalation rules'],
    outcomes: ['Matched packets with linked evidence', 'Differences classified consistently', 'Exceptions assigned without bypassing approval'],
    deliverables: ['Match worksheet', 'Mismatch queue', 'Missing-receipt request', 'Tolerance review log', 'Resolved packet index'],
    workflow: [{title:'Assemble the packet',body:'Link the invoice, purchase order, receipt, and any approved contract reference.'},{title:'Compare the evidence',body:'Check quantities, prices, tax, freight, currency, and receipt status against written rules.'},{title:'Route the difference',body:'Record the mismatch and send it to purchasing, receiving, or finance without changing the source records.'}],
    boundaries:{supports:['Document matching','Difference classification','Owner follow-up'],ownerKeeps:['Tolerance policy','Receipt and price approval','Payment release']},
    scenarios:['A receipt is missing at invoice cutoff','Freight causes a total difference','A service invoice has partial acceptance'],
    faqs:[{question:'Can support clear a tolerance exception?',answer:'Only when the approved rule explicitly allows it. Other differences remain with the authorized owner.'},{question:'Does this replace procurement review?',answer:'No. It prepares evidence and routes exceptions while procurement and finance retain decisions.'}],related:['purchase-order-reconciliation','invoice-data-capture','payment-run-preparation']
  },
  {
    slug:'purchase-order-reconciliation',title:'Purchase Order Reconciliation',heroImage:'/oct12-heroes/ap-dormant-purchase-order-cleanup.webp',
    summary:'Reconcile purchase order commitments, receipts, invoices, and residual balances before they distort the AP queue or close.',
    audience:'Finance and procurement teams with old open POs, partial receipts, or unexplained committed balances.',
    problem:'Stale or partially used orders hide real obligations and create repeat exceptions during invoice review.',
    inputs:['Open purchase order report','Receipt and invoice history','Owner-approved closure and change rules'],
    outcomes:['Open balances tied to evidence','Stale orders assigned for review','Closure decisions recorded by authorized owners'],
    deliverables:['PO reconciliation workbook','Residual commitment list','Missing evidence queue','Owner decision register','Close-ready summary'],
    workflow:[{title:'Build the population',body:'Export open orders and connect invoice, receipt, and amendment records.'},{title:'Explain the balance',body:'Classify received, invoiced, cancelled, and unsupported amounts using approved definitions.'},{title:'Prepare owner action',body:'Route closure, receipt, amendment, and accrual questions to their accountable owners.'}],
    boundaries:{supports:['Open-item reconciliation','Evidence assembly','Status and owner tracking'],ownerKeeps:['PO amendment or closure','Accrual policy','Spend approval']},
    scenarios:['A completed project still has open commitments','Partial receipts do not match invoice history','Old orders need review before year end'],
    faqs:[{question:'Can the specialist close a purchase order?',answer:'They can prepare the evidence and record the decision. Closure remains with an authorized procurement or finance owner.'},{question:'How often should the queue be reviewed?',answer:'Use a cadence that matches invoice volume and close needs, with extra review before material reporting cutoffs.'}],related:['three-way-match-support','month-end-ap-close-support','aging-report-preparation']
  },
  {
    slug:'vendor-statement-reconciliation',title:'Vendor Statement Reconciliation',heroImage:'/research-thumbnails/ap-vendor-statement-reconciliation-research.svg',
    summary:'Compare supplier statements with the AP ledger and create an evidence-backed list of missing, duplicated, disputed, or unapplied items.',
    audience:'AP teams managing high-volume suppliers, recurring credits, or frequent balance inquiries.',
    problem:'Statement differences remain ambiguous when invoice, payment, credit, and timing evidence is scattered.',
    inputs:['Current supplier statement','AP subledger detail','Payment and credit memo references'],
    outcomes:['Differences classified by cause','Missing documents requested promptly','Supplier balances supported before escalation'],
    deliverables:['Statement reconciliation','Difference register','Document request list','Dispute handoff packet','Completion log'],
    workflow:[{title:'Confirm statement scope',body:'Verify supplier account, currency, period, cutoff, and legal entity.'},{title:'Match ledger activity',body:'Compare invoices, credits, payments, and unapplied items using source references.'},{title:'Resolve or escalate',body:'Request routine records and send disputes, cash application, or master-data issues to the proper owner.'}],
    boundaries:{supports:['Line-item matching','Document requests','Difference tracking'],ownerKeeps:['Dispute settlement','Write-off and credit decisions','Payment approval']},
    scenarios:['A key supplier reports overdue invoices','Credits appear on only one record set','A payment is not applied to the expected invoice'],
    faqs:[{question:'Will reconciliation confirm the vendor is correct?',answer:'No. It identifies what agrees, what differs, and which evidence is missing so the owner can decide.'},{question:'Can suppliers be contacted?',answer:'Yes, using approved templates and channels for factual document requests and status follow-up.'}],related:['aging-report-preparation','payment-run-preparation','vendor-onboarding-administration']
  },
  {
    slug:'payment-run-preparation',title:'Payment Run Preparation',heroImage:'/oct13-heroes/ap-payment-file-control-total.webp',
    summary:'Prepare an approved-invoice population, control totals, and exception record for independent finance review and release.',
    audience:'AP teams that need reliable payment proposals without handing release authority to the preparer.',
    problem:'Late holds, duplicate risks, changed bank details, and missing approvals can enter the run when evidence is not assembled consistently.',
    inputs:['Approved invoice population','Payment calendar and hold rules','Verified vendor and bank master records'],
    outcomes:['A review-ready proposal','Exclusions and changes documented','Control totals available before release'],
    deliverables:['Payment proposal','Control total sheet','Hold and exclusion log','Change evidence packet','Reviewer signoff record'],
    workflow:[{title:'Freeze the candidate list',body:'Collect invoices approved by the cutoff and preserve the starting population.'},{title:'Apply documented checks',body:'Check holds, duplicates, dates, discounts, currencies, and approved bank-change evidence.'},{title:'Hand off for release',body:'Present totals and exceptions to an independent authorized reviewer who controls the bank release.'}],
    boundaries:{supports:['Proposal preparation','Control totals and exception logs','Reviewer packet assembly'],ownerKeeps:['Bank-detail approval','Payment approval','File upload and release']},
    scenarios:['A weekly run has late approval changes','Several entities pay in different currencies','A supplier requested new bank details near cutoff'],
    faqs:[{question:'Can outsourced support release payments?',answer:'This service keeps release with your authorized finance team and separates preparation from approval.'},{question:'What happens after the list is prepared?',answer:'An independent reviewer checks the population, totals, holds, and change evidence before any release action.'}],related:['duplicate-invoice-review','vendor-statement-reconciliation','month-end-ap-close-support']
  },
  {
    slug:'vendor-onboarding-administration',title:'Vendor Onboarding Administration',heroImage:'/oct12-heroes/ap-supplier-site-hierarchy-research.webp',
    summary:'Collect and organize supplier setup evidence while sensitive master-data approval stays with authorized employees.',
    audience:'Procurement and AP teams with incomplete supplier packets, site duplication, or tax-document follow-up.',
    problem:'A rushed setup can introduce duplicate records, missing tax evidence, or unverified payment instructions.',
    inputs:['Approved supplier request','Required tax and identity documents','Independent verification and approval rules'],
    outcomes:['Complete setup packets','Potential duplicates visible before creation','Sensitive changes routed through verification'],
    deliverables:['Supplier intake checklist','Missing-document queue','Duplicate candidate report','Verification evidence index','Approval handoff'],
    workflow:[{title:'Collect the request',body:'Record the requesting owner, legal entity, supplier identity, purpose, and required documents.'},{title:'Check completeness',body:'Compare the packet with required fields and screen for possible duplicate names, addresses, and sites.'},{title:'Route protected fields',body:'Send banking, tax, and master-record approval to authorized owners through the approved control path.'}],
    boundaries:{supports:['Packet collection','Completeness and duplicate checks','Approved follow-up'],ownerKeeps:['Supplier approval','Bank verification','Master record creation or activation']},
    scenarios:['A new supplier must be ready before an invoice arrives','A supplier has multiple sites and remit addresses','Tax forms are missing near reporting cutoff'],
    faqs:[{question:'Can the specialist approve a new vendor?',answer:'No. The specialist prepares the packet while an authorized owner verifies and approves the record.'},{question:'How are bank details handled?',answer:'They should follow an independent verification path and never rely only on the incoming email.'}],related:['tax-document-collection','duplicate-invoice-review','ap-inbox-management']
  },
  {
    slug:'expense-report-review',title:'Expense Report Review',heroImage:'/oct13-heroes/ap-expense-reimbursement-handoff.webp',
    summary:'Review expense submissions for required receipts, policy fields, coding support, and documented exceptions before manager approval.',
    audience:'Finance teams with recurring employee reimbursements, card receipts, and policy exception backlogs.',
    problem:'Missing receipts and inconsistent policy checks consume reviewer time and make reimbursement evidence difficult to trace.',
    inputs:['Expense report and receipt files','Current expense policy','Approval and escalation matrix'],
    outcomes:['Complete packets reach approvers','Policy exceptions are visible','Receipt gaps are followed through consistently'],
    deliverables:['Completeness checklist','Receipt exception list','Coding support notes','Policy exception queue','Approval-status report'],
    workflow:[{title:'Check the packet',body:'Confirm employee, date, business purpose, amount, currency, and required receipt evidence.'},{title:'Apply the written policy',body:'Flag categories, limits, duplicates, or missing details under approved rules without making discretionary exceptions.'},{title:'Send for approval',body:'Route the prepared report and exception notes to the named manager or finance reviewer.'}],
    boundaries:{supports:['Receipt and field checks','Policy-based exception flags','Approval follow-up'],ownerKeeps:['Policy exceptions','Employee conduct decisions','Reimbursement approval and payment']},
    scenarios:['Month-end expense volume creates a backlog','Corporate card receipts are missing','Foreign currency claims need source evidence'],
    faqs:[{question:'Can support reject an employee expense?',answer:'The service can flag a documented exception. The authorized manager or finance owner decides whether to reject or approve it.'},{question:'Does the service set policy?',answer:'No. It operates from the current approved policy and routes ambiguous cases for judgment.'}],related:['invoice-data-capture','duplicate-invoice-review','month-end-ap-close-support']
  },
  {
    slug:'ap-inbox-management',title:'AP Inbox Management',heroImage:'/oct12-heroes/ap-mailbox-attachment-quarantine.webp',
    summary:'Triage invoices and supplier messages into a controlled queue with source, status, owner, and next action preserved.',
    audience:'AP teams whose shared mailbox mixes invoices, statements, reminders, vendor changes, and suspicious attachments.',
    problem:'Messages are missed or acted on inconsistently when the inbox itself becomes the system of record.',
    inputs:['Approved shared mailbox access','Triage categories and routing matrix','Security and escalation instructions'],
    outcomes:['Every message has a visible route','Risky attachments and changes are isolated','Queue aging can be reviewed outside the inbox'],
    deliverables:['Inbox register','Daily triage queue','Attachment quarantine log','Owner assignment list','Aging and exception summary'],
    workflow:[{title:'Classify safely',body:'Identify the sender, entity, document type, urgency, and security signal before opening or routing files.'},{title:'Create the work record',body:'Save approved documents to the designated system and record owner, status, and next action.'},{title:'Follow through',body:'Send approved acknowledgments, chase missing facts, and escalate risky or overdue items.'}],
    boundaries:{supports:['Mailbox triage','Routine acknowledgments','Queue and aging updates'],ownerKeeps:['Security investigation','Vendor master changes','Dispute and payment decisions']},
    scenarios:['Invoices arrive across several mailbox aliases','A message includes an unexpected attachment','Supplier questions are buried under automated notices'],
    faqs:[{question:'Is email used as the final record?',answer:'No. Important documents, status, and decisions should be transferred to the approved system of record.'},{question:'How are suspicious messages handled?',answer:'They are not opened or forwarded casually. The specialist follows the documented quarantine and security escalation path.'}],related:['invoice-data-capture','vendor-onboarding-administration','aging-report-preparation']
  },
  {
    slug:'duplicate-invoice-review',title:'Duplicate Invoice Review',heroImage:'/oct13-heroes/ap-duplicate-invoice-false-negative-study.webp',
    summary:'Review duplicate signals against source records before an invoice reaches approval or payment preparation.',
    audience:'AP teams dealing with repeated submissions, inconsistent invoice numbers, or multiple intake channels.',
    problem:'Exact-match rules miss formatting differences while broad rules create false positives that slow valid invoices.',
    inputs:['Invoice population and source files','Vendor and payment history','Approved duplicate-review rules'],
    outcomes:['Signals resolved with evidence','Likely duplicates held before payment','False positives documented for tuning'],
    deliverables:['Duplicate candidate queue','Comparison worksheet','Source evidence links','Hold and release recommendation','Pattern summary'],
    workflow:[{title:'Generate candidates',body:'Use approved fields such as vendor, amount, date, invoice number, and purchase order to identify records for review.'},{title:'Compare the sources',body:'Inspect original files, credits, recurring schedules, and prior payment status before classifying the signal.'},{title:'Route the decision',body:'Hold likely duplicates and send ambiguous cases to the designated finance owner.'}],
    boundaries:{supports:['Candidate review','Evidence comparison','Hold queue preparation'],ownerKeeps:['Invoice cancellation','Recovery decisions','Payment release']},
    scenarios:['A vendor resends an invoice with a revised filename','Recurring charges share the same amount','Invoice numbers differ only by punctuation'],
    faqs:[{question:'Does a duplicate signal prove an invoice is duplicated?',answer:'No. It is a reason to compare source and history before an authorized owner decides.'},{question:'Can rules be improved over time?',answer:'Yes. Track false positives, missed patterns, and the reason for each disposition.'}],related:['payment-run-preparation','invoice-data-capture','vendor-statement-reconciliation']
  },
  {
    slug:'aging-report-preparation',title:'Aging Report Preparation',heroImage:'/research-thumbnails/ap-aging-handoff-research.svg',
    summary:'Prepare an explainable AP aging view with owners, source dates, holds, disputes, and next actions attached to material items.',
    audience:'Controllers and AP leaders who need more than a raw aging export for cash planning and close review.',
    problem:'Balances look overdue without context when credits, holds, disputes, timing, and payment status are not reconciled.',
    inputs:['AP aging export','Payment and hold status','Statement, dispute, and credit evidence'],
    outcomes:['Aging exceptions have context','Material items have owners','Stale and disputed balances are separated'],
    deliverables:['Reviewed aging report','Material-item commentary','Owner action queue','Stale balance list','Cutoff summary'],
    workflow:[{title:'Confirm the report basis',body:'Record entity, currency, aging date, due-date source, and excluded populations.'},{title:'Add evidence and status',body:'Connect holds, disputes, credits, payments, and statement differences to material balances.'},{title:'Prepare the review',body:'Summarize aged items by owner and next action without predicting or authorizing payment.'}],
    boundaries:{supports:['Report preparation','Status reconciliation','Owner and action tracking'],ownerKeeps:['Cash forecasting','Write-offs and reserve policy','Payment prioritization']},
    scenarios:['Leadership needs a close-ready aging view','Old credits distort supplier balances','Due dates conflict across source records'],
    faqs:[{question:'Is the report a cash forecast?',answer:'No. It presents AP status and exceptions. Treasury and finance owners make cash and payment decisions.'},{question:'How are old items handled?',answer:'Each material item receives a documented status, source, owner, and next action rather than being silently removed.'}],related:['vendor-statement-reconciliation','month-end-ap-close-support','payment-run-preparation']
  },
  {
    slug:'tax-document-collection',title:'Tax Document Collection',heroImage:'/research-thumbnails/ap-tax-document-collection-research.svg',
    summary:'Collect, index, and follow up on required supplier tax documents without making tax-validity or classification decisions.',
    audience:'AP and vendor teams preparing supplier records for reporting, refresh cycles, or onboarding.',
    problem:'Missing, expired, or inconsistently stored documents create avoidable review work and reporting uncertainty.',
    inputs:['Supplier population','Required document matrix','Approved secure storage and follow-up templates'],
    outcomes:['Document status is visible','Missing forms have an owner and request history','Sensitive records stay in approved storage'],
    deliverables:['Tax document register','Missing and refresh queue','Request history','Secure file index','Reviewer exception packet'],
    workflow:[{title:'Define the population',body:'Confirm suppliers, legal entities, document types, and review dates under the approved requirement matrix.'},{title:'Collect and index',body:'Request records through approved channels and store them in the designated restricted location.'},{title:'Route exceptions',body:'Send unclear names, classifications, identifiers, and form questions to the qualified tax owner.'}],
    boundaries:{supports:['Document requests','Completeness and date tracking','Secure indexing'],ownerKeeps:['Tax classification','Form validity decisions','Reporting and withholding policy']},
    scenarios:['Year-end review shows missing forms','A supplier legal name changed','Foreign supplier records need specialist review'],
    faqs:[{question:'Can the specialist decide which tax form applies?',answer:'No. A qualified owner defines the requirement and resolves classification questions.'},{question:'Where should documents be stored?',answer:'Use the approved restricted system, not personal email folders or local devices.'}],related:['vendor-onboarding-administration','month-end-ap-close-support','ap-inbox-management']
  },
  {
    slug:'month-end-ap-close-support',title:'Month-End AP Close Support',heroImage:'/research-thumbnails/ap-close-evidence-handoff-research.svg',
    summary:'Coordinate cutoffs, open items, accrual support, reconciliations, and evidence handoffs for an accountable AP close.',
    audience:'Controllers and AP managers who need a repeatable close desk with visible dependencies and exceptions.',
    problem:'Close tasks slip when source timing, ownership, and evidence requirements are spread across inboxes and spreadsheets.',
    inputs:['Close calendar and checklist','Open invoice, receipt, and aging populations','Approved accrual and cutoff instructions'],
    outcomes:['Close dependencies stay visible','Evidence packets are ready for review','Late items and judgment calls reach owners'],
    deliverables:['AP close checklist','Open-item register','Cutoff evidence packet','Accrual support schedule','Close exception summary'],
    workflow:[{title:'Open the close desk',body:'Confirm dates, systems, source extracts, task owners, dependencies, and required evidence.'},{title:'Prepare reconciliations',body:'Update open invoices, receipts, statements, aging, and accrual support under approved definitions.'},{title:'Hand off and archive',body:'Route judgment items for approval, record completion, and retain the reviewed evidence index.'}],
    boundaries:{supports:['Checklist coordination','Reconciliation and evidence preparation','Exception and status reporting'],ownerKeeps:['Accrual judgment','Accounting entries and certification','Close approval']},
    scenarios:['Receipt timing creates cutoff uncertainty','An invoice backlog remains at period end','The reviewer needs one evidence index for signoff'],
    faqs:[{question:'Can support post close entries?',answer:'Only within explicitly approved access and workflow. Accounting judgment and final certification stay with your finance owners.'},{question:'What makes the handoff reviewable?',answer:'Each task should show its source, preparer, reviewer, completion state, exception, and retained evidence.'}],related:['aging-report-preparation','purchase-order-reconciliation','vendor-statement-reconciliation']
  }
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
