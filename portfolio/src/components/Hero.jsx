import { useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/content";

export default function Hero() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
      style={{ "--x": "50%", "--y": "40%" }}
    >
      {/* mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,0.14), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 w-full">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-label mb-6"
        >
          {profile.role} — Available for opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl text-gradient"
        >
          {profile.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-muted max-w-xl"
        >
          {profile.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-ink text-sm font-medium hover:brightness-110 transition"
          >
            View Projects <FiArrowDown className="rotate-[-45deg]" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm font-medium text-ink hover:border-accent transition"
          >
            Download Resume <FiDownload />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-muted hover:text-ink transition"
          >
            Contact Me <FiMail />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
