/* ------------------------------------------------------------------ */
/* DentalOS — Shared animation configuration                          */
/* ------------------------------------------------------------------ */

import type { Variants, Transition } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Easing curves                                                       */
/* ------------------------------------------------------------------ */

/** Premium cubic-bezier — smooth deceleration, feels polished */
export const premiumEase: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

/** Gentle ease-out — soft landing */
export const gentleEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/** Expressive ease-out — more dramatic entrance, smooth settle */
export const expressiveEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Spring config — bouncy but controlled */
export const springConfig = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

/** Gentle spring — less bounce, more control */
export const gentleSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
  mass: 0.5,
};

/* ------------------------------------------------------------------ */
/* Duration tokens                                                     */
/* ------------------------------------------------------------------ */

export const durations = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  reveal: 0.7,
  page: 0.5,
} as const;

/* ------------------------------------------------------------------ */
/* Scroll reveal variant factories                                     */
/* ------------------------------------------------------------------ */

export interface RevealConfig {
  delay?: number;
  duration?: number;
  distance?: number;
}

export function fadeUp(config: RevealConfig = {}): Variants {
  const { delay = 0, duration = durations.reveal, distance = 24 } = config;
  return {
    hidden: { opacity: 0, y: distance, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: premiumEase },
    },
  };
}

export function fadeIn(config: RevealConfig = {}): Variants {
  const { delay = 0, duration = durations.normal } = config;
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration, delay, ease: gentleEase } },
  };
}

export function scaleIn(config: RevealConfig = {}): Variants {
  const { delay = 0, duration = durations.reveal } = config;
  return {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay, ease: premiumEase },
    },
  };
}

export function slideLeft(config: RevealConfig = {}): Variants {
  const { delay = 0, duration = durations.reveal, distance = 32 } = config;
  return {
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: premiumEase },
    },
  };
}

export function slideRight(config: RevealConfig = {}): Variants {
  const { delay = 0, duration = durations.reveal, distance = 32 } = config;
  return {
    hidden: { opacity: 0, x: -distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: premiumEase },
    },
  };
}

/* ------------------------------------------------------------------ */
/* Stagger container variants                                          */
/* ------------------------------------------------------------------ */

export function staggerContainer(staggerDelay = 0.1, delayChildren = 0.05): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
        staggerDirection: 1,
      },
    },
  };
}

export function staggerItem(direction: "up" | "left" | "right" = "up"): Variants {
  const offsets: Record<string, object> = {
    up: { y: 20, opacity: 0 },
    left: { x: 24, opacity: 0 },
    right: { x: -24, opacity: 0 },
  };
  return {
    hidden: { ...offsets[direction] },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: premiumEase },
    },
  };
}

/* ------------------------------------------------------------------ */
/* Viewport defaults                                                   */
/* ------------------------------------------------------------------ */

export const viewportOnce = {
  once: true,
  margin: "-60px 0px",
} as const;

export const viewportEarly = {
  once: true,
  margin: "-120px 0px",
} as const;

/* ------------------------------------------------------------------ */
/* Glass card animation                                                */
/* ------------------------------------------------------------------ */

export const glassCardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96, filter: "blur(6px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: expressiveEase,
    },
  }),
};

/* ------------------------------------------------------------------ */
/* Magnetic hover effect                                               */
/* ------------------------------------------------------------------ */

export const magneticHover = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: { scale: 1.04 },
};

export const magneticTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};
