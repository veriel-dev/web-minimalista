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

export interface ExperienceItem {
  company: string;
  position: string;
  period: { start: string; end?: string };
  description: string[];
  current?: boolean;
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
    subtitle: 'Ingeniería de software para entornos empresariales y productos web',
    ctaPrimary: { label: 'Ver Proyectos', href: '/projects' },
    ctaSecondary: { label: 'Contactar', href: '#contact' },
  },

  about: {
    title: 'SOBRE MÍ',
    paragraphs: [
      'Software Engineer con 4+ años de experiencia construyendo aplicaciones web empresariales.',
      'TypeScript y Java como lenguajes principales. Enfocado en arquitectura de sistemas que escalan y se mantienen bien.',
    ],
    stats: [
      { value: '4+', label: 'Años de experiencia', color: 'violet' as SectionColor },
      { value: '30+', label: 'Proyectos completados', color: 'cyan' as SectionColor },
      { value: '20+', label: 'Tecnologías dominadas', color: 'emerald' as SectionColor },
    ],
  },

  experience: {
    title: 'EXPERIENCIA',
    items: [
      {
        company: 'Alvea Soluciones Tecnológicas S.L',
        position: 'Desarrollador OWCS / Spring Boot',
        period: { start: 'May 2025' },
        current: true,
        description: [
          'Proyecto: Web Pública Aena',
          'Arquitectura e implementación de soluciones empresariales con OWCS y Spring Boot',
          'Optimización de rendimiento en aplicaciones críticas',
          'Gestión de relaciones con clientes y soporte técnico especializado',
        ],
      },
      {
        company: 'Viewnext S.A',
        position: 'Desarrollador Frontend',
        period: { start: 'Abr 2025', end: 'May 2025' },
        description: [
          'Proyecto: Portal de Contratación Naturgy',
          'Desarrollo de interfaces con React',
          'Implementación de mejoras UX/UI',
        ],
      },
      {
        company: 'Viewnext S.A',
        position: 'Desarrollador OWCS + Spring Boot',
        period: { start: 'Feb 2023', end: 'Mar 2025' },
        description: [
          'Proyectos: Portales Públicos y Áreas Clientes Naturgy',
          'Soluciones con JavaScript/TypeScript y Java',
          'Arquitectura e implementación en OWCS/Spring Framework',
        ],
      },
      {
        company: 'Viewnext S.A',
        position: 'Desarrollador OWCS',
        period: { start: 'Ago 2021', end: 'Dic 2023' },
        description: [
          'Proyecto: Portales Públicos Naturgy',
          'Diseño e implementación en Oracle WebCenter Sites',
          'Gestión y optimización del CMS',
        ],
      },
      {
        company: 'eCapture3D S.L',
        position: 'Desarrollador en I+D',
        period: { start: 'Abr 2021', end: 'Jun 2021' },
        description: [
          'Modelos predictivos con Machine Learning y Deep Learning',
          'Análisis de datos climáticos de AEMET',
        ],
      },
    ] as ExperienceItem[],
  },

  techStack: {
    items: [
      // Frontend
      { name: 'React', type: 'Frontend Library', color: 'violet' as SectionColor },
      { name: 'Angular', type: 'Frontend Framework', color: 'rose' as SectionColor },
      { name: 'Astro', type: 'Frontend Framework', color: 'violet' as SectionColor },
      { name: 'Tailwind', type: 'CSS Framework', color: 'cyan' as SectionColor },
      { name: 'Vite', type: 'Build Tool', color: 'amber' as SectionColor },
      // Backend
      { name: 'Node.js', type: 'Backend Runtime', color: 'emerald' as SectionColor },
      { name: 'Spring', type: 'Java Framework', color: 'emerald' as SectionColor },
      { name: 'Express', type: 'Node Framework', color: 'emerald' as SectionColor },
      { name: 'Hono', type: 'Node Framework', color: 'amber' as SectionColor },
      { name: 'OWCS', type: 'Enterprise CMS', color: 'rose' as SectionColor },
      // Database
      { name: 'PostgreSQL', type: 'SQL Database', color: 'blue' as SectionColor },
      { name: 'MongoDB', type: 'NoSQL Database', color: 'emerald' as SectionColor },
      { name: 'OracleSQL', type: 'Enterprise Database', color: 'rose' as SectionColor },
      // Languages
      { name: 'TypeScript', type: 'Language', color: 'cyan' as SectionColor },
      { name: 'Java', type: 'Language', color: 'rose' as SectionColor },
      { name: 'Go', type: 'Language', color: 'cyan' as SectionColor },
      // DevOps
      { name: 'Git', type: 'Version Control', color: 'amber' as SectionColor },
      { name: 'Docker', type: 'Containerization', color: 'blue' as SectionColor },
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
    subtitle: '¿Tienes un proyecto en mente? Me encantaría saber más y ver cómo puedo ayudarte.',
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
