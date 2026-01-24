import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';
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
      <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 font-mono">
        04 / Habilidades
      </p>
      <h2 className="font-black font-syne leading-none mb-6 sm:mb-8 md:mb-10">
        <OutlineText as="span" size="2xl" color="rose">
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

interface TechCardProps {
  name: string;
  type: string;
  color: OutlineColor;
}

function TechCard({ name, type, color }: TechCardProps) {
  const borderColorClasses: Record<OutlineColor, string> = {
    white: 'hover:border-zinc-500/50',
    violet: 'hover:border-violet-500/50',
    cyan: 'hover:border-cyan-500/50',
    emerald: 'hover:border-emerald-500/50',
    rose: 'hover:border-rose-500/50',
  };

  return (
    <div
      className={cn(
        'group p-3 sm:p-4 md:p-6 border border-zinc-800 rounded-lg sm:rounded-xl transition cursor-pointer',
        borderColorClasses[color],
      )}
    >
      <OutlineText as="h3" size="sm" color={color} hoverFill className="mb-1">
        {name}
      </OutlineText>
      <p className="text-zinc-600 text-[10px] sm:text-xs">{type}</p>
    </div>
  );
}

export default TechStackSection;
