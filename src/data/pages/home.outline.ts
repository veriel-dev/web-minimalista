import type { OutlineColor } from '../../config/theme'

export interface StatItem {
  value: string
  label: string
  color: OutlineColor
}

export interface SkillItem {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'languages' | 'devops'
  color: OutlineColor
}

export interface TechItem {
  name: string
  type: string
  color: OutlineColor
}

export interface ExperienceItem {
  company: string
  position: string
  period: { start: string; end?: string }
  description: string[]
  current?: boolean
}

export interface ProjectPreviewItem {
  number: string
  title: string
  description: string
  tags: string[]
  color: OutlineColor
  slug: string
}

export interface SocialLinkItem {
  platform: 'github' | 'linkedin' | 'email'
  href: string
  label: string
}

export const homeOutlineData = {
  hero: {
    name: 'VÍCTOR ORDIALES',
    title: 'Full Stack',
    titleHighlight: 'Developer',
    subtitle: 'Del código a la experiencia: Construyendo soluciones que importan',
    ctaPrimary: { label: 'Ver Proyectos', href: '#projects' },
    ctaSecondary: { label: 'Contactar', href: '#contact' },
  },

  about: {
    title: 'SOBRE MÍ',
    paragraphs: [
      'Desarrollador Full Stack con 4+ años de experiencia en aplicaciones web empresariales.',
      'Dominio de TypeScript, Node.js, Java y Spring Framework. Experiencia en bases de datos SQL y NoSQL. Apasionado por crear experiencias web únicas y funcionales.',
    ],
    stats: [
      { value: '4+', label: 'Años de experiencia', color: 'violet' as OutlineColor },
      { value: '30+', label: 'Proyectos completados', color: 'cyan' as OutlineColor },
      { value: '20+', label: 'Tecnologías dominadas', color: 'emerald' as OutlineColor },
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
      { name: 'React', type: 'Frontend Library', color: 'violet' as OutlineColor },
      { name: 'TypeScript', type: 'Language', color: 'cyan' as OutlineColor },
      { name: 'Node.js', type: 'Backend Runtime', color: 'emerald' as OutlineColor },
      { name: 'Java', type: 'Backend Language', color: 'rose' as OutlineColor },
      { name: 'Spring', type: 'Java Framework', color: 'white' as OutlineColor },
      { name: 'Docker', type: 'Containerization', color: 'white' as OutlineColor },
      { name: 'PostgreSQL', type: 'Database', color: 'white' as OutlineColor },
      { name: 'Tailwind', type: 'CSS Framework', color: 'white' as OutlineColor },
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
        color: 'violet' as OutlineColor,
        slug: 'clone-spring-mvc',
      },
      {
        number: '02',
        title: 'Merit App Backend',
        description: 'API REST para gestión de méritos empresariales.',
        tags: ['Node.js', 'Express'],
        color: 'cyan' as OutlineColor,
        slug: 'merit-app-backend',
      },
      {
        number: '03',
        title: 'Task Scheduler',
        description: 'Servicio de programación de tareas con cron jobs.',
        tags: ['Java', 'Spring Boot'],
        color: 'emerald' as OutlineColor,
        slug: 'task-scheduler-service',
      },
      {
        number: '04',
        title: 'Kodamon',
        description: 'Juego de batallas por turnos estilo RPG.',
        tags: ['React', 'TypeScript'],
        color: 'rose' as OutlineColor,
        slug: 'kodamon-digital-battles',
      },
    ] as ProjectPreviewItem[],
  },

  contact: {
    title: 'HABLEMOS',
    subtitle: '¿Tienes un proyecto en mente? Me encantaría saber más y ver cómo puedo ayudarte.',
    email: 'hola@veriel.dev',
    socialLinks: [
      { platform: 'github', href: 'https://github.com/veriel-dev', label: 'GitHub' },
      { platform: 'linkedin', href: 'https://linkedin.com/in/veriel-dev', label: 'LinkedIn' },
      { platform: 'email', href: 'mailto:hola@veriel.dev', label: 'Email' },
    ] as SocialLinkItem[],
  },
}
