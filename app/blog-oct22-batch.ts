import type {Draft} from './blog-oct2-batch';
export const oct22BlogPublicationDate='2026-10-22';
export const oct22BlogDrafts:Draft[]=[
  {
    "slug": "vendor-statement-reconciliation-evidence",
    "title": "Vendor Statement Reconciliation Evidence That Survives Review",
    "excerpt": "Build a statement reconciliation that names the cutoff, matches at the item level, explains every difference, and leaves an acceptance record a reviewer can rerun.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/vendor-statement-reconciliation-evidence.webp",
      "shortAnswer": "Record the statement date and entity, rebuild the open-item population from the subledger at the same cutoff, match line by line, classify every difference, and close only when each item has an owner and the finance reviewer has accepted the result.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "vendor statement reconciliation evidence",
      "sections": [
        {
          "title": "Define the statement and the cutoff",
          "paragraphs": [
            "A vendor statement is the supplier's view of what it believes is open, not a ledger of record. Start by recording the statement date, supplier account number, company entity, currency, and the cutoff time used to pull your own open items. If the statement covers a different entity or period, stop and request the correct version instead of forcing a comparison that cannot hold.",
            "Write the purpose in the case: confirm a balance, find missing invoices, recover a credit, or resolve a dispute. The purpose decides which differences matter. A balance confirmation can tolerate small timing items; a dispute review cannot. Keep the supplier file unchanged and store the extracted totals beside it so another person can see exactly what was read."
          ]
        },
        {
          "title": "Rebuild the open-item population",
          "paragraphs": [
            "Pull open invoices from the AP subledger as of the same cutoff. Include invoice number, supplier reference, invoice date, posting date, due date, gross amount, tax, currency, payment status, and any credit or prepayment. Record the report name, run time, filters, and row count. A total without its population is not evidence.",
            "Deduplicate the extract before matching. Reversed invoices, cancelled payments, and documents moved to another entity can appear twice under different numbers. Reconcile the row count to the report control total. If those counts disagree, resolve the gap first, because every later match depends on a clean starting list."
          ]
        },
        {
          "title": "Match at the item level, not the total",
          "paragraphs": [
            "A matching total can hide two offsetting errors. Match each statement line to one or more open documents using the supplier invoice number first, then amount and date, then purchase order or service period. Record the match basis and a short confidence note. Lines that agree only on amount deserve a second look, because round numbers repeat across suppliers and months.",
            "Keep unmatched items on both sides in the workpaper. The supplier may list an invoice you never received, and you may hold an invoice the supplier omitted. Both are findings. Do not clear a line by writing that it is per statement unless the statement is the agreed source and the owner has accepted that basis in writing."
          ]
        },
        {
          "title": "Explain timing differences with dated evidence",
          "paragraphs": [
            "Most differences are timing, but timing still needs proof. For an invoice paid after the statement date, attach the payment date, method, and remittance reference. For goods received but not invoiced, attach the receipt. For an invoice in approval, attach the queue status and the current approver. The explanation should name a date and a document rather than a general impression.",
            "Separate cutoff differences from errors. A payment released on the last day of the month may clear the bank later, which is a settlement timing item. A duplicate invoice is not timing. Classify each line once and let the class drive the follow-up, instead of using one vague note that mixes several causes together."
          ]
        },
        {
          "title": "Handle credits, prepayments, and unapplied cash",
          "paragraphs": [
            "Credits are the most common reason a statement will not tie. List every open credit memo, debit memo, rebate, and prepayment with its date, amount, and current application. Check whether the supplier has already applied the credit on its side. A credit applied twice produces a payable that looks smaller than the supplier's records and can hide a real liability.",
            "When a credit is unapplied, do not net it against a disputed invoice without the owner's decision. Record the proposed application and the reason. If the credit belongs to another entity or period, route it to the owner rather than moving it just to make the reconciliation balance."
          ]
        },
        {
          "title": "Route supplier disputes with one question",
          "paragraphs": [
            "Some differences are disagreements, not errors. Convert each one into a single answerable question with the document references attached: which invoice is disputed, what amount is accepted, and what evidence the supplier should provide. Send it through the established supplier channel and log the recipient, time, and response due date.",
            "Do not negotiate payment terms or promise a settlement date from the AP support seat. The finance owner sets the position. Your contribution is a precise question and a complete evidence set, so the owner can answer without reopening the whole file."
          ]
        },
        {
          "title": "Keep the reconciliation reproducible",
          "paragraphs": [
            "A reviewer should be able to rerun the comparison from the retained files. Keep the statement, subledger extract, match table, exception list, and sign-off in one folder with a version label. Name the preparer and the preparation date. If a later statement supersedes this one, retain the earlier version and mark it replaced.",
            "Record formulas and filters as text, not only as a hidden spreadsheet tab. Software changes and tabs get lost. A short method note that names the source report, cutoff, match order, and tolerance makes the work portable to a backup reviewer or an internal auditor."
          ]
        },
        {
          "title": "Review cadence and sample checks",
          "paragraphs": [
            "Reconcile high-value and high-activity suppliers monthly, and the remainder on a schedule the controller approves. Each quarter, sample completed reconciliations: recheck the cutoff, re-perform one match, and confirm that every unmatched line has an owner. Record the sample size and the exceptions found, including clean results.",
            "Track the age of unresolved supplier differences, not only the count. A few old items can carry more risk than many new timing items. Report opening and closing balances of the exception list so a reviewer can see whether work is accumulating or being cleared."
          ]
        },
        {
          "title": "Close with an acceptance record",
          "paragraphs": [
            "Close when the agreed balance is supported, every difference has a disposition, and the owner has accepted the result. The record should show statement balance, reconciled balance, total differences by class, and items carried forward with owners and dates.",
            "Acceptance is not the same as supplier agreement. It means the company reviewer has seen the evidence and decided how to treat each item. Keep the supplier response separate from that internal decision so a later reader can tell who concluded what and on which date."
          ]
        }
      ],
      "checklistTitle": "Check the statement reconciliation packet",
      "checklist": [
        "Statement date, entity, account, currency, and cutoff are recorded",
        "Subledger extract reconciles to its own row count and control total",
        "Every statement line has a match or a documented exception",
        "Differences are classified as timing, error, credit, or dispute",
        "Open credits and prepayments show their current application",
        "Each carried item has one owner and a next review date",
        "The reviewer can rerun the match from retained files"
      ],
      "bodyLinks": [
        {
          "href": "/services/vendor-statement-reconciliation",
          "label": "vendor statement reconciliation support"
        },
        {
          "href": "/services/aging-report-preparation",
          "label": "AP aging report preparation"
        },
        {
          "href": "/contact-us",
          "label": "scope a statement review lane"
        }
      ],
      "faqs": [
        {
          "question": "Can an AP specialist settle a disputed statement item?",
          "answer": "No. The specialist can assemble documents, calculate the difference, and draft one precise question. The finance owner decides whether to pay, dispute, or write off the item."
        },
        {
          "question": "How often should supplier statements be reconciled?",
          "answer": "High-value and high-activity suppliers usually warrant a monthly cycle; the controller should set the schedule for the rest and record the reason for any exception."
        },
        {
          "question": "What proves a timing difference?",
          "answer": "A dated document that shows the other side of the transaction, such as a bank payment reference, a goods receipt, or an approval queue entry with its timestamp."
        },
        {
          "question": "Should the supplier statement be edited?",
          "answer": "No. Keep the received file unchanged and put extracted totals, notes, and match results in a separate workpaper linked to it."
        }
      ],
      "sources": [
        {
          "name": "SBA: Manage your business",
          "url": "https://www.sba.gov/business-guide/manage-your-business",
          "note": "Small-business finance guidance that supports a documented reconciliation routine; it does not prescribe a matching method."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records-management policy used to justify retaining versions and dispositions instead of overwriting the first reconciliation."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control catalog context for audit logging, segregation of duties, and evidence retention in the reconciliation workflow."
        },
        {
          "name": "Nacha: Operating Rules",
          "url": "https://www.nacha.org/rules",
          "note": "Payment rules context for using a bank payment reference as settlement evidence; company policy still defines the tolerance."
        }
      ]
    }
  },
  {
    "slug": "duplicate-payment-recovery-queue",
    "title": "Run a Duplicate Payment Recovery Queue Without Losing the Trail",
    "excerpt": "Separate detection from recovery, qualify the duplicate against bank evidence, choose refund or credit, and close only when cash or an applied credit is proven.",
    "minutes": 10,
    "detail": {
      "thumbnail": "/oct22-heroes/duplicate-payment-recovery-queue.webp",
      "shortAnswer": "A recovery queue starts after a duplicate is qualified against payment and invoice evidence. Each case needs one owner, a recovery method, an aging clock, and closure evidence such as a bank credit or a credit memo applied to a named invoice.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "duplicate payment recovery queue",
      "sections": [
        {
          "title": "Separate detection from recovery",
          "paragraphs": [
            "Detection flags a possible duplicate. Recovery is a case with money at stake, a supplier relationship, and a deadline. Keep the two queues separate so a cleared alert is never mistaken for recovered cash. The detector should pass forward its match keys, rule or manual source, score, and detection date.",
            "The recovery owner must be able to see why the item was flagged without rerunning the detection job. Store the matched invoice identifiers and payment references with the alert. If the flag came from a person, record who raised it and what they compared."
          ]
        },
        {
          "title": "Qualify the duplicate before contact",
          "paragraphs": [
            "Confirm the vendor, bank account, invoice number, amount, currency, payment date, and payment status. Check whether the second payment actually left the bank. A blocked, reversed, or returned item needs a different path from a settled duplicate, and treating them the same wastes treasury time.",
            "Use the payment file reference and the bank statement line as the settlement test. A status of issued or approved is not proof that funds moved. If the bank evidence is not yet available, mark the case as unqualified and set a date to check again rather than opening a supplier conversation on assumption."
          ]
        },
        {
          "title": "Build the recovery case file",
          "paragraphs": [
            "The case should carry a unique identifier, vendor master ID, duplicate invoice IDs, payment references, amount and currency, detection date, qualification date, proposed recovery method, owner, and next action date. Add the entity and original payment run so reporting can group cases correctly.",
            "Attach the invoice images, approval history, payment confirmation, bank line, and supplier correspondence. Keep the supplier's original message unchanged. If a credit is offered, attach the credit document and the invoice it will be applied to, not just an email promise."
          ]
        },
        {
          "title": "Choose refund, credit, or offset",
          "paragraphs": [
            "A refund fits when cash has left and the supplier agrees to return it. A credit fits when a future or open invoice exists and the supplier will apply the amount in writing. An offset fits only with written owner approval, a documented agreement, and a posting that can be traced to both invoices.",
            "Do not offset a duplicate against a disputed invoice, another legal entity, or a different supplier account without explicit approval. Those shortcuts create a second reconciliation problem and obscure which transaction was actually recovered.",
            "Whichever route is selected, record the expected settlement date and the person who will confirm it. A recovery case with an open method but no expected date tends to drift until the next statement cycle, when the same duplicate may be flagged again under a new case number."
          ]
        },
        {
          "title": "Coordinate with treasury and the vendor",
          "paragraphs": [
            "Treasury owns the bank trace, recall request, and settlement confirmation. AP owns the invoice evidence and the supplier conversation. Share one timeline so the supplier is not asked for the same reference twice and treasury is not surprised by a recall.",
            "Use the established supplier contact and quote the payment reference, amount, and date. Ask the supplier to confirm what it received and how it recorded the amount. That answer determines whether a refund, credit, or reapplication is the cleanest route."
          ]
        },
        {
          "title": "Track aging and ownership",
          "paragraphs": [
            "Age each case from detection and again from the first recovery attempt. Set service levels the team can meet, such as contact within two business days, owner escalation at ten, and a written plan at thirty. Record the clock that applies so reports do not mix definitions.",
            "Assign one owner per case and a named backup. When ownership changes, record the handoff date and the open next action. A queue with shared ownership and no named person tends to produce activity without resolution."
          ]
        },
        {
          "title": "Protect the vendor relationship",
          "paragraphs": [
            "Assume an error until the evidence shows otherwise. Most suppliers cooperate when they receive the invoice numbers, payment dates, and amounts in one message. Avoid language that accuses the supplier of taking advantage of a mistake.",
            "Record commitments precisely. If the supplier says a refund will be issued next week, write the date and the amount, then verify it against the bank or a credit document. Do not promise a refund date that treasury has not confirmed."
          ]
        },
        {
          "title": "Measure the queue with honest denominators",
          "paragraphs": [
            "Report qualified duplicates in the period as the denominator and show open, recovered, written off, and unresolved cases. Include recovered amount, median age, and the oldest case. Do not compute a recovery rate over alerts that were never confirmed as duplicates.",
            "Keep a separate count of prevented duplicates, such as invoices blocked before payment. Prevention is useful evidence, but it is not the same outcome as recovering cash and should not be added to the recovery total.",
            "Review the aging list with treasury each week and agree which cases need a bank trace, which need a supplier call, and which should be written off under the approved policy. Write-off is an accounting decision, so record the approver and the reason rather than removing the case from the queue."
          ]
        },
        {
          "title": "Close only on cleared funds or applied credit",
          "paragraphs": [
            "Closure evidence is a bank credit, a supplier credit memo applied to a named invoice, or a written offset approval with a posting reference. A promise, a ticket status, or a supplier statement line is not enough on its own.",
            "Reconcile the recovered amount to the general ledger and to the original payment. If the amount differs because of fees, currency, or a partial credit, keep the residual open with an owner. The case ends when the accounting effect is understood, not when the inbox is quiet."
          ]
        }
      ],
      "checklistTitle": "Check the duplicate recovery case",
      "checklist": [
        "The second payment is confirmed against bank or payment file evidence",
        "Vendor, invoice, payment, entity, amount, and currency are linked",
        "Recovery method is recorded with the approving owner",
        "Treasury and AP actions share one dated timeline",
        "One owner and one backup are named",
        "Aging uses a stated clock and appears in reporting",
        "Closure rests on cleared funds or an applied credit"
      ],
      "bodyLinks": [
        {
          "href": "/services/duplicate-invoice-review",
          "label": "duplicate invoice review support"
        },
        {
          "href": "/services/payment-run-preparation",
          "label": "payment run preparation"
        },
        {
          "href": "/research",
          "label": "source-backed AP research"
        }
      ],
      "faqs": [
        {
          "question": "Who owns a duplicate payment case?",
          "answer": "One named AP or finance owner holds the case. Treasury supports bank tracing and recall, but a single person should be accountable for the next action and closure."
        },
        {
          "question": "Is a supplier promise enough to close the case?",
          "answer": "No. Close on a bank credit, an applied credit memo, or an approved offset with a posting reference, and retain the supporting document."
        },
        {
          "question": "Should duplicates be netted against future invoices?",
          "answer": "Only with written approval and a clear link to the affected invoices. Unilateral netting can hide a dispute and complicate reconciliation."
        },
        {
          "question": "How should recovery performance be reported?",
          "answer": "Use qualified duplicates as the denominator and report open, recovered, written off, and unresolved cases with amounts and median age."
        }
      ],
      "sources": [
        {
          "name": "Nacha: Operating Rules",
          "url": "https://www.nacha.org/rules",
          "note": "ACH rules context for payment traces, reversals, and the limits of a recall request."
        },
        {
          "name": "31 CFR Part 210",
          "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-II/subchapter-II/part-210",
          "note": "Regulatory context for ACH return and reversal handling by financial institutions."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control context for audit trails, segregation of duties, and evidence retention in recovery cases."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Retention policy used to justify keeping case evidence and closure records rather than deleting resolved items."
        }
      ]
    }
  },
  {
    "slug": "ap-invoice-hold-reason-standard",
    "title": "Standardize AP Invoice Hold Reason Codes",
    "excerpt": "Replace free-text holds with a small taxonomy, required fields, release tests, and an aging report that shows which owner can actually clear the item.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/ap-invoice-hold-reason-standard.webp",
      "shortAnswer": "A hold reason standard defines a controlled list of reasons, the evidence required to enter each one, the test that releases it, and the owner accountable for the wait. Holds should distinguish a hard payment block from an open question.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "AP invoice hold reason standard",
      "sections": [
        {
          "title": "Why free-text holds fail review",
          "paragraphs": [
            "A free-text hold note can say anything: waiting, check, vendor, issue. Six months later nobody can tell whether the invoice was blocked for a missing receipt, a price dispute, or a suspected duplicate. The note may also name a person who has left the company, leaving the item parked with no real owner.",
            "Free text also defeats reporting. If every preparer writes a different phrase, the team cannot count holds by cause or tell whether the backlog is driven by purchasing, receiving, tax documents, or vendor master data. Standard codes make those patterns visible without asking people to remember the history."
          ]
        },
        {
          "title": "Define the hold taxonomy",
          "paragraphs": [
            "Keep the list small enough to use. A practical set covers missing purchase order, missing receipt, approval incomplete, price or quantity variance, vendor master incomplete, tax document missing, duplicate suspicion, statement dispute, coding question, and payment instruction conflict. Add a category only when it changes who acts next.",
            "Separate hard blocks from open questions. A hard block means payment must not be released, for example a suspected duplicate or a bank change under verification. An open question means the invoice can proceed once an answer arrives, such as a coding clarification. The distinction should be a field, not an inference from the note."
          ]
        },
        {
          "title": "Required fields at hold entry",
          "paragraphs": [
            "Every hold should record the reason code, sub-reason if needed, the specific missing or conflicting field, the amount affected, the date the hold started, the owner, the next action, and the due date. It should also show who placed the hold and which system state changed.",
            "Attach or link the evidence that supports the hold. A missing receipt hold needs the PO line and the receipt search result. A duplicate hold needs the suspected matching invoice. Without that link, the next reviewer has to reconstruct the concern from scratch.",
            "If the invoice system cannot store every field, keep a linked exception record with the missing values and a reference number. A partial hold record is still better than a free-text note, provided the reviewer can find the rest of the evidence from the reference."
          ]
        },
        {
          "title": "Set the release test for each reason",
          "paragraphs": [
            "Each code needs a written release condition. Missing receipt releases when a valid receipt is matched to the line. Approval incomplete releases when the required approver acts within the authority matrix. Tax document missing releases when the accepted form is recorded, not when it is merely requested.",
            "The release test should be observable in a system or document. If the condition is simply that someone feels comfortable, the code is not a control. Publish the tests beside the code list so preparers, reviewers, and auditors apply the same standard."
          ]
        },
        {
          "title": "Separate the block from the query",
          "paragraphs": [
            "A payment block should prevent the invoice from entering a payment proposal. A query should not stop an otherwise valid invoice unless the answer could change the amount, the vendor, or the payment destination. Mixing the two causes either unnecessary payment delays or unsafe releases.",
            "When a query becomes a block, change the code and record why. When a block is cleared, keep the original code, the release evidence, and the approver. Overwriting the hold history removes the explanation for why the invoice was late."
          ]
        },
        {
          "title": "Handle holds that cross systems",
          "paragraphs": [
            "The invoice may sit in the ERP while the receipt sits in a warehouse system and the approval sits in a workflow tool. Record the system of record for each missing item and the person who can change it. A hold that points to the wrong system will age without progress.",
            "If an integration fails, do not mark the invoice as missing evidence until the source system has been checked directly. Record the failed connection, the manual check performed, and the time. That note prevents a temporary system outage from becoming a supplier dispute."
          ]
        },
        {
          "title": "Report aging by reason and owner",
          "paragraphs": [
            "Report open holds by reason code, owner, age bucket, amount, and entity. Show the opening balance, new holds, releases, and closing balance so the reader can see flow rather than a static snapshot. Separate hard blocks from queries in the same report.",
            "Review the oldest items individually. A hold that has survived two review cycles usually needs a decision, not another reminder. Record whether the next step is to obtain evidence, escalate, pay under an approved exception, or cancel the invoice."
          ]
        },
        {
          "title": "Audit the taxonomy quarterly",
          "paragraphs": [
            "Sample closed holds and check that the release test was actually met. Look for codes used as a default, owners who never appear, and reasons that always age past the target. Ask the people who use the list which code is unclear.",
            "Change the taxonomy through a controlled version. Retire a code only after open items are remapped, and keep the old definition for historical reporting. A code list that changes silently makes trend comparisons misleading."
          ]
        },
        {
          "title": "Keep the vendor message factual",
          "paragraphs": [
            "When a supplier asks about payment, use the hold reason at the level the company permits. Say that the invoice is awaiting a receipt or an approval, not that the company suspects fraud. Never disclose internal suspicion of a duplicate without owner review.",
            "Give the supplier a specific next step and a review date. If the delay is internal, own it. If the supplier must provide a document, name the document and the format. Factual messages reduce repeat contacts and create a record that matches the internal hold code."
          ]
        }
      ],
      "checklistTitle": "Check the hold reason record",
      "checklist": [
        "A controlled reason code is used instead of free text",
        "Hard block or open query is recorded explicitly",
        "The missing or conflicting field is named",
        "Evidence supporting the hold is linked",
        "The release test is documented and observable",
        "Owner, next action, and due date are present",
        "Aging is reported by reason and owner with flow totals"
      ],
      "bodyLinks": [
        {
          "href": "/services/ap-inbox-management",
          "label": "AP inbox and hold queue support"
        },
        {
          "href": "/services/three-way-match-support",
          "label": "three-way match support"
        },
        {
          "href": "/blog",
          "label": "practical AP guides"
        }
      ],
      "faqs": [
        {
          "question": "How many hold codes should a team use?",
          "answer": "Enough to route work, not enough to require a lookup table. Ten to twelve cause-based codes usually cover an AP queue; every code should change who acts next."
        },
        {
          "question": "Can a preparer release a hard block?",
          "answer": "Only if the written release test is met and the role has that authority. Suspected duplicates, bank changes, and vendor master conflicts should require an owner decision."
        },
        {
          "question": "What should happen to the old free-text notes?",
          "answer": "Retain them with the invoice and map the open items to the new codes. Do not delete the history, because it explains past aging."
        },
        {
          "question": "How is hold aging measured?",
          "answer": "From the date the current hold code started, with a separate view of total time since invoice receipt. Report flow, opening and closing balances, not only a point-in-time count."
        }
      ],
      "sources": [
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control catalog context for authorization, audit records, and separation between preparation and release."
        },
        {
          "name": "SBA: Manage your business",
          "url": "https://www.sba.gov/business-guide/manage-your-business",
          "note": "Small-business process guidance used as general context for documented operating routines."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records policy supporting retention of hold history and release evidence."
        },
        {
          "name": "Nacha: Operating Rules",
          "url": "https://www.nacha.org/rules",
          "note": "Payment rules context for why a payment block must be explicit before a file is created."
        }
      ]
    }
  },
  {
    "slug": "supplier-w9-refresh-control",
    "title": "Control Supplier W-9 Refresh Without Guessing",
    "excerpt": "Scope the refresh population, use approved request channels, check the form before keying, and document acceptance without turning AP into a tax adviser.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/supplier-w9-refresh-control.webp",
      "shortAnswer": "A W-9 refresh is a controlled records process: define which suppliers need a current form, request it through an approved channel, inspect the form for completeness, compare the legal name and TIN with the vendor master, and route tax treatment questions to the responsible owner.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "supplier W-9 refresh control",
      "sections": [
        {
          "title": "Scope the refresh population",
          "paragraphs": [
            "Start with a defined population, not the whole vendor master. Include suppliers paid reportable amounts, suppliers with a missing or stale form, suppliers whose legal name or TIN changed, and dormant accounts being reactivated. Record the entity, payment type, and period that put each supplier in scope.",
            "State the source of the population and the date it was pulled. If the list comes from a payment report, reconcile it to the vendor master count so the team knows which records are missing from the extract. A refresh list without a denominator cannot be reported or sampled."
          ]
        },
        {
          "title": "Choose the refresh trigger",
          "paragraphs": [
            "A new supplier needs a form before the first reportable payment. An existing supplier needs a new form when the current one is missing, the legal name changed, the tax classification changed, or the company's own review cycle comes due. A reactivated dormant account needs a fresh check even if an old form exists.",
            "Write the trigger beside each request. Two suppliers may need the same form for different reasons, and the reason determines how urgently the item should be handled and whether payment can proceed in the meantime. Keep the trigger in the record so the next reviewer does not have to guess."
          ]
        },
        {
          "title": "Request through a controlled channel",
          "paragraphs": [
            "Send the request through the supplier portal, a verified supplier email, or the established onboarding contact. Do not use a new address supplied in the same message that asks for the form. Record the recipient, channel, date, and the request reference.",
            "Explain what is needed in plain terms: a complete Form W-9 for the legal entity that will be paid. Do not request a Social Security number by ordinary email when a secure portal is available. If the supplier asks which form applies, route the question to the tax owner instead of improvising an answer."
          ]
        },
        {
          "title": "Check the form before keying",
          "paragraphs": [
            "Inspect the form revision, legal name, business name if any, tax classification, address, TIN, signature, and date. Check that the name and TIN belong together and that the certification is signed. A form with a missing signature or an unclear entity type is not ready to key.",
            "Do not correct the supplier's form. If a field is blank or inconsistent, return it with a specific note and keep the original image. Record what was checked, by whom, and on what date so an auditor can see that acceptance was based on the document rather than a memory of a phone call.",
            "Keep a small acceptance checklist beside the review step so the same fields are checked every time. When a form is rejected, record the exact field and the message sent to the supplier, because a later reviewer will want to know whether the problem was the document or the request."
          ]
        },
        {
          "title": "Reconcile TIN and legal name",
          "paragraphs": [
            "Compare the form to the vendor master: legal name, doing-business-as name, address, TIN type, and tax classification. Record each match and each difference. A name change may require a vendor master change and a new approval, not just a new attachment on the old record.",
            "Do not give tax advice about withholding, backup withholding, or reportability. Route those questions to the tax owner with the form and the payment facts attached. The AP role can confirm that a document is complete and consistent; it cannot decide the company's tax position."
          ]
        },
        {
          "title": "Handle refusal, delay, and closure",
          "paragraphs": [
            "Some suppliers will refuse, delay, or send an incomplete form. Record the request history, the reason given, and the next date. Apply the company's written rule for payment holds or escalation, and let the owner decide whether an exception is allowed.",
            "Close a refresh only when the accepted form is stored in the approved location, the vendor master reflects the accepted data, and any remaining discrepancy has an owner. A closed ticket with no stored document is not closure. Keep the request history for the same retention period as the vendor record."
          ]
        },
        {
          "title": "Protect the data and limit access",
          "paragraphs": [
            "Tax forms contain personal and financial identifiers. Store them in the approved repository, restrict access to the roles that need them, and avoid attaching them to broad distribution lists. Remove the file from temporary download folders after it is filed.",
            "Review who can read or change vendor tax data as part of the access recertification. Offboard departed users promptly. A refresh project can expand access quickly; the control is to remove it when the project ends and to keep the evidence of both the grant and the removal."
          ]
        },
        {
          "title": "Document the acceptance decision",
          "paragraphs": [
            "The acceptance record should show the supplier, form revision, date received, fields checked, comparison result, reviewer, and the storage location. If the form was rejected, record the reason and the date the supplier was notified. If an exception was approved, record the approver and the scope.",
            "Separate document acceptance from vendor activation. A complete form does not prove the bank account is correct, and a verified bank account does not prove the tax form is complete. Keep the two decisions in their own records so one cannot substitute for the other."
          ]
        },
        {
          "title": "Review the cycle and the backlog",
          "paragraphs": [
            "Report the in-scope count, forms received, forms accepted, forms rejected, outstanding requests, and aging by trigger. Compare the closing list to the opening list and explain large movements. Sample a few accepted forms each quarter and recheck the name and TIN comparison.",
            "Refresh the trigger rules annually or when the payment mix changes. If a new entity, payment type, or portal is added, update the population definition before the next cycle. The goal is a repeatable records process, not a one-time cleanup."
          ]
        }
      ],
      "checklistTitle": "Check the W-9 refresh record",
      "checklist": [
        "The in-scope population has a source, date, and denominator",
        "Each request has a trigger, channel, recipient, and date",
        "The form revision, signature, and date are checked",
        "Legal name and TIN are compared with the vendor master",
        "Tax treatment questions are routed to the tax owner",
        "Accepted forms are stored in the approved repository",
        "Access to tax data is reviewed and removed when no longer needed"
      ],
      "bodyLinks": [
        {
          "href": "/services/tax-document-collection",
          "label": "tax document collection support"
        },
        {
          "href": "/services/vendor-onboarding-administration",
          "label": "vendor onboarding administration"
        },
        {
          "href": "/contact-us",
          "label": "plan a tax document refresh"
        }
      ],
      "faqs": [
        {
          "question": "Can AP support decide which tax form a supplier should file?",
          "answer": "No. AP can request and inspect the company's required form and route classification questions to the tax owner. The tax position stays with that owner."
        },
        {
          "question": "Is a W-9 required for every vendor?",
          "answer": "The company's tax owner defines the rule by payment type and entity. AP should apply the written rule and record exceptions rather than deciding case by case."
        },
        {
          "question": "What if the supplier sends an old form revision?",
          "answer": "Record what was received, check the company's current acceptance rule, and request the correct revision through the approved channel if needed."
        },
        {
          "question": "How long should refresh evidence be kept?",
          "answer": "Follow the company's records schedule for vendor and tax records, and retain the request history with the accepted form so the decision can be reconstructed."
        }
      ],
      "sources": [
        {
          "name": "IRS: About Form W-9",
          "url": "https://www.irs.gov/forms-pubs/about-form-w-9",
          "note": "Primary source for the form's purpose and requester use; it does not decide the company's acceptance policy."
        },
        {
          "name": "IRS: About Form 1099-NEC",
          "url": "https://www.irs.gov/forms-pubs/about-form-1099-nec",
          "note": "Context for why supplier tax records matter for reportable payments; reportability decisions remain with the tax owner."
        },
        {
          "name": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework",
          "note": "Privacy framework used to justify minimizing and protecting tax identifiers in the refresh workflow."
        },
        {
          "name": "NIST: Role Based Access Control",
          "url": "https://csrc.nist.gov/projects/role-based-access-control",
          "note": "Role-based access guidance for limiting who can view or change vendor tax data."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records policy context for retaining accepted forms and request history."
        }
      ]
    }
  },
  {
    "slug": "payment-run-cutoff-exception-log",
    "title": "Payment Run Cutoff Exception Log",
    "excerpt": "Turn the cutoff into a timestamped gate, capture every late item with its evidence gap, and give treasury a proposal whose exceptions are already explained.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/payment-run-cutoff-exception-log.webp",
      "shortAnswer": "A cutoff exception log records each item that missed or might miss the payment run, why it missed, who owns the next action, and whether it carries to the next run. Treasury should receive a proposal whose exceptions are classified before the file is built.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "payment run cutoff exception log",
      "sections": [
        {
          "title": "Set the cutoff as a timestamped gate",
          "paragraphs": [
            "A payment run cutoff is not a date on a calendar. It is a specific time, in a named time zone, after which new invoices and changes do not enter the current file. Publish the time, the systems that close, the approver who must act before it, and the channel for a true emergency.",
            "Record the cutoff time actually applied, not the planned time. If the run opened late or a system was unavailable, write that down. The log should let a reviewer reconstruct which items could have entered the run and which could not.",
            "Publish the cutoff in the same calendar the approvers use and state whether it moves for a bank holiday. A cutoff that shifts without notice trains people to treat the deadline as optional, which then shows up as a late-approval exception every cycle."
          ]
        },
        {
          "title": "Capture the exception when it appears",
          "paragraphs": [
            "Log the item at the moment it becomes at risk, not after the run closes. Record the invoice or payment identifier, supplier, amount, currency, entity, required approver, missing item, first seen time, and the person who noticed it. A late entry created the next morning loses the sequence.",
            "Link the evidence that exists. That may be the approval request, the receipt search, the bank verification ticket, or the supplier message. If no evidence exists, say so. The log is a record of the state at cutoff, not a place to assemble a case after the fact.",
            "Use one intake point for exceptions so a message in chat does not become an invisible case. If someone reports a problem by phone, the person who takes the call should create the log entry and read the key fields back to the caller."
          ]
        },
        {
          "title": "Classify late approval, missing evidence, and bank holds",
          "paragraphs": [
            "Use a small set of causes: approval not received, receipt or PO missing, invoice data incomplete, vendor master or bank change pending, tax document missing, duplicate or fraud review open, and treasury or bank constraint. The cause determines who can resolve it and whether the item can be paid at all.",
            "Do not use a single late category for everything. A late approval is an authority issue, a missing receipt is a receiving issue, and a bank hold is a settlement issue. Combining them hides the owner and makes the weekly review repeat the same conversation without a decision."
          ]
        },
        {
          "title": "Decide carry, hold, or cancel",
          "paragraphs": [
            "Every exception needs a disposition before the file is released. Carry means the item is complete but missed the cutoff and should enter the next run. Hold means evidence is still missing and the item needs a dated follow-up. Cancel means the invoice should not be paid, for example because it is a duplicate or was credited.",
            "Name the decision owner. AP can recommend a disposition and prepare the evidence; the finance or treasury owner approves payment-affecting choices. Record the decision time so the next run can verify that a carried item was actually included.",
            "A carried item should not be automatically paid in the next run. Check that the missing condition is now satisfied and that the amount has not changed. Revalidate the supplier and bank details if the delay was caused by a master-data question."
          ]
        },
        {
          "title": "Give treasury a clean proposal",
          "paragraphs": [
            "The proposal should separate clean items, carried items, and held items. For each carried item, show why it missed the cutoff and what has changed since. Treasury should not have to read the exception log to understand the file.",
            "Reconcile the proposal total to the approved invoice list and the payment file. Investigate differences before release. A file that balances to itself but not to the approved list can still pay the wrong amount."
          ]
        },
        {
          "title": "Record the next-run commitment",
          "paragraphs": [
            "For each carried item, record the next run date and the condition that must be met. If the item depends on a supplier document, name the request date and the expected response. If it depends on an internal approver, name the person and the escalation path.",
            "Do not let carried items disappear into the next cycle without a check. At the next cutoff, compare the carry list to the new proposal and record which items entered, which slipped again, and why. Repeated slippage is a process finding, not just a busy week."
          ]
        },
        {
          "title": "Review cutoff pressure weekly",
          "paragraphs": [
            "Report the number of exceptions, the amount, the causes, the owners, and the share that carried. Compare the current week with the prior four weeks. A rising carry rate near month end may indicate an approval bottleneck rather than a staffing shortage.",
            "Sample a few exceptions and confirm that the cause code and disposition were correct. If approvers routinely act after the cutoff, the fix may be a reminder schedule or a changed approval deadline, not more AP overtime."
          ]
        },
        {
          "title": "Test the log with a mock run",
          "paragraphs": [
            "Run a tabletop exercise with a small set of synthetic invoices: one missing receipt, one approval after cutoff, one bank change under verification, and one duplicate alert. Ask each participant to log the item and propose a disposition.",
            "Check that the timestamps, owners, and evidence links are complete and that the proposal separates clean from carried items. Fix the template before the next live run. A log that only works in a quiet week is not a control.",
            "Invite treasury, AP, and the approver group to the exercise. The disagreements are the useful output, because they show where the written cutoff rule and the practical routine have drifted apart."
          ]
        },
        {
          "title": "Close the run with a signed summary",
          "paragraphs": [
            "After the file is released, record the run date, cutoff applied, file reference, total amount, item count, exceptions, and dispositions. The preparer and the reviewer should sign or otherwise acknowledge the summary.",
            "Keep the summary with the payment file and the exception log. If a supplier later asks why an invoice was not paid, the team can answer from the record instead of reconstructing the week from messages.",
            "Store the summary where treasury and AP can both reach it, and link it to the exception log rather than duplicating the detail. The next run review can then compare the carry list with the new proposal without rebuilding the history."
          ]
        }
      ],
      "checklistTitle": "Check the cutoff exception log",
      "checklist": [
        "Cutoff time, time zone, and systems are stated",
        "Each exception has an item identifier, amount, and owner",
        "Cause codes distinguish approval, evidence, and bank issues",
        "Every exception has a carry, hold, or cancel disposition",
        "The proposal reconciles to the approved invoice list",
        "Carried items are checked against the next run",
        "The released run has a signed summary and file reference"
      ],
      "bodyLinks": [
        {
          "href": "/services/payment-run-preparation",
          "label": "payment run preparation support"
        },
        {
          "href": "/services/aging-report-preparation",
          "label": "AP aging and exception reporting"
        },
        {
          "href": "/contact-us",
          "label": "review a payment run control"
        }
      ],
      "faqs": [
        {
          "question": "Who decides whether a late invoice is carried?",
          "answer": "The finance or treasury owner sets the rule for payment-affecting decisions. AP prepares the evidence and recommends a disposition, but does not release funds on its own authority."
        },
        {
          "question": "Should the exception log include items that were fixed before cutoff?",
          "answer": "Yes, if they were at risk. Recording near misses shows where the process is fragile and supports a better cutoff design."
        },
        {
          "question": "How is a cutoff exception different from a hold?",
          "answer": "A cutoff exception is about timing relative to a payment run. A hold is a standing block on the invoice. An item can have both, and the log should show the relationship."
        },
        {
          "question": "What belongs in the run summary?",
          "answer": "Run date, cutoff applied, file reference, total and item count, exceptions and dispositions, preparer, and reviewer acknowledgment."
        }
      ],
      "sources": [
        {
          "name": "Nacha: Operating Rules",
          "url": "https://www.nacha.org/rules",
          "note": "ACH rules context for payment file timing and the importance of a defined processing cutoff."
        },
        {
          "name": "31 CFR Part 210",
          "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-II/subchapter-II/part-210",
          "note": "Regulatory context for ACH entry handling; it does not set a company's internal cutoff."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control catalog context for authorization, audit records, and separation of preparation from release."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records policy supporting retention of run summaries and exception dispositions."
        }
      ]
    }
  },
  {
    "slug": "ach-return-recovery-ownership",
    "title": "Assign ACH Return Recovery Ownership",
    "excerpt": "Name one owner for returns, read the code before acting, rebuild the payment trail, and close only when a reissue or reversal is proven at the bank.",
    "minutes": 10,
    "detail": {
      "thumbnail": "/oct22-heroes/ach-return-recovery-ownership.webp",
      "shortAnswer": "ACH return recovery needs one named owner, a code-based disposition, a rebuilt invoice and payment trail, and a closure record. Treasury handles bank mechanics; AP owns the invoice evidence and supplier follow-up.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "ACH return recovery ownership",
      "sections": [
        {
          "title": "Name the owner before the first return",
          "paragraphs": [
            "Returns arrive on the bank's schedule, not the AP team's. Decide in advance who receives the return file, who opens the case, who contacts the supplier, and who can approve a reissue. A shared inbox without a named owner produces duplicate outreach and missed deadlines.",
            "Record the backup and the escalation path. If the owner is unavailable, the return should still be triaged within the service level. The case record should show both the functional owner and the person currently acting.",
            "Write the service level in business days and state the time zone. A return that arrives on Friday afternoon should have a defined first check, not wait until the following week because the owner assumed the bank would resend it."
          ]
        },
        {
          "title": "Read the return code before acting",
          "paragraphs": [
            "The return reason code describes what the receiving bank or the account did. It does not by itself prove the supplier intended to reject the payment. Record the code, the bank description, the return date, and the original payment reference before deciding on a remedy.",
            "Different codes point to different next steps. A closed account, an invalid account number, a stop payment, and a non-sufficient funds return should not all be handled with the same supplier email. Use the company's code guide and escalate ambiguous codes to treasury.",
            "Store a short code guide beside the queue with the bank description and the required next step. Update it when the bank changes its wording, and keep the version date so a reviewer can tell which guidance applied."
          ]
        },
        {
          "title": "Rebuild the payment and invoice trail",
          "paragraphs": [
            "Attach the original invoice, approval, payment proposal, payment file reference, bank acknowledgment, and return notice. Confirm the amount, currency, supplier, bank account, and payment date. Check whether the invoice remains open in the subledger or was already marked paid.",
            "Reconcile the return to the general ledger. If the original payment was posted and the return has not been recorded, the payable may look settled when it is not. Do not reissue until the accounting status is clear, because paying twice is worse than paying late.",
            "If the return notice references a batch rather than a single payment, split the case by payment reference before assigning an owner. A batch-level case hides which supplier and invoice are affected and makes closure ambiguous."
          ]
        },
        {
          "title": "Decide reissue, reversal, or supplier contact",
          "paragraphs": [
            "A reissue fits a temporary problem where the bank details are confirmed and the supplier still expects payment. A reversal fits an invalid payment that should be removed from the payables balance. Supplier contact fits any case where the bank data must change before another attempt.",
            "Record the chosen path and the approving owner. A bank detail change should follow the vendor master verification process, not a reply to the return email. If the supplier provides new banking information, treat it as a new change request with its own evidence."
          ]
        },
        {
          "title": "Coordinate with treasury and the bank",
          "paragraphs": [
            "Treasury owns the relationship with the bank and the mechanics of stops, recalls, and reissues. AP owns the invoice and supplier evidence. Share one case reference so both sides can find the same facts without forwarding screenshots.",
            "Ask the bank for the return advice and any available trace. Do not promise a supplier a specific funds date until treasury confirms the reissue timing. Keep the supplier informed at the level the company permits, using the verified contact channel.",
            "Keep the supplier conversation in the case record, not only in a personal mailbox. If the supplier replies to a different address, attach the message and note the channel so the verification history stays complete."
          ]
        },
        {
          "title": "Prevent repeat returns with master-data checks",
          "paragraphs": [
            "Group returns by cause. Repeated invalid account numbers may point to a vendor master entry problem. Repeated closed accounts may point to stale supplier data. A one-off stop payment is different from a pattern.",
            "When a return reveals bad bank data, fix the vendor record through the approved change process and record the evidence. Do not update banking details from the return notice alone. If the same supplier returns twice for the same reason, escalate before the third attempt.",
            "A vendor master correction should create a new record version with the old value retained. If the same bank detail returns in a later file, the reviewer can see whether the correction was overwritten or the supplier sent the old instruction again."
          ]
        },
        {
          "title": "Report returns with a consistent denominator",
          "paragraphs": [
            "Report return count, amount, reason category, owner, age, and outcome. Use payments released in the same period as the denominator if the team wants a rate, and state that definition. Do not compare a rate computed on payment count with one computed on payment value.",
            "Separate supplier-caused returns from bank or company-caused returns. A closed supplier account and a malformed company file are different problems with different owners. The report should make that distinction visible.",
            "Include the return reason in the trend view. A rising count driven by closed accounts is a supplier-data problem, while a rising count driven by company file errors points to validation before release."
          ]
        },
        {
          "title": "Keep supplier communication factual",
          "paragraphs": [
            "Tell the supplier what the bank reported, the payment reference, the amount, and the date. Ask for confirmation of the account status or a corrected remittance instruction through the approved channel. Avoid speculation about fault.",
            "If the supplier says the account is open, route the discrepancy to treasury for a bank trace. Do not send a second payment while the first is unresolved. Record the supplier's answer and the next action with a date."
          ]
        },
        {
          "title": "Close with proof of settlement",
          "paragraphs": [
            "Closure evidence is a successful reissue confirmed by the bank and matched to the invoice, a recorded reversal that restores the payable, or a written supplier confirmation with a bank trace. A ticket note is not enough.",
            "Reconcile the final amount to the invoice and the bank. If fees, currency conversion, or partial payments create a residual, keep it open with an owner. The case should end with the ledger and the bank agreeing on what happened.",
            "If the bank cannot confirm the destination, keep the case open and document the trace request. A supplier's assurance that funds arrived is useful, but the bank record is the stronger closure evidence."
          ]
        }
      ],
      "checklistTitle": "Check the ACH return case",
      "checklist": [
        "One owner and one backup are named",
        "Return code, bank description, date, and payment reference are recorded",
        "Invoice, approval, payment file, and bank advice are linked",
        "The payable status is confirmed before any reissue",
        "Bank detail changes use the vendor master verification path",
        "The return cause is grouped for prevention review",
        "Closure rests on a bank-confirmed reissue, reversal, or trace"
      ],
      "bodyLinks": [
        {
          "href": "/services/payment-run-preparation",
          "label": "payment run preparation"
        },
        {
          "href": "/services/vendor-onboarding-administration",
          "label": "vendor master administration"
        },
        {
          "href": "/research",
          "label": "AP control research"
        }
      ],
      "faqs": [
        {
          "question": "Who owns an ACH return?",
          "answer": "One named AP or finance owner holds the case. Treasury supports bank mechanics, but the invoice evidence, supplier follow-up, and closure record need a single accountable person."
        },
        {
          "question": "Can AP reissue a payment after a return?",
          "answer": "Only under the company's written authority and after the payable status and bank details are confirmed. The reissue itself is a payment decision, not a routine AP action."
        },
        {
          "question": "What if the supplier gives new bank details in the return conversation?",
          "answer": "Treat it as a new vendor master change and verify it through the approved channel. A return email is not independent verification."
        },
        {
          "question": "Which denominator should a return rate use?",
          "answer": "State the definition. Payments released in the period is common, but count-based and value-based rates answer different questions and should not be mixed."
        }
      ],
      "sources": [
        {
          "name": "Nacha: Operating Rules",
          "url": "https://www.nacha.org/rules",
          "note": "Primary rules context for ACH returns, reversals, and the responsibilities of participating parties."
        },
        {
          "name": "31 CFR Part 210",
          "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-II/subchapter-II/part-210",
          "note": "Federal regulation covering ACH entries and return handling by receiving depository institutions."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control context for audit logging and separation between payment preparation and release."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records policy supporting retention of return notices and closure evidence."
        }
      ]
    }
  },
  {
    "slug": "ap-credit-memo-application-review",
    "title": "Review AP Credit Memo Application",
    "excerpt": "Confirm the credit is real, link it to the correct invoice, prevent double benefit, and record the remaining balance after application.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/ap-credit-memo-application-review.webp",
      "shortAnswer": "A credit memo review proves that the credit exists, belongs to the right supplier and entity, has not already been applied, and is being matched to the correct invoice. The record should show the amount applied, any remainder, and the owner who approved a disputed treatment.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "AP credit memo application review",
      "sections": [
        {
          "title": "Confirm the credit is real and unapplied",
          "paragraphs": [
            "Start with the credit document: supplier, credit number, date, amount, currency, entity, reason, and the invoice or agreement it references. Check the vendor master and the subledger for an existing record. A credit that already appears as applied should not be entered again.",
            "Ask what created the credit. A return, a price adjustment, a billing error, a rebate, and a goodwill adjustment may follow different approval paths. The reason affects whether the credit can be applied automatically or needs an owner decision.",
            "Store the credit document with the same care as an invoice. If the supplier sends a revised credit later, keep both versions and record which one was applied, because the difference may change the payable."
          ]
        },
        {
          "title": "Link the credit to the right invoice",
          "paragraphs": [
            "Match on supplier invoice number first, then purchase order, service period, and amount. Record the link and the evidence used. If the credit references an invoice that is already paid, the application may create a refund or a credit balance rather than reducing an open payable.",
            "Do not apply a credit to the oldest open invoice simply because it is convenient. That can misstate the cost of the current period and hide a dispute on the invoice the supplier actually credited.",
            "If no invoice matches, do not create a fictitious link. Record the credit as unapplied and route the question to the owner who can identify the commercial reason."
          ]
        },
        {
          "title": "Check tax, freight, and currency treatment",
          "paragraphs": [
            "Confirm whether the credit includes tax, freight, or other charges and whether those amounts were part of the original invoice. A credit that reverses a taxable line should reverse the tax consistently. Record the basis rather than assuming the total is uniform.",
            "For a foreign currency credit, record the currency, the rate basis, and whether the credit is applied at the original invoice rate or a current rate. The accounting owner decides the treatment. AP should make the arithmetic and the source visible so the decision can be reviewed.",
            "Attach the original invoice line and the credit line side by side so the reviewer can see the reversal without opening two systems. The comparison should show tax, freight, and any discount separately."
          ]
        },
        {
          "title": "Prevent double benefit",
          "paragraphs": [
            "Check that the credit has not already been applied through a payment reduction, a separate credit entry, or a supplier statement netting. Search by credit number, amount, supplier, and date. A duplicate credit entry can reduce the payable twice and hide a real liability.",
            "If the supplier statement already reflects the credit, do not apply it again just because the subledger still shows the invoice open. Reconcile the statement, the subledger, and the credit record before posting. The goal is one economic effect, not one entry per document.",
            "A search that returns no match is not proof that the credit is unused. Check the payment history and the supplier statement as well, especially when the credit is old or the supplier has changed systems."
          ]
        },
        {
          "title": "Handle partial and multi-invoice credits",
          "paragraphs": [
            "A credit may cover several invoices or only part of one. Record the allocation by invoice line, the amount applied to each, and the remainder. If the remainder stays open, give it an owner and a next action rather than leaving an unexplained balance.",
            "For a partial credit, confirm whether the supplier considers the invoice closed or still expects payment for the balance. The answer changes the collection and aging treatment. Keep the supplier confirmation with the allocation."
          ]
        },
        {
          "title": "Route disputed credits to the owner",
          "paragraphs": [
            "A supplier may issue a credit the company did not request, or dispute the amount of a credit the company expected. Record the disagreement, the documents, and the person who owns the relationship. Do not net the credit against a disputed invoice without approval.",
            "If the credit relates to a quality, delivery, or contract issue, the business owner may need to confirm the facts before finance accepts the accounting treatment. AP can prepare the packet and track the answer, but it should not decide the commercial dispute.",
            "Keep the commercial owner in the loop when the credit affects a contract or a service level. Finance can record the accounting result, but the business owner may need to resolve the underlying delivery issue before the supplier will agree."
          ]
        },
        {
          "title": "Record the application and the remaining balance",
          "paragraphs": [
            "The application record should show the credit identifier, invoice identifier, amount applied, tax and freight components, currency, posting date, and the person who approved the application. If the credit is unapplied, show the reason and the expected next step.",
            "Reconcile the remaining credit balance to the credit ledger. A zero balance with no application record is not proof that the credit was used correctly. The trail should connect the credit document to the invoice and the general ledger entry."
          ]
        },
        {
          "title": "Reconcile the credit ledger monthly",
          "paragraphs": [
            "List open credits by supplier, age, amount, and owner. Compare the total to the general ledger control account. Investigate credits that have been open for more than one cycle, especially those with no identified invoice or business reason.",
            "Sample applied credits and recheck the link to the invoice and the arithmetic. Include a case where the credit was applied after the invoice was paid, because that path often creates a refund or a supplier balance that is easy to miss.",
            "Assign old credits to an owner even when the supplier has not asked about them. An unapplied credit can become a dispute or a write-off, and the longer it sits, the harder it is to reconstruct the reason."
          ]
        },
        {
          "title": "Close with an auditable trail",
          "paragraphs": [
            "Close when the credit is applied to a named invoice or refunded through an approved path, the ledger reflects the result, and any remainder has an owner. The record should let a reviewer move from the credit document to the invoice and the posting without asking for a missing file.",
            "If a later event changes the treatment, such as a supplier reversing the credit, keep the original application and add the correction. Do not overwrite the first entry. The history explains why the payable changed and who approved it.",
            "A reviewer should be able to move in both directions, from credit to invoice and from invoice to credit, without asking for a missing file."
          ]
        }
      ],
      "checklistTitle": "Check the credit memo application",
      "checklist": [
        "Credit document, supplier, entity, currency, and reason are recorded",
        "The credit is not already applied or duplicated",
        "The linked invoice and match evidence are attached",
        "Tax, freight, and currency treatment are documented",
        "Partial or multi-invoice allocations show every component",
        "Any remainder has an owner and a next action",
        "The credit ledger reconciles to the general ledger"
      ],
      "bodyLinks": [
        {
          "href": "/services/duplicate-invoice-review",
          "label": "duplicate and credit review support"
        },
        {
          "href": "/services/vendor-statement-reconciliation",
          "label": "vendor statement reconciliation"
        },
        {
          "href": "/blog",
          "label": "more AP operating guides"
        }
      ],
      "faqs": [
        {
          "question": "Can AP apply a credit without the supplier's confirmation?",
          "answer": "Only within the company's written rule. If the credit is disputed or its invoice link is unclear, route the decision to the finance owner."
        },
        {
          "question": "What if the credit is larger than the open invoice?",
          "answer": "Apply the amount supported by the invoice and record the remainder as an open credit with an owner. Do not force the excess onto another invoice without approval."
        },
        {
          "question": "How is double benefit prevented?",
          "answer": "Search by credit number, amount, supplier, and date, and reconcile the subledger, the supplier statement, and the credit ledger before posting."
        },
        {
          "question": "Who decides foreign currency treatment?",
          "answer": "The accounting owner sets the rate basis and posting treatment. AP records the currency, rate, arithmetic, and source so the decision is reviewable."
        }
      ],
      "sources": [
        {
          "name": "Nacha: Operating Rules",
          "url": "https://www.nacha.org/rules",
          "note": "Payment rules context for refunds and reversals when a credit follows a settled payment."
        },
        {
          "name": "SBA: Stay legally compliant",
          "url": "https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant",
          "note": "Small-business compliance guidance used as general context for documented financial records."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control context for segregation of duties and audit records over credit application."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records policy supporting retention of credit documents and application history."
        }
      ]
    }
  },
  {
    "slug": "invoice-approval-delegation-expiry",
    "title": "Expire Invoice Approval Delegations on Time",
    "excerpt": "Treat delegation as a dated, scoped authority record. Check it before the queue opens, expire it automatically, and report stale approvals before they reach a payment run.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/invoice-approval-delegation-expiry.webp",
      "shortAnswer": "An approval delegation should name the delegator, delegate, scope, start date, end date, and evidence of authority. Expiry must be enforced in the workflow, not remembered by the delegate, and stale delegations should appear in a recurring report.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "invoice approval delegation expiry",
      "sections": [
        {
          "title": "Treat delegation as a time-bound control",
          "paragraphs": [
            "Delegation transfers a specific approval authority for a limited period. It is not a permanent promotion and it is not a favor between colleagues. Without an end date, a temporary absence can leave standing approval rights long after the delegator returns.",
            "Define what can be delegated and what cannot. A routine invoice approval may be delegable; a bank detail change, a vendor master change, or a payment release may not be. The authority matrix should state the boundary before anyone configures a delegate.",
            "Write the rule in the authority matrix and in the workflow configuration note. If the two disagree, the system will win in practice, so reconcile them before the next approval cycle."
          ]
        },
        {
          "title": "Capture the delegation record",
          "paragraphs": [
            "Record the delegator, delegate, role, entity, amount limit, invoice types, start date, end date, reason, approving authority, and the system configuration reference. Attach the written request and the approval. A calendar note is not a control record.",
            "State whether the delegator retains approval rights during the period. Some policies require both signatures above a threshold; others suspend the delegator entirely. Ambiguity here produces duplicate approvals and confusion in the audit trail.",
            "Store the request and approval with the authority matrix version. If the delegate's role changes, the record should show whether the delegation was re-scoped, ended, or allowed to expire."
          ]
        },
        {
          "title": "Check authority before the queue opens",
          "paragraphs": [
            "Before an invoice is routed, confirm that the approver is active, in scope for the entity and amount, and not expired. The workflow should reject a delegate whose end date has passed rather than allowing an approval that will be reversed later.",
            "If the workflow cannot enforce the rule, add a daily exception report that lists invoices assigned to expired or out-of-scope approvers. Do not rely on the delegate to notice the date. The control belongs to the system or to a named reviewer, not to memory.",
            "Run the check at routing and again at approval. An invoice can sit in a queue long enough for a delegation to expire between those two moments, and the second check is what prevents an invalid approval."
          ]
        },
        {
          "title": "Handle expiry mid-approval",
          "paragraphs": [
            "An invoice can sit in a queue while the delegation ends. Decide in advance whether the approval is valid at the time it is given or at the time the invoice entered the queue. Record that rule and apply it consistently.",
            "If an approval becomes invalid, route the invoice to the delegator or the next authorized approver. Keep the first approval in the history with a note explaining why it was not used. Do not delete it, because the audit trail should show what happened.",
            "Tell the delegate and the delegator when an item is rerouted. A silent reroute can leave the delegate believing the invoice is still with them and the new approver unaware of the history."
          ]
        },
        {
          "title": "Prevent standing or silent renewal",
          "paragraphs": [
            "A delegation should not renew because nobody remembered to close it. Set an end date at creation, send a reminder before expiry, and require a fresh request with a new reason to extend it. A recurring extension without review defeats the time limit.",
            "Review long-running delegations separately. A delegate who has been active for months may indicate a role vacancy, an authority matrix problem, or a control that has quietly become permanent. Route that finding to the owner who can fix the underlying cause.",
            "Report delegations that have been extended more than once without a new written request. Repeated extension is a sign that the underlying role or capacity issue has not been resolved."
          ]
        },
        {
          "title": "Reconcile approvers to the authority matrix",
          "paragraphs": [
            "Compare the active delegates in the workflow to the approved authority matrix and to the HR or role record. Check name, entity, limit, and effective dates. Investigate approvers who do not appear in the matrix and matrix entries with no active person.",
            "Include terminated users in the check. A delegate who left the company should not remain active even if the end date has not arrived. Coordinate with access management so the workflow approval role and the system login are removed together.",
            "Compare the workflow roster to the authority matrix at the same effective date. A person can be active in the system and absent from the matrix, or present in the matrix with no active login."
          ]
        },
        {
          "title": "Report stale delegations",
          "paragraphs": [
            "Report expired delegations still configured, delegations with no end date, delegations above the allowed scope, and invoices approved by an expired delegate. Show the count, amount affected, owner, and remediation date.",
            "Review the report on a fixed cadence, not only at quarter end. A monthly review catches expiry drift before it affects a payment run. Keep the prior report so the reviewer can see whether the same items recur.",
            "Include the invoice count and amount affected so the reader can judge whether the stale entries are administrative noise or a payment risk. A count without amount or owner is hard to prioritize."
          ]
        },
        {
          "title": "Test the expiry path",
          "paragraphs": [
            "Use a synthetic invoice and a test delegation to confirm that the workflow blocks an approval after the end date, routes to the correct fallback, and records the attempt. Test the same path after a role change, not only at initial setup.",
            "Check the audit log. It should show the delegate, the timestamp, the invoice, and the reason the approval was rejected or accepted. If the log cannot answer those questions, the control is not testable.",
            "Repeat the test after any workflow upgrade. A configuration that blocked expired approvals before an upgrade may silently allow them afterward if the rule is not part of the test set."
          ]
        },
        {
          "title": "Close the cycle with evidence",
          "paragraphs": [
            "Close the review when every active delegation has a valid record, expired items are removed or renewed with a new approval, and stale approvals have been rerouted. Retain the report and the remediation evidence with the authority matrix version.",
            "If a delegation was misused, record the finding and the correction without rewriting history. The purpose of the review is to restore a clean authority state and to show that the company noticed and acted.",
            "If a control failed, record the correction and the date the clean state was restored. The evidence should show both the finding and the repair."
          ]
        }
      ],
      "checklistTitle": "Check the delegation record",
      "checklist": [
        "Delegator, delegate, entity, scope, and amount limit are recorded",
        "Start date, end date, reason, and approving authority are present",
        "The rule for approval validity during expiry is written",
        "The workflow blocks or reports expired delegates",
        "Extensions require a fresh request and approval",
        "Active delegates reconcile to the authority matrix and HR status",
        "Stale approvals have a remediation owner and date"
      ],
      "bodyLinks": [
        {
          "href": "/services/invoice-data-capture",
          "label": "invoice intake and routing support"
        },
        {
          "href": "/research",
          "label": "AP access and control research"
        },
        {
          "href": "/contact-us",
          "label": "review an approval authority design"
        }
      ],
      "faqs": [
        {
          "question": "Can a delegate approve above the delegator's limit?",
          "answer": "No. The delegation cannot exceed the delegator's own authority, and the workflow should enforce the lower of the two limits."
        },
        {
          "question": "Should the delegator keep approval rights?",
          "answer": "The authority matrix should decide. Some policies suspend the delegator during absence; others require both approvals above a threshold."
        },
        {
          "question": "What happens to an invoice approved after expiry?",
          "answer": "Apply the written validity rule, reroute to an authorized approver if needed, and retain the original approval with an explanation."
        },
        {
          "question": "How often should delegations be reviewed?",
          "answer": "At least monthly for expired or stale entries, and immediately after a role change, departure, or authority matrix revision."
        }
      ],
      "sources": [
        {
          "name": "NIST: Role Based Access Control",
          "url": "https://csrc.nist.gov/projects/role-based-access-control",
          "note": "Role-based access guidance supporting scoped, time-bound authority and periodic review."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control catalog context for least privilege, separation of duties, and audit logging of approvals."
        },
        {
          "name": "SBA: Stay legally compliant",
          "url": "https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant",
          "note": "Small-business compliance guidance used as general context for documented authority records."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records policy supporting retention of delegation approvals and review evidence."
        }
      ]
    }
  },
  {
    "slug": "vendor-portal-credential-offboarding",
    "title": "Offboard Vendor Portal Credentials",
    "excerpt": "Inventory who can enter each supplier portal, tie access to a named role, remove sessions and recovery paths, and prove the removal from both sides.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/vendor-portal-credential-offboarding.webp",
      "shortAnswer": "Vendor portal offboarding should follow a named person, not a team mailbox. Inventory the portal, link access to a role and owner, remove logins, sessions, API keys, and recovery methods, then verify the removal and keep the evidence.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "vendor portal credential offboarding",
      "sections": [
        {
          "title": "Inventory the portals and the people",
          "paragraphs": [
            "List every supplier portal the AP team uses, the company entity it serves, the business owner, and the people with access. Include invoice submission portals, supplier networks, bank portals used for remittance inquiries, and any tool that stores supplier documents.",
            "For each portal, record the account type: named user, shared team account, service account, or API credential. The type determines what offboarding means. A named user can be disabled; a shared account may need a credential rotation and a new custodian.",
            "Record the portal's owner in the business, not only in IT. The business owner can say whether the access is still needed, while IT can say whether the account exists."
          ]
        },
        {
          "title": "Tie access to a named role",
          "paragraphs": [
            "Access should map to a role with a business reason, not to a person who happened to need it once. Record the role, the tasks it supports, the approval, and the review date. A portal login with no documented role is difficult to defend and easy to forget.",
            "Separate read access from submission or bank-detail access. The person who downloads statements may not be the person who can change remittance instructions. The portal's own permission model should reflect that distinction, and the internal record should match it.",
            "Store the role mapping in the access inventory, not only in the portal. A portal view shows who has access; the internal record explains why the access was granted and when it should end."
          ]
        },
        {
          "title": "Trigger offboarding from the HR or contract event",
          "paragraphs": [
            "Use the departure, role change, or contract end as the trigger. The AP owner should receive the event, not wait to notice that a login is no longer used. Record the trigger date, the effective date, and the person responsible for removal.",
            "For a contractor or outsourced role, tie the trigger to the engagement end and to any early termination. A vendor portal account can outlive the contract if nobody owns the removal. Put the portal in the offboarding checklist beside email and ERP access."
          ]
        },
        {
          "title": "Remove sessions, keys, and recovery paths",
          "paragraphs": [
            "Disabling a login is not enough if an active session, a saved browser credential, an API key, or a password reset path remains. Revoke sessions, rotate keys, remove the user from approval groups, and change the recovery email or phone if the departing person controlled it.",
            "Check the portal's audit log for recent activity before and after removal. Record the last login, the removal timestamp, and the administrator who performed it. If the portal does not expose that detail, record the limitation and use the vendor's confirmation instead.",
            "Check saved credentials on shared devices and browser profiles used by the team. A departing user's saved login can remain active on a computer that is reassigned to someone else."
          ]
        },
        {
          "title": "Keep shared credentials out of scope",
          "paragraphs": [
            "Shared logins weaken attribution because the portal cannot show which person submitted or changed a document. Where a shared account is unavoidable, name a custodian, store the credential in the approved vault, and rotate it when the custodian changes.",
            "Do not place a shared credential in a document, chat, or spreadsheet that survives the person. If the team needs a functional mailbox, use a controlled account with named delegates rather than one password distributed to several people. The offboarding record should show which model is in use."
          ]
        },
        {
          "title": "Verify from the vendor side",
          "paragraphs": [
            "After removal, ask the supplier or portal administrator to confirm that the user is disabled and that no active sessions remain. Record the confirmation reference, date, and contact. Internal deactivation alone does not prove the external account is closed.",
            "Test a login attempt only through an approved method and only if the test will not lock or disrupt a live account. A screenshot of a disabled user from the portal administration page is stronger evidence than a claim that the removal was requested.",
            "If the supplier cannot provide written confirmation, capture the portal administration screen with the user status and the date. Redact unrelated users before storing the screenshot."
          ]
        },
        {
          "title": "Record the evidence and the exception",
          "paragraphs": [
            "The offboarding record should include the person, role, portal, trigger, removal actions, verification, and any residual access. If a removal is delayed, record the reason, the interim control, and the owner. Do not mark the task complete because a request was sent.",
            "If the portal cannot remove a user without deleting history, record the alternative control the vendor offers and who accepted it. Exceptions should have an end date. A permanent exception is usually an unmanaged risk with a polite name.",
            "Give the exception an end date and a compensating control, such as a vaulted shared account with a named custodian and a shorter rotation interval."
          ]
        },
        {
          "title": "Review access quarterly",
          "paragraphs": [
            "Compare the portal user list to the active AP roster and to the vendor contracts. Remove users who no longer have a role, and investigate accounts that do not map to a person. Sample a few removals and confirm the evidence is present.",
            "Review administrator accounts separately. The person who can add or remove users has more power than an ordinary submitter. Limit that role, log the actions, and require a second approval for a new administrator where the portal allows it.",
            "Record who performed the review and which portals were in scope. A review that covers only the portals someone remembered is not a complete access review."
          ]
        },
        {
          "title": "Close with a removal certificate",
          "paragraphs": [
            "Close the offboarding when every portal entry for the person is disabled or transferred, sessions and keys are revoked, the verification is attached, and the access review reflects the change. The record should name the person who performed and the person who verified.",
            "Keep the certificate with the access review for the period the company requires. If the person returns in a new role, create a new access request rather than reactivating the old account, so the new scope is approved on its own terms.",
            "If a portal has no user list export, document the manual check and the limitation so the next reviewer knows the evidence is weaker than a system report. State who performed the check and when."
          ]
        }
      ],
      "checklistTitle": "Check the portal offboarding record",
      "checklist": [
        "Portal, entity, account type, and business owner are recorded",
        "Access maps to a named role and approval",
        "The HR or contract trigger and effective date are present",
        "Sessions, keys, groups, and recovery paths are removed",
        "Shared accounts have a custodian and vaulted credential",
        "Vendor-side confirmation or portal evidence is attached",
        "Quarterly access review includes administrators"
      ],
      "bodyLinks": [
        {
          "href": "/services/vendor-onboarding-administration",
          "label": "vendor access administration"
        },
        {
          "href": "/services/ap-inbox-management",
          "label": "AP inbox and portal support"
        },
        {
          "href": "/research",
          "label": "access control research"
        }
      ],
      "faqs": [
        {
          "question": "Is disabling the login enough?",
          "answer": "No. Active sessions, API keys, approval group membership, and password recovery methods can survive a disabled login unless they are removed separately."
        },
        {
          "question": "Can the team use one shared portal login?",
          "answer": "Only with a named custodian, an approved vault, and a rotation plan. Shared credentials reduce attribution and should be treated as an exception with an end date."
        },
        {
          "question": "Who should verify removal?",
          "answer": "Someone other than the person who performed it, using the portal administration view or a supplier confirmation. The evidence should be attached to the offboarding record."
        },
        {
          "question": "How often should portal access be reviewed?",
          "answer": "Quarterly is a practical baseline for active AP portals, with an immediate review after a departure or role change."
        }
      ],
      "sources": [
        {
          "name": "NIST: Role Based Access Control",
          "url": "https://csrc.nist.gov/projects/role-based-access-control",
          "note": "Role-based access guidance supporting named roles, least privilege, and periodic access review."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control catalog context for account management, session termination, and audit logging."
        },
        {
          "name": "CISA: Secure Our World",
          "url": "https://www.cisa.gov/secure-our-world",
          "note": "Awareness guidance on account security and reporting suspicious access activity."
        },
        {
          "name": "OWASP: Application Security Verification Standard",
          "url": "https://owasp.org/www-project-application-security-verification-standard/",
          "note": "Application security requirements for authentication, session management, and credential handling."
        }
      ]
    }
  },
  {
    "slug": "ap-accrual-handoff-at-close",
    "title": "AP Accrual Handoff at Close",
    "excerpt": "Freeze the open-item population, separate received-not-invoiced from disputed items, document the estimate, and give accounting a handoff it can reverse next period.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/ap-accrual-handoff-at-close.webp",
      "shortAnswer": "The AP accrual handoff gives accounting a dated, reproducible view of goods and services received without an invoice. It should show the population, the method, the inputs, unresolved items, and the reversal plan, while leaving the accounting decision with the controller.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "AP accrual handoff at close",
      "sections": [
        {
          "title": "Define what the accrual handoff covers",
          "paragraphs": [
            "The handoff covers payables that relate to the closing period but are not yet invoice-ready. That usually means goods received without an invoice, services performed without a bill, and approved commitments with a known amount. It does not include disputed invoices or items the business has not accepted.",
            "Write the definition in the close calendar and name the cut-off. A handoff that includes everything open will double count items already recorded. A handoff that includes only invoices on hand will miss obligations that arrived by email or receipt after the last extraction.",
            "Agree the definition with the controller before the first close, and keep it with the close calendar. A definition that changes mid-cycle makes the accrual and the reversal hard to compare."
          ]
        },
        {
          "title": "Freeze the open-item population",
          "paragraphs": [
            "Pull the receipt, service, and open-invoice records as of the close cutoff. Record the report names, run times, filters, and row counts. Include the PO line, receipt date, supplier, amount or estimate, currency, and current invoice status.",
            "Reconcile the extract to the control totals and investigate missing rows before estimating. If a receipt system was unavailable, record the gap and the manual workaround. A population with an unexplained hole cannot support a reliable accrual.",
            "If the receipt system cannot provide a cutoff view, take two extracts and compare them. The difference shows what arrived during the freeze and should be logged as a known limitation."
          ]
        },
        {
          "title": "Distinguish received-not-invoiced from disputed",
          "paragraphs": [
            "Received-not-invoiced is an obligation with accepted goods or services and no invoice. A disputed invoice is a recorded liability with an open question. Mixing them can overstate the accrual or hide a payable that should already be in the ledger.",
            "Use separate queues and separate owners. The receiving or business owner confirms acceptance for the first; the dispute owner resolves the second. The accrual handoff should show both, but it should not merge their amounts or their next actions.",
            "For each disputed item, record the amount already recorded and the amount in question separately. That prevents the dispute from being accrued twice or ignored because it is uncomfortable."
          ]
        },
        {
          "title": "Give accounting a reproducible estimate",
          "paragraphs": [
            "For each item, show the source of the amount: the PO price, the receipt quantity, the contract rate, or a prior invoice. State whether the amount includes tax, freight, or discounts. If the amount is an estimate, label it and name the person who supplied the basis.",
            "Do not smooth the total to a round number without a record. Accounting may adjust the estimate, but the adjustment should be visible. A reviewer should be able to rebuild the proposed accrual from the line-level inputs and the stated method.",
            "Where a contract rate is used, cite the clause and the effective date. Where a prior invoice is used, attach it and note why it is representative. The reviewer should not have to guess which basis was chosen."
          ]
        },
        {
          "title": "Document the method and the inputs",
          "paragraphs": [
            "Write a short method note: population definition, cutoff, estimation basis, treatment of tax and freight, currency conversion, and the owner who approved the estimate. Attach it to the close package so the next period can apply the same logic.",
            "Keep the source files and the working file together. If the method changes from the prior period, show the change and the reason. A method change without explanation makes the period-over-period comparison unreliable.",
            "Keep the method note short enough to be read at the close review. A one-page note with the population, cutoff, basis, and owner is more useful than a long appendix nobody opens."
          ]
        },
        {
          "title": "Handle late invoices after the freeze",
          "paragraphs": [
            "An invoice can arrive after the accrual is posted but before the ledger closes. Decide in advance whether it replaces an accrual line, creates a new payable, or waits for the next period. Record the decision and the owner.",
            "If the invoice amount differs from the accrual, keep the accrual line and the invoice linked so the reversal and the actual can be compared. Do not delete the accrual to make the variance disappear. The difference is useful evidence about estimate quality.",
            "Record the invoice receipt time, not only the invoice date, when deciding which period it belongs to. A supplier can date an invoice earlier than the service or the receipt."
          ]
        },
        {
          "title": "Reconcile the accrual to the next period",
          "paragraphs": [
            "At the next close, compare each accrual line to the invoice or payment that followed. Record matched, partially matched, still open, and reversed without invoice. Report the residual by supplier and owner.",
            "Investigate recurring large residuals. They may indicate a cut-off problem, a receipt timing issue, or a supplier that consistently bills late. The pattern is more useful than a single period's total.",
            "A reversal that clears an accrual without an invoice should be explained. It may be a valid estimate that was never billed, or it may be an obligation that was missed."
          ]
        },
        {
          "title": "Review the handoff with the controller",
          "paragraphs": [
            "Walk through the population, the largest items, the estimate basis, and the unresolved exceptions. Ask the controller to confirm the accounting treatment and the reversal plan. Record the review date and any changes requested.",
            "Do not present a single total without the supporting lines. The controller needs to see what is included, what is excluded, and what could change before the ledger is final. A short review now prevents a long cleanup later."
          ]
        },
        {
          "title": "Close with the reversal plan",
          "paragraphs": [
            "The handoff is complete when the accrual is posted, each line has a source and owner, the reversal method is documented, and the next-period comparison is scheduled. Keep the package with the close evidence.",
            "If an item cannot be estimated reliably, say so and route it to the owner rather than inserting a placeholder. An explicit open item is easier to manage than a number that looks precise and has no basis.",
            "If the controller changes an estimate, record the change, the reason, and the revised amount in the handoff rather than only in the ledger. That note is what makes the next comparison explainable."
          ]
        }
      ],
      "checklistTitle": "Check the accrual handoff",
      "checklist": [
        "Population definition and close cutoff are written",
        "Extract row counts reconcile to control totals",
        "Received-not-invoiced and disputed items are separate",
        "Each line shows its amount source and estimate basis",
        "Tax, freight, discount, and currency treatment are stated",
        "Late invoices have a defined treatment",
        "Controller review and reversal plan are recorded"
      ],
      "bodyLinks": [
        {
          "href": "/services/month-end-ap-close-support",
          "label": "month-end AP close support"
        },
        {
          "href": "/services/aging-report-preparation",
          "label": "AP aging and open-item reporting"
        },
        {
          "href": "/contact-us",
          "label": "plan an AP close handoff"
        }
      ],
      "faqs": [
        {
          "question": "Does AP decide the accrual amount?",
          "answer": "AP prepares the population, estimate basis, and supporting lines. The controller or accounting owner approves the accounting treatment and the posted amount."
        },
        {
          "question": "Should disputed invoices be accrued?",
          "answer": "They should be visible in the close package, but the accounting treatment belongs to the controller. Keep them separate from received-not-invoiced items."
        },
        {
          "question": "What if an invoice arrives after the freeze?",
          "answer": "Apply the written rule for replacement, new payable, or next period, and link the invoice to the accrual line so the variance can be reviewed."
        },
        {
          "question": "How is estimate quality measured?",
          "answer": "Compare accrual lines to the following invoice or payment and report matched, partial, open, and reversed amounts by supplier and owner."
        }
      ],
      "sources": [
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records policy context for retaining close packages, method notes, and reversal evidence."
        },
        {
          "name": "SBA: Stay legally compliant",
          "url": "https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant",
          "note": "Small-business compliance guidance used as general context for documented financial records."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control context for review, authorization, and audit records over the close handoff."
        },
        {
          "name": "31 CFR Part 210",
          "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-II/subchapter-II/part-210",
          "note": "Payment regulation context used only to distinguish a posted payable from a settled payment."
        }
      ]
    }
  },
  {
    "slug": "purchase-order-price-variance-review",
    "title": "Review Purchase Order Price Variance",
    "excerpt": "Compare the right price fields, separate price from quantity and freight, check the change history, and route the decision to the buyer who owns the order.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/purchase-order-price-variance-review.webp",
      "shortAnswer": "A price variance review compares the invoiced unit price with the current purchase order and the approved change history. It separates price from quantity and freight, documents the buyer decision, and updates the order only through the authorized owner.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "purchase order price variance review",
      "sections": [
        {
          "title": "Set the tolerance before the invoice",
          "paragraphs": [
            "A variance is only meaningful against a stated tolerance. Record whether the company allows a percentage, an absolute amount, or no tolerance for the supplier or category. The rule should be written before the invoice arrives so the reviewer is not negotiating with themselves.",
            "Apply the tolerance to the unit price, not only to the total. A large quantity can make a small unit price difference look material, while a freight change can push the total over the line without any price issue. State which field the tolerance covers.",
            "Different categories may need different tolerances, but the rule should be written per category and approved by the owner who is accountable for the spend."
          ]
        },
        {
          "title": "Compare the right price fields",
          "paragraphs": [
            "Match the invoice line to the PO line by line number, description, unit of measure, and quantity. Compare unit price, extended price, tax, freight, and any discount. Record the currency and the price basis, such as per unit or per case.",
            "Do not compare a total invoice amount to a total PO amount and call the difference a price variance. That method hides line-level errors and makes it impossible to tell whether the buyer approved a change or the supplier billed the wrong item.",
            "If the unit of measure differs, convert before comparing and record the conversion. A case price compared to an each price can look like a large variance when the commercial price has not changed. Attach the PO line and the invoice line to the case so the reviewer can see the exact fields rather than a summary."
          ]
        },
        {
          "title": "Separate price, quantity, and freight variance",
          "paragraphs": [
            "Price variance is the difference between the invoiced unit price and the PO unit price at the invoiced quantity. Quantity variance is the difference between invoiced and received or ordered quantity. Freight and surcharge variance are separate again.",
            "Classify each difference once. A quantity variance may be a receiving issue rather than a purchasing issue. A freight variance may belong to the carrier agreement. The class determines the owner and the evidence required to clear the item.",
            "Report each variance type with its own amount and owner. A combined total makes the buyer responsible for a freight problem and the receiver responsible for a price problem."
          ]
        },
        {
          "title": "Check the change history",
          "paragraphs": [
            "Review PO revisions, approved change orders, supplier price notices, and contract amendments. A variance may be valid because the buyer approved a new price after the order was issued. Record the revision number and effective date.",
            "Confirm that the invoice date falls within the approved price period. A new price approved for future shipments should not apply to an earlier delivery unless the change says so. The effective date is often the missing fact in a disputed variance.",
            "If the buyer approved a change verbally, ask for the written confirmation before clearing the variance. A verbal approval is not a revision, and the next invoice will raise the same question."
          ]
        },
        {
          "title": "Route the decision to the buyer",
          "paragraphs": [
            "The buyer or category owner decides whether to accept the new price, dispute it, or amend the order. AP can calculate the difference and assemble the evidence, but it should not approve a price change on the buyer's behalf.",
            "Send one question with the line details, the PO revision, the invoice reference, and the amount at issue. Name the response date and the payment impact. A vague request to check the price produces a vague answer and another cycle.",
            "Include the PO remaining quantity and the receipt status so the buyer can see whether the price applies to future deliveries or only to the invoice in hand. Set a response date that reflects the payment due date, and escalate when the buyer does not answer before the run."
          ]
        },
        {
          "title": "Document the acceptance or dispute",
          "paragraphs": [
            "If the buyer accepts the variance, record the approval, the reason, and the revised PO or contract reference. If the buyer disputes it, record the supplier response, the credit requested, and the payment hold. Keep both the invoice and the PO versions.",
            "Do not change the PO to match the invoice without the buyer's approval. That reverses the control and leaves no evidence that anyone agreed to the new price. The order should reflect the commercial decision, not the supplier's bill.",
            "If the supplier issues a credit for the difference, link it to the invoice and keep the variance open until the credit is applied. A credit in transit is not a resolved variance."
          ]
        },
        {
          "title": "Update the PO only through the owner",
          "paragraphs": [
            "When an update is approved, use the system's change process and record the reason code, effective date, and approver. Recalculate the tolerance against the revised order. A manual note outside the system is not a substitute for the revision.",
            "Check downstream effects: commitments, budget, receipt matching, and accruals. A price change can affect the remaining open quantity and the forecast. The buyer owns the commercial change; AP should surface the downstream impact rather than silently absorbing it.",
            "Record the effective date and whether the change applies retroactively. A revision that applies only to future receipts should not be used to clear an earlier invoice."
          ]
        },
        {
          "title": "Review variance patterns monthly",
          "paragraphs": [
            "Report variance count, amount, supplier, category, buyer, and disposition. Separate accepted, disputed, and pending items. Look for suppliers with repeated unexplained differences and categories where the tolerance is consistently too tight.",
            "Sample a few accepted variances and confirm the approval is present and the PO was updated. A high acceptance rate without evidence may mean the team is clearing items to keep the queue moving rather than applying the rule.",
            "Compare the variance trend with the category plan and with supplier price notices. A jump after a contract renewal may be expected, while a jump without a notice needs a buyer explanation."
          ]
        },
        {
          "title": "Close with a matched record",
          "paragraphs": [
            "Close when the invoice line, PO line, receipt, and variance disposition agree, or when the item is explicitly held or disputed with an owner. The record should show the tolerance applied and the approver for any exception.",
            "If a credit is expected, link it to the invoice and keep the case open until the credit is applied. A verbal promise to credit the difference is not a closed variance, because the payable is still overstated.",
            "If the PO cannot be amended because the period is closed, record the compensating entry, the amount, and the owner who approved it. Link that entry to the invoice so a later reviewer can see why the order and the bill differ."
          ]
        }
      ],
      "checklistTitle": "Check the price variance review",
      "checklist": [
        "The tolerance and the field it covers are stated",
        "Invoice and PO lines match by item, unit, and quantity",
        "Price, quantity, and freight variances are separated",
        "PO revisions and effective dates are checked",
        "The buyer or category owner makes the decision",
        "The PO is updated only through the approved change process",
        "Accepted variances have an approver and a reason"
      ],
      "bodyLinks": [
        {
          "href": "/services/purchase-order-reconciliation",
          "label": "purchase order reconciliation support"
        },
        {
          "href": "/services/three-way-match-support",
          "label": "three-way match support"
        },
        {
          "href": "/blog",
          "label": "AP operating guides"
        }
      ],
      "faqs": [
        {
          "question": "Can AP approve a small price variance?",
          "answer": "Only within a written delegation that names the limit and the evidence required. The buyer usually owns the commercial price decision."
        },
        {
          "question": "What counts as the price variance?",
          "answer": "The difference between the invoiced unit price and the PO unit price at the invoiced quantity. Freight and quantity differences belong in their own categories."
        },
        {
          "question": "What if the PO was revised after the invoice date?",
          "answer": "Check the effective date. A later revision does not automatically apply to an earlier delivery unless the approved change says it does."
        },
        {
          "question": "How should a disputed variance be closed?",
          "answer": "Close on an approved PO change, an applied supplier credit, or a documented payment decision. A promise to review is still open."
        }
      ],
      "sources": [
        {
          "name": "SBA: Manage your business",
          "url": "https://www.sba.gov/business-guide/manage-your-business",
          "note": "Small-business management guidance used as general context for purchasing and payable routines."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control context for authorization, change control, and audit records over purchase order revisions."
        },
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records policy supporting retention of PO versions and variance dispositions."
        },
        {
          "name": "SBA: Stay legally compliant",
          "url": "https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant",
          "note": "Compliance guidance used as general context for documented commercial records."
        }
      ]
    }
  },
  {
    "slug": "ap-audit-sample-preparation",
    "title": "Prepare an AP Audit Sample",
    "excerpt": "Read the request, define the population, preserve the selection, assemble the evidence, and handle missing items without substituting a cleaner example.",
    "minutes": 9,
    "detail": {
      "thumbnail": "/oct22-heroes/ap-audit-sample-preparation.webp",
      "shortAnswer": "An AP audit sample is defensible when the population, period, selection method, and evidence package are fixed before anyone sees the results. Missing items stay visible, and the preparer does not replace them with a more convenient record.",
      "published": "2026-10-22",
      "modified": "2026-10-22",
      "mainKeyword": "AP audit sample preparation",
      "sections": [
        {
          "title": "Read the request before pulling data",
          "paragraphs": [
            "Clarify the control being tested, the entity, the period, the population, and the evidence the auditor expects. Ask whether the sample is statistical or judgmental and whether the auditor will select the items or accept a company selection.",
            "Write the request interpretation in the workpaper and confirm it with the auditor. A sample pulled from the wrong period or entity wastes days and can make a valid control look broken. The confirmation should be in writing, not a hallway understanding.",
            "If the request is ambiguous, ask one consolidated question rather than starting the pull and correcting it later. The clarification and the answer belong in the workpaper. Record the auditor's name and the date of the request so the package has a clear owner and timeline."
          ]
        },
        {
          "title": "Define the population and the period",
          "paragraphs": [
            "Build the population from the system of record using a stated query and date range. Record the report name, run time, filters, row count, and control total. Include cancelled, reversed, and on-hold items unless the request explicitly excludes them.",
            "Reconcile the row count to an independent control, such as the invoice register or the general ledger activity. If the population cannot be reconciled, document the gap before sampling. A sample from an unreconciled population cannot support a conclusion about the whole.",
            "Save the query text and the parameters with the extract. A screenshot of the result is not enough to reproduce the population. If the population changes after the extract, take a new extract and keep both versions rather than editing the first."
          ]
        },
        {
          "title": "Preserve the selection method",
          "paragraphs": [
            "If the auditor selects the items, keep the selection file exactly as received. If the company selects, document the method, the random seed or starting point, and the person who ran it. Do not re-draw because the first sample produced an inconvenient item.",
            "Record any stratification, such as high-value invoices or manual payments. A judgmental sample should state the judgment. The point is to make the selection reproducible, not to make it look statistical when it is not.",
            "If a selected item is later found to be outside the population, keep it in the sample and document the reason. Removing it after selection changes the sample and should require the auditor's agreement."
          ]
        },
        {
          "title": "Assemble the evidence package",
          "paragraphs": [
            "For each item, collect the invoice image, PO, receipt or service evidence, approval, vendor master extract, payment record, and any exception note. Use the same evidence standard for every item so the sample is comparable.",
            "Index the files by sample number and document type. A reviewer should be able to open one folder and see the complete trail without searching an inbox. Keep file names stable and avoid duplicates with slightly different labels.",
            "Use a consistent naming convention and a file index that maps each sample number to its documents. Avoid scanning a document twice under two names, because duplicates confuse the evidence count. Redact unrelated supplier data only where the auditor agrees; otherwise keep the document intact so the evidence is not altered."
          ]
        },
        {
          "title": "Handle missing items without substitution",
          "paragraphs": [
            "If an item is missing, record what was requested, where it was searched, who was asked, and the date. Mark the item as missing or partially supported. Do not replace it with a similar invoice that has better evidence.",
            "Escalate a missing item to the control owner with a specific request. If the evidence cannot be produced, say so in the package. The auditor needs to distinguish a control failure from a filing problem, and substitution destroys that distinction.",
            "Tell the auditor early when an item cannot be produced. A late disclosure is harder to interpret than an early one, and the auditor may have an alternative procedure."
          ]
        },
        {
          "title": "Keep preparer and reviewer separate",
          "paragraphs": [
            "The person who assembles the package should not be the only person who confirms its completeness. Add a reviewer check for population reconciliation, sample completeness, and evidence quality. Record the reviewer and date.",
            "If the same small team performs both roles, document the compensating check. Separation is a control, but a documented second look is better than an undocumented assumption that someone checked.",
            "The reviewer should check a sample of the sample, not only the tracker. Open a few folders and confirm the document matches the item and the index."
          ]
        },
        {
          "title": "Index the sample for review",
          "paragraphs": [
            "Create a sample tracker with item number, invoice number, supplier, amount, date, evidence status, exception, owner, and reviewer note. Link each row to the folder or document identifier. Keep the tracker versioned.",
            "Summarize the sample size, population size, selection method, and evidence status. Do not summarize the result as a pass rate unless the auditor defined what counts as a pass. The tracker should support the auditor's conclusion, not replace it.",
            "Keep the tracker and the files in the same repository version so a reviewer is not reading a later list against earlier evidence. If the tracker changes after review, note the change and the reason."
          ]
        },
        {
          "title": "Answer follow-up questions with evidence",
          "paragraphs": [
            "When the auditor asks about an item, respond with the document and the explanation, not a narrative that cannot be traced. If the answer changes the package, add a note with the date and the source of the new information.",
            "Keep a log of questions and responses. A repeated question may mean the index is unclear or the evidence is hard to find. Fix the package structure rather than answering the same question three times.",
            "If a follow-up reveals a control gap, document the gap and the remediation owner. Do not rewrite the original evidence to make the sample look cleaner."
          ]
        },
        {
          "title": "Close the sample with a control note",
          "paragraphs": [
            "Close when every selected item has a status, the population reconciliation is attached, the reviewer has signed, and open questions have owners. The control note should state what was tested, what was found, and what remains unresolved.",
            "Retain the package for the required period and restrict access to the people who need it. An audit sample contains supplier and payment data; it should not circulate as a general team file after the review ends.",
            "State the evidence status for every item, including the ones that were fully supported. A package that lists only exceptions gives the reader no sense of coverage. Retain the final tracker with the reviewer sign-off and the auditor's follow-up log."
          ]
        }
      ],
      "checklistTitle": "Check the audit sample package",
      "checklist": [
        "The request, control, entity, and period are confirmed in writing",
        "Population query, run time, row count, and control total are recorded",
        "Selection method and any stratification are documented",
        "Every item has a stable index and evidence set",
        "Missing items are recorded, not substituted",
        "A separate reviewer checks completeness",
        "The tracker shows status, owner, and open questions"
      ],
      "bodyLinks": [
        {
          "href": "/services/aging-report-preparation",
          "label": "AP reporting and evidence support"
        },
        {
          "href": "/services/invoice-data-capture",
          "label": "invoice intake and document control"
        },
        {
          "href": "/contact-us",
          "label": "plan an audit support lane"
        }
      ],
      "faqs": [
        {
          "question": "Can we replace a missing invoice with a similar one?",
          "answer": "No. Record the missing item and the search performed. Substitution changes the sample and hides whether the control actually left evidence."
        },
        {
          "question": "Who should select the sample?",
          "answer": "Follow the auditor's instruction. If the company selects, document the method and the person who ran it so the selection can be reproduced."
        },
        {
          "question": "What if the population does not reconcile?",
          "answer": "Document the gap and resolve it before sampling, or disclose the limitation to the auditor. A sample from an unreconciled population has limited evidentiary value."
        },
        {
          "question": "How should the package be stored?",
          "answer": "In the approved audit repository with restricted access, a stable index, and retention aligned to the company's records schedule."
        }
      ],
      "sources": [
        {
          "name": "NARA: Records management policy",
          "url": "https://www.archives.gov/records-mgmt/policy",
          "note": "Records-management policy supporting an indexed, retained audit evidence package."
        },
        {
          "name": "NIST SP 800-53 Rev. 5",
          "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
          "note": "Control catalog context for audit logging, evidence retention, and separation of duties."
        },
        {
          "name": "SBA: Stay legally compliant",
          "url": "https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant",
          "note": "Small-business compliance guidance used as general context for documented records."
        },
        {
          "name": "EEOC: Recordkeeping requirements",
          "url": "https://www.eeoc.gov/employers/recordkeeping-requirements",
          "note": "Recordkeeping guidance used only for retention discipline, not as AP audit criteria."
        }
      ]
    }
  }
];
export const oct22BlogPosts=oct22BlogDrafts.map(({slug,title,excerpt,minutes})=>({slug,title,excerpt,minutes}));
export const oct22BlogDetails=Object.fromEntries(oct22BlogDrafts.map(post=>[post.slug,post.detail]));
