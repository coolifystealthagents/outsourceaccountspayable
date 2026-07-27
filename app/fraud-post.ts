export const fraudPostDetail = {
    mainKeyword: 'accounts payable fraud prevention',
    published: '2026-07-25',
    modified: '2026-07-25',
    shortAnswer: 'A Filipino AP assistant can log invoices, compare source records, and prepare exception notes. Your company should keep vendor-master changes, bank-detail approval, invoice approval, and payment release with named employees who verify requests through known contact details.',
    evidenceStats: [
      { value: '21,442', label: 'BEC complaints in 2024', context: 'FBI IC3 2024 Annual Report' },
      { value: '$2.77B', label: 'reported BEC losses in 2024', context: 'FBI IC3 complaint-loss table' },
      { value: '305,033', label: 'BEC incidents reported for Oct. 2013-Dec. 2023', context: 'FBI IC3 September 2024 public notice' },
      { value: '$55.5B', label: 'exposed BEC loss for the same 2013-2023 period', context: 'FBI IC3 reports and financial filings' },
    ],
    riskRows: [
      { request: 'Change vendor bank details', clue: 'New account or urgent email', assistant: 'Pause, save the message, and tag the vendor record', owner: 'Call a known contact and approve or reject the change' },
      { request: 'Pay an invoice today', clue: 'Pressure to skip the normal queue', assistant: 'Check the PO, receipt, approval, and prior record', owner: 'Decide whether the payment can move' },
      { request: 'Open a new attachment', clue: 'Unexpected file or sender domain', assistant: 'Keep it closed and send it through the security path', owner: 'Confirm the sender and safe handling step' },
      { request: 'Add a new vendor', clue: 'Missing tax or ownership record', assistant: 'Collect the required packet and list missing fields', owner: 'Approve the vendor-master record' },
      { request: 'Change invoice coding', clue: 'No source note or unusual account', assistant: 'Record the proposed code and reason', owner: 'Approve the accounting treatment' },
    ],
    lossChart: [
      { year: '2022', value: 2742, label: '$2.742B' },
      { year: '2023', value: 2947, label: '$2.947B' },
      { year: '2024', value: 2770, label: '$2.770B' },
    ],
    controlGraphic: [
      { step: '1', title: 'Log', text: 'Save the request and original message.' },
      { step: '2', title: 'Pause', text: 'Do not edit the vendor record.' },
      { step: '3', title: 'Verify', text: 'Use a known number or prior record.' },
      { step: '4', title: 'Approve', text: 'A company owner records the decision.' },
    ],
    expertQuote: {
      text: 'Last year saw a new record for losses reported to IC3, totaling a staggering $16.6 billion.',
      cite: 'B. Chad Yarbrough, Operations Director for Criminal and Cyber, FBI, 2024 IC3 Annual Report',
    },
    sections: [
      {
        title: 'Put the control line in the role brief',
        paragraphs: [
          'Fraud prevention starts with a short list of decisions the assistant cannot make. Write that list into the role brief, software access request, and first-week training plan so the same rule appears wherever the work is taught.',
          'A Philippines-based assistant may prepare a clean invoice packet, but the company still owns the money decision. Name the employee who approves a vendor, accepts changed bank details, approves an invoice, and releases a payment.',
          'Avoid broad instructions such as "use your best judgment" for a risky request. Give the assistant a clear stop point, a known person to contact, and a place to record what happened before the queue moves again.',
        ],
      },
      {
        title: 'Treat a changed bank account as a new request',
        paragraphs: [
          'A familiar vendor name does not make new payment instructions safe. The email account may be copied, compromised, or changed by one character, and a past invoice may give the message enough detail to look real.',
          'The assistant should save the request, pause any vendor-master edit, and mark the invoice as waiting for verification. The finance owner should call a contact from an approved vendor record or earlier statement, not a number supplied in the change email.',
          'Record who completed the call, which contact was used, what was confirmed, and who approved the final change. If the vendor cannot be reached, the bank record stays as it was and the invoice remains on the exception list.',
        ],
      },
      {
        title: 'Use least privilege for AP tools',
        paragraphs: [
          'NIST defines least privilege as restricting a user to the minimum access needed for assigned tasks. For an AP assistant, that can mean access to one inbox, company entity, queue, or accounting module instead of the whole finance system.',
          'Start with read-only access when it lets the person compare records and prepare notes. If the task needs editing, separate invoice preparation from vendor-master changes, approval, and payment release through software roles as well as written rules.',
          'Review access when the role changes and when a person leaves the account. A tidy permissions list matters because an old login or an unused vendor portal can outlive the work it was meant to support.',
        ],
      },
      {
        title: 'Give urgent messages their own lane',
        paragraphs: [
          'An email that asks for secrecy, speed, or a break from the normal process belongs in an exception lane. The assistant should not let a due date, senior name, or worried vendor push the request past the written check.',
          'CISA advises people to verify questionable requests by contacting the company directly and to avoid contact details tied to the request. Put that rule beside the AP inbox so the assistant does not have to remember it while an urgent message is open.',
          'Set two response paths: a normal review window for ordinary questions and an immediate stop for bank changes, unknown attachments, unusual payment instructions, or requests to bypass approval. That keeps routine work moving without making risky work look routine.',
        ],
      },
      {
        title: 'Check the packet before checking the person',
        paragraphs: [
          'A good review starts with the source records, not with whether an email sounds friendly. Compare the vendor name, invoice number, amount, purchase order, receipt, prior payment details, approval owner, and sender domain before the packet reaches approval.',
          'Give the assistant examples of a complete packet and several bad ones. Include a duplicate-looking invoice, a missing receipt, a new sender, a changed remittance account, and a request that uses the right executive name but the wrong process.',
          'Ask the reviewer to mark the failed check rather than writing a vague note such as "be more careful." A clear correction teaches the next action and shows whether the problem came from training, access, intake, or a missing company rule.',
        ],
      },
      {
        title: 'Keep one exception log',
        paragraphs: [
          'The exception log should show the invoice, vendor, issue, date, current owner, next action, and final decision. It gives a Filipino assistant working across time zones one place to see what stopped and what can safely continue.',
          'Review open items at fixed times instead of mixing them into chat messages and email threads. A short daily review can clear normal questions while bank changes and suspicious requests follow the faster stop-and-verify path.',
          'Use the log to find repeat problems after the first month. If the same vendor sends incomplete records or the same coding question returns each week, fix the intake rule before expanding the assistant into another AP lane.',
        ],
      },
      {
        title: 'Test the process with safe examples',
        paragraphs: [
          'Run a short practice set before live access grows. Ask the assistant to handle a normal invoice, a likely duplicate, an unexpected attachment, a changed bank account, and a rushed request that appears to come from a senior employee.',
          'Score whether the person found the clue, stopped in the right place, used the approved contact path, and wrote a useful note. The point is to test the company process as much as the person, because unclear rules will produce different answers from careful people.',
          'Repeat the test when tools, owners, or vendor steps change. Keep final approval and payment release with the company even after the preparation work becomes steady and the assistant needs less help with ordinary invoices.',
        ],
      },
    ],
    banners: [
      { eyebrow: 'Narrow the first lane', title: 'Start with invoice data capture', text: 'Give the assistant one queue and one reviewer before adding broader AP access.', href: '/services/invoice-data-capture', label: 'See invoice support' },
      { eyebrow: 'Write the inbox rule', title: 'Plan AP inbox management', text: 'Set the labels, stop points, and response owners for invoice and vendor messages.', href: '/services/ap-inbox-management', label: 'Map the inbox lane' },
      { eyebrow: 'Prepare the first week', title: 'Use the AP onboarding checklist', text: 'Turn the control line into examples, access limits, and daily review steps.', href: '/blog', label: 'Open the checklist' },
    ],
    scripts: [
      { title: 'Changed bank-detail reply', text: 'Hi [name], I received the request to change payment details for [vendor]. I have paused the record and sent the request to [finance owner]. Our team will verify it through the approved vendor contact before any change is made.' },
      { title: 'Urgent payment reply', text: 'Hi [name], invoice [number] is marked urgent. I am checking the source packet and approval record now. [Finance owner] will decide whether it can move outside the normal payment queue.' },
    ],
    checklistTitle: 'First-week fraud prevention check',
    checklist: [
      'Named company owners keep vendor, invoice, and payment approval',
      'Known vendor contact details are stored outside change requests',
      'The assistant has only the access needed for the first AP lane',
      'Urgent messages and unknown attachments have a written stop path',
      'One exception log records the issue, owner, check, and decision',
      'Practice invoices test normal, duplicate, bank-change, and rush cases',
    ],
    faqs: [
      { question: 'Can a Filipino AP assistant help prevent invoice fraud?', answer: 'The assistant can follow written checks, compare source records, flag exceptions, and keep the review trail current. Your company should still own vendor approval, bank-detail approval, invoice approval, and payment release.' },
      { question: 'Who should verify changed vendor bank details?', answer: 'A named employee inside your company should verify the request through a known vendor contact and record the decision. The assistant can pause the change, save the evidence, and route it to that owner.' },
      { question: 'What access should a remote AP assistant receive?', answer: 'Give the minimum access needed for the assigned queue or task. Keep vendor-master approval, broad admin rights, invoice approval, and payment release separate from preparation work.' },
      { question: 'How should a team handle an urgent payment email?', answer: 'Move it to the exception path and check the source packet, sender, approval record, and known contact details. Urgency should not remove an existing finance control.' },
      { question: 'Does this guide promise that fraud will be stopped?', answer: 'No. The checks reduce avoidable gaps and make decisions easier to review, but no process can promise that fraud, error, or loss will never happen.' },
    ],
    relatedLinks: [
      { href: '/services/invoice-data-capture', label: 'Invoice data capture support' },
      { href: '/services/vendor-onboarding-administration', label: 'Vendor onboarding administration' },
      { href: '/services/duplicate-invoice-review', label: 'Duplicate invoice review' },
      { href: '/services/ap-inbox-management', label: 'AP inbox management' },
      { href: '/blog/accounts-payable-virtual-assistant', label: 'Accounts payable virtual assistant guide' },
      { href: '/blog', label: 'First-week AP onboarding checklist' },
    ],
    sources: [
      { name: '1. FBI IC3, 2024 Annual Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf', note: 'Reports 21,442 BEC complaints and $2,770,151,146 in losses for 2024. Its table supplies chart values and its introduction contains Yarbrough\'s quote.' },
      { name: '2. FBI IC3, Business Email Compromise: The $55 Billion Scam', url: 'https://www.ic3.gov/PSA/2024/PSA240911', note: 'Reports 305,033 incidents and $55,499,915,582 in exposed loss from October 2013 through December 2023.' },
      { name: '3. NIST CSRC Glossary, Least Privilege', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Defines least privilege as the minimum access needed for assigned tasks.' },
      { name: '4. CISA, Avoiding Social Engineering and Phishing Attacks', url: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks', note: 'Advises verifying suspicious requests through an independently found company contact.' },
    ],
} as const;
