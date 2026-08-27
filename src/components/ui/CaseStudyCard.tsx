import type { CaseStudy } from "@/types";

type CaseStudyCardProps = CaseStudy;

export function CaseStudyCard({
  clinicName,
  stats,
  narrative,
  quote,
}: CaseStudyCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-8 shadow-sm">
      <h3 className="font-display text-xl font-medium text-ink">
        {clinicName}
      </h3>

      {/* Stats grid */}
      {stats.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-enamel-dim px-4 py-3 text-center"
            >
              <span className="block font-mono text-2xl font-medium text-coral">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs text-ink-soft">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Narrative */}
      <p className="mt-6 text-sm leading-relaxed text-ink-soft">
        {narrative}
      </p>

      {/* Quote */}
      {quote && (
        <blockquote className="mt-4 border-l-2 border-coral pl-4 text-sm italic text-ink-soft">
          &ldquo;{quote}&rdquo;
        </blockquote>
      )}
    </div>
  );
}
