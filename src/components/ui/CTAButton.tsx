"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CTAVariant = "primary" | "secondary" | "outline";
type CTASize = "sm" | "md" | "lg";

interface CTAButtonProps {
  children: ReactNode;
  href: string;
  variant?: CTAVariant;
  size?: CTASize;
  className?: string;
  noMagnetic?: boolean;
}

const variantStyles: Record<CTAVariant, string> = {
  primary:
    "bg-coral text-white shadow-md hover:bg-coral-deep hover:shadow-glow-coral",
  secondary:
    "bg-teal text-white shadow-md hover:bg-teal-light hover:shadow-glow-teal",
  outline:
    "border-2 border-teal text-teal bg-transparent hover:bg-teal-tint",
};

const sizeStyles: Record<CTASize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm sm:px-7 sm:py-3 sm:text-base",
  lg: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
};

const MotionLink = motion.create(Link);

export function CTAButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  noMagnetic = false,
}: CTAButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  function handleMouseMove(e: React.MouseEvent) {
    if (noMagnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.div
      className="inline-block"
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <MotionLink
        ref={ref}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-xl font-sans font-semibold no-underline overflow-hidden focus:outline-none focus:ring-2 focus:ring-coral/50 focus:ring-offset-2 transition-all duration-200",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        style={
          !noMagnetic
            ? {
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                transition: "transform 0.35s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
              }
            : undefined
        }
        whileHover={{ scale: noMagnetic ? 1.04 : 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/0 transition-colors duration-300 hover:bg-white/10" />
        <span className="relative z-10">{children}</span>
      </MotionLink>
    </motion.div>
  );
}
