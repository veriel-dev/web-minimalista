export const outlineColors = {
  white: '#ffffff',
  violet: '#a78bfa',
  cyan: '#22d3ee',
  emerald: '#34d399',
  rose: '#fb7185',
  amber: '#fbbf24',
  blue: '#60a5fa',
} as const;

export type OutlineColor = keyof typeof outlineColors;

export const sectionColors: Record<string, OutlineColor> = {
  hero: 'violet',
  about: 'cyan',
  experience: 'emerald',
  skills: 'rose',
  projects: 'amber',
  contact: 'blue',
};

export const fonts = {
  heading: 'Syne, sans-serif',
  body: 'Inter, sans-serif',
} as const;

export const transitions = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
