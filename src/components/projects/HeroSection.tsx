import { cn } from '../../lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { OutlineText } from '../ui';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

export function HeroSection({ title, subtitle, description, className }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] },
    }),
  };

  return (
    <div className={cn('max-w-5xl mx-auto w-full px-6 text-center', className)}>
      <motion.p
        className="text-zinc-400 text-xs uppercase tracking-[0.3em] mb-4 font-mono"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={0}
      >
        Portfolio
      </motion.p>

      <motion.h1
        className="font-black font-syne leading-none mb-4 sm:mb-6"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={1}
      >
        <OutlineText as="span" size="3xl" color="violet" hoverFill>
          {title}
        </OutlineText>
      </motion.h1>

      <motion.p
        className="text-white text-xl sm:text-2xl md:text-3xl font-syne mb-4 sm:mb-6"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={2}
      >
        {subtitle}
      </motion.p>

      <motion.p
        className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={3}
      >
        {description}
      </motion.p>
    </div>
  );
}

export default HeroSection;
