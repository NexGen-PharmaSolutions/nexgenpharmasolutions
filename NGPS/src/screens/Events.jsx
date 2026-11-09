import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Navigation,
  Radio,
  Users,
  Zap,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand, CtaLink, Tag, IconTile } from "../components/ui/blocks";
import { Reveal, Stagger, StaggerItem, TiltCard, GlowCard, Magnetic } from "../components/ui/motion";
import { EVENTS, eventStatus, getEvent, boothLabel } from "../lib/events";
import { CONTACT_EMAIL } from "../lib/seo";

const INDIA_ID = "cphi-india-2026";
const MILAN_ID = "cphi-milan-2026";
const BOOK_URL = `/contactus?event=${INDIA_ID}`;
const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Yashobhoomi+IICC+Dwarka+New+Delhi";

// Photos taken at these specific shows. Other shows have no photo yet, so we
// don't reuse one show's picture to illustrate another.
const PHOTOS = {
  "cphi-worldwide-2025": "/CPhI germany.jpg",
  "cphi-india-2024": "/CPhI india .jpg",
};

// Longer descriptions carried over from the original timeline.
const DESCRIPTIONS = {
  "cphi-worldwide-2025":
    "Active participation in the world's largest pharmaceutical networking event, engaging with global manufacturers, regulatory bodies, and technology providers.",
  "cphi-india-2024":
    "Showcased regulatory and quality consulting expertise to Indian and international pharmaceutical manufacturers at Asia's premier pharma event.",
};

const STATUS_LABEL = { upcoming: "Up next", live: "Live now", past: "Past show" };

/** Re-renders every `ms` with the current time (client-side only). */
function useNow(ms = 1000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

function startOf(ev) {
  return new Date(`${ev.start}T00:00:00+05:30`);
}

function Countdown({ ev }) {
  const now = useNow(1000);
  const status = eventStatus(ev, now);

  if (status === "live") {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-sage/40 bg-sage/10 px-6 py-5" role="status">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sage" />
        </span>
        <div>
          <p className="font-display text-2xl text-champagne">Live now</p>
          <p className="text-sm text-champagne-soft">
            {ev.name} is on at {ev.venue}. Book a slot and we will meet you there.
          </p>
        </div>
      </div>
    );
  }

  if (status === "past") {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-copper-400/30 bg-copper-400/[0.06] px-6 py-5" role="status">
        <CheckCircle2 className="h-6 w-6 shrink-0 text-copper-300" />
        <div>
          <p className="font-display text-2xl text-champagne">Thank you for visiting</p>
          <p className="text-sm text-champagne-soft">
            Met us at {ev.name}? Get in touch to pick up the conversation.
          </p>
        </div>
      </div>
    );
  }

  const diff = Math.max(0, startOf(ev) - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const units = [
    [days, days === 1 ? "Day" : "Days"],
    [hours, hours === 1 ? "Hour" : "Hours"],
    [mins, mins === 1 ? "Minute" : "Minutes"],
  ];

  return (
    <div>
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-champagne-faint">Doors open in</p>
      <p className="sr-only">
        {days} days, {hours} hours and {mins} minutes until {ev.name} opens.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3" aria-hidden="true">
        {units.map(([v, l]) => (
          <div key={l} className="rounded-2xl border border-white/10 bg-obsidian-950/60 px-3 py-4 text-center sm:px-5 sm:py-5">
            <div className="font-display text-4xl tabular-nums text-champagne sm:text-5xl">
              {String(v).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-champagne-faint sm:text-xs">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndiaFeature() {
  const ev = getEvent(INDIA_ID);
  if (!ev) return null;
  const facts = [
    [CalendarDays, "Dates", ev.dates],
    [MapPin, "Venue", ev.venue],
    [Navigation, "City", ev.city],
    [MapPin, "Our stand", boothLabel(ev) ?? "Shared with every booked meeting"],
    [Briefcase, "Talk to us about", "GMP audits, CSV, data integrity, DMF/CEP strategy"],
  ];

  return (
    <section id={INDIA_ID} className="relative scroll-mt-28 py-16 md:py-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[min(1100px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper-600/10 blur-[140px]" />
      <div className="container">
        <Reveal>
          <TiltCard max={3} className="border-copper-400/25 p-0">
            <div className="absolute inset-0 -z-10 bg-grid opacity-25" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-300/70 to-transparent" />
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-7 sm:p-10 md:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">Now heading to</span>
                  <Tag>{ev.dates}</Tag>
                </div>
                <h2 className="mt-6 text-display-lg text-champagne">
                  CPHI India <span className="text-gradient italic">2026</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-champagne-soft">{ev.blurb}</p>

                <div className="mt-10 max-w-lg">
                  <Countdown ev={ev} />
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <CtaLink to={BOOK_URL}>Book a meeting at CPHI India</CtaLink>
                  <Magnetic strength={0.2}>
                    <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
                      <MapPin className="h-4 w-4" />
                      Get directions
                      <span className="sr-only">(opens Google Maps in a new tab)</span>
                    </a>
                  </Magnetic>
                </div>
              </div>

              <dl className="grid content-center gap-px border-t border-white/[0.07] bg-white/[0.05] lg:border-l lg:border-t-0">
                {facts.map(([Icon, k, v]) => (
                  <div key={k} className="flex gap-4 bg-obsidian-900/90 p-7 sm:p-8">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-copper-300" strokeWidth={1.6} />
                    <div>
                      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-champagne-faint">{k}</dt>
                      <dd className="mt-1.5 text-base font-medium text-champagne">{v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

function MilanRecap() {
  const ev = getEvent(MILAN_ID);
  if (!ev) return null;
  const facts = [
    ["Dates", ev.dates],
    ["Venue", `${ev.venue}, ${ev.city}`],
    ["Zone", "Pharma & Tech"],
    ["What we brought", "GxP validation, data integrity, regulatory strategy"],
  ];

  return (
    <section id={MILAN_ID} className="relative scroll-mt-28 py-16 md:py-32">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="container grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">CPHI Milan 2026 — we were there</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-display-md text-champagne">
              Your model works. <span className="text-gradient italic">Now prove it to an inspector.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-champagne-soft">{ev.blurb}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl leading-relaxed text-champagne-muted">
              CPHI&rsquo;s newest zone puts pharmaceutical manufacturers alongside the MES, ERP and digital systems
              that run their plants. We went for a specific reason: every one of those systems has to survive
              Annex 11, 21 CFR Part 11 and a quality unit before it ships value. That is the work we do.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
            <CtaLink to="/computersystemvalidations">See the GxP readiness map</CtaLink>
            <CtaLink to="/contactus" variant="ghost">
              Met us in Milan? Follow up
            </CtaLink>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pt-16">
          <div className="glass relative overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-5">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-champagne-muted">Show recap</span>
              <Tag>Exhibited</Tag>
            </div>
            <dl className="divide-y divide-white/[0.07]">
              {facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-7 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-champagne-faint sm:pt-1">{k}</dt>
                  <dd className="text-base font-medium text-champagne">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MeetingFormats() {
  const formats = [
    [
      "01",
      "Twenty minutes at the stand",
      "Bring your architecture diagram. Leave with the specific clauses that apply to it and an honest read on which gaps will hold up a sale.",
    ],
    [
      "02",
      "Joint readiness workshop",
      "Half a day after the show, on site, with your engineering team and your quality unit in the same room. The fastest way to unblock a stalled pilot.",
    ],
    [
      "03",
      "Named validation partner",
      "We sit behind your sales cycle. Your buyer's quality unit receives a documented qualification path from an independent GMP consultancy instead of a risk they have to price in.",
    ],
  ];
  return (
    <section className="relative py-16 md:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 mask-fade-b" />
      <div className="container">
        <SectionHeading
          eyebrow="Meeting formats"
          title="Three ways to use twenty minutes with us"
          highlight={[4, 5]}
          intro="No slide deck. Bring the problem that is currently blocking a deployment."
        />
        <Stagger as="ol" className="mt-16 grid gap-5 md:grid-cols-3">
          {formats.map(([n, title, body], i) => (
            <StaggerItem as="li" key={n} className={i === 1 ? "md:mt-10" : ""}>
              <GlowCard className="h-full p-8 md:p-10">
                <span className="font-display text-6xl text-copper-400/30">{n}</span>
                <h3 className="mt-6 text-2xl leading-snug text-champagne">{title}</h3>
                <p className="mt-4 leading-relaxed text-champagne-muted">{body}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-20 flex flex-col gap-5 sm:flex-row sm:items-center">
          <CtaLink to={BOOK_URL}>Request a meeting at CPHI India</CtaLink>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="break-all text-[0.975rem] font-medium text-copper-300 underline decoration-copper-400/40 underline-offset-4 transition-colors hover:text-copper-200"
          >
            {CONTACT_EMAIL}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline() {
  const now = useNow(60000);
  const sorted = [...EVENTS].sort((a, b) => b.start.localeCompare(a.start));

  return (
    <section className="relative py-16 md:py-32">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="container">
        <SectionHeading
          eyebrow="Track record"
          title="Our Industry Journey"
          highlight={[2]}
          intro="We exhibit where pharmaceutical manufacturing is actually bought, sold and regulated."
        />

        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-copper-400/70 via-copper-400/20 to-transparent md:left-[15px]" aria-hidden="true" />
          <ol className="space-y-10">
          {sorted.map((ev) => {
            const status = eventStatus(ev, now);
            const photo = PHOTOS[ev.id];
            const year = ev.start.slice(0, 4);
            return (
              <li key={ev.id} className="relative pl-10 md:pl-16">
                <span
                  className={`absolute left-0 top-8 grid h-6 w-6 place-items-center rounded-full border md:h-8 md:w-8 ${
                    status === "past" ? "border-copper-400/40 bg-obsidian-900" : "border-copper-300 bg-copper-500/30 shadow-glow"
                  }`}
                  aria-hidden="true"
                >
                  <span className={`h-2 w-2 rounded-full ${status === "past" ? "bg-copper-400/60" : "bg-copper-200"}`} />
                </span>
                <Reveal>
                  <GlowCard className={`grid overflow-hidden ${photo ? "md:grid-cols-[1fr_0.9fr]" : ""}`}>
                    <div className="p-7 sm:p-9">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-3xl text-copper-300">{year}</span>
                        <Tag>{STATUS_LABEL[status]}</Tag>
                      </div>
                      <h3 className="mt-4 text-2xl text-champagne md:text-3xl">{ev.name}</h3>
                      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-champagne-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-copper-400" /> {ev.city}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-4 w-4 text-copper-400" /> {ev.dates}
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-champagne-faint">{ev.venue}</p>
                      <p className="mt-5 leading-relaxed text-champagne-soft">{DESCRIPTIONS[ev.id] ?? ev.blurb}</p>
                      {ev.id === INDIA_ID && status !== "past" && (
                        <Link
                          to={BOOK_URL}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-300 transition-colors hover:text-copper-200"
                        >
                          Book a meeting at CPHI India <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                      {ev.id === MILAN_ID && (
                        <a
                          href={`#${MILAN_ID}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-300 transition-colors hover:text-copper-200"
                        >
                          Read the Milan recap <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    {photo && (
                      <div className="relative min-h-[220px] md:min-h-full">
                        <img
                          src={encodeURI(photo)}
                          alt={`NexGen Pharma Solutions at ${ev.name}, ${ev.city}`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-obsidian-950/20 to-transparent md:bg-gradient-to-r md:from-obsidian-900/80 md:via-obsidian-900/10" />
                      </div>
                    )}
                  </GlowCard>
                </Reveal>
              </li>
            );
          })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function WhyEngagement() {
  const items = [
    [Zap, "Regulatory Foresight", "Early insights into upcoming regulatory changes and inspection trends"],
    [Users, "Global Best Practices", "Learning from international quality leaders and technology innovators"],
    [Briefcase, "Strategic Partnerships", "Building relationships with technology and solution providers for clients"],
    [CheckCircle2, "Continuous Learning", "Staying updated on data integrity, CSV, and validation methodologies"],
  ];
  return (
    <section className="relative py-16 md:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="Why we show up"
          title="Why Industry Engagement Matters"
          highlight={[2]}
        />
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {items.map(([icon, title, body], i) => (
            <StaggerItem key={title} className={i % 2 === 1 ? "sm:mt-8" : ""}>
              <GlowCard className="h-full p-7 md:p-8">
                <IconTile icon={icon} />
                <h3 className="mt-6 text-xl text-champagne">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-champagne-muted">{body}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const Events = () => {
  const india = getEvent(INDIA_ID);
  const indiaStatus = india ? eventStatus(india) : "past";

  return (
    <>
      <PageHero
        crumb="Events"
        eyebrow={indiaStatus === "past" ? "Events & industry engagement" : `Next: CPHI India 2026 · ${india.dates}`}
        title="Events & Industry Engagement"
        highlight={[2, 3]}
        intro="We exhibit where pharmaceutical manufacturing is actually bought, sold and regulated. Frankfurt, Delhi, the Pharma & Tech zone at CPHI Milan, and next, CPHI India 2026 at Yashobhoomi, New Delhi."
        scene="gyro"
        primary={{ to: BOOK_URL, label: "Book a meeting at CPHI India" }}
        secondary={{ href: `#${MILAN_ID}`, label: "CPHI Milan recap" }}
      >
        {indiaStatus !== "past" && (
          <Reveal delay={0.6} className="mt-10">
            <a
              href={`#${INDIA_ID}`}
              className="glass inline-flex max-w-full items-center gap-3 rounded-full py-2 pl-2 pr-5 text-sm text-champagne-soft transition-colors hover:text-champagne"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-copper-500/20 text-copper-300">
                <Radio className="h-4 w-4" />
              </span>
              <span className="truncate">
                {indiaStatus === "live" ? "Live now at " : ""}
                {india.venue} · {india.dates}
              </span>
            </a>
          </Reveal>
        )}
      </PageHero>

      <IndiaFeature />
      <MilanRecap />
      <MeetingFormats />
      <Timeline />
      <WhyEngagement />

      <CtaBand
        title={indiaStatus === "past" ? "Let's continue the conversation." : "Meet us at CPHI India 2026."}
        intro={
          indiaStatus === "past"
            ? "Tell us what is on your plate. A senior consultant replies within 24 hours with a scoped, practical approach."
            : `${india.dates} at ${india.venue}, New Delhi. Book a slot with our consultants to talk GMP audits, CSV, data integrity and DMF/CEP strategy.`
        }
        primary={
          indiaStatus === "past"
            ? { to: "/contactus", label: "Get in touch" }
            : { to: BOOK_URL, label: "Book a meeting at CPHI India" }
        }
        secondary={{ href: `mailto:${CONTACT_EMAIL}`, label: "Email us" }}
      />
    </>
  );
};

export default Events;
