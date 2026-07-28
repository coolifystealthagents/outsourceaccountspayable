export const invoiceApprovalWorkflowPostDetail = {
  mainKeyword: 'invoice approval workflow Philippines',
  published: '2026-07-28',
  modified: '2026-07-28',
  shortAnswer: 'A Filipino AP assistant can check invoice packets, record missing items, route them to the right reviewer, and keep the approval queue current. Your company should name the people who approve invoices, accept vendor changes, decide exceptions, and release payments.',
  evidenceStats: [
    { value: '21,442', label: 'BEC complaints reported in 2024', context: 'FBI IC3 2024 Annual Report' },
    { value: '$2.770B', label: 'reported BEC losses in 2024', context: 'FBI IC3 three-year loss table' },
    { value: '$2.947B', label: 'reported BEC losses in 2023', context: 'FBI IC3 three-year loss table' },
    { value: '$2.742B', label: 'reported BEC losses in 2022', context: 'FBI IC3 three-year loss table' },
  ],
  riskRows: [
    { request: 'Invoice has no purchase order', clue: 'The normal source record is missing', assistant: 'Put the invoice on hold and list the missing record', owner: 'Decide whether an approved exception can move' },
    { request: 'Vendor sends new bank details', clue: 'Payment instructions changed by email', assistant: 'Keep the old record and save the request', owner: 'Verify through a known contact and approve or reject' },
    { request: 'Invoice needs different coding', clue: 'No note supports the proposed account', assistant: 'Record the question and attach the source packet', owner: 'Choose and approve the accounting treatment' },
    { request: 'Senior employee asks for speed', clue: 'The message asks staff to skip a check', assistant: 'Keep the item in the exception lane', owner: 'Confirm the request and decide the next step' },
    { request: 'Invoice looks like a duplicate', clue: 'Vendor, number, amount, or date matches', assistant: 'Link both records and mark the shared fields', owner: 'Decide whether either invoice can be approved' },
  ],
  lossChart: [
    { year: '2022', value: 2742, label: '$2.742B' },
    { year: '2023', value: 2947, label: '$2.947B' },
    { year: '2024', value: 2770, label: '$2.770B' },
  ],
  controlGraphic: [
    { step: '1', title: 'Check', text: 'Compare the invoice with its source records.' },
    { step: '2', title: 'Hold', text: 'Keep incomplete or changed items out of approval.' },
    { step: '3', title: 'Verify', text: 'Use the named owner or known vendor contact.' },
    { step: '4', title: 'Record', text: 'Save the decision before the queue moves.' },
  ],
  expertQuote: {
    text: 'Last year saw a new record for losses reported to IC3, totaling a staggering $16.6 billion.',
    cite: 'B. Chad Yarbrough, Operations Director for Criminal and Cyber, FBI, 2024 IC3 Annual Report',
  },
  sections: [
    {
      title: 'Start with the packet, not the approval button',
      paragraphs: [
        'An invoice should reach an approver only after the basic packet is ready. A Filipino AP assistant can check the vendor name, invoice number, amount, due date, purchase order, receipt, coding note, and named reviewer before routing it.',
        'Write down what a complete packet looks like in your own system. Show one clean example and several stopped examples so the assistant can see the difference without guessing.',
        'The assistant prepares and routes the evidence, but does not turn missing proof into an approval. When a required record is absent, the invoice goes to an exception list with a clear owner and next action.',
      ],
    },
    {
      title: 'Name the people who can say yes',
      paragraphs: [
        'A job title alone is not an approval rule. List the employee who can approve each company, department, purchase type, or exception, then keep that list beside the invoice queue.',
        'Give the assistant a backup contact for leave and time-zone gaps. The backup should have the same written authority instead of becoming the default answer whenever the first approver is slow.',
        'Your company should also name who can accept a new vendor, approve changed bank details, choose unusual coding, and release a payment. Those decisions may sit with different people, and the invoice record should show each separate decision.',
      ],
    },
    {
      title: 'Build one normal lane and one exception lane',
      paragraphs: [
        'Most invoices should follow the normal lane: check the packet, prepare allowed fields, route to the named reviewer, record the response, and close the task. The assistant can keep this queue moving during agreed work hours in the Philippines.',
        'Anything that breaks a written check belongs in the exception lane. Missing receipts, duplicate clues, changed payment instructions, unknown attachments, and requests to bypass approval should stay visible until the right owner responds.',
        'Do not hide exceptions in chat or a private notebook. Use a shared list with the invoice, vendor, issue, date found, current owner, next action, and final decision so another reviewer can follow the history.',
      ],
    },
    {
      title: 'Treat changed payment details as a separate event',
      paragraphs: [
        'An approved invoice does not approve a new bank account. If payment details change, the assistant should keep the current vendor record, save the request, and send it through the company bank-change check.',
        'The FBI recorded 21,442 Business Email Compromise complaints and $2,770,151,146 in reported losses during 2024. Those figures cover many kinds of BEC reports, not just invoices or Philippines-based teams, but they show why a payment change needs its own check.',
        'A named employee should contact the vendor through a known number or earlier approved record. CISA advises people to confirm suspicious messages through a trusted source rather than using contact details supplied in the message itself.',
      ],
    },
    {
      title: 'Keep the assistant inside a narrow access role',
      paragraphs: [
        'The assistant needs enough access to inspect the packet and update the assigned queue. That does not mean the same login should add vendors, change bank fields, approve invoices, and release payments.',
        'NIST defines least privilege as giving a user only the system resources needed for assigned work. In an AP queue, that may mean one company file, inbox, document area, or draft-entry role instead of broad finance access.',
        'Review access when the task changes, the assistant moves to another account, or the work ends. Save the review date and owner in the same place where your team records the role and approved tools.',
      ],
    },
    {
      title: 'Review early packets while the work is still small',
      paragraphs: [
        'Start with one invoice group that a finance owner can inspect without losing the day. Review the first packets against the source files, then mark the exact failed check rather than leaving a note that only says to be more careful.',
        'Use two set review windows during the first week if that fits your team. The assistant can collect ordinary questions for those windows while risky requests follow the immediate stop path.',
        'Watch for repeat questions after several days. If the same field or approval owner causes trouble, fix the written rule or source form before giving the assistant a larger queue.',
      ],
    },
  ],
  banners: [
    { eyebrow: 'Narrow the first lane', title: 'Start with invoice data capture', text: 'Give the assistant one queue and one reviewer before adding broader AP access.', href: '/services/invoice-data-capture', label: 'See invoice support' },
    { eyebrow: 'Write the inbox rule', title: 'Plan AP inbox management', text: 'Set the labels, stop points, and response owners for invoice and vendor messages.', href: '/services/ap-inbox-management', label: 'Map the inbox lane' },
    { eyebrow: 'Prepare the first week', title: 'Use the AP onboarding checklist', text: 'Turn the control line into examples, access limits, and daily review steps.', href: '/blog/vendor-onboarding-checklist-philippines-ap-team', label: 'Open the checklist' },
  ],
  scripts: [
    { title: 'Missing packet reply', text: 'Hi [name], invoice [number] is waiting for [purchase order, receipt, coding note, or approval owner]. I have kept it in the exception queue and attached the records we already have. Please send the missing item or name the company owner who can decide the exception.' },
    { title: 'Changed payment detail hold', text: 'Hi [name], I received new payment details for [vendor]. I have saved the request and left the current vendor record unchanged. [Company owner] will verify the request through our known vendor contact before any update or payment decision.' },
  ],
  checklistTitle: 'First-week invoice approval check',
  checklist: [
    'A complete packet is shown with real examples',
    'Each invoice group has a named approver and backup',
    'Normal and exception queues are kept separate',
    'Vendor and bank changes use their own approval path',
    'Assistant access matches the assigned preparation work',
    'Every approval and return reason stays with the invoice record',
  ],
  faqs: [
    { question: 'What can a Filipino AP assistant do in an invoice approval workflow?', answer: 'The assistant can check packet fields, attach source records, list missing items, route invoices, follow up with named reviewers, and keep the queue current. Your company should keep invoice approval and payment release with authorized employees.' },
    { question: 'Can the assistant approve an invoice?', answer: 'The safer role treats the assistant as the person who prepares and routes the packet. A named employee inside your company reviews the evidence and records the approval or return decision.' },
    { question: 'What should happen when invoice details are missing?', answer: 'Move the invoice to a shared exception list and record the missing item, owner, and next action. Do not let a due date or urgent email replace the required source record.' },
    { question: 'Who checks changed vendor bank details?', answer: 'A named company employee should verify the change through a known vendor contact and record the result. The assistant can save the request, keep the old record, and prepare the item for that check.' },
    { question: 'How should the first week be reviewed?', answer: 'Start with one invoice group and inspect early packets against the source files. Record the exact failed check, fix unclear rules, and expand only after the first lane is easy to review.' },
  ],
  relatedLinks: [
    { href: '/services/invoice-data-capture', label: 'Invoice data capture support' },
    { href: '/services/ap-inbox-management', label: 'AP inbox management' },
    { href: '/services/duplicate-invoice-review', label: 'Duplicate invoice review' },
    { href: '/services/payment-run-preparation', label: 'Payment-run preparation' },
    { href: '/blog/accounts-payable-virtual-assistant', label: 'Accounts payable virtual assistant guide' },
    { href: '/blog/accounts-payable-fraud-prevention-philippines', label: 'AP fraud prevention guide' },
  ],
  sources: [
    { name: '1. FBI IC3, 2024 Annual Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf', note: 'Reports 21,442 BEC complaints and $2,770,151,146 in BEC losses for 2024. Its three-year table reports $2,946,830,270 for 2023 and $2,742,354,049 for 2022, and its opening message contains Yarbrough\'s exact quote.' },
    { name: '2. FBI IC3, Business Email Compromise: The $55 Billion Scam', url: 'https://www.ic3.gov/PSA/2024/PSA240911', note: 'The September 2024 public notice describes common BEC payment-change methods and tells businesses to verify changes through known contact details.' },
    { name: '3. CISA, Avoiding Social Engineering and Phishing Attacks', url: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks', note: 'Advises checking suspicious messages through a trusted source instead of contact details supplied in the message.' },
    { name: '4. NIST CSRC Glossary, Least Privilege', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Defines least privilege as restricting access to the minimum system resources needed for assigned work.' },
    { name: '5. IRS, Form W-9', url: 'https://www.irs.gov/pub/irs-pdf/fw9.pdf', note: 'Explains the information a US person gives a requester on Form W-9. The form does not apply to every vendor or country, and a support worker should not make tax decisions.' },
  ],
} as const;
