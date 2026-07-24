export const site = {
  domain: 'OutsourceAccountsPayable.com',
  slug: 'outsourceaccountspayable',
  brand: 'Outsource Accounts Payable',
  primary: 'outsource accounts payable',
  audience: 'finance teams outsourcing invoice intake, approvals, and vendor follow-up',
  angle: 'AP inbox, invoice coding, approval workflows, payment runs, and controls',
  style: 'AP invoice desk',
  dark: '#2b210c',
  color: '#ca8a04',
  accent: '#0f766e',
  heroImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  alt: 'accounts payable specialist processing invoices',
  badge: 'AP flow',
} as const;

export const services = [
  { slug: "invoice-data-capture", title: "Invoice Data Capture", desc: "Filipino accounts payable specialists can handle invoice data capture with documented workflows, approval limits, and owner review." },
  { slug: "three-way-match-support", title: "Three-Way Match Support", desc: "Filipino accounts payable specialists can handle three-way match support with documented workflows, approval limits, and owner review." },
  { slug: "purchase-order-reconciliation", title: "Purchase Order Reconciliation", desc: "Filipino accounts payable specialists can handle purchase order reconciliation with documented workflows, approval limits, and owner review." },
  { slug: "vendor-statement-reconciliation", title: "Vendor Statement Reconciliation", desc: "Filipino accounts payable specialists can handle vendor statement reconciliation with documented workflows, approval limits, and owner review." },
  { slug: "payment-run-preparation", title: "Payment Run Preparation", desc: "Filipino accounts payable specialists can handle payment run preparation with documented workflows, approval limits, and owner review." },
  { slug: "vendor-onboarding-administration", title: "Vendor Onboarding Administration", desc: "Filipino accounts payable specialists can handle vendor onboarding administration with documented workflows, approval limits, and owner review." },
  { slug: "expense-report-review", title: "Expense Report Review", desc: "Filipino accounts payable specialists can handle expense report review with documented workflows, approval limits, and owner review." },
  { slug: "ap-inbox-management", title: "AP Inbox Management", desc: "Filipino accounts payable specialists can handle ap inbox management with documented workflows, approval limits, and owner review." },
  { slug: "duplicate-invoice-review", title: "Duplicate Invoice Review", desc: "Filipino accounts payable specialists can handle duplicate invoice review with documented workflows, approval limits, and owner review." },
  { slug: "aging-report-preparation", title: "Aging Report Preparation", desc: "Filipino accounts payable specialists can handle aging report preparation with documented workflows, approval limits, and owner review." },
  { slug: "tax-document-collection", title: "Tax Document Collection", desc: "Filipino accounts payable specialists can handle tax document collection with documented workflows, approval limits, and owner review." },
  { slug: "month-end-ap-close-support", title: "Month-End AP Close Support", desc: "Filipino accounts payable specialists can handle month-end ap close support with documented workflows, approval limits, and owner review." },
] as const;

export const blogPosts = [
  {
    slug: 'outsource-accounts-payable-planning',
    title: 'What to plan before you outsource accounts payable',
    excerpt: 'A plain-English guide to AP scope, controls, and handoff planning before you hire.',
    minutes: 6,
  },
  {
    slug: 'outsource-accounts-payable-tasks-to-outsource',
    title: 'Which AP tasks should you hand off first?',
    excerpt: 'Start with recurring AP work that has examples, rules, and a clear reviewer.',
    minutes: 7,
  },
  {
    slug: 'outsource-accounts-payable-provider-questions',
    title: 'Questions to ask an accounts payable provider',
    excerpt: 'Use these AP provider questions before you sign with a staffing firm or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsource-accounts-payable-onboarding-checklist',
    title: 'Your first-week AP onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, reporting, and payment controls.',
    minutes: 9,
  },
  {
    slug: 'accounts-payable-virtual-assistant',
    title: 'Accounts payable virtual assistant: tasks, controls, and hiring plan',
    excerpt: 'See which AP tasks a Filipino virtual assistant can prepare and which decisions stay with your finance owner. Use the tables, scripts, and first-week plan to shape a safer role.',
    minutes: 12,
  },
] as const;

export const blogDetails = {
  'outsource-accounts-payable-planning': {
    shortAnswer: 'Choose one AP lane before you choose a person. Write down what enters the queue, who reviews it, and which decisions must stay with your finance team.',
    sections: [
      {
        title: 'Draw the control line',
        paragraphs: [
          'An AP assistant can collect invoices, prepare coding notes, chase missing documents, and keep the approval list current. Vendor bank changes, invoice approval, and payment release should still belong to named employees.',
          'Put those limits in the role brief. A vague promise to "help with AP" leaves too much room for mistakes.',
        ],
      },
      {
        title: 'Pick a queue you can review',
        paragraphs: [
          'Start with one inbox, company entity, or vendor group. Give the assistant examples of complete and incomplete invoice packets, then review the early work against those examples.',
          'The first handoff should be small enough that a finance owner can inspect it without rebuilding the whole packet.',
        ],
      },
    ],
    checklistTitle: 'Bring these details to the planning call',
    checklist: ['Monthly invoice volume and busy periods', 'Accounting system and approval tools', 'Current approval owners and escalation rules', 'Tasks that must stay with employees'],
  },
  'outsource-accounts-payable-tasks-to-outsource': {
    shortAnswer: 'Hand off work with a clear input, a repeatable check, and a named reviewer. Invoice filing and follow-up are usually easier to test than payment or vendor-master work.',
    sections: [
      {
        title: 'Good first tasks',
        paragraphs: [
          'Inbox sorting, duplicate checks, statement matching, missing-document requests, and blocked-invoice lists all leave a visible trail. Your reviewer can compare the result with the source records.',
          'Use real examples instead of a long job description. Ten completed invoice packets will teach the process better than a page of broad responsibilities.',
        ],
      },
      {
        title: 'Keep these decisions inside finance',
        paragraphs: [
          'The assistant should not create vendors, accept bank-detail changes, approve invoices, or release payments without your company\'s review. Separate preparation from approval in both the SOP and the software permissions.',
        ],
      },
    ],
    checklistTitle: 'A task is ready to hand off when',
    checklist: ['The input and finished result are easy to show', 'The assistant knows when to stop and escalate', 'A reviewer can check the work from source records', 'Access is limited to what the task needs'],
  },
  'outsource-accounts-payable-provider-questions': {
    shortAnswer: 'Ask providers to explain who will do the work, how AP experience is checked, and what happens when an invoice or vendor request falls outside the written rules.',
    sections: [
      {
        title: 'Ask for the actual review process',
        paragraphs: [
          '"We check quality" is not enough. Ask who reviews the first invoice packets, how errors are recorded, and who contacts you when the worker is unsure.',
          'You should also know whether the provider manages attendance and replacement questions or leaves those jobs with your finance manager.',
        ],
      },
      {
        title: 'Test the access answer',
        paragraphs: [
          'Describe a vendor asking to change bank details. A useful answer should include an internal callback or approval step, limited software permissions, and a record of who approved the change. If the answer depends on the assistant simply being careful, the control is too weak.',
        ],
      },
    ],
    checklistTitle: 'Questions for the provider call',
    checklist: ['Who checks AP experience before a candidate reaches us?', 'Who reviews early work and records errors?', 'How are passwords and vendor data handled?', 'What happens if the role or worker is a poor fit?'],
  },
  'outsource-accounts-payable-onboarding-checklist': {
    shortAnswer: 'Use the first week to teach one AP lane, confirm access limits, and watch real work. Do not open every inbox and accounting permission on day one.',
    sections: [
      {
        title: 'Before access is granted',
        paragraphs: [
          'Choose the first queue, gather good and bad examples, and name the person who will answer questions. Write down the events that require an immediate stop, such as a bank-detail change or a request to release payment.',
          'Begin with read-only access where the task allows it. Add permissions only after the assistant has shown they can follow the review path.',
        ],
      },
      {
        title: 'Review real work together',
        paragraphs: [
          'Check the first packets for vendor name, invoice number, amount, due date, coding note, approval owner, and attached source record. Keep an exception log so the same question does not need a fresh answer each time.',
          'At the end of the week, decide whether to keep the lane as it is, narrow it, or add one more task. Add access only when the work calls for it and the review process is holding up.',
        ],
      },
    ],
    checklistTitle: 'First-week check',
    checklist: ['One queue and one reviewer are named', 'Permissions match the work being tested', 'Sample invoice packets are available', 'Exceptions and corrections are written down'],
  },
  'accounts-payable-virtual-assistant': {
    mainKeyword: 'accounts payable virtual assistant',
    published: '2026-07-24',
    modified: '2026-07-24',
    shortAnswer: 'An accounts payable virtual assistant can sort invoices, prepare records, track approvals, and follow up on missing documents. Your finance owner should keep vendor-master approval, bank-detail approval, invoice approval, and payment release.',
    sections: [
      {
        title: 'What the role can cover',
        paragraphs: [
          'A Filipino AP assistant can own the repeatable work around an invoice without owning the final money decision. That may include inbox sorting, data entry, document checks, approval tracking, vendor follow-up, and an open-item list.',
          'The best starting scope has a clear input and a result your reviewer can inspect. One invoice queue or vendor group is easier to teach than every AP task at once.',
          'This is a support role, not a replacement for your controller or finance manager. The assistant prepares the record and sends exceptions to the person named in your written rules.',
        ],
      },
      {
        title: 'Write the control line before you hire',
        paragraphs: [
          'Start by separating preparation from approval. The same person should not be able to add a vendor, change bank details, approve the invoice, and release the payment.',
          'NIST describes least privilege as giving users only the access needed for assigned work. In plain terms, the assistant should see and change only what the approved task calls for.',
          'Use read-only access when it still lets the person finish the task. If edit access is needed, limit it by company, module, queue, or role and review the access when the work changes.',
        ],
      },
      {
        title: 'Build a first-week plan around real invoices',
        paragraphs: [
          'Use 10 to 15 sample invoices from the work the person will really handle. Include clean examples, missing purchase orders, duplicate-looking invoices, unclear coding, and one request that must be escalated.',
          'For the first 5 business days, review finished packets at 2 set times each day. A short review window keeps questions moving without teaching the assistant to interrupt the finance owner for every invoice.',
          'End the week with a 30-minute check of errors, slow points, open access needs, and rules that were unclear. Keep the lane small for another week if the same exception keeps coming back.',
        ],
      },
      {
        title: 'Use a simple exception path',
        paragraphs: [
          'Suppose a vendor emails new bank details while an invoice is waiting for approval. The assistant should stop the change, tag the request, and send it to the named finance owner through a known internal channel.',
          'CISA warns that phishing messages often use urgent language and asks people to verify suspicious requests through another trusted path. A bank-change rule should make that second check part of the process, not a judgment call made under pressure.',
          'Set a response target for ordinary questions, such as the next review window, and a separate rule for risky requests. A bank change, unusual payment request, or unknown attachment should be raised at once and kept out of the normal queue.',
        ],
      },
      {
        title: 'Plan vendor records without handing over approval',
        paragraphs: [
          'The IRS says a requester uses Form W-9 to collect a US person\'s correct taxpayer identification number and certification. An assistant may collect the form and note missing fields, but your approved process should decide who accepts the vendor record.',
          'Keep tax forms and bank documents in the approved system instead of a personal inbox or local folder. The assistant can maintain a missing-document list while your finance owner handles exceptions and acceptance.',
          'A new vendor packet should show who requested the vendor, who checked the documents, and who approved the record. That trail makes review easier when a name, address, tax detail, or payment instruction changes later.',
        ],
      },
      {
        title: 'Review the role at 30 days',
        paragraphs: [
          'Look at the queue, exception log, corrections, access, and manager time after 30 days. Do not judge the role only by how many invoices moved through the system.',
          'If work is accurate but the manager still answers the same question each day, the written rule needs work. If errors come from missing source records, fix the intake step before adding more tasks.',
          'Add one new lane only when the first lane has a clear owner, examples, and a steady review path. A wider role is useful only when the controls grow with it.',
        ],
      },
    ],
    decisionRows: [
      { task: 'AP inbox sorting', assistant: 'Sort by company, vendor, due date, and issue type', owner: 'Set queue rules and handle risky messages' },
      { task: 'Invoice entry', assistant: 'Enter source details and attach the invoice record', owner: 'Approve coding rules and unusual entries' },
      { task: 'Three-way match support', assistant: 'Compare invoice, purchase order, and receipt', owner: 'Decide what to do when the records do not agree' },
      { task: 'Approval tracking', assistant: 'Route the packet and follow up on open approval', owner: 'Approve the invoice or name the approver' },
      { task: 'Vendor document collection', assistant: 'Request and organize required forms', owner: 'Approve the vendor and any master-data change' },
      { task: 'Payment-run preparation', assistant: 'Prepare the approved list and exception notes', owner: 'Review and release payment' },
    ],
    planningNumbers: [
      { value: '1 queue', label: 'Start with one inbox, entity, or vendor group.' },
      { value: '10–15 samples', label: 'Use real invoice packets for training and checks.' },
      { value: '2 reviews', label: 'Set two daily review windows during the first week.' },
      { value: '5 business days', label: 'Keep the first test lane narrow for one full week.' },
      { value: '30 minutes', label: 'Use a short week-end review to fix unclear rules.' },
      { value: '30 days', label: 'Check scope, access, corrections, and manager time.' },
    ],
    scripts: [
      {
        title: 'Script for a missing invoice detail',
        text: 'Hi [name], I am preparing invoice [number] for review, but the packet is missing [purchase order, receipt, or coding detail]. Please send the missing record or name the person who can confirm it. I will keep the invoice on the exception list until the required check is complete.',
      },
      {
        title: 'Script for a bank-detail change',
        text: 'I received a request to change payment details for [vendor]. I have not changed the vendor record. Please verify the request through the approved callback or internal contact path and tell me when the named finance owner has approved the change.',
      },
    ],
    workflow: [
      { step: '1', title: 'Receive', text: 'Save the invoice in the approved queue and check that the file opens.' },
      { step: '2', title: 'Check', text: 'Review the vendor, invoice number, amount, due date, PO, receipt, and required coding.' },
      { step: '3', title: 'Prepare', text: 'Enter the allowed fields, attach source records, and note any missing item.' },
      { step: '4', title: 'Route', text: 'Send the packet to the named approver and keep the approval status current.' },
      { step: '5', title: 'Escalate', text: 'Stop and raise bank changes, unknown attachments, duplicate risks, and requests outside the rule.' },
      { step: '6', title: 'Close', text: 'Mark the packet complete only after the required review is recorded.' },
    ],
    faqs: [
      { question: 'What does an accounts payable virtual assistant do?', answer: 'The assistant handles repeatable AP preparation such as inbox sorting, invoice entry, document checks, approval follow-up, and open-item reports. The exact scope should match your software, controls, and reviewer capacity.' },
      { question: 'Can the assistant approve or pay invoices?', answer: 'The safer role keeps invoice approval and payment release with named people inside your company. The assistant may prepare an approved payment list, but your finance owner reviews and releases it.' },
      { question: 'Where is the talent recruited?', answer: 'This business recruits, hires, and provides talent only from the Philippines. The role plan should state the required work hours, handoff window, and manager overlap.' },
      { question: 'Which task should we hand off first?', answer: 'Start with one task that has examples, clear rules, and a visible result. AP inbox sorting or invoice data preparation is often easier to review than vendor-master changes or payment work.' },
      { question: 'How much access should the assistant get?', answer: 'Give only the access needed for the approved starting task. Add permissions after the person follows the process and the finance owner confirms that the extra access is needed.' },
      { question: 'How should we measure the first month?', answer: 'Review corrections, open exceptions, manager questions, access issues, and whether packets reach the right approver. Treat the numbers in this guide as planning examples, not promised output or a benchmark.' },
    ],
    relatedLinks: [
      { href: '/services/invoice-data-capture', label: 'Invoice data capture support' },
      { href: '/services/ap-inbox-management', label: 'AP inbox management' },
      { href: '/services/three-way-match-support', label: 'Three-way match support' },
      { href: '/services/payment-run-preparation', label: 'Payment-run preparation' },
      { href: '/services/vendor-statement-reconciliation', label: 'Vendor statement reconciliation' },
      { href: '/blog/outsource-accounts-payable-onboarding-checklist', label: 'First-week AP onboarding checklist' },
    ],
    sources: [
      { name: 'IRS, Form W-9', url: 'https://www.irs.gov/pub/irs-pdf/fw9.pdf', note: 'The form and instructions explain that a US person gives a correct taxpayer identification number and certification to the requester.' },
      { name: 'NIST SP 800-53 Rev. 5, AC-6 Least Privilege', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'The access-control catalog defines least privilege as allowing only the access needed for assigned tasks.' },
      { name: 'CISA, Recognize and Report Phishing', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', note: 'CISA describes urgent or emotional language as a phishing warning sign and recommends verifying suspicious messages through trusted channels.' },
    ],
  },
} as const;

export const staffingOffer = {
  promise: 'Get an AP staffing plan based on the queue, controls, and review work you need covered.',
  included: [
    'Turn your invoice and vendor tasks into a role with clear limits',
    'Match the schedule, software, and AP experience the work calls for',
    'Plan examples, review steps, reports, and limited tool access for the first week',
    'Set an escalation path for errors, attendance issues, and role-fit problems',
  ],
} as const;

export const leadQuestions = [
  'Which AP work do you want off your plate first?',
  'Which accounting system, inbox, vendor portal, or approval tool will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks invoice quality during the first two weeks?',
  'What should the staff member never approve or change without permission?',
] as const;

export const staffingFitNote = 'Every AP staffing plan depends on role scope, schedule, tools, controls, and management needs. Send the role details to map a sensible first step.';


export const researchPosts: Array<{ slug: string; title: string; excerpt: string; body: string[] }> = [];
