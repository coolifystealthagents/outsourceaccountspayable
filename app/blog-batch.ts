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
] as const;

export const batchPosts = topics.map(([slug, title, keyword, excerpt], index) => ({slug, title, excerpt, minutes: 10 + (index % 5)}));

export const batchDetails = Object.fromEntries(topics.map(([slug, title, keyword, excerpt], index) => {
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
    published: '2026-08-07',
    modified: '2026-08-07',
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
