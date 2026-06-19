import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import type { SectionColor } from '../../../data/colors';
import { accentVar } from '../accent';

export type PhantomButtonVariant = 'solid' | 'outline';

interface BaseProps {
  children: ReactNode;
  variant?: PhantomButtonVariant;
  color?: SectionColor;
  className?: string;
}

interface PhantomButtonAsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit';
  target?: never;
  rel?: never;
}

interface PhantomButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
}

type PhantomButtonProps = PhantomButtonAsButton | PhantomButtonAsLink;

const PhantomButton = ({
  children,
  variant = 'solid',
  color = 'red',
  className,
  ...rest
}: PhantomButtonProps) => {
  const accent = accentVar(color);
  const isSolid = variant === 'solid';

  const style: CSSProperties = {
    transform: 'skewX(-10deg)',
    background: isSolid ? accent : 'transparent',
    border: isSolid ? '2px solid transparent' : `2px solid ${accent}`,
    color: isSolid ? 'var(--p5-bone)' : accent,
    boxShadow: isSolid ? '5px 5px 0 var(--p5-ink)' : 'none',
    padding: '12px 28px',
    fontFamily: 'var(--p5-font-tall)',
    fontSize: '16px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    transition: 'transform 0.2s var(--p5-ease-snap), box-shadow 0.2s var(--p5-ease-snap)',
  };

  const inner = (
    <span className="inline-block" style={{ transform: 'skewX(10deg)' }}>
      {children}
    </span>
  );

  const classes = cn('phantom-btn', className);

  if ('href' in rest && rest.href) {
    const { href, target, rel } = rest;
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
        style={style}
      >
        {inner}
      </a>
    );
  }

  const { onClick, type = 'button' } = rest as PhantomButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {inner}
    </button>
  );
};

export default PhantomButton;
