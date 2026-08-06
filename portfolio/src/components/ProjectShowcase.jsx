import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectShowcase({ screenshots }) {
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  return (
    <div className="window-chrome">
      <div className="window-chrome-bar items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-1">
          {screenshots.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`relative px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                i === active
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {i === active && (
                <motion.span
                  layoutId="showcase-tab-pill"
                  className="absolute inset-0 rounded-md bg-primary/20 border border-primary/40"
                  transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                />
              )}
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative aspect-video bg-surface-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={`${current.label} screen`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full object-cover object-top"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
