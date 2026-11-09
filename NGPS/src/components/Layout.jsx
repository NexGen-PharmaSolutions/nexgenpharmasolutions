import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Seo from "./Seo";
import { EASE } from "./ui/motion";

let lenis;

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ duration: 1.15, smoothWheel: true, easing: (t) => 1 - Math.pow(1 - t, 4) });
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    // Smooth-scroll in-page anchors (#contact-form etc.).
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -100 });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      lenis = undefined;
    };
  }, []);
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) (lenis ? lenis.scrollTo(el, { offset: -100 }) : el.scrollIntoView());
      }, 350);
      return () => clearTimeout(t);
    }
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-copper-700 via-copper-400 to-copper-200"
    />
  );
}

/** Soft copper light that trails the cursor on pointer devices. */
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, id;
    const move = (e) => ((x = e.clientX), (y = e.clientY));
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (ref.current) ref.current.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      id = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    id = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(id);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-60 md:block"
      style={{ background: "radial-gradient(circle, rgba(227,134,77,.10), transparent 60%)" }}
    />
  );
}

export default function Layout() {
  useSmoothScroll();
  const location = useLocation();
  return (
    <div className="grain relative min-h-screen bg-obsidian-950">
      <Seo />
      <a
        href="#main"
        className="fixed left-4 top-4 z-[80] -translate-y-24 rounded-full bg-copper-400 px-4 py-2 text-sm font-semibold text-obsidian-950 focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <ScrollManager />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          className="relative z-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
