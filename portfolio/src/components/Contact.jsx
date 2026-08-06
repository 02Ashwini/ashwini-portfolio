import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import { profile } from "../data/content";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-line">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mono-label mb-4"
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-5xl font-medium text-gradient mb-10"
        >
          Let's build something.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-line bg-surface p-6 sm:p-8 mb-10"
        >
          <ContactForm />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm font-medium hover:border-accent transition"
          >
            <FiMail /> Email Me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm font-medium hover:border-accent transition"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm font-medium hover:border-accent transition"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-muted hover:text-ink transition"
          >
            <FiDownload /> Resume
          </a>
        </div>

        <p className="mt-20 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React,
          Tailwind CSS & Framer Motion.
        </p>
      </div>
    </section>
  );
}
