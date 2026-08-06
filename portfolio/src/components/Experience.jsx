import { motion } from "framer-motion";
import { experience, education } from "../data/content";

function TimelineItem({ title, subtitle, meta, points, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="relative"
    >
      <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-primary" />
      <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
        <h3 className="font-display text-xl font-medium">{title}</h3>
        {meta && <span className="mono-label !text-muted">{meta}</span>}
      </div>
      {subtitle && <p className="text-accent text-sm mb-3">{subtitle}</p>}
      {points && (
        <ul className="space-y-1.5">
          {points.map((pt) => (
            <li key={pt} className="text-muted text-sm leading-relaxed">
              {pt}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mono-label mb-3">Path So Far</p>
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-14">
          Experience
        </h2>

        <div className="relative pl-8 mb-16">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-14">
            {experience.map((e, i) => (
              <TimelineItem
                key={e.company}
                title={e.company}
                subtitle={`${e.role} · ${e.location}`}
                meta={e.period}
                points={e.points}
                i={i}
              />
            ))}
          </div>
        </div>

        <p className="mono-label mb-6">Education</p>
        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-10">
            {education.map((ed, i) => (
              <TimelineItem
                key={ed.degree}
                title={ed.degree}
                subtitle={`${ed.school} · ${ed.location}`}
                meta={ed.year}
                i={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
