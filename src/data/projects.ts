export interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  img?: string;
  projectType: 'frontend' | 'backend' | 'fullstack' | 'games';
  status: 'completed' | 'progress';
  slug: string;
  longDescription?: string;
}

const projects: Project[] = [
  /* Veriel Ops */
  {
    title: 'Veriel Ops',
    description:
      'Panel DevOps tipo Vercel para mi infraestructura: despliegues, rollbacks y dominios en un click.',
    technologies: ['Bun', 'Hono', 'React 19', 'TanStack Query', 'Tauri 2', 'SQLite'],
    featured: true,
    github: 'https://github.com/veriel-cloud/veriel-ops',
    img: '/img/veriel-ops-preview.webp',
    projectType: 'backend',
    status: 'completed',
    slug: 'veriel-ops',
    longDescription:
      'Plataforma de DevOps que orquesta GitHub, Cloudflare Pages/Workers, R2 y DNS detrás de una API en Bun + Hono y un dashboard en React 19 que también funciona como app de escritorio multi-plataforma con Tauri 2. Pensado como panel unificado tipo Vercel para infraestructura propia: despliegues con un click a tres entornos (DES/PRE/PRO), rollback instantáneo desde artefactos en R2 y onboarding de proyectos en un único pipeline.',
  },
  /* Pokémon Champions (ChampDex) */
  {
    title: 'Pokémon Champions',
    description: 'Toolkit competitivo VGC: team builder, damage calc con fórmula Gen 9 y meta.',
    technologies: ['Astro', 'TypeScript', 'Vitest', 'Biome'],
    featured: true,
    demo: 'https://pokemon-champions.veriel.dev/',
    img: '/img/pokemon-champions-preview.webp',
    projectType: 'frontend',
    status: 'completed',
    slug: 'pokemon-champions',
    longDescription:
      'Toolkit competitivo para el formato VGC de Pokémon Champions (Gen 9, dobles 4v4). Sitio estático con Astro: 0 KB de framework JS en el cliente — toda la interactividad es vanilla JS. Incluye Pokédex, Team Builder con persistencia local, Damage Calculator con la fórmula completa de Gen 9 (climas, terrenos, screens, ítems, habilidades) y meta dashboard sobre los datos chaos de Smogon.',
  },
  /* VulnScan */
  {
    title: 'VulnScan',
    description:
      'Escáner pasivo de vulnerabilidades web: cabeceras, TLS, cookies, DNS y CORS con 8 analizadores en paralelo.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Hono',
      'SQLite',
      'Drizzle ORM',
    ],
    featured: true,
    github: 'https://github.com/veriel-cloud/vulnscan',
    demo: 'https://vulnscan.veriel.dev/',
    img: '/img/vulnscan-preview.webp',
    projectType: 'fullstack',
    status: 'completed',
    slug: 'vulnscan',
    longDescription:
      'Escáner pasivo de vulnerabilidades web. Analiza cualquier URL pública y detecta problemas de seguridad en cabeceras HTTP, configuración TLS, cookies, DNS, CORS y más. Frontend en React con progreso en tiempo real, historial paginado e internacionalización (ES/EN). Backend en Hono con Clean Architecture: 8 analizadores en paralelo, protección SSRF con resolución DNS, rate limiting, control de concurrencia y graceful shutdown, desplegado en Railway con SQLite persistente.',
  },
  /* Clone Spring MVC */
  {
    title: 'Clone Spring MVC',
    description:
      'Clon de Spring MVC desde cero en Node + TypeScript: decoradores, IoC y middleware.',
    technologies: ['Node', 'TypeScript', 'Reflect MetaData'],
    featured: true,
    github: 'https://github.com/veriel-dev/clone-spring-mvc',
    demo: 'https://clone-spring-mvc-production.up.railway.app/',
    img: '/img/clone-spring-mvc-preview.webp',
    projectType: 'backend',
    status: 'completed',
    slug: 'clone-spring-mvc',
    longDescription:
      'Implementación desde cero del patrón MVC de Spring en Node + TypeScript: decoradores de ruta (@Get, @Post, @Put, @Delete), contenedor IoC para inyección de dependencias, middleware composable y validación automática de parámetros. Hecho para entender por dentro la "magia" que hacen Spring o NestJS.',
  },
  /* Kodamon */
  {
    title: 'Kodamon - Digital Battles',
    description: 'Batallas por turnos estilo RPG japonés clásico con Phaser 3.',
    technologies: ['Vite', 'TypeScript', 'Phaser'],
    featured: true,
    github: 'https://github.com/veriel-dev/screen-battle',
    demo: 'https://kodamon.veriel.dev/',
    img: '/img/kodamon-digital-battles-preview.webp',
    projectType: 'games',
    status: 'completed',
    slug: 'kodamon-digital-battles',
    longDescription:
      'Batallas por turnos inspiradas en los RPG japoneses de toda la vida. Selección de criaturas con stats únicos, sistema de daño, animaciones sprite y máquina de estados — todo sobre Phaser 3 con TypeScript estricto.',
  },
  /* Task Scheduler Service */
  {
    title: 'Task Scheduler Service',
    description: 'Cola de tareas con prioridades, reintentos exponenciales y Dead Letter Queue.',
    technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Prisma'],
    featured: true,
    github: 'https://github.com/veriel-dev/task-scheduler-service',
    img: '/img/nodejs-logo.svg',
    projectType: 'backend',
    status: 'progress',
    slug: 'task-scheduler-service',
    longDescription:
      'Servicio de scheduling para trabajos en segundo plano: colas con prioridad, reintentos automáticos con backoff exponencial, Dead Letter Queue para fallos persistentes y dashboard de monitorización. PostgreSQL para persistencia, Redis para cola en memoria y bloqueos distribuidos.',
  },
  /* Game Boy Color */
  {
    title: 'Game Boy Color',
    description: 'Game Boy Color recreada pixel-perfect 100% en CSS, sin una sola imagen.',
    technologies: ['CSS', 'Vite', 'JavaScript'],
    featured: false,
    projectType: 'frontend',
    github: 'https://github.com/veriel-dev/gameboy-color',
    demo: 'https://gameboy-color.vercel.app/',
    img: '/img/gameboy-color-preview.webp',
    status: 'completed',
    slug: 'gameboy-color',
    longDescription:
      'Game Boy Color recreada con CSS puro: cero imágenes, todo a base de gradientes, box-shadows y formas. Botones interactivos con feedback táctil, pantalla LCD con tinte verdoso y animación de encendido.',
  },
  /* Veriel SO */
  {
    title: 'Veriel SO',
    description: 'Portfolio retro: SO clásico con ventanas arrastrables y barra de tareas.',
    technologies: ['React', 'TypeScript', 'CSS Modules'],
    projectType: 'frontend',
    featured: false,
    demo: 'https://os.veriel.dev/',
    img: '/img/veriel-so-preview.webp',
    status: 'completed',
    slug: 'veriel-so',
    longDescription:
      'Portfolio con forma de sistema operativo retro. Ventanas arrastrables y redimensionables, sistema de archivos simulado, barra de tareas funcional, iconos de escritorio y menú de inicio. El reto: gestión de z-index dinámico, focus y snap entre ventanas.',
  },
  /* Cartas SU-Gi-Oh */
  {
    title: 'Cartas SU-Gi-Oh',
    description: 'Editor de cartas Yu-Gi-Oh!: sube imagen, edita y exporta PNG. Sin backend.',
    technologies: ['React', 'Canvas', 'TypeScript', 'Astro', 'IndexedDB'],
    featured: false,
    projectType: 'frontend',
    demo: 'https://sugioh.veriel.dev/',
    status: 'completed',
    slug: 'cartas-sugioh',
    longDescription:
      'Editor visual WYSIWYG para crear cartas personalizadas estilo Yu-Gi-Oh!. Sube imagen, edita textos sobre varios templates y exporta a PNG de alta calidad. Galería con las cartas creadas guardadas localmente con IndexedDB — todo sin backend.',
  },
];

export default projects;
