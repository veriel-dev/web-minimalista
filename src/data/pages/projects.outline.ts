import type { OutlineColor } from '../../components/outlineUI/OutlineText';

export interface ProjectOutline {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  status: 'completed' | 'progress';
  featured: boolean;
  github?: string;
  demo?: string;
  img?: string;
}

export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'games';

export interface FilterOption {
  value: ProjectCategory;
  label: string;
  color: OutlineColor;
}

export interface StatItem {
  value: string;
  label: string;
  color: OutlineColor;
}

export const projectsOutlineData = {
  hero: {
    title: 'PROYECTOS',
    subtitle: 'Código que cuenta historias',
    description:
      'Cada proyecto es un desafío resuelto, una idea materializada. Explora mi portfolio de soluciones full-stack.',
  },
  stats: [
    { value: '12+', label: 'Proyectos', color: 'violet' as OutlineColor },
    { value: '30+', label: 'Tecnologías', color: 'cyan' as OutlineColor },
    { value: '4+', label: 'Años', color: 'emerald' as OutlineColor },
  ],
  filters: [
    { value: 'all' as ProjectCategory, label: 'Todos', color: 'white' as OutlineColor },
    { value: 'frontend' as ProjectCategory, label: 'Frontend', color: 'cyan' as OutlineColor },
    { value: 'backend' as ProjectCategory, label: 'Backend', color: 'emerald' as OutlineColor },
    { value: 'games' as ProjectCategory, label: 'Games', color: 'rose' as OutlineColor },
  ],
  projects: [
    {
      slug: 'clone-spring-mvc',
      title: 'Clone Spring MVC',
      description: 'Clone de esta mítica tecnología',
      technologies: ['Node', 'TypeScript', 'Reflect MetaData'],
      category: 'backend' as ProjectCategory,
      status: 'completed' as const,
      featured: true,
      github: 'https://github.com/veriel-dev/clone-spring-mvc',
      demo: 'https://clone-spring-mvc-production.up.railway.app/',
      img: '/img/clone-spring-mvc-preview.png',
    },
    {
      slug: 'kodamon-digital-battles',
      title: 'Kodamon - Digital Battles',
      description: 'Juego básico por turnos en Phaser',
      technologies: ['Vite', 'TypeScript', 'Phaser'],
      category: 'games' as ProjectCategory,
      status: 'completed' as const,
      featured: true,
      github: 'https://github.com/veriel-dev/screen-battle',
      demo: 'https://kodamon.veriel.dev/',
      img: '/img/kodamon-digital-battles-preview.png',
    },
    {
      slug: 'merit-app-backend',
      title: 'Merit App Backend',
      description: 'API REST para sistema de méritos con votación en tiempo real',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      category: 'backend' as ProjectCategory,
      status: 'completed' as const,
      featured: true,
      github: 'https://github.com/veriel-dev/cunado-net-backend',
      demo: 'https://cunado-net-backend-production.up.railway.app/api/info',
      img: '/img/nodejs-logo.svg',
    },
    {
      slug: 'task-scheduler-service',
      title: 'Task Scheduler Service',
      description: 'Sistema de colas y tareas programadas con prioridades y DLQ',
      technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Prisma'],
      category: 'backend' as ProjectCategory,
      status: 'progress' as const,
      featured: true,
      github: 'https://github.com/veriel-dev/task-scheduler-service',
      img: '/img/nodejs-logo.svg',
    },
    {
      slug: 'clone-cards-yugioh',
      title: 'Clone Cards Yu-Gi-oh',
      description: 'Diseño de cartas con efectos 3D interactivos',
      technologies: ['React', 'CSS', 'Atropos', 'Vite'],
      category: 'frontend' as ProjectCategory,
      status: 'completed' as const,
      featured: true,
      github: 'https://github.com/veriel-dev/cards-yu-gi-oh',
      demo: 'https://cards-yu-gi-oh.vercel.app/',
      img: '/img/card-yu-gi-oh_preview.png',
    },
    {
      slug: 'responsive-web',
      title: 'Responsive Web',
      description: 'Herramienta para visualizar webs en diferentes resoluciones',
      technologies: ['React', 'Vite', 'React-Icons'],
      category: 'frontend' as ProjectCategory,
      status: 'completed' as const,
      featured: false,
      github: 'https://github.com/veriel-dev/responsive-web',
      demo: 'https://responsive-web-pi.vercel.app/',
      img: '/img/responsive-web-preview.png',
    },
    {
      slug: 'old-newspaper',
      title: 'Old Newspaper',
      description: 'Maquetación CSS de un antiguo periódico',
      technologies: ['Astro', 'CSS'],
      category: 'frontend' as ProjectCategory,
      status: 'completed' as const,
      featured: false,
      github: 'https://github.com/veriel-dev/web-personal-paper',
      demo: 'https://web-personal-paper.vercel.app/',
      img: '/img/old-newspaper-preview.png',
    },
    {
      slug: 'gameboy-color',
      title: 'Game Boy Color',
      description: 'Maquetación CSS de la mítica consola',
      technologies: ['CSS', 'Vite', 'JavaScript'],
      category: 'frontend' as ProjectCategory,
      status: 'completed' as const,
      featured: false,
      github: 'https://github.com/veriel-dev/gameboy-color',
      demo: 'https://gameboy-color.vercel.app/',
      img: '/img/gameboy-color-preview.png',
    },
    {
      slug: 'spa-web-component',
      title: 'SPA Web Component',
      description: 'SPA realizada con Web Components nativos',
      technologies: ['Web Components', 'JavaScript', 'CSS'],
      category: 'frontend' as ProjectCategory,
      status: 'completed' as const,
      featured: false,
      github: 'https://github.com/veriel-dev/spa-vanilla-js',
      demo: 'https://spa-vanilla-js-beryl.vercel.app/',
      img: '/img/spa-web-component-preview.png',
    },
    {
      slug: 'veriel-so',
      title: 'Veriel SO',
      description: 'Portfolio interactivo estilo sistema operativo retro',
      technologies: ['React', 'TypeScript', 'CSS Modules'],
      category: 'frontend' as ProjectCategory,
      status: 'completed' as const,
      featured: false,
      demo: 'https://os.veriel.dev/',
      img: '/img/veriel-so-preview.png',
    },
    {
      slug: 'cartas-sugioh',
      title: 'Cartas SU-Gi-Oh',
      description: 'Editor de cartas estilo Yu-Gi-Oh',
      technologies: ['React', 'Canvas', 'TypeScript', 'Astro', 'IndexedDB'],
      category: 'frontend' as ProjectCategory,
      status: 'completed' as const,
      featured: false,
      demo: 'https://sugioh.veriel.dev/',
    },
    {
      slug: 'web-personal',
      title: 'Web Personal',
      description: 'Este portfolio que estás viendo ahora',
      technologies: ['React', 'Wouter', 'Vite', 'Framer Motion', 'Tailwind'],
      category: 'frontend' as ProjectCategory,
      status: 'completed' as const,
      featured: false,
      github: 'https://github.com/veriel-dev/web-minimalista',
      demo: 'https://veriel.dev/',
      img: '/img/web-personal.png',
    },
  ] as ProjectOutline[],
};
