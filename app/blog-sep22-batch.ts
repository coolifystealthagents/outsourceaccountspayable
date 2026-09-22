type Topic = {
  slug: string;
  title: string;
  excerpt: string;
  keyword: string;
  service: string;
  serviceLabel: string;
  scenario: string;
  example: string;
  records: string;
  owner: string;
  stages: [string, string][];
};

const topics: Topic[] = [
  {
    slug: 'invoice-currency-mismatch-review',
    title: 'How to review an invoice currency mismatch before approval',
    excerpt: 'Compare the invoice, purchase record, supplier terms, and proposed posting when currency codes or symbols disagree, without letting AP guess which amount is payable.',
    keyword: 'invoice currency mismatch review', service: 'three-way-match-support', serviceLabel: 'three-way match support',
    scenario: 'an invoice whose currency conflicts with the purchase order, contract, receipt, or supplier history', owner: 'purchasing or finance owner',
    records: 'original invoice, purchase order, contract, receipt, vendor record, exchange-rate source, and approval history',
    example: 'A Canadian supplier sends an invoice showing “$18,400” while the purchase order says USD and the contract says CAD. The processor records every labeled value and pauses the match; the symbol alone cannot settle which currency governs.',
    stages: [
      ['Capture what each source actually says','Record the currency code, symbol, amount, legal entity, document number, and source location. Preserve a blank or ambiguous field as an exception rather than completing it from memory.'],
      ['Separate document currency from ledger currency','Show the invoice currency, transaction currency, functional currency, and any proposed conversion in separate fields. A converted reporting amount must not replace the supplier request.'],
      ['Check the commercial record','Compare the current purchase order and contract version, including amendments and effective dates. Highlight the conflict and route contract interpretation to the named owner.'],
      ['Control exchange-rate evidence','If policy calls for conversion, link the approved rate source, rate date, calculation, and rounding rule. The support role prepares the math but does not select an undocumented rate.'],
      ['Ask one answerable question','Send the owner the conflicting fields, affected amount, deadline, and source links. Avoid a broad message that asks only whether the invoice is “okay to pay.”'],
      ['Close with a traceable correction','Retain the original invoice and values, then link the approved correction, supplier credit, replacement document, or owner decision. Re-run duplicate and match checks after any change.'],
    ],
  },
  {
    slug: 'vendor-statement-cutoff-reconciliation',
    title: 'Reconcile a vendor statement at month-end cutoff',
    excerpt: 'Build a cutoff-aware vendor statement reconciliation that distinguishes open invoices, timing differences, credits, payments in transit, and items that need an owner.',
    keyword: 'vendor statement cutoff reconciliation', service: 'vendor-statement-reconciliation', serviceLabel: 'vendor statement reconciliation',
    scenario: 'a supplier statement whose date overlaps the company close and payment cycle', owner: 'AP close or finance owner',
    records: 'dated supplier statement, AP ledger extract, payment results, invoice images, credit notes, receipt evidence, and prior reconciliation',
    example: 'A statement dated September 20 includes an invoice received after the company’s September 18 close extract and omits a payment released on September 19. Both may be timing items, but each needs a dated source and a next action.',
    stages: [
      ['Freeze the comparison window','Record the statement date and time, ledger extract time, legal entity, supplier account, currency, and timezone. Do not compare moving reports and call the difference reconciled.'],
      ['Match stable identifiers first','Compare invoice numbers, credit references, dates, currencies, gross amounts, and payment references. Keep normalization rules visible when punctuation or leading zeros differ.'],
      ['Classify rather than erase differences','Use distinct statuses for missing invoice, missing credit, payment in transit, unapplied cash, disputed item, and timing difference. A label should point to evidence, not replace it.'],
      ['Protect the cutoff decision','Show when the document was received, when goods or services were evidenced, and when it entered the ledger. Finance retains accrual and accounting-period judgments.'],
      ['Send focused supplier requests','Ask for a named invoice, credit, or application detail and include the supplier account reference. Do not send internal ledger exports or unrelated company data.'],
      ['Roll unresolved items forward','Carry the source, amount, age, owner, last action, and next review date into the next reconciliation. Close only when ledger and supplier evidence explain the disposition.'],
    ],
  },
  {
    slug: 'intercompany-invoice-routing',
    title: 'Route intercompany invoices without treating them like vendor bills',
    excerpt: 'Identify both legal entities, agreement, service period, coding owner, and settlement path before an intercompany charge enters the ordinary AP queue.',
    keyword: 'intercompany invoice routing', service: 'invoice-data-capture', serviceLabel: 'invoice data capture',
    scenario: 'a charge sent by one group company to another company entity', owner: 'intercompany accounting or finance owner',
    records: 'invoice, entity directory, intercompany agreement, allocation support, service-period evidence, coding instruction, and settlement record',
    example: 'A parent company bills shared software costs to three subsidiaries. The invoice names the group brand but not the receiving legal entity, so AP should not choose one from the email recipient list.',
    stages: [
      ['Confirm both sides of the transaction','Capture the issuing and receiving legal names, entity codes, addresses, tax identifiers when applicable, currency, and document reference. A shared brand is not an entity decision.'],
      ['Link the charge to its governing record','Attach the current agreement or approved allocation instruction and its effective period. Flag a missing schedule instead of repeating last month’s percentage.'],
      ['Separate allocation from arithmetic','Recalculate the stated allocation and total while preserving the source basis. Finance decides whether the basis and accounting treatment are appropriate.'],
      ['Keep service period visible','Record the stated service dates, invoice date, receipt date, and proposed posting period separately. Do not turn invoice timing into a close conclusion.'],
      ['Use the designated workflow','Route the packet through the intercompany owner and system path rather than a vendor-master shortcut. Keep settlement approval and journal authority with employees.'],
      ['Reconcile both entity records','Link the receiving entry, issuing entry, dispute, credit, and settlement identifiers where access permits. Escalate unmatched values without editing the other entity’s record.'],
    ],
  },
  {
    slug: 'purchase-order-closed-status-review',
    title: 'Review an invoice against a closed purchase order',
    excerpt: 'Determine why a purchase order is closed, assemble receipt and amendment evidence, and route the invoice without reopening or bypassing the order on assumption.',
    keyword: 'invoice closed purchase order review', service: 'purchase-order-reconciliation', serviceLabel: 'purchase order reconciliation',
    scenario: 'an invoice referencing a purchase order that the purchasing system shows as closed', owner: 'purchasing or budget owner',
    records: 'invoice, purchase order versions, status history, receipts, prior invoices, close reason, amendments, and owner response',
    example: 'A supplier submits a final $2,700 invoice against an order closed after the recorded quantity was fully billed. A late freight charge may be valid, duplicated, or outside the order; AP should show the history rather than reopen it.',
    stages: [
      ['Capture the closure state','Record the order, line, entity, supplier, status, close reason, actor, and timestamp. Distinguish system auto-close from an employee’s explicit close action.'],
      ['Rebuild line consumption','Compare ordered, received, invoiced, canceled, and remaining quantities and values by line. Do not rely on a header balance when only one line is affected.'],
      ['Inspect the new charge','Identify whether the invoice requests goods, services, freight, tax, price variance, or another component. Tie it to delivery and commercial evidence where available.'],
      ['Preserve prior postings','Link earlier invoices, credits, reversals, and payments. A closed order can still have a duplicate risk, and a new invoice number does not eliminate that check.'],
      ['Route reopening authority','Present the exact line, difference, supporting source, and requested action to the purchasing owner. The AP support role should not reopen or extend an order.'],
      ['Document the final path','Retain the owner decision and any controlled order amendment, non-PO exception, rejection, or supplier correction. Repeat the match against the final approved record.'],
    ],
  },
  {
    slug: 'invoice-tax-total-mismatch',
    title: 'Handle an invoice tax total mismatch without inventing the answer',
    excerpt: 'Recalculate the visible invoice arithmetic, isolate rounding or tax-line differences, and give the tax or finance owner a reviewable exception packet.',
    keyword: 'invoice tax total mismatch', service: 'invoice-data-capture', serviceLabel: 'invoice data capture',
    scenario: 'an invoice whose subtotal, tax lines, credits, and total do not add up as displayed', owner: 'tax or finance owner',
    records: 'original invoice, line detail, purchase record, tax fields, supplier correction, system calculation, and approval history',
    example: 'An invoice lists a $9,950 subtotal and $796 tax but shows a $10,745 total, leaving a one-dollar difference. AP records the discrepancy and source fields; it does not change tax or total to force a match.',
    stages: [
      ['Recalculate the visible arithmetic','Add line extensions, discounts, freight, tax, credits, and total exactly as printed. Record the difference and retain the invoice image location for each figure.'],
      ['Keep capture and proposal separate','Store the supplier-stated values apart from the system-calculated or proposed posting values. This lets the owner see whether the conflict comes from source or setup.'],
      ['Check units and rounding','Review decimal precision, quantity times rate, line-level versus document-level rounding, and currency minor units. Describe the pattern without declaring the correct tax treatment.'],
      ['Identify missing context','Look for multiple tax jurisdictions, exemptions, reverse-charge language, deposits, credits, and inclusive pricing. Route interpretation to the authorized tax or finance owner.'],
      ['Request correction safely','If directed, ask the supplier for a corrected document that references the original. Do not edit the supplier PDF or create a replacement on the supplier’s behalf.'],
      ['Close all linked versions','Preserve the original, replacement, credit, owner decision, and posting reference. Re-run amount, duplicate, and approval checks using the final document.'],
    ],
  },
  {
    slug: 'supplier-refund-tracking',
    title: 'Track a supplier refund from request to bank confirmation',
    excerpt: 'Connect the credit balance, authorized refund request, supplier response, bank result, and ledger application without exposing payment credentials or assuming cash arrived.',
    keyword: 'supplier refund tracking', service: 'vendor-statement-reconciliation', serviceLabel: 'vendor statement reconciliation',
    scenario: 'a supplier credit balance expected to be returned rather than applied to a future invoice', owner: 'treasury or finance owner',
    records: 'supplier statement, credit memo, payment history, refund authorization, correspondence, bank result, and ledger entry',
    example: 'A duplicate payment creates a $6,200 supplier credit. The supplier says a refund was issued, but AP keeps the item open until an authorized owner links the bank receipt and ledger disposition.',
    stages: [
      ['Prove the credit balance','Reconcile the credit memo, duplicate or overpayment, applications, open invoices, and supplier statement. Record currency and entity so one account is not netted against another.'],
      ['Confirm the authorized remedy','Link the employee decision to request cash, apply the credit, or use another documented path. A supplier suggestion does not authorize the company’s accounting choice.'],
      ['Use controlled contact details','Send the request through the approved supplier channel and retain the case or message reference. Do not exchange bank credentials in an unapproved thread.'],
      ['Track claims without closing early','Record promised amount, method, reference, and expected date, but label them supplier-reported until independent bank evidence is available.'],
      ['Match the bank result','Treasury or another authorized employee confirms the received amount, value date, currency, and reference. AP can prepare the match without accessing or changing banking controls.'],
      ['Finish the ledger trail','Link the cash result, credit clearing, remaining balance, statement outcome, and approval. Keep partial refunds open with the exact residual amount and owner.'],
    ],
  },
  {
    slug: 'recurring-invoice-price-change-review',
    title: 'Review a recurring invoice price change before it becomes routine',
    excerpt: 'Compare recurring charges with the current agreement, usage, notice, and prior invoice so an unexplained increase does not pass merely because the supplier is familiar.',
    keyword: 'recurring invoice price change review', service: 'three-way-match-support', serviceLabel: 'three-way match support',
    scenario: 'a subscription or recurring service invoice whose price, quantity, or fee structure changed', owner: 'contract, budget, or finance owner',
    records: 'current and prior invoices, contract, renewal notice, usage or seat report, purchase record, approval, and supplier correspondence',
    example: 'A monthly software bill rises from $1,500 to $1,875 and adds five seats. AP records the price and quantity changes separately and asks the software owner to validate the renewal and users.',
    stages: [
      ['Define the comparison basis','Use the same supplier, account, entity, service, billing interval, and currency. Note partial periods or one-time charges that make a headline percentage misleading.'],
      ['Break the change into components','Compare unit price, quantity, tier, discount, tax, fees, credits, and total. Show each driver instead of reporting only that the invoice increased.'],
      ['Find the effective authority','Link the current contract, renewal, purchase order, notice, or approved change and its effective date. Prior payment history is not approval for a new price.'],
      ['Validate variable inputs','Tie seats, usage, locations, or transactions to the designated operational source. Preserve conflicts and ask the owner responsible for that measure.'],
      ['Route the commercial decision','Send a compact comparison with the affected amount and missing evidence to the contract or budget owner. AP should not accept terms or negotiate a renewal.'],
      ['Set the next invoice baseline','After approval or correction, record the governed price, quantity rule, effective period, and source. Do not silently overwrite the earlier baseline.'],
    ],
  },
  {
    slug: 'partial-payment-allocation-tracking',
    title: 'Track a partial supplier payment without hiding the remaining balance',
    excerpt: 'Record the approved payment portion, exclusions, remittance, supplier application, and residual invoice balance as separate, reviewable events.',
    keyword: 'partial supplier payment allocation', service: 'payment-run-preparation', serviceLabel: 'payment run preparation',
    scenario: 'an invoice or statement balance approved for less than the full amount', owner: 'finance or treasury owner',
    records: 'invoice, approval, exclusion reason, payment proposal, bank result, remittance, supplier application, and open-item ledger',
    example: 'A $24,000 invoice includes a disputed $4,000 service line. Finance approves $20,000. The payment packet should preserve the excluded line and leave a visible $4,000 item rather than marking the invoice paid.',
    stages: [
      ['Define the approved portion','Record gross invoice, approved amount, excluded amount, currency, reason, and owner decision. Confirm that the components reconcile before payment preparation.'],
      ['Protect the disputed balance','Keep the residual linked to its invoice, line, dispute, owner, and review date. Do not create an unexplained write-off or discount to make the invoice close.'],
      ['Prepare an unambiguous payment','Use the approved amount and controlled destination already verified under company procedure. Payment release remains with authorized employees.'],
      ['Send precise remittance','Identify the invoice and amount applied, and state any excluded amount only as authorized. Avoid exposing unrelated invoices or internal comments to the supplier.'],
      ['Compare supplier application','Use the next statement or portal record to see how the supplier applied the cash. Flag deductions, oldest-item application, or account mismatch rather than forcing agreement.'],
      ['Reconcile the remainder','Link credits, settlements, corrections, later payments, and final disposition. Keep the residual on the exception queue until evidence supports closure.'],
    ],
  },
  {
    slug: 'invoice-legal-entity-mismatch',
    title: 'Resolve an invoice legal entity mismatch before posting',
    excerpt: 'Compare the billed name and address with the purchase, receipt, contract, and entity directory, then route correction or approval to the proper owner.',
    keyword: 'invoice legal entity mismatch', service: 'invoice-data-capture', serviceLabel: 'invoice data capture',
    scenario: 'an invoice billed to a different company entity from the purchasing or receiving record', owner: 'entity accounting, purchasing, or tax owner',
    records: 'invoice, entity directory, contract, purchase order, receipt, vendor account, tax fields, and owner response',
    example: 'A supplier bills the U.S. parent while the purchase order and delivery belong to a U.K. subsidiary. The shared brand and common email domain do not authorize AP to change the billed entity.',
    stages: [
      ['Capture every entity signal','Record the billed legal name, address, tax ID, purchase entity, ship-to, contracting party, and supplier account. Keep similar brand names distinct.'],
      ['Use the controlled directory','Compare the invoice with the current entity list and effective dates. Do not infer entity ownership from an employee’s location or mailbox.'],
      ['Trace the commercial chain','Link contract, purchase order, receipt, and requestor evidence. State which records agree and which conflict without rewriting their labels.'],
      ['Separate correction from coding','A coding change cannot necessarily cure an incorrectly addressed invoice. Route legal, tax, and documentation requirements to their named owners.'],
      ['Request a supplier document when directed','Reference the original invoice and specify the entity detail the owner approved for correction. Preserve the original and avoid editing it internally.'],
      ['Repeat downstream checks','Validate the corrected entity, supplier account, tax fields, purchase match, duplicate status, and approval before the item returns to posting.'],
    ],
  },
  {
    slug: 'goods-receipt-reversal-review',
    title: 'Review a goods receipt reversal before matching the invoice',
    excerpt: 'Trace original and reversed receipts, returns, quantities, dates, and owner evidence so AP does not match an invoice to inventory movement that no longer stands.',
    keyword: 'goods receipt reversal invoice review', service: 'three-way-match-support', serviceLabel: 'three-way match support',
    scenario: 'an invoice tied to a purchase order whose goods receipt was later reversed or corrected', owner: 'receiving, purchasing, or inventory owner',
    records: 'invoice, purchase order, original receipt, reversal, return record, inventory movement, delivery evidence, and owner response',
    example: 'A warehouse records 100 units, reverses them the next day, then records 96 units after finding damage. AP should match the invoice against the final supported movement and keep all three events visible.',
    stages: [
      ['Build the receipt timeline','List each receipt, reversal, correction, return, user, date, quantity, unit, location, and system reference. Do not net events before the reviewer sees them.'],
      ['Confirm identifier continuity','Connect purchase order lines, delivery numbers, item codes, lots when relevant, and invoice lines. Flag reused or missing references.'],
      ['Compare physical and system evidence','Link delivery and warehouse records to the system movement while keeping discrepancies visible. AP does not certify physical receipt.'],
      ['Recalculate the match','Compare final supported quantities, prices, tolerances, prior invoices, and credits. Apply only the approved company rule and show any exception.'],
      ['Route ownership questions','Ask the receiving or purchasing owner about the exact movement and affected quantity. Avoid asking AP staff to infer whether goods were accepted.'],
      ['Close without deleting history','Link the approved correction, supplier credit, replacement invoice, or final match. Retain reversed records for audit and duplicate review.'],
    ],
  },
  {
    slug: 'payment-return-remediation',
    title: 'Handle a returned supplier payment without creating a second error',
    excerpt: 'Separate the bank return, invoice status, supplier communication, payment-data verification, and authorized reissue before another payment is prepared.',
    keyword: 'returned supplier payment process', service: 'payment-run-preparation', serviceLabel: 'payment run preparation',
    scenario: 'a supplier payment returned, rejected, or failed after release', owner: 'treasury or finance owner',
    records: 'payment proposal, approval, bank result, return code, invoice, vendor record, verification evidence, reissue decision, and ledger history',
    example: 'A payment returns with an invalid-account code just after the supplier emails new bank details. AP links both events and pauses; the return does not independently authenticate the emailed account.',
    stages: [
      ['Record the bank event','Capture the original payment ID, amount, currency, value date, return date, code, fees, and bank evidence. Keep submitted, settled, and returned states distinct.'],
      ['Restore invoice visibility carefully','Show the affected invoices and ledger state without erasing the first payment. Finance decides the reversal and accounting treatment.'],
      ['Treat changed details as a new risk','Move any new bank instruction through the company’s independent verification route. Do not use contact details supplied in the change request itself.'],
      ['Keep supplier communication narrow','State that the payment did not complete and route the case through an approved contact. Do not disclose bank security data or promise a reissue date.'],
      ['Require a fresh release decision','Prepare a new payment packet with the return, verification, invoice status, and approved destination. The prior approval should not be assumed to cover changed details.'],
      ['Reconcile both attempts','Link the failed and successful outcomes, charges, remittance, invoice application, and ledger entries. Close only when the authorized records agree.'],
    ],
  },
  {
    slug: 'ap-mailbox-auto-forwarding-controls',
    title: 'Set controls for automatic forwarding from an AP mailbox',
    excerpt: 'Document which messages may leave the AP inbox, where they go, how attachments and sensitive data are handled, and who reviews forwarding failures or rule changes.',
    keyword: 'AP mailbox auto forwarding controls', service: 'ap-inbox-management', serviceLabel: 'AP inbox management',
    scenario: 'an AP mailbox rule that forwards invoices or supplier messages to another system, queue, or support team', owner: 'finance process, messaging, or security owner',
    records: 'mailbox inventory, approved rule, destination, message samples, access list, failure log, change history, and periodic review',
    example: 'A rule forwards messages with “invoice” in the subject to an intake tool, but it also catches employee expense files and misses portal notices. The team needs explicit scope and exception handling, not a broader keyword.',
    stages: [
      ['Define the approved flow','Record the source mailbox, destination, permitted message types, attachment handling, owner, purpose, and effective date. Identify data that must not be forwarded.'],
      ['Test representative messages','Use approved samples for invoices, credits, statements, bank-change requests, expense files, encrypted attachments, large files, and unrelated mail. Record pass and fail outcomes.'],
      ['Preserve source identity','Keep the original sender, recipients, received time, subject, attachment identity, and message reference available to reviewers. A forwarded timestamp is not the receipt timestamp.'],
      ['Handle failures visibly','Send failures, blocked files, duplicates, and uncertain classifications to a named queue with an alert and review deadline. Do not silently discard a message.'],
      ['Control access and rule changes','Use least-privilege access and approved change records. AP processors should not create private forwarding rules that bypass the shared workflow.'],
      ['Review the route periodically','Sample successful and failed messages, confirm destination ownership, remove stale access, and document approved adjustments. Security incidents follow the company response path.'],
    ],
  },
];

const sources = [
  {name:'NIST glossary: least privilege',url:'https://csrc.nist.gov/glossary/term/least_privilege',note:'Definition supporting limited access for AP systems and mailboxes.'},
  {name:'CISA: Recognize and Report Phishing',url:'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',note:'Current government guidance supporting independent handling of suspicious payment and message requests.'},
  {name:'IRS: About Form W-9',url:'https://www.irs.gov/forms-pubs/about-form-w-9',note:'First-party description of a common U.S. supplier tax document; tax judgments remain with the company.'},
];

const context = (topic: Topic, text: string, index: number) => {
  const lead = [
    `For ${topic.scenario}, begin with a record that a second reviewer can reproduce. Keep the ${topic.records} linked by stable identifiers rather than relying on an email subject or a familiar supplier name.`,
    `The outsourced specialist prepares and compares evidence; the ${topic.owner} makes the decision that changes money, accounting, access, tax treatment, or supplier data. Write that boundary into the queue and the procedure.`,
    `Dates need labels and timezones. Record when the source was issued, received, reviewed, approved, and changed so a later reviewer can distinguish sequence from assumption.`,
    `State the exception in plain language: what one source says, what another source says, the amount or record affected, and the specific owner response needed.`,
    `Use least-privilege access for this task. A support role should see and change only the fields required to prepare the packet, while approval and release remain with authorized employees.`,
    `If a message introduces a new link, contact, bank detail, or urgent instruction, stop and use the company security route. Details from the same message are not independent verification.`,
  ][index % 6];
  const close = [
    `Keep the original value after any correction and link the person, time, reason, and controlled source for the new value. That history supports duplicate review and later reconciliation.`,
    `The queue entry should end with a current status, named next owner, due or review date, and source link. “Handled” is not a useful close state without evidence.`,
    `Quality review should sample one ordinary record and one exception. A reviewer should be able to repeat the comparison without asking the processor to reconstruct it from memory.`,
    `Do not borrow a value from a prior transaction merely because the source is incomplete. Flag the gap and preserve the supplier’s actual document.`,
  ][index % 4];
  return `${lead} ${text} ${close}`;
};

const stageNotes = [
  'Write down the source reference and what the processor observed. If the records conflict, the item stays in the exception queue with the owner who can resolve it.',
  'Keep the proposed next action beside the evidence. Missing access or a missing document is a work status, not a reason to push the item into the next step.',
  'A short note should let the owner see the affected record and answer the question without reopening the whole history. Link the source rather than copying an unlabeled value.',
  'Record who may authorize the next move. Until that response arrives, keep the item visible and preserve the last confirmed state.',
  'Use the queue status that describes the actual stop. The processor should not mark the record complete simply because the preparation work is finished.',
  'Before handoff, check the identifier, amount or quantity at issue, source date, and owner. Those details prevent a general reply from being mistaken for a decision.',
];

export const sep22BlogPosts = topics.map(topic => ({slug:topic.slug,title:topic.title,excerpt:topic.excerpt,minutes:12}));

export const sep22BlogDetails = Object.fromEntries(topics.map(topic => [topic.slug, {
  thumbnail: `/blog-thumbnails/sep22-2026/${topic.slug}.svg`,
  shortAnswer: topic.excerpt,
  published: '2026-09-22',
  modified: '2026-09-22',
  mainKeyword: topic.keyword,
  sections: [
    {title:'A practical AP example',paragraphs:[context(topic,topic.example,0),context(topic,`Before the first item enters the queue, agree on the authoritative sources, required fields, stop conditions, permitted system actions, and employee owners. Use examples from the real company workflow and keep the approved procedure beside the work record.`,1)]},
    ...topic.stages.map(([title, guidance], index) => ({title,paragraphs:[context(topic,guidance,index+2),context(topic,stageNotes[index],index+3)]})),
    {title:'Start the routine with a controlled sample',paragraphs:[context(topic,`Choose a small set that includes ordinary records and at least two realistic exceptions. Review every packet with the ${topic.owner}, correct unclear fields and escalation wording, and confirm that each status has a defined meaning before volume increases.`,9),context(topic,`Track completion from the underlying record, not the number of emails sent or fields touched. Useful measures include aged unresolved items, packets returned for missing evidence, confirmed duplicate paths, and owner response time, provided the company defines each measure and its source.`,10)]},
    {title:'Turn the control into a scoped handoff',paragraphs:[context(topic,`Document intake channels, expected volume, busy periods, system access, review cadence, retention rules, and coverage when an owner is away. The ${topic.serviceLabel} service page can help frame the work lane without transferring company decisions to the support role.`,11),context(topic,`Use the contact and scoping page when the lane is stable enough to describe with real inputs and outputs. A narrow, reviewable handoff is safer to train and improve than a promise to “handle AP” without sources, owners, or stop conditions.`,12)]},
  ],
  checklistTitle:'Review the packet before handoff',
  checklist:['Original source and stable identifiers retained','Conflict or missing evidence stated plainly','Authorized employee owner named','Status, next action, and review date recorded','Approval, master-data authorization, and payment release kept with the company'],
  bodyLinks:[{href:`/services/${topic.service}`,label:topic.serviceLabel},{href:'/contact-us',label:'contact and scoping page'}],
  faqs:[
    {question:'What can an outsourced AP specialist prepare?',answer:`The specialist can collect and compare the ${topic.records}, document the exception, maintain the queue, and send a focused question to the ${topic.owner}.`},
    {question:'Which decisions stay with the company?',answer:'Company employees retain invoice approval, accounting and tax judgments, vendor-master authorization, bank-detail verification, access ownership, and payment release.'},
    {question:'How should the team begin?',answer:'Start with a small controlled sample, review routine and exception cases, and expand only after the sources, statuses, owners, and escalation path are clear.'},
  ],
  sources,
}]));
