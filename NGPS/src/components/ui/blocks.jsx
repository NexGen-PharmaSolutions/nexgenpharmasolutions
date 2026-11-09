import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Lazy3D from "./Lazy3D";
import { Reveal, SplitText, Magnetic } from "./motion";
import { motion } from "framer-motion";

/** Section header: eyebrow, animated title, optional intro. */
export function SectionHeading({ eyebrow, title, highlight = [], intro, align = "left", className = "", as = "h2", id }) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <SplitText as={as} id={id} text={title} highlight={highlight} className="mt-5 text-display-md text-champagne" />
      {intro && (
        <Reveal delay={0.15}>
          <p className={`mt-6 text-lg leading-relaxed text-champagne-muted ${center ? "mx-auto" : ""} max-w-2xl`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Primary / secondary CTA links with magnetic hover. */
export function CtaLink({ to, href, children, variant = "primary", className = "", icon = true }) {
  const cls = `${variant === "primary" ? "btn-primary" : "btn-ghost"} group ${className}`;
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
      )}
    </>
  );
  return (
    <Magnetic strength={0.2}>
      {to ? (
        <Link to={to} className={cls}>
          {inner}
        </Link>
      ) : (
        <a href={href} className={cls}>
          {inner}
        </a>
      )}
    </Magnetic>
  );
}

/**
 * Inner-page hero: breadcrumb, eyebrow, split heading, intro, CTAs and a 3D
 * scene on the right. `scene` picks a Scene3D variant.
 */
export function PageHero({
  eyebrow,
  title,
  highlight = [],
  intro,
  crumb,
  scene = "molecule",
  primary,
  secondary,
  stats,
  children,
}) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="absolute inset-0 -z-20 bg-grid opacity-40 mask-fade-b" />
      <div className="absolute -right-40 top-0 -z-10 h-[700px] w-[700px] rounded-full bg-copper-600/10 blur-[140px]" />
      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {crumb && (
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 font-mono text-xs text-champagne-faint">
                <Link to="/" className="transition-colors hover:text-copper-300">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-champagne-muted" aria-current="page">
                  {crumb}
                </span>
              </nav>
            </Reveal>
          )}
          {eyebrow && (
            <Reveal delay={0.05}>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          <SplitText as="h1" text={title} highlight={highlight} className="mt-6 text-display-lg text-champagne" delay={0.1} />
          {intro && (
            <Reveal delay={0.35}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-champagne-muted md:text-xl">{intro}</p>
            </Reveal>
          )}
          {(primary || secondary) && (
            <Reveal delay={0.5} className="mt-10 flex flex-wrap gap-4">
              {primary && <CtaLink to={primary.to} href={primary.href}>{primary.label}</CtaLink>}
              {secondary && (
                <CtaLink to={secondary.to} href={secondary.href} variant="ghost">
                  {secondary.label}
                </CtaLink>
              )}
            </Reveal>
          )}
          {stats && (
            <Reveal delay={0.6} className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-champagne md:text-4xl">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-champagne-faint">{l}</div>
                </div>
              ))}
            </Reveal>
          )}
          {children}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative h-[340px] sm:h-[420px] lg:h-[540px]"
        >
          <Lazy3D variant={scene} className="absolute inset-0" />
        </motion.div>
      </div>
    </section>
  );
}

/** Closing call-to-action band used at the end of every page. */
export function CtaBand({
  title = "Ready to walk into your next inspection with confidence?",
  intro = "Tell us what is on your plate. A senior consultant replies within 24 hours with a scoped, practical approach.",
  primary = { to: "/contactus", label: "Book a consultation" },
  secondary = { href: "mailto:inquiry@nexgenpharmasolutions.com", label: "Email us" },
}) {
  return (
    <section className="container py-24 md:py-32">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-copper-400/20 bg-obsidian-900 px-6 py-20 text-center md:px-16 md:py-28">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute left-1/2 top-full -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper-500/30 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-300/60 to-transparent" />
        <span className="eyebrow">Start the conversation</span>
        <SplitText text={title} className="mx-auto mt-6 max-w-4xl text-display-md text-champagne" />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-champagne-muted">{intro}</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaLink to={primary.to} href={primary.href}>
            {primary.label}
          </CtaLink>
          {secondary && (
            <CtaLink to={secondary.to} href={secondary.href} variant="ghost" icon={false}>
              {secondary.label}
            </CtaLink>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/** Small mono pill, e.g. regulation references. */
export function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-copper-400/25 bg-copper-400/[0.06] px-3 py-1 font-mono text-[0.68rem] tracking-wide text-copper-200 ${className}`}
    >
      {children}
    </span>
  );
}

/** Icon tile for cards. Pass a lucide icon component. */
export function IconTile({ icon: Icon, className = "" }) {
  return (
    <div
      className={`relative grid h-12 w-12 place-items-center rounded-2xl border border-copper-400/25 bg-gradient-to-br from-copper-400/20 to-copper-700/10 text-copper-300 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] ${className}`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.6} />
    </div>
  );
}
