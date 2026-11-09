import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ClipboardCheck,
  Cloud,
  Eye,
  FileCheck2,
  FileText,
  FileWarning,
  Fingerprint,
  History,
  LayoutDashboard,
  Lock,
  Mail,
  ScrollText,
  SearchCheck,
  Send,
  ShieldCheck,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { CtaBand, IconTile, PageHero, SectionHeading, Tag } from "../components/ui/blocks";
import { EASE, GlowCard, Reveal, SplitText, Stagger, StaggerItem } from "../components/ui/motion";
import { submitEnquiry } from "../lib/mailto";
import FormStatus, { Honeypot } from "../components/ui/FormStatus";
import { CONTACT_EMAIL } from "../lib/seo";

/* ------------------------------------------------------------------ */
/* Content (original copy)                                             */
/* ------------------------------------------------------------------ */

const CHALLENGES = [
  {
    problem: "Manual Chaos",
    problemText:
      "Excel-based CAPA logs, missing audit trails, version control nightmares, and hours wasted hunting for approved documents.",
    solution: "Unified Platform",
    solutionText:
      "One system for documents, deviations, CAPAs, training, suppliers, and audits—with complete traceability and compliance built in.",
  },
  {
    problem: "Audit Anxiety",
    problemText:
      "Regulators arrive and teams scramble to compile reports, recreate timelines, and prove data integrity from fragmented systems.",
    solution: "Audit-Ready Always",
    solutionText:
      "Instant compliance reports, tamper-proof audit trails, and real-time dashboards. Export everything regulators need in minutes, not days.",
  },
];

const MODULES = [
  {
    icon: FileText,
    title: "Document Control",
    text: "Centralized repository with version control, automated workflows, electronic signatures, and full audit trails for SOPs, batch records, and specifications.",
    span: "md:col-span-2",
    visual: "docs",
  },
  {
    icon: ClipboardCheck,
    title: "CAPA Management",
    text: "End-to-end corrective and preventive action tracking with root cause analysis, effectiveness verification, and automated escalation.",
  },
  {
    icon: AlertTriangle,
    title: "Deviation Management",
    text: "Log, investigate, and resolve deviations with impact assessments, CAPA linkage, and trend analysis to prevent recurrence.",
  },
  {
    icon: BookOpen,
    title: "Training Matrix",
    text: "Role-based training plans, automated reminders, quiz assessments, and complete training history for regulatory inspections.",
  },
  {
    icon: SearchCheck,
    title: "Audit Management",
    text: "Plan, execute, and track internal/external audits with checklists, finding closure, and comprehensive reporting.",
  },
  {
    icon: Users,
    title: "Supplier Qualification",
    text: "Manage supplier lifecycle from qualification to re-qualification with risk assessments, performance tracking, and audit scheduling.",
  },
  {
    icon: Workflow,
    title: "Change Control",
    text: "Manage facility, process, and system changes with impact assessments, approvals, validation requirements, and implementation tracking.",
  },
  {
    icon: FileWarning,
    title: "Non-Conformance",
    text: "Track product complaints, out-of-specification results, and NCRs with complete investigation workflow and regulatory reporting.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    text: "Real-time dashboards, executive KPIs, trend analysis, and custom reports for proactive quality management and regulatory readiness.",
    span: "md:col-span-2 lg:col-span-3",
    visual: "bars",
  },
];

const STEPS = [
  {
    title: "Quick Setup",
    text: "Cloud-based deployment with customizable workflows, user roles, and site configurations. Our team handles the setup and validation.",
  },
  {
    title: "Data Migration",
    text: "Seamlessly import existing documents, training records, and quality data. Maintain compliance history and audit trails.",
  },
  {
    title: "Team Training",
    text: "Comprehensive training sessions for all user roles with documentation, video guides, and ongoing support.",
  },
  {
    title: "Go Live",
    text: "Launch with confidence. Real-time monitoring, automated workflows, and instant compliance visibility from day one.",
  },
];

const SECURITY = [
  {
    icon: ShieldCheck,
    title: "21 CFR Part 11 Compliant",
    text: "Electronic signatures, audit trails, record retention, and system validation documented and maintained per FDA requirements.",
  },
  {
    icon: Lock,
    title: "Data Security",
    text: "AES-256 encryption, role-based access control, multi-factor authentication, and SOC 2 Type II certification.",
  },
  {
    icon: FileCheck2,
    title: "Validated System",
    text: "Complete validation documentation (IQ/OQ/PQ), change control procedures, and periodic review processes.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    text: "AWS-hosted with 99.9% uptime SLA, automated backups, disaster recovery, and geographic redundancy.",
  },
  {
    icon: Eye,
    title: "Access Control",
    text: "Granular permissions, user activity monitoring, session management, and automatic lockout after inactivity.",
  },
  {
    icon: ScrollText,
    title: "Audit Trail",
    text: "Tamper-proof logs for all system activities, user actions, data changes, and administrative operations.",
  },
];

const INTERESTS = [
  ["Waitlist", "Join Waitlist"],
  ["Demo", "Request Demo"],
  ["Early Access", "Early Access Program"],
  ["Partnership", "Partnership Opportunity"],
];

/* ------------------------------------------------------------------ */
/* Dashboard mockup (pure HTML/CSS, layered in 3D, parallax on scroll) */
/* ------------------------------------------------------------------ */

const SIDEBAR = [
  [LayoutDashboard, "Dashboard"],
  [FileText, "Documents"],
  [ClipboardCheck, "CAPA"],
  [AlertTriangle, "Deviations"],
  [BookOpen, "Training"],
  [SearchCheck, "Audits"],
  [Users, "Suppliers"],
  [Workflow, "Change Control"],
  [BarChart3, "Analytics"],
];

const TILES = [
  [FileText, "Documents"],
  [ClipboardCheck, "CAPA"],
  [BookOpen, "Training"],
  [BarChart3, "Analytics"],
];

function Skel({ w = "100%", className = "" }) {
  return <span className={`block h-2 rounded-full bg-champagne/10 ${className}`} style={{ width: w }} />;
}

function StatusChip({ tone = "copper", children }) {
  const tones = {
    copper: "border-copper-400/30 bg-copper-400/10 text-copper-200",
    sage: "border-sage/30 bg-sage/10 text-sage-glow",
    muted: "border-white/10 bg-champagne/[0.04] text-champagne-muted",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[0.6rem] tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}

function DashboardMockup() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const rotateX = useTransform(p, [0, 0.45, 1], [26, 0, -6]);
  const scale = useTransform(p, [0, 0.45], [0.88, 1]);
  const yA = useTransform(p, [0, 1], [90, -90]);
  const yB = useTransform(p, [0, 1], [140, -140]);
  const yC = useTransform(p, [0, 1], [60, -120]);

  const s = (v) => (reduced ? undefined : v);

  return (
    <figure ref={ref} className="relative mx-auto max-w-5xl" style={{ perspective: 1800 }}>
      <motion.div
        aria-hidden="true"
        className="relative"
        style={{ rotateX: s(rotateX), scale: s(scale), transformStyle: "preserve-3d", transformOrigin: "50% 0%" }}
      >
        {/* Glow under the window */}
        <div className="absolute inset-x-[10%] -bottom-10 h-40 rounded-full bg-copper-500/25 blur-[90px]" />

        {/* Main window */}
        <div className="glass relative overflow-hidden rounded-[1.75rem] shadow-deep">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-300/50 to-transparent" />
          {/* Chrome */}
          <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3 sm:px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-copper-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-champagne/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-champagne/10" />
            <span className="ml-3 hidden truncate rounded-full border border-white/[0.07] bg-obsidian-950/60 px-4 py-1 font-mono text-[0.65rem] text-champagne-faint sm:block">
              NexGen Management System
            </span>
            <span className="ml-auto">
              <StatusChip tone="sage">Coming soon</StatusChip>
            </span>
          </div>

          <div className="grid sm:grid-cols-[170px_1fr] md:grid-cols-[200px_1fr]">
            {/* Sidebar */}
            <div className="hidden border-r border-white/[0.07] p-3 sm:block">
              <ul className="space-y-1">
                {SIDEBAR.map(([Icon, label], i) => (
                  <li
                    key={label}
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-[0.72rem] ${
                      i === 0
                        ? "bg-copper-400/10 text-copper-200 shadow-[inset_0_0_0_1px_rgba(246,160,107,.2)]"
                        : "text-champagne-faint"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
                    <span className="truncate">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className="min-w-0 space-y-4 p-4 sm:p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-display text-base text-champagne md:text-lg">Quality overview</p>
                  <Skel w="7rem" className="mt-2" />
                </div>
                <span className="hidden h-8 w-24 rounded-full bg-copper-sheen opacity-80 sm:block" />
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {TILES.map(([Icon, label]) => (
                  <div key={label} className="rounded-2xl border border-white/[0.07] bg-obsidian-950/50 p-3">
                    <div className="flex items-center gap-2 text-copper-300">
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                      <span className="text-[0.68rem] font-semibold text-champagne-soft">{label}</span>
                    </div>
                    <Skel w="70%" className="mt-3" />
                    <Skel w="45%" className="mt-2 bg-copper-400/25" />
                  </div>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-[1.4fr_1fr]">
                {/* Trend chart */}
                <div className="rounded-2xl border border-white/[0.07] bg-obsidian-950/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.68rem] font-semibold text-champagne-soft">Trend analysis</span>
                    <Skel w="3rem" />
                  </div>
                  <svg viewBox="0 0 400 120" className="mt-3 h-24 w-full md:h-28" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="ngms-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F6A06B" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#F6A06B" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[30, 60, 90].map((y) => (
                      <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(244,234,219,.06)" />
                    ))}
                    <path
                      d="M0,92 C40,88 60,70 100,74 S160,52 200,58 S260,30 300,36 S360,18 400,14 L400,120 L0,120 Z"
                      fill="url(#ngms-area)"
                    />
                    <motion.path
                      d="M0,92 C40,88 60,70 100,74 S160,52 200,58 S260,30 300,36 S360,18 400,14"
                      fill="none"
                      stroke="#F6A06B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: reduced ? 1 : 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.2, ease: EASE, delay: 0.3 }}
                    />
                  </svg>
                </div>

                {/* Document queue */}
                <div className="rounded-2xl border border-white/[0.07] bg-obsidian-950/50 p-4">
                  <span className="text-[0.68rem] font-semibold text-champagne-soft">Document workflow</span>
                  <ul className="mt-3 space-y-3">
                    {[
                      ["sage", "Effective"],
                      ["copper", "In review"],
                      ["muted", "Draft"],
                    ].map(([tone, label], i) => (
                      <li key={label} className="flex items-center gap-3">
                        <FileText className="h-3.5 w-3.5 shrink-0 text-champagne-faint" strokeWidth={1.7} />
                        <span className="min-w-0 flex-1">
                          <Skel w={`${85 - i * 15}%`} />
                        </span>
                        <StatusChip tone={tone}>{label}</StatusChip>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating panel: audit trail */}
        <motion.div
          className="glass absolute -left-6 top-[58%] hidden w-56 rounded-2xl p-4 shadow-glow lg:block xl:-left-16"
          style={{ y: s(yA), z: 90 }}
        >
          <div className="flex items-center gap-2 text-copper-300">
            <History className="h-4 w-4" strokeWidth={1.7} />
            <span className="text-xs font-semibold text-champagne">Audit trail</span>
          </div>
          <ul className="mt-3 space-y-2.5">
            {["Record updated", "Signature applied", "Review completed"].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper-400" />
                <span className="text-[0.68rem] text-champagne-muted">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Floating panel: e-signature */}
        <motion.div
          className="glass absolute -right-2 -top-10 hidden w-56 rounded-2xl p-4 shadow-glow md:block xl:-right-8"
          style={{ y: s(yB), z: 140 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-copper-300">
              <Fingerprint className="h-4 w-4" strokeWidth={1.7} />
              <span className="text-xs font-semibold text-champagne">Electronic signature</span>
            </div>
          </div>
          <svg viewBox="0 0 200 40" className="mt-3 h-8 w-full" fill="none">
            <path
              d="M4,30 C20,6 30,36 46,18 S70,8 80,26 S104,34 118,14 S150,30 164,20 S186,12 196,16"
              stroke="#F8D2B2"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <div className="mt-2 flex items-center justify-between border-t border-white/[0.07] pt-3">
            <span className="font-mono text-[0.6rem] tracking-wide text-champagne-faint">21 CFR Part 11</span>
            <StatusChip tone="sage">
              <Check className="mr-1 h-3 w-3" /> Signed
            </StatusChip>
          </div>
        </motion.div>

        {/* Floating panel: CAPA effectiveness */}
        <motion.div
          className="glass absolute -bottom-10 right-[12%] hidden w-56 items-center gap-4 rounded-2xl p-4 shadow-glow md:flex"
          style={{ y: s(yC), z: 110 }}
        >
          <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90">
            <circle cx="22" cy="22" r="18" stroke="rgba(244,234,219,.1)" strokeWidth="4" fill="none" />
            <motion.circle
              cx="22"
              cy="22"
              r="18"
              stroke="#F6A06B"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: reduced ? 0.75 : 0 }}
              whileInView={{ pathLength: 0.75 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: EASE, delay: 0.5 }}
            />
          </svg>
          <div>
            <p className="text-xs font-semibold text-champagne">CAPA</p>
            <p className="mt-0.5 text-[0.68rem] text-champagne-muted">Effectiveness verification</p>
          </div>
        </motion.div>
      </motion.div>

      <figcaption className="mt-20 text-center font-mono text-[0.7rem] tracking-wide text-champagne-faint md:mt-24">
        Illustrative interface preview. NexGen Management System is coming soon.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Bento visuals                                                       */
/* ------------------------------------------------------------------ */

function DocsVisual() {
  return (
    <div aria-hidden="true" className="relative h-36 w-full max-w-[15rem] shrink-0 sm:h-40">
      {[
        ["Draft", "muted", "translate-x-6 translate-y-0 rotate-[5deg] opacity-50"],
        ["In review", "copper", "translate-x-3 translate-y-3 rotate-[2deg] opacity-75"],
        ["Effective", "sage", "translate-x-0 translate-y-6"],
      ].map(([label, tone, pos]) => (
        <div
          key={label}
          className={`absolute inset-x-0 top-0 rounded-2xl border border-white/10 bg-obsidian-800 p-4 shadow-deep ${pos}`}
        >
          <div className="flex items-center justify-between">
            <FileText className="h-4 w-4 text-copper-300" strokeWidth={1.7} />
            <StatusChip tone={tone}>{label}</StatusChip>
          </div>
          <Skel w="80%" className="mt-4" />
          <Skel w="60%" className="mt-2" />
          <Skel w="70%" className="mt-2" />
        </div>
      ))}
    </div>
  );
}

const BARS = [38, 52, 44, 66, 58, 74, 62, 82, 70, 88, 78, 94];

function BarsVisual() {
  return (
    <div aria-hidden="true" className="flex h-32 w-full items-end gap-1.5 sm:gap-2 md:h-36">
      {BARS.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-copper-700/40 via-copper-500/70 to-copper-300"
          style={{ height: `${h}%` }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: EASE, delay: i * 0.05 }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Waitlist form                                                       */
/* ------------------------------------------------------------------ */

const EMPTY = { name: "", company: "", email: "", phone: "", interest: "", notes: "" };

function WaitlistForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [hp, setHp] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const result = await submitEnquiry({
        form: "waitlist",
        subject: `NexGen Management System - ${form.interest}`,
        replyTo: form.email,
        website: hp,
        fields: {
          Name: form.name,
          Company: form.company,
          Email: form.email,
          Phone: form.phone,
          "Interested in": form.interest,
          Notes: form.notes,
        },
      });
      setStatus(result);
      if (result === "sent") setForm(EMPTY);
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  const Req = () => (
    <span className="text-copper-300" aria-hidden="true">
      {" "}
      *
    </span>
  );

  return (
    <form onSubmit={onSubmit} className="glass relative rounded-[2rem] p-6 shadow-deep sm:p-8 md:p-10">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-copper-300/50 to-transparent" />
      <Honeypot value={hp} onChange={(e) => setHp(e.target.value)} />
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="wl-name" className="field-label">
            Full Name
            <Req />
          </label>
          <input id="wl-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={onChange} className="field" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="wl-company" className="field-label">
            Company Name
            <Req />
          </label>
          <input id="wl-company" name="company" type="text" autoComplete="organization" required value={form.company} onChange={onChange} className="field" placeholder="Your Company" />
        </div>
        <div>
          <label htmlFor="wl-email" className="field-label">
            Email Address
            <Req />
          </label>
          <input id="wl-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={onChange} className="field" placeholder="john@company.com" />
        </div>
        <div>
          <label htmlFor="wl-phone" className="field-label">
            Phone Number
            <Req />
          </label>
          <input id="wl-phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={onChange} className="field" placeholder="+91 98765 43210" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="wl-interest" className="field-label">
            I'm Interested In
            <Req />
          </label>
          <select id="wl-interest" name="interest" required value={form.interest} onChange={onChange} className="field appearance-none">
            <option value="">Select an option</option>
            {INTERESTS.map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="wl-notes" className="field-label">
            Additional Notes (Optional)
          </label>
          <textarea
            id="wl-notes"
            name="notes"
            rows={4}
            value={form.notes}
            onChange={onChange}
            className="field resize-y"
            placeholder="Tell us about your compliance challenges or specific requirements..."
          />
        </div>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary group mt-8 w-full disabled:opacity-60">
        <span className="relative z-10">{status === "sending" ? "Sending…" : "Join the waitlist"}</span>
        <Send className="relative z-10 h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
      </button>
      <FormStatus
        status={status}
        error={error}
        className="mt-6"
        sentText="You're on the list. We'll be in touch with early access and demo details for NexGen Management System."
      />

      <p className="mt-6 text-center text-xs text-champagne-muted">
        By submitting this form, you agree to our{" "}
        <Link to="/privacy-policy" className="text-copper-300 underline decoration-copper-400/40 underline-offset-4 hover:decoration-copper-300">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/terms-conditions" className="text-copper-300 underline decoration-copper-400/40 underline-offset-4 hover:decoration-copper-300">
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function NexGenManagementSystem() {
  return (
    <>
      <PageHero
        crumb="NexGen Management System"
        eyebrow="NexGen product"
        title="NexGen Management System"
        highlight={[2]}
        intro="The all-in-one compliance platform that transforms how pharmaceutical companies manage quality, documentation, and regulatory readiness."
        scene="lattice"
        primary={{ href: "#waitlist", label: "Join Waitlist" }}
        secondary={{ href: "#waitlist", label: "Request Demo" }}
      >
        <Reveal delay={0.65} className="mt-10 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-sage/30 bg-sage/10 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-sage-glow">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-sage" />
              <span className="relative h-2 w-2 rounded-full bg-sage" />
            </span>
            Coming soon
          </span>
          <Tag>21 CFR Part 11</Tag>
          <Tag>Cloud-based</Tag>
        </Reveal>
      </PageHero>

      {/* ---------------- Product preview ---------------- */}
      <section className="relative overflow-hidden pb-24 pt-8 md:pb-36">
        <div className="absolute left-1/2 top-1/3 -z-10 h-[600px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full bg-copper-600/10 blur-[140px]" />
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <Reveal>
              <span className="eyebrow">Product preview</span>
            </Reveal>
            <SplitText
              text="Documents, CAPA, training and analytics in one view"
              highlight={[6, 7]}
              className="mt-5 text-display-md text-champagne"
            />
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* ---------------- Challenges ---------------- */}
      <section className="container py-16 md:py-32">
        <SectionHeading
          eyebrow="Why it exists"
          title="Built to Solve Real Pharma Challenges"
          highlight={[5]}
          intro="From scattered spreadsheets to regulatory nightmares—we've seen it all. NexGen Management System eliminates the chaos."
        />
        <div className="mt-16 space-y-6 md:mt-20">
          {CHALLENGES.map((c, i) => (
            <Reveal key={c.problem} delay={i * 0.1}>
              <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
                <div className="rounded-3xl border border-white/[0.07] bg-obsidian-900/50 p-7 md:p-9">
                  <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-champagne-faint">
                    <X className="h-3.5 w-3.5" aria-hidden="true" /> The Problem
                  </p>
                  <h3 className="mt-4 text-2xl text-champagne-soft">{c.problem}</h3>
                  <p className="mt-3 leading-relaxed text-champagne-muted">{c.problemText}</p>
                </div>
                <div className="flex items-center justify-center" aria-hidden="true">
                  <span className="grid h-12 w-12 rotate-90 place-items-center rounded-full border border-copper-400/30 bg-obsidian-900 text-copper-300 shadow-glow md:rotate-0">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
                <GlowCard className="border-copper-400/25 bg-gradient-to-br from-copper-400/[0.08] to-obsidian-900/80 p-7 md:p-9">
                  <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-copper-300">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" /> The Solution
                  </p>
                  <h3 className="mt-4 text-2xl text-champagne">{c.solution}</h3>
                  <p className="mt-3 leading-relaxed text-champagne-soft">{c.solutionText}</p>
                </GlowCard>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Core modules (bento) ---------------- */}
      <section className="relative py-16 md:py-32">
        <div className="absolute inset-0 -z-10 bg-grid opacity-20 mask-fade-b" />
        <div className="container">
          <SectionHeading
            eyebrow="Core modules"
            title="Comprehensive Core Modules"
            highlight={[2]}
            intro="Everything you need to run a compliant pharmaceutical operation"
          />
          <Stagger className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3" gap={0.06}>
            {MODULES.map((m) => (
              <StaggerItem key={m.title} className={m.span ?? ""}>
                <GlowCard className="group flex h-full flex-col gap-8 p-7 md:p-8">
                  <div
                    className={
                      m.visual === "docs"
                        ? "flex h-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
                        : m.visual === "bars"
                          ? "grid h-full items-end gap-8 lg:grid-cols-[1fr_1.3fr]"
                          : "flex h-full flex-col"
                    }
                  >
                    <div className="max-w-md">
                      <IconTile icon={m.icon} />
                      <h3 className="mt-6 text-2xl text-champagne">{m.title}</h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-champagne-muted">{m.text}</p>
                    </div>
                    {m.visual === "docs" && <DocsVisual />}
                    {m.visual === "bars" && <BarsVisual />}
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="container py-16 md:py-32">
        <SectionHeading
          eyebrow="Implementation"
          title="How It Works"
          highlight={[2]}
          intro="From setup to compliance—streamlined for pharma"
          align="center"
        />
        <div className="relative mt-16 md:mt-24">
          <motion.div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px origin-left bg-gradient-to-r from-copper-700 via-copper-400 to-copper-200 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: EASE }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-7 top-7 w-px bg-gradient-to-b from-copper-400/60 via-copper-400/20 to-transparent lg:hidden"
          />
          <Stagger as="ol" className="grid gap-10 lg:grid-cols-4 lg:gap-8" gap={0.15}>
            {STEPS.map((st, i) => (
              <StaggerItem as="li" key={st.title} className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-copper-400/40 bg-obsidian-900 font-mono text-sm text-copper-200 shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-2 lg:pt-4">
                  <h3 className="text-2xl text-champagne">{st.title}</h3>
                  <p className="mt-3 leading-relaxed text-champagne-muted">{st.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- Security & compliance ---------------- */}
      <section className="relative py-16 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Security & compliance"
              title="Enterprise-Grade Security & Compliance"
              highlight={[3]}
              intro="Built with pharma regulations at the core"
            />
            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-2">
              {["21 CFR Part 11", "IQ/OQ/PQ", "AES-256", "SOC 2 Type II"].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Reveal>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2" gap={0.07}>
            {SECURITY.map((sec) => (
              <StaggerItem key={sec.title}>
                <GlowCard className="h-full p-7">
                  <IconTile icon={sec.icon} />
                  <h3 className="mt-6 text-xl text-champagne">{sec.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-champagne-muted">{sec.text}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- Waitlist ---------------- */}
      <section id="waitlist" className="relative isolate scroll-mt-28 overflow-hidden py-16 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-obsidian-900/70 to-transparent" />
        <div className="absolute -left-40 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-copper-600/15 blur-[130px]" />
        <div className="container grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow">Early access</span>
            </Reveal>
            <SplitText
              text="Be Among the First"
              highlight={[3]}
              className="mt-5 text-display-md text-champagne"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-champagne-muted">
                Join the waitlist or request an early demo of NexGen Management System
              </p>
            </Reveal>
            <Stagger className="mt-10 space-y-3" delay={0.2}>
              {INTERESTS.map(([v, l]) => (
                <StaggerItem key={v} className="flex items-center gap-3 text-champagne-soft">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-copper-400/30 bg-copper-400/10 text-copper-300">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {l}
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.3}>
              <p className="mt-10 flex items-start gap-3 text-sm leading-relaxed text-champagne-faint">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper-300" aria-hidden="true" />
                <span>
                  Prefer to write directly? Email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-copper-300 underline decoration-copper-400/40 underline-offset-4">
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <WaitlistForm />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to Transform Your Quality Operations?"
        intro="Don't wait for regulators to find gaps. Stay ahead with NexGen Management System."
        primary={{ href: "#waitlist", label: "Get Early Access" }}
        secondary={{ to: "/contactus", label: "Contact Our Team" }}
      />
    </>
  );
}
