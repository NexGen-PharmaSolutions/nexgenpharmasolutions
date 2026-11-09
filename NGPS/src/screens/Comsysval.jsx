import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  ClipboardList,
  Factory,
  FileCheck2,
  FileText,
  FlaskConical,
  GitBranch,
  Network,
  Plus,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand, CtaLink, Tag, IconTile } from "../components/ui/blocks";
import { Reveal, Stagger, StaggerItem, GlowCard, TiltCard, EASE } from "../components/ui/motion";

/* ------------------------------------------------------------------ */
/* Content                                                              */
/* ------------------------------------------------------------------ */

// GxP Readiness Map (CPHI Milan 2026). Text is verbatim: every clause was
// checked against the regulation. Do not edit wording.
const readinessMap = [
  {
    fail: "The model is retrained, or the vendor ships a release, after go-live.",
    clause: "EU GMP Annex 11 §10 · GAMP 5 continuous validation",
    deliver:
      "Change control protocol with defined revalidation triggers and a regression test set held by the quality unit.",
  },
  {
    fail: "A decision is made by the system and nobody can produce a human-readable trail of why.",
    clause: "21 CFR Part 11.10(e)",
    deliver: "Audit trail design review plus a Part 11 gap assessment against the as-built system.",
  },
  {
    fail: "Training or configuration data lineage cannot be evidenced back to source.",
    clause: "ALCOA+ (attributable, original, enduring)",
    deliver: "Data integrity mapping across the full data lifecycle, from instrument to archive.",
  },
  {
    fail: "A SaaS vendor states the platform is “already validated”.",
    clause: "GAMP 5 Category 4 / 5 · supplier assessment",
    deliver:
      "Supplier audit and software categorisation report your quality unit can accept as evidence.",
  },
  {
    fail: "A digital twin or predictive maintenance model drifts away from the qualified state.",
    clause: "EU GMP Annex 15",
    deliver: "Requalification strategy with periodic review intervals tied to model performance.",
  },
  {
    fail: "Electronic signature workflows are introduced in a new module.",
    clause: "21 CFR Part 11 Subpart C · Annex 11 §14",
    deliver:
      "E-signature qualification covering identity, meaning and non-repudiation of the signed record.",
  },
];

const systems = [
  {
    icon: Factory,
    title: "Manufacturing Systems",
    text: "SCADA, PLC, control systems, automated equipment, packaging & labeling systems, sterilization systems",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Systems",
    text: "LIMS (Laboratory Information Management Systems), chromatography data systems, spectroscopy software, electronic lab notebooks",
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    text: "ERP (SAP, Oracle), MES (Manufacturing Execution Systems), electronic batch records, warehouse management systems",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance Systems",
    text: "Document management, training management, CAPA systems, change control, complaint management, audit management",
  },
  {
    icon: Network,
    title: "Infrastructure & Utilities",
    text: "Building management systems, environmental monitoring, HVAC control, water system monitoring, network infrastructure",
  },
];

const standards = [
  "FDA 21 CFR Part 11",
  "EU Annex 11",
  "GAMP 5 V-Model",
  "PIC/S PI 011-3",
  "WHO TRS 996",
  "ISO/IEC 62304",
];

const gampCategories = [
  { cat: "Cat 3", text: "Non-configured products (instruments, firmware)" },
  { cat: "Cat 4", text: "Configured products (LIMS, ERP, COTS software)" },
  { cat: "Cat 5", text: "Custom applications (bespoke software, modifications)" },
];

const deliverables = [
  {
    icon: FileText,
    title: "Validation Master Plan (VMP)",
    text: "Comprehensive validation strategy document defining scope, approach, roles, responsibilities, and acceptance criteria.",
  },
  {
    icon: ClipboardList,
    title: "Requirements & Risk Assessment",
    text: "User Requirements Specifications (URS), Functional Specifications (FS), and risk assessments identifying critical functions.",
  },
  {
    icon: FileCheck2,
    title: "IQ/OQ/PQ Protocols & Reports",
    text: "Complete Installation, Operational, and Performance Qualification protocols with executed test results and acceptance criteria.",
  },
  {
    icon: GitBranch,
    title: "Traceability Matrix",
    text: "Complete requirements traceability matrix linking URS through design specifications to test cases and results.",
  },
  {
    icon: BookOpen,
    title: "SOPs & Training Materials",
    text: "Standard operating procedures, user manuals, training materials, and competency assessments for system users.",
  },
  {
    icon: FileText,
    title: "Validation Summary Report",
    text: "Final validation summary report documenting all activities, deviations, and formal approval for production use.",
  },
];

const timelines = [
  { title: "Simple Systems (Cat 3)", time: "4-6 weeks", text: "Standalone instruments, basic equipment with firmware" },
  { title: "Configured Systems (Cat 4)", time: "12-16 weeks", text: "LIMS, ERP modules, configurable COTS applications" },
  { title: "Custom Systems (Cat 5)", time: "20-28 weeks", text: "Bespoke applications, heavily customized systems, integrations" },
  {
    title: "Legacy System Remediation",
    time: "8-16 weeks",
    text: "Retrospective validation, gap assessment, documentation reconstruction",
  },
];

const engagementModels = [
  {
    title: "Project-Based Validation",
    text: "Complete validation lifecycle for specific systems with defined deliverables and fixed timelines.",
    points: ["Clear scope and deliverables", "Fixed timeline and budget", "Milestone-based payments"],
  },
  {
    title: "Dedicated Validation Team",
    text: "Dedicated validation resources for ongoing projects, system upgrades, and lifecycle management support.",
    points: ["Full-time validation specialists", "Flexible scope adjustments", "Priority support access"],
  },
  {
    title: "Hybrid Delivery Model",
    text: "Flexible combination of onsite, remote, and offshore resources optimized for efficiency and cost-effectiveness.",
    points: ["Onsite presence for critical activities", "Remote execution and testing", "Offshore documentation support"],
  },
];

const faqs = [
  {
    q: "What is the difference between Computer System Validation (CSV) and Computer Software Assurance (CSA)?",
    a: "CSV is the traditional comprehensive approach requiring extensive documentation for all systems. CSA is the FDA's newer risk-based approach focusing resources on critical functionality and patient safety. CSA emphasizes critical thinking over documentation volume, allowing reduced validation burden for lower-risk systems while maintaining robust evidence for high-risk applications. We help determine which approach is appropriate for each system and can implement hybrid strategies that balance compliance rigor with efficiency.",
  },
  {
    q: "How does the GAMP 5 V-Model work in practice?",
    a: "The GAMP 5 V-Model structures validation activities in a 'V' shape: the left side represents specification phases (User Requirements, Functional Specs, Design Specs), the bottom represents development/configuration, and the right side shows corresponding testing phases (IQ, OQ, PQ) that verify each specification level. Each testing phase maps directly to a specification phase, ensuring all requirements are verified. We use this model to create comprehensive validation strategies with clear traceability from requirements through testing and ongoing operation.",
  },
  {
    q: "What is required for 21 CFR Part 11 compliance?",
    a: "21 CFR Part 11 governs electronic records and signatures in FDA-regulated environments. Key requirements include: secure user authentication, audit trails capturing who/what/when for all data changes, data integrity controls (ALCOA+ principles), electronic signature controls, system validation, and comprehensive documentation. We assess systems against all Part 11 requirements, implement necessary controls, establish SOPs, train users, and maintain ongoing compliance monitoring to ensure your systems meet regulatory expectations.",
  },
  {
    q: "How long does a typical system validation project take?",
    a: "Timeline varies by system complexity and GAMP category. Simple standalone instruments (Category 3) may require 4-6 weeks. Standard configurable systems like LIMS or ERP (Category 4) typically take 12-16 weeks. Custom or highly configured systems (Category 5) can require 20-28 weeks or more. Factors include system scope, data migration requirements, number of interfaces, user base size, and organizational readiness. We provide detailed project timelines during initial assessment with milestone tracking throughout execution.",
  },
  {
    q: "Do you provide support for legacy system remediation and data integrity assessments?",
    a: "Yes, we specialize in retrospective validation of legacy systems that lack adequate documentation, data integrity risk assessments (DIRA) per WHO/PIC/S guidance, and gap remediation programs. Our approach includes system inventory, criticality assessment, risk-based documentation reconstruction, control implementation, and ongoing monitoring plans. We help organizations address regulatory deficiencies discovered during inspections or internal audits while minimizing business disruption and establishing sustainable compliance going forward.",
  },
];

const pad = (n) => String(n).padStart(2, "0");

/* ------------------------------------------------------------------ */
/* GxP Readiness Map                                                    */
/* ------------------------------------------------------------------ */

function MapRow({ row, index, active, onActivate }) {
  const on = active === index;
  const clauses = row.clause.split(" · ");
  return (
    <StaggerItem
      as="li"
      onMouseEnter={() => onActivate(index)}
      onClick={() => onActivate(index)}
      className="group relative"
    >
      {/* Active background + progress rail */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-3xl border transition-all duration-700 ease-expo ${
          on
            ? "border-copper-400/30 bg-gradient-to-r from-copper-500/[0.12] via-copper-400/[0.05] to-transparent shadow-glow"
            : "border-transparent"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute left-0 top-6 bottom-6 w-px origin-top bg-gradient-to-b from-copper-300 to-copper-600 transition-transform duration-700 ease-expo ${
          on ? "scale-y-100" : "scale-y-0"
        }`}
      />

      <div className="relative grid gap-5 px-5 py-7 sm:px-7 md:grid-cols-[4.5rem_1.2fr_0.85fr_1.2fr] md:items-start md:gap-8 md:py-9">
        <div
          className={`font-display text-4xl leading-none transition-colors duration-500 md:text-5xl ${
            on ? "text-gradient" : "text-champagne-faint/60"
          }`}
          aria-hidden="true"
        >
          {pad(index + 1)}
        </div>

        <div>
          <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-champagne-faint md:hidden">
            Failure point
          </span>
          <p
            className={`text-[1.05rem] font-medium leading-relaxed transition-colors duration-500 md:text-lg ${
              on ? "text-champagne" : "text-champagne-soft"
            }`}
          >
            <span className="sr-only">Failure point {index + 1}: </span>
            {row.fail}
          </p>
        </div>

        <div>
          <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-champagne-faint md:hidden">
            Regulatory reference
          </span>
          <span className="sr-only">Regulatory reference: {row.clause}</span>
          <div className="flex flex-wrap gap-2" aria-hidden="true">
            {clauses.map((c) => (
              <Tag
                key={c}
                className={`whitespace-normal text-left leading-snug transition-colors duration-500 ${
                  on ? "border-copper-300/60 bg-copper-400/[0.14] text-copper-100" : ""
                }`}
              >
                {c}
              </Tag>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <ArrowRight
            aria-hidden="true"
            className={`mt-1.5 hidden h-4 w-4 flex-none transition-all duration-500 ease-expo md:block ${
              on ? "translate-x-0 text-copper-300 opacity-100" : "-translate-x-2 text-champagne-faint opacity-40"
            }`}
          />
          <div>
            <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-copper-400 md:hidden">
              NexGen deliverable
            </span>
            <p
              className={`leading-relaxed transition-colors duration-500 ${
                on ? "text-champagne" : "text-champagne-muted"
              }`}
            >
              <span className="sr-only">NexGen deliverable: </span>
              {row.deliver}
            </p>
          </div>
        </div>
      </div>
      {index < readinessMap.length - 1 && <div className="hairline mx-5 sm:mx-7" aria-hidden="true" />}
    </StaggerItem>
  );
}

function ReadinessMap() {
  const [active, setActive] = useState(0);
  return (
    <section
      id="gxp-readiness-map"
      aria-label="GxP readiness map"
      className="relative isolate scroll-mt-28 overflow-hidden border-y border-copper-400/15 bg-obsidian-900 py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-20 bg-grid opacity-50" aria-hidden="true" />
      <div
        className="absolute -left-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-copper-600/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-copper-400/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-300/60 to-transparent" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-6 top-10 -z-10 select-none font-display text-[38vw] leading-none text-white/[0.025] md:text-[22rem]"
        aria-hidden="true"
      >
        06
      </div>

      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="GxP readiness map"
            title="Where pharma’s digital systems stall in GxP"
            highlight={[4]}
            intro="MES, ERP, digital twins, predictive maintenance and analytics platforms all work before they reach a regulated plant. What stops them is a quality unit that cannot accept what it cannot audit. These are six failure points we see repeatedly, the clause each one maps to, and the deliverable that closes it."
          />

          {/* Step selector: decorative quick-nav mirroring the hover state */}
          <Reveal delay={0.25} className="flex flex-col gap-3 lg:items-end">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-champagne-faint" aria-hidden="true">
              Failure point <span className="text-copper-300">{pad(active + 1)}</span> / {pad(readinessMap.length)}
            </span>
            <div className="flex gap-2" role="group" aria-label="Highlight a failure point">
              {readinessMap.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  aria-label={`Highlight failure point ${i + 1}`}
                  className={`grid h-9 w-9 place-items-center rounded-full border font-mono text-[0.7rem] transition-all duration-500 ease-expo ${
                    active === i
                      ? "border-copper-300 bg-copper-400 text-obsidian-950 shadow-glow"
                      : "border-white/10 text-champagne-muted hover:border-copper-400/50 hover:text-copper-200"
                  }`}
                >
                  {pad(i + 1)}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Column headers */}
        <div
          className="mt-16 hidden grid-cols-[4.5rem_1.2fr_0.85fr_1.2fr] gap-8 border-b border-white/10 px-7 pb-4 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-champagne-faint md:grid"
          aria-hidden="true"
        >
          <span>#</span>
          <span>Failure point</span>
          <span>Regulatory reference</span>
          <span className="pl-7 text-copper-400">NexGen deliverable</span>
        </div>

        <p className="sr-only">
          GxP readiness map: for each failure point, the regulatory reference and the NexGen deliverable.
        </p>
        <Stagger as="ol" gap={0.1} className="mt-8 md:mt-2">
          {readinessMap.map((row, i) => (
            <MapRow key={i} row={row} index={i} active={active} onActivate={setActive} />
          ))}
        </Stagger>

        <Reveal className="mt-14">
          <GlowCard className="grid gap-8 p-8 sm:p-10 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
            <p className="font-display text-display-sm text-champagne">
              If your roadmap has an answer to all six, you do not need us. If it has an answer to three, that is the
              conversation worth having.
            </p>
            <div>
              <CtaLink to="/contactus">Request a gap assessment</CtaLink>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/[0.07] bg-obsidian-950/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-3 text-sm leading-relaxed text-champagne-muted">
              <CalendarDays className="mt-0.5 h-4 w-4 flex-none text-copper-400" aria-hidden="true" />
              <span>
                We were at CPHI Milan 2026 in the Pharma &amp; Tech Zone. Meet us next at{" "}
                <span className="text-champagne">CPHI India 2026, 23–25 November, Yashobhoomi (IICC) New Delhi.</span>
              </span>
            </p>
            <Link
              to="/events"
              className="group inline-flex flex-none items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-copper-300 transition-colors hover:text-copper-100"
            >
              See our events
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <Stagger className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <StaggerItem key={f.q}>
            <h3 className="font-sans">
              <button
                type="button"
                id={`csv-faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`csv-faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-7 text-left"
              >
                <span
                  className={`text-lg font-medium leading-snug transition-colors duration-300 md:text-xl ${
                    isOpen ? "text-copper-200" : "text-champagne group-hover:text-copper-200"
                  }`}
                >
                  {f.q}
                </span>
                <span
                  className={`grid h-9 w-9 flex-none place-items-center rounded-full border transition-all duration-500 ease-expo ${
                    isOpen ? "rotate-45 border-copper-400 bg-copper-400/15 text-copper-200" : "border-white/15 text-champagne-muted"
                  }`}
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`csv-faq-a-${i}`}
                  role="region"
                  aria-labelledby={`csv-faq-q-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-8 pr-12 leading-relaxed text-champagne-muted">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const Comsysval = () => {
  return (
    <>
      <PageHero
        crumb="Computer System Validation"
        eyebrow="GAMP 5 · 21 CFR Part 11 · EU Annex 11"
        title="Computer System Validation (CSV)"
        highlight={[2]}
        intro="Comprehensive validation services for GxP computerized systems following GAMP 5, 21 CFR Part 11, and EU Annex 11. Risk-based validation strategies ensuring data integrity, compliance, and system reliability."
        scene="lattice"
        primary={{ href: "#gxp-readiness-map", label: "See the GxP readiness map" }}
        secondary={{ href: "mailto:inquiry@nexgenpharmasolutions.com", label: "Email us" }}
        stats={[
          ["6", "Readiness failure points"],
          ["Cat 3–5", "GAMP 5 scope"],
          ["ALCOA+", "Data integrity"],
        ]}
      />

      {/* 1. The headline section */}
      <ReadinessMap />

      {/* 2. Systems we validate */}
      <section aria-labelledby="systems-heading" className="py-24 md:py-32">
        <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <span className="eyebrow">Comprehensive CSV solutions</span>
            </Reveal>
            <h2 id="systems-heading" className="mt-5 text-display-md text-champagne">
              Systems we <span className="text-gradient italic">validate</span>
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-champagne-muted">
                From the shop floor to the enterprise layer, every GxP computerized system gets a validation approach
                sized to its risk.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {systems.map((s, i) => (
              <StaggerItem key={s.title} className={i === 0 ? "sm:col-span-2" : ""}>
                <GlowCard className="h-full p-7">
                  <div className="flex items-start justify-between gap-4">
                    <IconTile icon={s.icon} />
                    <span className="font-mono text-xs text-champagne-faint" aria-hidden="true">
                      {pad(i + 1)}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl text-champagne">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-champagne-muted">{s.text}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 3. Validation approach */}
      <section aria-labelledby="approach-heading" className="relative py-24 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">Our validation approach</span>
            </Reveal>
            <h2 id="approach-heading" className="mt-5 text-display-md text-champagne">
              Standards-led, <span className="text-gradient italic">risk-based</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <TiltCard max={5} className="h-full p-8 md:p-10">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Regulatory Standards</h3>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {standards.map((s) => (
                    <li key={s}>
                      <Tag className="px-4 py-1.5 text-[0.75rem]">{s}</Tag>
                    </li>
                  ))}
                </ul>
                <div className="hairline my-8" aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Risk-Based Strategy</h3>
                <p className="mt-4 leading-relaxed text-champagne-soft">
                  We apply ICH Q9 risk management principles to focus validation efforts where they matter most:
                  critical functionality affecting product quality, data integrity, and patient safety. This ensures
                  compliance while optimizing resource allocation.
                </p>
              </TiltCard>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">GAMP 5 Categories</h3>
              </Reveal>
              <Stagger className="mt-5 grid gap-4">
                {gampCategories.map((g, i) => (
                  <StaggerItem key={g.cat}>
                    <GlowCard className="flex items-center gap-6 p-6 md:p-7">
                      <div className="flex-none">
                        <div className="font-display text-3xl text-gradient md:text-4xl">{g.cat}</div>
                      </div>
                      <div className="h-10 w-px flex-none bg-white/10" aria-hidden="true" />
                      <p className="text-champagne-soft">{g.text}</p>
                      <div className="ml-auto hidden gap-1 sm:flex" aria-hidden="true">
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            className={`h-1.5 w-6 rounded-full ${d <= i ? "bg-copper-400" : "bg-white/10"}`}
                          />
                        ))}
                      </div>
                    </GlowCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What you get */}
      <section aria-labelledby="deliverables-heading" className="relative py-24 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <span className="eyebrow">Deliverables</span>
              </Reveal>
              <h2 id="deliverables-heading" className="mt-5 text-display-md text-champagne">
                What you <span className="text-gradient italic">get</span>
              </h2>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-champagne-muted">
                A complete, inspection-ready validation package, from plan to formal approval for production use.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <StaggerItem key={d.title}>
                <TiltCard max={6} className="group h-full p-8">
                  <div className="flex items-center justify-between">
                    <IconTile icon={d.icon} />
                    <span className="font-display text-5xl text-white/[0.06] transition-colors duration-500 group-hover:text-copper-400/20" aria-hidden="true">
                      {pad(i + 1)}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl text-champagne">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-champagne-muted">{d.text}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 5. Timelines & engagement models */}
      <section aria-label="Timelines and engagement models" className="relative py-24 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container">
          <SectionHeading eyebrow="Planning" title="Timelines & Engagement Models" highlight={[2]} />

          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <h3 className="text-display-sm text-champagne">Typical Project Timelines</h3>
              </Reveal>
              <Stagger as="ol" className="relative mt-10 space-y-8 border-l border-copper-400/20 pl-8">
                {timelines.map((t, i) => (
                  <StaggerItem as="li" key={t.title} className="relative">
                    <span
                      className="absolute -left-[2.85rem] top-0 grid h-7 w-7 place-items-center rounded-full border border-copper-400/40 bg-obsidian-900 font-mono text-[0.62rem] text-copper-300"
                      aria-hidden="true"
                    >
                      {pad(i + 1)}
                    </span>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="text-lg text-champagne">{t.title}</h4>
                      <span className="font-mono text-sm text-copper-300">{t.time}</span>
                    </div>
                    <p className="mt-2 text-sm text-champagne-muted">{t.text}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <Reveal>
                <h3 className="text-display-sm text-champagne">Flexible Engagement Models</h3>
              </Reveal>
              <Stagger className="mt-10 grid gap-4">
                {engagementModels.map((m) => (
                  <StaggerItem key={m.title}>
                    <GlowCard className="p-7">
                      <h4 className="text-xl text-champagne">{m.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-champagne-muted">{m.text}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {m.points.map((p) => (
                          <li
                            key={p}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-champagne-soft"
                          >
                            <span className="h-1 w-1 rounded-full bg-copper-400" aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </GlowCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section aria-labelledby="faq-heading" className="relative py-24 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <span className="eyebrow">FAQ</span>
            </Reveal>
            <h2 id="faq-heading" className="mt-5 text-display-md text-champagne">
              Frequently Asked <span className="text-gradient italic">Questions</span>
            </h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Ready to Validate Your Critical Systems?"
        intro="Get expert CSV services following GAMP 5, 21 CFR Part 11, and EU Annex 11 for your GxP computerized systems."
        primary={{ to: "/contactus", label: "Request a gap assessment" }}
      />
    </>
  );
};

export default Comsysval;
