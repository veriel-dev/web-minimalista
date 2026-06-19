import type { CSSProperties } from 'react';
import { cn } from '../../../lib/utils';

export type RansomVariant = 'sticker' | 'ink' | 'red' | 'outline' | 'solid';

interface RansomTextProps {
  text: string;
  variant?: RansomVariant;
  size?: string;
  wrap?: boolean;
  accent?: string;
  className?: string;
  style?: CSSProperties;
}

const jit = (i: number, mod: number, span: number): number => ((i * 73 + 17) % mod) - span;

const RansomText = ({
  text,
  variant = 'sticker',
  size = '28px',
  wrap = false,
  accent = 'var(--p5-red)',
  className,
  style,
}: RansomTextProps) => {
  const isPlain = variant === 'outline' || variant === 'solid';

  return (
    <span
      className={cn('inline-flex items-center', wrap ? 'flex-wrap' : 'flex-nowrap', className)}
      style={{
        columnGap: isPlain ? 0 : 3,
        rowGap: 10,
        lineHeight: 1,
        ...style,
      }}
    >
      {Array.from(text).map((ch, i) => {
        if (ch === ' ') {
          return <span key={i} aria-hidden style={{ width: '0.32em' }} />;
        }
        const rot = jit(i, 11, 5);
        const dy = jit(i, 5, 2);
        const base: CSSProperties = {
          fontFamily: isPlain ? 'var(--p5-font-tall)' : 'var(--p5-font)',
          fontWeight: 400,
          fontSize: size,
          lineHeight: 0.9,
          display: 'inline-block',
          transform: `rotate(${rot}deg) translateY(${dy}px)`,
          padding: isPlain ? '0 0.01em' : '0.06em 0.14em',
          textTransform: 'uppercase',
          whiteSpace: 'pre',
        };
        let look: CSSProperties = {};
        if (variant === 'sticker') {
          look = {
            background: 'var(--p5-bone)',
            color: 'var(--p5-ink)',
            boxShadow: '2px 2px 0 rgba(0,0,0,0.55)',
          };
        } else if (variant === 'ink') {
          look = { background: 'var(--p5-ink)', color: 'var(--p5-bone)' };
        } else if (variant === 'red') {
          look = {
            background: accent,
            color: 'var(--p5-bone)',
            boxShadow: '2px 2px 0 var(--p5-ink)',
          };
        } else if (variant === 'outline') {
          look = {
            color: 'transparent',
            WebkitTextStroke: '2px var(--p5-bone)',
            letterSpacing: '0.01em',
          };
        } else {
          look = { color: 'var(--p5-bone)' };
        }
        return (
          <span key={i} style={{ ...base, ...look }}>
            {ch}
          </span>
        );
      })}
    </span>
  );
};

export default RansomText;
