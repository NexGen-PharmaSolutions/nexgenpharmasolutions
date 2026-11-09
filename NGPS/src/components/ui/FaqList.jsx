import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Stagger, StaggerItem } from "./motion";

/** Accessible FAQ accordion. `items` is [{ q, a }]. */
export default function FaqList({ items, idPrefix }) {
  const [open, setOpen] = useState(0);
  return (
    <Stagger className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <StaggerItem key={f.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg text-champagne transition-colors group-hover:text-copper-200 md:text-xl">
                  {f.q}
                </span>
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-copper-400/30 text-copper-300 transition-colors group-hover:bg-copper-400/10">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${idPrefix}-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 leading-relaxed text-champagne-muted">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
