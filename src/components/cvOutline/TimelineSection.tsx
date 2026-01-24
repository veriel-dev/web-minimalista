import { cn } from '../../../libs/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { OutlineText, SectionHeader } from '../outlineUI';
import type { LucideIcon } from 'lucide-react';
import type { OutlineColor } from '../../config/theme';

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
}

interface TimelineSectionProps {
  number: string;
  sectionTitle: string;
  color: OutlineColor;
  icon: LucideIcon;
  items: TimelineItem[];
  className?: string;
}

export function TimelineSection({
  number,
  sectionTitle,
  color,
  icon,
  items,
  className,
}: TimelineSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const colorClasses: Record<OutlineColor, { border: string; dot: string; text: string; bullet: string }> = {
    white: { border: 'hover:border-white/50', dot: 'bg-white/50 border-white', text: 'text-white', bullet: 'text-white/70' },
    violet: { border: 'hover:border-violet-500/50', dot: 'bg-violet-500/50 border-violet-500', text: 'text-violet-500', bullet: 'text-violet-500/70' },
    cyan: { border: 'hover:border-cyan-500/50', dot: 'bg-cyan-500/50 border-cyan-500', text: 'text-cyan-500', bullet: 'text-cyan-500/70' },
    emerald: { border: 'hover:border-emerald-500/50', dot: 'bg-emerald-500/50 border-emerald-500', text: 'text-emerald-500', bullet: 'text-emerald-500/70' },
    rose: { border: 'hover:border-rose-500/50', dot: 'bg-rose-500/50 border-rose-500', text: 'text-rose-500', bullet: 'text-rose-500/70' },
    amber: { border: 'hover:border-amber-500/50', dot: 'bg-amber-500/50 border-amber-500', text: 'text-amber-500', bullet: 'text-amber-500/70' },
    blue: { border: 'hover:border-blue-500/50', dot: 'bg-blue-500/50 border-blue-500', text: 'text-blue-500', bullet: 'text-blue-500/70' },
  };

  const colors = colorClasses[color];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
    },
  };

  return (
    <section className={cn('mb-16 sm:mb-20', className)}>
      <SectionHeader
        number={number}
        title={sectionTitle}
        color={color}
        icon={icon}
      />

      <motion.div
        className="mt-8 space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {items.map((item) => (
          <motion.article
            key={`${item.title}-${item.period}`}
            className={cn(
              'relative pl-6 border-l border-zinc-800 transition-colors',
              colors.border
            )}
            variants={itemVariants}
          >
            <div
              className={cn(
                'absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full border',
                colors.dot
              )}
              aria-hidden="true"
            />

            <span className={cn('inline-block text-xs font-mono mb-2', colors.text)}>
              {item.period}
            </span>

            <h3 className="font-syne font-bold text-lg text-white mb-1">
              <OutlineText as="span" size="xs" color={color} hoverFill>
                {item.title}
              </OutlineText>
            </h3>

            <p className="text-zinc-400 text-sm mb-3">
              {item.subtitle}
            </p>

            <ul className="space-y-1.5">
              {item.details.map((detail, detailIndex) => (
                <li
                  key={detailIndex}
                  className="flex items-start gap-2 text-sm text-zinc-400"
                >
                  <span className={cn('mt-0.5', colors.bullet)} aria-hidden="true">›</span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default TimelineSection;
