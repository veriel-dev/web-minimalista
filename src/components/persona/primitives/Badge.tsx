import type { ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import type { SectionColor } from '../../../data/colors';
import { accentVar } from '../accent';

export type BadgeVariant = 'default' | 'status';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  color?: SectionColor;
  className?: string;
}

const Badge = ({ children, variant = 'default', color = 'white', className }: BadgeProps) => {
  const accent = accentVar(color);
  const isStatus = variant === 'status';

  return (
    <span
      className={cn('inline-block', className)}
      style={{
        transform: 'skewX(-8deg)',
        background: isStatus ? accent : 'transparent',
        border: isStatus ? 'none' : '1px solid rgba(245,245,244,0.22)',
        color: isStatus ? 'var(--p5-ink)' : 'var(--p5-bone)',
        padding: '4px 12px',
        fontFamily: 'var(--font-inter)',
        fontSize: '11px',
        letterSpacing: '0.06em',
        fontWeight: 600,
        textTransform: 'uppercase',
      }}
    >
      <span className="inline-block" style={{ transform: 'skewX(8deg)' }}>
        {children}
      </span>
    </span>
  );
};

export default Badge;
