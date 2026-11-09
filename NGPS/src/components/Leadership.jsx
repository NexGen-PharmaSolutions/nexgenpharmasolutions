import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Quote } from "lucide-react";
import { SectionHeading, Tag } from "./ui/blocks";
import { Reveal, Stagger, StaggerItem, TiltCard } from "./ui/motion";
import { LEADER } from "../lib/leadership";

/** Portrait with an initials fallback while no photo has been added. */
function Portrait({ className = "", caption = true }) {
  const [failed, setFailed] = useState(false);
  const initials = LEADER.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-obsidian-800 ${className}`}>
      {failed ? (
        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-copper-700/40 via-obsidian-800 to-obsidian-900">
          <span className="font-display text-7xl text-gradient">{initials}</span>
        </div>
      ) : (
        <img
          src={LEADER.photo}
          alt={`${LEADER.name}, ${LEADER.role} of NexGen Pharma Solutions, at Castello Sforzesco, Milan, during CPHI Milan`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-display text-2xl text-champagne">{LEADER.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-copper-200">{LEADER.role}, {LEADER.company}</p>
        </div>
      )}
    </div>
  );
}

/** Full leadership section for the About page. */
export function Leadership() {
  return (
    <section id="leadership" className="relative py-16 md:py-32" aria-labelledby="leadership-heading">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="container grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Portrait className="aspect-[4/5] w-full max-w-md" />
        </Reveal>

        <div>
          <SectionHeading
            id="leadership-heading"
            eyebrow="Leadership"
            title="The person behind NexGen."
            highlight={[3]}
          />
          <Reveal delay={0.1}>
            {LEADER.bio.map((p) => (
              <p key={p.slice(0, 20)} className="mt-6 max-w-2xl text-lg leading-relaxed text-champagne-soft">
                {p}
              </p>
            ))}
          </Reveal>

          <Stagger className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-y border-white/10 py-8 sm:gap-6">
            {LEADER.stats.map(([v, l]) => (
              <StaggerItem key={l}>
                <div className="font-display text-3xl text-gradient md:text-4xl">{v}</div>
                <div className="mt-1 text-[0.68rem] uppercase leading-snug tracking-[0.12em] text-champagne-faint sm:text-xs">{l}</div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10 max-w-2xl">
            <TiltCard max={3} className="p-7 md:p-8">
              <Quote className="h-6 w-6 text-copper-400" />
              <p className="mt-4 font-display text-2xl text-champagne">{LEADER.approach.title}</p>
              <p className="mt-2 leading-relaxed text-champagne-muted">{LEADER.approach.text}</p>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex max-w-2xl flex-wrap gap-2">
            {LEADER.expertise.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/contactus#contact-form" className="btn-primary group">
              <span className="relative z-10">Talk to Ashwani</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`mailto:${LEADER.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper-300 hover:text-copper-200"
            >
              <Mail className="h-4 w-4" /> {LEADER.email.split("@")[0]}
              <wbr />@{LEADER.email.split("@")[1]}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Compact leadership card for the home page. */
export function LeadershipTeaser() {
  return (
    <section className="container py-16 md:py-24" aria-labelledby="leader-teaser">
      <Reveal>
        <TiltCard max={3} className="grid grid-cols-[minmax(0,1fr)] items-center gap-8 p-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:p-10">
          <Portrait caption={false} className="aspect-[4/5] w-full max-w-[220px]" />
          <div>
            <span className="eyebrow">Leadership</span>
            <h2 id="leader-teaser" className="mt-4 text-display-sm text-champagne">
              {LEADER.name}
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-copper-200">{LEADER.role}, {LEADER.company}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-champagne-muted">{LEADER.short}</p>
            <Link
              to="/aboutus#leadership"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-300 hover:text-copper-200"
            >
              Meet Ashwani <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  );
}
