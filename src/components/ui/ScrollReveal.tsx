"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
  viewportOnce,
  viewportEarly,
  type RevealConfig,
} from "@/lib/animation";

type Preset = "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  preset?: Preset;
  delay?: number;
  duration?: number;
  distance?: number;
  /** Stagger children with delay between each */
  stagger?: boolean;
  staggerDelay?: number;
  /** Trigger animation earlier (larger viewport margin) */
  early?: boolean;
  /** Re-trigger every time element enters viewport (default: once) */
  replay?: boolean;
  /** HTML element to render as */
  as?: keyof typeof motion;
}

const presetMap: Record<Preset, (cfg: RevealConfig) => Variants> = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
};

export function ScrollReveal({
  children,
  className,
  preset = "fadeUp",
  delay = 0,
  duration,
  distance,
  stagger = false,
  staggerDelay = 0.08,
  early = false,
  replay = false,
  as = "div",
}: ScrollRevealProps) {
  const variants = presetMap[preset]({ delay, duration, distance });
  const viewport = replay
    ? { margin: early ? "-120px 0px" : "-60px 0px" }
    : early
      ? viewportEarly
      : viewportOnce;

  const MotionElement = motion[as as "div"];

  if (stagger && Array.isArray(children)) {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };

    return (
      <MotionElement
        className={cn(className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {children.map((child, i) => (
          <motion.div key={i} variants={variants}>
            {child}
          </motion.div>
        ))}
      </MotionElement>
    );
  }

  return (
    <MotionElement
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </MotionElement>
  );
}
