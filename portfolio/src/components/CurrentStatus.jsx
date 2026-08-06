import { motion } from "framer-motion";
import { currentlyWorking, openTo } from "../data/content";

export default function CurrentStatus() {
  return (
    <section className="py-16 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono-label mb-4">Currently Working On</p>
          <ul className="space-y-3">
            {currentlyWorking.map((c) => (
              <li key={c} className="flex items-center gap-3 text-ink">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mono-label mb-4">Currently Open To</p>
          <div className="flex flex-wrap gap-2">
            {openTo.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3.5 py-1.5 rounded-full border border-line text-muted bg-surface"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
