import type { SectionColor } from '../../data/colors';

export const accentVar = (color: SectionColor): string => {
  if (color === 'red') return 'var(--p5-red)';
  if (color === 'white') return 'var(--p5-bone)';
  return `var(--color-accent-${color})`;
};
