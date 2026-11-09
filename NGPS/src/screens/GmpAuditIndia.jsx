import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, Database, FileStack, Gauge, MapPin, ShieldCheck, Users, Wrench } from "lucide-react";
import { PageHero, SectionHeading, CtaBand, IconTile, Tag } from "../components/ui/blocks";
import { Reveal, Stagger, StaggerItem, GlowCard, TiltCard } from "../components/ui/motion";
import FaqList from "../components/ui/FaqList";
import { TrackRecord, OtherInspections } from "../components/TrackRecord";
import { SERVICES } from "../lib/nav";
import { INDIA_FAQ, INDIA_HUBS } from "../lib/inspections";

const CRITERIA = [
  {
    icon: BadgeCheck,
    title: "A record you can verify",
    text: "100% success across the USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA inspections we have prepared clients for, including USFDA inspections closed with zero Form 483 observations.",
    span: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Former regulators lead the audit",
    text: "Former regulatory inspectors and senior industry QA heads run every mock inspection, not junior checklist auditors.",
  },
  {
    icon: Wrench,
    title: "Remediation, not just a report",
    text: "We stay to close the gaps: CAPA, SOP rewrites, investigations and re-inspection readiness.",
  },
  {
    icon: Database,
    title: "CSV and data integrity in-house",
    text: "GAMP 5, 21 CFR Part 11 and Annex 11 specialists audit your computerised systems alongside the plant, so data integrity is never a blind spot.",
    span: "md:col-span-2",
  },
  {
    icon: FileStack,
    title: "Dossier-to-shop-floor view",
    text: "Our regulatory affairs team writes DMFs and CEPs, so audits check what you filed against what you do.",
  },
  {
    icon: Gauge,
    title: "Fast mobilisation",
    text: "Audits scheduled within 2–3 weeks, with express slots for upcoming inspections. Reports in 7 business days.",
  },
];

export default function GmpAuditIndia() {
  return (
    <>
      <PageHero
        crumb="GMP Audit Company in India"
        eyebrow="GMP audit & consulting company · India"
        title="India's GMP audit partner with a 100% inspection success record."
        highlight={[6, 7, 8]}
        intro="NexGen Pharma Solutions Pvt. Ltd. prepares API, sterile and finished-dose manufacturers in India for USFDA, EDQM, KFDA, MHRA, WHO-GMP, EU GMP, PMDA, ANVISA and other major inspections, and every client we have prepared has cleared."
        scene="gyro"
        primary={{ to: "/contactus", label: "Book a mock inspection" }}
        secondary={{ to: "/gmpaudits", label: "See audit services" }}
        stats={[
          ["100%", "Inspection success"],
          ["8", "Regulators, all cleared"],
          ["0", "483s on USFDA wins"],
        ]}
      />

      <TrackRecord
        as="h2"
        eyebrow="Proof, not promises"
        title="Zero-483 USFDA outcomes. 100% across eight regulators."
        link={false}
      />

      {/* What makes a GMP audit company the best */}
      <section className="container py-24 md:py-32" aria-labelledby="india-criteria">
        <SectionHeading
          id="india-criteria"
          eyebrow="Choosing a GMP auditor"
          title="What makes a GMP audit company the best fit for your plant?"
          highlight={[5]}
          intro="Every consultancy in India says it is the best. These are the six things that actually decide how your inspection goes, and how NexGen measures up."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {CRITERIA.map((c) => (
            <StaggerItem key={c.title} className={`h-full ${c.span ?? ""}`}>
              <TiltCard className="h-full p-8" max={5}>
                <IconTile icon={c.icon} />
                <h3 className="mt-6 font-sans text-xl font-semibold text-champagne">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-champagne-muted">{c.text}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Services, internal links */}
      <section className="relative py-24 md:py-32" aria-labelledby="india-services">
        <div className="absolute inset-0 -z-10 bg-obsidian-900/50" />
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container">
          <SectionHeading
            id="india-services"
            eyebrow="One partner, end to end"
            title="GMP audit, consulting and validation services in India."
            highlight={[1, 2]}
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((s) => (
              <StaggerItem key={s.to} className="h-full">
                <Link to={s.to} className="group block h-full">
                  <GlowCard className="flex h-full flex-col rounded-3xl p-6">
                    <IconTile icon={s.icon} />
                    <h3 className="mt-6 font-sans text-lg font-semibold text-champagne">{s.label}</h3>
                    <p className="mt-2 text-sm text-champagne-muted">{s.blurb}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-copper-300">
                      Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </GlowCard>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* India hubs */}
      <section className="container py-24 md:py-32" aria-labelledby="india-hubs">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="india-hubs"
            eyebrow="On site across India"
            title="From Vadodara to every pharma cluster in the country."
            highlight={[4, 5]}
            intro="Headquartered in Vadodara, Gujarat, our auditors travel to plants across India and to clients in 15+ countries."
          />
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {INDIA_HUBS.map(([state, cities]) => (
              <StaggerItem key={state}>
                <GlowCard className="flex items-start gap-4 rounded-2xl p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper-400" />
                  <span>
                    <span className="block font-medium text-champagne">{state}</span>
                    <span className="block text-sm text-champagne-faint">{cities}</span>
                  </span>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-2">
          {["API", "Sterile / injectables", "Oral solids", "Biologics", "KSM & intermediates", "Excipients", "Packaging", "Contract labs"].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Reveal>
      </section>

      <OtherInspections />

      {/* FAQ */}
      <section className="container py-24 md:py-32" aria-labelledby="india-faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="india-faq" eyebrow="FAQ" title="Choosing a GMP audit company in India." highlight={[4, 5]} />
            <Reveal delay={0.2}>
              <p className="mt-6 flex items-center gap-2 text-sm text-champagne-muted">
                <ShieldCheck className="h-4 w-4 text-copper-400" /> NDA available before you share any detail.
              </p>
            </Reveal>
          </div>
          <FaqList items={INDIA_FAQ.map(([q, a]) => ({ q, a }))} idPrefix="india-faq" />
        </div>
      </section>

      <CtaBand
        title="Make your next inspection another 100% outcome."
        intro="Tell us which authority is coming and when. A senior consultant replies within 24 hours with a mock inspection plan."
      />
    </>
  );
}
