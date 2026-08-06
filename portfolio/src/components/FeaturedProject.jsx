import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGithub, FiCheck } from "react-icons/fi";
import { flagshipProject } from "../data/content";
import ProjectShowcase from "./ProjectShowcase";

export default function FeaturedProject() {
  const p = flagshipProject;
  return (
    <section id="work" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mono-label mb-3"
        >
          Featured Project
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-medium mb-12"
        >
          {p.name}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProjectShowcase screenshots={p.screenshots} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-medium mb-2">{p.tagline}</h3>
            <p className="text-muted leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="mono-label !text-muted border border-line rounded-full px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-ink text-sm font-medium hover:brightness-110 transition"
              >
                Live Demo <FiArrowUpRight />
              </a>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm font-medium hover:border-accent transition"
              >
                GitHub <FiGithub />
              </a>
              <Link
                to={`/projects/${p.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-muted hover:text-ink transition"
              >
                Full case study →
              </Link>
            </div>
          </div>

          <ul className="space-y-3">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-muted">
                <FiCheck className="mt-1 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
