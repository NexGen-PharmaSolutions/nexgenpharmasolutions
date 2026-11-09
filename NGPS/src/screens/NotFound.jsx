import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import Lazy3D from "../components/ui/Lazy3D";
import { CtaLink } from "../components/ui/blocks";
import { EASE, Reveal, Stagger, StaggerItem } from "../components/ui/motion";
import { SERVICES } from "../lib/nav";

export default function NotFound() {
  return (
    <>
      <Seo noindex title="Page not found | NexGen Pharma Solutions" />
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-36 md:pt-40">
        <div className="absolute inset-0 -z-20 bg-grid opacity-30 mask-fade-b" />
        <div className="absolute -right-40 top-10 -z-10 h-[640px] w-[640px] rounded-full bg-copper-600/10 blur-[140px]" />

        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Error 404</span>
            </Reveal>
            <motion.p
              aria-hidden="true"
              className="text-gradient mt-4 select-none font-display text-[clamp(7rem,26vw,16rem)] leading-[0.85] tracking-[-0.05em]"
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.1 }}
            >
              404
            </motion.p>
            <Reveal delay={0.25}>
              <h1 className="mt-6 text-display-sm text-champagne">This page could not be found.</h1>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-champagne-muted">
                The link may be out of date, or the page may have moved. Pick up from one of these instead.
              </p>
            </Reveal>
            <Reveal delay={0.45} className="mt-10 flex flex-wrap gap-4">
              <CtaLink to="/">Back to home</CtaLink>
              <CtaLink to="/contactus" variant="ghost">
                Contact us
              </CtaLink>
            </Reveal>

            <nav aria-label="Our services" className="mt-14 max-w-xl border-t border-white/10 pt-8">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-champagne-faint">Our services</p>
              <Stagger as="ul" className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2" delay={0.5} gap={0.06}>
                {SERVICES.map((s) => (
                  <StaggerItem as="li" key={s.to}>
                    <Link
                      to={s.to}
                      className="group flex items-center justify-between gap-3 border-b border-white/[0.06] py-3 text-champagne-soft transition-colors hover:text-copper-200"
                    >
                      {s.label}
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-champagne-faint transition-all duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-300"
                        aria-hidden="true"
                      />
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </nav>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
            className="relative h-[280px] sm:h-[380px] lg:h-[560px]"
          >
            <Lazy3D variant="capsules" className="absolute inset-0" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
