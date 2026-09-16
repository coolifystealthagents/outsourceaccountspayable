import type { Metadata } from "next";
import { Footer, Header } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact an Outsourced Accounts Payable Team",
  description: "Book a free consultation to plan secure accounts payable support for invoice intake, approvals, vendor queries, and payment-ready queues.",
  alternates: { canonical: "/contact-us" },
  robots: { index: true, follow: true },
  openGraph: { title: "Contact an Outsourced Accounts Payable Team", description: "Plan a controlled AP support desk with clear ownership and approval boundaries.", url: "https://outsourceaccountspayable.com/contact-us", type: "website" },
};

const support = [
  ["Invoice intake", "Capture approved invoices, validate required details, and route incomplete records before they stall the queue."],
  ["Approval coordination", "Track invoice status and follow up with named approvers without weakening payment authority."],
  ["Vendor query routing", "Document supplier questions, preserve source evidence, and escalate exceptions to the right owner."],
  ["Payment-ready closeout", "Prepare review packets, reconcile queue status, and keep the payment decision with your authorized team."],
];

export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact">
    <section className="tc-hero"><div className="container tc-hero-grid"><div className="tc-copy"><p className="tc-kicker">Accounts payable support with clear control</p><h1>Turn the AP backlog into a review-ready queue.</h1><p className="tc-lead">Tell us where invoice intake, approval follow-up, vendor queries, or exception handling slows the team down. We’ll help scope dedicated accounts payable support around your systems and approval rules.</p><div className="tc-pills"><span>35+ industries</span><span>AP workflow focus</span><span>Free consultation</span></div><a href="#ap-plan">Explore the AP support plan →</a></div><div><StandardContactForm endpoint="/api/contact" encoding="form"/><p className="tc-privacy">Your details are used only to respond to this request. Please do not include invoices, bank details, or other sensitive financial records.</p></div></div></section>
    <section className="tc-strip"><div className="container"><strong>A practical first call</strong><span>✓ Queue map</span><span>✓ Access boundaries</span><span>✓ Approval owners</span><span>✓ Launch plan</span></div></section>
    <section className="tc-section" id="ap-plan"><div className="container"><div className="tc-heading"><div><p className="tc-kicker">Where support fits</p><h2>Delegate the process. Preserve payment authority.</h2></div><p>Reliable AP outsourcing starts with clear source records, visible exceptions, and named internal owners for approval and release.</p></div><div className="tc-cards">{support.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline"><strong>Know which AP queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
    <section className="tc-proof"><div className="container"><p className="tc-kicker">What we plan together</p><h2>Start with safeguards and the real work.</h2><div className="tc-proof-grid"><article><h3>Source records</h3><p>Identify the systems and evidence that make an invoice complete and reviewable.</p></article><article><h3>Decision boundaries</h3><p>Document who can approve, change, hold, and release each payment.</p></article><article><h3>Exception paths</h3><p>Give missing data, duplicates, disputes, and cutoff risks a named escalation route.</p></article></div></div></section>
    <section className="tc-section"><div className="container tc-check"><div><p className="tc-kicker">Capability checklist</p><h2>Make every AP handoff easy to review.</h2><p>We shape the role around the controls your finance team needs to supervise the work confidently.</p></div><ul><li>Invoice channels and completeness rules</li><li>ERP roles and least-privilege access</li><li>Approval matrix and follow-up cadence</li><li>Duplicate and discrepancy escalation</li><li>Vendor query documentation standards</li><li>Payment-ready review scorecard</li></ul></div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/ap-team.jpg" width="1600" height="1050" alt="Accounts payable specialists reviewing an organized invoice workflow"/><div><p className="tc-kicker">Why Stealth Agents</p><h2>Dedicated talent, shaped around your AP process.</h2><p>We help define responsibilities, tools, schedule, training, and review cadence before work begins. Your finance owner retains authority while the support desk keeps records and follow-ups moving.</p><a href="https://go.oncehub.com/StealthAgentsTeam" rel="noopener noreferrer">Book a call with the team →</a></div></div></section>
    <section className="tc-about"><div className="container"><div><p className="tc-kicker">Backed by broad operational experience</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Powered by Stealth Agents</a></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">Ready to improve AP flow?</p><h2>Plan support your finance team can confidently review.</h2><p>Share the queue, systems, approvals, and goals. We’ll help define the role and next steps.</p></div><a href="#contactPageForm">Book My Free Consultation</a></section>
  </main><Footer/>
</>}
