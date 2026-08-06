import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiCheck } from "react-icons/fi";
import { flagshipProject } from "../data/content";
import ProjectShowcase from "../components/ProjectShowcase";

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HrmsCaseStudy() {
  const p = flagshipProject;

  return (
    <main className="pt-32 pb-28 bg-grid">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-10"
        >
          <FiArrowLeft /> Back to portfolio
        </Link>

        <p className="mono-label mb-3">Case Study</p>
        <h1 className="font-display text-4xl md:text-5xl font-medium text-gradient mb-5">
          {p.name}
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-8">{p.description}</p>

        <div className="flex flex-wrap gap-4 mb-14">
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
        </div>

        <motion.div {...fade} className="mb-16">
          <ProjectShowcase screenshots={p.screenshots} />
        </motion.div>

        <motion.section {...fade} className="mb-16">
          <h2 className="mono-label mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="text-sm font-mono text-muted border border-line rounded-full px-3.5 py-1.5"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section {...fade} className="mb-16">
          <h2 className="mono-label mb-6">Features</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {p.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-muted"
              >
                <FiCheck className="mt-1 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section {...fade} className="mb-16">
          <h2 className="mono-label mb-4">Architecture</h2>
          <p className="text-muted leading-relaxed">
            A React.js front end communicates with an Express.js REST API,
            backed by MongoDB Atlas. JWT authentication and authorization
            middleware protect every secure route, with role-based access
            splitting the experience between Admin and Employee portals.
          </p>
        </motion.section>

        <motion.section {...fade}>
          <h2 className="mono-label mb-4">Deployment</h2>
          <p className="text-muted leading-relaxed">{p.deployment}</p>
        </motion.section>
      </div>
    </main>
  );
}
