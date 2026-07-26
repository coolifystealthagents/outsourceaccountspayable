export const vendorOnboardingPostDetail = {
  mainKeyword: 'vendor onboarding checklist Philippines',
  published: '2026-07-26',
  modified: '2026-07-26',
  shortAnswer: 'A Filipino AP assistant can collect vendor forms, check that required fields are present, log open items, and prepare a vendor packet. A named employee inside your company should verify bank details through a known contact, approve the vendor record, approve any later change, and keep payment release.',
  evidenceStats: [
    { value: '21,442', label: 'BEC complaints reported in 2024', context: 'FBI IC3 2024 Annual Report' },
    { value: '21,489', label: 'BEC complaints reported in 2023', context: 'FBI IC3 three-year comparison' },
    { value: '21,832', label: 'BEC complaints reported in 2022', context: 'FBI IC3 three-year comparison' },
    { value: '$55.5B', label: 'exposed BEC loss reported for Oct. 2013-Dec. 2023', context: 'FBI IC3 September 2024 public notice' },
  ],
  riskRows: [
    { request: 'Create a new vendor', clue: 'Requester and business need are not recorded', assistant: 'Collect the packet and list each missing item', owner: 'Confirm the request and approve the vendor record' },
    { request: 'Add bank details', clue: 'Account data arrives only by email', assistant: 'Pause the field and log the source message', owner: 'Verify through a known contact and record approval' },
    { request: 'Accept a tax form', clue: 'Name and tax fields do not match the packet', assistant: 'Flag the mismatch without correcting it', owner: 'Decide whether the record can be accepted' },
    { request: 'Open portal access', clue: 'The role asks for broad finance permissions', assistant: 'Request only the fields needed for the assigned task', owner: 'Approve the access role and review date' },
    { request: 'Change an active vendor', clue: 'Urgent request bypasses the normal owner', assistant: 'Keep the current record and raise an exception', owner: 'Repeat the known-contact check before any change' },
  ],
  lossChart: [
    { year: '2022', value: 2742, label: '$2.742B' },
    { year: '2023', value: 2947, label: '$2.947B' },
    { year: '2024', value: 2770, label: '$2.770B' },
  ],
  controlGraphic: [
    { step: '1', title: 'Log', text: 'Save the request and original message.' },
    { step: '2', title: 'Pause', text: 'Leave the current bank record unchanged.' },
    { step: '3', title: 'Verify', text: 'Call a known vendor contact.' },
    { step: '4', title: 'Approve', text: 'A company owner records the decision.' },
  ],
  expertQuote: {
    text: 'Last year saw a new record for losses reported to IC3, totaling a staggering $16.6 billion.',
    cite: 'B. Chad Yarbrough, Operations Director for Criminal and Cyber, FBI, 2024 IC3 Annual Report',
  },
  sections: [
    {
      title: 'Give every vendor packet one owner',
      paragraphs: [
        'A vendor packet can pass through email, a form, an accounting system, and a bank check before the first invoice is ready. Name one employee inside your company who owns the final vendor decision, even when a Filipino AP assistant prepares most of the record.',
        'The assistant can collect documents, check required fields, compare names across the packet, and list what is missing. The assistant should not approve the vendor, decide whether a mismatch is harmless, or release a payment tied to the new record.',

      ],
    },
    {
      title: 'Start with the business reason and requester',
      paragraphs: [
        'Before asking for bank or tax details, record who requested the vendor and why the company needs it. The request should name the department, service or product, expected invoice path, and employee who will confirm the work was received.',
        'This first note gives the assistant a source inside your company. If a vendor appears without a known requester, the assistant can stop before collecting sensitive records or creating a nearly complete profile that feels ready to approve.',

      ],
    },
    {
      title: 'Collect tax records without making a tax decision',
      paragraphs: [
        'For a US person, the IRS says Form W-9 gives the requester the correct taxpayer identification number and certification. A Filipino AP assistant may send the approved request, collect the returned form, and check whether the required name and identification fields are present.',
        'The assistant should not guess at a tax classification or repair a mismatch by changing the vendor record. Put unclear names, blank fields, altered forms, and conflicting addresses on the exception list for the company owner or tax adviser.',
        'Store the form in the approved vendor system rather than a personal inbox or local folder. Limit who can open it, keep the source file with the packet, and follow your company retention rules after the record is accepted or rejected.',
      ],
    },
    {
      title: 'Verify bank details outside the request',
      paragraphs: [
        'A new vendor packet can be real while one message inside it is not. Bank details deserve a second path because an attacker may copy a vendor name, use a similar domain, or join an email thread that already contains real invoice facts.',
        'The assistant should save the message, leave the bank field unchanged, and route the item to the named company owner. That owner should call a known number from an earlier contract, approved directory, or independently confirmed company site instead of using a number supplied in the bank-change message.',
        'CISA tells readers to be suspicious of unexpected messages and to confirm the source through a trusted path. Put the approved contact source in the checklist so verification does not turn into a web search made while an urgent request is waiting.',
      ],
    },
    {
      title: 'Keep creation, approval, and payment apart',
      paragraphs: [
        'One login should not be able to create the vendor, replace bank details, approve the invoice, and release the payment. The written checklist and software roles should both separate preparation from the company decisions that move money.',
        'NIST defines least privilege as limiting access to the minimum resources needed for assigned work. For the assistant, that may mean one company entity, vendor queue, or document area rather than broad access across the accounting system.',
        'Start with read-only access when the task allows it. If the assistant must enter a draft record, keep approval and activation with another role, then review access when the task or worker changes.',
      ],
    },
    {
      title: 'Review the packet before activation',
      paragraphs: [
        'The final review should compare the internal request, legal name, tax record, address, bank verification note, payment terms in the approved agreement, and named invoice approver. It should also show who checked each item and when the check happened.',
        'Do not let a complete-looking packet hide a mismatch. A different legal name, a changed domain, a bank account in another name, or an employee who cannot confirm the vendor should keep the record in review.',

      ],
    },
    {
      title: 'Repeat the check when details change',
      paragraphs: [
        'Onboarding is not the last time a vendor record needs care. A new bank account, address, tax detail, contact, or ownership notice should reopen the related check instead of quietly replacing the approved field.',
        'Ask the assistant to keep the old record, log the requested change, and identify the employee who owns the decision. The owner repeats the trusted-contact check and records the source, result, and approval before the record changes.',

      ],
    },
  ],
  banners: [
    { eyebrow: 'Narrow the first lane', title: 'Start with invoice data capture', text: 'Give the assistant one queue and one reviewer before adding broader AP access.', href: '/services/invoice-data-capture', label: 'See invoice support' },
    { eyebrow: 'Write the inbox rule', title: 'Plan AP inbox management', text: 'Set the labels, stop points, and response owners for invoice and vendor messages.', href: '/services/ap-inbox-management', label: 'Map the inbox lane' },
    { eyebrow: 'Prepare the first week', title: 'Use the AP onboarding checklist', text: 'Turn the control line into examples, access limits, and daily review steps.', href: '/blog/outsource-accounts-payable-onboarding-checklist', label: 'Open the checklist' },
  ],
  scripts: [
    { title: 'Missing vendor record request', text: 'Hi [name], I am preparing the vendor packet for [vendor]. The record still needs [missing item]. Please send it through [approved path] or tell me which company owner should review the exception. I will keep the vendor in review until that step is complete.' },
    { title: 'Bank-detail verification hold', text: 'Hi [name], I received new payment details for [vendor]. I have saved the request and left the current record unchanged. [Company owner] will verify the details through our known vendor contact and record the decision before any update is made.' },
  ],
  checklistTitle: 'Vendor onboarding packet check',
  checklist: [
    'Internal requester and business reason are recorded',
    'Required company and tax records are present',
    'Bank details were checked through a known contact path',
    'Assistant access matches the preparation task',
    'A named employee approved the vendor record',
    'Later changes reopen the matching check',
  ],
  faqs: [
    { question: 'What can a Filipino AP assistant do during vendor onboarding?', answer: 'The assistant can collect approved forms, check required fields, organize source records, track missing items, and prepare a draft vendor packet. Your company should keep vendor approval, bank-detail approval, invoice approval, and payment release.' },
    { question: 'Who should verify a new vendor bank account?', answer: 'A named employee inside your company should verify it through a known vendor contact that did not come from the bank-detail request. The assistant can pause the record and prepare the evidence for that check.' },
    { question: 'Can the assistant decide whether a tax form is correct?', answer: 'The assistant can check that required fields are present and flag visible mismatches. Tax classification and acceptance decisions should follow your company process and stay with the responsible company owner or adviser.' },
    { question: 'How much system access should the assistant receive?', answer: 'Give only the access needed to collect records or prepare the assigned vendor fields. Keep activation, approval, broad administration, and payment release in separate company roles.' },
    { question: 'What happens when an existing vendor changes bank details?', answer: 'Keep the old record, log the request, and repeat the known-contact verification. A named company owner should approve the change before anyone updates the active payment record.' },
  ],
  relatedLinks: [
    { href: '/services/vendor-onboarding-administration', label: 'Vendor onboarding administration' },
    { href: '/services/tax-document-collection', label: 'Tax document collection' },
    { href: '/services/ap-inbox-management', label: 'AP inbox management' },
    { href: '/services/duplicate-invoice-review', label: 'Duplicate invoice review' },
    { href: '/blog/accounts-payable-fraud-prevention-philippines', label: 'AP fraud prevention guide' },
    { href: '/blog/outsource-accounts-payable-onboarding-checklist', label: 'First-week AP onboarding checklist' },
  ],
  sources: [
    { name: '1. FBI IC3, 2024 Annual Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf', note: 'Reports 21,442 BEC complaints in 2024, compared with 21,489 in 2023 and 21,832 in 2022. Its loss table supplies the chart values, and its introduction contains Yarbrough\'s exact quote.' },
    { name: '2. FBI IC3, Business Email Compromise: The $55 Billion Scam', url: 'https://www.ic3.gov/PSA/2024/PSA240911', note: 'Reports 305,033 BEC incidents and $55,499,915,582 in exposed loss from October 2013 through December 2023.' },
    { name: '3. IRS, Form W-9', url: 'https://www.irs.gov/pub/irs-pdf/fw9.pdf', note: 'The form says a US person gives the requester a correct taxpayer identification number and certification. This source does not apply to every vendor or country.' },
    { name: '4. NIST CSRC Glossary, Least Privilege', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Defines least privilege as restricting access to the minimum system resources needed for assigned work.' },
    { name: '5. CISA, Avoiding Social Engineering and Phishing Attacks', url: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks', note: 'Lists common phishing clues and recommends checking suspicious messages through a trusted source.' },
  ],
} as const;
