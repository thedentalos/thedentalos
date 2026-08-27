import { PhoneOff, Search, UserCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";

const problems = [
  {
    icon: PhoneOff,
    title: "No-shows are bleeding your revenue",
    stat: "30% no-show rate",
    description:
      "Patients forget appointments — it's not their fault, life gets busy. We send automated WhatsApp reminders 24 hours and 2 hours before every visit, cutting no-shows in half within the first month.",
    size: "large" as const,
  },
  {
    icon: Search,
    title: "Invisible on Google",
    stat: "65% unclaimed profiles",
    description:
      "When someone searches 'dentist near me', your clinic should be the first thing they see. We claim, optimize, and manage your Google Business Profile so patients find you — not your competitor.",
    size: "small" as const,
  },
  {
    icon: UserCheck,
    title: "Follow-ups falling through",
    stat: "40% lost recall patients",
    description:
      "Recall visits and multi-step treatments slip through when your front desk is overwhelmed. We automate the follow-up sequence so every patient who needs to come back, does.",
    size: "small" as const,
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="bg-enamel-dim relative overflow-hidden py-12 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-5%] top-1/2 h-[250px] w-[250px] md:h-[400px] md:w-[400px] -translate-y-1/2 rounded-full bg-teal-tint/40 blur-[120px]" />
        <div className="absolute bottom-0 left-[-5%] h-[200px] w-[200px] md:h-[350px] md:w-[350px] rounded-full bg-coral-tint/30 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollReveal preset="scaleIn" className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 font-display font-medium text-ink">
            The three leaks draining your clinic
          </h2>
          <p className="mx-auto max-w-2xl text-base text-ink-soft md:text-lg">
            Every day these go unfixed, you&rsquo;re losing patients — and revenue — without even knowing it.
          </p>
        </ScrollReveal>

        <div className="bento-grid">
          {problems.map((problem, i) => (
            <GlassCard
              key={problem.title}
              delay={i * 0.15}
              className="group relative overflow-hidden p-5 sm:p-6 md:p-8"
            >
              <span className="mb-3 inline-block rounded-full bg-coral-tint px-2.5 py-0.5 font-mono text-[10px] sm:text-xs font-semibold text-coral-deep">
                {problem.stat}
              </span>

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-teal-tint transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14">
                <problem.icon className="h-5 w-5 text-teal sm:h-6 sm:w-6" strokeWidth={1.5} />
              </div>

              <h3 className="mb-2 font-display text-lg font-medium text-ink sm:text-xl md:text-2xl">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft md:text-base">
                {problem.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
