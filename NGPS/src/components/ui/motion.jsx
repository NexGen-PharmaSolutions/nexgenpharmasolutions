import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

/** Fade + rise into view once. */
export function Reveal({ children, delay = 0, y = 32, className = "", as = "div", once = true, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 1, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Parent that staggers its <StaggerItem> children into view. */
export function Stagger({ children, className = "", gap = 0.08, delay = 0, as = "div", ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      {...rest}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className = "", as = "div", ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Word-by-word masked reveal for headings. Keeps the real text in the DOM
 * (crawlable) and uses aria-label so screen readers get one clean string.
 */
export function SplitText({ text, as = "h2", className = "", delay = 0, highlight = [], id }) {
  const Tag = motion[as] ?? motion.h2;
  const words = text.split(" ");
  return (
    <Tag
      id={id}
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${highlight.includes(i) ? "text-gradient italic" : ""}`}
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 1.05, ease: EASE } },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Counts up to a number when visible. `value` like "25+" or "200+". */
export function Counter({ value, className = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const num = parseFloat(String(value).replace(/[^\d.]/g, "")) || 0;
  const suffix = String(value).replace(/[\d.,]/g, "");
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    if (reduced) return setDisplay(num);
    const c = animate(0, num, { duration, ease: EASE, onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => c.stop();
  }, [inView, num, duration, reduced]);
  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/** Element that leans toward the cursor. */
export function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });
  return (
    <motion.span
      ref={ref}
      className={`inline-flex ${className}`}
      style={{ x, y }}
      onPointerMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/**
 * 3D tilt card with a cursor-following copper spotlight (.card-lux reads
 * --mx/--my). Children can use translateZ via [transform-style:preserve-3d].
 */
export function TiltCard({ children, className = "", max = 8, as = "div", ...rest }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 150, damping: 18 });
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      ref={ref}
      className={`card-lux ${className}`}
      style={reduced ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      onPointerMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        mx.set(px);
        my.set(py);
        ref.current.style.setProperty("--mx", `${px * 100}%`);
        ref.current.style.setProperty("--my", `${py * 100}%`);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Spotlight-only card (no tilt), for dense grids and tables. */
export function GlowCard({ children, className = "", as = "div", ...rest }) {
  const ref = useRef(null);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`card-lux ${className}`}
      onPointerMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Infinite horizontal marquee. Items are duplicated for a seamless loop. */
export function Marquee({ items, className = "", reverse = false }) {
  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap" aria-hidden={i >= items.length}>
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-copper-400/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Parallax wrapper driven by scroll position of the element. */
export function Parallax({ children, offset = 60, className = "" }) {
  const ref = useRef(null);
  const y = useMotionValue(0);
  const sy = useSpring(y, { stiffness: 80, damping: 20 });
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      y.set(-p * offset);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, y]);
  return (
    <motion.div ref={ref} style={{ y: sy }} className={className}>
      {children}
    </motion.div>
  );
}
