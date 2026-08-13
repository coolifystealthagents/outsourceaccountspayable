const source = {name: 'NIST, Least Privilege', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'NIST defines least privilege as restricting access to the minimum resources needed for assigned tasks.'};

const topics = [
  ['ap-invoice-intake-workflow-philippines', 'AP invoice intake workflow for a Philippines support team', 'AP invoice intake workflow', 'Use one inbox, a required invoice packet, and a named reviewer to make invoice intake easier to hand off.'],
  ['accounts-payable-inbox-management-philippines', 'Accounts payable inbox management for a Philippines AP assistant', 'AP inbox management', 'Set rules for sorting, saving, escalating, and reviewing messages before an AP assistant works the inbox.'],
  ['three-way-match-support-philippines', 'Three-way match support for a Philippines AP team', 'three-way match support', 'Define how an assistant compares invoices, purchase orders, and receipts while your finance owner decides exceptions.'],
  ['purchase-order-reconciliation-checklist', 'Purchase order reconciliation checklist for outsourced AP', 'purchase order reconciliation', 'A practical checklist for matching purchase orders to invoices, recording gaps, and routing exceptions.'],
  ['vendor-statement-reconciliation-workflow', 'Vendor statement reconciliation workflow for outsourced AP', 'vendor statement reconciliation', 'Keep vendor statements, open invoices, credits, and missing records in one reviewable reconciliation process.'],
  ['payment-run-preparation-controls', 'Payment run preparation controls for a Philippines AP assistant', 'payment run preparation', 'Prepare a payment run with source checks, exception notes, and a separate company approval and release step.'],
  ['expense-report-review-workflow', 'Expense report review workflow for outsourced accounts payable', 'expense report review', 'Give an assistant clear checks for receipts, policy fields, coding, duplicate claims, and owner escalation.'],
  ['duplicate-invoice-review-process', 'Duplicate invoice review process for a growing finance team', 'duplicate invoice review', 'Use vendor, invoice number, amount, date, and source comparisons to identify duplicate risks before approval.'],
  ['ap-aging-report-preparation', 'AP aging report preparation with a Philippines support role', 'AP aging report preparation', 'Create a repeatable aging report routine that highlights overdue items without handing over payment decisions.'],
  ['tax-document-collection-ap-workflow', 'Tax document collection in an AP workflow', 'AP tax document collection', 'Collect required tax documents, log missing fields, and keep acceptance decisions with the appropriate company owner.'],
  ['month-end-ap-close-support', 'Month-end AP close support for a Philippines AP team', 'month-end AP close support', 'Use a close checklist for unposted invoices, accrual inputs, open receipts, and reviewer sign-off.'],
  ['ap-vendor-follow-up-scripts', 'AP vendor follow-up scripts and escalation rules', 'AP vendor follow-up', 'Write useful follow-ups for missing invoices, receipts, statements, and approval details without making promises.'],
  ['invoice-coding-review-checklist', 'Invoice coding review checklist for an outsourced AP role', 'invoice coding review', 'Separate data preparation from accounting judgment with coding examples, required notes, and reviewer ownership.'],
  ['ap-exception-queue-management', 'AP exception queue management for remote finance support', 'AP exception queue management', 'Make stopped invoices visible with an owner, next action, evidence, and review date.'],
  ['accounts-payable-sop-philippines', 'How to write an accounts payable SOP for a Philippines team', 'accounts payable SOP', 'Turn a broad AP handoff into a short SOP with inputs, checks, stop points, access limits, and review rhythm.'],
  ['ap-monthly-close-checklist', 'AP monthly close checklist for a distributed finance team', 'AP monthly close checklist', 'Organize the last days of the month around completeness checks, cutoffs, reconciliations, and sign-off.'],
  ['invoice-approval-escalation-rules', 'Invoice approval escalation rules for outsourced AP', 'invoice approval escalation', 'Set response windows, backup approvers, and stop conditions so an assistant never invents an approval.'],
  ['ap-document-retention-workflow', 'AP document retention workflow for remote support', 'AP document retention', 'Keep source invoices, approvals, and exception evidence together in the approved system with clear retention ownership.'],
  ['ap-quality-review-scorecard', 'AP quality review scorecard for a Philippines AP assistant', 'AP quality review', 'Review invoice packets using observable checks instead of vague feedback or volume-only measures.'],
  ['outsource-ap-first-30-days', 'The first 30 days of outsourced accounts payable support', 'outsourced AP onboarding', 'Start with one AP lane, sample real packets, review access, and expand only after the control path works.'],
  ['ap-kpi-review-dashboard', 'AP KPI review dashboard for outsourced finance support', 'AP KPI review dashboard', 'Track useful AP review signals such as corrections, exceptions, aging, and handoff timing without using volume as the only measure.'],
  ['ap-invoice-approval-matrix', 'How to build an AP invoice approval matrix', 'AP invoice approval matrix', 'Map invoice thresholds, owners, backups, and stop conditions before an AP support team prepares approval packets.'],
  ['ap-vendor-master-review-checklist', 'AP vendor master review checklist for finance teams', 'AP vendor master review', 'Use a controlled checklist for vendor records, duplicate checks, required evidence, and employee approval.'],
  ['ap-receiving-report-follow-up', 'Receiving report follow-up for three-way match exceptions', 'receiving report follow-up', 'Track missing receiving evidence and route exceptions without turning support staff into transaction approvers.'],
  ['ap-invoice-cutoff-checklist', 'AP invoice cutoff checklist for month-end close', 'AP invoice cutoff checklist', 'Capture invoice dates, open receipts, unposted items, and owner decisions in a repeatable close routine.'],
  ['ap-credit-memo-follow-up-workflow', 'AP credit memo follow-up workflow', 'AP credit memo follow-up', 'Keep credits visible, matched to source records, and assigned to an owner until finance resolves them.'],
  ['ap-payment-status-inquiry-process', 'AP payment status inquiry process for vendor emails', 'AP payment status inquiry', 'Answer routine vendor questions from approved records while escalating payment changes and uncertain status.'],
  ['ap-invoice-duplicate-controls', 'AP invoice duplicate controls before approval', 'AP invoice duplicate controls', 'Combine invoice number, vendor, amount, date, and attachment checks into a reviewable duplicate-risk process.'],
  ['ap-approval-aging-review', 'AP approval aging review for distributed teams', 'AP approval aging review', 'Turn stalled approvals into an owned queue with evidence, next actions, and escalation timing.'],
  ['ap-invoice-exception-log-template', 'AP invoice exception log template and workflow', 'AP invoice exception log', 'Create a practical exception log with item owner, evidence gap, risk cue, next action, and review date.'],
  ['ap-invoice-attachment-naming', 'AP invoice attachment naming and filing rules', 'AP invoice attachment naming', 'Make invoice packets easier to review by standardizing names, source records, versions, and retention locations.'],
  ['ap-approval-backup-rules', 'AP approval backup rules for remote finance teams', 'AP approval backup rules', 'Document backup approvers, response windows, and stop conditions so an assistant never invents approval authority.'],
  ['ap-inbox-labels-and-routing', 'AP inbox labels and routing rules', 'AP inbox routing rules', 'Sort AP messages into complete, missing-evidence, urgent-risk, and owner-review queues with consistent labels.'],
  ['ap-early-payment-discount-review', 'Early payment discount review controls for AP', 'early payment discount review', 'Prepare discount opportunities for review while keeping terms, approval, and payment release with the finance owner.'],
  ['ap-invoice-po-mismatch-notes', 'How to write useful purchase order mismatch notes', 'purchase order mismatch notes', 'Record the exact mismatch, source evidence, owner, and next action instead of sending vague exception messages.'],
  ['ap-vendor-statement-open-items', 'AP vendor statement open-items review', 'vendor statement open items', 'Compare statements to ledger records and keep missing invoices, credits, and disputed items visible.'],
  ['ap-month-end-open-invoice-review', 'Month-end open invoice review process', 'month-end open invoice review', 'Review unposted and pending invoices with a clear cutoff, evidence trail, and named finance decision-maker.'],
  ['ap-remote-ap-handoff-checklist', 'Remote AP handoff checklist for daily support', 'remote AP handoff checklist', 'Use a daily handoff that shows completed packets, blocked items, evidence gaps, and the next responsible owner.'],
  ['ap-invoice-review-sampling', 'AP invoice review sampling plan for quality checks', 'AP invoice review sampling', 'Sample clean and exception packets to find process weaknesses without relying on volume as the only quality signal.'],
  ['ap-finance-support-access-review', 'Finance support access review checklist', 'finance support access review', 'Review system permissions, shared inbox access, and removal steps whenever an AP support scope changes.'],
  ['ap-urgent-invoice-request-controls', 'Controls for urgent invoice requests', 'urgent invoice request controls', 'Separate genuine deadline questions from pressure to bypass evidence, approval, or vendor verification.'],
  ['ap-daily-invoice-queue-review', 'Daily invoice queue review checklist', 'daily invoice queue review', 'Give a distributed AP support lane a clear daily review of completed, blocked, and escalated invoice work.'],
  ['ap-vendor-onboarding-checklist', 'AP vendor onboarding checklist for finance support', 'AP vendor onboarding checklist', 'Use a controlled intake for vendor forms, tax records, approval evidence, and bank-detail review.'],
  ['ap-vendor-change-request-workflow', 'AP vendor change request workflow', 'AP vendor change request workflow', 'Route vendor record changes through independent evidence checks and employee approval.'],
  ['ap-invoice-receipt-index', 'How to build an AP invoice receipt index', 'AP invoice receipt index', 'Create a simple index that connects invoices, receipts, purchase orders, and unresolved gaps.'],
  ['ap-unmatched-invoice-follow-up', 'Unmatched invoice follow-up workflow', 'unmatched invoice follow-up', 'Track unmatched invoices with a specific evidence request, owner, due date, and escalation path.'],
  ['ap-invoice-status-dashboard', 'AP invoice status dashboard fields', 'AP invoice status dashboard', 'Choose status fields that show where an invoice is waiting without hiding the responsible owner.'],
  ['ap-cash-application-support', 'Cash application support controls for AP teams', 'cash application support', 'Prepare unapplied cash research notes while keeping account decisions with the finance owner.'],
  ['ap-purchase-request-review', 'Purchase request review checklist for AP support', 'purchase request review', 'Check required purchase request fields and route missing approvals before invoice work begins.'],
  ['ap-non-po-invoice-workflow', 'Non-PO invoice workflow for outsourced AP', 'non-PO invoice workflow', 'Give non-PO invoices a clear evidence packet, owner, approval route, and stop condition.'],
  ['ap-invoice-volume-forecast', 'AP invoice volume forecast for staffing decisions', 'AP invoice volume forecast', 'Use intake counts, seasonality, exception rates, and review time to inform capacity planning.'],
  ['ap-close-handoff-template', 'AP close handoff template for distributed teams', 'AP close handoff template', 'Summarize open invoices, cutoff risks, evidence gaps, and assigned decisions at close.'],
  ['ap-vendor-inquiry-triage', 'AP vendor inquiry triage rules', 'AP vendor inquiry triage', 'Sort vendor questions by routine status, missing evidence, payment risk, and owner decision.'],
  ['ap-invoice-data-quality-checks', 'AP invoice data quality checks before entry', 'AP invoice data quality checks', 'Check names, dates, amounts, tax fields, and source readability before preparing invoice records.'],
  ['ap-payment-support-segregation', 'Payment support segregation of duties checklist', 'payment support segregation of duties', 'Separate preparation, approval, bank-detail verification, and payment release responsibilities.'],
  ['ap-reconciliation-evidence-pack', 'AP reconciliation evidence pack checklist', 'AP reconciliation evidence pack', 'Keep source reports, comparisons, explanations, and reviewer sign-off together for each reconciliation.'],
  ['ap-invoice-work-queue-priorities', 'AP invoice work queue priority rules', 'AP invoice work queue priorities', 'Rank work using cutoff dates, exception risk, approval status, and documented business urgency.'],
  ['ap-supplier-statement-request-script', 'Supplier statement request script for AP teams', 'supplier statement request script', 'Ask for complete statements and supporting records without promising payment or changing terms.'],
  ['ap-ap-close-calendar', 'AP close calendar for recurring finance support', 'AP close calendar', 'Map recurring cutoff, review, reconciliation, and sign-off tasks across the close cycle.'],
  ['ap-invoice-access-log', 'AP invoice access log for remote support', 'AP invoice access log', 'Record who accessed source documents, why, and when access should be removed or reviewed.'],
  ['ap-approval-evidence-checklist', 'Invoice approval evidence checklist', 'invoice approval evidence checklist', 'Confirm that approval evidence is attributable, complete, and tied to the correct invoice packet.'],
  ['ap-fraud-risk-escalation', 'AP fraud risk escalation steps', 'AP fraud risk escalation', 'Pause suspicious requests and route them with evidence instead of investigating beyond the assigned role.'],
  ['ap-invoice-coding-exception-log', 'Invoice coding exception log for AP support', 'invoice coding exception log', 'Make uncertain coding visible with the source, question, owner, and resolution history.'],
  ['ap-accounts-payable-handoff-metrics', 'Accounts payable handoff metrics that matter', 'AP handoff metrics', 'Measure completeness, corrections, unresolved questions, and response timing across a support handoff.'],
  ['ap-invoice-approval-follow-up', 'Invoice approval follow-up workflow', 'invoice approval follow-up', 'Keep pending approvals visible with a dated reminder, evidence link, backup path, and escalation rule.'],
] as const;

// August 11, 2026 publication batch. Each slug has its own explicit date
// binding below; do not infer these dates from a batch-wide default.
const aug11Topics = [
  ['ap-invoice-intake-cutoff-rules', 'AP invoice intake cutoff rules for month-end', 'invoice intake cutoff rules', 'Set a clear intake cutoff, capture late documents, and route owner decisions before the close calendar moves on.'],
  ['ap-vendor-credit-application-review', 'AP vendor credit application review checklist', 'vendor credit application review', 'Match vendor credits to source records, document open questions, and keep application decisions with the finance owner.'],
  ['ap-invoice-approval-delegation-log', 'Invoice approval delegation log for AP support', 'invoice approval delegation log', 'Record temporary approval coverage with dates, scope, evidence, and a clear return to the normal approver.'],
  ['ap-rejected-invoice-rework-queue', 'Rejected invoice rework queue for AP teams', 'rejected invoice rework', 'Make rejected invoices actionable by recording the reason, missing evidence, owner, and next review date.'],
  ['ap-vendor-tax-form-review', 'Vendor tax form review workflow for AP support', 'vendor tax form review', 'Check tax-form completeness and route uncertain classifications without turning support staff into tax decision-makers.'],
  ['ap-invoice-payment-term-review', 'Invoice payment term review checklist', 'invoice payment term review', 'Compare invoice terms with approved records and escalate mismatches before they affect a payment proposal.'],
  ['ap-purchase-order-closeout', 'Purchase order closeout checklist for AP teams', 'purchase order closeout', 'Review remaining commitments, receipts, invoices, and owner notes before closing a purchase order.'],
  ['ap-invoice-dispute-tracking', 'AP invoice dispute tracking workflow', 'invoice dispute tracking', 'Keep disputed invoices visible with the evidence, business owner, supplier contact, and next decision.'],
  ['ap-vendor-duplicate-record-review', 'AP vendor duplicate record review', 'vendor duplicate record review', 'Compare names, addresses, tax identifiers, and source evidence before routing suspected duplicate vendors.'],
  ['ap-invoice-scanning-quality-review', 'Invoice scanning quality review checklist', 'invoice scanning quality review', 'Catch unreadable pages, missing attachments, and altered-looking files before invoice data reaches the queue.'],
  ['ap-accrual-support-evidence-log', 'AP accrual support evidence log', 'accrual support evidence log', 'Prepare open-receipt and unbilled-service evidence while leaving accrual judgments with the finance owner.'],
  ['ap-invoice-due-date-exception-review', 'Invoice due-date exception review', 'invoice due-date exception review', 'Explain unusual due dates with source evidence and route changes through the approved owner path.'],
  ['ap-remittance-advice-follow-up', 'Remittance advice follow-up for AP support', 'remittance advice follow-up', 'Collect remittance details, connect them to payment records, and escalate missing or conflicting information.'],
  ['ap-invoice-company-code-checks', 'Invoice company code checks before entry', 'invoice company code checks', 'Use source documents and approved entity rules to flag uncertain company coding before entry.'],
  ['ap-open-receipt-aging-review', 'Open receipt aging review for AP close', 'open receipt aging review', 'Age open receipts, identify the responsible requester, and prepare close notes without making accounting entries.'],
  ['ap-vendor-bank-verification-log', 'Vendor bank verification log for AP support', 'vendor bank verification log', 'Document independent verification steps and approval evidence for bank-detail requests before any change is considered.'],
  ['ap-invoice-approval-reminder-calendar', 'Invoice approval reminder calendar', 'invoice approval reminder calendar', 'Turn approval follow-up into dated reminders with backup paths and a clear escalation point.'],
  ['ap-missing-invoice-evidence-review', 'Missing invoice evidence review process', 'missing invoice evidence review', 'Identify the exact missing record, request it clearly, and keep the invoice paused until the owner resolves the gap.'],
  ['ap-ap-close-status-report', 'AP close status report fields that matter', 'AP close status report', 'Summarize completeness, open exceptions, owner decisions, and evidence gaps in a report finance can review quickly.'],
  ['ap-invoice-entity-change-control', 'Invoice entity change control checklist', 'invoice entity change control', 'Pause unexpected entity changes, compare approved records, and route the question to the right finance owner.'],
  ['ap-supplier-invoice-portal-review', 'Supplier invoice portal review workflow', 'supplier invoice portal review', 'Check portal submissions for completeness, duplicates, and routing information before preparing the invoice packet.'],
  ['ap-ap-workload-handoff-notes', 'AP workload handoff notes for distributed teams', 'AP workload handoff notes', 'Make a daily handoff useful with completed work, blocked items, evidence links, and named next owners.'],
] as const;

export const aug11BlogPublicationDates: Record<string, string> = {
  'ap-invoice-intake-cutoff-rules': '2026-08-12',
  'ap-vendor-credit-application-review': '2026-08-12',
  'ap-invoice-approval-delegation-log': '2026-08-12',
  'ap-rejected-invoice-rework-queue': '2026-08-12',
  'ap-vendor-tax-form-review': '2026-08-12',
  'ap-invoice-payment-term-review': '2026-08-12',
  'ap-purchase-order-closeout': '2026-08-12',
  'ap-invoice-dispute-tracking': '2026-08-12',
  'ap-vendor-duplicate-record-review': '2026-08-12',
  'ap-invoice-scanning-quality-review': '2026-08-12',
  'ap-accrual-support-evidence-log': '2026-08-12',
  'ap-invoice-due-date-exception-review': '2026-08-12',
  'ap-remittance-advice-follow-up': '2026-08-12',
  'ap-invoice-company-code-checks': '2026-08-12',
  'ap-open-receipt-aging-review': '2026-08-12',
  'ap-vendor-bank-verification-log': '2026-08-12',
  'ap-invoice-approval-reminder-calendar': '2026-08-12',
  'ap-missing-invoice-evidence-review': '2026-08-12',
  'ap-ap-close-status-report': '2026-08-12',
  'ap-invoice-entity-change-control': '2026-08-12',
  'ap-supplier-invoice-portal-review': '2026-08-12',
  'ap-ap-workload-handoff-notes': '2026-08-12',
};

const allTopics = [...aug11Topics, ...topics];

// Explicit publication binding for the frozen August 10 batch. Keep this
// slug-specific so dates cannot be inferred from a shared batch default.
export const aug10BlogPublicationDates: Record<string, string> = {
  'ap-accounts-payable-handoff-metrics': '2026-08-10',
  'ap-ap-close-calendar': '2026-08-10',
  'ap-approval-evidence-checklist': '2026-08-10',
  'ap-cash-application-support': '2026-08-10',
  'ap-close-handoff-template': '2026-08-10',
  'ap-fraud-risk-escalation': '2026-08-10',
  'ap-invoice-access-log': '2026-08-10',
  'ap-invoice-approval-follow-up': '2026-08-10',
  'ap-invoice-coding-exception-log': '2026-08-10',
  'ap-invoice-data-quality-checks': '2026-08-10',
  'ap-invoice-receipt-index': '2026-08-10',
  'ap-invoice-status-dashboard': '2026-08-10',
  'ap-invoice-volume-forecast': '2026-08-10',
  'ap-invoice-work-queue-priorities': '2026-08-10',
  'ap-non-po-invoice-workflow': '2026-08-10',
  'ap-payment-support-segregation': '2026-08-10',
  'ap-purchase-request-review': '2026-08-10',
  'ap-reconciliation-evidence-pack': '2026-08-10',
  'ap-supplier-statement-request-script': '2026-08-10',
  'ap-unmatched-invoice-follow-up': '2026-08-10',
  'ap-vendor-change-request-workflow': '2026-08-10',
  'ap-vendor-inquiry-triage': '2026-08-10',
  'ap-vendor-onboarding-checklist': '2026-08-10',
};

const frozenAug10Order = Object.keys(aug10BlogPublicationDates);
const frozenAug10Rank = new Map(frozenAug10Order.map((slug, index) => [slug, index]));

export const batchPosts = allTopics
  .map(([slug, title, keyword, excerpt], index) => ({slug, title, excerpt, minutes: 10 + (index % 5)}))
  .sort((a, b) => {
    const aRank = frozenAug10Rank.get(a.slug);
    const bRank = frozenAug10Rank.get(b.slug);
    if (aRank !== undefined && bRank !== undefined) return aRank - bRank;
    if (aRank !== undefined) return -1;
    if (bRank !== undefined) return 1;
    return 0;
  });

export const batchDetails = Object.fromEntries(allTopics.map(([slug, title, keyword, excerpt], index) => {
  const related = [
    {href: '/services/invoice-data-capture', label: 'Invoice data capture support'},
    {href: '/services/ap-inbox-management', label: 'AP inbox management'},
    {href: '/services/three-way-match-support', label: 'Three-way match support'},
  ];
  const bodyLinks = [
    {href: '/services/payment-run-preparation', label: 'payment run preparation'},
    {href: '/blog/accounts-payable-virtual-assistant', label: 'accounts payable virtual assistant guide'},
  ];
  return [slug, {
    mainKeyword: keyword,
    published: aug11BlogPublicationDates[slug] ?? aug10BlogPublicationDates[slug] ?? '2026-08-10',
    modified: aug11BlogPublicationDates[slug] ?? aug10BlogPublicationDates[slug] ?? '2026-08-10',
    thumbnail: `/blog-thumbnails/${slug}.svg`,
    shortAnswer: `${excerpt} The assistant prepares evidence and follows the written queue rules; your finance owner keeps approval, bank-detail changes, and payment release.`,
    sections: [
      {title: 'Define the first AP lane', paragraphs: [`Start with ${keyword.toLowerCase()} as one visible lane rather than a broad promise to help with finance. Name the input, the expected finished record, the reviewer, and the conditions that stop the work.`, `A Philippines-based AP assistant can prepare repeatable records, request missing documents, and keep the queue current. The company should keep accounting judgment, vendor approval, invoice approval, and payment release with named employees.`, `Use real examples from your own system. One clean example and several stopped examples will teach the process more clearly than a list of general duties.`]},
      {title: 'Separate preparation from approval', paragraphs: [`Write the control line beside each step. The assistant may compare source records, enter allowed draft fields, and route a packet, but should not turn an incomplete record into an approved transaction.`, `Use the ${bodyLinks[0].label} service lane only as a preparation task unless your own finance policy says otherwise. Keep the final money decision with an employee who has the required authority.`, `NIST describes least privilege as limiting access to what assigned work requires. Start with the smallest useful role and review permissions when scope, system, or worker changes.`]},
      {title: 'Make exceptions easy to escalate', paragraphs: [`Keep an exception list with the item, issue, date found, current owner, next action, and evidence. That list gives a remote team one shared place to continue work across time zones.`, `A request for changed bank details, an unknown attachment, a duplicate clue, or pressure to bypass a normal check should pause the item. The assistant should use the named escalation path, not improvise.`, `Review normal questions at set times and risky requests immediately. This keeps routine work moving while preserving a clear record of why a transaction did not proceed.`]},
      {title: 'Review the lane before expanding it', paragraphs: [`During the first week, inspect finished packets against source records and mark the exact failed check. Vague feedback such as “be more careful” does not improve the SOP or reveal where the process broke.`, `After the first month, review corrections, open exceptions, manager questions, access, and handoff timing. If the same question repeats, fix the written rule before adding another task.`, `The ${bodyLinks[1].label} offers a broader role boundary for comparison. Keep this lane narrow until its input, review, and escalation path are stable.`]},
    ],
    bodyLinks,
    relatedLinks: related,
    sources: [source],
    faqs: [
      {question: `What should the assistant do in ${keyword.toLowerCase()}?`, answer: `The assistant can prepare records, check required fields, track open items, and route exceptions. Your company keeps the decisions that approve vendors, invoices, coding, or payments.`},
      {question: 'How much access is appropriate?', answer: 'Give only the access needed for the starting lane. Add permissions only after the finance owner confirms the task requires them and records the review.'},
      {question: 'How should the first month be measured?', answer: 'Review corrections, unresolved exceptions, response times, manager questions, and whether each item reaches the right owner. Do not judge the role by volume alone.'},
    ],
  }];
}));
