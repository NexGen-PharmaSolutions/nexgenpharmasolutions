import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  Check,
  Compass,
  FileStack,
  FileText,
  FlaskConical,
  Globe2,
  Landmark,
  MessagesSquare,
  Minus,
  Plus,
  Radar,
  RefreshCw,
  Send,
  Layers,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand, Tag, IconTile } from "../components/ui/blocks";
import { Reveal, Stagger, StaggerItem, GlowCard, TiltCard } from "../components/ui/motion";

const MAIL = "mailto:inquiry@nexgenpharmasolutions.com";

const SUBMISSIONS = [
  {
    icon: FileStack,
    title: "Drug Master Files (DMF)",
    text: "Type II and Type III DMF preparation, submission, and maintenance for APIs, excipients, and manufacturing sites",
    tags: ["Type II", "Type III"],
    span: "md:col-span-2",
  },
  {
    icon: FlaskConical,
    title: "IND/CTA Applications",
    text: "Investigational New Drug and Clinical Trial Applications for FDA, EMA, and global agencies",
    tags: ["IND", "CTA"],
  },
  {
    icon: Layers,
    title: "ANDA & 505(b)(2) Submissions",
    text: "Abbreviated and hybrid NDA pathways for generic and modified drug products with bioequivalence strategies",
    tags: ["ANDA", "505(b)(2)"],
  },
  {
    icon: Landmark,
    title: "NDA & MAA Dossiers",
    text: "Full CTD/eCTD dossier development for New Drug Applications and Marketing Authorization Applications",
    tags: ["NDA", "MAA", "CTD/eCTD"],
  },
  {
    icon: RefreshCw,
    title: "Post-Approval Variations",
    text: "Annual reports, supplements, label updates, and lifecycle management submissions",
    tags: ["Variations", "Supplements"],
  },
];

const AGENCIES = [
  ["FDA", "United States"],
  ["EMA", "European Union"],
  ["PMDA", "Japan"],
  ["Health Canada", "Canada"],
  ["TGA", "Australia"],
  ["MHRA", "UK"],
  ["Swissmedic", "Switzerland"],
  ["Emerging Markets", "Various"],
];

const STRATEGIC = [
  "Regulatory strategy development and pathway selection",
  "Agency meeting preparation and participation (Pre-IND, Pre-NDA, Type C)",
  "Deficiency letter and Complete Response Letter (CRL) responses",
  "Scientific and regulatory due diligence for M&A transactions",
  "Orphan drug designations and pediatric investigation plans",
];

const DELIVERABLES = [
  {
    icon: FileText,
    title: "CTD/eCTD Dossiers",
    text: "Fully compliant Common Technical Document submissions in eCTD format for all modules (Quality, Non-clinical, Clinical).",
  },
  {
    icon: Radar,
    title: "Regulatory Intelligence Reports",
    text: "Comprehensive regulatory landscape analysis, competitor intelligence, and pathway feasibility assessments.",
  },
  {
    icon: Send,
    title: "Submission Management",
    text: "End-to-end submission coordination including eCTD publishing, validation, agency portal submission, and tracking.",
  },
  {
    icon: MessagesSquare,
    title: "Agency Interaction Support",
    text: "Meeting packages, briefing documents, responses to questions, and comprehensive documentation for all agency interactions.",
  },
  {
    icon: AlertTriangle,
    title: "Deficiency Resolution",
    text: "Strategic responses to Information Requests, CRLs, and deficiency letters with supporting data and scientific rationale.",
  },
  {
    icon: Globe2,
    title: "Global Lifecycle Management",
    text: "Ongoing post-approval support including annual reports, label harmonization, and variation/supplement submissions.",
  },
];

const TIMELINES = [
  { title: "DMF Preparation & Submission", time: "8-12 weeks", note: "Comprehensive DMF development, quality documentation, and agency submission" },
  { title: "ANDA/505(b)(2) Dossier", time: "12-20 weeks", note: "Full CTD compilation, bioequivalence data integration, and submission package" },
  { title: "NDA/MAA Full Submission", time: "6-12 months", note: "Complete regulatory package with all modules, agency meetings, and submission" },
  { title: "Deficiency Response", time: "4-8 weeks", note: "Analysis, data compilation, response preparation, and resubmission" },
];

const MODELS = [
  {
    title: "Project-Based Submissions",
    text: "Fixed-scope regulatory projects with defined deliverables, timelines, and submission targets.",
    points: ["Clear regulatory milestones", "Fixed budget and timeline", "Milestone-based payments"],
  },
  {
    title: "Dedicated Regulatory Support",
    text: "Ongoing regulatory affairs support with dedicated resources for multiple projects and lifecycle management.",
    points: ["Dedicated regulatory team", "Flexible scope adjustments", "Priority support access"],
  },
  {
    title: "Strategic Consulting",
    text: "High-level regulatory strategy consulting for pathway selection, due diligence, and regulatory intelligence.",
    points: ["Executive-level insights", "Portfolio strategy development", "M&A regulatory due diligence"],
  },
];

const FAQS = [
  {
    q: "What is a Drug Master File (DMF) and why is it important?",
    a: "A Drug Master File is a confidential document submitted to regulatory authorities containing detailed information about manufacturing, processing, packaging, and storage of drug products or their components. It allows manufacturers to protect proprietary information while enabling regulatory review. DMFs are critical for API manufacturers, excipient suppliers, and contract manufacturers to support product applications without disclosing confidential manufacturing details to drug applicants.",
  },
  {
    q: "How long does it typically take to prepare and submit a regulatory dossier?",
    a: "Timeline varies based on submission type and complexity. A standard DMF preparation typically takes 8-12 weeks, ANDA/505(b)(2) dossiers require 12-20 weeks, and full NDAs may take 6-12 months. Factors affecting timeline include data availability, number of sites, regulatory interactions required, and complexity of the product. We provide detailed project timelines during initial assessment and maintain regular milestone updates throughout the process.",
  },
  {
    q: "What is the difference between FDA ANDA, 505(b)(2), and NDA pathways?",
    a: "ANDA (Abbreviated New Drug Application) is for generic drugs demonstrating bioequivalence to an approved reference product, requiring no clinical efficacy studies. 505(b)(2) pathway allows partial reliance on FDA's findings for an approved drug, suitable for modified versions or new combinations. NDA (New Drug Application) is for entirely new chemical entities requiring full safety and efficacy data. Choice depends on product innovation level, available data, and regulatory strategy. We help select the optimal pathway based on your specific situation.",
  },
  {
    q: "Do you provide support for responding to regulatory deficiency letters?",
    a: "Yes, we specialize in preparing comprehensive responses to Complete Response Letters (CRLs), Information Requests, and deficiency letters from FDA, EMA, and other global agencies. Our team analyzes regulatory concerns, develops scientifically sound responses, coordinates with technical experts, and prepares all required documentation. We have extensive experience turning deficiencies into approvals through strategic, well-supported responses that address root causes of regulatory concerns.",
  },
  {
    q: "Can you help with regulatory submissions for multiple global markets simultaneously?",
    a: "Absolutely. We have expertise in harmonized regulatory strategies for simultaneous submissions to FDA (US), EMA (EU), PMDA (Japan), Health Canada, TGA (Australia), and emerging markets. Our team prepares CTD/eCTD dossiers adaptable to multiple regions, manages regional variations, coordinates with local regulatory partners, and provides centralized project management. This approach optimizes development timelines and reduces redundant documentation efforts while ensuring region-specific compliance.",
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

const Regaff = () => {
  return (
    <>
      <PageHero
        crumb="Regulatory Affairs"
        eyebrow="Global regulatory consulting"
        title="Regulatory Affairs & DMF Services"
        highlight={[3, 4]}
        intro="Expert regulatory consulting for IND, NDA, ANDA, DMF, and MAA submissions to FDA, EMA, and global regulatory agencies. Strategic guidance from product development through post-approval lifecycle management."
        scene="molecule"
        primary={{ href: MAIL, label: "Email Us" }}
        secondary={{ to: "/contactus", label: "Book a consultation" }}
      >
        <Reveal delay={0.65} className="mt-10 flex flex-wrap gap-2">
          {["IND", "NDA", "ANDA", "DMF", "MAA"].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Reveal>
      </PageHero>

      {/* Submission services */}
      <section className="container py-24 md:py-32" aria-labelledby="ra-submissions">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div id="ra-submissions">
            <SectionHeading
              eyebrow="Submission services"
              title="Comprehensive Regulatory Solutions"
              highlight={[1, 2]}
              intro="Regulatory submission services spanning the full product lifecycle, from investigational filings to post-approval variations."
            />
          </div>
          <Reveal delay={0.15} className="relative overflow-hidden rounded-3xl border border-white/[0.07]">
            <img
              src="/images/regulatory-affairs.webp"
              alt="Drug Master File binder beside a laptop open on an eCTD folder"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-950/85 via-obsidian-950/40 to-obsidian-950/10" />
          </Reveal>
        </div>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {SUBMISSIONS.map((s, i) => (
            <StaggerItem key={s.title} className={s.span || ""}>
              <TiltCard className="flex h-full flex-col p-7 md:p-8" max={5}>
                <div className="flex items-start justify-between">
                  <IconTile icon={s.icon} />
                  <span className="font-mono text-xs text-champagne-faint">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl text-champagne md:text-2xl">{s.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-champagne-muted md:text-base">{s.text}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {s.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Global expertise */}
      <section className="relative py-24 md:py-32" aria-labelledby="ra-global">
        <div className="absolute inset-0 -z-10 bg-obsidian-900/60" />
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div id="ra-global">
              <SectionHeading
                eyebrow="Global reach"
                title="Global Regulatory Expertise"
                highlight={[1]}
                intro="Harmonized strategies for submissions to major agencies and emerging markets, with region-specific compliance built in."
              />
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <Reveal>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-champagne-muted">Regulatory Agencies</h3>
              </Reveal>
              <Stagger as="ul" className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                {AGENCIES.map(([name, region]) => (
                  <StaggerItem as="li" key={name}>
                    <GlowCard className="flex h-full items-center justify-between gap-3 rounded-2xl px-5 py-4">
                      <span className="font-display text-lg text-champagne">{name}</span>
                      <span className="text-right font-mono text-[0.68rem] uppercase tracking-[0.12em] text-champagne-muted">
                        {region}
                      </span>
                    </GlowCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div>
              <Reveal>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-champagne-muted">Strategic Services</h3>
              </Reveal>
              <Stagger as="ul" className="mt-5 divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {STRATEGIC.map((s, i) => (
                  <StaggerItem as="li" key={s} className="flex items-start gap-5 py-5">
                    <span className="mt-0.5 font-mono text-xs text-copper-400">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-champagne-soft">{s}</span>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-copper-400/70" aria-hidden="true" />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="container py-24 md:py-32" aria-labelledby="ra-deliverables">
        <div id="ra-deliverables">
          <SectionHeading
            eyebrow="Deliverables"
            title="What You Get"
            highlight={[2]}
            intro="Submission-ready documentation and the support to see it through review."
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
      <section className="relative py-24 md:py-32" aria-labelledby="ra-timelines">
        <div className="absolute inset-0 -z-10 bg-grid opacity-25 mask-fade-b" />
        <div className="container">
          <div id="ra-timelines">
            <SectionHeading
              eyebrow="Timelines"
              title="Typical Project Timelines"
              highlight={[2]}
              intro="Indicative durations; detailed project timelines are provided during initial assessment."
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
      <section className="container py-24 md:py-32" aria-labelledby="ra-models">
        <div id="ra-models">
          <SectionHeading
            eyebrow="How we work"
            title="Flexible Engagement Models"
            highlight={[1]}
            align="center"
            intro="From a single submission to an ongoing regulatory partnership."
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
      <section className="container py-24 md:py-32" aria-labelledby="ra-faq">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div id="ra-faq">
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" highlight={[2]} />
            </div>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-3 text-sm text-champagne-muted">
                <Compass className="h-4 w-4 shrink-0 text-copper-400" />
                <span>
                  Unsure which pathway fits?{" "}
                  <a href={MAIL} className="text-copper-300 underline decoration-copper-400/40 underline-offset-4 hover:decoration-copper-300">
                    Email our regulatory team
                  </a>
                </span>
              </div>
            </Reveal>
          </div>
          <FaqList items={FAQS} idPrefix="ra-faq" />
        </div>
      </section>

      <CtaBand
        title="Ready to Navigate Global Regulatory Pathways?"
        intro="Get expert regulatory affairs consulting for your IND, ANDA, NDA, DMF, and MAA submissions to global agencies."
      />
    </>
  );
};

export default Regaff;
