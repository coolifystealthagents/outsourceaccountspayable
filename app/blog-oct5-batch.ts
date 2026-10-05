import type {Draft} from './blog-oct2-batch';

// October 5 cycle drafts remain unregistered until all 12 Blog articles and the
// paired five-article Research handoff pass the combined release gates.
export const oct5BlogDrafts: Draft[] = [
  {
    slug: 'split-shipment-invoice-receipt-allocation',
    title: 'Allocate one supplier invoice across split shipment receipts',
    excerpt: 'Reconcile a single billed quantity to several deliveries, receipt reversals, locations, and open purchase-order balances without manufacturing a match.',
    minutes: 12,
    detail: {
      thumbnail: '/blog-thumbnails/sep22-2026/goods-receipt-reversal-review.svg',
      shortAnswer: 'Build a line-level allocation that preserves every shipment and receipt event. Match only the quantity and value supported by valid receipts, show reversals separately, and route any remaining difference to the receiving or purchasing owner instead of creating receipt evidence.',
      published: null,
      modified: null,
      mainKeyword: 'split shipment invoice receipt allocation',
      sections: [
        {
          title: 'Start with the supplier demand, not the easiest receipt',
          paragraphs: [
            'A supplier may put several deliveries on one invoice even though the buyer received them on different days, at different sites, or against separate releases. Begin with an unchanged copy of the invoice and list each billed line, quantity, unit of measure, unit price, tax, freight, shipment reference, and purchase-order reference. Record the supplier account and company entity as well. Do not begin by selecting whichever open receipt makes the invoice total fit. That shortcut can consume evidence needed for another invoice and hide a missing delivery. The first working paper should describe what the supplier is asking the company to pay before it proposes where any portion belongs.',
            'Give the case one stable identifier and link the original purchase order, current order version, packing slips, carrier references, receiving records, earlier invoices, and credits. Preserve the invoice arrival time because discount eligibility and close cutoff may depend on when AP actually received a usable document. If the supplier combined orders or entities, separate those demands in the analysis without altering the source file. A split worksheet is an aid for review, not a replacement invoice. The source invoice, allocation, system postings, and owner decisions must remain connected so another reviewer can reconstruct the result later.'
          ]
        },
        {
          title: 'Create a receipt chronology for every delivery',
          paragraphs: [
            'Build the timeline before calculating the match. For each shipment, record the dispatch or service reference, destination, delivery date, receiving timestamp, receiver, purchase-order line, quantity accepted, quantity rejected, and system receipt number. Then add reversals, corrections, returns, and transfers in the order they occurred. A current receipt balance can look sufficient after several corrections while concealing that the original receipt belonged to another shipment. The chronology should retain both the first entry and the correcting entry. It should also distinguish a true reversal from an administrative reposting, since only the process owner can confirm whether the underlying goods or services remained accepted.',
            'Missing chronology points become focused questions. Ask the receiving owner about a delivery reference and date, not whether the whole invoice is acceptable. Ask purchasing which order line covered a substituted product, not whether AP should force the match. If a warehouse recorded the full quantity at one site and later transferred stock internally, confirm whether the transfer changes the purchasing receipt at all. AP support gathers these answers and cites the records. It does not create a backdated receipt or divide one receipt across unrelated lines simply because the invoice is approaching its due date.'
          ]
        },
        {
          title: 'Normalize units without erasing the supplier quantities',
          paragraphs: [
            'A split shipment often exposes unit differences. The order may use cases, one site may receive individual units, and the invoice may bill pallets. Show the supplier unit, purchasing unit, receiving unit, and approved conversion factor in separate columns. Retain the original quantities beside the normalized quantities. If a case should contain 24 units, identify the contract, item master, or approved order record that supports 24. Do not infer the pack size from the number needed to clear the invoice. When conversion evidence conflicts, isolate the affected line and let the master-data or purchasing owner decide which controlled value applies.',
            'Reconcile both quantity and value. Twelve cases at one price are not interchangeable with 288 individual units if a price amendment took effect between shipments. For every proposed allocation, show receipt quantity, invoice quantity assigned, unit price, extended amount, tax treatment, and remaining receipt balance. Keep freight and accessorial charges outside the product allocation unless the order and company procedure place them on the same line. A reviewer should be able to sum the proposed pieces back to the invoice and also see what remains available on each receipt after the proposed posting.'
          ]
        },
        {
          title: 'Handle reversals and partial acceptance as separate events',
          paragraphs: [
            'Suppose the supplier invoices 140 units from three deliveries. The system shows receipts for 50, 60, and 40, but the last receipt was later reversed by 10 after damage was found. The supported total is not automatically 150, and the 10-unit difference is not a rounding issue. Show 50 plus 60 plus 40 minus the 10-unit reversal, then connect the reversal to the return, replacement, credit, or unresolved claim. If the supplier shipped replacements, locate their delivery and acceptance record rather than restoring the old receipt. This keeps physical events, supplier claims, and system evidence in the same sequence.',
            'Partial acceptance needs the same care. A receiver may acknowledge that a truck arrived while rejecting part of the load. A service owner may accept one milestone and dispute another. Record accepted and disputed portions with their owners and supporting documents. Match only the accepted portion when company policy permits partial processing, and retain the balance in a named exception status. Do not label the whole invoice approved because one line passed. Conversely, do not lose the valid portion inside a general hold. The decision packet should make the payable portion and unresolved portion obvious without implying authority the preparer does not have.'
          ]
        },
        {
          title: 'Route the residual difference with an answerable question',
          paragraphs: [
            'After the allocation, calculate the invoice quantity and value not supported by valid receipts. Classify the reason using evidence: receipt not posted, receipt reversed, wrong order line, unit conversion conflict, price amendment, duplicate shipment reference, return in progress, or supplier billing error. Avoid a broad note such as "receipt mismatch." Name the document and amount at issue, the checks already performed, the owner who can resolve it, and the next review date. A precise residual lets the recipient answer without repeating the entire investigation and gives the aging queue a meaningful status.',
            'Provide the owner with the source invoice, allocation table, event chronology, relevant order version, receipt records, and one requested decision. Receiving confirms acceptance, purchasing interprets commercial scope, and finance controls posting treatment. If a corrected invoice or credit is required, contact the supplier through a verified channel and state the disputed reference without exposing unrelated account data. Keep the supplier response with the case. A promise to issue a credit does not close the difference; the credit must arrive, be validated, and be linked to the affected invoice or open item.'
          ]
        },
        {
          title: 'Prove the final posting and preserve unused receipt capacity',
          paragraphs: [
            'Once the owners resolve the exception, compare the approved allocation with the actual ERP posting. Confirm the invoice document number, order and receipt references consumed, quantities, values, tax, posting date, and any remaining hold. Check that a correction did not consume a different receipt or leave a duplicate invoice draft in another queue. Preserve evidence of the final match result instead of treating a successful system status as proof by itself. Automated matching can succeed on tolerance or configuration that the reviewer did not intend, so the posted references still need to agree with the approved packet.',
            'Review the receipt balances left behind. Each unused quantity should correspond to goods awaiting invoice, a known return, a cancelled commitment, or another documented state. An unexplained remainder can produce a later duplicate match or distort close reporting. For an outsourced AP lane, sample split-shipment cases by site, supplier, age, and exception cause. Look for repeated missing delivery references, delayed receipts, pack-size conflicts, and reversals posted after invoices arrive. The useful outcome is not a higher forced-match rate. It is a repeatable allocation that pays supported supplier demands while keeping unsupported quantities visible for the right owner.'
          ]
        }
      ],
      checklistTitle: 'Review the split-shipment allocation',
      checklist: ['Original invoice and shipment references remain unchanged', 'Receipt chronology includes reversals, returns, and corrections', 'Supplier, purchasing, and receiving units remain visible', 'Every proposed allocation reconciles quantity and value', 'Residual differences have a cause, owner, and next action', 'Actual posting matches the approved allocation'],
      bodyLinks: [{href: '/services/three-way-match-support', label: 'three-way match support'}, {href: '/contact-us', label: 'scope a controlled receipt exception lane'}],
      faqs: [
        {question: 'Can AP split one invoice across several receipts?', answer: 'Yes, when company procedure permits it and each allocation is supported by valid receipt and order evidence. AP should not invent or backdate receipts to complete the split.'},
        {question: 'What happens when one receipt was reversed?', answer: 'Keep the original receipt and reversal in the chronology, identify the reason, and match only the net quantity that remains supported unless an authorized owner provides new acceptance evidence.'},
        {question: 'Should unused receipt quantities disappear after posting?', answer: 'No. Reconcile each remainder to an expected invoice, return, cancellation, or named exception so it cannot silently support a later duplicate.'}
      ],
      sources: [
        {name: 'GAO Standards for Internal Control in the Federal Government', url: 'https://www.gao.gov/greenbook', note: 'Authoritative framework for documented transactions, assigned responsibility, and control evidence.'},
        {name: 'NIST least privilege glossary', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Supports reserving receipt creation and approval actions for authorized owners.'}
      ]
    }
  },
  {
    slug: 'supplier-portal-invoice-status-conflict',
    title: 'Resolve a supplier portal invoice status that conflicts with the AP ledger',
    excerpt: 'Trace portal messages, ERP documents, credits, payments, and synchronization timing before answering the supplier or changing a financial record.',
    minutes: 12,
    detail: {
      thumbnail: '/blog-thumbnails/sep23-2026/supplier-portal-invoice-download-log.svg',
      shortAnswer: 'Treat the portal and ERP as separate evidence sources. Capture each status with its timestamp and identifiers, reconstruct the invoice history, explain the conflict, and let the system or process owner approve any correction.',
      published: null,
      modified: null,
      mainKeyword: 'supplier portal invoice status conflict',
      sections: [
        {title: 'Capture both versions before changing either one', paragraphs: [
          'A supplier portal may say an invoice is approved while the ERP shows it blocked, or the portal may call an invoice unpaid after the ledger records a payment. Preserve both views before trying to refresh, resubmit, or edit anything. Record the portal name, supplier account, invoice number as displayed, amount, currency, status text, status timestamp, screenshot or export reference, and retrieval time. From the ERP, capture the legal entity, vendor ID, document number, posting status, block reason, due date, clearing document, and last update. The conflict is between two dated records, not between one correct screen and one screen that can safely be overwritten.',
          'Give the case a stable reference and retain the supplier message that prompted the review. A copied portal label in an email is not enough because labels can change after a synchronization job. If access permits, save the event history or audit log rather than only the current page. Do not expose another supplier account while collecting evidence. The AP specialist should use the minimum portal and ledger access required, and any export should go to the approved case location. This creates a defensible starting point if either system updates while the investigation is open.'
        ]},
        {title: 'Confirm that both systems refer to the same obligation', paragraphs: [
          'Normalize the identifiers without discarding their original form. Compare invoice number, supplier legal entity, internal vendor account, buyer entity, currency, gross amount, tax, purchase order, invoice date, and service or delivery period. Portal punctuation or leading zeros may differ from the ERP. A supplier group may also use one portal account for several legal entities. Similar totals do not prove identity. Document which fields agree, which differ, and which source supports each one. If the supplier uploaded a revised invoice under the same visible reference, retain both versions and their file hashes when the platform provides them.',
          'Search for linked credits, cancellations, rebills, duplicate records, and invoices entered under a different vendor account. A portal may mark the original invoice cancelled while the replacement is approved, whereas the ERP search may return only the original number. Conversely, an ERP clearing document may relate to a credit offset rather than cash payment. Build a small relationship map that names every document and the event connecting it. This prevents AP from telling the supplier that an invoice was paid when the ledger merely cleared it against another balance.'
        ]},
        {title: 'Reconstruct the timing between portal and ledger events', paragraphs: [
          'List upload, validation, workflow, approval, posting, block, payment proposal, release, settlement, clearing, and portal publication times in sequence. Note the timezone shown by each system. Some conflicts are temporary because the portal receives a scheduled outbound feed; others persist because an interface rejected a record. Identify the expected synchronization window from approved system documentation or the platform owner. Do not promise the supplier that a status will change at a particular hour based only on a previous case. Record what the current integration is designed to do and when the next controlled check will occur.',
          'A weekend, close freeze, or failed batch can explain delay without proving that the underlying invoice is valid. Check interface logs or approved monitoring reports when they are within scope. Capture the job identifier, processing time, record result, and error text. If technical access is outside the AP role, send the platform owner the exact supplier account, invoice identifier, event range, and observed difference. The question should be whether a specific event was transmitted and accepted, not whether the portal is generally broken.'
        ]},
        {title: 'Separate status wording from financial meaning', paragraphs: [
          'Portal terms such as received, accepted, approved, scheduled, paid, rejected, and closed may not map one-to-one to ERP states. Write down the controlled definition when it is available. "Accepted" may only mean the file passed format checks. "Approved" may mean a business owner completed workflow while a tax or duplicate block still prevents posting. "Paid" may be set when a payment file is created rather than when funds settle. Do not translate the label into a stronger promise for the supplier. Explain the factual event that the company can support and identify any remaining control step.',
          'The ERP also needs interpretation. A payment document can be voided or returned after clearing, and an invoice can be parked without being posted. Inspect the document chain rather than relying on a list icon. Treasury owns settlement confirmation and payment release. Finance owns accounting treatment. AP can gather payment reference, value date, clearing history, return notice, and remittance evidence, then route the question. This boundary is especially important when a supplier asks AP to resend funds based on a portal status. A screen conflict never authorizes a second payment.'
        ]},
        {title: 'Correct the source that owns the defective event', paragraphs: [
          'Once the cause is known, identify which record is wrong and who owns it. A failed outbound status may need interface reprocessing. An invoice attached to the wrong portal account may need supplier-platform administration. An incorrect ERP block may require the responsible reviewer. A supplier file with the wrong entity or amount may require a corrected invoice. Record the approved action and preserve the earlier state. Avoid editing both systems until their labels agree; simultaneous changes can erase the evidence needed to explain why they diverged.',
          'After correction, wait for the normal synchronization path when practical and capture the resulting event. If a manual portal note is necessary, state the verified facts, author, date, scope, and reason. Do not use a free-text note to simulate an interface success or financial posting. Contact the supplier through a verified account channel and distinguish the invoice status from the payment status. If the invoice remains blocked, explain the specific missing evidence or owner action without disclosing internal security rules or another party’s information.'
        ]},
        {title: 'Close with proof and monitor recurring conflicts', paragraphs: [
          'Close the case only when the portal and ledger states are either reconciled or their intentional difference is documented. Preserve final screenshots or exports, ERP document references, interface evidence, approvals, supplier communication, and verification time. Confirm that the status belongs to the correct account after refresh. If payment is involved, link the treasury-supported settlement or return evidence. A supplier acknowledgment can confirm that the message was received, but it does not replace internal proof that a posting or payment occurred.',
          'Track these cases by conflict type, interface, supplier account, age, and resolution owner. Repeated timing differences may call for clearer supplier messaging rather than manual corrections. Repeated identifier mismatches may point to normalization or account-mapping defects. For an outsourced AP desk, define which portal actions are preparation, which require platform administration, and which financial statements need an internal owner. The goal is a reliable answer trail: what each system showed, why the states differed, who corrected the owned source, and how the final state was verified.'
        ]}
      ],
      checklistTitle: 'Check the portal conflict record',
      checklist: ['Portal and ERP states are captured with timestamps', 'Invoice identity is proven across entity and supplier accounts', 'Credits, replacements, clearing, and returns are included', 'Status terms are mapped to supported events', 'The owner of the defective source approves correction', 'Final states and supplier communication are retained'],
      bodyLinks: [{href: '/services/vendor-statement-reconciliation', label: 'vendor statement reconciliation'}, {href: '/services/ap-inbox-management', label: 'AP inbox management'}],
      faqs: [
        {question: 'Is the portal status or ERP status authoritative?', answer: 'That depends on the event. Treat each as dated evidence, trace the underlying document chain, and have the owning system or process owner correct the defective record.'},
        {question: 'Does a portal status of paid prove settlement?', answer: 'Not necessarily. Confirm the portal definition and obtain the clearing, payment, and settlement or return evidence controlled by finance and treasury.'},
        {question: 'Should AP resubmit an invoice when statuses conflict?', answer: 'Not until duplicate, replacement, account-mapping, and synchronization checks show that resubmission is the approved correction.'}
      ],
      sources: [
        {name: 'GAO Standards for Internal Control in the Federal Government', url: 'https://www.gao.gov/greenbook', note: 'Supports reliable records, documented transactions, and assigned corrective responsibility.'},
        {name: 'NIST least privilege glossary', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Supports limiting portal and ledger actions to authorized roles.'}
      ]
    }
  },
  {
    slug: 'vendor-payment-terms-change-effective-date',
    title: 'Review the effective date of a vendor payment-terms change',
    excerpt: 'Separate master-data maintenance from commercial approval and determine which invoices a newly approved payment term should affect.',
    minutes: 12,
    detail: {
      thumbnail: '/blog-thumbnails/ap-vendor-change-request-workflow.svg',
      shortAnswer: 'Record the old and proposed terms, approval authority, effective-date rule, affected entities, and open invoices. Update master data only after approval, then review existing documents separately instead of assuming the new term rewrites them.',
      published: null,
      modified: null,
      mainKeyword: 'vendor payment terms change effective date',
      sections: [
        {title: 'Define the requested change in commercial terms', paragraphs: [
          'A request to change a vendor from net 30 to net 45 sounds like a single field update, but the date it takes effect can alter cash timing, discount eligibility, supplier expectations, and overdue reporting. Preserve the request and identify the supplier legal entity, internal vendor account, buying entity, currency, old term code, proposed term code, stated reason, requester, request date, and proposed effective date. Expand each code into its controlled meaning. Two systems may use the same label for different base dates, discount windows, or calendar adjustments, so the readable rule belongs in the review packet.',
          'Separate the term itself from related requests. A supplier may also ask for a new remit address, bank account, billing contact, or tax treatment. Those changes follow their own verification and approval paths. Likewise, a buyer may negotiate a term in a contract amendment that applies only to one business unit or category. Do not update every account under a similar supplier name. Name the exact entity and purchasing relationship covered by the evidence, and record accounts intentionally outside scope.'
        ]},
        {title: 'Locate authority for the term and its start date', paragraphs: [
          'Find the contract, purchase-order amendment, procurement approval, finance policy, supplier agreement, or other controlled record that authorizes the change. An email from an AP mailbox may transmit the request without proving commercial approval. Record the document version, signatories or approval reference, covered entities, effective-date language, and any conditions. If the agreement is silent about invoices already issued or orders already placed, raise that question to procurement or finance. The AP preparer should not choose the interpretation that produces the cleaner aging report.',
          'Dates need precise labels. Contract signature date, amendment effective date, order date, delivery date, service period, invoice date, invoice receipt date, posting date, and master-data update date can all differ. Ask the owner which event determines applicability and cite the answer. Avoid a note such as "effective immediately" unless the record says what immediate means and when it was approved. A clear rule might apply the new term to invoices issued on or after a date, to new purchase orders, or only to transactions under an amended agreement.'
        ]},
        {title: 'Inventory open documents before the master update', paragraphs: [
          'Export or record the supplier’s open invoices, parked documents, blocked invoices, unmatched receipts, credit memos, payment proposals, and disputes for the covered entity. Include invoice number, amount, currency, source term, calculated due date, discount date, order reference, status, and current proposal membership. This snapshot shows what the system believed before the change. It also prevents a later bulk recalculation from looking like the original invoice terms. Protect sensitive fields and store the inventory with the approved change case.',
          'Group the documents by the controlling event specified by the owner. Some invoices will clearly remain on the old term, some will clearly take the new term, and others may need individual review because they cover a transition period or use a conflicting purchase order. Keep the uncertain group visible. Do not assign the new term merely because the invoice is unpaid on the update date. Payment status is not evidence that the commercial rule changed, and an overdue invoice may still need supplier dispute handling under its original due date.'
        ]},
        {title: 'Prepare the master-data action without backdating evidence', paragraphs: [
          'The change instruction should name the vendor account, company or purchasing organization, old value, new value, system effective date, approved business effective date, and authorized reviewer. If the ERP does not support future-dated terms, document the controlled scheduling method and the owner responsible for execution. Do not enter an earlier system date to make the field appear as though it always held the new term. Preserve the change log and ticket reference so later reviewers can distinguish the agreement date from the actual system maintenance date.',
          'Use separation of duties required by company policy. The person assembling evidence need not be the person approving commercial terms or releasing payments. Limit access to the relevant master fields and avoid using broad administrator rights for a routine update. If the system change affects multiple company codes, test each scoped account rather than assuming the global view propagated correctly. Record accounts that failed or were intentionally excluded and route them to the appropriate master-data owner.'
        ]},
        {title: 'Handle existing invoices as explicit decisions', paragraphs: [
          'After the master update, review whether the ERP recalculated open documents. Some systems copy terms at invoice entry and leave them unchanged; others allow a manual due-date adjustment or mass update. Compare the pre-change snapshot with the current values. For every changed open invoice, retain the previous due date, new due date, reason, approval, and system document history. If the owner decides that existing invoices stay on the old term, confirm that the master update did not silently move them.',
          'Discounts deserve a separate check. A move to a longer net term does not necessarily change an early-payment discount, and a new discount should not be claimed on an invoice outside the approved scope. Payment proposals already prepared may also contain the old calculated date. Report affected proposals to the payment-run owner, but do not add, remove, or release payments without authorization. If a supplier statement continues to show the old due date, send the effective-date evidence through a verified contact and retain the response.'
        ]},
        {title: 'Verify the first transactions and close the change record', paragraphs: [
          'Test the next ordinary invoice covered by the new rule. Confirm that the correct supplier and buyer entity inherited the intended term, base date, due date, discount fields, and calendar adjustment. Compare those results with the approved agreement rather than only checking that the new code appears. Also sample an invoice that should remain under the old rule. This boundary test is more useful than checking one favorable example because it shows whether scope and timing were configured correctly.',
          'Close the case with the source request, commercial authority, effective-date interpretation, open-document inventory, approvals, system change log, exception decisions, supplier communication, and test results. Schedule a follow-up when the change is temporary or tied to a contract end date. In an outsourced AP arrangement, define which tasks are evidence gathering and controlled maintenance and which stay with procurement, finance, treasury, or legal. The final record should answer who approved the term, what transaction population it covers, when the system changed, and why each affected invoice has its current due date.'
        ]}
      ],
      checklistTitle: 'Review the payment-terms change',
      checklist: ['Old and proposed term rules are written out', 'Commercial authority and effective-date basis are cited', 'Covered supplier and buyer entities are explicit', 'Open documents were inventoried before maintenance', 'Existing invoice changes retain prior values and approval', 'Boundary transactions passed post-change testing'],
      bodyLinks: [{href: '/services/vendor-onboarding-administration', label: 'vendor onboarding administration'}, {href: '/services/payment-run-preparation', label: 'payment run preparation'}],
      faqs: [
        {question: 'Does changing vendor master terms update old invoices?', answer: 'System behavior varies, and commercial scope is a separate question. Inventory open documents, apply the approved effective-date rule, and retain any invoice-level changes.'},
        {question: 'Can AP decide whether the term applies retroactively?', answer: 'No. AP can identify affected documents and system behavior, while procurement or finance interprets the approved agreement and authorizes treatment.'},
        {question: 'What dates should the record preserve?', answer: 'Keep the request, approval, agreement effective date, relevant transaction dates, actual system maintenance time, and invoice-level change dates.'}
      ],
      sources: [
        {name: 'GAO Standards for Internal Control in the Federal Government', url: 'https://www.gao.gov/greenbook', note: 'Supports documented authorization, change history, and review of transactions.'},
        {name: 'NIST least privilege glossary', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Supports limiting vendor-master maintenance to the assigned role.'}
      ]
    }
  }
];

export const oct5BlogPosts = oct5BlogDrafts.map(({slug, title, excerpt, minutes}) => ({slug, title, excerpt, minutes}));
export const oct5BlogDetails = Object.fromEntries(oct5BlogDrafts.map(({slug, detail}) => [slug, detail]));
