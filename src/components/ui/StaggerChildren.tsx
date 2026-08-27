"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animation";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child animation (seconds) */
  staggerDelay?: number;
  /** Delay before first child animates */
  initialDelay?: number;
  /** Direction children enter from */
  direction?: "up" | "left" | "right";
  /** Re-trigger on each viewport entry */
  replay?: boolean;
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
  initialDelay = 0.05,
  direction = "up",
  replay = false,
}: StaggerChildrenProps) {
  const containerVariants = staggerContainer(staggerDelay, initialDelay);
  const itemVariants = staggerItem(direction);

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={replay ? { margin: "-60px 0px" } : viewportOnce}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
