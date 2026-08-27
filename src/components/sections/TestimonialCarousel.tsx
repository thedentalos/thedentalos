"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { premiumEase } from "@/lib/animation";
import type { Testimonial } from "@/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const variants = {
  enter: {
    opacity: 0,
    scale: 0.94,
    filter: "blur(4px)",
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    filter: "blur(4px)",
  },
};

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    },
    [testimonials.length]
  );

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, [paginate, isPaused]);

  if (testimonials.length === 0) return null;

  const t = testimonials[page];

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-line/50 bg-white/80 backdrop-blur-xl p-5 shadow-sm sm:p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: premiumEase }}
          >
            <Quote className="mb-4 h-6 w-6 text-coral/30 sm:mb-6 sm:h-8 sm:w-8" />
            <blockquote className="text-base leading-relaxed text-ink md:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-ink sm:mt-6">{t.attribution}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <button
        type="button"
        onClick={() => paginate(-1)}
        className="absolute -left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-line bg-white p-2 text-ink-soft shadow-sm hover:border-coral hover:text-ink transition-all md:block"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => paginate(1)}
        className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-line bg-white p-2 text-ink-soft shadow-sm hover:border-coral hover:text-ink transition-all md:block"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setPage(idx)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              idx === page
                ? "bg-coral w-6"
                : "bg-line hover:bg-ink-soft"
            )}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
