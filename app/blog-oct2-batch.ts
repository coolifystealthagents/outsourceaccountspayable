type Draft = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  detail: {
    thumbnail: string;
    shortAnswer: string;
    published: string | null;
    modified: string | null;
    mainKeyword: string;
    sections: {title:string; paragraphs:string[]}[];
    checklistTitle: string;
    checklist: string[];
    bodyLinks: {href:string; label:string}[];
    faqs: {question:string; answer:string}[];
    sources: {name:string; url:string; note:string}[];
  };
};

// Publication metadata stays null until the combined release date is known.
// This partial draft file is intentionally not registered in app/data.ts until all 12 posts pass review.
export const oct2BlogDrafts: Draft[] = [
  {
    slug: 'invoice-exchange-rate-evidence-packet',
    title: 'Build an exchange-rate evidence packet for a foreign-currency invoice',
    excerpt: 'Give finance a reproducible view of the invoice currency, rate source, effective date, conversion arithmetic, and unresolved policy questions.',
    minutes: 11,
    detail: {
      thumbnail: '/blog-thumbnails/sep22-2026/invoice-currency-mismatch-review.svg',
      shortAnswer: 'An exchange-rate packet should reproduce the source invoice and conversion without asking an AP preparer to choose the accounting policy. It records the currencies, relevant dates, approved rate source, arithmetic, review owner, and final disposition in one traceable case.',
      published: null,
      modified: null,
      mainKeyword: 'invoice exchange rate evidence packet',
      sections: [
        {
          title: 'Start with the decision finance must make',
          paragraphs: [
            'A foreign-currency invoice can enter the AP queue with several plausible dates and amounts. The supplier may issue it in euros, the purchase order may be denominated in dollars, and the receiving record may use the local ledger currency. Before anyone converts a figure, write down the decision that remains open. Finance may need to confirm the booking currency, select the policy date, review a variance, or decide how a later credit should be treated. The AP specialist can make those choices easier to inspect. The specialist should not make them by quietly selecting whichever rate produces the expected total.',
            'Open one case for the invoice and retain its original file, supplier identifier, legal entity, purchase order, receipt or service evidence, invoice date, receipt timestamp, due date, currency code, gross amount, tax, freight, and any credit. Record where each field came from. An invoice image is the source for the supplier demand; it is not automatically the source for the company conversion rule. That distinction prevents a copied number in a spreadsheet from looking like an approved accounting conclusion.'
          ]
        },
        {
          title: 'Name every currency and rate source',
          paragraphs: [
            'Use ISO currency codes rather than symbols alone. A dollar sign can refer to more than one currency, and a supplier account may bill different entities in different currencies. Show the invoice currency, purchase-order currency, functional or ledger currency supplied by finance, and payment currency if it differs. If the system already stores a rate, capture the rate value, rate type, effective date, retrieval time, and system record. If a controlled external source is required, link to the exact series or table and preserve the value used. Do not replace a controlled source with the first result returned by a general web search.',
            'The packet should also say what is missing. A rate without a date is incomplete. A date without a named policy basis is only a date. A monthly average and a spot rate answer different questions, even if their values happen to be close. AP support can present the available alternatives and calculate their effects, but the finance owner must identify the applicable policy. Once that owner answers, preserve the approval reference beside the rate instead of relying on a message that will be hard to find during close or audit review.'
          ]
        },
        {
          title: 'Reproduce the conversion without hiding rounding',
          paragraphs: [
            'Lay out the arithmetic so another reviewer can repeat it. State whether the quoted rate is foreign units per ledger unit or ledger units per foreign unit. Then show the operation, unrounded result, rounding rule supplied by the system or finance policy, and posted result. Keep line, tax, freight, withholding, and total conversions separate when the source system treats them separately. A one-cent difference may be ordinary rounding, but it still needs an explanation. A larger difference may come from a reversed rate, a different effective date, or a manual override.',
            'Consider an invoice for 18,400 units of the supplier currency. The AP specialist should not write only the converted total. The packet needs the 18,400 source amount, the approved rate, whether the calculation multiplies or divides, the precision used, and the resulting ledger amount. If the purchase order has its own currency, add a separate comparison rather than overwriting either figure. This gives the reviewer a clean bridge between commercial commitment, supplier demand, and proposed accounting entry.'
          ]
        },
        {
          title: 'Investigate mismatches before calling them errors',
          paragraphs: [
            'A difference can come from timing, configuration, or the underlying transaction. Compare the invoice date, goods-receipt date, service period, system receipt timestamp, posting date, and proposed payment date. Check whether the purchase order was amended, whether the supplier rebilled in another currency, and whether tax or freight uses a different basis. Also inspect earlier invoices from the same agreement, but treat them as history rather than authority. A prior posting can reveal a pattern while still being wrong for the current invoice.',
            'Route each unresolved point as one answerable question. Ask finance which date and rate type apply. Ask purchasing whether the order currency changed. Ask the business owner whether the service period is correct. Ask the supplier for a corrected invoice if the currency conflicts with the agreement. Avoid a vague status such as "FX issue." A useful queue entry names the conflicting fields, affected amount, evidence already checked, decision owner, and next review date. The packet then supports progress instead of becoming another attachment nobody can interpret.'
          ]
        },
        {
          title: 'Keep corrections and settlement evidence connected',
          paragraphs: [
            'Do not erase the first calculation when finance changes the selected basis. Retain the original result, revised result, reason, approver, and timestamp. Link a corrected invoice or credit memo to the same case and show which amount it replaces. When the invoice later enters a payment proposal, compare the approved invoice currency and payment currency with the proposal. Treasury still owns settlement and payment release. The AP packet helps treasury spot an unexpected conversion or currency change before funds move.',
            'Close the case only when the final posting, approval, and subsequent payment or credit treatment can be traced. Record the selected rate source and date, final arithmetic, system document number, residual variance, and owner of any remaining item. Reconcile the posted amount back to the approved packet rather than assuming that successful posting proves the chosen inputs were used. If a later revaluation or settlement entry changes the ledger amount, link that event without rewriting the invoice review. For an outsourced AP role, test the process on a normal invoice, a reversed quote, a missing policy date, and a supplier correction. If a backup reviewer can reproduce each outcome without private chat history, the handoff is ready for routine use.'
          ]
        }
      ],
      checklistTitle: 'Check the packet before finance review',
      checklist: ['Original invoice and related order remain unchanged', 'Every currency uses an explicit code', 'Rate value, type, source, date, and retrieval time are recorded', 'Conversion direction and rounding can be reproduced', 'Policy choices and posting approval remain with finance', 'Corrections retain the earlier calculation and reason'],
      bodyLinks: [{href:'/services/invoice-data-capture',label:'invoice data capture'}, {href:'/contact-us',label:'scope an AP support handoff'}],
      faqs: [
        {question:'Can outsourced AP support choose the exchange rate?',answer:'The support role can retrieve an approved rate, reproduce arithmetic, and flag differences. Finance should define the rate source, rate type, policy date, rounding, and accounting treatment.'},
        {question:'Which dates belong in the packet?',answer:'Keep the invoice date, receipt timestamp, goods or service date, posting date, due date, proposed payment date, and the effective date of the rate. Finance decides which date controls the booking.'},
        {question:'How should a corrected conversion be documented?',answer:'Retain the first calculation, the revised calculation, the reason for the change, the approving owner, and the system record that reflects the final decision.'}
      ],
      sources: [
        {name:'ISO 4217 currency codes',url:'https://www.iso.org/iso-4217-currency-codes.html',note:'Primary standard reference for identifying currencies without relying on ambiguous symbols.'},
        {name:'IRS foreign currency and currency exchange rates',url:'https://www.irs.gov/individuals/international-taxpayers/foreign-currency-and-currency-exchange-rates',note:'Government example of documenting currency conversion and rate sources; company accounting policy remains with finance.'},
        {name:'NIST least privilege glossary',url:'https://csrc.nist.gov/glossary/term/least_privilege',note:'Supports limiting preparation access and retaining approval authority with the designated owner.'}
      ]
    }
  },
  {
    slug: 'supplier-invoice-contact-change-review',
    title: 'Review a supplier invoice contact change without weakening payment controls',
    excerpt: 'Authenticate a changed billing contact, preserve the old contact history, and keep correspondence maintenance separate from bank-detail authority.',
    minutes: 10,
    detail: {
      thumbnail: '/blog-thumbnails/ap-vendor-change-request-workflow.svg',
      shortAnswer: 'Treat a new invoice contact as a controlled supplier-record change. Verify the request through an established channel, record its scope and effective date, preserve the previous contact, and route bank, tax, contract, and payment changes through their separate approval paths.',
      published: null,
      modified: null,
      mainKeyword: 'supplier invoice contact change review',
      sections: [
        {
          title: 'Define what the contact is allowed to change',
          paragraphs: [
            'A supplier may ask AP to replace the person who receives remittance notices, answers invoice questions, or sends monthly statements. That sounds administrative, but the request can affect what the team trusts later. Start by naming the exact role being changed. A billing contact does not automatically have authority to amend a contract, redirect payment, change a tax record, approve a credit, or provide new bank instructions. Put those boundaries in the case before updating an address book or supplier profile.',
            'Record the supplier legal name, internal vendor ID, affected company entity, current contact, proposed contact, email domain, phone number, stated reason, request date, requested effective date, and systems where the contact appears. Attach the original request without editing it. If the message also asks for a remit-to or bank change, split that work into the company\'s approved verification process. Keeping the requests separate makes it harder for a harmless contact update to become implied approval for a payment change.'
          ]
        },
        {
          title: 'Verify through a channel that existed before the request',
          paragraphs: [
            'Do not verify a new email address by replying to that address and asking whether it is genuine. Use a supplier portal, contract record, previously verified phone number, established account manager, or another channel approved by the company. The person completing the verification should record the channel, time, contact reached, question asked, and result. If the old contact has left, the case should show how the replacement was confirmed without depending on the new contact alone.',
            'Domain similarities deserve a careful look. A changed address may use a subsidiary domain after a merger, a regional domain for another supplier entity, or a misspelled lookalike. AP support should document what it observes and route uncertainty to the vendor-master or security owner. It should not declare a message fraudulent based only on appearance. Likewise, a familiar display name is not proof of identity. Keep the full sender address and relevant message headers in the approved evidence location.'
          ]
        },
        {
          title: 'Check account and entity ownership',
          paragraphs: [
            'One supplier group can have several accounts, legal entities, currencies, and purchasing relationships. Confirm which account the new contact represents and whether the person should see information for all company entities or only one. A regional billing contact may need invoice-status responses for a single account, while a global contact may be authorized for consolidated statements. Do not broaden access because the supplier names look similar. The request and verification should support the exact scope entered in the system.',
            'Review open disputes, credits, duplicate cases, and recent payment inquiries before the change takes effect. A contact update during a dispute may be legitimate, yet it can also break the history if old messages and commitments disappear. Link the new contact to the open cases and tell the assigned owner what changed. Preserve the former contact with an inactive date and reason instead of deleting the record. That history helps a reviewer understand why correspondence moved and which promises came from whom.'
          ]
        },
        {
          title: 'Update each system with an audit trail',
          paragraphs: [
            'List every place where the contact is stored: vendor master, AP mailbox rules, statement request list, supplier portal, purchasing system, ticket queue, and remittance distribution list. Not every system needs the same fields or the same access. Assign an owner for each update, record completion evidence, and note systems that intentionally remain unchanged. This prevents a partial update in which invoices go to one address while statement requests and remittance messages continue to another.',
            'Use a second review when the company policy requires it, especially if the new contact will receive financial details. Limit the profile to the permissions needed for the stated role. A person who answers invoice questions may not need bank status, employee expense data, or documents belonging to another supplier account. If the system cannot express that limit, record the constraint and send it to the access owner. Do not solve a system limitation by quietly granting a broader role.'
          ]
        },
        {
          title: 'Test the handoff without exposing sensitive data',
          paragraphs: [
            'A short confirmation can verify that the new channel works, but the test should not include protected bank, tax, employee, or identity data. Ask the supplier to acknowledge the contact role and account scope. Then monitor the next ordinary invoice or statement exchange. Check that automated mailbox rules place the reply in the right queue and that the case still shows the supplier account and company entity. Keep the test result with the original request so a later reviewer can see the whole sequence. If messages bounce, route to an unexpected domain, or produce conflicting replies, reopen the case rather than creating another unlinked contact record. Record the failed delivery and the safe channel used for follow-up. The first successful email alone does not prove every downstream system is correct, and a delivery receipt does not prove that the intended person reviewed the message.',
            'Close the review with the verified scope, effective date, systems changed, reviewers, confirmation result, and remaining exceptions. Notify the internal owners who rely on the contact, including purchasing or treasury only when their workflow is affected. Set a review date when the change is temporary, such as maternity cover or a short supplier transition. When the first statement or invoice arrives through the new contact, compare its account and remit information with the verified supplier record. A mismatch should reopen the case; it should not be accepted merely because the sender now appears on the contact list. For an outsourced AP handoff, keep the role narrow: the specialist gathers the request, completes approved verification steps, updates permitted fields, and routes exceptions. The company retains authority over vendor master approval, contractual changes, tax decisions, bank data, and payment release.'
          ]
        }
      ],
      checklistTitle: 'Review the contact change record',
      checklist: ['Contact role and account scope are explicit', 'Verification used a previously established channel', 'Bank, tax, and contract changes follow separate controls', 'Former contact and effective dates remain in history', 'Every affected system has an owner and completion record', 'The new channel was tested without sensitive data'],
      bodyLinks: [{href:'/services/vendor-onboarding-administration',label:'vendor onboarding administration'}, {href:'/contact-us',label:'define the supplier-maintenance scope'}],
      faqs: [
        {question:'Is replying to the new address enough verification?',answer:'No. Verify the change through a channel that existed before the request, such as an approved portal, known phone number, established account manager, or other company-approved source.'},
        {question:'Should the old supplier contact be deleted?',answer:'Keep the former contact, inactive date, and reason when the system permits it. The history helps explain earlier correspondence, disputes, and commitments.'},
        {question:'Can the same request change bank information?',answer:'A contact-change request should not authorize bank changes. Route bank details through the company\'s separate verification and approval process.'}
      ],
      sources: [
        {name:'CISA guidance on phishing',url:'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',note:'Government guidance supporting independent checks of suspicious or changed communication channels.'},
        {name:'NIST least privilege glossary',url:'https://csrc.nist.gov/glossary/term/least_privilege',note:'Supports limiting supplier-contact access and AP preparation permissions to the assigned task.'},
        {name:'FBI business email compromise guidance',url:'https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/business-email-compromise',note:'Government guidance supporting out-of-band verification when business correspondence changes.'}
      ]
    }
  }
];
