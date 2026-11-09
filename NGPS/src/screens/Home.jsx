import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Zap,
  FileText,
  Database,
  Users,
  Briefcase,
  MapPin,
  CalendarDays,
  Plus,
  CheckCircle2,
  ShieldCheck,
  LineChart,
  Lock,
  FolderKanban,
  GraduationCap,
} from "lucide-react";
import Lazy3D from "../components/ui/Lazy3D";
import Countdown from "../components/ui/Countdown";
import {
  Reveal,
  Stagger,
  StaggerItem,
  SplitText,
  Counter,
  TiltCard,
  GlowCard,
  Marquee,
  Parallax,
  EASE,
} from "../components/ui/motion";
import { SectionHeading, CtaLink, Tag, IconTile } from "../components/ui/blocks";
import { SERVICES } from "../lib/nav";
import { getEvent, boothLabel } from "../lib/events";
import { submitEnquiry } from "../lib/mailto";
import FormStatus, { Honeypot } from "../components/ui/FormStatus";
import { CONTACT_EMAIL } from "../lib/seo";
import { TrackRecord } from "../components/TrackRecord";

const INDIA = getEvent("cphi-india-2026");
const MILAN = getEvent("cphi-milan-2026");

const SERVICE_COPY = {
  "/gmpaudits":
    "Highly experienced GMP auditors who have audited API, intermediate, key starting material, packaging material and finished-dosage facilities across the globe.",
  "/qualityconsulting":
    "Tailored GMP consulting across APIs, intermediates, packaging and finished products. We find the compliance gaps, implement corrective actions and support you through inspections.",
  "/computersystemvalidations":
    "GMP-compliant validation plans, risk assessments and continuous support that keep your systems reliable, your data intact and your audits uneventful.",
  "/training":
    "Expert-led GMP sessions that make regulatory requirements, quality standards and best practice part of how your teams work, not just what they sign.",
  "/regulatoryaffairs":
    "Meticulous preparation and submission of Drug Master Files of every type, with technical writing, cGMP compliance and confidential handling of authority queries.",
};

const STRENGTHS = [
  { icon: BadgeCheck, title: "EDQM & USFDA audit expertise", text: "Mock audits mirroring actual regulatory inspections. Proven across API, sterile and FDF facilities.", span: "md:col-span-2" },
  { icon: Zap, title: "Rapid remediation", text: "Close critical deviations, CAPAs and data integrity gaps fast. No generic templates, only practical solutions." },
  { icon: FileText, title: "DMF & CEP support", text: "Technical documentation, authority responses, lifecycle management. Confidential and submission-ready." },
  { icon: Database, title: "CSV & data integrity", text: "GAMP 5, 21 CFR Part 11 and Annex 11. LIMS, ERP and MES validated to regulatory standards.", span: "md:col-span-2" },
  { icon: Users, title: "Seasoned auditor network", text: "Former regulators, industry QA heads and validation specialists. Real-world expertise, not theory.", span: "md:col-span-2" },
  { icon: Briefcase, title: "Flexible engagement", text: "Project-based, retainer or embedded support. Scale up or down as you need." },
];

const STEPS = [
  ["Discovery", "Understand your challenge, scope and timeline"],
  ["Scoping", "Define deliverables, engagement model and commercials"],
  ["Execution", "Deploy experts, conduct audits, develop solutions"],
  ["Delivery", "Hand over reports, training or validated systems"],
  ["Follow-up", "Post-engagement support and continuous improvement"],
];

const CASES = [
  { metric: "0", unit: "483s", tag: "USFDA readiness · API facility", text: "Mock audit identified 47 observations. All critical findings closed in 6 weeks. The client cleared the actual USFDA inspection with zero 483s." },
  { metric: "8", unit: "weeks", tag: "Type II DMF · Oncology API", text: "Prepared manufacturing, analytical and stability modules. Submission accepted with no queries." },
  { metric: "100%", unit: "passed", tag: "LIMS validation · Sterile plant", text: "End-to-end CSV for a laboratory information management system. GAMP 5 compliant, 21 CFR Part 11 validated, approved by QA and passed audit." },
];

const FAQ = [
  ["What is NexGen's inspection success rate?", "100%. Every client we have prepared for a USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA or ANVISA inspection has cleared it, and several cleared USFDA inspections with zero Form 483 observations."],
  ["Which is the best GMP audit and consulting company in India?", "Look for a verifiable inspection record and auditors who have worked on the regulator's side. NexGen Pharma Solutions Pvt. Ltd., Vadodara, has a 100% inspection success record across USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA, with audits led by former regulators and senior QA heads."],
  ["What services does NexGen Pharma Solutions offer?", "GMP audits, quality consulting, computer system validation, GMP training and regulatory affairs, including Drug Master File and CEP support, for API, sterile and finished-dosage manufacturers worldwide."],
  ["Do you run USFDA and EDQM mock inspections?", "Yes. Our mock audits mirror actual regulatory inspections and are run by former regulators and industry QA heads across API, sterile and FDF facilities, followed by CAPA closure support."],
  ["Which regulations do you validate computer systems against?", "GAMP 5, 21 CFR Part 11 and EU GMP Annex 11, covering LIMS, ERP, MES, SCADA and newer AI and SaaS platforms, with ALCOA+ data integrity throughout."],
  ["Can you prepare and submit DMFs and CEPs?", "Yes. We handle all DMF types: technical writing, cGMP documentation, submissions, authority queries and lifecycle management, with full confidentiality."],
  ["How do engagements work?", "Project-based, retainer or embedded support, delivered through a five-step process: discovery, scoping, execution, delivery and follow-up."],
  ["Where can I meet the team in person?", `At ${INDIA.name}, ${INDIA.dates}, ${INDIA.venue}, ${INDIA.city}. We also exhibited at ${MILAN.name} in ${MILAN.city}.`],
];

const STANDARDS = ["USFDA", "EDQM", "KFDA (MFDS)", "MHRA", "WHO-GMP", "EU GMP", "PMDA", "ANVISA", "EU GMP Annex 11", "21 CFR Part 11", "GAMP 5", "ICH Q7", "ICH Q9", "ICH Q10", "ALCOA+", "PIC/S"];

/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="absolute inset-0 -z-20 bg-grid opacity-50 mask-fade-b" />
      <div className="absolute left-[-10%] top-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-copper-700/20 blur-[140px]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: EASE }}
        className="absolute inset-0 -z-10 opacity-40 md:left-[42%] md:opacity-100"
      >
        <Lazy3D variant="hero" className="absolute inset-0" cameraZ={11} />
      </motion.div>
      {/* Scrim keeps the headline legible over the 3D scene */}
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-obsidian-950 via-obsidian-950/80 to-transparent md:w-[62%]" />

      <motion.div style={{ y, opacity }} className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}>
          <Link
            to="/events"
            className="group inline-flex max-w-full items-center gap-2 rounded-full border border-copper-400/30 bg-obsidian-900/70 py-1.5 pl-1.5 pr-4 text-xs text-champagne-soft backdrop-blur transition-colors hover:border-copper-300/60 sm:gap-3"
          >
            <span className="shrink-0 rounded-full bg-copper-400 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-obsidian-950">
              Next
            </span>
            <span className="truncate">
              Meet us at <strong className="font-semibold text-champagne">{INDIA.name}</strong>
              <span className="hidden sm:inline"> · {INDIA.dates.replace(" 2026", "")} · New Delhi</span>
            </span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 max-w-full font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-copper-400 sm:text-[0.72rem] sm:tracking-[0.22em]"
        >
          NexGen Pharma Solutions · Pharmaceutical consulting &amp; GMP compliance partner
        </motion.h1>
        <SplitText
          as="p"
          text="Compliance, engineered for inspection day."
          highlight={[1, 2]}
          className="mt-8 max-w-3xl font-display text-display-xl text-champagne"
          delay={0.35}
        />
        <Reveal delay={0.8}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-champagne-muted md:text-xl">
            NexGen Pharma Solutions is the trusted pharmaceutical consulting and compliance partner for global
            manufacturers: GMP audits, quality systems, regulatory affairs and validation, delivered by people who
            have sat on the other side of the table.
          </p>
          <p className="mt-6 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 text-sm text-champagne-soft">
            <BadgeCheck className="h-4 w-4 shrink-0 text-copper-400" />
            <strong className="font-semibold text-champagne">100% inspection success</strong>
            <span className="text-champagne-faint">USFDA · EDQM · KFDA · MHRA · WHO-GMP · EU GMP · PMDA · ANVISA, including zero-483 USFDA outcomes</span>
          </p>
        </Reveal>
        <Reveal delay={0.95} className="mt-10 flex flex-wrap gap-4">
          <CtaLink href="#contact-form">Request a consultation</CtaLink>
          <CtaLink href="#services" variant="ghost">
            Explore services
          </CtaLink>
        </Reveal>
        <Reveal delay={1.1} className="mt-14 flex flex-wrap gap-2">
          {["API Manufacturers", "Sterile Facilities", "FDF Plants", "QA/QC Leaders"].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-champagne-soft backdrop-blur">
              {t}
            </span>
          ))}
        </Reveal>
      </motion.div>

      <motion.a
        href="#standards"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-champagne-faint md:flex"
      >
        Scroll
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-copper-300"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}

function Standards() {
  return (
    <section id="standards" aria-label="Regulatory frameworks we work to" className="border-y border-white/[0.06] bg-obsidian-900/40 py-8">
      <Marquee
        items={STANDARDS.map((s) => (
          <span key={s} className="font-display text-2xl text-champagne-faint transition-colors hover:text-copper-300 md:text-3xl">
            {s}
          </span>
        ))}
      />
    </section>
  );
}

function Stats() {
  const stats = [
    ["25+", "Years in industry"],
    ["50+", "Global clients"],
    ["200+", "Projects delivered"],
    ["15+", "Countries served"],
  ];
  return (
    <section className="container py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <SectionHeading
          eyebrow="By the numbers"
          title="A quarter century inside the plants we audit."
          highlight={[3]}
        />
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07]">
          {stats.map(([v, l]) => (
            <StaggerItem key={l} className="bg-obsidian-950 p-8 md:p-10">
              <Counter value={v} className="font-display text-5xl text-champagne md:text-6xl" />
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-champagne-faint">{l}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Pinned horizontal gallery on desktop, vertical stack on mobile. */
function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]), { stiffness: 90, damping: 25, mass: 0.4 });

  const card = (s, i) => (
    <TiltCard key={s.to} className="group flex h-full flex-col" max={5}>
      <Link to={s.to} className="flex h-full flex-col p-3">
        <div className="relative h-56 overflow-hidden rounded-[1.25rem] md:h-64">
          <img
            src={s.image}
            alt={`${s.label} by NexGen Pharma Solutions`}
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition-transform duration-[1.2s] ease-expo group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/30 to-transparent" />
          <span className="absolute left-4 top-4 font-mono text-xs text-copper-200">0{i + 1}</span>
          <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-obsidian-950/50 text-champagne backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:bg-copper-400 group-hover:text-obsidian-950">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-3">
            <IconTile icon={s.icon} className="h-10 w-10" />
            <h3 className="font-display text-2xl text-champagne">{s.label}</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-champagne-muted">{SERVICE_COPY[s.to]}</p>
          <span className="mt-auto pt-6 text-sm font-semibold text-copper-300">
            Explore {s.label.toLowerCase()} <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </TiltCard>
  );

  return (
    <section id="services" aria-labelledby="services-title">
      {/* Desktop: pinned horizontal scroll */}
      <div ref={ref} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container mb-12 flex items-end justify-between gap-8">
            <div>
              <span className="eyebrow">Our services</span>
              <h2 id="services-title" className="mt-5 max-w-2xl text-display-md text-champagne">
                Five disciplines. <span className="text-gradient italic">One</span> standard of evidence.
              </h2>
            </div>
            <p className="max-w-sm text-champagne-muted">
              Everything a regulator can ask about, from the shop floor to the server room to the dossier.
            </p>
          </div>
          <motion.div style={{ x }} className="flex gap-6 pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
            {SERVICES.map((s, i) => (
              <div key={s.to} className="w-[420px] shrink-0">
                {card(s, i)}
              </div>
            ))}
            <div className="flex w-[420px] shrink-0 items-center">
              <div className="w-full">
                <p className="font-display text-display-sm text-champagne">Not sure where to start?</p>
                <p className="mt-4 text-champagne-muted">Tell us what the last audit found. We will tell you what to fix first.</p>
                <div className="mt-8">
                  <CtaLink href="#contact-form">Talk to a consultant</CtaLink>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="container py-24 lg:hidden">
        <SectionHeading eyebrow="Our services" title="Five disciplines. One standard of evidence." highlight={[2]} as="h2" />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <StaggerItem key={s.to}>{card(s, i)}</StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="container py-24 md:py-32">
      <SectionHeading
        eyebrow="Proven strengths"
        title="Why global pharma manufacturers trust NexGen."
        highlight={[5]}
        intro="Practical, inspection-tested expertise. Every engagement is led by someone who has run the audit, written the CAPA or defended the dossier."
      />
      <Stagger className="mt-16 grid gap-4 md:grid-cols-4">
        {STRENGTHS.map(({ icon, title, text, span = "" }, i) => (
          <StaggerItem key={title} className={span}>
            <GlowCard className="flex h-full flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <IconTile icon={icon} />
                <span className="font-mono text-xs text-champagne-faint">/0{i + 1}</span>
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl text-champagne">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-champagne-muted">{text}</p>
              </div>
            </GlowCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-obsidian-900/50 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container relative">
        <SectionHeading
          eyebrow="How we work"
          title="From discovery to delivery, in five deliberate steps."
          highlight={[2, 3, 4]}
          align="center"
        />
        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 md:block" />
          <motion.div style={{ scaleX: scale }} className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-copper-700 via-copper-400 to-copper-200 md:block" />
          <Stagger className="grid gap-10 md:grid-cols-5 md:gap-6" gap={0.15}>
            {STEPS.map(([title, desc], i) => (
              <StaggerItem key={title} className="relative flex gap-5 md:block">
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-copper-400/40 bg-obsidian-950 font-mono text-sm text-copper-300 shadow-glow">
                  0{i + 1}
                </div>
                <div className="md:mt-8">
                  <h3 className="font-display text-2xl text-champagne">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-champagne-muted">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function Cphi() {
  return (
    <section id="cphi" aria-labelledby="cphi-title" className="container py-24 md:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">On the show floor</span>
          </Reveal>
          <h2 id="cphi-title" className="mt-5 text-display-md text-champagne">
            <SplitText as="span" text="Milan, done. New Delhi, next." highlight={[3]} className="block" />
          </h2>
        </div>
        <Reveal delay={0.2}>
          <Link to="/events" className="group inline-flex items-center gap-2 text-sm font-semibold text-copper-300">
            All events <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
        {/* CPHI India 2026: upcoming */}
        <Reveal>
          <div className="relative isolate h-full overflow-hidden rounded-[2rem] border border-copper-400/30 bg-obsidian-900 p-8 md:p-12">
            <img src={INDIA.image} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-obsidian-950/95 via-obsidian-900/85 to-copper-800/40" />
            <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-copper-500/30 blur-[100px]" />
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-copper-400 px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-obsidian-950">
                We&rsquo;re exhibiting
              </span>
              <span className="font-mono text-xs text-champagne-muted">Coming up next</span>
            </div>
            <h3 className="mt-8 font-display text-display-md text-champagne">{INDIA.name}</h3>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-champagne-soft">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-copper-400" />{INDIA.dates}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-copper-400" />{INDIA.venue}, {INDIA.city}</span>
              {boothLabel(INDIA) && (
                <span className="inline-flex items-center gap-2 font-semibold text-champagne"><BadgeCheck className="h-4 w-4 text-copper-400" />{boothLabel(INDIA)}</span>
              )}
            </div>
            <p className="mt-6 max-w-lg text-champagne-muted">{INDIA.blurb}</p>
            <Countdown event={INDIA} className="mt-10 max-w-lg" />
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaLink to="/contactus?event=cphi-india-2026">Book a meeting</CtaLink>
              <CtaLink to="/events" variant="ghost">Event details</CtaLink>
            </div>
          </div>
        </Reveal>

        {/* CPHI Milan 2026: attended */}
        <Reveal delay={0.15}>
          <div className="flex h-full flex-col rounded-[2rem] border border-white/[0.08] bg-obsidian-900/60 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-sage" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-sage">We were there</span>
            </div>
            <h3 className="mt-6 font-display text-3xl text-champagne">{MILAN.name}</h3>
            <p className="mt-2 text-sm text-champagne-faint">{MILAN.dates} · {MILAN.venue}, {MILAN.city} · Pharma &amp; Tech zone</p>
            <blockquote className="mt-8 border-l-2 border-copper-400 pl-5 font-display text-2xl leading-snug text-champagne">
              Your model works.
              <span className="block italic text-copper-300">Now prove it to an inspector.</span>
            </blockquote>
            <p className="mt-6 text-sm leading-relaxed text-champagne-muted">
              The technology on show in Milan still has to clear EU GMP Annex 11, 21 CFR Part 11 and a quality unit
              that cannot accept what it cannot audit. CPHI values the pharmaceutical market at{" "}
              <strong className="text-copper-300">$1.67tn</strong>, with technology adoption inside it on a{" "}
              <strong className="text-copper-300">43%</strong> CAGR through 2030. The constraint is not the
              technology. It is qualification.
            </p>
            <p className="mt-3 text-xs text-champagne-faint">Figures published by CPHI, Pharma &amp; Tech zone, cphi.com.</p>
            <dl className="mt-8 divide-y divide-white/[0.07] border-t border-white/[0.07]">
              {[
                ["Manufacturing Optimisation", "MES, ERP, SCADA and batch record validation", "/computersystemvalidations"],
                ["Quality & Compliance", "CAPA, deviations, ALCOA+ data integrity", "/qualityconsulting"],
                ["Commercialisation", "Dossiers, submissions, market authorisation", "/regulatoryaffairs"],
                ["Digital Transformation", "GAMP 5 training, legacy remediation", "/training"],
              ].map(([pillar, answer, href]) => (
                <div key={pillar} className="py-3">
                  <dt>
                    <Link to={href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-champagne hover:text-copper-300">
                      {pillar}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all group-hover:opacity-100" />
                    </Link>
                  </dt>
                  <dd className="text-sm text-champagne-faint">{answer}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-auto pt-8">
              <CtaLink to="/computersystemvalidations" variant="ghost">See the GxP readiness map</CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Product() {
  const features = [
    [FolderKanban, "Document control & CAPA", "Centralised document lifecycle with automated approvals and deviation tracking"],
    [Lock, "Audit trail & data integrity", "21 CFR Part 11 compliant, tamper-proof electronic records"],
    [GraduationCap, "Training matrix & dashboard", "Real-time compliance metrics with automated training reminders"],
    [ShieldCheck, "Supplier qualification & risk", "End-to-end supplier lifecycle with risk-based assessments"],
    [LineChart, "Analytics & reporting", "Predictive insights and executive dashboards for smarter decisions"],
  ];
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-copper-600/10 blur-[140px]" />
      <div className="container relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-copper-400/30 bg-copper-400/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-copper-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-copper-300" /> Coming soon
            </span>
          </Reveal>
          <SplitText text="NexGen Management System" highlight={[2]} className="mt-6 text-display-md text-champagne" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg text-champagne-muted">
              The all-in-one compliance platform built for pharmaceutical excellence. Streamline GMP operations,
              automate quality workflows and stay audit-ready, all in one place.
            </p>
          </Reveal>
          <Stagger className="mt-10 space-y-5">
            {features.map(([Icon, t, d]) => (
              <StaggerItem key={t} className="flex gap-4">
                <IconTile icon={Icon} className="h-10 w-10 shrink-0" />
                <div>
                  <h3 className="font-sans text-base font-semibold text-champagne">{t}</h3>
                  <p className="text-sm text-champagne-faint">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
            <CtaLink to="/products/nexgen-management-system">Learn more</CtaLink>
            <CtaLink to="/products/nexgen-management-system#waitlist" variant="ghost">Join the waitlist</CtaLink>
          </Reveal>
        </div>

        {/* Layered dashboard mockup */}
        <Parallax offset={80}>
          <div className="relative [perspective:1600px]" aria-hidden="true">
            <div className="glass rounded-3xl p-4 shadow-deep [transform:rotateY(-14deg)_rotateX(8deg)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-copper-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-copper-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-sage" />
                <span className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[["Open CAPAs", "12"], ["Training due", "4"], ["Audit score", "98%"]].map(([l, v]) => (
                  <div key={l} className="rounded-xl border border-white/[0.06] bg-obsidian-950/60 p-3">
                    <div className="font-mono text-[0.6rem] uppercase text-champagne-faint">{l}</div>
                    <div className="mt-1 font-display text-2xl text-champagne">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-white/[0.06] bg-obsidian-950/60 p-4">
                <svg viewBox="0 0 300 90" className="h-24 w-full">
                  <defs>
                    <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#F6A06B" stopOpacity=".45" />
                      <stop offset="100%" stopColor="#F6A06B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0 70 C40 60 60 30 100 40 S160 75 200 35 S260 15 300 20"
                    fill="none"
                    stroke="#F6A06B"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2, ease: EASE }}
                  />
                  <path d="M0 70 C40 60 60 30 100 40 S160 75 200 35 S260 15 300 20 V90 H0Z" fill="url(#lg)" />
                </svg>
              </div>
              <div className="mt-3 space-y-2">
                {["SOP-QA-014 · Approved", "DEV-2026-031 · Under review", "CSV-LIMS · Validated"].map((r) => (
                  <div key={r} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2 font-mono text-[0.65rem] text-champagne-muted">
                    {r}
                    <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 -top-6 rounded-2xl bg-copper-sheen px-4 py-2 text-sm font-semibold text-obsidian-950 shadow-glow md:-right-6"
            >
              GMP ready
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -bottom-6 -left-2 rounded-2xl px-4 py-2 font-mono text-xs text-copper-200 md:-left-6"
            >
              21 CFR Part 11
            </motion.div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="container py-24 md:py-32">
      <SectionHeading
        eyebrow="Case studies"
        title="Real challenges. Real results."
        highlight={[2, 3]}
        intro="A few engagements we can talk about. Ask us for the full story on any of them."
      />
      <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
        {CASES.map((c) => (
          <StaggerItem key={c.tag}>
            <TiltCard className="flex h-full flex-col p-8">
              <Tag>{c.tag}</Tag>
              <div className="mt-10 flex items-baseline gap-2">
                <span className="text-gradient font-display text-7xl leading-none">{c.metric}</span>
                <span className="font-display text-2xl italic text-champagne-muted">{c.unit}</span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-champagne-muted">{c.text}</p>
              <a href="#contact-form" className="group mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-copper-300">
                Request details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <section className="container py-24 md:py-32" aria-labelledby="faq-title">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="eyebrow">FAQ</span>
          </Reveal>
          <h2 id="faq-title" className="mt-5 text-display-md text-champagne">Questions we hear before every engagement.</h2>
          <p className="mt-6 text-champagne-muted">
            Something else? Write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-copper-300 underline decoration-copper-400/40 underline-offset-4">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQ.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-sans text-lg font-medium text-champagne transition-colors hover:text-copper-200"
                  >
                    {q}
                    <Plus className={`h-5 w-5 shrink-0 text-copper-400 transition-transform duration-500 ease-expo ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                </h3>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 leading-relaxed text-champagne-muted">{a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const EMPTY = { name: "", company: "", email: "", phone: "", productType: "", timeline: "", requirement: "" };

function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [hp, setHp] = useState("");
  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const result = await submitEnquiry({
        form: "consultation",
        subject: form.company,
        replyTo: form.email,
        website: hp,
        fields: {
          Name: form.name,
          Company: form.company,
          Email: form.email,
          Phone: form.phone,
          "Product type": form.productType,
          Timeline: form.timeline,
          Requirement: form.requirement,
        },
      });
      setStatus(result);
      if (result === "sent") setForm(EMPTY);
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper-700/15 blur-[160px]" />
      <div className="container relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Let's talk"
            title="Tell us what the next inspection looks like."
            highlight={[6]}
            intro="Share your requirements and we'll respond within 24 hours with a tailored approach."
          />
          <Reveal delay={0.2} className="mt-10 space-y-4 text-sm text-champagne-muted">
            {["A senior consultant reads every enquiry", "NDA available before any detail is shared", "Engagements worldwide, on-site or remote"].map((t) => (
              <p key={t} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-copper-400" /> {t}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass relative rounded-[2rem] p-6 shadow-deep md:p-10">
            <Honeypot value={hp} onChange={(e) => setHp(e.target.value)} />
            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["name", "Full name", "text", "Your full name", "name"],
                ["company", "Company", "text", "Your company", "organization"],
                ["email", "Email", "email", "you@company.com", "email"],
                ["phone", "Phone", "tel", "+91 XXXXX XXXXX", "tel"],
              ].map(([n, l, t, p, ac]) => (
                <div key={n}>
                  <label htmlFor={`h-${n}`} className="field-label">{l} <span className="text-copper-400">*</span></label>
                  <input id={`h-${n}`} name={n} type={t} required autoComplete={ac} placeholder={p} value={form[n]} onChange={set} className="field" />
                </div>
              ))}
              <div>
                <label htmlFor="h-productType" className="field-label">Product type <span className="text-copper-400">*</span></label>
                <select id="h-productType" name="productType" required value={form.productType} onChange={set} className="field">
                  <option value="">Select product type</option>
                  <option>API (Active Pharmaceutical Ingredient)</option>
                  <option>Sterile / Injectable</option>
                  <option>FDF (Finished Dosage Form)</option>
                  <option>Intermediate / KSM</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="h-timeline" className="field-label">Timeline <span className="text-copper-400">*</span></label>
                <select id="h-timeline" name="timeline" required value={form.timeline} onChange={set} className="field">
                  <option value="">Select timeline</option>
                  <option>Urgent (1-2 weeks)</option>
                  <option>1-2 months</option>
                  <option>3-6 months</option>
                  <option>6+ months</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="h-requirement" className="field-label">Your requirement <span className="text-copper-400">*</span></label>
                <textarea
                  id="h-requirement"
                  name="requirement"
                  required
                  rows={5}
                  placeholder="GMP audit, regulatory support, validation, training…"
                  value={form.requirement}
                  onChange={set}
                  className="field resize-none"
                />
              </div>
            </div>
            <button type="submit" disabled={status === "sending"} className="btn-primary mt-8 w-full !py-4 disabled:opacity-60">
              <span className="relative z-10">{status === "sending" ? "Sending…" : "Send enquiry"}</span>
              <ArrowRight className="relative z-10 h-4 w-4" />
            </button>
            <FormStatus status={status} error={error} className="mt-6" />
            <p className="mt-4 text-center text-xs text-champagne-faint">
              By submitting you agree to our{" "}
              <Link to="/privacy-policy" className="text-copper-300 hover:underline">Privacy Policy</Link> and{" "}
              <Link to="/terms-conditions" className="text-copper-300 hover:underline">Terms</Link>.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Standards />
      <Stats />
      <TrackRecord />
      <Services />
      <Strengths />
      <Process />
      <Cphi />
      <Product />
      <CaseStudies />
      <Faq />
      <ContactForm />
    </>
  );
}
