"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  /** Speed multiplier. 0 = static, 0.5 = half scroll speed, 1 = full scroll speed */
  speed?: number;
  /** Reverse direction (moves opposite to scroll) */
  reverse?: boolean;
  /** Disable on mobile for performance */
  disableOnMobile?: boolean;
}

export function ParallaxLayer({
  children,
  className,
  speed = 0.5,
  reverse = false,
  disableOnMobile = true,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = reverse ? -speed : speed;
  const y = useTransform(scrollYProgress, [0, 1], [factor * 100, factor * -100]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        disableOnMobile && "max-md:transform-none",
        className
      )}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}
