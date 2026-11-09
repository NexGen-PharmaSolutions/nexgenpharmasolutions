import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { SERVICES, PRODUCTS } from "../lib/nav";
import { EASE } from "./ui/motion";

function Brand() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="NexGen Pharma Solutions Pvt. Ltd. home">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center">
        <span className="absolute inset-1 rounded-xl bg-copper-500/30 opacity-50 blur-md transition-opacity duration-500 group-hover:opacity-100" />
        <img src="/brand/nexgen-mark-112.webp" alt="" width="40" height="39" className="relative h-10 w-10 object-contain" />
      </span>
      <img
        src="/brand/nexgen-wordmark-light.webp"
        alt="NexGen Pharma Solutions Pvt. Ltd."
        width="350"
        height="97"
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}

function Dropdown({ label, items, wide = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const active = items.some((i) => pathname.startsWith(i.to));
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onDoc = (e) => !ref.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          active ? "text-copper-300" : "text-champagne-soft hover:text-champagne"
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 ${wide ? "w-[620px]" : "w-[340px]"}`}
          >
            <div className="glass overflow-hidden rounded-3xl p-3 shadow-deep">
              <div className={`grid gap-1 ${wide ? "grid-cols-2" : ""}`}>
                {items.map(({ to, label, blurb, icon: Icon, badge }) => (
                  <Link
                    key={to}
                    to={to}
                    className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.05]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-copper-400/20 bg-copper-400/10 text-copper-300 transition-transform duration-500 ease-expo group-hover:scale-110 group-hover:bg-copper-400/20">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.6} size={18} />
                    </span>
                    <span>
                      <span className="flex items-center gap-2 text-sm font-semibold text-champagne">
                        {label}
                        {badge && (
                          <span className="rounded-full bg-copper-400/15 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-copper-300">
                            {badge}
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-xs text-champagne-faint">{blurb}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const linkCls = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? "text-copper-300" : "text-champagne-soft hover:text-champagne"
  }`;

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 400 && y > prev && !mobile);
  });
  useEffect(() => setMobile(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-700 ease-expo md:px-6 ${
            scrolled ? "glass shadow-deep" : "border border-transparent"
          }`}
        >
          <Brand />
          <div className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" end className={linkCls}>
              Home
            </NavLink>
            <NavLink to="/aboutus" className={linkCls}>
              About
            </NavLink>
            <Dropdown label="Services" items={SERVICES} wide />
            <Dropdown label="Products" items={PRODUCTS} />
            <NavLink to="/events" className={linkCls}>
              Events
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/contactus" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              <span className="relative z-10">Contact us</span>
              <ArrowUpRight className="relative z-10 h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setMobile((m) => !m)}
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-champagne lg:hidden"
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-40 overflow-y-auto bg-obsidian-950/[0.98] px-6 pb-12 pt-28 backdrop-blur-xl lg:hidden"
          >
            <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-copper-600/20 blur-[120px]" />
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
              className="relative space-y-1"
            >
              {[{ to: "/", label: "Home" }, { to: "/aboutus", label: "About" }].map((l) => (
                <MobileItem key={l.to} {...l} big />
              ))}
              <MobileLabel>Services</MobileLabel>
              {SERVICES.map((s) => (
                <MobileItem key={s.to} {...s} />
              ))}
              <MobileLabel>Products</MobileLabel>
              {PRODUCTS.map((s) => (
                <MobileItem key={s.to} {...s} />
              ))}
              <div className="pt-4" />
              {[{ to: "/events", label: "Events" }, { to: "/contactus", label: "Contact" }].map((l) => (
                <MobileItem key={l.to} {...l} big />
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const item = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } } };

function MobileItem({ to, label, badge, big }) {
  return (
    <motion.li variants={item}>
      <NavLink
        to={to}
        end={to === "/"}
        className={({ isActive }) =>
          `flex items-center justify-between border-b border-white/5 py-3 ${
            big ? "font-display text-3xl" : "text-lg"
          } ${isActive ? "text-copper-300" : "text-champagne"}`
        }
      >
        {label}
        {badge ? (
          <span className="font-mono text-[0.6rem] uppercase tracking-wider text-copper-300">{badge}</span>
        ) : (
          <ArrowUpRight className="h-4 w-4 text-champagne-faint" />
        )}
      </NavLink>
    </motion.li>
  );
}

function MobileLabel({ children }) {
  return (
    <motion.li variants={item} className="pb-1 pt-6">
      <span className="eyebrow">{children}</span>
    </motion.li>
  );
}
