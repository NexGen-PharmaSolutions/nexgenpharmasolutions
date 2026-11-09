import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { SERVICES, PRODUCTS, LEGAL } from "../lib/nav";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../lib/seo";
import { Reveal } from "./ui/motion";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.06] bg-obsidian-950 pt-24">
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper-600/15 blur-[140px]" />
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <Reveal>
            <Link to="/" className="inline-block" aria-label="NexGen Pharma Solutions Pvt. Ltd. home">
              <img
                src="/brand/nexgen-logo-light.webp"
                alt="NexGen Pharma Solutions Pvt. Ltd. logo"
                width="350"
                height="249"
                className="h-auto w-56"
                loading="lazy"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-champagne-muted">
              Pharmaceutical consulting and compliance for API, sterile and finished-dose manufacturers. Former
              regulators and QA leaders, getting plants and systems through inspection.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["21 CFR Part 11", "EU GMP Annex 11", "GAMP 5", "ICH Q10"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.65rem] text-champagne-faint">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-champagne-faint">Services</h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.to}>
                  <FooterLink to={s.to}>{s.label}</FooterLink>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-champagne-faint">Company</h2>
            <ul className="mt-5 space-y-3">
              <li><FooterLink to="/aboutus">About us</FooterLink></li>
              <li><FooterLink to="/gmp-audit-company-india">Why NexGen · 100% inspection success</FooterLink></li>
              <li><FooterLink to="/events">Events</FooterLink></li>
              {PRODUCTS.map((p) => (
                <li key={p.to}><FooterLink to={p.to}>{p.label}</FooterLink></li>
              ))}
              <li><FooterLink to="/contactus">Contact</FooterLink></li>
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-champagne-faint">Get in touch</h2>
            <address className="mt-5 space-y-4 not-italic text-sm text-champagne-muted">
              <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-start gap-3 transition-colors hover:text-copper-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-start gap-3 transition-colors hover:text-copper-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
                {CONTACT_PHONE}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
                <span>
                  413 &amp; 420 Prince Cube, Beside Gangotri Exotica, Laxmipura Char Rasta, Gotri, Vadodara, Gujarat
                  390023, India
                </span>
              </p>
            </address>
          </Reveal>
        </div>

        <div aria-hidden="true" className="pointer-events-none mt-24 select-none overflow-hidden">
          <div className="text-gradient whitespace-nowrap text-center font-display text-[17vw] leading-[0.8] tracking-[-0.05em] opacity-90">
            NexGen
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 text-xs text-champagne-faint md:flex-row">
          <p>© {new Date().getFullYear()} NexGen Pharma Solutions Pvt. Ltd. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-copper-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-1 text-sm text-champagne-soft transition-colors hover:text-copper-300">
      {children}
      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}
