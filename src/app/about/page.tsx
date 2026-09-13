import type { Metadata } from "next";
import Image from "next/image";
import { Target, Heart, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { teamMembers } from "@/config/team";
import { aboutMetadata } from "@/config/seo";

export const metadata: Metadata = aboutMetadata;

const values = [
  {
    icon: Target,
    title: "Dental only",
    description:
      "We don't spread across industries. Dental clinics face unique challenges — insurance, no-shows, recall cycles — and we've built everything around that specific workflow.",
  },
  {
    icon: Heart,
    title: "Patient-first",
    description:
      "Every message, reminder, and post is written the way a clinic would speak to its own patients. No marketing jargon, no spam — just helpful, timely communication.",
  },
  {
    icon: Zap,
    title: "No waiting",
    description:
      "Agencies can take weeks to get started. We begin the day you say yes — because every day a chair sits empty is revenue lost.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-5 md:py-20">
          <AnimatedSection>
            <h1 className="font-display text-3xl font-medium text-ink md:text-5xl">
              Why we only work with dental clinics
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <AnimatedSection>
        <section className="bg-enamel-dim">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-5 md:py-24">
            <div className="space-y-4 text-sm leading-relaxed text-ink-soft md:space-y-6 md:text-base">
              <p>
                DentalOS started with a simple observation: every dental
                clinic owner we spoke to in Pakistan had the same three problems.
                Patients who didn&rsquo;t show up. A Google listing that might as well
                not exist. And a growing pile of follow-up calls that nobody on
                the front desk had time to make.
              </p>
              <p>
                These aren&rsquo;t hard problems to solve — if you have the right
                tools, time to set them up, and someone to run them day to day.
                Most clinics have none of the three. The owner is also the lead
                dentist, the office manager, and the person fixing the Wi-Fi.
              </p>
              <p>
                We picked dental clinics because no other vertical has such a
                clear, repeatable path from &ldquo;struggling to fill chairs&rdquo;
                to &ldquo;booked solid.&rdquo; WhatsApp reminders, a clean Google
                profile, and automated recall reminders do more for a clinic
                than any amount of generic marketing ever would.
              </p>
              <p>
                Our team operates from Islamabad and works with clinics across
                Pakistan — single-doctor practices, multi-branch groups, and
                everything in between.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-5 md:py-24">
          <AnimatedSection>
            <h2 className="mb-3 text-center font-display text-2xl font-medium text-ink md:mb-4 md:text-4xl">
              Who you&rsquo;ll work with
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-center text-xs text-ink-soft md:mb-14 md:text-sm">
              A balanced team — technical and marketing working together so your
              clinic gets both the tools and the growth.
            </p>
          </AnimatedSection>

          {[
            {
              title: "Technical",
              members: teamMembers.filter((m) => m.specialty === "Technical"),
            },
            {
              title: "Marketing & Sales",
              members: teamMembers.filter(
                (m) => m.specialty === "Marketing & Sales"
              ),
            },
          ].map((group) => (
            <div key={group.title} className="mb-8 last:mb-0 md:mb-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-coral">
                {group.title}
              </p>
              <AnimatedSection
                stagger
                delay={0.1}
                className="grid gap-5 sm:grid-cols-2"
              >
                {group.members.map((member) => (
                  <div
                    key={member.name}
                    className="group rounded-2xl border border-line bg-enamel p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
                  >
                    <div className="mx-auto mb-3 h-16 w-16 overflow-hidden rounded-full bg-teal-tint transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center font-display text-xl font-medium text-teal sm:text-2xl">
                          {initials(member.name)}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-coral sm:text-sm">{member.role}</p>
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:mt-3 sm:text-sm">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-enamel-dim">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 md:py-24">
          <h2 className="mb-8 text-center font-display text-2xl font-medium text-ink md:mb-12 md:text-4xl">
            How we work
          </h2>
          <AnimatedSection stagger delay={0.1} className="grid gap-5 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-line bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-teal-tint transition-all duration-300 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14">
                  <v.icon className="h-5 w-5 text-teal sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 font-display text-base font-medium text-ink sm:text-lg">
                  {v.title}
                </h3>
                <p className="text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {v.description}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
