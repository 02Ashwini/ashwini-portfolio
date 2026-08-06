import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/content";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-semibold tracking-tight text-ink"
        >
          Ashwini<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={profile.resumeUrl}
          download
          className="text-sm font-medium px-4 py-2 rounded-full border border-line hover:border-primary hover:text-ink text-muted transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
