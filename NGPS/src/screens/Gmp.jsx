import {
  Building2,
  ClipboardCheck,
  ClipboardList,
  Camera,
  CalendarClock,
  FileText,
  Globe2,
  MessagesSquare,
  ScanSearch,
  ShieldCheck,
  Target,
  Timer,
  Check,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand, Tag, IconTile } from "../components/ui/blocks";
import FaqList from "../components/ui/FaqList";
import { TrackRecord, OtherInspections } from "../components/TrackRecord";
import { Reveal, Stagger, StaggerItem, GlowCard, TiltCard } from "../components/ui/motion";

const MAIL = "mailto:inquiry@nexgenpharmasolutions.com";

const AUDIT_TYPES = [
  { icon: Building2, title: "Vendor / Supplier Audits", text: "API, excipient, raw material, packaging suppliers" },
  { icon: ClipboardCheck, title: "Internal / Self-Inspection Audits", text: "Periodic compliance assessment and gap analysis" },
  { icon: ShieldCheck, title: "Mock USFDA / EDQM Inspections", text: "Pre-audit readiness simulation by former regulators" },
  { icon: Target, title: "For-Cause / Focused Audits", text: "Targeted audits for specific systems or deviations" },
];

const FACILITIES = [
  "API / API Intermediates (Sterile/Non-sterile)",
  "Finished Dosage Forms (Sterile/Non-sterile)",
  "Biological / Fermentation-based Products",
  "Excipients / KSMs / Raw Materials",
  "Contract Testing Laboratories",
  "Packaging Material Suppliers",
  "Processing Sites (Micronization, Sterilization)",
  "Distributors (GDP Compliance)",
];

const STANDARDS = ["EU GMP", "ICH Q7", "21 CFR 210/211", "WHO GMP", "PIC/S GMP", "ISO Standards", "Client-Specific Requirements"];

const DELIVERABLES = [
  { icon: FileText, title: "Detailed Audit Report", text: "Observation-wise findings with criticality ratings (Critical, Major, Minor)", span: "md:col-span-2" },
  { icon: ClipboardList, title: "CAPA Recommendations", text: "Practical corrective and preventive action plans for each finding" },
  { icon: Timer, title: "Remediation Timelines", text: "Suggested timeframes for closing critical and major observations" },
  { icon: CalendarClock, title: "Executive Summary", text: "High-level overview for management decision-making" },
  { icon: Camera, title: "Photographic Evidence", text: "Visual documentation of key observations (where applicable)" },
  { icon: MessagesSquare, title: "Post-Audit Consultation", text: "Follow-up consultation via email or meeting to discuss findings and next steps", span: "md:col-span-2" },
];

const TIMELINES = [
  { title: "Vendor Audit", onsite: "1-2 days", report: "7-10 business days", note: "Depends on facility size and complexity" },
  { title: "Internal Self-Inspection", onsite: "2-4 days", report: "10-14 business days", note: "Comprehensive facility-wide assessment" },
  { title: "Mock USFDA/EDQM Audit", onsite: "3-5 days", report: "7 business days", note: "Includes observation classification and remediation roadmap" },
  { title: "For-Cause / Focused Audit", onsite: "1-2 days", report: "5-7 business days", note: "Targeted investigation of specific concerns" },
];

const MODELS = [
  {
    title: "Project-Based",
    text: "Single audit with defined scope and fixed deliverables",
    points: ["Fixed cost and timeline", "Ideal for vendor audits or one-time assessments"],
  },
  {
    title: "Retainer",
    text: "Ongoing audit support with monthly or quarterly cycles",
    points: ["Priority scheduling and faster turnaround", "Suitable for multiple vendor audits or continuous compliance"],
  },
  {
    title: "Embedded Support",
    text: "On-site auditor embedded within your QA team (short/long-term)",
    points: ["For large audit programs or major compliance initiatives", "Knowledge transfer and team upskilling included"],
  },
];

const FAQS = [
  {
    q: "What is your inspection success rate?",
    a: "100%. Every client we have prepared for a USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA or ANVISA inspection has cleared it, and several cleared USFDA inspections with zero Form 483 observations.",
  },
  {
    q: "Which regulatory inspections can you prepare us for?",
    a: "USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA, all with a 100% success record, plus PIC/S, TGA, Health Canada, COFEPRIS, SAHPRA, NMPA, SFDA, Swissmedic, CDSCO Revised Schedule M and customer or partner audits.",
  },
  {
    q: "How soon can you conduct an audit?",
    a: "Subject to auditor availability, we can typically schedule audits within 2-3 weeks of request. For urgent/mock inspections, express scheduling may be available.",
  },
  {
    q: "Are your auditors qualified for regulatory inspections?",
    a: "Yes. Our audit team includes former USFDA/EDQM inspectors, ex-regulatory authority personnel, and senior industry QA professionals with extensive inspection experience.",
  },
  {
    q: "Do you provide post-audit remediation support?",
    a: "Absolutely. We can support you in closing observations through CAPA development, SOP updates, training, or embedded consulting—depending on your needs.",
  },
  {
    q: "Can we customize the audit scope?",
    a: "Yes. We offer tailored audits focused on specific systems (e.g., data integrity, cleaning validation), products, or compliance areas based on your requirements.",
  },
  {
    q: "Are your reports accepted by regulatory authorities?",
    a: "Our audit reports are structured to meet regulatory expectations and are widely accepted by USFDA, EDQM, WHO, and other health authorities, as well as by Qualified Persons (QPs).",
  },
  {
    q: "What is the cost of a GMP audit?",
    a: "Costs vary based on facility type, audit scope, duration, and location. Contact us with your requirements for a detailed quote. We offer competitive, transparent pricing.",
  },
];

const Gmp = () => {
  return (
    <>
      <PageHero
        crumb="GMP Audits"
        eyebrow="Premier GMP Audit Service"
        title="GMP Audits That Prepare You for Regulatory Success"
        highlight={[6, 7]}
        intro="Conducted by former regulatory auditors and industry QA leaders. Our detailed, globally-recognized audit reports help you identify compliance gaps before regulators do."
        scene="helix"
        primary={{ href: MAIL, label: "Email Us" }}
        secondary={{ to: "/contactus", label: "Book a consultation" }}
      >
        <Reveal delay={0.65} className="mt-10 flex flex-wrap gap-2">
          <Tag>Vendor</Tag>
          <Tag>Internal</Tag>
          <Tag>Mock EDQM-USFDA Inspections</Tag>
          <Tag>100% success across 8 regulators</Tag>
        </Reveal>
      </PageHero>

      <TrackRecord />

      {/* Why our audits stand out: audit types */}
      <section className="container py-24 md:py-32" aria-labelledby="gmp-why">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div id="gmp-why">
              <SectionHeading
                eyebrow="Why choose us"
                title="Why Our GMP Audits Stand Out"
                highlight={[4, 5]}
                intro="Four audit formats, one standard of rigour: every engagement is led by people who have sat on the regulator's side of the table."
              />
            </div>
            <Reveal delay={0.2} className="relative mt-10 overflow-hidden rounded-3xl border border-white/[0.07]">
              <img
                src="/gmpaudits.png"
                alt="Auditor reviewing a GMP batch record checklist beside tablet samples"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-obsidian-950/30 to-obsidian-950/10" />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h3 className="text-display-sm text-champagne">Audit Types We Conduct</h3>
            </Reveal>
            <Stagger className="mt-8 grid gap-5 sm:grid-cols-2">
              {AUDIT_TYPES.map((a, i) => (
                <StaggerItem key={a.title} className="h-full">
                  <TiltCard className="h-full p-7" max={6}>
                    <div className="flex items-start justify-between">
                      <IconTile icon={a.icon} />
                      <span className="font-mono text-xs text-champagne-faint">0{i + 1}</span>
                    </div>
                    <h4 className="mt-6 text-xl text-champagne">{a.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-champagne-muted">{a.text}</p>
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Facilities + standards */}
      <section className="relative py-24 md:py-32" aria-labelledby="gmp-facilities">
        <div className="absolute inset-0 -z-10 bg-obsidian-900/60" />
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div id="gmp-facilities">
              <SectionHeading
                eyebrow="Scope"
                title="Facilities We Audit"
                highlight={[2]}
                intro="From starting materials to distribution, across sterile and non-sterile operations."
              />
            </div>
            <Reveal delay={0.2} className="mt-10">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-champagne-muted">
                Regulatory Standards We Audit Against
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {STANDARDS.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Reveal>
          </div>
          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
            {FACILITIES.map((f, i) => (
              <StaggerItem as="li" key={f}>
                <GlowCard className="flex h-full items-start gap-4 p-6">
                  <span className="font-mono text-xs text-copper-400">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-champagne-soft">{f}</span>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What you get */}
      <section className="container py-24 md:py-32" aria-labelledby="gmp-deliverables">
        <div id="gmp-deliverables">
          <SectionHeading
            eyebrow="Deliverables"
            title="What You Get"
            highlight={[2]}
            intro="Comprehensive audit deliverables that drive action."
          />
        </div>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-4">
          {DELIVERABLES.map((d) => (
            <StaggerItem key={d.title} className={d.span || "md:col-span-1"}>
              <GlowCard className="flex h-full flex-col p-7">
                <IconTile icon={d.icon} />
                <h3 className="mt-6 text-xl text-champagne">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-champagne-muted">{d.text}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1} className="mt-5">
          <div className="relative isolate overflow-hidden rounded-3xl border border-copper-400/25 bg-gradient-to-br from-copper-700/30 via-obsidian-900 to-obsidian-900 p-8 md:flex md:items-center md:gap-8 md:p-10">
            <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-copper-500/20 blur-3xl" />
            <IconTile icon={Globe2} className="shrink-0" />
            <div className="mt-5 md:mt-0">
              <h3 className="text-display-sm text-champagne">Reports Accepted Globally</h3>
              <p className="mt-2 text-champagne-muted">
                Our audit reports are recognized by regulators, Qualified Persons (QPs), and pharma buyers worldwide.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Timelines */}
      <section className="relative py-24 md:py-32" aria-labelledby="gmp-timelines">
        <div className="absolute inset-0 -z-10 bg-grid opacity-25 mask-fade-b" />
        <div className="container">
          <div id="gmp-timelines">
            <SectionHeading
              eyebrow="Timelines"
              title="Typical Timelines"
              highlight={[1]}
              intro="On-site effort and report turnaround for each audit format."
            />
          </div>
          <ol className="relative mt-14 space-y-5 before:absolute before:bottom-6 before:left-[1.4rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-copper-400/60 before:to-transparent md:before:left-[1.75rem]">
            {TIMELINES.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.08} className="relative grid grid-cols-[auto_1fr] gap-5 md:gap-8">
                <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-copper-400/40 bg-obsidian-900 font-mono text-sm text-copper-300 md:h-14 md:w-14">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <GlowCard className="grid min-w-0 gap-5 p-6 md:grid-cols-[1.2fr_1fr_1fr] md:items-center md:p-8">
                  <div>
                    <h3 className="text-xl text-champagne">{t.title}</h3>
                    <p className="mt-1 text-sm text-champagne-muted">{t.note}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-champagne-faint">On-site</div>
                    <div className="mt-1 font-display text-2xl text-copper-200">{t.onsite}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-champagne-faint">Report delivery</div>
                    <div className="mt-1 font-display text-2xl text-copper-200">{t.report}</div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Engagement models */}
      <section className="container py-24 md:py-32" aria-labelledby="gmp-models">
        <div id="gmp-models">
          <SectionHeading
            eyebrow="How we work"
            title="Engagement Models"
            highlight={[1]}
            align="center"
            intro="Choose the level of involvement that fits your audit programme."
          />
        </div>
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {MODELS.map((m, i) => (
            <StaggerItem key={m.title} className="h-full">
              <TiltCard className={`flex h-full flex-col p-8 ${i === 1 ? "border-copper-400/30 bg-obsidian-800/80" : ""}`}>
                <span className="font-mono text-xs text-copper-400">Model 0{i + 1}</span>
                <h3 className="mt-4 text-display-sm text-champagne">{m.title}</h3>
                <p className="mt-3 text-champagne-muted">{m.text}</p>
                <div className="hairline my-6" />
                <ul className="space-y-3">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-champagne-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <OtherInspections />

      {/* FAQ */}
      <section className="container py-24 md:py-32" aria-labelledby="gmp-faq">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div id="gmp-faq">
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" highlight={[2]} />
            </div>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-3 text-sm text-champagne-muted">
                <ScanSearch className="h-4 w-4 text-copper-400" />
                <span>
                  Still unsure?{" "}
                  <a href={MAIL} className="text-copper-300 underline decoration-copper-400/40 underline-offset-4 hover:decoration-copper-300">
                    Email our audit team
                  </a>
                </span>
              </div>
            </Reveal>
          </div>
          <FaqList items={FAQS} idPrefix="gmp-faq" />
        </div>
      </section>

      <CtaBand
        title="Ready to Assess Your Compliance Readiness?"
        intro="Schedule a GMP audit or mock inspection with our expert team. Let's identify gaps before regulators do."
      />
    </>
  );
};

export default Gmp;
