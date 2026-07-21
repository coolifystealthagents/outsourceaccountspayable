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
  {
    slug: 'operations-support',
    title: 'AP operations support',
    desc: 'Remote accounts payable help for invoice intake, coding prep, approval chasing, and payment-run support with clear finance controls.',
    bestTasks: [
      'Sort AP inbox mail by vendor, due date, PO match, and approval owner',
      'Prepare invoice coding notes before a controller or manager approves them',
      'Track missing W-9s, bank details, receipts, and vendor statements',
      'Keep the open-invoice list clean before weekly payment review',
    ],
    qualityControls: [
      'No vendor setup, bank change, or payment release without a named approver',
      'Two-sample daily spot check during the first two weeks',
      'Exception log for duplicate invoices, price gaps, tax issues, and missing POs',
    ],
    firstWeek: [
      'Give read-only access first, then add limited task permissions after review',
      'Share ten good invoice examples and three bad examples',
      'Agree on the daily AP inbox cutoff and end-of-day status note',
    ],
    faqs: [
      {
        question: 'Can an outsourced AP assistant approve invoices?',
        answer: 'They can prepare the packet and chase the approver. A company manager should still own invoice approval and payment release.',
      },
      {
        question: 'What should we test first?',
        answer: 'Start with inbox sorting, vendor follow-up, and invoice-status reporting before giving access to more sensitive accounting tasks.',
      },
    ],
  },
  {
    slug: 'customer-support',
    title: 'Vendor support desk',
    desc: 'A remote vendor-response desk for payment-status emails, missing-document requests, and invoice follow-up without handing over payment control.',
    bestTasks: [
      'Answer vendor emails with approved payment-status language',
      'Request missing invoices, statements, tax forms, and remittance details',
      'Route urgent vendor issues to the right finance owner',
      'Update a simple vendor-contact tracker after each reply',
    ],
    qualityControls: [
      'Approved reply templates for payment timing, short pays, and missing paperwork',
      'Same-day escalation for threats to pause service, collections notices, or legal language',
      'Weekly review of unanswered vendor threads and repeat questions',
    ],
    firstWeek: [
      'Load the top 20 vendor questions into a shared answer sheet',
      'Tag the assistant on live examples before they reply alone',
      'Keep payment promises out of replies unless finance approved the date',
    ],
    faqs: [
      {
        question: 'Should a remote vendor-support assistant promise payment dates?',
        answer: 'No. They should use approved language and escalate payment-date questions to the finance owner.',
      },
      {
        question: 'What access does the vendor desk need?',
        answer: 'Start with shared inbox access, vendor contact history, and read-only invoice status. Keep banking and payment permissions separate.',
      },
    ],
  },
  {
    slug: 'admin-support',
    title: 'AP admin support',
    desc: 'Administrative help for invoice files, vendor records, statement matching, and audit-ready AP folders.',
    bestTasks: [
      'Rename and file invoices, statements, approvals, and remittance records',
      'Compare vendor statements against open bills and flag gaps',
      'Prepare new-vendor packets for internal review',
      'Maintain AP checklists for month-end close support',
    ],
    qualityControls: [
      'Folder naming rules that match your accounting system and audit habits',
      'Checklist signoff before month-end folders are marked complete',
      'Manager review for every vendor master data change',
    ],
    firstWeek: [
      'Give a sample folder with correct file names and approval proof',
      'Choose one entity, one vendor group, or one AP inbox lane for the pilot',
      'Review the first 25 filed documents before expanding the scope',
    ],
    faqs: [
      {
        question: 'Is AP admin support the same as bookkeeping?',
        answer: 'No. AP admin support prepares records, files, and follow-up. Your finance owner or bookkeeper still reviews accounting decisions.',
      },
      {
        question: 'What work is safest to hand off first?',
        answer: 'Document filing, statement matching, and missing-paperwork follow-up are usually safer first than vendor setup or payment tasks.',
      },
    ],
  },
  {
    slug: 'reporting-and-qa',
    title: 'AP reporting and QA',
    desc: 'Weekly AP reporting support for aging lists, blocked invoices, duplicate checks, and manager-ready status notes.',
    bestTasks: [
      'Build a weekly blocked-invoice list with owner, reason, and next step',
      'Flag duplicate invoice numbers, odd amounts, and missing purchase orders',
      'Summarize vendor follow-up aging before the finance meeting',
      'Prepare a payment-run review packet without releasing funds',
    ],
    qualityControls: [
      'Simple red-flag labels for duplicates, bank changes, tax forms, and old balances',
      'Controller review before any status note goes to leadership',
      'Saved source links for every number in the weekly AP report',
    ],
    firstWeek: [
      'Pick the three AP numbers leadership actually wants each week',
      'Use last week\'s report as the model for labels and notes',
      'Compare the assistant\'s first report against the accounting system together',
    ],
    faqs: [
      {
        question: 'Can an outsourced assistant prepare AP reports?',
        answer: 'Yes, if they use read-only data and your finance owner checks the report before decisions are made from it.',
      },
      {
        question: 'Which AP report should come first?',
        answer: 'A blocked-invoice report is often the best first report because it shows owners, reasons, and next steps without adding payment risk.',
      },
    ],
  },
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
