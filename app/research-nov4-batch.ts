import type {ResearchPost} from './research-batch';
export const nov4ResearchPublicationDate='2026-11-04';
type Nov4ResearchRecord=Omit<ResearchPost,'body'>&{sections:{heading:string;paragraphs:string[]}[]};
const nov4ResearchRecords:Nov4ResearchRecord[]=[
  {
    "slug": "how-often-do-vendor-statements-reconcile-before-the-payment-run",
    "title": "How often do vendor statements reconcile before the payment run?",
    "excerpt": "A bounded measurement protocol for vendor statement reconciliation with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-04",
    "modified": "2026-11-04",
    "thumbnail": "/nov4-heroes/how-often-do-vendor-statements-reconcile-before-the-payment-run.webp",
    "keywords": [
      "accounts payable outsourcing",
      "vendor statement reconciliation",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the vendor statement reconciliation file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor statement, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for vendor statement reconciliation before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A statement can appear reconciled while a credit, a missing invoice, or a payment date is unresolved. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the vendor statement reconciliation report."
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
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this vendor statement reconciliation workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-old-do-invoice-approval-exceptions-become-before-review",
    "title": "How old do invoice approval exceptions become before review?",
    "excerpt": "A bounded measurement protocol for invoice approval exception aging with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-04",
    "modified": "2026-11-04",
    "thumbnail": "/nov4-heroes/how-old-do-invoice-approval-exceptions-become-before-review.webp",
    "keywords": [
      "accounts payable outsourcing",
      "invoice approval exception aging",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the invoice approval exception aging file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one invoice approval exception, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for invoice approval exception aging before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: Age is a signal; the approver, the missing code, and the payment date determine the next action. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the invoice approval exception aging report."
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
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this invoice approval exception aging workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "can-a-payment-run-checklist-be-reproduced-from-its-approvals",
    "title": "Can a payment run checklist be reproduced from its approvals?",
    "excerpt": "A bounded measurement protocol for payment run checklist reproducibility with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-04",
    "modified": "2026-11-04",
    "thumbnail": "/nov4-heroes/can-a-payment-run-checklist-be-reproduced-from-its-approvals.webp",
    "keywords": [
      "accounts payable outsourcing",
      "payment run checklist reproducibility",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the payment run checklist reproducibility file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one payment run checklist, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for payment run checklist reproducibility before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A checklist is not reproducible when the approval date, the batch reference, or the releaser is missing. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the payment run checklist reproducibility report."
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
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this payment run checklist reproducibility workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "what-share-of-ap-inbox-requests-lack-a-purchase-order",
    "title": "What share of AP inbox requests lack a purchase order?",
    "excerpt": "A bounded measurement protocol for AP inbox missing purchase order with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-04",
    "modified": "2026-11-04",
    "thumbnail": "/nov4-heroes/what-share-of-ap-inbox-requests-lack-a-purchase-order.webp",
    "keywords": [
      "accounts payable outsourcing",
      "AP inbox missing purchase order",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the AP inbox missing purchase order file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one AP inbox request, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for AP inbox missing purchase order before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A request can look complete while the purchase order, the vendor reference, or the approval is absent. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the AP inbox missing purchase order report."
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
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this AP inbox missing purchase order workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-current-is-a-vendor-tax-document-register",
    "title": "How current is a vendor tax document register?",
    "excerpt": "A bounded measurement protocol for vendor tax document currency with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-04",
    "modified": "2026-11-04",
    "thumbnail": "/nov4-heroes/how-current-is-a-vendor-tax-document-register.webp",
    "keywords": [
      "accounts payable outsourcing",
      "vendor tax document currency",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the vendor tax document currency file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor tax document, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for vendor tax document currency before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A register can list a form without proving that the version or the expiry date is current. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the vendor tax document currency report."
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
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this vendor tax document currency workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "is-a-month-end-ap-close-packet-complete-before-handoff",
    "title": "Is a month-end AP close packet complete before handoff?",
    "excerpt": "A bounded measurement protocol for month-end AP close completeness with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-04",
    "modified": "2026-11-04",
    "thumbnail": "/nov4-heroes/is-a-month-end-ap-close-packet-complete-before-handoff.webp",
    "keywords": [
      "accounts payable outsourcing",
      "month-end AP close completeness",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the month-end AP close completeness file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one month-end AP close packet, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for month-end AP close completeness before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A close packet can appear ready while an open item, a reconciliation note, or an approval is missing. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the month-end AP close completeness report."
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
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this month-end AP close completeness workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-quickly-are-vendor-bank-change-requests-verified",
    "title": "How quickly are vendor bank change requests verified?",
    "excerpt": "A bounded measurement protocol for vendor bank change verification time with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-04",
    "modified": "2026-11-04",
    "thumbnail": "/nov4-heroes/how-quickly-are-vendor-bank-change-requests-verified.webp",
    "keywords": [
      "accounts payable outsourcing",
      "vendor bank change verification time",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the vendor bank change verification time file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor bank change request, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for vendor bank change verification time before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A bank change can move quickly while the call-back evidence and the second review are still absent. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the vendor bank change verification time report."
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
    "cta": "Review the AP workflow",
    "serviceHandoff": {
      "heading": "Related service",
      "body": "Plan this vendor bank change verification time workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  }
];
export const nov4ResearchBatch:ResearchPost[]=nov4ResearchRecords.map((record)=>({...record,body:record.sections.map((section)=>`## ${section.heading}\n\n${section.paragraphs.join("\n\n")}`)}));
