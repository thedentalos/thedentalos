"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  /** Target value to count to */
  to: number;
  /** Duration in seconds */
  duration?: number;
  /** Optional prefix (e.g. "PKR ") */
  prefix?: string;
  /** Optional suffix (e.g. "%", "+", "K") */
  suffix?: string;
  /** Enable comma formatting for numbers */
  format?: boolean;
  /** Number of decimal places */
  decimals?: number;
  className?: string;
}

export function CountUp({
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  format = true,
  decimals = 0,
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    function animate(timestamp: number) {
      if (startTime.current === null) {
        startTime.current = timestamp;
      }

      const elapsed = (timestamp - startTime.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Premium ease-out curve: decelerating approach
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(to * eased);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    }

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [hasAnimated, to, duration]);

  const formatted = format
    ? count.toLocaleString("en-PK", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : count.toFixed(decimals);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
