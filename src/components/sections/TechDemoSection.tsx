"use client";

import Image from "next/image";
import { PlayCircle, Smartphone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TechDemoSection() {
  return (
    <section className="bg-white py-12 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <ScrollReveal preset="scaleIn" className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 font-display font-medium text-ink">
            See the free tech in action
          </h2>
          <p className="mx-auto max-w-2xl text-base text-ink-soft md:text-lg">
            Watch WhatsApp automation handle reminders, booking, and recalls —
            and the app your patients and staff use every day.
          </p>
        </ScrollReveal>

        <div className="grid items-stretch gap-5 md:gap-8 md:grid-cols-2">
          {/* WhatsApp automation video demo */}
          <ScrollReveal preset="slideRight" className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="flex h-[240px] items-center justify-center overflow-hidden bg-enamel sm:h-[340px] md:h-[440px]">
                <video
                  className="h-full w-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="Demo of DentalOS WhatsApp automation"
                >
                  <source src="/videos/automation_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-start gap-2 border-t border-line px-4 py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coral-tint">
                  <PlayCircle className="h-3.5 w-3.5 text-coral" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink sm:text-sm">
                    WhatsApp automation demo
                  </p>
                  <p className="text-[10px] text-ink-soft sm:text-xs">
                    Reminders, booking &amp; recall messages — sent automatically.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* App screenshot */}
          <ScrollReveal preset="slideLeft" className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-enamel sm:h-[340px] md:h-[440px]">
                <Image
                  src="/images/app.png"
                  alt="The DentalOS app for scheduling, reminders and patient communication"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex items-start gap-2 border-t border-line px-4 py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-tint">
                  <Smartphone className="h-3.5 w-3.5 text-teal" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink sm:text-sm">
                    The DentalOS app
                  </p>
                  <p className="text-[10px] text-ink-soft sm:text-xs">
                    Scheduling, reminders &amp; patient conferencing in one place.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
