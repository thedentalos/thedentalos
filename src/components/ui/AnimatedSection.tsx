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
  staggerContainer,
  staggerItem,
  viewportOnce,
  premiumEase,
} from "@/lib/animation";

type Direction = "up" | "down" | "left" | "right" | "none" | "scale" | "blur";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Stagger children with a delay between each */
  stagger?: boolean;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Animation direction */
  direction?: Direction;
  /** Optional hover scale effect */
  hoverEffect?: boolean;
}

const directionVariantMap: Record<Direction, (delay?: number) => Variants> = {
  up: (d) => fadeUp({ delay: d, distance: 28 }),
  down: (d) => fadeUp({ delay: d, distance: -28 }),
  left: (d) => slideLeft({ delay: d, distance: 36 }),
  right: (d) => slideRight({ delay: d, distance: 36 }),
  scale: (d) => scaleIn({ delay: d }),
  blur: (d) => fadeUp({ delay: d, distance: 20 }),
  none: (d) => fadeIn({ delay: d }),
};

export function AnimatedSection({
  children,
  className,
  stagger = false,
  delay = 0,
  direction = "up",
  hoverEffect = false,
}: AnimatedSectionProps) {
  if (stagger && Array.isArray(children)) {
    const containerVars = staggerContainer(0.1, delay);
    const itemVars = staggerItem(direction === "left" ? "left" : direction === "right" ? "right" : "up");

    return (
      <motion.div
        className={cn(className)}
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {children.map((child, i) => (
          <motion.div
            key={i}
            variants={itemVars}
            whileHover={hoverEffect ? { scale: 1.02, y: -3 } : undefined}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  const variants = directionVariantMap[direction](delay);

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={hoverEffect ? { scale: 1.02, y: -4 } : undefined}
      transition={
        hoverEffect
          ? { duration: 0.3, ease: premiumEase }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
