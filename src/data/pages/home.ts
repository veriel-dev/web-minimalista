import type { SectionColor } from '../colors';

export interface StatItem {
  value: string;
  label: string;
  color: SectionColor;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'languages' | 'devops';
  color: SectionColor;
}

export interface TechItem {
  name: string;
  type: string;
  color: SectionColor;
}

export interface ProjectPreviewItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
  color: SectionColor;
  slug: string;
}

export interface SocialLinkItem {
  platform: 'github' | 'linkedin' | 'email';
  href: string;
  label: string;
}

export const homeOutlineData = {
  hero: {
    name: 'Veriel.Dev',
    title: 'Senior Software',
    titleHighlight: 'Engineer',
    subtitle:
      'Software Engineer con 5+ años en lo enterprise (Oracle WebCenter Sites) y el resto del tiempo construyendo desde cero con TypeScript, Java y Go.',
    ctaPrimary: { label: 'Ver Proyectos', href: '/projects' },
    ctaSecondary: { label: 'Contactar', href: '#contact' },
  },

  about: {
    title: 'SOBRE MÍ',
    paragraphs: [
      'Aterricé en el código por hartazgo, no por vocación. Empecé a aprender a programar harto de la carrera de Física y el reto técnico me enganchó. Llevo aquí 5 años.',
      'Tres obsesiones se repiten en cada proyecto: construir desde cero para entender qué pasa por debajo, arquitectura que se lee sola y sistema de diseño hasta el último pixel.',
      'Las recreaciones (Game Boy, Yu-Gi-Oh!, OS retro, periódico) son ejercicios de gimnasio. ¿Puedo hacerlo solo con CSS? ¿Sin librerías? ¿Pixel-perfect? Eso. Sin pretensiones.',
    ],
    stats: [
      { value: '5+', label: 'Años de experiencia', color: 'violet' as SectionColor },
      { value: '20+', label: 'Proyectos profesionales', color: 'cyan' as SectionColor },
      { value: '16', label: 'Proyectos personales', color: 'emerald' as SectionColor },
    ],
  },

  techStack: {
    items: [
      // Languages
      { name: 'TypeScript', type: 'Language', color: 'cyan' as SectionColor },
      { name: 'JavaScript', type: 'Language', color: 'amber' as SectionColor },
      { name: 'Java', type: 'Language', color: 'rose' as SectionColor },
      { name: 'Go', type: 'Language', color: 'cyan' as SectionColor },
      { name: 'Groovy', type: 'Language', color: 'rose' as SectionColor },
      // Frontend
      { name: 'React', type: 'Frontend Library', color: 'violet' as SectionColor },
      { name: 'Angular', type: 'Frontend Framework', color: 'rose' as SectionColor },
      { name: 'Astro', type: 'Frontend Framework', color: 'violet' as SectionColor },
      { name: 'Tailwind', type: 'CSS Framework', color: 'cyan' as SectionColor },
      { name: 'Vite', type: 'Build Tool', color: 'amber' as SectionColor },
      // Backend
      { name: 'Node.js', type: 'Backend Runtime', color: 'emerald' as SectionColor },
      { name: 'Bun', type: 'Backend Runtime', color: 'amber' as SectionColor },
      { name: 'Spring', type: 'Java Framework', color: 'emerald' as SectionColor },
      { name: 'Express', type: 'Node Framework', color: 'emerald' as SectionColor },
      { name: 'Hono', type: 'Node Framework', color: 'amber' as SectionColor },
      { name: 'OWCS', type: 'Enterprise CMS', color: 'rose' as SectionColor },
      // Database
      { name: 'PostgreSQL', type: 'SQL Database', color: 'blue' as SectionColor },
      { name: 'MongoDB', type: 'NoSQL Database', color: 'emerald' as SectionColor },
      { name: 'OracleSQL', type: 'Enterprise Database', color: 'rose' as SectionColor },
      { name: 'SQLite', type: 'Embedded SQL', color: 'cyan' as SectionColor },
      { name: 'Redis', type: 'In-memory Store', color: 'rose' as SectionColor },
      { name: 'Drizzle', type: 'ORM', color: 'emerald' as SectionColor },
      // Tools & Desktop & Games
      { name: 'Tauri 2', type: 'Desktop Apps', color: 'amber' as SectionColor },
      { name: 'Phaser', type: 'Game Engine', color: 'violet' as SectionColor },
      // DevOps
      { name: 'Git', type: 'Version Control', color: 'amber' as SectionColor },
      { name: 'Docker', type: 'Containerization', color: 'blue' as SectionColor },
      { name: 'Cloudflare', type: 'Edge / Hosting', color: 'amber' as SectionColor },
      { name: 'GitHub Actions', type: 'CI/CD', color: 'violet' as SectionColor },
    ],
  },

  projectsPreview: {
    viewAllLabel: 'VER TODOS LOS PROYECTOS',
    viewAllHref: '/projects',
    items: [
      {
        number: '01',
        title: 'Clone Spring MVC',
        description: 'Framework MVC inspirado en Spring, construido desde cero.',
        tags: ['Java', 'TypeScript'],
        color: 'violet' as SectionColor,
        slug: 'clone-spring-mvc',
      },
      {
        number: '02',
        title: 'Merit App Backend',
        description: 'API REST para gestión de méritos empresariales.',
        tags: ['Node.js', 'Express'],
        color: 'cyan' as SectionColor,
        slug: 'merit-app-backend',
      },
      {
        number: '03',
        title: 'Kodamon',
        description: 'Juego de batallas por turnos estilo RPG.',
        tags: ['React', 'TypeScript'],
        color: 'emerald' as SectionColor,
        slug: 'kodamon-digital-battles',
      },
    ] as ProjectPreviewItem[],
  },

  contact: {
    title: 'HABLEMOS',
    subtitle:
      '¿Construimos algo? Para hablar de trabajo, de código o de cualquier idea rara que tengas.',
    email: 'vmordiales@gmail.com',
    socialLinks: [
      { platform: 'github', href: 'https://github.com/veriel-dev', label: 'GitHub' },
      {
        platform: 'linkedin',
        href: 'https://www.linkedin.com/in/v%C3%ADctor-manuel-ordiales-garc%C3%ADa/',
        label: 'LinkedIn',
      },
      { platform: 'email', href: 'mailto:vmordiales@gmail.com', label: 'Email' },
    ] as SocialLinkItem[],
  },
};
