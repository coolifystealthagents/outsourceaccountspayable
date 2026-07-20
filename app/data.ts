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
    title: 'Outsource accounts payable: what should you plan first?',
    excerpt: 'A plain-English guide to AP scope, controls, and handoff planning before you hire.',
    minutes: 6,
  },
  {
    slug: 'outsource-accounts-payable-tasks-to-outsource',
    title: 'Outsource accounts payable: tasks to hand off first',
    excerpt: 'Start with recurring AP work that has examples, rules, and a clear reviewer.',
    minutes: 7,
  },
  {
    slug: 'outsource-accounts-payable-provider-questions',
    title: 'Outsource accounts payable: questions to ask before hiring',
    excerpt: 'Use these AP provider questions before you sign with a staffing firm or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsource-accounts-payable-onboarding-checklist',
    title: 'Outsource accounts payable: first week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, reporting, and payment controls.',
    minutes: 9,
  },
] as const;

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the AP work you need removed from your plate.',
  fit: [
    'finance teams with a crowded AP inbox and slow approval follow-up',
    'owners who need invoice and vendor support but want payment control to stay internal',
    'companies that need help with AP admin, reporting, vendor replies, and month-end prep',
  ],
  included: [
    'role planning call to turn your AP task list into a clear staffing scope',
    'candidate matching based on schedule, tools, communication needs, and finance-support experience',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear AP task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'Which AP work do you want off your plate first?',
  'Which accounting system, inbox, vendor portal, or approval tool will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks invoice quality during the first two weeks?',
  'What should the staff member never approve or change without permission?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the AP role', body: 'We turn messy invoice tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and finance-support level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample invoices, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger AP coverage without guessing.' },
] as const;

export const staffingFitNote = 'Every AP staffing plan depends on role scope, schedule, tools, controls, and management needs. Send the role details and our staffing team can guide the best fit.';
