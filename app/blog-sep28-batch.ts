type Section = {title:string; focus:string; example:string};
type Topic = {
  slug:string; title:string; excerpt:string; keyword:string; service:string; serviceLabel:string;
  image:string; question:string; boundary:string; records:string; owner:string; sections:Section[];
};

const topics:Topic[] = [
  {
    slug:'early-payment-discount-decision-packet', title:'Review an early-payment discount before scheduling an invoice',
    excerpt:'Reproduce the discount terms, eligible amount, timing window, and approval state before finance decides whether an invoice should enter an accelerated payment run.',
    keyword:'early payment discount review', service:'payment-run-preparation', serviceLabel:'payment run preparation', image:'payment-proposal-removal-log.svg',
    question:'Does the source agreement support the discount, and can the company still satisfy every condition without bypassing its controls?',
    boundary:'AP support can calculate and document a candidate discount; treasury or finance decides whether taking it is economical, authorized, and compatible with cash priorities.',
    records:'the invoice, purchase order, contract or supplier terms, receipt and approval timestamps, dispute status, payment calendar, and prior discount history', owner:'treasury or finance owner',
    sections:[
      {title:'Read the actual discount clause',focus:'Capture the percentage, base amount, start event, deadline, excluded charges, and payment method from the controlled source. Do not infer terms from a note on an invoice when the agreement says something different.',example:'An invoice says “2/10, net 30,” while the purchase order says discounts begin after acceptance. The receipt date and acceptance date therefore belong in separate fields.'},
      {title:'Build the eligible amount',focus:'Separate merchandise or service value from freight, tax, retainage, credits, deposits, and disputed lines. Recalculate the discount from the source-defined base and show rounding.',example:'On a $24,800 invoice, a two-percent discount may not apply to a $1,200 freight line. The packet shows both possible bases instead of presenting one unsupported net amount.'},
      {title:'Establish the timing window',focus:'Preserve invoice date, receipt time, validation time, approval time, due date, discount deadline, proposed file date, and expected settlement date. State the timezone used.',example:'A Friday file may settle on Monday. The specialist flags that calendar effect rather than assuming file transmission satisfies the supplier’s deadline.'},
      {title:'Check whether the invoice is truly ready',focus:'Confirm required matching, coding, approval, vendor status, payment data verification, and hold checks. A discount does not justify suppressing an exception or skipping an approval.',example:'A matched invoice still has an unresolved bank-change alert. It remains outside the payment proposal even though the discount expires tomorrow.'},
      {title:'Compare the decision transparently',focus:'Show gross amount, candidate discount, proposed settlement, ordinary due date, days accelerated, and any known operational constraint. Label the arithmetic as decision support, not a return forecast.',example:'Finance receives a clean comparison between paying $49,000 next week or $50,000 in 31 days, together with the assumptions that make the comparison valid.'},
      {title:'Record the final disposition',focus:'Store the owner’s choice, reason code, approval reference, selected run, and eventual settlement evidence. If the opportunity is declined, keep the operational reason for later process review.',example:'A discount missed because approval arrived late is coded differently from one declined because the invoice was disputed or cash was reserved.'},
    ],
  },
  {
    slug:'recurring-invoice-change-review', title:'Review a change on a recurring supplier invoice',
    excerpt:'Compare the current bill with the recurring profile, contract, usage evidence, and approved changes before treating a price or quantity movement as routine.',
    keyword:'recurring invoice change review', service:'invoice-data-capture', serviceLabel:'invoice data capture', image:'invoice-capture-confidence-review.svg',
    question:'Which part of the recurring charge changed, what source supports it, and who must accept the new basis?',
    boundary:'AP support may identify movements and assemble evidence; the business owner approves service changes and finance retains coding, accrual, and payment authority.',
    records:'the current and prior invoices, contract and amendments, rate schedule, usage or seat report, service period, cost allocation, credits, and approval history', owner:'service owner or finance owner',
    sections:[
      {title:'Define the recurring profile',focus:'Record expected supplier, entity, account, service, billing frequency, currency, baseline amount, ordinary variable fields, and owner. A useful profile distinguishes a stable fee from consumption or pass-through charges.',example:'A software bill contains a fixed platform fee, per-user licenses, and usage overage. Comparing only the invoice total would hide which component moved.'},
      {title:'Normalize the billing periods',focus:'Align monthly, quarterly, annual, partial, prepaid, and prorated periods before comparing amounts. Preserve the supplier’s service dates and do not manufacture a period from the invoice date.',example:'An annual renewal appears twelve times larger than last month’s invoice but is not a twelvefold rate increase. The comparison labels duration and unit basis.'},
      {title:'Trace price and quantity separately',focus:'Show prior and current rate, count, tier, discount, minimum, and extension. Connect each movement to an amendment, usage source, approved roster, or unanswered question.',example:'The rate is unchanged, but 17 inactive user seats remain billable. The packet routes a roster question to the application owner instead of disputing the unit price.'},
      {title:'Look for silent scope changes',focus:'Identify newly added modules, locations, entities, support plans, storage bands, or fees. Similar descriptions do not prove the new line belongs to the approved service.',example:'A “premium success” charge first appears at renewal. AP highlights the new line and requests the signed order form that authorizes it.'},
      {title:'Treat credits and true-ups as their own events',focus:'Link credit memos, minimum commitments, consumption true-ups, cancellations, and prior disputes to the periods they affect. Avoid netting away a discrepancy without a visible bridge.',example:'A supplier grants a current credit for an overcharge from two months earlier. Both periods stay visible so the owner can follow the correction.'},
      {title:'Update the profile only after approval',focus:'Keep the prior baseline, approved change, effective date, new expectation, and reviewer. A paid invoice by itself should not silently redefine what AP considers normal.',example:'Once the owner confirms 140 seats effective September 1, the profile changes for later comparisons while retaining the earlier 120-seat baseline.'},
    ],
  },
  {
    slug:'supplier-statement-missing-invoice-triage', title:'Triage an invoice that appears only on a supplier statement',
    excerpt:'Use the statement as a lead, then obtain and validate the source invoice before adding a liability or asking for payment.',
    keyword:'supplier statement missing invoice triage', service:'vendor-statement-reconciliation', serviceLabel:'vendor statement reconciliation', image:'duplicate-credit-memo-detection.svg',
    question:'Is the statement line a valid, unrecorded company obligation, or does it belong to another entity, period, account, or resolved dispute?',
    boundary:'AP support investigates and requests evidence; finance decides recognition and posting, and an authorized approver decides whether the charge is accepted.',
    records:'the supplier statement, invoice image, account number, purchase order, receipt, correspondence, ledger extract, payment history, credits, and dispute log', owner:'AP manager or finance owner',
    sections:[
      {title:'Treat the statement as a pointer',focus:'Capture statement date, account, currency, document number, document date, amount, balance, and supplier status. Do not create an invoice record from the statement line alone.',example:'A statement lists invoice 84721 for $6,380, but the company has no image or tax detail. The line enters an evidence-request queue, not the payment queue.'},
      {title:'Search beyond exact invoice numbers',focus:'Check controlled systems for normalized identifiers, alternate account numbers, scanned files, rejected submissions, credit references, and payment remittances. Record every search scope and extraction time.',example:'The supplier uses INV-0084721 on the image but 84721 on the statement. A normalized search finds a rejected portal submission without pretending the rejection was approval.'},
      {title:'Confirm entity and account ownership',focus:'Match supplier account, buying entity, remit-to relationship, currency, and ordering location. Shared supplier names and domains can span unrelated company accounts.',example:'The document belongs to a sister company with a similar legal name. AP routes it to the correct entity rather than importing it into the current ledger.'},
      {title:'Request the original through a safe channel',focus:'Use an approved supplier contact or portal and ask for the invoice plus referenced support. Avoid accepting changed bank instructions embedded in the recovery message.',example:'The supplier resends the invoice and also proposes a new remit account. The invoice recovery continues, while the bank request enters the independent verification process.'},
      {title:'Rebuild the processing history',focus:'Link receipt, rejection, correction, approval, dispute, credit, and payment events. A statement balance may remain open because the supplier applied cash differently from the company.',example:'The ledger shows payment against a consolidated remittance while the statement leaves one document open. The packet includes the remittance before asking for a duplicate payment.'},
      {title:'Close with a specific outcome',focus:'Use dispositions such as received for validation, duplicate, paid-unapplied, credited, disputed, wrong entity, or unsupported. Keep a next owner and date for any unresolved line.',example:'A supplier-promised credit remains open with its promise date and follow-up owner; it is not labeled resolved until the credit is received and reviewed.'},
    ],
  },
  {
    slug:'goods-return-credit-follow-up', title:'Follow up a supplier credit after goods are returned',
    excerpt:'Connect the return authorization, physical movement, receipt reversal, supplier acknowledgment, and credit memo before closing a returned-goods exception.',
    keyword:'supplier credit after goods return', service:'vendor-statement-reconciliation', serviceLabel:'vendor statement reconciliation', image:'receipt-reversal-invoice-review.svg',
    question:'What quantity and value did the supplier accept for credit, and does that result agree with the company’s return and invoice records?',
    boundary:'AP support maintains the evidence and aging trail; receiving confirms physical events, purchasing resolves commercial differences, and finance approves accounting treatment.',
    records:'the invoice, purchase order, receipt, return authorization, shipping proof, supplier acknowledgment, credit memo, statement, ledger, and correspondence', owner:'purchasing or finance owner',
    sections:[
      {title:'Create the return-to-credit chain',focus:'Give the case one identifier and link ordered, received, returned, acknowledged, credited, and applied quantities and values. Preserve original document identifiers.',example:'Ten damaged units leave the warehouse under RMA-144, but the supplier acknowledges eight. The two-unit difference remains visible instead of being buried in a net credit.'},
      {title:'Distinguish shipment from supplier acceptance',focus:'Record carrier collection, tracking, delivery, inspection, and supplier acceptance as different events. Delivery proof alone may not establish the accepted condition or amount.',example:'Tracking shows a parcel delivered on September 9, while the supplier’s inspection accepts the return on September 13 with a restocking deduction.'},
      {title:'Reconcile units and commercial terms',focus:'Compare SKU, unit of measure, quantity, unit price, tax, freight, restocking charge, and currency. Route contractual interpretation to the commercial owner.',example:'The return is recorded in cases while the credit uses individual units. AP converts using the purchase-order pack size and shows the calculation.'},
      {title:'Protect against duplicate recovery',focus:'Search for replacement shipments, prior credits, invoice deductions, chargebacks, refunds, and open disputes. Multiple teams may pursue the same return through different channels.',example:'Purchasing already deducted the value from a later invoice. The credit memo therefore needs reconciliation rather than automatic application.'},
      {title:'Age from meaningful milestones',focus:'Track days since supplier receipt, promised credit date, latest response, and next escalation. Do not label a credit overdue against an invented deadline.',example:'The supplier promised a memo within 15 business days. The queue uses that commitment and the local holiday calendar instead of simple calendar age.'},
      {title:'Verify the final application',focus:'Connect the approved credit to the correct supplier, entity, currency, invoice, and period. Retain any residual difference and owner decision.',example:'A $4,900 credit is received against a $5,050 return claim. The $150 restocking difference stays open for purchasing review.'},
    ],
  },
  {
    slug:'blanket-purchase-order-drawdown-review', title:'Review invoice drawdown against a blanket purchase order',
    excerpt:'Track releases, receipts, invoices, commitments, and remaining value by line before an owner approves another charge against a blanket order.',
    keyword:'blanket purchase order drawdown review', service:'purchase-order-reconciliation', serviceLabel:'purchase order reconciliation', image:'po-tolerance-exception-packet.svg',
    question:'Does this invoice fit the authorized scope, release, period, and remaining capacity of the blanket order?',
    boundary:'AP support can reproduce the drawdown and identify gaps; purchasing owns commercial scope and amendments, while finance owns invoice approval and accounting.',
    records:'the blanket order, releases, amendments, receipts or service entries, invoices, credits, commitments, dates, category limits, and approval history', owner:'purchasing or finance owner',
    sections:[
      {title:'Model the order at the right level',focus:'Capture header ceiling, line ceilings, quantity or value basis, effective period, release requirement, locations, and allowed categories. A header balance may hide an exhausted line.',example:'The order retains $80,000 overall, but its consulting line has only $2,000 left. A $7,500 consulting invoice cannot rely on the header balance.'},
      {title:'Separate commitments from actuals',focus:'Show unreleased capacity, approved releases, unreceived commitments, receipts, invoices, credits, and payments independently. Avoid subtracting the same event twice.',example:'A $20,000 release has $12,000 received and invoiced. The remaining commitment is $8,000, not $28,000 of combined activity.'},
      {title:'Check dates and service scope',focus:'Compare order validity, release date, service period, delivery date, invoice date, and amendment effective date. Do not backdate a release to make a late invoice fit.',example:'Services occurred after the blanket order expired. AP states the date conflict and asks purchasing for the authorized resolution.'},
      {title:'Find off-order activity',focus:'Search rejected invoices, non-PO invoices, credits, manual journals, and supplier statements associated with the same program. The drawdown is incomplete if activity sits outside the normal match path.',example:'A supplier billed one month without a release and the invoice is in the exception queue. It is included as unresolved exposure, not counted as approved spend.'},
      {title:'Route overages with a bridge',focus:'Provide ordered, released, received, invoiced, credited, and remaining amounts together with the exact line or category causing the exception. Keep amendment authority separate.',example:'A $3,200 overage comes from travel, not labor. That distinction lets the owner review the applicable cap and support.'},
      {title:'Retain the closing state',focus:'When the order is extended, increased, reduced, or closed, store the authorizer, effective date, reason, affected lines, and linked unresolved items.',example:'Purchasing extends dates without adding value. The updated profile changes the time window but preserves the original financial ceiling.'},
    ],
  },
  {
    slug:'milestone-service-invoice-evidence-review', title:'Review evidence for a milestone-based service invoice',
    excerpt:'Map the billed milestone to its contract definition, deliverables, acceptance evidence, prior billings, and retained approval authority.',
    keyword:'milestone service invoice evidence review', service:'three-way-match-support', serviceLabel:'three-way match support', image:'invoice-service-period-validation.svg',
    question:'Has the contract-defined milestone occurred, and is the billed value consistent with the approved schedule and earlier billings?',
    boundary:'AP support checks completeness and arithmetic; the project owner accepts deliverables, procurement resolves contract questions, and finance approves posting and payment.',
    records:'the contract, statement of work, milestone schedule, change orders, deliverables, acceptance record, invoice, prior billings, retainage, and dispute history', owner:'project, procurement, or finance owner',
    sections:[
      {title:'Translate the milestone into observable evidence',focus:'Quote the controlled milestone description and list the required deliverable, acceptance actor, date, percentage, and dependencies. Avoid rewriting a vague clause as certainty.',example:'“Design completion” requires an approved package, not merely a supplier email saying design work is finished.'},
      {title:'Confirm the contract version',focus:'Identify the statement of work and every relevant change order by version and effective date. Later changes may alter value, sequencing, or acceptance without changing the invoice label.',example:'Change order 3 moves testing into a later milestone. AP compares the invoice with that signed version rather than the original schedule.'},
      {title:'Build a cumulative billing schedule',focus:'Show contract value, milestone value, prior invoices, credits, retainage, current request, and remaining value. Review cumulative percentages as well as this invoice.',example:'A supplier bills 25 percent now, but prior invoices already include 10 percent of the same milestone. The packet exposes the overlap.'},
      {title:'Separate delivery from acceptance',focus:'Record when the supplier submitted work, when the owner reviewed it, issues raised, and the formal acceptance event. Submission may start review without authorizing payment.',example:'A report arrived on September 4, revisions were requested on September 7, and acceptance remains pending. Each date is visible.'},
      {title:'Handle partial or conditional acceptance',focus:'Capture accepted components, open defects, holdbacks, and the owner’s explicit decision. AP should not invent a completion percentage from informal comments.',example:'The owner accepts two of three sites. The payment question is routed with site-level values and the unresolved third location.'},
      {title:'Close the evidence packet',focus:'Attach acceptance, approval, coding, exception resolution, and final system references. Preserve rejected evidence so later reviewers understand the sequence.',example:'The corrected invoice remains linked to the first invoice and its rejection, preventing both from appearing as separate obligations.'},
    ],
  },
  {
    slug:'supplier-payment-method-change-review', title:'Review a supplier request to change payment method',
    excerpt:'Separate payment-method preferences from bank or identity changes, verify the request independently, and retain approval before updating a payment profile.',
    keyword:'supplier payment method change review', service:'vendor-onboarding-administration', serviceLabel:'vendor onboarding administration', image:'vendor-contact-ownership-register.svg',
    question:'Is the request authentic, permitted, fully verified, and approved without weakening payment controls?',
    boundary:'AP support logs and routes the request but must not authenticate it through the requesting message, approve master-data changes, or release payment.',
    records:'the supplier master, approved contacts, request, verification record, payment policy, bank or card data location, approval, effective date, and change log', owner:'vendor-master, treasury, or security owner',
    sections:[
      {title:'Classify what is changing',focus:'Distinguish check, ACH, wire, virtual card, portal settlement, currency, remit address, bank account, and payment timing. Each can require different evidence and authority.',example:'A request described as “move to ACH” also changes the legal payee and bank country. The case is not treated as a simple method preference.'},
      {title:'Quarantine untrusted instructions',focus:'Preserve the original message and attachments, note sender and routing details, and avoid clicking verification links or calling numbers supplied only in the request.',example:'The email footer contains a new phone number. AP uses the existing approved directory instead of that number for independent contact.'},
      {title:'Verify through a controlled channel',focus:'Follow the company’s approved callback, portal, or supplier-administration process. Record verifier, contact source, time, questions, and result without copying sensitive credentials into the queue.',example:'The known controller confirms the method request but denies the bank change, revealing that two instructions were combined.'},
      {title:'Assess operational consequences',focus:'Document lead time, fees, remittance format, settlement timing, currency, payment limits, and any open transactions affected. Do not promise a method before owners approve it.',example:'Virtual card acceptance may change remittance handling and supplier fees. Those implications go to treasury and the commercial owner.'},
      {title:'Enforce maker-checker separation',focus:'Keep request intake, verification, master update, approval, and payment release as traceable roles. Emergency language does not erase those separations.',example:'One specialist records the verified packet; a different authorized owner approves the profile change before any proposal uses it.'},
      {title:'Monitor the first affected payment',focus:'Link effective date, changed fields, approval, first proposal, remittance, bank result, and supplier confirmation. Escalate unexpected rejection or diversion immediately.',example:'The first ACH returns with an account error, so the retry is held and reverified instead of being redirected from an email reply.'},
    ],
  },
  {
    slug:'utility-invoice-account-reconciliation', title:'Reconcile utility invoices by service account and location',
    excerpt:'Match service account, meter or circuit, location, billing period, rate components, prior balance, and responsibility before routing a utility invoice.',
    keyword:'utility invoice account reconciliation', service:'invoice-data-capture', serviceLabel:'invoice data capture', image:'invoice-service-period-validation.svg',
    question:'Does the bill belong to an active company location and period, and can every material charge be traced to a valid account and responsibility owner?',
    boundary:'AP support prepares the account and variance review; facilities validates service, procurement handles commercial terms, and finance decides coding and payment.',
    records:'the invoice, service account register, location list, meter or circuit identifiers, lease responsibility, rate notice, usage history, prior balance, payments, and disputes', owner:'facilities or finance owner',
    sections:[
      {title:'Anchor the bill to a service point',focus:'Record legal customer, account number, service address, meter or circuit, location code, utility, and service type. Mailing addresses are not reliable service identifiers.',example:'Two offices receive bills at headquarters, but only the service address reveals which cost center owns each meter.'},
      {title:'Validate the billing period',focus:'Separate service start and end, read date, invoice date, due date, and estimated-read status. Check for overlaps, gaps, unusually long cycles, and closed locations.',example:'A 47-day bill follows a 14-day final bill after a meter replacement. The combined timeline explains the amount better than a simple month comparison.'},
      {title:'Break apart the tariff components',focus:'Capture usage, demand, fixed charge, taxes, riders, adjustments, late fees, deposits, and credits separately. Avoid claiming a rate error without the controlled tariff.',example:'Consumption falls while the bill rises because peak demand increased. The packet routes the demand question to facilities with both measures.'},
      {title:'Bridge prior balance and payments',focus:'Reconcile beginning balance, new charges, payments, credits, reversals, and ending balance. A carried balance may reflect timing rather than a missing payment.',example:'The company paid on August 30, but the supplier statement cut off on August 28. AP attaches remittance and waits for application.'},
      {title:'Check occupancy and responsibility',focus:'Use lease dates, move-in or move-out records, landlord allocations, and closure evidence. Route ambiguous responsibility to the property owner.',example:'Service continues after a lease termination because shutdown was delayed. AP documents the dates rather than assigning the charge to the former location automatically.'},
      {title:'Maintain an account-level history',focus:'Store normal seasonal context, meter changes, disputes, deposits, shutoff risk, contacts, and owner decisions without turning estimates into fixed benchmarks.',example:'A verified meter exchange explains a sequence reset. Future comparisons retain the exchange date and both meter identifiers.'},
    ],
  },
  {
    slug:'employee-expense-supplier-invoice-separation', title:'Separate an employee expense from a supplier invoice',
    excerpt:'Identify the claimant, merchant, reimbursement path, company-card activity, tax document, and approval route before an expense enters the wrong AP workflow.',
    keyword:'employee expense versus supplier invoice', service:'expense-report-review', serviceLabel:'expense report review', image:'invoice-approval-delegation-handoff.svg',
    question:'Is the company paying a supplier directly, reimbursing an employee, clearing a company card, or resolving a duplicate across those paths?',
    boundary:'AP support classifies and assembles evidence; managers approve business purpose, payroll or tax owners decide worker treatment, and finance authorizes posting and payment.',
    records:'the receipt or invoice, expense report, employee and merchant identity, company-card feed, order, approval, business purpose, payment evidence, and duplicate search', owner:'expense, payroll, or finance owner',
    sections:[
      {title:'Identify who incurred and who paid',focus:'Record merchant, legal invoice addressee, employee, cardholder, payment instrument, transaction date, and claimed payee. A receipt with a supplier logo does not establish direct company liability.',example:'An employee paid a conference hotel personally, so the reimbursement claim should not also become a supplier invoice.'},
      {title:'Check all payment channels',focus:'Search supplier ledger, employee expenses, company cards, advances, and direct debits using date, amount, merchant, currency, and reference. Preserve the search scope.',example:'A restaurant receipt appears in an expense report and the corporate-card feed. The case is held for one clearing path, not paid twice.'},
      {title:'Separate receipt quality from policy approval',focus:'Assess legibility, merchant, date, amount, tax, and line detail, then route business purpose, category limits, attendees, and exceptions to the designated approver.',example:'A readable receipt proves the purchase amount but does not prove that an upgraded room complied with travel policy.'},
      {title:'Handle mixed or personal elements',focus:'Record itemized business and personal components, employee repayment, and owner decision without silently editing the source. Sensitive notes belong in approved systems.',example:'A hotel folio includes minibar charges. The review marks the exact amount requiring employee or manager action.'},
      {title:'Protect supplier and employee identities',focus:'Do not create or merge a vendor record merely to reimburse an individual. Use the authorized expense or payroll route and limit personal information in coordination fields.',example:'A contractor receipt requires the company’s designated worker-payment review rather than an improvised vendor-master entry.'},
      {title:'Close every linked record together',focus:'Retain the chosen payment route, duplicate disposition, approval, coding, reimbursement or clearing reference, and unresolved recovery. Update related queues consistently.',example:'When the corporate card is confirmed, the employee claim is rejected with a linked explanation and the card transaction remains in its normal review lane.'},
    ],
  },
  {
    slug:'vendor-prepayment-application-review', title:'Review how a vendor prepayment is applied',
    excerpt:'Connect the approved advance, supplier account, invoice, delivery evidence, credits, and remaining balance before treating a prepayment as consumed or refundable.',
    keyword:'vendor prepayment application review', service:'vendor-statement-reconciliation', serviceLabel:'vendor statement reconciliation', image:'duplicate-credit-memo-detection.svg',
    question:'Which valid charges use the advance, what balance remains, and does the supplier’s allocation agree with the company ledger?',
    boundary:'AP support reconciles and proposes links; purchasing confirms commercial fulfillment, and finance decides classification, application, refund, impairment, and write-off.',
    records:'the prepayment request, approval, payment and remittance, order or contract, supplier statement, invoices, receipts, credits, refund correspondence, and ledger', owner:'purchasing or finance owner',
    sections:[
      {title:'Reconstruct the original advance',focus:'Record supplier, entity, currency, amount, purpose, order, approval, payment reference, expected fulfillment, and any contractual recovery terms.',example:'A $30,000 deposit covers custom equipment, not every invoice from that supplier. The purpose limits the matching population.'},
      {title:'Compare both ledgers',focus:'Bridge the company prepayment account and the supplier’s statement or deposit record. Note timing, exchange, fees, and account-number differences.',example:'The supplier shows $29,970 after a bank fee while the company records $30,000. The $30 difference is routed rather than hidden.'},
      {title:'Test each proposed application',focus:'Match invoice entity, order, goods or service, currency, amount, delivery, acceptance, and contractual milestone to the advance scope.',example:'A maintenance invoice is not applied to an equipment deposit until the commercial owner confirms the contract permits it.'},
      {title:'Track partial consumption explicitly',focus:'Show opening advance, each approved application, credits, refunds, currency effects, disputed items, and remaining balance with dates.',example:'Two accepted invoices consume $18,400, leaving $11,600. The schedule does not net an unreceived third invoice.'},
      {title:'Escalate dormant balances',focus:'Use documented delivery promises, contract terms, last supplier response, and review dates. Age alone does not authorize a refund demand or write-off.',example:'A project pause leaves the deposit unused. Purchasing decides whether the order remains active while finance reviews presentation.'},
      {title:'Confirm final closure',focus:'Link the last application or refund to bank evidence, supplier acknowledgment, ledger clearing, and owner approval. Preserve residual differences.',example:'The supplier refunds the principal but not a disputed fee. The prepayment is not labeled fully recovered until finance resolves that difference.'},
    ],
  },
  {
    slug:'invoice-tax-line-discrepancy-packet', title:'Prepare an invoice tax-line discrepancy packet',
    excerpt:'Reproduce taxable bases, rates, jurisdictions, exemptions, rounding, and source documents so an authorized tax or finance owner can resolve the invoice.',
    keyword:'invoice tax line discrepancy review', service:'invoice-data-capture', serviceLabel:'invoice data capture', image:'invoice-capture-confidence-review.svg',
    question:'What factual inputs produce the supplier’s tax amount, and which source conflicts require specialist judgment?',
    boundary:'AP support captures and recalculates facts but does not choose taxability, jurisdiction, exemption validity, recovery treatment, or reporting position.',
    records:'the invoice lines, order, ship-to and bill-to data, supplier and company entities, exemption records, contract charges, tax breakdown, credits, and system calculation', owner:'tax or finance owner',
    sections:[
      {title:'Capture tax at line level',focus:'Separate item value, discount, freight, service charge, tax type, taxable base, rate, tax amount, currency, and rounding. Header totals can conceal offsetting errors.',example:'One line is taxed at eight percent and another is exempt. A correct header total could still mask the wrong treatment on both lines.'},
      {title:'Preserve jurisdiction facts',focus:'Record supplier entity, company entity, ship-to, bill-to, service location, delivery terms, and source. Do not decide jurisdiction from a mailing address alone.',example:'The invoice is mailed to headquarters but goods ship to another state. Both addresses go to the tax reviewer.'},
      {title:'Reproduce, do not prescribe',focus:'Show the supplier calculation and the system calculation using explicit bases, rates, precision, and rounding. Label any difference without declaring the legally correct result.',example:'Line rounding produces a $0.06 difference from header rounding. The packet demonstrates both methods for owner review.'},
      {title:'Check exemptions and special records',focus:'Identify the referenced certificate, account, expiry or review date, product scope, and system status. Route validity questions to the authorized specialist.',example:'A certificate exists for one buying entity but the invoice names another. AP flags the entity mismatch rather than extending the exemption.'},
      {title:'Connect corrections to the original',focus:'Retain supplier credit, rebill, corrected invoice, correspondence, and approval with the initial discrepancy. Avoid paying both versions.',example:'The supplier issues a tax-only credit and replacement. All three documents share one case and a clear payable outcome.'},
      {title:'Build a reusable reason history',focus:'Use factual categories such as rate mismatch, base mismatch, jurisdiction data, exemption reference, rounding, duplicate tax, or unclear charge. Do not turn categories into tax conclusions.',example:'Repeated base mismatches on freight can prompt a master-data review without AP asserting how freight must be taxed.'},
    ],
  },
  {
    slug:'payment-remittance-allocation-reconciliation', title:'Reconcile a supplier’s payment-remittance allocation',
    excerpt:'Bridge the approved payment, remittance detail, supplier application, open invoices, credits, and deductions before proposing a second payment or account adjustment.',
    keyword:'supplier payment remittance allocation reconciliation', service:'vendor-statement-reconciliation', serviceLabel:'vendor statement reconciliation', image:'payment-proposal-removal-log.svg',
    question:'Did the supplier receive the payment and apply it to the same documents and amounts shown in the company remittance?',
    boundary:'AP support traces the transaction and communicates evidence; treasury confirms settlement, finance approves ledger changes, and suppliers control their own application records.',
    records:'the payment proposal, approval, bank result, remittance, supplier statement, invoice and credit ledger, deductions, correspondence, and cash application response', owner:'treasury or finance owner',
    sections:[
      {title:'Prove the payment event',focus:'Record payment ID, value date, amount, currency, beneficiary, bank status, clearing reference, and approval. A sent remittance message is not proof of settlement.',example:'The remittance email was delivered, but the bank returned the payment. The case follows returned-payment controls rather than allocation follow-up.'},
      {title:'Recreate the remittance math',focus:'List gross invoices, credits, discounts, deductions, withholding, fees, and net paid. Preserve document-level references and currency.',example:'Three invoices total $42,000, a $2,500 credit and $500 discount produce a $39,000 payment. Every component is visible.'},
      {title:'Compare supplier application',focus:'Obtain the supplier account detail and align applied, unapplied, short-paid, and disputed amounts. Do not assume an open statement line means the company never paid.',example:'The supplier placed $39,000 on account because one invoice reference was truncated. Bank evidence and remittance support reallocation.'},
      {title:'Investigate reference and entity errors',focus:'Check payer entity, supplier account, remit account, invoice format, leading zeros, credit ownership, and consolidated payments. Similar names can route funds incorrectly.',example:'A parent entity paid invoices held under a subsidiary supplier account. Finance must approve any inter-entity resolution.'},
      {title:'Prevent duplicate settlement',focus:'Hold any proposed repayment while settlement and application are investigated. Link collection messages and urgent requests to the existing case.',example:'A collector requests immediate payment of an invoice included in last week’s settled batch. AP replies with controlled remittance evidence.'},
      {title:'Verify the supplier correction',focus:'Retain the supplier’s reallocation confirmation, revised statement, remaining differences, date, and contact. Close only after the company ledger and supplier account are reconciled or an owner accepts the residual.',example:'The next statement clears two invoices but leaves a $75 deduction disputed. That residual retains its own owner and next step.'},
    ],
  },
];

const sources = [
  {name:'NIST glossary: least privilege',url:'https://csrc.nist.gov/glossary/term/least_privilege',note:'Definition supporting limited system access and separation of preparation from approval.'},
  {name:'CISA: Recognize and Report Phishing',url:'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',note:'Government guidance supporting independent review of suspicious messages and changed payment instructions.'},
  {name:'IRS: Understanding your Form 1099-K',url:'https://www.irs.gov/businesses/understanding-your-form-1099-k',note:'First-party example of why gross payment records and business books may need reconciliation; tax decisions remain with authorized specialists.'},
];

const opening = (t:Topic) => `The operating question is specific: ${t.question} Start with ${t.records}. Keep every source identifier and retrieval time so a reviewer can reproduce the comparison. ${t.boundary}`;
const detailTails = [
  (t:Topic) => `The AP specialist records the observation, affected amount or document, missing evidence, and one answerable question. The ${t.owner} decides what happens next. A well-organized packet helps that judgment; it does not supply commercial, accounting, tax, security, or payment authority.`,
  (t:Topic) => `The specialist's note should name the source, the factual difference, the value at issue, and the response needed. It then goes to the ${t.owner}. Preparation ends where interpretation, approval, master-data authority, or movement of funds begins.`,
  (t:Topic) => `Write down what the records show and what they do not show. Add the affected document or amount and route a single focused question to the ${t.owner}. Support can make the case easier to review without taking over the owner's decision.`,
  (t:Topic) => `The working record needs the evidence, the discrepancy, its financial or operational effect, and the next question. The ${t.owner} resolves that question. Do not turn a clean spreadsheet into implied approval or policy.`,
];
const controlTails = [
  `Keep corrections linked to the first record. Restrict file and system access to what the task requires, and leave sensitive bank, tax, employee, or identity data in the approved source. Try the step on one ordinary case and one exception before using it as routine.`,
  `A correction should add history, not erase it. Give the specialist only the access needed for preparation, and use source links instead of copying protected data into notes. A normal item and a conflicting item make a useful first test.`,
  `Retain the original evidence when a new document arrives. Limit permissions, store protected details in their authorized system, and confirm that a second reviewer can follow both a straightforward case and an exception.`,
  `Do not overwrite the first result when the supplier or owner responds. Preserve the trail, keep access narrow, and avoid duplicating sensitive fields in a coordination queue. Pilot the status on routine and incomplete records.`,
];
const detail = (t:Topic,s:Section,seed:number) => `${s.focus} ${s.example} For this ${t.keyword}, ${detailTails[seed % detailTails.length](t)}`;
const control = (t:Topic,s:Section,seed:number) => {
  const leads = [
    `For “${s.title.toLowerCase()},” choose a status that names the next action: evidence requested, source conflict, owner review, supplier correction, normal processing, or closure with a reason.`,
    `The status for “${s.title.toLowerCase()}” should tell the next person what must happen. Record whether the case awaits evidence, a supplier correction, owner review, ordinary processing, or documented closure.`,
    `Avoid a vague “pending” label at this stage. For “${s.title.toLowerCase()},” name the missing evidence, conflict, reviewer, correction, processing step, or closure reason.`,
    `Make the queue useful to the backup reviewer. The “${s.title.toLowerCase()}” entry should state the next action and who owns it, whether that is evidence collection, correction, review, processing, or closure.`,
  ];
  return `${leads[seed % leads.length]} ${controlTails[(seed + 1) % controlTails.length]}`;
};

export const sep28BlogPosts = topics.map(t=>({slug:t.slug,title:t.title,excerpt:t.excerpt,minutes:13}));
export const sep28BlogDetails = Object.fromEntries(topics.map((t,topicIndex)=>[t.slug,{
  thumbnail:`/blog-thumbnails/sep24-2026/${t.image}`,shortAnswer:`${t.excerpt} ${t.boundary}`,published:'2026-09-28',modified:'2026-09-28',mainKeyword:t.keyword,
  sections:[
    {title:'Define the decision before touching the queue',paragraphs:[opening(t),`Write the lane in plain language: included suppliers and entities, intake source, expected output, stop conditions, authorized reviewer, response target, and retention location. A workable ${t.keyword} does not ask support to “use judgment” without naming whose judgment is required. It makes missing, conflicting, late, and security-sensitive evidence visible while leaving the source record intact.`]},
    ...t.sections.map((s,i)=>({title:s.title,paragraphs:[detail(t,s,topicIndex+i),control(t,s,topicIndex+i)]})),
    {title:'Pilot the workflow and review exceptions',paragraphs:[`Choose a bounded sample of ${t.keyword} cases that includes a normal item, incomplete evidence, conflicting sources, an older unresolved item, and a request with a security or authority concern. Ask a backup reviewer to reproduce each result from the packet alone. Revise fields and statuses when the reviewer must rely on private memory, chat history, or assumptions that are absent from the record.`, `Track measures only after defining their source and purpose. Useful operational signals can include items waiting by reason, age since the last meaningful event, returned packets, correction causes, and owner response time. Volume processed is not proof that liabilities, supplier accounts, or payments are right. Review patterns with the ${t.owner}, then assign process changes separately from one-off corrections.`]},
    {title:'Scope an outsourced handoff',paragraphs:[`For an outsourced ${t.keyword} lane, document system access, approved contacts, expected volume, peak timing, source-of-truth fields, evidence storage, quality sampling, backup coverage, and escalation deadlines. Keep vendor-master changes, policy interpretation, invoice approval, accounting treatment, and payment release with named company owners. The specialist prepares a consistent decision packet and follows the recorded next action.`, `Start with one entity or queue and a short review cycle. The related ${t.serviceLabel} service page can help define the preparation work, while the contact and scoping page can turn sources, outputs, permissions, owners, and stop conditions into a role brief. Expand only after routine and exception cases remain traceable from intake through closure.`]},
  ],
  checklistTitle:'Review the packet before handoff',
  checklist:['Authoritative source records and stable identifiers retained','Amounts, dates, currencies, and assumptions reproduced','Missing or conflicting evidence stated precisely',`Decision routed to the ${t.owner}`,'Approval, master-data authority, and payment release remain with the company'],
  bodyLinks:[{href:`/services/${t.service}`,label:t.serviceLabel},{href:'/contact-us',label:'contact and scoping page'}],
  faqs:[
    {question:`What can outsourced support do in a ${t.keyword}?`,answer:`Support can gather ${t.records}, reproduce comparisons, maintain the exception record, and route a precise question to the ${t.owner}.`},
    {question:'Which decisions stay with the company?',answer:t.boundary},
    {question:'How should the workflow begin?',answer:'Begin with a bounded sample, named sources and owners, explicit stop conditions, and a review of ordinary and conflicting cases before expanding volume.'},
  ],sources,
}]));
