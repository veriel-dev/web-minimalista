import type { ReactNode } from 'react';
import { useEnter } from '../../../hooks/useEnter';

interface FanRevealProps {
  index: number;
  children: ReactNode;
}

const FanReveal = ({ index, children }: FanRevealProps) => {
  const on = useEnter(index * 55);

  return (
    <div
      style={{
        opacity: on ? 1 : 0,
        transform: on ? 'translateX(0)' : 'translateX(70px)',
        transition: 'opacity 0.45s var(--p5-ease-snap), transform 0.45s var(--p5-ease-snap)',
      }}
    >
      {children}
    </div>
  );
};

export default FanReveal;
