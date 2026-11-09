import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Globe2 } from "lucide-react";
import { Counter, GlowCard, Reveal, Stagger, StaggerItem, TiltCard } from "./ui/motion";
import { SectionHeading } from "./ui/blocks";
import { OTHER_INSPECTIONS, TRACK_RECORD } from "../lib/inspections";

/** 100% inspection record across eight regulators. */
export function TrackRecord({
  eyebrow = "Inspection track record",
  title = "100% success. Eight regulators, zero failures.",
  intro = "USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA: every client we have prepared for these inspections has cleared, and several walked out of USFDA inspections with zero Form 483 observations.",
  link = true,
  as = "h2",
}) {
  return (
    <section className="relative py-24 md:py-32" aria-label="Regulatory inspection track record">
      <div className="absolute inset-0 -z-10 bg-obsidian-900/50" />
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading as={as} eyebrow={eyebrow} title={title} highlight={[0, 1]} intro={intro} />
          {link && (
            <Reveal delay={0.2}>
              <Link
                to="/gmp-audit-company-india"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-copper-300 hover:text-copper-200"
              >
                Why manufacturers choose NexGen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )}
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRACK_RECORD.map((t) => (
            <StaggerItem key={t.agency} className="h-full">
              <TiltCard className="flex h-full flex-col p-7" max={6}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-3xl text-champagne">{t.agency}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-champagne-faint">{t.region}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-copper-400/30 bg-copper-400/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-copper-200">
                    <BadgeCheck className="h-3.5 w-3.5" /> {t.badge}
                  </span>
                </div>
                <div className="mt-8">
                  <Counter value={t.value} className="text-gradient block font-display text-6xl leading-none" />
                  <span className="mt-2 block font-display text-xl italic text-champagne-muted">{t.label}</span>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-champagne-muted">{t.note}</p>
                <p className="mt-auto pt-6 font-mono text-[0.65rem] text-champagne-faint">{t.full}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Grid of other authorities and partner audits we prepare sites for. */
export function OtherInspections({
  title = "Ready for every authority on your export map.",
  intro = "Mock inspections and readiness programmes structured around each authority's own inspection approach, plus customer and partner audits.",
}) {
  return (
    <section className="container py-24 md:py-32" aria-labelledby="other-inspections">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="other-inspections" eyebrow="Also prepared for" title={title} highlight={[3, 4]} intro={intro} />
        </div>
        <Stagger className="grid gap-3 sm:grid-cols-2" gap={0.04}>
          {OTHER_INSPECTIONS.map((o) => (
            <StaggerItem key={o.agency}>
              <GlowCard className="flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-copper-400/25 bg-copper-400/10 text-copper-300">
                  <Globe2 className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-medium text-champagne">{o.agency}</span>
                  <span className="block text-xs text-champagne-faint">{o.region}</span>
                </span>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
