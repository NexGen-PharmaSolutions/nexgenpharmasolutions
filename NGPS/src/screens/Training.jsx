import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  LifeBuoy,
  PenLine,
  Plus,
  ShieldCheck,
  Database,
  Search,
  Scale,
  ScanSearch,
  Users,
  Check,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand, Tag, IconTile } from "../components/ui/blocks";
import { Reveal, Stagger, StaggerItem, GlowCard, TiltCard, Parallax, EASE } from "../components/ui/motion";

/* ------------------------------------------------------------------ */
/* Content                                                              */
/* ------------------------------------------------------------------ */

const corePrograms = [
  {
    icon: ShieldCheck,
    title: "GMP & Regulatory Fundamentals",
    text: "Introduction to GMP, FDA 21 CFR Parts 210/211, EU GMP Annexes, behavioral GMP, and quality culture development",
    tags: ["21 CFR 210/211", "EU GMP Annexes"],
  },
  {
    icon: Database,
    title: "Data Integrity Compliance",
    text: "ALCOA+ principles, electronic records (21 CFR Part 11), audit trail review, data governance, and integrity remediation",
    tags: ["ALCOA+", "21 CFR Part 11"],
  },
  {
    icon: Search,
    title: "CAPA & Root Cause Analysis",
    text: "Systematic investigation techniques, RCA methodologies (5-Why, Fishbone, Fault Tree), CAPA development, and effectiveness verification",
    tags: ["5-Why", "Fishbone", "Fault Tree"],
  },
  {
    icon: Scale,
    title: "Quality Risk Management",
    text: "ICH Q9 principles, FMEA, HAZOP, risk-based decision making, and practical application across quality systems",
    tags: ["ICH Q9", "FMEA", "HAZOP"],
  },
  {
    icon: ScanSearch,
    title: "Audit Skills & Inspection Readiness",
    text: "Internal auditing techniques, supplier qualification, inspection preparation, observation handling, and mock audit exercises",
    tags: ["Mock audits"],
  },
];

const advancedTopics = [
  { title: "Computer System Validation", text: "GAMP 5, CSV lifecycle, 21 CFR Part 11 compliance" },
  { title: "Technical Writing", text: "SOP development, protocol writing, report preparation" },
  { title: "Quality Metrics & KPIs", text: "Performance measurement, trending analysis, data-driven decisions" },
  { title: "Change Control Management", text: "Risk-based change assessment, validation triggers, documentation" },
  { title: "Investigative Report Writing", text: "Deviation investigations, OOS/OOT, complaint handling" },
];

const deliveryFormats = [
  "On-site Classroom",
  "Virtual Live Webinars",
  "Self-Paced E-Learning",
  "Hybrid Programs",
  "Custom Workshops",
  "Train-the-Trainer",
];

const trainingFeatures = [
  "Interactive case studies and real-world scenarios",
  "Knowledge assessments and competency verification",
  "Certificates of completion for regulatory files",
  "Customizable to your SOPs and systems",
  "Expert instructors with industry experience",
];

const deliverables = [
  {
    icon: BookOpen,
    title: "Comprehensive Training Materials",
    text: "Participant guides, slide decks, reference materials, job aids, and access to online resource libraries for ongoing reference.",
    span: "md:col-span-2",
  },
  {
    icon: Award,
    title: "Certificates & Training Records",
    text: "Individual certificates of completion, attendance records, assessment scores, and documentation suitable for regulatory inspections.",
    span: "",
  },
  {
    icon: ClipboardCheck,
    title: "Competency Assessments",
    text: "Pre- and post-training knowledge assessments, practical exercises, and verification of understanding with minimum passing criteria.",
    span: "",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    text: "Seasoned pharmaceutical professionals with regulatory inspection experience, industry expertise, and adult learning certifications.",
    span: "",
  },
  {
    icon: PenLine,
    title: "Customized Content",
    text: "Training tailored to your SOPs, systems, products, and specific regulatory requirements with industry-relevant examples.",
    span: "",
  },
  {
    icon: LifeBuoy,
    title: "Post-Training Support",
    text: "30-day post-training support for questions, follow-up assessments, coaching for internal trainers, and effectiveness monitoring.",
    span: "lg:col-span-3",
  },
];

const durations = [
  {
    title: "Fundamentals & Awareness",
    time: "4-8 hours (half-day to full-day)",
    text: "GMP basics, awareness training, introductory topics",
  },
  { title: "Intermediate Technical Training", time: "2-3 days", text: "CAPA, data integrity, auditing, technical writing" },
  {
    title: "Advanced Certification Programs",
    time: "5-10 days (can be split)",
    text: "CSV, audit certification, train-the-trainer, quality metrics",
  },
  { title: "Custom Workshop Series", time: "Flexible scheduling", text: "Multiple sessions scheduled around operational needs" },
];

const engagementModels = [
  {
    title: "Public Scheduled Sessions",
    text: "Regularly scheduled open-enrollment training sessions. Cost-effective for individuals or small groups.",
    points: ["Pre-scheduled dates", "Per-participant pricing", "Virtual or selected venues"],
  },
  {
    title: "Private On-Site Training",
    text: "Customized training delivered at your facility for your entire team with company-specific content.",
    points: ["Customized to your needs", "Flexible scheduling", "Unlimited participants"],
  },
  {
    title: "Train-the-Trainer Programs",
    text: "Build internal training capability with complete training packages, materials, and ongoing support.",
    points: ["Internal capability building", "Complete training kits", "Long-term cost savings"],
  },
];

const faqs = [
  {
    q: "What training formats do you offer?",
    a: "We offer flexible training delivery options to suit your organizational needs: classroom-style on-site training at your facility, virtual instructor-led webinars via Zoom/Teams, self-paced e-learning modules accessible 24/7, hybrid programs combining live and recorded sessions, and customized workshops tailored to specific topics. All formats include interactive exercises, real-world case studies, knowledge assessments, and certificates of completion. We can accommodate groups from 5 to 500+ participants.",
  },
  {
    q: "Are your training programs customizable to our specific needs?",
    a: "Absolutely. All our training programs can be fully customized to address your organization's specific challenges, SOPs, systems, and regulatory requirements. We conduct pre-training assessments to identify knowledge gaps, develop custom content using your actual procedures and scenarios, incorporate your company's quality systems and documentation, and provide industry-specific examples relevant to your operations (API, sterile, biologics, devices, etc.). This ensures maximum relevance and practical applicability for your team.",
  },
  {
    q: "Do you provide training records and certificates for regulatory compliance?",
    a: "Yes, we provide comprehensive training documentation to support regulatory compliance. This includes individual certificates of completion with training dates and topics, detailed training records with attendee signatures and assessment scores, training curricula and materials for your training files, instructor qualifications and CVs, and post-training competency assessment results. All documentation is provided in formats suitable for regulatory inspections and meets FDA, EMA, and other global agency expectations for training documentation.",
  },
  {
    q: "How do you assess training effectiveness and competency?",
    a: "We use a multi-tiered approach to ensure training effectiveness: pre-training knowledge assessments to establish baselines, interactive exercises during training to reinforce concepts, post-training examinations with minimum passing scores (typically 80%), practical exercises or role-plays for hands-on skills, 30/60/90 day follow-up assessments to measure retention, and on-the-job observation and competency verification. We provide detailed reports showing individual and group performance, knowledge gaps, and recommendations for additional training needs.",
  },
  {
    q: "Can you provide Train-the-Trainer programs to build internal capability?",
    a: "Yes, our Train-the-Trainer programs are designed to develop internal subject matter experts who can deliver ongoing training within your organization. Participants learn adult learning principles, effective presentation techniques, how to develop engaging training materials, assessment and competency evaluation methods, and how to maintain training effectiveness. We provide complete training packages including slide decks, participant guides, trainer notes, and assessment tools. This approach builds sustainable internal capability while reducing long-term training costs.",
  },
];

const pad = (n) => String(n).padStart(2, "0");

/* ------------------------------------------------------------------ */
/* Pieces                                                               */
/* ------------------------------------------------------------------ */

function ProgramRow({ p, index, open, onToggle }) {
  const isOpen = open === index;
  const Icon = p.icon;
  return (
    <StaggerItem as="li" className="border-b border-white/[0.07] last:border-b-0">
      <h3 className="font-sans">
        <button
          type="button"
          id={`program-q-${index}`}
          aria-expanded={isOpen}
          aria-controls={`program-a-${index}`}
          onClick={() => onToggle(isOpen ? null : index)}
          className="group flex w-full items-center gap-5 py-6 text-left md:gap-8"
        >
          <span
            className={`font-display text-2xl transition-colors duration-500 md:text-3xl ${
              isOpen ? "text-gradient" : "text-champagne-faint/60"
            }`}
            aria-hidden="true"
          >
            {pad(index + 1)}
          </span>
          <span
            className={`flex-1 font-display text-xl leading-snug transition-colors duration-500 md:text-2xl ${
              isOpen ? "text-champagne" : "text-champagne-soft group-hover:text-champagne"
            }`}
          >
            {p.title}
          </span>
          <span
            className={`grid h-10 w-10 flex-none place-items-center rounded-full border transition-all duration-500 ease-expo ${
              isOpen ? "border-copper-400 bg-copper-400/15 text-copper-200" : "border-white/15 text-champagne-muted"
            }`}
            aria-hidden="true"
          >
            <Icon className="h-4 w-4" strokeWidth={1.6} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`program-a-${index}`}
            role="region"
            aria-labelledby={`program-q-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-0 md:pl-[4.25rem]">
              <p className="max-w-xl leading-relaxed text-champagne-muted">{p.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </StaggerItem>
  );
}

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
                id={`training-faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`training-faq-a-${i}`}
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
                  id={`training-faq-a-${i}`}
                  role="region"
                  aria-labelledby={`training-faq-q-${i}`}
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

const Training = () => {
  const [openProgram, setOpenProgram] = useState(0);

  return (
    <>
      <PageHero
        crumb="Training"
        eyebrow="GMP · Data integrity · CAPA · Auditing"
        title="GMP & Pharmaceutical Training Programs"
        highlight={[2]}
        intro="Expert-led training programs covering GMP, data integrity, CAPA, quality risk management, auditing, and regulatory compliance. Build competency and ensure sustained compliance across your organization."
        scene="capsules"
        primary={{ to: "/contactus", label: "Plan your training" }}
        secondary={{ href: "mailto:inquiry@nexgenpharmasolutions.com", label: "Email us" }}
        stats={[
          ["5", "Core programs"],
          ["6", "Delivery formats"],
          ["30-day", "Post-training support"],
        ]}
      />

      {/* 1. Core programs */}
      <section aria-labelledby="programs-heading" className="py-24 md:py-32">
        <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <span className="eyebrow">Comprehensive training portfolio</span>
            </Reveal>
            <h2 id="programs-heading" className="mt-5 text-display-md text-champagne">
              Core Training <span className="text-gradient italic">Programs</span>
            </h2>
            <Reveal delay={0.15}>
              <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/[0.07]">
                <Parallax offset={30}>
                  <img
                    src="/training%202.jpg"
                    alt="Instructor leading a small-group training session at a flip chart in a meeting room"
                    loading="lazy"
                    className="h-[260px] w-full scale-110 object-cover sm:h-[340px]"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-obsidian-950/10" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper-200">
                    Interactive · Case-study led · Assessed
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Stagger as="ol" className="border-t border-white/[0.07]">
            {corePrograms.map((p, i) => (
              <ProgramRow key={p.title} p={p} index={i} open={openProgram} onToggle={setOpenProgram} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* 2. Specialized & technical */}
      <section aria-labelledby="specialized-heading" className="relative py-24 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">Beyond the fundamentals</span>
            </Reveal>
            <h2 id="specialized-heading" className="mt-5 text-display-md text-champagne">
              Specialized &amp; Technical <span className="text-gradient italic">Training</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <GlowCard className="h-full p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <IconTile icon={GraduationCap} />
                  <h3 className="text-display-sm text-champagne">Advanced Topics</h3>
                </div>
                <ul className="mt-8 divide-y divide-white/[0.07]">
                  {advancedTopics.map((t, i) => (
                    <li key={t.title} className="grid gap-1 py-4 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
                      <span className="font-mono text-xs text-copper-400" aria-hidden="true">
                        {pad(i + 1)}
                      </span>
                      <p className="text-champagne-muted">
                        <strong className="font-semibold text-champagne">{t.title}:</strong> {t.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>

            <div className="grid gap-5 lg:col-span-5">
              <Reveal delay={0.1}>
                <TiltCard max={5} className="p-8">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Delivery Formats</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {deliveryFormats.map((f) => (
                      <li key={f}>
                        <Tag className="px-3.5 py-1.5 text-[0.74rem]">{f}</Tag>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
              <Reveal delay={0.2}>
                <TiltCard max={5} className="p-8">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Training Features</h3>
                  <ul className="mt-5 space-y-3">
                    {trainingFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-champagne-soft">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-copper-400" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What you get */}
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
                Everything your team needs to learn, prove competency and keep the evidence on file.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <StaggerItem key={d.title} className={`${d.span} ${i === deliverables.length - 1 ? "md:col-span-2" : ""}`}>
                <GlowCard className="group flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <IconTile icon={d.icon} />
                    <span
                      className="font-display text-5xl text-white/[0.06] transition-colors duration-500 group-hover:text-copper-400/20"
                      aria-hidden="true"
                    >
                      {pad(i + 1)}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl text-champagne">{d.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-champagne-muted">{d.text}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. Durations & engagement models */}
      <section aria-label="Training durations and formats" className="relative py-24 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container">
          <SectionHeading eyebrow="Planning" title="Training Durations & Formats" highlight={[1]} />

          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <h3 className="text-display-sm text-champagne">Typical Training Durations</h3>
              </Reveal>
              <Stagger as="ol" className="relative mt-10 space-y-8 border-l border-copper-400/20 pl-8">
                {durations.map((t, i) => (
                  <StaggerItem as="li" key={t.title} className="relative">
                    <span
                      className="absolute -left-[2.85rem] top-0 grid h-7 w-7 place-items-center rounded-full border border-copper-400/40 bg-obsidian-900 font-mono text-[0.62rem] text-copper-300"
                      aria-hidden="true"
                    >
                      {pad(i + 1)}
                    </span>
                    <h4 className="text-lg text-champagne">{t.title}</h4>
                    <p className="mt-1 font-mono text-sm text-copper-300">{t.time}</p>
                    <p className="mt-2 text-sm text-champagne-muted">{t.text}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <Reveal>
                <h3 className="text-display-sm text-champagne">Training Engagement Models</h3>
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

      {/* 5. FAQ */}
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
        title="Ready to Build Your Team's Competency?"
        intro="Get expert GMP, data integrity, CAPA, and compliance training customized to your organization's needs."
        primary={{ to: "/contactus", label: "Plan your training" }}
      />
    </>
  );
};

export default Training;
