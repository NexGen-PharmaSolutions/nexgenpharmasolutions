import { useEffect, useState } from "react";
import { eventStatus } from "../../lib/events";

function parts(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return { Days: Math.floor(s / 86400), Hours: Math.floor((s % 86400) / 3600), Mins: Math.floor((s % 3600) / 60), Secs: s % 60 };
}

/** Live countdown to an event in src/lib/events.js (IST start). */
export default function Countdown({ event, className = "" }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const status = eventStatus(event, now);

  if (status === "live")
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-sage" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sage" />
        </span>
        <span className="font-display text-3xl text-champagne">Live now · come and meet us</span>
      </div>
    );
  if (status === "past")
    return <p className={`font-display text-2xl text-champagne ${className}`}>Thank you for visiting us at {event.name}.</p>;

  const p = parts(new Date(`${event.start}T10:00:00+05:30`) - now);
  return (
    <div className={`grid grid-cols-4 gap-2 sm:gap-3 ${className}`} role="timer" aria-label={`${p.Days} days until ${event.name}`}>
      {Object.entries(p).map(([k, v]) => (
        <div key={k} className="rounded-2xl border border-white/10 bg-obsidian-950/60 px-2 py-3 text-center sm:px-4 sm:py-4">
          <div className="font-display text-3xl tabular-nums text-champagne sm:text-5xl">{String(v).padStart(2, "0")}</div>
          <div className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-champagne-faint">{k}</div>
        </div>
      ))}
    </div>
  );
}
