import type {ResearchPost} from './research-batch';
export const nov6ResearchPublicationDate='2026-11-06';
type Nov4ResearchRecord=Omit<ResearchPost,'body'>&{sections:{heading:string;paragraphs:string[
  {
    "slug": "how-often-do-freight-invoices-match-the-shipment-record",
    "title": "How often do freight invoices match the shipment record?",
    "excerpt": "A bounded measurement protocol for freight invoice matching with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-06",
    "modified": "2026-11-06",
    "thumbnail": "/nov6-heroes/how-often-do-freight-invoices-match-the-shipment-record.webp",
    "keywords": [
      "accounts payable outsourcing",
      "freight invoice matching",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the freight invoice matching file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. Every closed item carries a destination reference and a next check date."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one freight invoice, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for freight invoice matching before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A freight invoice posts while the shipment record and the rate confirmation disagree. A queue export is the starting point, not a list assembled after the result is known. A vendor change requires a second reviewer and a dated call-back."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the freight invoice matching report. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. A reviewer can rebuild the decision from the ledger, the source document, and the approval note."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. A vendor change requires a second reviewer and a dated call-back."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Green Book",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "href": "https://www.nist.gov/cyberframework"
      }
    ],
    "internalLinks": [
      {
        "label": "Services",
        "href": "/services"
      }
    ],
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this freight invoice matching workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "what-share-of-vendor-statements-have-unapplied-credits",
    "title": "What share of vendor statements have unapplied credits?",
    "excerpt": "A bounded measurement protocol for statement credit coverage with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-06",
    "modified": "2026-11-06",
    "thumbnail": "/nov6-heroes/what-share-of-vendor-statements-have-unapplied-credits.webp",
    "keywords": [
      "accounts payable outsourcing",
      "statement credit coverage",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the statement credit coverage file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor statement, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. Every closed item carries a destination reference and a next check date."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for statement credit coverage before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. A missing document is marked missing rather than reconstructed from memory."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A statement shows a credit that the ledger has not applied. A queue export is the starting point, not a list assembled after the result is known. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the statement credit coverage report. A missing document is marked missing rather than reconstructed from memory."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. A reviewer can rebuild the decision from the ledger, the source document, and the approval note."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Green Book",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "href": "https://www.nist.gov/cyberframework"
      }
    ],
    "internalLinks": [
      {
        "label": "Services",
        "href": "/services"
      }
    ],
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this statement credit coverage workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "do-payment-batches-include-remittance-advice",
    "title": "Do payment batches include remittance advice?",
    "excerpt": "A bounded measurement protocol for remittance advice coverage with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-06",
    "modified": "2026-11-06",
    "thumbnail": "/nov6-heroes/do-payment-batches-include-remittance-advice.webp",
    "keywords": [
      "accounts payable outsourcing",
      "remittance advice coverage",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the remittance advice coverage file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one payment batch, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. A missing document is marked missing rather than reconstructed from memory."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for remittance advice coverage before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A batch releases while one or more payments lack remittance advice. A queue export is the starting point, not a list assembled after the result is known. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the remittance advice coverage report. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Green Book",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "href": "https://www.nist.gov/cyberframework"
      }
    ],
    "internalLinks": [
      {
        "label": "Services",
        "href": "/services"
      }
    ],
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this remittance advice coverage workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-long-do-purchase-card-disputes-take-to-resolve",
    "title": "How long do purchase card disputes take to resolve?",
    "excerpt": "A bounded measurement protocol for purchase card dispute time with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-06",
    "modified": "2026-11-06",
    "thumbnail": "/nov6-heroes/how-long-do-purchase-card-disputes-take-to-resolve.webp",
    "keywords": [
      "accounts payable outsourcing",
      "purchase card dispute time",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the purchase card dispute time file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one purchase card dispute, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for purchase card dispute time before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The release decision records who approved the payment and when."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A dispute waits while the card statement and the merchant response are unclear. A queue export is the starting point, not a list assembled after the result is known. The release decision records who approved the payment and when."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the purchase card dispute time report. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. The exception log separates a source gap from a disputed amount."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Green Book",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "href": "https://www.nist.gov/cyberframework"
      }
    ],
    "internalLinks": [
      {
        "label": "Services",
        "href": "/services"
      }
    ],
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this purchase card dispute time workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "are-vendor-master-changes-backed-by-a-call-back-record",
    "title": "Are vendor master changes backed by a call-back record?",
    "excerpt": "A bounded measurement protocol for vendor master change verification with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-06",
    "modified": "2026-11-06",
    "thumbnail": "/nov6-heroes/are-vendor-master-changes-backed-by-a-call-back-record.webp",
    "keywords": [
      "accounts payable outsourcing",
      "vendor master change verification",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the vendor master change verification file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor master change, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for vendor master change verification before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. The working file keeps the vendor reference, the payment date, and the controller beside the exception."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A bank or address change is saved without a documented call-back. A queue export is the starting point, not a list assembled after the result is known. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the vendor master change verification report. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. A missing document is marked missing rather than reconstructed from memory."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. The working file keeps the vendor reference, the payment date, and the controller beside the exception."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Green Book",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "href": "https://www.nist.gov/cyberframework"
      }
    ],
    "internalLinks": [
      {
        "label": "Services",
        "href": "/services"
      }
    ],
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this vendor master change verification workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "is-month-end-accrual-support-reproducible",
    "title": "Is month-end accrual support reproducible?",
    "excerpt": "A bounded measurement protocol for accrual support reproducibility with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-06",
    "modified": "2026-11-06",
    "thumbnail": "/nov6-heroes/is-month-end-accrual-support-reproducible.webp",
    "keywords": [
      "accounts payable outsourcing",
      "accrual support reproducibility",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the accrual support reproducibility file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one accrual support, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for accrual support reproducibility before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. A vendor change requires a second reviewer and a dated call-back."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. Every closed item carries a destination reference and a next check date."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An accrual cannot be rebuilt from the invoice, receipt, and approval. A queue export is the starting point, not a list assembled after the result is known. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the accrual support reproducibility report. The release decision records who approved the payment and when."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. The release decision records who approved the payment and when."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Green Book",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "href": "https://www.nist.gov/cyberframework"
      }
    ],
    "internalLinks": [
      {
        "label": "Services",
        "href": "/services"
      }
    ],
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this accrual support reproducibility workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-often-do-invoice-coding-changes-carry-approval",
    "title": "How often do invoice coding changes carry approval?",
    "excerpt": "A bounded measurement protocol for invoice coding approval coverage with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-06",
    "modified": "2026-11-06",
    "thumbnail": "/nov6-heroes/how-often-do-invoice-coding-changes-carry-approval.webp",
    "keywords": [
      "accounts payable outsourcing",
      "invoice coding approval coverage",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the invoice coding approval coverage file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. The release decision records who approved the payment and when."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one invoice coding change, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for invoice coding approval coverage before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An invoice is recoded without the approver or the reason. A queue export is the starting point, not a list assembled after the result is known. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the invoice coding approval coverage report. Every closed item carries a destination reference and a next check date."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. Every closed item carries a destination reference and a next check date."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Green Book",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "href": "https://www.nist.gov/cyberframework"
      }
    ],
    "internalLinks": [
      {
        "label": "Services",
        "href": "/services"
      }
    ],
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this invoice coding approval coverage workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  }
];
export const nov6ResearchBatch:ResearchPost[]=nov6ResearchRecords.map((record)=>({...record,body:record.sections.map((section)=>`## ${section.heading}\n\n${section.paragraphs.join("\n\n")}`)}));
