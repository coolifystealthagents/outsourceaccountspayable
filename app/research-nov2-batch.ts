import type {ResearchPost} from './research-batch';
export const nov2ResearchPublicationDate='2026-11-02';
type Nov2ResearchRecord=Omit<ResearchPost,'body'>&{sections:{heading:string;paragraphs:string[]}[]};
const nov2ResearchRecords:Nov2ResearchRecord[]=[
  {
    "slug": "ap-touchless-invoice-capture-rate-research",
    "title": "Touchless Invoice Capture Rate: Evidence and Measurement Limits",
    "excerpt": "A bounded study of whether touchless-rate reporting distinguishes clean first-pass capture from records corrected after automatic posting.",
    "published": "2026-11-02",
    "modified": "2026-11-02",
    "thumbnail": "/nov2-heroes/ap-touchless-invoice-capture-rate-research.webp",
    "keywords": [
      "accounts payable outsourcing",
      "touchless invoice capture rate",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The study asks whether a touchless-rate metric separates invoices captured correctly on first pass from invoices that required a correction after an apparently automatic posting. The question is written so a reviewer can tell which decision the result would change and which decision it would leave untouched. The research note states the decision the study is meant to inform, the entity and period in scope, and the questions it will not answer. The scope names the entity, the observation window, the systems included, and the exclusions fixed before collection. The note also records the decision owner and the date by which the first result will be reviewed."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is the set of supplier invoices entering one entity's capture lane during a declared window; the unit is one invoice linked to its capture record, correction events, and posting receipt. A case that creates a new requirement on reopen is counted separately and linked to the earlier record. Every case in the touchless invoice capture rate population carries a stable key, a source reference, and a recorded inclusion or exclusion decision. The unit is defined once, and cases that span owners or periods are handled by the stated rule rather than by convenience. The case key remains stable if the case moves between owners or changes status during the window."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "A touchless invoice is defined as one posted without a human field correction, a reopen, or a downstream rejection, and the definition is frozen before the extract is drawn. Keep the measure and the population definition in the same note; a rate without a denominator is a slogan, and a denominator without an exclusion rule cannot be reproduced. The measure, the denominator, and the exclusion rule are written together so the reported result can be recomputed. Confirmed, inferred, conflicting, unavailable, and awaiting-decision states are reported separately rather than collapsed. A derived measure records its formula and the source fields used, so a second reviewer can reproduce the arithmetic."
        ]
      },
      {
        "heading": "Data dictionary and evidence",
        "paragraphs": [
          "The data dictionary records document type, channel, OCR confidence, correction field, correction actor, reopen reason, and the posting timestamp, with missing states kept distinct from zero. The dictionary is tested on a boundary case, a reopened case, and a case with a missing record. The field dictionary is archived with the extract, and each field names its source, its allowed states, and its missing-value rule. Each field names its allowed states, its source, and its missing-value rule before the first case is coded. Sensitive evidence stays in the approved repository; the analysis file keeps only the reference and the access path."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling takes consecutive invoices by channel plus a deliberate oversample of corrected records, because a clean random draw will underrepresent the cases that explain the rate. Freeze the sampling frame as an export with a date, filter, and row count, then record every substitution and exclusion before the first result is read. The sampling frame is frozen as an export before the first result is inspected, and substitutions are logged in the same file. The sample includes adverse cases because a clean draw of recent closures will miss the work that needs attention. The count of substituted and out-of-scope cases is reported with the sample, not buried in a working file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Analysis reports the rate by channel and document type, then compares corrected records to the correction field so the metric is not read as a quality score. Report the numerator, denominator, cohort, period, missing count, and unresolved count together; a single percentage hides the part of the sample that could not be classified. The analysis separates what was observed from what the team believes caused it, and it reports the count behind each share. Descriptive findings are separated from causal claims, and every share is reported with its numerator and denominator. An outlier is explained at case level before it is treated as a process signal."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Limitations include definition drift, unrecorded corrections made before capture, and the fact that a low correction count can reflect low review rather than high accuracy. The cited sources frame control, recordkeeping, security, or payment practice in their own domains; they do not certify a provider or establish an outcome for a private transaction. The limitations name the population that cannot be described and the evidence that would be needed to describe it. A result describes the observed sample, not the whole industry or every team in the service. A missing record is evidence about the record, not proof that the work was never done."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The review ends with one testable change and a re-measure date, such as a targeted template fix for the most common correction field. The re-measure date is set before the change begins so the review does not drift. The review ends with one change, one measure, one owner, and a date to test whether the change moved the result. The next action is one testable change with a named owner and a date, not a list of intentions. The action log names the change, the owner, the due date, and the measure that will show whether it worked."
        ]
      }
    ],
    "citations": [
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "IRS Recordkeeping Guidance",
        "href": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "GAO Standards for Internal Control in the Federal Government",
        "href": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Government Accountability Office",
        "href": "https://www.gao.gov/"
      }
    ],
    "internalLinks": [
      {
        "label": "Research library",
        "href": "/research"
      },
      {
        "label": "Accounts payable services",
        "href": "/services"
      },
      {
        "label": "Practical AP guides",
        "href": "/blog"
      }
    ],
    "cta": "Map the evidence boundary to a controlled AP support lane.",
    "serviceHandoff": {
      "heading": "Turn the evidence design into an AP operating brief",
      "body": "Bring the source systems, entities, touchless invoice capture rate population, exception owners, and retained decision roles to a bounded scoping session.",
      "label": "Plan the AP workflow",
      "href": "/contact-us"
    }
  },
  {
    "slug": "ap-approval-turnaround-tail-research",
    "title": "The Tail of AP Approval Turnaround: A Case-Level Study",
    "excerpt": "A case-level method for finding where approval time accumulates and which invoices create the long tail.",
    "published": "2026-11-02",
    "modified": "2026-11-02",
    "thumbnail": "/nov2-heroes/ap-approval-turnaround-tail-research.webp",
    "keywords": [
      "accounts payable outsourcing",
      "AP approval turnaround tail",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The study asks where approval time accumulates and whether the long tail comes from approver unavailability, queue design, or requests that should never have entered the approval lane. The scope names the entity, the observation window, the systems included, and the exclusions fixed before collection. The research note states the decision the study is meant to inform, the entity and period in scope, and the questions it will not answer. The question is written so a reviewer can tell which decision the result would change and which decision it would leave untouched. The note also records the decision owner and the date by which the first result will be reviewed."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is invoices that entered one approval workflow during the window; the unit is one approval cycle measured from validated request to final approval. The unit is defined once, and cases that span owners or periods are handled by the stated rule rather than by convenience. Every case in the AP approval turnaround tail population carries a stable key, a source reference, and a recorded inclusion or exclusion decision. A case that creates a new requirement on reopen is counted separately and linked to the earlier record. The case key remains stable if the case moves between owners or changes status during the window."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Elapsed time is split into waiting-for-owner, waiting-for-information, and waiting-for-system states so a single average cannot conceal the tail. Keep the measure and the population definition in the same note; a rate without a denominator is a slogan, and a denominator without an exclusion rule cannot be reproduced. The measure, the denominator, and the exclusion rule are written together so the reported result can be recomputed. Each measure has one definition, and a change to that definition is kept beside the prior version for the transition period. A derived measure records its formula and the source fields used, so a second reviewer can reproduce the arithmetic."
        ]
      },
      {
        "heading": "Data dictionary and evidence",
        "paragraphs": [
          "The dictionary records request time, each owner assignment, information requests, delegation events, final approval, and any reopen, with timestamps taken from the workflow log rather than email. Each field names its allowed states, its source, and its missing-value rule before the first case is coded. The field dictionary is archived with the extract, and each field names its source, its allowed states, and its missing-value rule. The dictionary is tested on a boundary case, a reopened case, and a case with a missing record. Sensitive evidence stays in the approved repository; the analysis file keeps only the reference and the access path."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling combines a random cohort with all cycles in the top decile, because the tail is the object of study and a clean random sample will understate it. Freeze the sampling frame as an export with a date, filter, and row count, then record every substitution and exclusion before the first result is read. The sampling frame is frozen as an export before the first result is inspected, and substitutions are logged in the same file. A random or systematic start rule is recorded with the export, and out-of-scope substitutions are logged. The count of substituted and out-of-scope cases is reported with the sample, not buried in a working file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Analysis reports the median, the 90th percentile, and the share of tail cases attributable to each waiting state, with the case count behind each share. Report the numerator, denominator, cohort, period, missing count, and unresolved count together; a single percentage hides the part of the sample that could not be classified. The analysis separates what was observed from what the team believes caused it, and it reports the count behind each share. A trend is checked against definition, staffing, and system changes before it is read as a process effect. An outlier is explained at case level before it is treated as a process signal."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Limitations include approval work that happens outside the workflow, clock differences across regions, and the inability to observe a decision that was never requested. The cited sources frame control, recordkeeping, security, or payment practice in their own domains; they do not certify a provider or establish an outcome for a private transaction. The limitations name the population that cannot be described and the evidence that would be needed to describe it. Small samples are reported with their range, and the cases that create the variation remain visible in the table. A missing record is evidence about the record, not proof that the work was never done."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The review ends with one queue or ownership change and a date to re-measure the tail, not a general instruction to approve faster. The next action is one testable change with a named owner and a date, not a list of intentions. The review ends with one change, one measure, one owner, and a date to test whether the change moved the result. The re-measure date is set before the change begins so the review does not drift. The action log names the change, the owner, the due date, and the measure that will show whether it worked."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Standards for Internal Control in the Federal Government",
        "href": "https://www.gao.gov/greenbook"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "U.S. Small Business Administration — Manage Your Business",
        "href": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "U.S. Government Accountability Office",
        "href": "https://www.gao.gov/"
      }
    ],
    "internalLinks": [
      {
        "label": "Research library",
        "href": "/research"
      },
      {
        "label": "Accounts payable services",
        "href": "/services"
      },
      {
        "label": "Practical AP guides",
        "href": "/blog"
      }
    ],
    "cta": "Map the evidence boundary to a controlled AP support lane.",
    "serviceHandoff": {
      "heading": "Turn the evidence design into an AP operating brief",
      "body": "Bring the source systems, entities, AP approval turnaround tail population, exception owners, and retained decision roles to a bounded scoping session.",
      "label": "Plan the AP workflow",
      "href": "/contact-us"
    }
  },
  {
    "slug": "ap-on-time-payment-measurement-research",
    "title": "Paid on Time Versus On-Time Payment: A Measurement Study",
    "excerpt": "A study of how payment-date metrics can describe supplier terms, internal approval, or funding, and why the baseline must be stated.",
    "published": "2026-11-02",
    "modified": "2026-11-02",
    "thumbnail": "/nov2-heroes/ap-on-time-payment-measurement-research.webp",
    "keywords": [
      "accounts payable outsourcing",
      "on-time payment measurement",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The study asks whether an on-time payment metric measures supplier terms, internal approval, or funding decisions, because the same payment date can be on time against one baseline and late against another. The question is written so a reviewer can tell which decision the result would change and which decision it would leave untouched. The research note states the decision the study is meant to inform, the entity and period in scope, and the questions it will not answer. The scope names the entity, the observation window, the systems included, and the exclusions fixed before collection. The note also records the decision owner and the date by which the first result will be reviewed."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is payments released for one entity in the window; the unit is one payment linked to its invoice terms, approval date, scheduled run, and value date. A case that creates a new requirement on reopen is counted separately and linked to the earlier record. Every case in the on-time payment measurement population carries a stable key, a source reference, and a recorded inclusion or exclusion decision. The unit is defined once, and cases that span owners or periods are handled by the stated rule rather than by convenience. The case key remains stable if the case moves between owners or changes status during the window."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "On-time is defined against the contractual due date, with the tolerance, calendar, and value-date convention fixed before the extract is drawn. Keep the measure and the population definition in the same note; a rate without a denominator is a slogan, and a denominator without an exclusion rule cannot be reproduced. The measure, the denominator, and the exclusion rule are written together so the reported result can be recomputed. Confirmed, inferred, conflicting, unavailable, and awaiting-decision states are reported separately rather than collapsed. A derived measure records its formula and the source fields used, so a second reviewer can reproduce the arithmetic."
        ]
      },
      {
        "heading": "Data dictionary and evidence",
        "paragraphs": [
          "The dictionary stores invoice date, receipt date, term code, calculated due date, approval date, scheduled run, value date, and any hold, keeping each timestamp's source visible. The dictionary is tested on a boundary case, a reopened case, and a case with a missing record. The field dictionary is archived with the extract, and each field names its source, its allowed states, and its missing-value rule. Each field names its allowed states, its source, and its missing-value rule before the first case is coded. Sensitive evidence stays in the approved repository; the analysis file keeps only the reference and the access path."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling includes all late payments above a value threshold plus a random sample of on-time payments, so the comparison is not built only from failures. Freeze the sampling frame as an export with a date, filter, and row count, then record every substitution and exclusion before the first result is read. The sampling frame is frozen as an export before the first result is inspected, and substitutions are logged in the same file. The sample includes adverse cases because a clean draw of recent closures will miss the work that needs attention. The count of substituted and out-of-scope cases is reported with the sample, not buried in a working file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Analysis separates lateness caused by approval, by run scheduling, and by funding, and reports each share with the count and value behind it. Report the numerator, denominator, cohort, period, missing count, and unresolved count together; a single percentage hides the part of the sample that could not be classified. The analysis separates what was observed from what the team believes caused it, and it reports the count behind each share. Descriptive findings are separated from causal claims, and every share is reported with its numerator and denominator. An outlier is explained at case level before it is treated as a process signal."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Limitations include term dates that were never captured, early-payment discounts, and payments whose value date differs from the date the supplier applies cash. The cited sources frame control, recordkeeping, security, or payment practice in their own domains; they do not certify a provider or establish an outcome for a private transaction. The limitations name the population that cannot be described and the evidence that would be needed to describe it. A result describes the observed sample, not the whole industry or every team in the service. A missing record is evidence about the record, not proof that the work was never done."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The review ends with one change to either the term source, the run calendar, or the approval cut-off, plus a date to re-measure. The re-measure date is set before the change begins so the review does not drift. The review ends with one change, one measure, one owner, and a date to test whether the change moved the result. The next action is one testable change with a named owner and a date, not a list of intentions. The action log names the change, the owner, the due date, and the measure that will show whether it worked."
        ]
      }
    ],
    "citations": [
      {
        "label": "Federal Reserve Financial Services FedACH",
        "href": "https://www.frbservices.org/financial-services/ach"
      },
      {
        "label": "GAO Standards for Internal Control in the Federal Government",
        "href": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration — Manage Your Business",
        "href": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "U.S. Government Accountability Office",
        "href": "https://www.gao.gov/"
      }
    ],
    "internalLinks": [
      {
        "label": "Research library",
        "href": "/research"
      },
      {
        "label": "Accounts payable services",
        "href": "/services"
      },
      {
        "label": "Practical AP guides",
        "href": "/blog"
      }
    ],
    "cta": "Map the evidence boundary to a controlled AP support lane.",
    "serviceHandoff": {
      "heading": "Turn the evidence design into an AP operating brief",
      "body": "Bring the source systems, entities, on-time payment measurement population, exception owners, and retained decision roles to a bounded scoping session.",
      "label": "Plan the AP workflow",
      "href": "/contact-us"
    }
  },
  {
    "slug": "ap-vendor-master-change-latency-research",
    "title": "Vendor Master Change Latency and Control Evidence",
    "excerpt": "A bounded study of how long verified vendor changes take and where control evidence is lost between verification and the system update.",
    "published": "2026-11-02",
    "modified": "2026-11-02",
    "thumbnail": "/nov2-heroes/ap-vendor-master-change-latency-research.webp",
    "keywords": [
      "accounts payable outsourcing",
      "vendor master change latency",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The study asks how long a verified vendor master change takes from request to usable record, and where control evidence is lost between verification and the system update. The scope names the entity, the observation window, the systems included, and the exclusions fixed before collection. The research note states the decision the study is meant to inform, the entity and period in scope, and the questions it will not answer. The question is written so a reviewer can tell which decision the result would change and which decision it would leave untouched. The note also records the decision owner and the date by which the first result will be reviewed."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is vendor change requests for one entity in the window; the unit is one request linked to its verification evidence, approval, system update, and downstream use. The unit is defined once, and cases that span owners or periods are handled by the stated rule rather than by convenience. Every case in the vendor master change latency population carries a stable key, a source reference, and a recorded inclusion or exclusion decision. A case that creates a new requirement on reopen is counted separately and linked to the earlier record. The case key remains stable if the case moves between owners or changes status during the window."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Latency is measured from the first complete request, not from the first email, and the completion event is the usable record in the master, not the approval message. Keep the measure and the population definition in the same note; a rate without a denominator is a slogan, and a denominator without an exclusion rule cannot be reproduced. The measure, the denominator, and the exclusion rule are written together so the reported result can be recomputed. Each measure has one definition, and a change to that definition is kept beside the prior version for the transition period. A derived measure records its formula and the source fields used, so a second reviewer can reproduce the arithmetic."
        ]
      },
      {
        "heading": "Data dictionary and evidence",
        "paragraphs": [
          "The dictionary records request channel, change type, verification method, callback result, approver, system update time, and any downstream rejection, with each source identified. Each field names its allowed states, its source, and its missing-value rule before the first case is coded. The field dictionary is archived with the extract, and each field names its source, its allowed states, and its missing-value rule. The dictionary is tested on a boundary case, a reopened case, and a case with a missing record. Sensitive evidence stays in the approved repository; the analysis file keeps only the reference and the access path."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling includes every bank-detail change plus a random set of address and contact changes, because bank changes carry the highest control consequence. Freeze the sampling frame as an export with a date, filter, and row count, then record every substitution and exclusion before the first result is read. The sampling frame is frozen as an export before the first result is inspected, and substitutions are logged in the same file. A random or systematic start rule is recorded with the export, and out-of-scope substitutions are logged. The count of substituted and out-of-scope cases is reported with the sample, not buried in a working file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Analysis reports latency by change type and the share of requests that needed rework, with the verification step that failed recorded separately. Report the numerator, denominator, cohort, period, missing count, and unresolved count together; a single percentage hides the part of the sample that could not be classified. The analysis separates what was observed from what the team believes caused it, and it reports the count behind each share. A trend is checked against definition, staffing, and system changes before it is read as a process effect. An outlier is explained at case level before it is treated as a process signal."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Limitations include requests that arrived incomplete, changes made outside the standard channel, and the difficulty of observing a verification call that was never logged. The cited sources frame control, recordkeeping, security, or payment practice in their own domains; they do not certify a provider or establish an outcome for a private transaction. The limitations name the population that cannot be described and the evidence that would be needed to describe it. Small samples are reported with their range, and the cases that create the variation remain visible in the table. A missing record is evidence about the record, not proof that the work was never done."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The review ends with one change to the request form or the verification log and a date to re-measure latency and rework. The next action is one testable change with a named owner and a date, not a list of intentions. The review ends with one change, one measure, one owner, and a date to test whether the change moved the result. The re-measure date is set before the change begins so the review does not drift. The action log names the change, the owner, the due date, and the measure that will show whether it worked."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Standards for Internal Control in the Federal Government",
        "href": "https://www.gao.gov/greenbook"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "FTC Data Security Guidance",
        "href": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Government Accountability Office",
        "href": "https://www.gao.gov/"
      }
    ],
    "internalLinks": [
      {
        "label": "Research library",
        "href": "/research"
      },
      {
        "label": "Accounts payable services",
        "href": "/services"
      },
      {
        "label": "Practical AP guides",
        "href": "/blog"
      }
    ],
    "cta": "Map the evidence boundary to a controlled AP support lane.",
    "serviceHandoff": {
      "heading": "Turn the evidence design into an AP operating brief",
      "body": "Bring the source systems, entities, vendor master change latency population, exception owners, and retained decision roles to a bounded scoping session.",
      "label": "Plan the AP workflow",
      "href": "/contact-us"
    }
  },
  {
    "slug": "ap-unapplied-credit-balance-research",
    "title": "Unapplied Supplier Credit Balances: A Reconciliation Study",
    "excerpt": "A study of why supplier credits remain unapplied and whether aging alone explains the balance.",
    "published": "2026-11-02",
    "modified": "2026-11-02",
    "thumbnail": "/nov2-heroes/ap-unapplied-credit-balance-research.webp",
    "keywords": [
      "accounts payable outsourcing",
      "unapplied supplier credit balances",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The study asks why supplier credits remain unapplied and whether aging alone explains the balance or whether the cause sits in matching, ownership, or a missing refund decision. The question is written so a reviewer can tell which decision the result would change and which decision it would leave untouched. The research note states the decision the study is meant to inform, the entity and period in scope, and the questions it will not answer. The scope names the entity, the observation window, the systems included, and the exclusions fixed before collection. The note also records the decision owner and the date by which the first result will be reviewed."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is open supplier credit memos for one entity at the close date; the unit is one credit linked to its source document, candidate invoices, owner, and disposition. A case that creates a new requirement on reopen is counted separately and linked to the earlier record. Every case in the unapplied supplier credit balances population carries a stable key, a source reference, and a recorded inclusion or exclusion decision. The unit is defined once, and cases that span owners or periods are handled by the stated rule rather than by convenience. The case key remains stable if the case moves between owners or changes status during the window."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "A credit is unapplied when no invoice, refund, or approved future use has consumed it, and the definition excludes credits already scheduled for the next run. Keep the measure and the population definition in the same note; a rate without a denominator is a slogan, and a denominator without an exclusion rule cannot be reproduced. The measure, the denominator, and the exclusion rule are written together so the reported result can be recomputed. Confirmed, inferred, conflicting, unavailable, and awaiting-decision states are reported separately rather than collapsed. A derived measure records its formula and the source fields used, so a second reviewer can reproduce the arithmetic."
        ]
      },
      {
        "heading": "Data dictionary and evidence",
        "paragraphs": [
          "The dictionary records credit date, supplier site, amount, currency, source, candidate matches, owner, last action, and disposition, with a reason code for each unmatched state. The dictionary is tested on a boundary case, a reopened case, and a case with a missing record. The field dictionary is archived with the extract, and each field names its source, its allowed states, and its missing-value rule. Each field names its allowed states, its source, and its missing-value rule before the first case is coded. Sensitive evidence stays in the approved repository; the analysis file keeps only the reference and the access path."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling takes all credits above a value threshold plus an age-stratified sample of smaller credits, so the tail and the volume are both represented. Freeze the sampling frame as an export with a date, filter, and row count, then record every substitution and exclusion before the first result is read. The sampling frame is frozen as an export before the first result is inspected, and substitutions are logged in the same file. The sample includes adverse cases because a clean draw of recent closures will miss the work that needs attention. The count of substituted and out-of-scope cases is reported with the sample, not buried in a working file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Analysis groups credits by age and cause, then tests whether the oldest credits share a supplier, a document type, or an owner transition. Report the numerator, denominator, cohort, period, missing count, and unresolved count together; a single percentage hides the part of the sample that could not be classified. The analysis separates what was observed from what the team believes caused it, and it reports the count behind each share. Descriptive findings are separated from causal claims, and every share is reported with its numerator and denominator. An outlier is explained at case level before it is treated as a process signal."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Limitations include credits recorded outside the subledger, supplier statements that never arrived, and refund decisions that were made but not entered. The cited sources frame control, recordkeeping, security, or payment practice in their own domains; they do not certify a provider or establish an outcome for a private transaction. The limitations name the population that cannot be described and the evidence that would be needed to describe it. A result describes the observed sample, not the whole industry or every team in the service. A missing record is evidence about the record, not proof that the work was never done."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The review ends with one routing or matching change and a date to re-measure the unapplied balance and its aging. The re-measure date is set before the change begins so the review does not drift. The review ends with one change, one measure, one owner, and a date to test whether the change moved the result. The next action is one testable change with a named owner and a date, not a list of intentions. The action log names the change, the owner, the due date, and the measure that will show whether it worked."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Standards for Internal Control in the Federal Government",
        "href": "https://www.gao.gov/greenbook"
      },
      {
        "label": "IRS Recordkeeping Guidance",
        "href": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "U.S. Government Accountability Office",
        "href": "https://www.gao.gov/"
      },
      {
        "label": "U.S. Small Business Administration — Manage Your Business",
        "href": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "internalLinks": [
      {
        "label": "Research library",
        "href": "/research"
      },
      {
        "label": "Accounts payable services",
        "href": "/services"
      },
      {
        "label": "Practical AP guides",
        "href": "/blog"
      }
    ],
    "cta": "Map the evidence boundary to a controlled AP support lane.",
    "serviceHandoff": {
      "heading": "Turn the evidence design into an AP operating brief",
      "body": "Bring the source systems, entities, unapplied supplier credit balances population, exception owners, and retained decision roles to a bounded scoping session.",
      "label": "Plan the AP workflow",
      "href": "/contact-us"
    }
  },
  {
    "slug": "ap-shared-mailbox-response-latency-research",
    "title": "AP Shared Mailbox Response Latency and Ownership",
    "excerpt": "A study of whether shared-mailbox first-response time reflects ownership of the work or only monitoring of the inbox.",
    "published": "2026-11-02",
    "modified": "2026-11-02",
    "thumbnail": "/nov2-heroes/ap-shared-mailbox-response-latency-research.webp",
    "keywords": [
      "accounts payable outsourcing",
      "AP shared mailbox response latency",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The study asks whether shared-mailbox first-response time reflects ownership of the work or only monitoring of the inbox, because a fast acknowledgment can coexist with an unowned case. The scope names the entity, the observation window, the systems included, and the exclusions fixed before collection. The research note states the decision the study is meant to inform, the entity and period in scope, and the questions it will not answer. The question is written so a reviewer can tell which decision the result would change and which decision it would leave untouched. The note also records the decision owner and the date by which the first result will be reviewed."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is messages received in one AP shared mailbox during the window; the unit is one message linked to its first response, owner assignment, and eventual disposition. The unit is defined once, and cases that span owners or periods are handled by the stated rule rather than by convenience. Every case in the AP shared mailbox response latency population carries a stable key, a source reference, and a recorded inclusion or exclusion decision. A case that creates a new requirement on reopen is counted separately and linked to the earlier record. The case key remains stable if the case moves between owners or changes status during the window."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "First response is defined as a substantive reply or a recorded action, not an automatic acknowledgment, and the definition is fixed before the extract. Keep the measure and the population definition in the same note; a rate without a denominator is a slogan, and a denominator without an exclusion rule cannot be reproduced. The measure, the denominator, and the exclusion rule are written together so the reported result can be recomputed. Each measure has one definition, and a change to that definition is kept beside the prior version for the transition period. A derived measure records its formula and the source fields used, so a second reviewer can reproduce the arithmetic."
        ]
      },
      {
        "heading": "Data dictionary and evidence",
        "paragraphs": [
          "The dictionary records received time, first response, responder, assignment event, case link, and disposition, keeping automated replies separate from human ones. Each field names its allowed states, its source, and its missing-value rule before the first case is coded. The field dictionary is archived with the extract, and each field names its source, its allowed states, and its missing-value rule. The dictionary is tested on a boundary case, a reopened case, and a case with a missing record. Sensitive evidence stays in the approved repository; the analysis file keeps only the reference and the access path."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling combines a random set of messages with all messages that received no substantive response within the policy window, so silence is measured rather than inferred. Freeze the sampling frame as an export with a date, filter, and row count, then record every substitution and exclusion before the first result is read. The sampling frame is frozen as an export before the first result is inspected, and substitutions are logged in the same file. A random or systematic start rule is recorded with the export, and out-of-scope substitutions are logged. The count of substituted and out-of-scope cases is reported with the sample, not buried in a working file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Analysis separates response time from ownership time and reports the share of messages that were answered but never assigned. Report the numerator, denominator, cohort, period, missing count, and unresolved count together; a single percentage hides the part of the sample that could not be classified. The analysis separates what was observed from what the team believes caused it, and it reports the count behind each share. A trend is checked against definition, staffing, and system changes before it is read as a process effect. An outlier is explained at case level before it is treated as a process signal."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Limitations include replies sent outside the mailbox, messages that were never legitimate AP requests, and the fact that response speed does not show resolution quality. The cited sources frame control, recordkeeping, security, or payment practice in their own domains; they do not certify a provider or establish an outcome for a private transaction. The limitations name the population that cannot be described and the evidence that would be needed to describe it. Small samples are reported with their range, and the cases that create the variation remain visible in the table. A missing record is evidence about the record, not proof that the work was never done."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The review ends with one assignment or triage change and a date to re-measure both first response and owned time. The next action is one testable change with a named owner and a date, not a list of intentions. The review ends with one change, one measure, one owner, and a date to test whether the change moved the result. The re-measure date is set before the change begins so the review does not drift. The action log names the change, the owner, the due date, and the measure that will show whether it worked."
        ]
      }
    ],
    "citations": [
      {
        "label": "CISA Recognize and Report Phishing",
        "href": "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "href": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "FTC Data Security Guidance",
        "href": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      }
    ],
    "internalLinks": [
      {
        "label": "Research library",
        "href": "/research"
      },
      {
        "label": "Accounts payable services",
        "href": "/services"
      },
      {
        "label": "Practical AP guides",
        "href": "/blog"
      }
    ],
    "cta": "Map the evidence boundary to a controlled AP support lane.",
    "serviceHandoff": {
      "heading": "Turn the evidence design into an AP operating brief",
      "body": "Bring the source systems, entities, AP shared mailbox response latency population, exception owners, and retained decision roles to a bounded scoping session.",
      "label": "Plan the AP workflow",
      "href": "/contact-us"
    }
  },
  {
    "slug": "ap-accrual-reversal-error-research",
    "title": "Accrual Reversal Errors at AP Close: A Bounded Study",
    "excerpt": "A study of which accrual reversal errors survive the close checklist and what evidence would catch them earlier.",
    "published": "2026-11-02",
    "modified": "2026-11-02",
    "thumbnail": "/nov2-heroes/ap-accrual-reversal-error-research.webp",
    "keywords": [
      "accounts payable outsourcing",
      "accrual reversal errors",
      "Philippines AP support"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The study asks which accrual reversal errors survive the close checklist and what evidence would catch them before the following period's comparison. The question is written so a reviewer can tell which decision the result would change and which decision it would leave untouched. The research note states the decision the study is meant to inform, the entity and period in scope, and the questions it will not answer. The scope names the entity, the observation window, the systems included, and the exclusions fixed before collection. The note also records the decision owner and the date by which the first result will be reviewed."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is AP accruals reversed in one close cycle; the unit is one accrual linked to its support, reversal entry, and the invoice that later arrived. A case that creates a new requirement on reopen is counted separately and linked to the earlier record. Every case in the accrual reversal errors population carries a stable key, a source reference, and a recorded inclusion or exclusion decision. The unit is defined once, and cases that span owners or periods are handled by the stated rule rather than by convenience. The case key remains stable if the case moves between owners or changes status during the window."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "A reversal error is defined as a reversal that does not match the accrual's stated rule or that closes an obligation still supported by evidence, and the rule is frozen before testing. Keep the measure and the population definition in the same note; a rate without a denominator is a slogan, and a denominator without an exclusion rule cannot be reproduced. The measure, the denominator, and the exclusion rule are written together so the reported result can be recomputed. Confirmed, inferred, conflicting, unavailable, and awaiting-decision states are reported separately rather than collapsed. A derived measure records its formula and the source fields used, so a second reviewer can reproduce the arithmetic."
        ]
      },
      {
        "heading": "Data dictionary and evidence",
        "paragraphs": [
          "The dictionary records accrual reference, support type, amount, reversal date, invoice arrival date, matching result, and reviewer sign-off, with the evidence source for each field. The dictionary is tested on a boundary case, a reopened case, and a case with a missing record. The field dictionary is archived with the extract, and each field names its source, its allowed states, and its missing-value rule. Each field names its allowed states, its source, and its missing-value rule before the first case is coded. Sensitive evidence stays in the approved repository; the analysis file keeps only the reference and the access path."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling includes all accruals above a value threshold plus a random set below it, and oversamples accruals with no receipt reference. Freeze the sampling frame as an export with a date, filter, and row count, then record every substitution and exclusion before the first result is read. The sampling frame is frozen as an export before the first result is inspected, and substitutions are logged in the same file. The sample includes adverse cases because a clean draw of recent closures will miss the work that needs attention. The count of substituted and out-of-scope cases is reported with the sample, not buried in a working file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Analysis classifies each error by cause and reports the share that the checklist could have caught versus the share that required a later invoice comparison. Report the numerator, denominator, cohort, period, missing count, and unresolved count together; a single percentage hides the part of the sample that could not be classified. The analysis separates what was observed from what the team believes caused it, and it reports the count behind each share. Descriptive findings are separated from causal claims, and every share is reported with its numerator and denominator. An outlier is explained at case level before it is treated as a process signal."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Limitations include accruals supported by estimates that cannot be tested, late invoices outside the window, and reversals posted by a system rule the reviewer cannot see. The cited sources frame control, recordkeeping, security, or payment practice in their own domains; they do not certify a provider or establish an outcome for a private transaction. The limitations name the population that cannot be described and the evidence that would be needed to describe it. A result describes the observed sample, not the whole industry or every team in the service. A missing record is evidence about the record, not proof that the work was never done."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The review ends with one checklist or rule change and a date to re-test the same error class. The re-measure date is set before the change begins so the review does not drift. The review ends with one change, one measure, one owner, and a date to test whether the change moved the result. The next action is one testable change with a named owner and a date, not a list of intentions. The action log names the change, the owner, the due date, and the measure that will show whether it worked."
        ]
      }
    ],
    "citations": [
      {
        "label": "GAO Standards for Internal Control in the Federal Government",
        "href": "https://www.gao.gov/greenbook"
      },
      {
        "label": "IRS Recordkeeping Guidance",
        "href": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "U.S. Government Accountability Office",
        "href": "https://www.gao.gov/"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      }
    ],
    "internalLinks": [
      {
        "label": "Research library",
        "href": "/research"
      },
      {
        "label": "Accounts payable services",
        "href": "/services"
      },
      {
        "label": "Practical AP guides",
        "href": "/blog"
      }
    ],
    "cta": "Map the evidence boundary to a controlled AP support lane.",
    "serviceHandoff": {
      "heading": "Turn the evidence design into an AP operating brief",
      "body": "Bring the source systems, entities, accrual reversal errors population, exception owners, and retained decision roles to a bounded scoping session.",
      "label": "Plan the AP workflow",
      "href": "/contact-us"
    }
  }
];
export const nov2ResearchBatch:ResearchPost[]=nov2ResearchRecords.map(post=>({...post,body:post.sections.map(section=>section.paragraphs.join('\n\n'))}));
