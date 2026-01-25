import { cn } from '../../lib/utils';
import { OutlineText } from '../ui';
import type { OutlineColor } from '../../config/theme';

interface TechCardProps {
  name: string;
  type: string;
  color: OutlineColor;
}

const borderColorClasses: Record<OutlineColor, string> = {
  white: 'hover:border-zinc-500/50',
  violet: 'hover:border-violet-500/50',
  cyan: 'hover:border-cyan-500/50',
  emerald: 'hover:border-emerald-500/50',
  rose: 'hover:border-rose-500/50',
  amber: 'hover:border-amber-500/50',
  blue: 'hover:border-blue-500/50',
};

export function TechCard({ name, type, color }: TechCardProps) {
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
      <p className="text-zinc-400 text-[10px] sm:text-xs">{type}</p>
    </div>
  );
}

export default TechCard;
