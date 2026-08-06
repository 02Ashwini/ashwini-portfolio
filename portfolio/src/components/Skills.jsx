import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mono-label mb-3">Toolbox</p>
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-14">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-line bg-surface p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="mono-label mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="text-ink text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
