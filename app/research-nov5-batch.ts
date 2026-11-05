import type {ResearchPost} from './research-batch';
export const nov5ResearchPublicationDate='2026-11-04';
type Nov4ResearchRecord=Omit<ResearchPost,'body'>&{sections:{heading:string;paragraphs:string[]}[]};
const nov5ResearchRecords:Nov4ResearchRecord[]=[
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
          "This measurement note covers the vendor credit note matching file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor credit note, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for vendor credit note matching before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A credit note is posted while the invoice reference and the amount still disagree. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the vendor credit note matching report."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change."
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
    "cta": {
      "text": "Review the AP workflow",
      "href": "/contact-us"
    },
    "serviceHandoff": {
      "text": "Plan this vendor credit note matching workflow with bounded roles and evidence.",
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
          "This measurement note covers the purchase order coverage file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one purchase order, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for purchase order coverage before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An invoice enters the queue while the purchase order number is absent or closed. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the purchase order coverage report."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change."
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
    "cta": {
      "text": "Review the AP workflow",
      "href": "/contact-us"
    },
    "serviceHandoff": {
      "text": "Plan this purchase order coverage workflow with bounded roles and evidence.",
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
          "This measurement note covers the three-way match exception aging file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one three-way match exception, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for three-way match exception aging before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An exception waits while the receipt, the invoice, and the approval sit in different queues. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the three-way match exception aging report."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change."
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
    "cta": {
      "text": "Review the AP workflow",
      "href": "/contact-us"
    },
    "serviceHandoff": {
      "text": "Plan this three-way match exception aging workflow with bounded roles and evidence.",
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
          "This measurement note covers the statement credit posting time file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one statement credit, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for statement credit posting time before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A credit is promised on the statement but not traced to the ledger. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the statement credit posting time report."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change."
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
    "cta": {
      "text": "Review the AP workflow",
      "href": "/contact-us"
    },
    "serviceHandoff": {
      "text": "Plan this statement credit posting time workflow with bounded roles and evidence.",
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
          "This measurement note covers the duplicate payment verification time file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one duplicate payment claim, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for duplicate payment verification time before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A duplicate claim is opened without the bank reference or the original payment date. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the duplicate payment verification time report."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change."
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
    "cta": {
      "text": "Review the AP workflow",
      "href": "/contact-us"
    },
    "serviceHandoff": {
      "text": "Plan this duplicate payment verification time workflow with bounded roles and evidence.",
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
          "This measurement note covers the approval matrix currency file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one approval matrix, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for approval matrix currency before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An approver leaves the role while the matrix still names them for a band. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the approval matrix currency report."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change."
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
    "cta": {
      "text": "Review the AP workflow",
      "href": "/contact-us"
    },
    "serviceHandoff": {
      "text": "Plan this approval matrix currency workflow with bounded roles and evidence.",
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
          "This measurement note covers the vendor onboarding evidence file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor onboarding file, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for vendor onboarding evidence before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Every sampled item needs the source, the observation time, the field it supports, the reviewer, and the finance owner. Missing and confirmed-negative values stay separate in the report. Vendor and payment detail remains in the approved system; working notes use a reference. The protocol collects only evidence it can defend."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A vendor record exists without the tax form, bank verification, or approval date. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the vendor onboarding evidence report."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "General control and recordkeeping guidance frames the review but cannot answer this sample or a specific payment question. A complete file does not prove that a payment decision was correct. The method measures evidence quality rather than financial accuracy. Limits belong beside the result."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Choose a fixed review date. End with one process change, one owner, and one check date. A repeated defect should change the template, the source, or the rule before coaching. Reuse the same sample rule each time and attach the review note to the change."
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
    "cta": {
      "text": "Review the AP workflow",
      "href": "/contact-us"
    },
    "serviceHandoff": {
      "text": "Plan this vendor onboarding evidence workflow with bounded roles and evidence.",
      "href": "/services"
    }
  }
];
export const nov5ResearchBatch:ResearchPost[]=nov5ResearchRecords.map((record)=>({...record,body:record.sections.map((section)=>`## ${section.heading}\n\n${section.paragraphs.join("\n\n")}`).join("\n\n")}));
