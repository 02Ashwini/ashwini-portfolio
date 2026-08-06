import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { achievement } from "../data/content";

export default function Achievement() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-line p-10 md:p-14 text-center"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.16), transparent 60%), var(--color-surface)",
          }}
        >
          <FiAward className="mx-auto text-4xl text-accent mb-6" />
          <h2 className="font-display text-2xl md:text-3xl font-medium mb-3">
            {achievement.title}
          </h2>
          <p className="text-muted max-w-md mx-auto">
            {achievement.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
