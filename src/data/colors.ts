export type SectionColor =
  | 'white'
  | 'violet'
  | 'cyan'
  | 'emerald'
  | 'rose'
  | 'amber'
  | 'blue'
  | 'red';

export const sectionColors: Record<Exclude<SectionColor, 'red'>, string> = {
  white: '#ffffff',
  violet: '#a78bfa',
  cyan: '#22d3ee',
  emerald: '#34d399',
  rose: '#fb7185',
  amber: '#fbbf24',
  blue: '#60a5fa',
};
