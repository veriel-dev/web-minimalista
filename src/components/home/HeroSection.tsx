import { Link } from 'wouter';
import { cn } from '../../lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { OutlineText } from '../ui';
import { ArrowDown } from 'lucide-react';
import { useScrollToSection } from '../../hooks/useScrollToSection';

interface HeroSectionProps {
  name: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  className?: string;
}

export function HeroSection({
  name,
  title,
  titleHighlight,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  className,
}: HeroSectionProps) {
  const scrollToSection = useScrollToSection();
  const shouldReduceMotion = useReducedMotion();

  // Split name into first and last name for two-line display
  const nameParts = name.split('.');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join('.');

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: [0, 0, 0.2, 1] },
    }),
  };

  return (
    <div className={cn('max-w-5xl mx-auto px-6 text-center', className)}>
      {/* Section number */}
      <motion.p
        className="text-zinc-400 text-xs uppercase tracking-[0.4em] mb-4 font-mono"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={0}
      >
        01 / Portfolio 2026
      </motion.p>

      {/* Name - Two lines */}
      <motion.h1
        className="font-black font-syne leading-none mb-4 sm:mb-6"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={1}
      >
        <OutlineText as="span" size="3xl" color="violet" hoverFill>
          {firstName}
        </OutlineText>{' '}
        <span className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">.{lastName}</span>
      </motion.h1>

      {/* Title with highlight */}
      <motion.p
        className="text-zinc-500 text-lg sm:text-xl md:text-2xl font-light mt-6 sm:mt-8 mb-4"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={2}
      >
        {title}{' '}
        {titleHighlight && (
          <OutlineText as="span" size="md" color="violet" hoverFill className="font-bold">
            {titleHighlight}
          </OutlineText>
        )}
      </motion.p>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12"
          initial="hidden"
          animate="visible"
          variants={variants}
          custom={3}
        >
          {subtitle}
        </motion.p>
      )}

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={4}
      >
        {ctaPrimary && (
          <Link
            href={ctaPrimary.href}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition flex items-center justify-center gap-2"
          >
            {ctaPrimary.label}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        )}
        {ctaSecondary && (
          <Link
            href={ctaSecondary.href}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-zinc-700 hover:border-white rounded-full transition text-white text-center"
          >
            {ctaSecondary.label}
          </Link>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-12 sm:mt-20 animate-bounce"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={5}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-zinc-400 hover:text-white transition inline-block cursor-pointer"
          aria-label="Ir a la sección Sobre mí"
        >
          <ArrowDown size={24} />
        </button>
      </motion.div>
    </div>
  );
}

export default HeroSection;
