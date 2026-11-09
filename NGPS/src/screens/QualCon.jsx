import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpen,
  Check,
  ClipboardList,
  Database,
  FileSearch,
  FileText,
  FlaskConical,
  GitPullRequestArrow,
  LifeBuoy,
  Minus,
  Plus,
  ScanSearch,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand, Tag, IconTile } from "../components/ui/blocks";
import { Reveal, Stagger, StaggerItem, GlowCard, TiltCard } from "../components/ui/motion";

const MAIL = "mailto:inquiry@nexgenpharmasolutions.com";

const CORE_SERVICES = [
  {
    icon: AlertTriangle,
    title: "Deviation Management",
    text: "Comprehensive deviation investigation, root cause analysis, and CAPA implementation to prevent recurrence",
    span: "md:col-span-2",
  },
  {
    icon: Wrench,
    title: "CAPA System Optimization",
    text: "Corrective and Preventive Action system design, implementation, and effectiveness verification",
  },
  {
    icon: FlaskConical,
    title: "OOS/OOT Investigations",
    text: "Out-of-Specification and Out-of-Trend investigation protocols, laboratory investigation support, and trending analysis",
  },
  {
    icon: GitPullRequestArrow,
    title: "Change Control Management",
    span: "md:col-span-2",
    text: "Risk-based change control processes, impact assessments, and validation requirements determination",
  },
  {
    icon: Database,
    title: "Data Integrity Programs",
    text: "ALCOA+ assessments, data governance frameworks, audit trail reviews, and remediation plans",
    span: "md:col-span-3",
  },
];

const FACILITIES = [
  "API Manufacturing",
  "Sterile Products",
  "Solid Dosage Forms",
  "Liquid/Semi-solid",
  "Biologics",
  "Medical Devices",
  "QC Laboratories",
  "Warehousing/GDP",
];

const STANDARDS = ["EU GMP", "FDA 21 CFR", "ICH Q7/Q9/Q10", "PIC/S", "WHO GMP", "ISO 9001"];

const DELIVERABLES = [
  {
    icon: FileSearch,
    title: "Gap Analysis Reports",
    text: "Comprehensive assessment of current quality systems against regulatory requirements with prioritized remediation roadmap.",
  },
  {
    icon: FileText,
    title: "SOPs & Work Instructions",
    text: "GMP-compliant standard operating procedures, templates, and work instructions tailored to your operations.",
  },
  {
    icon: ClipboardList,
    title: "Investigation Reports",
    text: "Detailed deviation, OOS/OOT, and non-conformance investigation reports with root cause analysis and CAPAs.",
  },
  {
    icon: BookOpen,
    title: "Training & Competency Assessment",
    text: "Staff training on quality systems, investigation techniques, and GMP requirements with competency verification.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Response Support",
    text: "Expert assistance with inspection observations, warning letters, and regulatory commitments response preparation.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support & Maintenance",
    text: "Continuous quality system improvement, periodic assessments, and expert consultation as needed.",
  },
];

const TIMELINES = [
  { title: "Gap Assessment & Remediation Plan", time: "2-4 weeks", note: "Comprehensive assessment with prioritized action plan and timelines" },
  { title: "Deviation Investigation & CAPA", time: "2-4 weeks", note: "Root cause analysis, impact assessment, and CAPA development" },
  { title: "QMS Implementation", time: "8-16 weeks", note: "Full quality system setup including SOPs, training, and validation" },
  { title: "Data Integrity Remediation", time: "12-24 weeks", note: "ALCOA+ assessment, gap closure, system upgrades, and verification" },
];

const MODELS = [
  {
    title: "Project-Based",
    text: "Fixed-scope projects for specific quality system improvements with defined deliverables and milestones.",
    points: ["Clear scope and objectives", "Fixed timeline and budget", "Milestone-based payments"],
  },
  {
    title: "Retainer-Based",
    text: "Ongoing quality support with monthly hours for investigations, assessments, and continuous improvement.",
    points: ["Dedicated monthly hours", "Priority support access", "Flexible scope adjustments"],
  },
  {
    title: "Embedded Quality Support",
    text: "Full-time or part-time quality professionals embedded in your team as an extension of your QA department.",
    points: ["On-site or remote presence", "Team integration", "Knowledge transfer focus"],
  },
];

const FAQS = [
  {
    q: "What is the typical timeline for a deviation investigation and CAPA implementation?",
    a: "A complete deviation investigation typically takes 2-4 weeks depending on complexity, including root cause analysis, impact assessment, and CAPA development. CAPA implementation timelines vary by corrective action scope but generally range from 4-12 weeks with verification activities.",
  },
  {
    q: "Do you provide support during regulatory inspections?",
    a: "Yes, we provide comprehensive inspection readiness support including mock audits, documentation review, personnel training, and on-site support during actual regulatory inspections. Our team can assist with inspector interactions and deficiency response preparation.",
  },
  {
    q: "Can you help remediate existing quality system gaps?",
    a: "Absolutely. We conduct comprehensive gap assessments against regulatory requirements (EU GMP, FDA 21 CFR, ICH guidelines), develop detailed remediation plans with timelines, and provide implementation support including SOP development, training, and effectiveness verification.",
  },
  {
    q: "What's included in your data integrity assessment services?",
    a: "Our data integrity services include ALCOA+ compliance assessments, audit trail reviews, computerized system evaluations, manual record reviews, gap analysis reports, corrective action plans, and staff training on data governance principles.",
  },
  {
    q: "Do you offer ongoing quality consulting support?",
    a: "Yes, we offer flexible engagement models including project-based consulting for specific issues, monthly retainer arrangements for ongoing support, and embedded quality resources who work as an extension of your team for continuous quality system management.",
  },
  {
    q: "How do you ensure confidentiality of our quality data?",
    a: "We maintain strict confidentiality through comprehensive NDAs, secure data handling protocols, limited access controls, and adherence to data protection regulations. All consultants are trained on confidentiality requirements and professional ethics.",
  },
];

function FaqList({ items, idPrefix }) {
  const [open, setOpen] = useState(0);
  return (
    <Stagger className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <StaggerItem key={f.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg text-champagne transition-colors group-hover:text-copper-200 md:text-xl">
                  {f.q}
                </span>
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-copper-400/30 text-copper-300 transition-colors group-hover:bg-copper-400/10">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${idPrefix}-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 leading-relaxed text-champagne-muted">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

const QualCon = () => {
  return (
    <>
      <PageHero
        crumb="Quality Consulting"
        eyebrow="Quality systems consulting"
        title="Quality Consulting & QMS Remediation"
        highlight={[3, 4]}
        intro="Expert quality system consulting for deviation management, CAPA optimization, OOS/OOT investigations, change control, and data integrity remediation."
        scene="gyro"
        primary={{ href: MAIL, label: "Email Us" }}
        secondary={{ to: "/contactus", label: "Book a consultation" }}
      >
        <Reveal delay={0.65} className="mt-10 flex flex-wrap gap-2">
          <Tag>Deviations</Tag>
          <Tag>CAPA</Tag>
          <Tag>OOS/OOT</Tag>
          <Tag>Change Control</Tag>
          <Tag>ALCOA+</Tag>
        </Reveal>
      </PageHero>

      {/* Core service areas */}
      <section className="container py-16 md:py-32" aria-labelledby="qc-core">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div id="qc-core">
            <SectionHeading
              eyebrow="Core service areas"
              title="Comprehensive Quality System Solutions"
              highlight={[2, 3]}
              intro="Five disciplines that keep a pharmaceutical quality system inspection-ready, from the first deviation to a mature data governance programme."
            />
          </div>
          <Reveal delay={0.15} className="relative overflow-hidden rounded-3xl border border-white/[0.07]">
            <img
              src="/images/quality-consulting.webp"
              alt="Quality consultants mapping a deviation, investigation and CAPA flow on a glass wall"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-950/80 via-obsidian-950/30 to-copper-900/10" />
          </Reveal>
        </div>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {CORE_SERVICES.map((s, i) => (
            <StaggerItem key={s.title} className={s.span || ""}>
              <TiltCard className="flex h-full flex-col p-7 md:p-8" max={5}>
                <div className="flex items-start justify-between">
                  <IconTile icon={s.icon} />
                  <span className="font-mono text-xs text-champagne-faint">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl text-champagne md:text-2xl">{s.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-champagne-muted md:text-base">{s.text}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Facilities & systems covered */}
      <section className="relative py-16 md:py-32" aria-labelledby="qc-facilities">
        <div className="absolute inset-0 -z-10 bg-obsidian-900/60" />
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div id="qc-facilities">
              <SectionHeading
                eyebrow="Coverage"
                title="Facilities & Systems Covered"
                highlight={[2]}
                intro="Quality system support across manufacturing, laboratory and distribution operations."
              />
            </div>
          </div>
          <div>
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-champagne-muted">Manufacturing Facilities</h3>
            </Reveal>
            <Stagger as="ul" className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              {FACILITIES.map((f) => (
                <StaggerItem as="li" key={f}>
                  <GlowCard className="flex h-full items-center gap-3 rounded-2xl px-5 py-4">
                    <Check className="h-4 w-4 shrink-0 text-copper-400" />
                    <span className="text-champagne-soft">{f}</span>
                  </GlowCard>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1} className="mt-10 border-t border-white/[0.07] pt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-champagne-muted">Regulatory Standards</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {STANDARDS.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="container py-16 md:py-32" aria-labelledby="qc-deliverables">
        <div id="qc-deliverables">
          <SectionHeading
            eyebrow="Deliverables"
            title="What You Get"
            highlight={[2]}
            intro="Practical, inspection-grade outputs your team can use and defend."
          />
        </div>
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERABLES.map((d) => (
            <StaggerItem key={d.title}>
              <GlowCard className="flex h-full flex-col p-7">
                <IconTile icon={d.icon} />
                <h3 className="mt-6 text-xl text-champagne">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-champagne-muted">{d.text}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Timelines */}
      <section className="relative py-16 md:py-32" aria-labelledby="qc-timelines">
        <div className="absolute inset-0 -z-10 bg-grid opacity-25 mask-fade-b" />
        <div className="container">
          <div id="qc-timelines">
            <SectionHeading
              eyebrow="Timelines"
              title="Typical Project Timelines"
              highlight={[2]}
              intro="Indicative durations; we confirm a detailed plan once scope is agreed."
            />
          </div>
          <ol className="relative mt-14 space-y-5 before:absolute before:bottom-6 before:left-[1.375rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-copper-400/60 before:to-transparent md:before:left-[1.75rem]">
            {TIMELINES.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.08} className="relative grid grid-cols-[auto_1fr] gap-5 md:gap-8">
                <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-copper-400/40 bg-obsidian-900 font-mono text-sm text-copper-300 md:h-14 md:w-14">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <GlowCard className="grid min-w-0 gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:p-8">
                  <div>
                    <h3 className="text-xl text-champagne">{t.title}</h3>
                    <p className="mt-1 text-sm text-champagne-muted">{t.note}</p>
                  </div>
                  <div className="font-display text-3xl text-copper-200 md:text-right md:text-4xl">{t.time}</div>
                </GlowCard>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Engagement models */}
      <section className="container py-16 md:py-32" aria-labelledby="qc-models">
        <div id="qc-models">
          <SectionHeading
            eyebrow="How we work"
            title="Flexible Engagement Models"
            highlight={[1]}
            align="center"
            intro="From a single investigation to an embedded quality resource."
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

      {/* FAQ */}
      <section className="container py-16 md:py-32" aria-labelledby="qc-faq">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div id="qc-faq">
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" highlight={[2]} />
            </div>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-3 text-sm text-champagne-muted">
                <ScanSearch className="h-4 w-4 shrink-0 text-copper-400" />
                <span>
                  Have a specific quality issue?{" "}
                  <a href={MAIL} className="text-copper-300 underline decoration-copper-400/40 underline-offset-4 hover:decoration-copper-300">
                    Email our quality team
                  </a>
                </span>
              </div>
            </Reveal>
          </div>
          <FaqList items={FAQS} idPrefix="qc-faq" />
        </div>
      </section>

      <CtaBand
        title="Ready to Strengthen Your Quality Systems?"
        intro="Get expert quality consulting for deviation management, CAPA optimization, and regulatory compliance."
      />
    </>
  );
};

export default QualCon;
