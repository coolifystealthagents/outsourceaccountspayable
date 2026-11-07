import type {ResearchPost} from './research-batch';
export const nov7ResearchPublicationDate='2026-11-07';
type Nov7ResearchRecord=Omit<ResearchPost,'body'>&{sections:{heading:string;paragraphs:string[]}[]};
const nov7ResearchRecords:Nov7ResearchRecord[]=[
  {
    "slug": "do-vendor-prepayments-reconcile-to-open-invoices",
    "title": "Do vendor prepayments reconcile to open invoices?",
    "excerpt": "A bounded measurement protocol for prepayment reconciliation with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-07",
    "modified": "2026-11-07",
    "thumbnail": "/nov7-heroes/do-vendor-prepayments-reconcile-to-open-invoices.webp",
    "keywords": [
      "accounts payable outsourcing",
      "prepayment reconciliation",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the prepayment reconciliation file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one vendor prepayment, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for prepayment reconciliation before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A prepayment posts while the open invoice and the vendor reference disagree. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the prepayment reconciliation report."
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
      "body": "Plan this prepayment reconciliation workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-often-are-duplicate-invoice-flags-resolved-before-payment",
    "title": "How often are duplicate invoice flags resolved before payment?",
    "excerpt": "A bounded measurement protocol for duplicate flag resolution with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-07",
    "modified": "2026-11-07",
    "thumbnail": "/nov7-heroes/how-often-are-duplicate-invoice-flags-resolved-before-payment.webp",
    "keywords": [
      "accounts payable outsourcing",
      "duplicate flag resolution",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the duplicate flag resolution file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one duplicate invoice flag, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for duplicate flag resolution before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A payment releases while a duplicate flag remains unresolved. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the duplicate flag resolution report."
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
      "body": "Plan this duplicate flag resolution workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "are-bank-detail-changes-confirmed-by-an-independent-call-back",
    "title": "Are bank detail changes confirmed by an independent call-back?",
    "excerpt": "A bounded measurement protocol for bank change verification with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-07",
    "modified": "2026-11-07",
    "thumbnail": "/nov7-heroes/are-bank-detail-changes-confirmed-by-an-independent-call-back.webp",
    "keywords": [
      "accounts payable outsourcing",
      "bank change verification",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the bank change verification file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one bank detail change, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for bank change verification before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A bank change is saved without an independent call-back record. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the bank change verification report."
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
      "body": "Plan this bank change verification workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "how-complete-is-the-payment-hold-report-before-the-run",
    "title": "How complete is the payment hold report before the run?",
    "excerpt": "A bounded measurement protocol for payment hold completeness with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-07",
    "modified": "2026-11-07",
    "thumbnail": "/nov7-heroes/how-complete-is-the-payment-hold-report-before-the-run.webp",
    "keywords": [
      "accounts payable outsourcing",
      "payment hold completeness",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the payment hold completeness file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one payment hold report, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for payment hold completeness before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A payment run starts while the hold report lacks an owner or reason. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the payment hold completeness report."
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
      "body": "Plan this payment hold completeness workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "do-tax-form-corrections-reach-vendor-confirmation",
    "title": "Do tax form corrections reach vendor confirmation?",
    "excerpt": "A bounded measurement protocol for tax correction confirmation with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-07",
    "modified": "2026-11-07",
    "thumbnail": "/nov7-heroes/do-tax-form-corrections-reach-vendor-confirmation.webp",
    "keywords": [
      "accounts payable outsourcing",
      "tax correction confirmation",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the tax correction confirmation file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one tax form correction, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for tax correction confirmation before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A correction is filed without the vendor confirmation or the source form. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the tax correction confirmation report."
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
      "body": "Plan this tax correction confirmation workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "is-purchase-order-tolerance-evidence-complete",
    "title": "Is purchase order tolerance evidence complete?",
    "excerpt": "A bounded measurement protocol for tolerance evidence completeness with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-07",
    "modified": "2026-11-07",
    "thumbnail": "/nov7-heroes/is-purchase-order-tolerance-evidence-complete.webp",
    "keywords": [
      "accounts payable outsourcing",
      "tolerance evidence completeness",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the tolerance evidence completeness file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one purchase order tolerance, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for tolerance evidence completeness before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: An exception is approved without the tolerance rule or the approver note. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the tolerance evidence completeness report."
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
      "body": "Plan this tolerance evidence completeness workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  },
  {
    "slug": "can-utility-invoice-meter-comparisons-be-reproduced",
    "title": "Can utility invoice meter comparisons be reproduced?",
    "excerpt": "A bounded measurement protocol for meter comparison reproducibility with one defined population, an evidence sample, and explicit limits.",
    "published": "2026-11-07",
    "modified": "2026-11-07",
    "thumbnail": "/nov7-heroes/can-utility-invoice-meter-comparisons-be-reproduced.webp",
    "keywords": [
      "accounts payable outsourcing",
      "meter comparison reproducibility",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This measurement note covers the meter comparison reproducibility file inside one accounts payable operation. It is a local review design, not a published finance rate or an audit conclusion. The finding applies to one population and one observation window. A controller can reproduce the method from the definition below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one utility meter comparison, followed from opening to verified close. Write the start trigger, the end evidence, and the pause rule before counting anything. A bare total is not a measurement if the queue size shifts during the close. Each exclusion is listed so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree the completeness test for meter comparison reproducibility before opening the queue. Name the required fields, the acceptable source documents, and the rule for a blank value. Report the eligible count, the exclusions, the sample size, and the unresolved items. A rate without a denominator and a window is not a finding."
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
          "Pull routine, exception, and reopened items from across the window. If a definition changes, preserve the earlier observation and write down the change date. Example: A utility invoice cannot be rebuilt from the meter reading and the prior bill. A queue export is the starting point, not a list assembled after the result is known."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the observation before the interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the finance owner who must make it. Put the sample size beside every rate in the meter comparison reproducibility report."
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
      "body": "Plan this meter comparison reproducibility workflow with bounded roles and evidence.",
      "label": "Review the AP workflow",
      "href": "/services"
    }
  }
];
export const nov7ResearchBatch:ResearchPost[]=nov7ResearchRecords.map((record)=>({...record,body:record.sections.map((section)=>`## ${section.heading}\n\n${section.paragraphs.join("\n\n")}`)}));
