import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../../../lib/utils';

interface StarBurstProps {
  size?: string;
  color?: string;
  spin?: number;
  fine?: boolean;
  className?: string;
  children?: ReactNode;
}

const starPolygon = (spikes: number, outer: number, inner: number): string => {
  const pts: string[] = [];
  const total = spikes * 2;
  for (let k = 0; k < total; k++) {
    const r = k % 2 === 0 ? outer : inner;
    const a = (Math.PI / spikes) * k - Math.PI / 2;
    const x = 50 + r * Math.cos(a);
    const y = 50 + r * Math.sin(a);
    pts.push(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
  }
  return `polygon(${pts.join(',')})`;
};

const BURST = starPolygon(16, 50, 33);
const BURST_FINE = starPolygon(24, 50, 40);

const StarBurst = ({
  size = '200px',
  color = 'var(--p5-bone)',
  spin = 0,
  fine = false,
  className,
  children,
}: StarBurstProps) => {
  const shapeStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: color,
    clipPath: fine ? BURST_FINE : BURST,
  };

  if (spin > 0) {
    (shapeStyle as Record<string, string>)['--p5-spin-duration'] = `${spin}s`;
  }

  return (
    <div aria-hidden className={cn('relative', className)} style={{ width: size, height: size }}>
      <div className={spin > 0 ? 'p5-burst-spin' : undefined} style={shapeStyle} />
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      )}
    </div>
  );
};

export default StarBurst;
