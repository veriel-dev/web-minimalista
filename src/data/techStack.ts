import type { SectionColor } from './colors';

export interface TechItem {
  name: string;
  type: string;
  color: SectionColor;
}

export const techStack: TechItem[] = [
  // Languages
  { name: 'TypeScript', type: 'Lenguaje', color: 'cyan' },
  { name: 'JavaScript', type: 'Lenguaje', color: 'amber' },
  { name: 'Java', type: 'Lenguaje', color: 'rose' },
  { name: 'Go', type: 'Lenguaje', color: 'cyan' },
  { name: 'Groovy', type: 'Lenguaje', color: 'rose' },
  // Frontend
  { name: 'React', type: 'Librería frontend', color: 'violet' },
  { name: 'Angular', type: 'Framework frontend', color: 'rose' },
  { name: 'Astro', type: 'Framework frontend', color: 'violet' },
  { name: 'Tailwind', type: 'Framework CSS', color: 'cyan' },
  { name: 'Vite', type: 'Empaquetador', color: 'amber' },
  // Backend
  { name: 'Node.js', type: 'Entorno de ejecución', color: 'emerald' },
  { name: 'Bun', type: 'Entorno de ejecución', color: 'amber' },
  { name: 'Spring', type: 'Framework Java', color: 'emerald' },
  { name: 'Express', type: 'Framework Node', color: 'emerald' },
  { name: 'Hono', type: 'Framework Node', color: 'amber' },
  { name: 'OWCS', type: 'CMS empresarial', color: 'rose' },
  // Database
  { name: 'PostgreSQL', type: 'Base de datos SQL', color: 'blue' },
  { name: 'MongoDB', type: 'Base de datos NoSQL', color: 'emerald' },
  { name: 'OracleSQL', type: 'Base de datos empresarial', color: 'rose' },
  { name: 'SQLite', type: 'SQL embebida', color: 'cyan' },
  { name: 'Redis', type: 'Almacén en memoria', color: 'rose' },
  { name: 'Drizzle', type: 'ORM', color: 'emerald' },
  // Desktop & Games
  { name: 'Tauri 2', type: 'Apps de escritorio', color: 'amber' },
  { name: 'Phaser', type: 'Motor de juegos', color: 'violet' },
  // DevOps
  { name: 'Git', type: 'Control de versiones', color: 'amber' },
  { name: 'Docker', type: 'Contenedores', color: 'blue' },
  { name: 'Cloudflare', type: 'Edge / alojamiento', color: 'amber' },
  { name: 'GitHub Actions', type: 'CI/CD', color: 'violet' },
];
