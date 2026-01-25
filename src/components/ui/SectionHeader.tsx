import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { OutlineText, type OutlineColor } from './OutlineText';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  color?: OutlineColor;
  icon?: LucideIcon;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
  className?: string;
}

export function SectionHeader({
  number,
  title,
  subtitle,
  color = 'white',
  icon: Icon,
  align = 'left',
  children,
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <header className={cn('mb-12', alignClasses[align], className)}>
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon size={20} className="text-zinc-500" />}
        {number && <span className="text-zinc-500 font-mono text-sm">{number}</span>}
      </div>
      <OutlineText as="h2" size="xl" color={color} hoverFill>
        {title}
      </OutlineText>
      {subtitle && <p className="mt-4 text-zinc-400 text-lg font-inter max-w-2xl">{subtitle}</p>}
      {children}
    </header>
  );
}

export default SectionHeader;
