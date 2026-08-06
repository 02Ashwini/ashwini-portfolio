import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiActivity } from "react-icons/fi";
import { otherProjects } from "../data/content";
import DocumentViewerMockup from "./DocumentViewerMockup";

const fallbackVisual = {
  "intelligent-document-converter": DocumentViewerMockup,
};

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        className="w-full h-full object-cover object-top"
      />
    );
  }
  const Mockup = fallbackVisual[project.slug];
  if (Mockup) return <Mockup />;

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.14), transparent 55%)",
      }}
    >
      <FiActivity className="text-3xl text-accent/70" />
      <span className="mono-label !text-muted">Preview coming soon</span>
    </div>
  );
}

export default function OtherProjects() {
  return (
    <section className="py-16 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mono-label mb-10">More Projects</p>
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-line bg-surface p-6 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-surface-2 mb-6">
                <ProjectVisual project={p} />
              </div>
              <h3 className="font-display text-xl font-medium mb-1">
                {p.name}
              </h3>
              <p className="text-sm text-accent mb-3">{p.tagline}</p>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono text-muted border border-line rounded-full px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-primary transition"
                  >
                    Live Demo <FiArrowUpRight />
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition"
                  >
                    GitHub <FiGithub />
                  </a>
                )}
                {!p.liveUrl && !p.githubUrl && (
                  <span className="text-sm text-muted italic">
                    Private company project
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}