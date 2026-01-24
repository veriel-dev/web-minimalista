import type { Variants, Transition } from 'framer-motion';

// Legacy config (for backwards compatibility)
export const configAnimate = {
  animateHeroSecion: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  animateStatsSection: {
    animate: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  },
};

// Durations (in seconds)
export const duration = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

// Easing curves
export const easing = {
  easeOut: [0.0, 0.0, 0.2, 1] as const,
  easeIn: [0.4, 0.0, 1, 1] as const,
  easeInOut: [0.4, 0.0, 0.2, 1] as const,
};

// Common transitions
export const transition: Record<string, Transition> = {
  default: { duration: duration.normal, ease: easing.easeOut },
  fast: { duration: duration.fast, ease: easing.easeOut },
  slow: { duration: duration.slow, ease: easing.easeOut },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
};

// Fade up variants (for sections)
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transition.default },
  exit: { opacity: 0, y: -10, transition: transition.fast },
};

// Stagger children variants (for lists/grids)
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: transition.default },
};

// Page transition variants
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: duration.normal } },
  exit: { opacity: 0, transition: { duration: duration.fast } },
};

// Reduced motion utilities
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getReducedMotionVariants = (): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
  exit: { opacity: 0, transition: { duration: 0.01 } },
});