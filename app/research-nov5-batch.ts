import type {ResearchPost} from './research-batch';
export const nov5ResearchPublicationDate='2026-11-05';
type Nov5ResearchRecord=Omit<ResearchPost,'body'>&{sections:{heading:string;paragraphs:string[]}[]};
const nov5ResearchRecords:Nov5ResearchRecord[]=[
  {
    "slug": "how-often-do-vendor-credit-notes-match-the-open-invoice",
    "title": "How often do vendor credit notes match the open invoice?",
    "excerpt": "A bounded measurement protocol for vendor credit note matching with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-05",
    "modified": "2026-11-05",
    "thumbnail": "/nov5-heroes/how-often-do-vendor-credit-notes-match-the-open-invoice.webp",
    "keywords": [
      "accounts payable outsourcing",
      "vendor credit note matching",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the vendor credit note matching file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. The working file keeps the vendor reference, the approval date, and the reviewer beside the exception."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor credit note, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for vendor credit note matching before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The exception log separates a source gap from a disputed amount."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. The queue owner reviews aged items at a fixed cutoff and names the next action."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A credit note is posted while the invoice reference and the amount still disagree. A queue export is the starting point, not a list assembled after the result is known. The release decision records who approved the payment and when."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the vendor credit note matching report. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. Month-end review samples one routine file and one reopened case."
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
      "body": "Plan this vendor credit note matching workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "what-share-of-invoices-arrive-without-a-valid-purchase-order",
    "title": "What share of invoices arrive without a valid purchase order?",
    "excerpt": "A bounded measurement protocol for purchase order coverage with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-05",
    "modified": "2026-11-05",
    "thumbnail": "/nov5-heroes/what-share-of-invoices-arrive-without-a-valid-purchase-order.webp",
    "keywords": [
      "accounts payable outsourcing",
      "purchase order coverage",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the purchase order coverage file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one purchase order, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. Every closed item carries a destination reference and a next check date."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for purchase order coverage before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The reconciliation note links the statement line to the ledger entry."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. Any disputed amount stays visible until the finance owner records the corrected value."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An invoice enters the queue while the purchase order number is absent or closed. A queue export is the starting point, not a list assembled after the result is known. Any disputed amount stays visible until the finance owner records the corrected value."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the purchase order coverage report. A recurring schedule is checked against the invoice before the next run."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. The audit trail shows the source version and the correction date."
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
      "body": "Plan this purchase order coverage workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-old-do-three-way-match-exceptions-become-before-review",
    "title": "How old do three-way match exceptions become before review?",
    "excerpt": "A bounded measurement protocol for three-way match exception aging with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-05",
    "modified": "2026-11-05",
    "thumbnail": "/nov5-heroes/how-old-do-three-way-match-exceptions-become-before-review.webp",
    "keywords": [
      "accounts payable outsourcing",
      "three-way match exception aging",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the three-way match exception aging file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. The audit trail shows the source version and the correction date."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one three-way match exception, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for three-way match exception aging before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. Every closed item carries a destination reference and a next check date."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An exception waits while the receipt, the invoice, and the approval sit in different queues. A queue export is the starting point, not a list assembled after the result is known. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the three-way match exception aging report. A recurring schedule is checked against the invoice before the next run."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. Any disputed amount stays visible until the finance owner records the corrected value."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. The reconciliation note links the statement line to the ledger entry."
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
      "body": "Plan this three-way match exception aging workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-long-does-a-statement-credit-take-to-post",
    "title": "How long does a statement credit take to post?",
    "excerpt": "A bounded measurement protocol for statement credit posting time with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-05",
    "modified": "2026-11-05",
    "thumbnail": "/nov5-heroes/how-long-does-a-statement-credit-take-to-post.webp",
    "keywords": [
      "accounts payable outsourcing",
      "statement credit posting time",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the statement credit posting time file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. The working file keeps the vendor reference, the approval date, and the reviewer beside the exception."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one statement credit, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. The specialist routes policy or payment authority to the named owner."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for statement credit posting time before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. Every closed item carries a destination reference and a next check date."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A credit is promised on the statement but not traced to the ledger. A queue export is the starting point, not a list assembled after the result is known. The specialist routes policy or payment authority to the named owner."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the statement credit posting time report. The audit trail shows the source version and the correction date."
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
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. Any disputed amount stays visible until the finance owner records the corrected value."
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
      "body": "Plan this statement credit posting time workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-quickly-are-duplicate-payment-claims-verified",
    "title": "How quickly are duplicate payment claims verified?",
    "excerpt": "A bounded measurement protocol for duplicate payment verification time with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-05",
    "modified": "2026-11-05",
    "thumbnail": "/nov5-heroes/how-quickly-are-duplicate-payment-claims-verified.webp",
    "keywords": [
      "accounts payable outsourcing",
      "duplicate payment verification time",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the duplicate payment verification time file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. Any disputed amount stays visible until the finance owner records the corrected value."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one duplicate payment claim, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. Duplicate bank details are checked before the batch leaves the queue."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for duplicate payment verification time before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The release decision records who approved the payment and when."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend. Month-end review samples one routine file and one reopened case."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A duplicate claim is opened without the bank reference or the original payment date. A queue export is the starting point, not a list assembled after the result is known. The specialist routes policy or payment authority to the named owner."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the duplicate payment verification time report. Duplicate bank details are checked before the batch leaves the queue."
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
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. Access stays limited to the specialist handling that vendor record."
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
      "body": "Plan this duplicate payment verification time workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "is-a-payment-approval-matrix-current-for-every-amount-band",
    "title": "Is a payment approval matrix current for every amount band?",
    "excerpt": "A bounded measurement protocol for approval matrix currency with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-05",
    "modified": "2026-11-05",
    "thumbnail": "/nov5-heroes/is-a-payment-approval-matrix-current-for-every-amount-band.webp",
    "keywords": [
      "accounts payable outsourcing",
      "approval matrix currency",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the approval matrix currency file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. Any disputed amount stays visible until the finance owner records the corrected value."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one approval matrix, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. A controller can compare the batch, the source document, and the release note without reopening the whole inbox."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for approval matrix currency before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The working file keeps the vendor reference, the approval date, and the reviewer beside the exception."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An approver leaves the role while the matrix still names them for a band. A queue export is the starting point, not a list assembled after the result is known. Any disputed amount stays visible until the finance owner records the corrected value."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the approval matrix currency report. A vendor change requires a second reviewer and a dated call-back."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. A controller can compare the batch, the source document, and the release note without reopening the whole inbox."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. Access stays limited to the specialist handling that vendor record."
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
      "body": "Plan this approval matrix currency workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "what-evidence-supports-a-vendor-onboarding-file",
    "title": "What evidence supports a vendor onboarding file?",
    "excerpt": "A bounded measurement protocol for vendor onboarding evidence with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-05",
    "modified": "2026-11-05",
    "thumbnail": "/nov5-heroes/what-evidence-supports-a-vendor-onboarding-file.webp",
    "keywords": [
      "accounts payable outsourcing",
      "vendor onboarding evidence",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the vendor onboarding evidence file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below. The specialist routes policy or payment authority to the named owner."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor onboarding file, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample. A vendor change requires a second reviewer and a dated call-back."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for vendor onboarding evidence before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding. The exception log separates a source gap from a disputed amount."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A vendor record exists without the tax form, bank verification, or approval date. A queue export is the starting point, not a list assembled after the result is known. Any disputed amount stays visible until the finance owner records the corrected value."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the vendor onboarding evidence report. Access stays limited to the specialist handling that vendor record."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result. A controller can compare the batch, the source document, and the release note without reopening the whole inbox."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change. The reconciliation note links the statement line to the ledger entry."
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
      "body": "Plan this vendor onboarding evidence workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  }
];
export const nov5ResearchBatch:ResearchPost[]=nov5ResearchRecords.map((record)=>({...record,body:record.sections.map((section)=>`## ${section.heading}\n\n${section.paragraphs.join("\n\n")}`)}));
