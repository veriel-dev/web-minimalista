import { cn } from '../../lib/utils';
import { OutlineText } from '../ui';
import type { StatItem } from '../../data/pages/projects.outline';

interface StatsSectionProps {
  stats: StatItem[];
  className?: string;
}

export function StatsSection({ stats, className }: StatsSectionProps) {
  return (
    <div className={cn('max-w-5xl mx-auto w-full px-6', className)}>
      <div className="grid grid-cols-3 gap-4 sm:gap-8">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="text-center group cursor-pointer"
          >
            <OutlineText
              as="span"
              size="xl"
              color={stat.color}
              hoverFill
              className="font-black font-syne block mb-1 sm:mb-2"
            >
              {stat.value}
            </OutlineText>
            <span className="text-zinc-500 text-xs sm:text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
