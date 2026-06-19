import type { SectionColor } from './colors';

export interface TechItem {
  name: string;
  type: string;
  color: SectionColor;
}

export const techStack: TechItem[] = [
  // Languages
  { name: 'TypeScript', type: 'Language', color: 'cyan' },
  { name: 'JavaScript', type: 'Language', color: 'amber' },
  { name: 'Java', type: 'Language', color: 'rose' },
  { name: 'Go', type: 'Language', color: 'cyan' },
  { name: 'Groovy', type: 'Language', color: 'rose' },
  // Frontend
  { name: 'React', type: 'Frontend Library', color: 'violet' },
  { name: 'Angular', type: 'Frontend Framework', color: 'rose' },
  { name: 'Astro', type: 'Frontend Framework', color: 'violet' },
  { name: 'Tailwind', type: 'CSS Framework', color: 'cyan' },
  { name: 'Vite', type: 'Build Tool', color: 'amber' },
  // Backend
  { name: 'Node.js', type: 'Backend Runtime', color: 'emerald' },
  { name: 'Bun', type: 'Backend Runtime', color: 'amber' },
  { name: 'Spring', type: 'Java Framework', color: 'emerald' },
  { name: 'Express', type: 'Node Framework', color: 'emerald' },
  { name: 'Hono', type: 'Node Framework', color: 'amber' },
  { name: 'OWCS', type: 'Enterprise CMS', color: 'rose' },
  // Database
  { name: 'PostgreSQL', type: 'SQL Database', color: 'blue' },
  { name: 'MongoDB', type: 'NoSQL Database', color: 'emerald' },
  { name: 'OracleSQL', type: 'Enterprise Database', color: 'rose' },
  { name: 'SQLite', type: 'Embedded SQL', color: 'cyan' },
  { name: 'Redis', type: 'In-memory Store', color: 'rose' },
  { name: 'Drizzle', type: 'ORM', color: 'emerald' },
  // Desktop & Games
  { name: 'Tauri 2', type: 'Desktop Apps', color: 'amber' },
  { name: 'Phaser', type: 'Game Engine', color: 'violet' },
  // DevOps
  { name: 'Git', type: 'Version Control', color: 'amber' },
  { name: 'Docker', type: 'Containerization', color: 'blue' },
  { name: 'Cloudflare', type: 'Edge / Hosting', color: 'amber' },
  { name: 'GitHub Actions', type: 'CI/CD', color: 'violet' },
];
