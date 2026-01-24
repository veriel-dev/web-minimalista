import { cn } from '../../lib/utils';
import { OutlineText } from '../ui';
import type { StatItem } from '../../data/pages/home.outline';

interface AboutSectionProps {
  title: string;
  paragraphs: string[];
  stats: StatItem[];
  className?: string;
}

export function AboutSection({ title, paragraphs, stats, className }: AboutSectionProps) {
  const titleParts = title.split(' ');
  const titleFirst = titleParts[0];
  const titleRest = titleParts.slice(1).join(' ');

  return (
    <div className={cn('max-w-5xl mx-auto w-full px-6', className)}>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left column - Text */}
        <div>
          <p className="text-zinc-400 text-xs uppercase tracking-[0.3em] mb-4 font-mono">
            02 / Sobre mí
          </p>
          <h2 className="font-black font-syne leading-none mb-6 md:mb-8">
            <OutlineText as="span" size="2xl" color="cyan" className="block" hoverFill>
              {titleFirst}
            </OutlineText>
            {titleRest && (
              <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                {titleRest}
              </span>
            )}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={cn(
                'leading-relaxed text-sm sm:text-base',
                index === 0 ? 'text-zinc-400 mb-4 sm:mb-6' : 'text-zinc-500',
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="group border-b border-zinc-800 pb-4 sm:pb-6 cursor-pointer"
            >
              <div className="flex justify-between items-end gap-4">
                <OutlineText
                  as="span"
                  size="xl"
                  color={stat.color}
                  hoverFill
                  className="font-black font-syne"
                >
                  {stat.value}
                </OutlineText>
                <span className="text-zinc-500 text-xs sm:text-sm text-right">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
