type Topic = {
  slug: string;
  title: string;
  excerpt: string;
  keyword: string;
  service: string;
  serviceLabel: string;
  situation: string;
  owner: string;
  evidence: string;
  example: string;
  sections: {title: string; guidance: [string, string]}[];
};

const topics: Topic[] = [
  {
    slug: 'prepayment-invoice-tracking-register',
    title: 'How to track supplier prepayments before the final invoice arrives',
    excerpt: 'Use a prepayment register to connect the request, approval, cash result, goods or services, and final supplier invoice without treating the advance as a routine invoice.',
    keyword: 'supplier prepayment tracking', service: 'payment-run-preparation', serviceLabel: 'payment run preparation',
    situation: 'a supplier asking for money before the ordinary invoice or delivery cycle is complete', owner: 'finance or treasury owner',
    evidence: 'supplier request, contract or purchase order, approval, payment record, receipt evidence, and final invoice',
    example: 'A packaging supplier asks for a 30% deposit on a $12,000 order. The packet should show the approved $3,600 advance, the purchase order, the bank result, and the remaining $8,400 without implying that the balance is ready to pay.',
    sections: [
      {title:'Open a record before the payment proposal',guidance:['Give the advance its own register ID and record the legal entity, supplier, currency, requested amount, percentage, due date, purpose, and source channel. Link the request to the controlled purchase record instead of relying on the email subject line.','Label the request as an advance. Do not make it look like a delivered invoice merely because the accounting system needs a document number. If the system uses a placeholder, record what it is and who approved that treatment.']},
      {title:'Separate commercial approval from payment release',guidance:['The commercial owner confirms that the deposit is allowed by the agreement. Finance confirms the proposed amount and coding. Treasury or another authorized employee releases funds. An outsourced AP specialist can assemble the packet but should not collapse those decisions into one checkbox.','If the supplier changes bank details while requesting the deposit, move that request to the company bank verification process. The prepayment deadline does not justify using the new details before they are independently checked.']},
      {title:'Reconcile the cash result',guidance:['After release, attach the controlled payment result, date, amount, currency, and reference. A submitted batch is not the same as settled cash, and a supplier acknowledgment is not a bank result.','Keep failed, returned, or canceled attempts as separate events. Do not replace the first payment reference with the second one because that makes duplicate review much harder.']},
      {title:'Match delivery and the final invoice',guidance:['When goods or services arrive, link the receipt or service confirmation without changing the original advance record. Then compare the final invoice with the purchase amount, advance, taxes, credits, and remaining balance.','Ask the designated owner about any difference. The AP specialist should not assume that a deposit is refundable, automatically deductible, or available for another order.']},
      {title:'Review old advances by next action',guidance:['Sort open advances by missing delivery, missing invoice, disputed application, refund expected, or owner review. Age alone does not explain the issue, so keep the reason beside the date.','Use a named owner and review date for each open item. Close the register line only when the accounting record and supporting evidence show how the advance was used or recovered.']},
    ],
  },
  {
    slug: 'retainage-invoice-review-packet',
    title: 'Build a retainage invoice review packet without guessing the release amount',
    excerpt: 'Track billed work, retained amounts, approvals, and release conditions so AP can prepare the record while an authorized employee decides what is payable.',
    keyword: 'retainage invoice review', service: 'invoice-data-capture', serviceLabel: 'invoice data capture',
    situation: 'an invoice where part of the billed amount is withheld until a contract condition is met', owner: 'project, contract, or finance owner',
    evidence: 'contract terms, invoice, schedule of values, prior certificates, approvals, receipts, and payment history',
    example: 'A contractor bills $50,000 for approved work and shows $5,000 as retainage. The reviewer needs the gross work, current retention, prior retention, tax treatment, and cumulative totals, not just a net $45,000 payable line.',
    sections: [
      {title:'Capture gross, retained, and net amounts',guidance:['Record the invoice exactly as issued, including the gross billed amount, current retainage, prior retainage, taxes, credits, and requested net amount. The components should add back to the supplier total.','Do not post only the net figure if that would hide the retained obligation or distort project reporting. Route the proposed accounting treatment to the employee who owns it.']},
      {title:'Tie the calculation to contract evidence',guidance:['Link the clause, approved schedule, or other controlled instruction that states how retention works. Record the version and effective date because project terms can change.','A familiar percentage from an earlier invoice is a comparison, not authority. Show any difference between the current calculation and the documented rule.']},
      {title:'Check cumulative values',guidance:['Prepare a simple rollforward of work billed, retainage withheld, retainage released, payments, and open balances. Compare it with prior approved applications and the supplier statement.','Keep each source separate when totals disagree. The AP specialist should identify the break, not force the records to match by editing an earlier amount.']},
      {title:'Treat release as a new decision',guidance:['A request to release retainage needs its own evidence and approval. Capture the amount, project or milestone, requested date, and source of the release request.','Completion language, lien documents, tax questions, and contract interpretation belong with the designated company owner. AP can index the documents and state what is missing.']},
      {title:'Leave a reviewable trail',guidance:['Record who approved the invoice, who authorized any release, and which system transactions followed. Preserve rejected and corrected versions with their timestamps.','Before closing, confirm that the outstanding retainage in the register agrees with the approved records. Put unresolved differences back with a named owner and date.']},
    ],
  },
  {
    slug: 'freight-accessorial-charge-review',
    title: 'Review freight accessorial charges before routing the invoice',
    excerpt: 'Compare detention, liftgate, redelivery, and other accessorial charges with the shipment record instead of approving an unfamiliar line from the carrier invoice alone.',
    keyword: 'freight accessorial charge review', service: 'three-way-match-support', serviceLabel: 'three-way match support',
    situation: 'a freight invoice with charges beyond the planned transportation rate', owner: 'logistics, purchasing, or finance owner',
    evidence: 'carrier invoice, rate agreement, bill of lading, tender, delivery record, event timestamps, and approved exception',
    example: 'A carrier adds two hours of detention to a load. The packet should preserve the arrival and release timestamps, the free-time rule, the billed units, and the named logistics reviewer rather than accepting the fee because the shipment was delivered.',
    sections: [
      {title:'Classify the extra charge',guidance:['Capture the carrier wording, code, amount, currency, shipment reference, location, and event date. Map it to the company category only when the mapping is documented.','Keep detention, demurrage, redelivery, address correction, fuel, liftgate, and storage separate. They may depend on different records and decision owners.']},
      {title:'Rebuild the billed calculation',guidance:['Show the rate, units, free allowance, minimum, cap, tax, and arithmetic visible in the invoice or agreement. Flag a missing input instead of selecting the value that makes the charge work.','If the rate sheet changed, retain both versions and identify which shipment or service date falls near the change. An employee decides which version governs.']},
      {title:'Connect operational events',guidance:['Link pickup, arrival, appointment, loading, departure, delivery, and exception evidence by stable shipment identifiers. Email descriptions should not replace the controlled transport record when one exists.','When timestamps conflict, list the source and timezone for each one. Do not convert a conflict into a clean duration without owner review.']},
      {title:'Route responsibility questions',guidance:['The record can show what happened and what the contract says. It should not decide whether the carrier, warehouse, customer, or company caused the event.','Send one narrow question with the disputed amount and evidence gap to the logistics owner. Keep the ordinary freight amount separate if company policy permits partial processing.']},
      {title:'Use outcomes to improve intake',guidance:['Record whether the charge was accepted, credited, disputed, or corrected and link the authorized response. Keep supplier correspondence beside the internal decision.','Review repeated charges by lane and reason, but do not claim savings from avoided charges unless the finance record supports that calculation.']},
    ],
  },
  {
    slug: 'utility-invoice-account-verification',
    title: 'Verify utility invoice accounts across locations and legal entities',
    excerpt: 'Use service address, account identity, billing period, meter details, and ownership records to route utility bills without relying on the supplier name alone.',
    keyword: 'utility invoice account verification', service: 'invoice-data-capture', serviceLabel: 'invoice data capture',
    situation: 'a recurring utility invoice that could belong to several sites, meters, or company entities', owner: 'facilities, property, or finance owner',
    evidence: 'utility invoice, controlled site directory, account list, lease or ownership record, prior bill, and service change notice',
    example: 'Two warehouses use the same electricity provider and have similar street names. The processor should match the full service address and account suffix before proposing an entity or cost center.',
    sections: [
      {title:'Start with the service identity',guidance:['Capture the account number using the company masking rule, full service address, meter or service identifier, billing period, invoice date, currency, and supplier legal name.','The remit address and mailing address do not prove where service was delivered. Keep each address in its labeled field so the reviewer can see the difference.']},
      {title:'Map the account to a controlled directory',guidance:['Compare the bill with the company site and utility account register. The register should name the legal entity, internal owner, expected supplier, and effective dates.','If the location opened, closed, or moved during the billing period, show the overlap. AP should not decide which entity bears the cost without the property or finance owner.']},
      {title:'Review changes without inventing a benchmark',guidance:['Compare usage, days, tariff labels, fixed fees, taxes, and total with prior bills where the units are comparable. State the change and its source rather than declaring it abnormal.','Weather, occupancy, estimated reads, rate changes, and catch-up billing can affect the total. Ask the account owner which explanation has supporting evidence.']},
      {title:'Handle final bills and deposits separately',guidance:['Mark deposits, refunds, final bills, connection fees, and ordinary usage as different events. Link the move or service request that explains the event.','A credit balance does not automatically authorize an offset or refund instruction. Route the treatment and any bank details to the appropriate employee.']},
      {title:'Close the account mapping gap',guidance:['Record the owner response and update the controlled directory through its approved change path. Do not silently teach future processors from an unreviewed coding choice.','Sample similar addresses and reused account names during quality review. These are the records most likely to pass a superficial supplier-only match.']},
    ],
  },
  {
    slug: 'corporate-card-receipt-invoice-match',
    title: 'Match corporate card charges to invoices and receipts without duplicating AP',
    excerpt: 'Connect card transactions, receipts, supplier invoices, and reimbursements so the same expense does not enter two payment paths.',
    keyword: 'corporate card invoice matching', service: 'expense-report-review', serviceLabel: 'expense report review',
    situation: 'a card transaction that may also arrive through the AP inbox or expense system', owner: 'card program, expense, or finance owner',
    evidence: 'card feed, receipt, supplier invoice, expense submission, AP search result, and approved business purpose',
    example: 'A software supplier emails a $499 invoice after the employee already paid by corporate card. The packet should connect the card transaction to the invoice and keep the invoice out of the unpaid supplier queue.',
    sections: [
      {title:'Identify the payment rail first',guidance:['Record the card transaction date, posting date, amount, currency, merchant descriptor, cardholder reference, and feed identifier. Keep masked card data within the company policy.','An invoice number does not prove an open payable. Mark the document as card paid only after the controlled transaction and amount support that conclusion.']},
      {title:'Search for the same obligation',guidance:['Compare supplier, amount, currency, invoice or order number, service date, and description across AP, expense, and card records. Record where and when the search was performed.','Small differences may reflect tips, foreign exchange, tax, partial shipment, or separate charges. Do not merge records merely because the merchant and date are close.']},
      {title:'Build one evidence packet',guidance:['Link the original receipt or invoice, transaction, business purpose, coding proposal, and approval. Avoid copying sensitive files into personal messages to make the packet appear complete.','If the receipt is missing, follow the company exception route. The AP specialist should not create a substitute receipt or turn a merchant description into an itemized record.']},
      {title:'Resolve duplicate paths visibly',guidance:['If the supplier invoice also entered AP, place it in a review state and link the card evidence. If reimbursement was requested too, identify that third path.','Only an authorized owner decides whether to reject, reverse, recover, or reclassify a duplicate. Preserve each system record until that decision is complete.']},
      {title:'Review recurring collision points',guidance:['Track suppliers and channels that repeatedly create both card and invoice records. A purchasing or card owner can then set a documented preferred route.','Measure confirmed duplicate-path events, not every potential match. Keep false positives in the quality sample so matching rules do not become too broad.']},
    ],
  },
  {
    slug: 'invoice-approval-mobile-device-controls',
    title: 'Set safer rules for invoice approvals made on mobile devices',
    excerpt: 'Design a mobile approval view that preserves invoice evidence, separates approval from payment, and gives reviewers a clear way to stop and ask questions.',
    keyword: 'mobile invoice approval controls', service: 'three-way-match-support', serviceLabel: 'three-way match support',
    situation: 'an approver reviewing an invoice from a phone or tablet', owner: 'finance process, system, or security owner',
    evidence: 'approval configuration, invoice image, match evidence, exception notes, access record, and audit history',
    example: 'A manager sees only a supplier name and total in a push notification. The workflow should require the manager to open the invoice and exception note before approving, especially when the amount or bank status has changed.',
    sections: [
      {title:'Define the minimum approval view',guidance:['Show the legal entity, supplier, invoice number, amount, currency, due date, business purpose, coding summary, purchase reference, and exception status before the approval action.','A notification preview is not enough when it omits the document or match result. Give the approver a clear route to the controlled record.']},
      {title:'Make a stop easy',guidance:['Provide an obvious return, reject, or question path that records a reason and sends the item to a named queue. A small screen should not turn uncertainty into approval.','Do not ask an outsourced AP specialist to interpret a vague emoji or chat reply as formal approval. The controlled workflow should carry the decision.']},
      {title:'Protect identity and session access',guidance:['Use the company authentication and device controls chosen by the security owner. AP procedures can state the requirement but should not contain passwords, recovery codes, or instructions to bypass a prompt.','Unexpected login requests, changed domains, or unusual approval screens should be escalated through a known company channel. Preserve the event without continuing the transaction.']},
      {title:'Keep approval separate from release',guidance:['Document whether the mobile action approves the invoice, the payment proposal, or both. Avoid labels that make distinct decisions appear interchangeable.','Payment release, vendor master changes, and bank verification remain with their designated roles. A convenient mobile workflow does not change segregation of duties.']},
      {title:'Test the audit history',guidance:['Sample mobile approvals to confirm the approver, time, item version, evidence viewed, comments, and later changes remain visible. Include a returned item and a corrected invoice.','If the system cannot show whether the document changed after approval, route that control gap to the system and finance owners before widening mobile use.']},
    ],
  },
  {
    slug: 'payment-run-cutoff-calendar',
    title: 'Create a payment run cutoff calendar that AP can actually follow',
    excerpt: 'Turn payment dates, approval deadlines, funding checks, holidays, and exception rules into one controlled calendar with named owners.',
    keyword: 'accounts payable payment run cutoff calendar', service: 'payment-run-preparation', serviceLabel: 'payment run preparation',
    situation: 'a recurring payment run with several upstream deadlines and occasional urgent requests', owner: 'treasury or finance operations owner',
    evidence: 'approved payment schedule, bank calendar, company calendar, approval rules, funding checkpoint, and exception procedure',
    example: 'For a Thursday release, AP may need complete invoice evidence Tuesday and final approval Wednesday. The calendar should state those times and timezone, plus what happens when a bank holiday moves the run.',
    sections: [
      {title:'Anchor the release event',guidance:['Record the intended release date, settlement expectation, bank or payment platform, currency, legal entity, timezone, and accountable releaser. Work backward only from an approved schedule.','Do not promise a supplier that a listed run date guarantees receipt. Settlement can depend on bank processing, payment method, and correct destination data.']},
      {title:'Name each upstream cutoff',guidance:['List the last accepted time for invoice evidence, coding, business approval, vendor verification, batch preparation, finance review, funding confirmation, and release.','Use a named role for every checkpoint. A calendar that says finance reviews the batch does not tell AP who can answer when that person is absent.']},
      {title:'Account for holidays and timezones',guidance:['Use the company approved bank and business calendars. Show which timezone controls each cutoff and how a holiday changes preparation and release dates.','Do not copy last year\'s shifted schedule into the new year. Retain the source and approval date for each exception to the recurring pattern.']},
      {title:'Keep urgent items in an exception lane',guidance:['State who can request an off-cycle or late addition, which evidence remains mandatory, and who approves the exception. Urgency should be recorded as a reason, not accepted as authority.','Bank changes and unfamiliar payment instructions keep their verification steps. The cutoff must not become a reason to skip them.']},
      {title:'Publish and maintain one version',guidance:['Store the current calendar where AP, approvers, and treasury can reach it. Mark its owner, version, effective date, and superseded version.','After a missed or confusing cutoff, correct the process record through the owner. Do not quietly change historical timestamps or imply that a late item met the earlier rule.']},
    ],
  },
  {
    slug: 'accrual-reversal-invoice-match',
    title: 'Match a posted invoice to its accrual and reversal record',
    excerpt: 'Assemble invoice, service-period, accrual, reversal, and posting evidence so finance can resolve differences without AP choosing the accounting treatment.',
    keyword: 'invoice accrual reversal matching', service: 'month-end-ap-close-support', serviceLabel: 'month end AP close support',
    situation: 'an invoice arriving after finance recorded an accrual and scheduled or posted a reversal', owner: 'controller or designated accounting owner',
    evidence: 'invoice, service evidence, accrual support, reversal entry, ledger detail, purchase record, and finance instruction',
    example: 'Finance accrued $8,000 for August services. The September invoice is $8,450 and covers the same period. AP should link both records and show the $450 difference without choosing the period or adjustment.',
    sections: [
      {title:'Prove the relationship before matching',guidance:['Compare entity, supplier, service period, purchase reference, description, currency, amount, and owner across the invoice and accrual support. Record both system identifiers.','A similar amount and supplier are clues, not proof. One accrual may cover several invoices, and one invoice may span more than one estimate.']},
      {title:'Preserve the accounting chronology',guidance:['List the accrual date, amount, currency, source, approver, scheduled reversal, actual reversal, invoice receipt, and invoice posting events. Keep the system timestamps.','Do not rewrite the invoice receipt date to fit the close period. Receipt, service, approval, and posting dates answer different questions.']},
      {title:'Explain the difference factually',guidance:['Calculate the visible difference and identify which input changed, such as quantity, rate, tax, currency, service scope, or invoice coverage. Link the source for that input.','If the cause is unknown, label it unknown and ask the accounting owner. AP support should not create an explanation that makes the entry reconcile.']},
      {title:'Route the accounting decision',guidance:['Provide the invoice and linked ledger facts in one packet with a narrow decision request. The controller or delegated accountant decides posting period, true-up, reversal, coding, and materiality.','If the invoice also fails ordinary approval or match rules, keep that exception visible. An accrual does not substitute for invoice approval.']},
      {title:'Close both records together',guidance:['After the owner responds, link the approved invoice posting and any journal action to the original accrual record. Record who decided and when.','Review unmatched accruals and invoices at the next close checkpoint. Do not close the pair merely because their net balance looks reasonable.']},
    ],
  },
  {
    slug: 'vendor-tax-form-refresh-workflow',
    title: 'Build a vendor tax form refresh workflow without overwriting prior evidence',
    excerpt: "Track requests, returned forms, effective dates, validation questions, and approvals while keeping tax decisions with the company's authorized owner.",
    keyword: 'vendor tax form refresh workflow', service: 'tax-document-collection', serviceLabel: 'tax document collection',
    situation: 'a vendor record that needs a current tax document or a review of changed tax information', owner: 'tax, vendor master, or finance owner',
    evidence: 'prior form, current request, returned form, vendor master, change evidence, validation result, and approval',
    example: 'A vendor returns a new Form W-9 with a different legal name but the same email contact. AP can compare the fields and flag the change, while the tax or vendor master owner decides whether the record should change.',
    sections: [
      {title:'Define why the form is being requested',guidance:['Record the vendor, legal entity receiving the form, document type, request reason, request date, due date, and requester. Use the company approved template and channel.','Do not tell a vendor that a form has expired unless the company rule or authorized owner supports that statement. Some refresh programs are risk or data quality reviews rather than statutory expiry.']},
      {title:'Keep the returned document controlled',guidance:['Save the form in the approved restricted location and record the receipt channel and time. Avoid moving tax identifiers through open chat or personal storage.','The public queue can show that a form was received without exposing sensitive fields. Follow the company access and retention rules.']},
      {title:'Compare fields without making the tax decision',guidance:['Compare name, business name, address, classification, taxpayer identifier status, signature, and date with the prior form and vendor record. Mask sensitive values in ordinary notes.','List every changed or unclear field. AP support should not choose a tax classification, correct a signed form, or decide that two legal names are equivalent.']},
      {title:'Separate bank and contact changes',guidance:['A tax form is not authority to change banking, remit, email, or phone details. Route those changes through the company process that owns them.','If the form arrives with a bank change, preserve both requests but do not let one validate the other. Use an independently trusted contact path.']},
      {title:'Record acceptance and future review',guidance:['The authorized owner records whether the document was accepted, rejected, or sent back for correction and which vendor master action followed. Preserve the earlier form.','Set the next review from the approved policy or owner instruction. Do not invent an annual cadence merely because it is easy to schedule.']},
    ],
  },
  {
    slug: 'shared-services-ap-transition-checklist',
    title: 'Use a shared services AP transition checklist before moving the queue',
    excerpt: 'Move invoice work to a shared or outsourced team only after sources, permissions, owners, exceptions, and acceptance checks are documented.',
    keyword: 'accounts payable shared services transition checklist', service: 'ap-inbox-management', serviceLabel: 'AP inbox management',
    situation: 'an AP queue moving from a local team to a shared services or outsourced support model', owner: 'finance process owner',
    evidence: 'scope, queue inventory, procedure, access approvals, exception history, service calendar, and acceptance results',
    example: 'A local office processes invoices from one mailbox and a supplier portal. Both sources need owners, forwarding rules, backlog counts, and test cases before the shared team accepts daily responsibility.',
    sections: [
      {title:'Define the boundary in records, not job titles',guidance:['List the entities, invoice channels, suppliers, systems, languages, business hours, and tasks moving. Then list the decisions and payment authority that stay with company employees.','A broad statement such as process AP leaves gaps around vendor changes, disputes, tax questions, and release. Name the stop point for each task.']},
      {title:'Inventory work and access',guidance:['Count open items by current state and source, then sample the oldest and riskiest records. Record shared mailboxes, portals, drives, accounting roles, and reporting access.','Grant access through approved company requests and named accounts. Do not transfer passwords inside the operating procedure or keep former employee accounts alive for convenience.']},
      {title:'Teach exceptions with real examples',guidance:['Use cleared examples plus missing purchase orders, suspected duplicates, bank changes, disputed charges, and wrong-entity invoices. Show the source, correct stop, owner, and final response.','Do not turn one unusual decision into a standing rule. Mark examples with their date and scope, and update the procedure only through the process owner.']},
      {title:'Run parallel checks before acceptance',guidance:['Have the current and receiving teams process or review the same controlled sample. Compare intake completeness, routing, exception wording, and handoff evidence.','Resolve differences by looking at the written rule and source record. Agreement between two people is not enough if both missed the same required check.']},
      {title:'Accept the queue with open risks visible',guidance:['The process owner signs off the scope, known gaps, backlog, access, support contacts, review cadence, and start time. Assign an owner and target date to every unresolved item.','After launch, review a small daily sample and the exception queue. Expand scope only after the first lane has a stable record and reliable escalation path.']},
    ],
  },
  {
    slug: 'supplier-self-billing-invoice-control',
    title: 'Control supplier self-billing and evaluated receipt invoices in AP',
    excerpt: "Connect purchase, receipt, price, generated invoice, supplier acknowledgment, and exception evidence when the buyer's system creates the payable document.",
    keyword: 'self billing invoice AP control', service: 'purchase-order-reconciliation', serviceLabel: 'purchase order reconciliation',
    situation: 'a self-billing or evaluated receipt process where the buyer creates the invoice record from purchasing and receiving data', owner: 'purchasing, tax, or finance owner',
    evidence: 'approved agreement, purchase order, receipt, price record, generated document, supplier response, and system audit trail',
    example: 'The system creates a payable for 100 received units, but the supplier says 96 shipped. AP should preserve the receipt and supplier claim, pause the four-unit difference, and route it to receiving rather than editing the quantity.',
    sections: [
      {title:'Confirm the supplier and process scope',guidance:['Record the legal entities, supplier identifier, agreement, document type, currencies, locations, goods or services, and effective dates covered by self-billing.','Do not assume that every purchase from the supplier belongs in the program. Keep excluded categories and ordinary supplier invoices visible in intake rules.']},
      {title:'Trace each generated amount',guidance:['Link the purchase line, receipt, accepted quantity, unit price, tax input, currency, and calculation used to create the document. Retain the system document number and creation time.','If a price or receipt changed later, preserve the version used at generation. A current screen may not explain the original payable.']},
      {title:'Handle supplier documents without duplication',guidance:['When the supplier also sends an invoice, compare it with the generated record before posting anything new. Record whether it is informational, a dispute, or outside the self-billing scope.','Do not delete the supplier document as a duplicate without preserving its identifier and disposition. It may contain a price, quantity, or tax difference that needs an owner.']},
      {title:'Route receipt and price differences',guidance:['State the exact line, source values, amount at issue, and missing decision. Receiving owns receipt corrections; purchasing owns commercial terms; tax and finance retain their decisions.','AP support can keep the uncontested record moving only when the approved process permits it. It should never change source quantities or prices to clear a match.']},
      {title:'Reconcile the supplier relationship',guidance:['Compare generated documents, credits, payments, and supplier statements using stable references. Keep timing differences separate from true amount differences.','Sample corrections and documents near an agreement change. Confirm that the supplier response and internal audit trail still point to the same obligation.']},
    ],
  },
  {
    slug: 'vendor-credit-reissue-control',
    title: 'Track canceled and reissued vendor credits without using both',
    excerpt: 'Link original credits, cancellations, replacements, invoice applications, and supplier statements so AP does not apply the same value twice.',
    keyword: 'vendor credit reissue control', service: 'vendor-statement-reconciliation', serviceLabel: 'vendor statement reconciliation',
    situation: 'a supplier canceling or replacing a credit memo that may already appear in the company ledger', owner: 'finance or supplier account owner',
    evidence: 'original credit, cancellation, replacement credit, invoice applications, supplier statement, correspondence, and ledger history',
    example: 'A supplier cancels credit CM-104 for $750 and issues CM-221 for the same amount. The record must show whether CM-104 was already applied before CM-221 becomes available.',
    sections: [
      {title:'Preserve all three events',guidance:['Capture the original credit, cancellation or reversal notice, and replacement credit with their dates, amounts, currencies, references, and source channels.','Do not overwrite the first credit number with the new one. Reviewers need the full chain to test whether value moved or was duplicated.']},
      {title:'Check the ledger before proposing use',guidance:['Search whether the original credit was posted, applied, paid, netted, disputed, or reversed. Record the system and search time.','A zero open balance can mean application, cancellation, or offset. Link the transaction that explains it instead of assuming the credit is gone.']},
      {title:'Compare the supplier statement separately',guidance:['Show how each credit appears on the supplier statement and which invoices the supplier says it affects. Keep statement data distinct from the company ledger.','If the supplier omits the original or replacement, ask for clarification through the approved contact. Do not alter the ledger merely to mirror the statement.']},
      {title:'Route the disposition decision',guidance:['Prepare the amount at risk, affected invoices, prior applications, and proposed next question. An employee decides reversal, reapplication, recovery, or dispute treatment.','Changed refund or banking instructions remain subject to separate verification. A legitimate credit conversation does not authenticate payment data.']},
      {title:'Close with linked references',guidance:['Record the authorized result and link every system action to the original, cancellation, and replacement. Preserve the supplier response and reviewer.','Quality review should sample same-amount replacements and credits issued across period close. Those cases are easy to mistake for harmless duplicates.']},
    ],
  },
  {
    slug: 'invoice-ocr-field-exception-review',
    title: 'Review invoice OCR field exceptions before they enter the AP ledger',
    excerpt: 'Compare captured fields with the invoice image, mark confidence limits, and route ambiguous values without turning OCR output into source evidence.',
    keyword: 'invoice OCR exception review', service: 'invoice-data-capture', serviceLabel: 'invoice data capture',
    situation: 'an invoice whose fields were extracted by OCR or another capture tool', owner: 'AP process or finance owner',
    evidence: 'original invoice image, capture output, confidence data, vendor master, purchase record, correction history, and reviewer response',
    example: 'OCR reads invoice number O-105 as 0-105 and drops a negative sign from a credit line. A reviewer should correct the proposed fields from the visible source and retain the correction event for duplicate checks.',
    sections: [
      {title:'Keep the image as the primary source',guidance:['Store the received file and its channel, timestamp, page count, and file identifier before reviewing extracted values. The OCR record should link back to that source.','Do not regenerate a cleaner invoice from captured text. Layout, signs, line breaks, stamps, and page relationships may affect review.']},
      {title:'Prioritize fields by consequence',guidance:['Check legal entity, supplier identity, invoice number, date, currency, amount, tax, purchase reference, bank indicators, and credit signs according to the company rule.','A confidence score is a tool output, not proof. Set review thresholds through the process owner and retain exceptions that fall outside them.']},
      {title:'Compare context, not just characters',guidance:['Use labels, column headings, totals, page references, and source formatting to understand a field. Record when handwriting, poor scans, or multiple languages make the value uncertain.','Vendor master and purchase data can help identify a conflict, but they should not silently replace what the invoice says. Show both values.']},
      {title:'Make corrections auditable',guidance:['Record the captured value, corrected value, source location, reviewer, time, and reason. Keep bulk corrections and mapping changes under owner approval.','Do not train future capture rules from an unreviewed correction. One invoice can be an exception rather than a new supplier pattern.']},
      {title:'Test the queue with known hard cases',guidance:['Sample credits, multi-page invoices, decimals, foreign currencies, similar supplier names, faint scans, and repeated invoice numbers. Include both accurate captures and failures.','Measure field errors after human review and downstream duplicates or corrections. A high capture rate alone does not show that consequential fields were right.']},
    ],
  },
];

const sources = [
  {name:'NIST glossary: least privilege',url:'https://csrc.nist.gov/glossary/term/least_privilege',note:'Definition used for limiting system access to assigned AP work.'},
  {name:'CISA: Recognize and Report Phishing',url:'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',note:'Guidance used for suspicious messages, links, and independent reporting paths.'},
  {name:'IRS: About Form W-9',url:'https://www.irs.gov/forms-pubs/about-form-w-9',note:'First-party description of Form W-9 and its purpose.'},
];

function develop(topic: Topic, text: string, index: number) {
  const openers = [
    `Start with a working record that another reviewer can follow without opening a private inbox. For ${topic.situation}, keep the ${topic.evidence} together by stable identifiers.`,
    `This step is preparation, not approval. The specialist can collect and compare the ${topic.evidence}, while the ${topic.owner} answers the question that changes money, accounting, access, or supplier data.`,
    `Use the source record even when the queue is busy. For ${topic.situation}, a familiar supplier name or expected amount is not enough to fill a missing field.`,
    `Write the exception in plain terms: what the source says, what the other record says, the amount or item affected, and who must respond. Keep the earlier value after a correction.`,
    `Close the step from controlled evidence. A message saying the issue is handled should point to the approved decision or system result before the status changes.`,
  ];
  const closers = [
    `The handoff should include a current state, a named next owner, and a review date. If a source is missing, say so instead of borrowing a value from a prior transaction.`,
    `Access should follow least privilege: give the support role only the systems and actions needed for this task. Approval and payment release stay with authorized company employees.`,
    `If an email introduces a new link, contact, or payment instruction, stop and use the company security and verification route. Do not authenticate the request with details taken from the same message.`,
    `For quality review, sample one ordinary item and one exception. Check whether a second reviewer can reproduce the comparison and identify the decision owner.`,
    `This record is also useful when the item returns weeks later. Dates, versions, and identifiers prevent the next person from rebuilding the history from memory.`,
  ];
  return `${openers[index % openers.length]} ${text} ${closers[(index + 2) % closers.length]}`;
}

const publishedTopics = topics.filter(topic => topic.slug !== 'invoice-approval-mobile-device-controls');

export const sep18BlogPosts = publishedTopics.map(topic => ({slug:topic.slug,title:topic.title,excerpt:topic.excerpt,minutes:11}));

export const sep18BlogDetails = Object.fromEntries(publishedTopics.map(topic => [topic.slug, {
  thumbnail: `/blog-thumbnails/sep18-2026/${topic.slug}.svg`,
  shortAnswer: topic.excerpt,
  published: '2026-09-18',
  modified: '2026-09-18',
  mainKeyword: topic.keyword,
  sections: [
    {title:'A practical example',paragraphs:[develop(topic,topic.example,0),develop(topic,`Before work begins, agree on the authoritative source, the fields the specialist may prepare, the stop conditions, and the employee who can clear each exception. Link the written rule from the queue rather than asking the processor to remember it.`,1)]},
    ...topic.sections.map((section, sectionIndex) => ({title:section.title,paragraphs:section.guidance.map((paragraph,noteIndex)=>develop(topic,paragraph,sectionIndex+noteIndex+2))})),
    {title:'Put the routine into service',paragraphs:[develop(topic,`Begin with a small sample from the actual queue. Review the packet with the ${topic.owner}, correct unclear labels, and confirm that the escalation reaches someone who can answer. Add volume only after the record works for both routine items and exceptions.`,8),develop(topic,`For related implementation detail, use the ${topic.serviceLabel} service page to define the task boundary and the contact page to discuss a Philippines-based support role. Those pages help turn this control into a scoped handoff rather than a broad promise to handle AP.`,9)]},
  ],
  checklistTitle:'Review the packet before handoff',
  checklist:['Original source and stable identifiers retained','Difference or missing evidence stated plainly','Authorized employee owner named','Status, next action, and review date recorded','Approval and payment release kept outside support scope'],
  bodyLinks:[{href:`/services/${topic.service}`,label:topic.serviceLabel},{href:'/contact-us',label:'contact and scoping page'}],
  faqs:[
    {question:'What can an outsourced AP specialist prepare?',answer:`The specialist can collect and compare the evidence for ${topic.situation}, document the exception, maintain the queue, and send a focused question to the ${topic.owner}.`},
    {question:'Which decisions stay with the company?',answer:'Company employees retain invoice approval, accounting and tax judgments, vendor master authorization, bank detail verification, access ownership, and payment release.'},
    {question:'How should the team start?',answer:'Start with a small controlled sample, review both normal and exception cases, and expand only after the source, owner, and escalation path are clear.'},
  ],
  sources,
}]));
