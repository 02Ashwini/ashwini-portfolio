import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { whatIBuild } from "../data/content";

export default function WhatIBuild() {
  return (
    <section className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mono-label mb-3">My Journey So Far</p>
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
          What I've Built Along the Way
        </h2>
        <p className="text-muted max-w-xl mb-12">
          Across enterprise applications and production deployments, this is
          what I've picked up and shipped with — not tied to any one project.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
          {whatIBuild.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-3"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary shrink-0">
                <FiCheck className="text-sm" />
              </span>
              <span className="text-ink text-[15px]">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
