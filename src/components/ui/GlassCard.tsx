"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { glassCardVariants, viewportOnce } from "@/lib/animation";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Add hover effects (glow, lift, intensified blur) */
  hover?: boolean;
  /** Delay before reveal animation */
  delay?: number;
  /** Disable scroll-reveal animation */
  noAnimation?: boolean;
  /** HTML element to render as */
  as?: "div" | "article" | "section";
}

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
  noAnimation = false,
  as = "div",
}: GlassCardProps) {
  const MotionElement = motion[as as "div"];

  return (
    <MotionElement
      className={cn(
        "glass-card p-4 sm:p-5 md:p-8",
        hover && "glass-card-hover",
        className
      )}
      variants={noAnimation ? undefined : glassCardVariants}
      custom={delay}
      initial={noAnimation ? undefined : "hidden"}
      whileInView={noAnimation ? undefined : "visible"}
      viewport={noAnimation ? undefined : viewportOnce}
    >
      {children}
    </MotionElement>
  );
}
