import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import { Reveal, SplitText } from "../components/ui/motion";
import { LEGAL } from "../lib/nav";

/**
 * Shared shell for the legal pages: compact hero, sticky table of contents
 * that tracks the section in view, and the verbatim legal copy in .prose-lux.
 *
 * sections: [{ id, title, body }] where body is JSX of the original text.
 */
export default function LegalLayout({ title, updated, sections, path }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length || !("IntersectionObserver" in window)) return;
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        // First section (in document order) currently inside the reading band.
        const current = sections.find((s) => visible.get(s.id));
        if (current) setActive(current.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const others = LEGAL.filter((l) => l.to !== path);

  return (
    <>
      {/* Compact hero */}
      <section className="relative isolate overflow-hidden pb-14 pt-36 md:pb-20 md:pt-44">
        <div className="absolute inset-0 -z-20 bg-grid opacity-30 mask-fade-b" />
        <div className="absolute -right-48 -top-24 -z-10 h-[520px] w-[520px] rounded-full bg-copper-600/10 blur-[130px]" />
        <div className="container">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 font-mono text-xs text-champagne-faint">
              <Link to="/" className="transition-colors hover:text-copper-300">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-champagne-muted" aria-current="page">
                {title}
              </span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="eyebrow">Legal</span>
          </Reveal>
          <SplitText as="h1" text={title} className="mt-5 text-display-lg text-champagne" delay={0.1} />
          {updated && (
            <Reveal delay={0.3}>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-obsidian-900/70 px-4 py-1.5 font-mono text-xs tracking-wide text-champagne-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                {updated}
              </p>
            </Reveal>
          )}
        </div>
        <div className="container mt-14">
          <div className="hairline" />
        </div>
      </section>

      {/* Body */}
      <section className="container pb-28 md:pb-36">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
          {/* Mobile: collapsible contents */}
          <details className="group rounded-2xl border border-white/10 bg-obsidian-900/70 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-champagne [&::-webkit-details-marker]:hidden">
              On this page
              <ChevronRight className="h-4 w-4 text-copper-300 transition-transform duration-300 group-open:rotate-90" aria-hidden="true" />
            </summary>
            <ol className="space-y-1 border-t border-white/10 px-3 py-3">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-lg px-2 py-1.5 text-sm text-champagne-muted transition-colors hover:text-copper-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          {/* Desktop: sticky contents */}
          <aside className="hidden lg:block">
            <nav aria-label="Table of contents" className="sticky top-32">
              <p className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-champagne-faint">On this page</p>
              <ol className="relative space-y-0.5 border-l border-white/10">
                {sections.map((s) => {
                  const on = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        aria-current={on ? "location" : undefined}
                        className={`-ml-px block border-l py-1.5 pl-4 text-sm leading-snug transition-all duration-500 ease-expo ${
                          on
                            ? "border-copper-400 text-copper-200"
                            : "border-transparent text-champagne-muted hover:border-champagne/30 hover:text-champagne"
                        }`}
                      >
                        {s.title}
                      </a>
                    </li>
                  );
                })}
              </ol>
              {others.length > 0 && (
                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-champagne-faint">Related</p>
                  <ul className="space-y-2">
                    {others.map((l) => (
                      <li key={l.to}>
                        <Link to={l.to} className="text-sm text-champagne-muted transition-colors hover:text-copper-200">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>
          </aside>

          <Reveal y={20} className="min-w-0">
            <article className="prose-lux [overflow-wrap:anywhere]">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-32">
                  <h2 id={`${s.id}-title`} className={i === 0 ? "!mt-0" : ""}>
                    {s.title}
                  </h2>
                  {s.body}
                </section>
              ))}
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/** Company contact card used at the end of each legal page (original text). */
export function LegalContact() {
  return (
    <div className="mt-6 rounded-3xl border border-copper-400/20 bg-obsidian-900/80 p-6 md:p-8">
      <p className="font-display text-xl text-champagne">NexGen Pharma Solutions Private Limited</p>
      <p className="mt-4 flex items-start gap-3">
        <Mail className="mt-[0.45em] h-4 w-4 shrink-0 text-copper-300" aria-hidden="true" />
        <span>
          Email: <a href="mailto:inquiry@nexgenpharmasolutions.com">inquiry@nexgenpharmasolutions.com</a>
        </span>
      </p>
      <p className="!mb-0 mt-3 flex items-start gap-3 text-[0.95rem] text-champagne-muted">
        <MapPin className="mt-[0.45em] h-4 w-4 shrink-0 text-copper-300" aria-hidden="true" />
        <span>
          Registered Office: 413 &amp; 420 PRINCE CUBE, Beside Gangotri Exotica, Laxmipura Char Rasta, Nayaran Garden, 30
          Mtr Road, Gotri, Vadodara, Gujarat 390023, India
        </span>
      </p>
    </div>
  );
}

/** Sub-block (e.g. a cookie category) inside a legal section. */
export function LegalCard({ children }) {
  return <div className="mb-6 rounded-2xl border border-white/[0.07] bg-obsidian-900/60 p-5 md:p-6">{children}</div>;
}
