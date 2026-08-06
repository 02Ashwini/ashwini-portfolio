import { trustedTech } from "../data/content";

export default function TrustedTech() {
  return (
    <section className="border-y border-line py-8">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mono-label mb-6">Core Stack</p>
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {trustedTech.map((t) => (
            <span
              key={t}
              className="font-display text-lg text-muted hover:text-ink transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
