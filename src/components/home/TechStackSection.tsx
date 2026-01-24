import { cn } from '../../lib/utils';
import { OutlineText } from '../ui';
import { TechCard } from './TechCard';
import type { OutlineColor } from '../../config/theme';

interface TechItem {
  name: string;
  type: string;
  color: OutlineColor;
}

interface TechStackSectionProps {
  items: TechItem[];
  className?: string;
}

export function TechStackSection({ items, className }: TechStackSectionProps) {
  return (
    <div className={cn('max-w-5xl mx-auto w-full', className)}>
      {/* Header */}
      <p className="text-zinc-400 text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 font-mono">
        04 / Habilidades
      </p>
      <h2 className="font-black font-syne leading-none mb-6 sm:mb-8 md:mb-10">
        <OutlineText as="span" size="2xl" color="rose" hoverFill>
          TECH
        </OutlineText>{' '}
        <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl">STACK</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {items.map(item => (
          <TechCard key={item.name} name={item.name} type={item.type} color={item.color} />
        ))}
      </div>
    </div>
  );
}

export default TechStackSection;
