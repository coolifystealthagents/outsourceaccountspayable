import type {Draft} from './blog-oct2-batch';
export const nov2BlogPublicationDate='2026-11-02';
export const nov2BlogDrafts:Draft[]=[
  {
    "slug": "ap-shared-service-center-sla-evidence",
    "title": "Write an AP Shared-Service SLA That Survives Month-End",
    "excerpt": "Build a shared-service SLA whose owned time, pause reasons, and case export reconcile to the service-credit journal before attainment is published.",
    "minutes": 9,
    "published": "2026-11-02",
    "detail": {
      "thumbnail": "/nov2-heroes/ap-shared-service-center-sla-evidence.webp",
      "shortAnswer": "An AP shared-service SLA survives month-end when owned time, pause reasons, and the case export reconcile to the service-credit journal before any attainment figure is published.",
      "published": "2026-11-02",
      "modified": "2026-11-02",
      "mainKeyword": "AP shared-service SLA",
      "sections": [
        {
          "title": "Frame the decision and the scope",
          "heading": "Frame the decision and the scope",
          "paragraphs": [
            "A shared-service SLA is only usable at month-end if it states which clock runs: calendar time, delivery-center business hours, or the requester's local hours. Mixing them makes a three-day target look missed in one region and met in another. Write the decision, the entity, the period, and the accountable owner at the top of the case so a reviewer does not have to infer them. The scope note should name the entity, the period, the system of record, and the person who can answer the open question for AP shared-service SLA evidence. State what is being decided and what is explicitly out of scope; an open question with no boundary will collect unrelated work. Give the case a stable key before any document is attached; a renamed case breaks the audit trail."
          ]
        },
        {
          "title": "Map the evidence and its source",
          "heading": "Map the evidence and its source",
          "paragraphs": [
            "The SLA pack should reconcile the ticket export to the service-management report before any percentage is published, because reopened tickets and merged duplicates change both the numerator and the denominator. Keep the original document separate from the working copy; annotation is allowed, but it cannot replace the source that the reviewer will inspect. The evidence map for AP shared-service SLA evidence should show the original, the working copy, and the final value as three separate states. The ticket queue export and the service-credit calculation should agree before the case is treated as complete, and any difference should be named rather than smoothed. Mark missing evidence as missing, with a reason, instead of leaving a blank that looks like a zero."
          ]
        },
        {
          "title": "Separate preparation from authority",
          "heading": "Separate preparation from authority",
          "paragraphs": [
            "Operations may calculate attainment, tag pause reasons, and prepare the credit schedule, but the service owner and finance controller decide whether a credit is owed and whether a root cause is accepted. When urgency pushes against the boundary, the case should pause and route the decision rather than letting the deadline expand the role. A delegation or standing approval needs a limit and an expiry before it can be used for AP shared-service SLA evidence. Preparation, comparison, and follow-up can sit with the AP team; approval, payment release, and vendor-master changes stay with the named owner. Name the approver and the limit in the case itself; a reference to a policy page is not a decision."
          ]
        },
        {
          "title": "Run the daily control",
          "heading": "Run the daily control",
          "paragraphs": [
            "Each morning the team should review the oldest owned tickets, unassigned handoffs, and cases paused for more than two business days, then record one next action and one owner per item. At the start of the shift, review the oldest items, the unassigned handoffs, and the cases paused for more than two business days, then set one next action per item. The daily queue review should end with an owner, a next action, and a due time for every open AP shared-service SLA evidence item. A status update should describe a verifiable event linked to the the service-management platform or the service-credit calculation, not a feeling about progress. Log the handoff only when the receiver acknowledges the case and the next action."
          ]
        },
        {
          "title": "Resolve exceptions and conflicts",
          "heading": "Resolve exceptions and conflicts",
          "paragraphs": [
            "A pause requested by the business unit is not AP delay. It should carry a reason code, the requesting role, and a resume date, and it should be excluded from owned time only with that evidence attached. A stop is not a service failure; it is the control working before the error reaches a supplier, a payment, or the ledger. When a service credit is claimed for a case that was paused waiting on the business unit rather than the AP team, preserve both the original and the corrected view and route one bounded question to the owner. If the exception repeats, record a reason code so the pattern can be reviewed without rereading every message in the thread. Do not let an escalation end in silence; an unanswered escalation remains open."
          ]
        },
        {
          "title": "Close, verify, and review",
          "heading": "Close, verify, and review",
          "paragraphs": [
            "At close the reviewer compares the SLA export to the service-credit journal, confirms every credit or waiver cites a case, and records whether the next month's target remains supportable. If the destination is another team, keep the case open until that team acknowledges receipt and the surviving record is confirmed. Record the next review date before the case closes so the control does not depend on memory. Close only when the destination field, the approver, and the time of the final check are all visible in the record. Test the close by opening one case from the queue export and tracing it to the final value without using a personal inbox."
          ]
        }
      ],
      "checklistTitle": "Review the AP shared-service SLA evidence record",
      "checklist": [
        "The SLA states the clock, start event, and stop event",
        "Paused time cites a requester, reason code, and resume date",
        "The case export reconciles to the service-management report",
        "Every service credit cites a case and an approval"
      ],
      "bodyLinks": [
        {
          "href": "/services",
          "label": "Accounts payable support services"
        },
        {
          "href": "/research",
          "label": "Source-backed AP research"
        },
        {
          "href": "/contact-us",
          "label": "Contact the team"
        }
      ],
      "faqs": [
        {
          "question": "Who decides whether a service credit is owed?",
          "answer": "The service owner and finance controller decide; AP operations may calculate and present the case evidence."
        },
        {
          "question": "Why split owned time from elapsed time?",
          "answer": "A request parked for business-unit instructions is not AP delay, and mixing the clocks misstates attainment."
        }
      ],
      "sources": [
        {
          "name": "GAO Standards for Internal Control in the Federal Government",
          "url": "https://www.gao.gov/greenbook",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "U.S. Small Business Administration — Manage Your Business",
          "url": "https://www.sba.gov/business-guide/manage-your-business",
          "note": "Checked November 2, 2026."
        }
      ]
    }
  },
  {
    "slug": "ap-invoice-capture-batch-reconciliation",
    "title": "Reconcile an Invoice Capture Batch Before Posting",
    "excerpt": "Use document count, page count, currency totals, and supplier-invoice identity to prove a capture batch is complete before it reaches matching.",
    "minutes": 9,
    "published": "2026-11-02",
    "detail": {
      "thumbnail": "/nov2-heroes/ap-invoice-capture-batch-reconciliation.webp",
      "shortAnswer": "A capture batch is ready to post only when document count, page count, currency totals, and supplier-invoice identity reconcile between the scanner manifest, OCR output, and posting receipt.",
      "published": "2026-11-02",
      "modified": "2026-11-02",
      "mainKeyword": "invoice capture batch reconciliation",
      "sections": [
        {
          "title": "Frame the decision and the scope",
          "heading": "Frame the decision and the scope",
          "paragraphs": [
            "An invoice capture batch should be treated like a financial population: the header count, page count, and gross amount by currency must reconcile to the released record set before matching begins. State what is being decided and what is explicitly out of scope; an open question with no boundary will collect unrelated work. Write the boundary before the queue opens: what enters invoice capture batch reconciliation, what stays out, and which decision is still unresolved. Name the person who can close the question and the date by which the answer is needed before the queue starts moving. State the date the boundary will be reviewed, because an old scope quietly becomes the new normal."
          ]
        },
        {
          "title": "Map the evidence and its source",
          "heading": "Map the evidence and its source",
          "paragraphs": [
            "The batch packet should include the scanner manifest, the OCR output file, the rejected-image list, and the posting receipt, each with a version or export time so a reviewer can reproduce the run. The scanner batch header and the OCR output file should agree before the case is treated as complete, and any difference should be named rather than smoothed. A value copied from the capture platform is only as current as its export time, so the timestamp belongs beside the number. Record the source, the version, and the observation time next to each value, because a stale extract and a current one look identical once copied into a summary. Attach the scanner batch header to the case and label its version; a screenshot without a source cannot be compared later."
          ]
        },
        {
          "title": "Separate preparation from authority",
          "heading": "Separate preparation from authority",
          "paragraphs": [
            "Capture operators may split, merge, and re-key documents inside the written exception rules, but they should not decide that a low-confidence field is acceptable for payment. Preparation, comparison, and follow-up can sit with the AP team; approval, payment release, and vendor-master changes stay with the named owner. Write the authority boundary into the case template so the reviewer does not have to infer who may act on invoice capture batch reconciliation. A complete packet is not an approval. The decision needs a person, a timestamp, and a scope that matches the action being taken. Route a scope change to the owner as a new decision rather than editing the earlier approval."
          ]
        },
        {
          "title": "Run the daily control",
          "heading": "Run the daily control",
          "paragraphs": [
            "At the start of each batch the lead checks the header against the output count, reviews the rejection queue, and assigns every unresolved page before releasing a single record. A status update should describe a verifiable event linked to the the capture platform or the OCR output file, not a feeling about progress. Compare the morning queue count with the prior close so a stable total does not hide an aging tail. Leave the next shift a queue that can be worked without reconstructing the day from chat history or personal notes. Compare the queue export to the prior day before reporting volume; recategorised work can look like new demand."
          ]
        },
        {
          "title": "Resolve exceptions and conflicts",
          "heading": "Resolve exceptions and conflicts",
          "paragraphs": [
            "Split and merged documents are the usual cause of count drift; they should be logged as a known transformation with the source page and the resulting record, not treated as a missing invoice. If the exception repeats, record a reason code so the pattern can be reviewed without rereading every message in the thread. A repeated exception should become a reason code in the queue, not a story retold in each thread. When evidence conflicts, preserve both values, record the time each was observed, and route one answerable question to the owner. Keep the stop reason, the release decision, and the resume time together so the delay can be reviewed without guessing."
          ]
        },
        {
          "title": "Close, verify, and review",
          "heading": "Close, verify, and review",
          "paragraphs": [
            "A clean control total does not prove a clean batch. Before posting, the reviewer also checks for duplicate supplier-invoice pairs created when a rescan was released alongside the original. Close only when the destination field, the approver, and the time of the final check are all visible in the record. The close note should show the final value, the approver, the time of the final check, and the surviving evidence reference. The reviewer should be able to trace the case from the original request to the final value without opening a personal inbox. Keep the prior procedure available so the next reviewer can compare the old and new states."
          ]
        }
      ],
      "checklistTitle": "Review the invoice capture batch reconciliation record",
      "checklist": [
        "Header document and page counts match the released records",
        "Rejected images have a reason and an owner",
        "Currency totals reconcile before matching",
        "Duplicate supplier-invoice pairs are tested, not assumed away"
      ],
      "bodyLinks": [
        {
          "href": "/services",
          "label": "Accounts payable support services"
        },
        {
          "href": "/research",
          "label": "Source-backed AP research"
        },
        {
          "href": "/contact-us",
          "label": "Contact the team"
        }
      ],
      "faqs": [
        {
          "question": "Can a clean count total be trusted?",
          "answer": "No. A count can agree while a duplicate record or a split page hides inside the batch."
        },
        {
          "question": "Who accepts a low-confidence field?",
          "answer": "The capture operator may flag it, but the AP reviewer or finance owner decides whether it is usable for matching."
        }
      ],
      "sources": [
        {
          "name": "GAO Standards for Internal Control in the Federal Government",
          "url": "https://www.gao.gov/greenbook",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "IRS Recordkeeping Guidance",
          "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "National Archives Records Management Guidance",
          "url": "https://www.archives.gov/records-mgmt",
          "note": "Checked November 2, 2026."
        }
      ]
    }
  },
  {
    "slug": "ap-vendor-credit-memo-application",
    "title": "Apply a Vendor Credit Memo Without Overstating the Payable",
    "excerpt": "Match a credit memo to the right supplier site, legal entity, and invoice, and keep paid-invoice credits open for an explicit refund decision.",
    "minutes": 9,
    "published": "2026-11-02",
    "detail": {
      "thumbnail": "/nov2-heroes/ap-vendor-credit-memo-application.webp",
      "shortAnswer": "Apply a vendor credit only against evidence that identifies the supplier site, legal entity, and target invoice; keep paid-invoice credits open for an explicit refund or offset decision.",
      "published": "2026-11-02",
      "modified": "2026-11-02",
      "mainKeyword": "vendor credit memo application",
      "sections": [
        {
          "title": "Frame the decision and the scope",
          "heading": "Frame the decision and the scope",
          "paragraphs": [
            "A vendor credit memo should be applied to a specific supplier site and legal entity, because a credit issued to one entity cannot lawfully reduce another entity's payable without an intercompany step. Name the person who can close the question and the date by which the answer is needed before the queue starts moving. A reviewer who cannot tell why vendor credit memo application is in scope will either widen it or ignore it, so the reason belongs in the case header. Write the decision, the entity, the period, and the accountable owner at the top of the case so a reviewer does not have to infer them. Record the request, the owner, and the open decision in one place so the scope does not drift between shifts."
          ]
        },
        {
          "title": "Map the evidence and its source",
          "heading": "Map the evidence and its source",
          "paragraphs": [
            "The case packet needs the credit memo image, the supplier statement line, the open-invoice list, any return authorization, and the application or refund receipt. Record the source, the version, and the observation time next to each value, because a stale extract and a current one look identical once copied into a summary. Before the case moves, compare the credit memo image with the supplier statement line and record which one governs when they disagree. Keep the original document separate from the working copy; annotation is allowed, but it cannot replace the source that the reviewer will inspect. Keep the original and the working extract in the same folder so the reviewer does not have to guess which is authoritative."
          ]
        },
        {
          "title": "Separate preparation from authority",
          "heading": "Separate preparation from authority",
          "paragraphs": [
            "AP may match, calculate, and propose an application, but the AP manager owns the application decision and treasury owns any refund or offset that changes cash. A complete packet is not an approval. The decision needs a person, a timestamp, and a scope that matches the action being taken. Preparation and approval may share a screen, but they should not share a person; the record should show both roles. When urgency pushes against the boundary, the case should pause and route the decision rather than letting the deadline expand the role. Record rejected and deferred requests too, because those choices shape the queue."
          ]
        },
        {
          "title": "Run the daily control",
          "heading": "Run the daily control",
          "paragraphs": [
            "Each day the team works the unapplied-credit report oldest first, records the candidate invoice and amount, and routes any credit older than the policy window to the manager for a disposition. Leave the next shift a queue that can be worked without reconstructing the day from chat history or personal notes. A case that has no next action should be treated as an exception even when its status says in progress. At the start of the shift, review the oldest items, the unassigned handoffs, and the cases paused for more than two business days, then set one next action per item. End the shift with a queue view that shows owner, age, next action, and missing evidence in one screen."
          ]
        },
        {
          "title": "Resolve exceptions and conflicts",
          "heading": "Resolve exceptions and conflicts",
          "paragraphs": [
            "When a credit references an invoice already paid, applying it to a different open invoice overstates the benefit. The case should record the paid invoice and wait for a refund or offset decision. When evidence conflicts, preserve both values, record the time each was observed, and route one answerable question to the owner. The exception record should include the condition, the decision, the releaser, and the time the dependent action resumed. A stop is not a service failure; it is the control working before the error reaches a supplier, a payment, or the ledger. When access blocks the work, record the system, the role requested, and the person who can grant it."
          ]
        },
        {
          "title": "Close, verify, and review",
          "heading": "Close, verify, and review",
          "paragraphs": [
            "At close the reviewer reconciles the unapplied-credit balance to the open credit memo list and confirms every applied credit cites the invoice and approval that support it. The reviewer should be able to trace the case from the original request to the final value without opening a personal inbox. After close, sample one routine and one reopened vendor credit memo application case and rebuild each from its evidence map. If the destination is another team, keep the case open until that team acknowledges receipt and the surviving record is confirmed. Report what moved, what did not, and what remains unknown rather than only the cases that closed."
          ]
        }
      ],
      "checklistTitle": "Review the vendor credit memo application record",
      "checklist": [
        "Supplier site and legal entity are identified",
        "The target invoice is open and matches the credit",
        "Paid-invoice credits stay visible for a refund decision",
        "The unapplied balance reconciles at close"
      ],
      "bodyLinks": [
        {
          "href": "/services",
          "label": "Accounts payable support services"
        },
        {
          "href": "/research",
          "label": "Source-backed AP research"
        },
        {
          "href": "/contact-us",
          "label": "Contact the team"
        }
      ],
      "faqs": [
        {
          "question": "Can a credit be applied to any open invoice from the supplier?",
          "answer": "No. It must match the legal entity and supplier site that issued the credit, and the invoice must be substantively linked."
        },
        {
          "question": "Who decides on a refund?",
          "answer": "Treasury owns the cash decision; AP may prepare the evidence and the proposed application."
        }
      ],
      "sources": [
        {
          "name": "GAO Standards for Internal Control in the Federal Government",
          "url": "https://www.gao.gov/greenbook",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "IRS Recordkeeping Guidance",
          "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "U.S. Small Business Administration — Manage Your Business",
          "url": "https://www.sba.gov/business-guide/manage-your-business",
          "note": "Checked November 2, 2026."
        }
      ]
    }
  },
  {
    "slug": "ap-payment-remittance-advice-failure",
    "title": "Handle a Failed Remittance Advice Delivery",
    "excerpt": "Treat remittance delivery as a separate control from payment settlement, with a fallback channel and a supplier acknowledgment.",
    "minutes": 9,
    "published": "2026-11-02",
    "detail": {
      "thumbnail": "/nov2-heroes/ap-payment-remittance-advice-failure.webp",
      "shortAnswer": "Track remittance delivery as its own control: settlement proves cash moved, not that the supplier received the detail needed to apply it.",
      "published": "2026-11-02",
      "modified": "2026-11-02",
      "mainKeyword": "remittance advice delivery failure",
      "sections": [
        {
          "title": "Frame the decision and the scope",
          "heading": "Frame the decision and the scope",
          "paragraphs": [
            "Settlement and remittance delivery are separate events. A payment can clear the bank while the supplier still lacks the detail needed to apply cash, so the case cannot close on bank status alone. Write the decision, the entity, the period, and the accountable owner at the top of the case so a reviewer does not have to infer them. The scope note should name the entity, the period, the system of record, and the person who can answer the open question for remittance advice delivery failure. State what is being decided and what is explicitly out of scope; an open question with no boundary will collect unrelated work. Give the case a stable key before any document is attached; a renamed case breaks the audit trail."
          ]
        },
        {
          "title": "Map the evidence and its source",
          "heading": "Map the evidence and its source",
          "paragraphs": [
            "The evidence set should include the payment file receipt, the remittance send log, any bounce message, the portal upload record, and the supplier's acknowledgment. Keep the original document separate from the working copy; annotation is allowed, but it cannot replace the source that the reviewer will inspect. The evidence map for remittance advice delivery failure should show the original, the working copy, and the final value as three separate states. The payment file receipt and the remittance email bounce should agree before the case is treated as complete, and any difference should be named rather than smoothed. Mark missing evidence as missing, with a reason, instead of leaving a blank that looks like a zero."
          ]
        },
        {
          "title": "Separate preparation from authority",
          "heading": "Separate preparation from authority",
          "paragraphs": [
            "Treasury operations may resend, upload to a portal, or call the supplier's AP desk, but changing the remittance address in the vendor master remains a vendor-master owner decision. When urgency pushes against the boundary, the case should pause and route the decision rather than letting the deadline expand the role. A delegation or standing approval needs a limit and an expiry before it can be used for remittance advice delivery failure. Preparation, comparison, and follow-up can sit with the AP team; approval, payment release, and vendor-master changes stay with the named owner. Name the approver and the limit in the case itself; a reference to a policy page is not a decision."
          ]
        },
        {
          "title": "Run the daily control",
          "heading": "Run the daily control",
          "paragraphs": [
            "The daily check compares settled payments to delivered advice, then works the undelivered list by age and supplier value before the next payment run closes. At the start of the shift, review the oldest items, the unassigned handoffs, and the cases paused for more than two business days, then set one next action per item. The daily queue review should end with an owner, a next action, and a due time for every open remittance advice delivery failure item. A status update should describe a verifiable event linked to the the payment bank portal or the remittance email bounce, not a feeling about progress. Log the handoff only when the receiver acknowledges the case and the next action."
          ]
        },
        {
          "title": "Resolve exceptions and conflicts",
          "heading": "Resolve exceptions and conflicts",
          "paragraphs": [
            "A bounced message caused by an attachment filter is not the same as a wrong address. Record the failure code and the channel used for the successful retry, then route repeated bounces to the vendor master as a contact defect. A stop is not a service failure; it is the control working before the error reaches a supplier, a payment, or the ledger. When the payment cleared the bank but the remittance email bounced because the supplier domain rejected the attachment, preserve both the original and the corrected view and route one bounded question to the owner. If the exception repeats, record a reason code so the pattern can be reviewed without rereading every message in the thread. Do not let an escalation end in silence; an unanswered escalation remains open."
          ]
        },
        {
          "title": "Close, verify, and review",
          "heading": "Close, verify, and review",
          "paragraphs": [
            "At month-end the reviewer samples delivered and failed advice, confirms the supplier acknowledged the fallback channel, and records whether any payment remains unapplied because the advice is still missing. If the destination is another team, keep the case open until that team acknowledges receipt and the surviving record is confirmed. Record the next review date before the case closes so the control does not depend on memory. Close only when the destination field, the approver, and the time of the final check are all visible in the record. Test the close by opening one case from the queue export and tracing it to the final value without using a personal inbox."
          ]
        }
      ],
      "checklistTitle": "Review the remittance advice delivery failure record",
      "checklist": [
        "Settled payments are compared to delivered advice",
        "A fallback delivery channel is recorded with the retry",
        "Repeated bounces route to the vendor master as a contact defect",
        "Open unapplied cash is explained at month-end"
      ],
      "bodyLinks": [
        {
          "href": "/services",
          "label": "Accounts payable support services"
        },
        {
          "href": "/research",
          "label": "Source-backed AP research"
        },
        {
          "href": "/contact-us",
          "label": "Contact the team"
        }
      ],
      "faqs": [
        {
          "question": "Is a payment complete when the bank settles it?",
          "answer": "No. The supplier also needs remittance detail to apply cash, so delivery remains open until acknowledged."
        },
        {
          "question": "Can AP change the remittance address?",
          "answer": "The vendor-master owner owns address changes; treasury may use an approved fallback channel for the current payment."
        }
      ],
      "sources": [
        {
          "name": "Federal Reserve Financial Services FedACH",
          "url": "https://www.frbservices.org/financial-services/ach",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "NIST Cybersecurity Framework",
          "url": "https://www.nist.gov/cyberframework",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "FBI Business Email Compromise",
          "url": "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/business-email-compromise",
          "note": "Checked November 2, 2026."
        }
      ]
    }
  },
  {
    "slug": "ap-purchase-card-receipt-reconciliation",
    "title": "Reconcile Purchase Card Receipts to the AP Ledger",
    "excerpt": "Rework purchase card reconciliation at the transaction level so reversals, missing receipts, and tax treatment stay visible.",
    "minutes": 9,
    "published": "2026-11-02",
    "detail": {
      "thumbnail": "/nov2-heroes/ap-purchase-card-receipt-reconciliation.webp",
      "shortAnswer": "Reconcile purchase card activity transaction by transaction, and keep missing receipts and reversals visible instead of letting a statement total hide them.",
      "published": "2026-11-02",
      "modified": "2026-11-02",
      "mainKeyword": "purchase card receipt reconciliation",
      "sections": [
        {
          "title": "Frame the decision and the scope",
          "heading": "Frame the decision and the scope",
          "paragraphs": [
            "A purchase card program reconciles at the transaction level, because reversals, declines, and foreign-currency conversions can make the statement total agree while individual receipts do not. State what is being decided and what is explicitly out of scope; an open question with no boundary will collect unrelated work. Write the boundary before the queue opens: what enters purchase card receipt reconciliation, what stays out, and which decision is still unresolved. Name the person who can close the question and the date by which the answer is needed before the queue starts moving. State the date the boundary will be reviewed, because an old scope quietly becomes the new normal."
          ]
        },
        {
          "title": "Map the evidence and its source",
          "heading": "Map the evidence and its source",
          "paragraphs": [
            "The packet should join the issuer transaction file, the receipt image, the cardholder statement, the cost-center coding, and the ledger posting receipt on one transaction identifier. The card issuer transaction file and the receipt images should agree before the case is treated as complete, and any difference should be named rather than smoothed. A value copied from the card management platform is only as current as its export time, so the timestamp belongs beside the number. Record the source, the version, and the observation time next to each value, because a stale extract and a current one look identical once copied into a summary. Attach the card issuer transaction file to the case and label its version; a screenshot without a source cannot be compared later."
          ]
        },
        {
          "title": "Separate preparation from authority",
          "heading": "Separate preparation from authority",
          "paragraphs": [
            "Cardholders and their managers own the business purpose and receipt, the card administrator owns the program rules, and AP may prepare the match without approving the spend. Preparation, comparison, and follow-up can sit with the AP team; approval, payment release, and vendor-master changes stay with the named owner. Write the authority boundary into the case template so the reviewer does not have to infer who may act on purchase card receipt reconciliation. A complete packet is not an approval. The decision needs a person, a timestamp, and a scope that matches the action being taken. Route a scope change to the owner as a new decision rather than editing the earlier approval."
          ]
        },
        {
          "title": "Run the daily control",
          "heading": "Run the daily control",
          "paragraphs": [
            "Each cycle the team clears matched transactions first, then works unmatched receipts by age and cardholder, and escalates any transaction without a receipt past the policy window to the manager. A status update should describe a verifiable event linked to the the card management platform or the receipt images, not a feeling about progress. Compare the morning queue count with the prior close so a stable total does not hide an aging tail. Leave the next shift a queue that can be worked without reconstructing the day from chat history or personal notes. Compare the queue export to the prior day before reporting volume; recategorised work can look like new demand."
          ]
        },
        {
          "title": "Resolve exceptions and conflicts",
          "heading": "Resolve exceptions and conflicts",
          "paragraphs": [
            "A receipt for a reversed transaction should be closed as reversed, not forced to a ledger match. Missing receipts should age visibly rather than being written off without a manager decision. If the exception repeats, record a reason code so the pattern can be reviewed without rereading every message in the thread. A repeated exception should become a reason code in the queue, not a story retold in each thread. When evidence conflicts, preserve both values, record the time each was observed, and route one answerable question to the owner. Keep the stop reason, the release decision, and the resume time together so the delay can be reviewed without guessing."
          ]
        },
        {
          "title": "Close, verify, and review",
          "heading": "Close, verify, and review",
          "paragraphs": [
            "At close the reviewer reconciles the card clearing account to the issuer file and confirms every unmatched item has an owner, an age, and a documented disposition. Close only when the destination field, the approver, and the time of the final check are all visible in the record. The close note should show the final value, the approver, the time of the final check, and the surviving evidence reference. The reviewer should be able to trace the case from the original request to the final value without opening a personal inbox. Keep the prior procedure available so the next reviewer can compare the old and new states."
          ]
        }
      ],
      "checklistTitle": "Review the purchase card receipt reconciliation record",
      "checklist": [
        "Transactions match the issuer file, not only the statement",
        "Reversals are closed as reversals with evidence",
        "Missing receipts age to the cardholder's manager",
        "Card clearing account reconciles at close"
      ],
      "bodyLinks": [
        {
          "href": "/services",
          "label": "Accounts payable support services"
        },
        {
          "href": "/research",
          "label": "Source-backed AP research"
        },
        {
          "href": "/contact-us",
          "label": "Contact the team"
        }
      ],
      "faqs": [
        {
          "question": "Why not reconcile the statement total?",
          "answer": "Declines, reversals, and currency conversions can make the total agree while individual transactions do not."
        },
        {
          "question": "Who owns a missing receipt?",
          "answer": "The cardholder supplies it, the manager decides on escalation, and the program administrator applies the policy."
        }
      ],
      "sources": [
        {
          "name": "GSA SmartPay Purchase Card Program",
          "url": "https://smartpay.gsa.gov/",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "PCI Security Standards Council",
          "url": "https://www.pcisecuritystandards.org/",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "IRS Recordkeeping Guidance",
          "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
          "note": "Checked November 2, 2026."
        }
      ]
    }
  },
  {
    "slug": "ap-invoice-approval-delegation-expiry",
    "title": "Audit Delegated Approvals That Outlive Their Authority",
    "excerpt": "Test delegated approvals against the authority in force at the timestamp, and ratify late approvals instead of rewriting the record.",
    "minutes": 9,
    "published": "2026-11-02",
    "detail": {
      "thumbnail": "/nov2-heroes/ap-invoice-approval-delegation-expiry.webp",
      "shortAnswer": "Test delegated approvals against the authority in force at the timestamp, and ratify late approvals instead of rewriting the record.",
      "published": "2026-11-02",
      "modified": "2026-11-02",
      "mainKeyword": "delegated approval expiry",
      "sections": [
        {
          "title": "Frame the decision and the scope",
          "heading": "Frame the decision and the scope",
          "paragraphs": [
            "A delegation is a time-bounded authority record, not a favor in an email. It needs a start date, an end date, a scope, a limit, and a named backup before it is used. Name the person who can close the question and the date by which the answer is needed before the queue starts moving. A reviewer who cannot tell why delegated approval expiry is in scope will either widen it or ignore it, so the reason belongs in the case header. Write the decision, the entity, the period, and the accountable owner at the top of the case so a reviewer does not have to infer them. Record the request, the owner, and the open decision in one place so the scope does not drift between shifts."
          ]
        },
        {
          "title": "Map the evidence and its source",
          "heading": "Map the evidence and its source",
          "paragraphs": [
            "The audit packet should join the delegation register, the approver roster, the approval timestamps, and the policy limit table so each approval can be tested against the authority in force on that date. Record the source, the version, and the observation time next to each value, because a stale extract and a current one look identical once copied into a summary. Before the case moves, compare the delegation register with the approver roster effective dates and record which one governs when they disagree. Keep the original document separate from the working copy; annotation is allowed, but it cannot replace the source that the reviewer will inspect. Keep the original and the working extract in the same folder so the reviewer does not have to guess which is authoritative."
          ]
        },
        {
          "title": "Separate preparation from authority",
          "heading": "Separate preparation from authority",
          "paragraphs": [
            "The delegating manager owns the scope and the end date, the workflow administrator owns the system record, and AP may identify and route an out-of-window approval without editing its history. A complete packet is not an approval. The decision needs a person, a timestamp, and a scope that matches the action being taken. Preparation and approval may share a screen, but they should not share a person; the record should show both roles. When urgency pushes against the boundary, the case should pause and route the decision rather than letting the deadline expand the role. Record rejected and deferred requests too, because those choices shape the queue."
          ]
        },
        {
          "title": "Run the daily control",
          "heading": "Run the daily control",
          "paragraphs": [
            "Each week the team compares approvals to the delegation register, focusing on the first and last two days of each window, and routes exceptions for ratification before the next payment run. Leave the next shift a queue that can be worked without reconstructing the day from chat history or personal notes. A case that has no next action should be treated as an exception even when its status says in progress. At the start of the shift, review the oldest items, the unassigned handoffs, and the cases paused for more than two business days, then set one next action per item. End the shift with a queue view that shows owner, age, next action, and missing evidence in one screen."
          ]
        },
        {
          "title": "Resolve exceptions and conflicts",
          "heading": "Resolve exceptions and conflicts",
          "paragraphs": [
            "An approval that lands after the end date is a control exception even when the same person would have approved it. The record should show the actual timestamp and the ratification decision, not a corrected one. When evidence conflicts, preserve both values, record the time each was observed, and route one answerable question to the owner. The exception record should include the condition, the decision, the releaser, and the time the dependent action resumed. A stop is not a service failure; it is the control working before the error reaches a supplier, a payment, or the ledger. When access blocks the work, record the system, the role requested, and the person who can grant it."
          ]
        },
        {
          "title": "Close, verify, and review",
          "heading": "Close, verify, and review",
          "paragraphs": [
            "At close the reviewer samples approvals near delegation boundaries, confirms the register was current, and records whether any late approval changed a payment that had already been released. The reviewer should be able to trace the case from the original request to the final value without opening a personal inbox. After close, sample one routine and one reopened delegated approval expiry case and rebuild each from its evidence map. If the destination is another team, keep the case open until that team acknowledges receipt and the surviving record is confirmed. Report what moved, what did not, and what remains unknown rather than only the cases that closed."
          ]
        }
      ],
      "checklistTitle": "Review the delegated approval expiry record",
      "checklist": [
        "Every delegation has a start date, end date, scope, and limit",
        "Boundary dates are tested, not only mid-window approvals",
        "Late approvals are ratified without editing timestamps",
        "The register and workflow agree at close"
      ],
      "bodyLinks": [
        {
          "href": "/services",
          "label": "Accounts payable support services"
        },
        {
          "href": "/research",
          "label": "Source-backed AP research"
        },
        {
          "href": "/contact-us",
          "label": "Contact the team"
        }
      ],
      "faqs": [
        {
          "question": "Is an email delegation sufficient?",
          "answer": "No. It needs scope, limits, and dates recorded in the approval system so the authority can be tested."
        },
        {
          "question": "What happens to an out-of-window approval?",
          "answer": "It is recorded as an exception and routed for ratification; the original timestamp is preserved."
        }
      ],
      "sources": [
        {
          "name": "GAO Standards for Internal Control in the Federal Government",
          "url": "https://www.gao.gov/greenbook",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "NIST Cybersecurity Framework",
          "url": "https://www.nist.gov/cyberframework",
          "note": "Checked November 2, 2026."
        }
      ]
    }
  },
  {
    "slug": "ap-close-cutoff-accrual-reversal",
    "title": "Control Accrual Reversals at AP Month-End Close",
    "excerpt": "Tie every AP accrual to the evidence that created it and to a reversal rule that matches how the invoice actually arrives.",
    "minutes": 9,
    "published": "2026-11-02",
    "detail": {
      "thumbnail": "/nov2-heroes/ap-close-cutoff-accrual-reversal.webp",
      "shortAnswer": "Tie every AP accrual to the evidence that created it and to a reversal rule that matches how the invoice arrives, then reconcile the register to GR/IR before close.",
      "published": "2026-11-02",
      "modified": "2026-11-02",
      "mainKeyword": "AP accrual reversal control",
      "sections": [
        {
          "title": "Frame the decision and the scope",
          "heading": "Frame the decision and the scope",
          "paragraphs": [
            "An AP accrual is only supportable when it points to the receipt, contract, or service evidence that created the obligation, and when its reversal rule matches how the invoice will actually arrive. Write the decision, the entity, the period, and the accountable owner at the top of the case so a reviewer does not have to infer them. The scope note should name the entity, the period, the system of record, and the person who can answer the open question for AP accrual reversal control. State what is being decided and what is explicitly out of scope; an open question with no boundary will collect unrelated work. Give the case a stable key before any document is attached; a renamed case breaks the audit trail."
          ]
        },
        {
          "title": "Map the evidence and its source",
          "heading": "Map the evidence and its source",
          "paragraphs": [
            "The close packet should include the accrual register, the reversal journal, the goods-receipt-not-invoiced report, and the close checklist sign-off, tied together by the same reference. Keep the original document separate from the working copy; annotation is allowed, but it cannot replace the source that the reviewer will inspect. The evidence map for AP accrual reversal control should show the original, the working copy, and the final value as three separate states. The accrual register and the reversal journal should agree before the case is treated as complete, and any difference should be named rather than smoothed. Mark missing evidence as missing, with a reason, instead of leaving a blank that looks like a zero."
          ]
        },
        {
          "title": "Separate preparation from authority",
          "heading": "Separate preparation from authority",
          "paragraphs": [
            "AP may prepare the accrual schedule and the reversal entries, but the assistant controller owns the accounting estimate and any decision to change a reversal pattern. When urgency pushes against the boundary, the case should pause and route the decision rather than letting the deadline expand the role. A delegation or standing approval needs a limit and an expiry before it can be used for AP accrual reversal control. Preparation, comparison, and follow-up can sit with the AP team; approval, payment release, and vendor-master changes stay with the named owner. Name the approver and the limit in the case itself; a reference to a policy page is not a decision."
          ]
        },
        {
          "title": "Run the daily control",
          "heading": "Run the daily control",
          "paragraphs": [
            "During close the team reconciles the GR/IR report to the accrual register, flags items with no receipt or no expected invoice, and assigns each open balance to a reviewer. At the start of the shift, review the oldest items, the unassigned handoffs, and the cases paused for more than two business days, then set one next action per item. The daily queue review should end with an owner, a next action, and a due time for every open AP accrual reversal control item. A status update should describe a verifiable event linked to the the ERP general ledger or the reversal journal, not a feeling about progress. Log the handoff only when the receiver acknowledges the case and the next action."
          ]
        },
        {
          "title": "Resolve exceptions and conflicts",
          "heading": "Resolve exceptions and conflicts",
          "paragraphs": [
            "A reversal that posts before the invoice is matched creates a temporary understatement. The case should record both dates and explain the bridge rather than netting the difference without a note. A stop is not a service failure; it is the control working before the error reaches a supplier, a payment, or the ledger. When an accrual is reversed automatically in the next period even though the invoice arrived before the reversal posted, preserve both the original and the corrected view and route one bounded question to the owner. If the exception repeats, record a reason code so the pattern can be reviewed without rereading every message in the thread. Do not let an escalation end in silence; an unanswered escalation remains open."
          ]
        },
        {
          "title": "Close, verify, and review",
          "heading": "Close, verify, and review",
          "paragraphs": [
            "After close the reviewer tests a sample of reversed accruals against the following period's invoices and records whether the reversal rule still matches the underlying obligation. If the destination is another team, keep the case open until that team acknowledges receipt and the surviving record is confirmed. Record the next review date before the case closes so the control does not depend on memory. Close only when the destination field, the approver, and the time of the final check are all visible in the record. Test the close by opening one case from the queue export and tracing it to the final value without using a personal inbox."
          ]
        }
      ],
      "checklistTitle": "Review the AP accrual reversal control record",
      "checklist": [
        "Each accrual references receipt, contract, or service evidence",
        "The reversal rule matches the expected invoice path",
        "GR/IR reconciles to the accrual register",
        "Reversal timing differences carry a bridge note"
      ],
      "bodyLinks": [
        {
          "href": "/services",
          "label": "Accounts payable support services"
        },
        {
          "href": "/research",
          "label": "Source-backed AP research"
        },
        {
          "href": "/contact-us",
          "label": "Contact the team"
        }
      ],
      "faqs": [
        {
          "question": "Who owns the accounting estimate?",
          "answer": "The assistant controller owns the estimate and any change to a reversal pattern; AP prepares the support."
        },
        {
          "question": "What if the invoice arrives just after close?",
          "answer": "Record both dates and explain the bridge instead of netting the difference without a note."
        }
      ],
      "sources": [
        {
          "name": "GAO Standards for Internal Control in the Federal Government",
          "url": "https://www.gao.gov/greenbook",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "IRS Recordkeeping Guidance",
          "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "U.S. Government Accountability Office",
          "url": "https://www.gao.gov/",
          "note": "Checked November 2, 2026."
        }
      ]
    }
  },
  {
    "slug": "ap-duplicate-vendor-master-merge",
    "title": "Merge Duplicate Vendor Records Without Losing Payment History",
    "excerpt": "Merge duplicate vendors only on identity evidence, preserve the retired record as a cross-reference, and never merge across conflicting bank details.",
    "minutes": 9,
    "published": "2026-11-02",
    "detail": {
      "thumbnail": "/nov2-heroes/ap-duplicate-vendor-master-merge.webp",
      "shortAnswer": "Merge duplicate vendors only on identity evidence, preserve the retired record as a cross-reference, and never merge across conflicting bank details without fresh verification.",
      "published": "2026-11-02",
      "modified": "2026-11-02",
      "mainKeyword": "duplicate vendor master merge",
      "sections": [
        {
          "title": "Frame the decision and the scope",
          "heading": "Frame the decision and the scope",
          "paragraphs": [
            "A vendor merge is an identity decision. Name similarity is a lead, not proof; the merge should rest on tax identifier, legal name, bank account, and open-item evidence. State what is being decided and what is explicitly out of scope; an open question with no boundary will collect unrelated work. Write the boundary before the queue opens: what enters duplicate vendor master merge, what stays out, and which decision is still unresolved. Name the person who can close the question and the date by which the answer is needed before the queue starts moving. State the date the boundary will be reviewed, because an old scope quietly becomes the new normal."
          ]
        },
        {
          "title": "Map the evidence and its source",
          "heading": "Map the evidence and its source",
          "paragraphs": [
            "The packet should include the vendor master extract, the tax-identifier match, the bank-account comparison, the open-item list, and the merge audit log. The vendor master extract and the tax identifier match should agree before the case is treated as complete, and any difference should be named rather than smoothed. A value copied from the vendor master is only as current as its export time, so the timestamp belongs beside the number. Record the source, the version, and the observation time next to each value, because a stale extract and a current one look identical once copied into a summary. Attach the vendor master extract to the case and label its version; a screenshot without a source cannot be compared later."
          ]
        },
        {
          "title": "Separate preparation from authority",
          "heading": "Separate preparation from authority",
          "paragraphs": [
            "AP may prepare the identity comparison and the open-item impact, but the vendor master owner authorizes the merge and treasury or security owns any bank-detail change. Preparation, comparison, and follow-up can sit with the AP team; approval, payment release, and vendor-master changes stay with the named owner. Write the authority boundary into the case template so the reviewer does not have to infer who may act on duplicate vendor master merge. A complete packet is not an approval. The decision needs a person, a timestamp, and a scope that matches the action being taken. Route a scope change to the owner as a new decision rather than editing the earlier approval."
          ]
        },
        {
          "title": "Run the daily control",
          "heading": "Run the daily control",
          "paragraphs": [
            "Before a merge, the team confirms open invoices, credits, and pending payments on both records, then tests the survivor record in a non-production copy where the ERP supports it. A status update should describe a verifiable event linked to the the vendor master or the tax identifier match, not a feeling about progress. Compare the morning queue count with the prior close so a stable total does not hide an aging tail. Leave the next shift a queue that can be worked without reconstructing the day from chat history or personal notes. Compare the queue export to the prior day before reporting volume; recategorised work can look like new demand."
          ]
        },
        {
          "title": "Resolve exceptions and conflicts",
          "heading": "Resolve exceptions and conflicts",
          "paragraphs": [
            "Two records with the same tax identifier but different remit-to addresses or currencies may be legitimate separate sites. Conflicting bank details should trigger a fresh callback, not a merge. If the exception repeats, record a reason code so the pattern can be reviewed without rereading every message in the thread. A repeated exception should become a reason code in the queue, not a story retold in each thread. When evidence conflicts, preserve both values, record the time each was observed, and route one answerable question to the owner. Keep the stop reason, the release decision, and the resume time together so the delay can be reviewed without guessing."
          ]
        },
        {
          "title": "Close, verify, and review",
          "heading": "Close, verify, and review",
          "paragraphs": [
            "After the merge the reviewer confirms the retired record remains as a cross-reference, open items moved intact, and historical payments still resolve to the survivor. Close only when the destination field, the approver, and the time of the final check are all visible in the record. The close note should show the final value, the approver, the time of the final check, and the surviving evidence reference. The reviewer should be able to trace the case from the original request to the final value without opening a personal inbox. Keep the prior procedure available so the next reviewer can compare the old and new states."
          ]
        }
      ],
      "checklistTitle": "Review the duplicate vendor master merge record",
      "checklist": [
        "Identity rests on tax ID, legal name, and bank evidence",
        "Open items are mapped before the merge",
        "The retired record remains as a cross-reference",
        "Conflicting bank details trigger a fresh callback"
      ],
      "bodyLinks": [
        {
          "href": "/services",
          "label": "Accounts payable support services"
        },
        {
          "href": "/research",
          "label": "Source-backed AP research"
        },
        {
          "href": "/contact-us",
          "label": "Contact the team"
        }
      ],
      "faqs": [
        {
          "question": "Is a similar vendor name enough to merge?",
          "answer": "No. Name similarity is a lead; tax identifier, legal name, and bank evidence support the decision."
        },
        {
          "question": "Can historical payments be lost in a merge?",
          "answer": "They should not be. The retired record is preserved as a cross-reference so history still resolves."
        }
      ],
      "sources": [
        {
          "name": "GAO Standards for Internal Control in the Federal Government",
          "url": "https://www.gao.gov/greenbook",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "U.S. Treasury Sanctions List Service",
          "url": "https://ofac.treasury.gov/sanctions-list-service",
          "note": "Checked November 2, 2026."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Checked November 2, 2026."
        }
      ]
    }
  }
];
export const nov2BlogPosts=nov2BlogDrafts.map(({slug,title,excerpt,minutes})=>({slug,title,excerpt,minutes}));
export const nov2BlogDetails=Object.fromEntries(nov2BlogDrafts.map(post=>[post.slug,post.detail]));
