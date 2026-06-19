export interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  img?: string;
  projectType: 'frontend' | 'backend' | 'games';
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
  /* VulnScan Web */
  {
    title: 'VulnScan Web',
    description:
      'Frontend del escáner pasivo de vulnerabilidades: cabeceras, TLS, cookies, DNS, CORS.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Query'],
    featured: true,
    github: 'https://github.com/veriel-cloud/vulnscan',
    demo: 'https://vulnscan.veriel.dev/',
    img: '/img/vulnscan-preview.webp',
    projectType: 'frontend',
    status: 'completed',
    slug: 'vulnscan-web',
    longDescription:
      'Frontend del escáner pasivo de vulnerabilidades web VulnScan. Permite analizar cualquier URL pública detectando problemas de seguridad en cabeceras HTTP, configuración TLS, cookies, DNS, CORS y más. Incluye progreso en tiempo real, historial de escaneos con paginación e internacionalización (ES/EN).',
  },
  /* VulnScan API */
  {
    title: 'VulnScan API',
    description: 'Backend del escáner pasivo con 8 analizadores en paralelo y protección SSRF.',
    technologies: ['Hono', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Node.js'],
    featured: true,
    github: 'https://github.com/veriel-cloud/vulnscan',
    demo: 'https://api.vulnscan.veriel.dev/health',
    img: '/img/hono-logo.webp',
    projectType: 'backend',
    status: 'completed',
    slug: 'vulnscan-api',
    longDescription:
      'Backend del escáner pasivo de vulnerabilidades VulnScan. Arquitectura Clean Architecture con motor de análisis que ejecuta 8 analizadores de seguridad en paralelo. Incluye protección SSRF con resolución DNS, rate limiting, control de concurrencia y graceful shutdown. Desplegado en Railway con volumen persistente para SQLite.',
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
  /* Merit App Backend */
  {
    title: 'Merit App Backend',
    description: 'API REST de méritos grupales con votaciones en tiempo real vía WebSockets.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    featured: true,
    github: 'https://github.com/veriel-dev/cunado-net-backend',
    demo: 'https://cunado-net-backend-production.up.railway.app/api/info',
    img: '/img/nodejs-logo.svg',
    projectType: 'backend',
    status: 'completed',
    slug: 'merit-app-backend',
    longDescription:
      'Backend para una app de méritos en grupos: crear grupos, añadir miembros y votar en tiempo real vía WebSockets. Autenticación JWT con refresh tokens, validación con Joi, roles y permisos, persistencia en MongoDB y documentación con Swagger.',
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
  /* Responsive Web */
  {
    title: 'Responsive Web',
    description: 'Previsualizador de webs en múltiples viewports a la vez para QA responsive.',
    technologies: ['React', 'Vite', 'React-Icons'],
    featured: false,
    projectType: 'frontend',
    github: 'https://github.com/veriel-dev/responsive-web',
    demo: 'https://responsive-web-pi.vercel.app/',
    img: '/img/responsive-web-preview.webp',
    status: 'completed',
    slug: 'responsive-web',
    longDescription:
      'Mini-herramienta de QA: cargas una URL y la previsualizas en varios viewports a la vez (móvil, tablet, desktop o resoluciones personalizadas) con rotación y edición de URL en vivo. Pensada para revisar el comportamiento responsive sin tener que cambiar DevTools cada dos segundos.',
  },
  /* Old newspaper */
  {
    title: 'Old newspaper',
    description: 'Maquetación tipo periódico vintage solo con CSS Grid y multi-column.',
    technologies: ['Astro', 'CSS'],
    featured: false,
    projectType: 'frontend',
    github: 'https://github.com/veriel-dev/web-personal-paper',
    demo: 'https://web-personal-paper.vercel.app/',
    img: '/img/old-newspaper-preview.webp',
    status: 'completed',
    slug: 'old-newspaper',
    longDescription:
      'Ejercicio de maquetación editorial: recrear un periódico antiguo solo con CSS Grid, multi-column y tipografía web. Sin JavaScript, sin trampas. Astro genera el HTML estático y el CSS hace el trabajo.',
  },
  /* Clone Cards Yu-gi-oh */
  {
    title: 'Clone Cards Yu-Gi-oh',
    description: 'Cartas Yu-Gi-Oh! con parallax 3D y brillo holográfico que siguen al cursor.',
    technologies: ['React', 'CSS', 'Atropos', 'Vite'],
    featured: true,
    projectType: 'frontend',
    github: 'https://github.com/veriel-dev/cards-yu-gi-oh',
    demo: 'https://cards-yu-gi-oh.vercel.app/',
    img: '/img/card-yu-gi-oh_preview.webp',
    status: 'completed',
    slug: 'clone-cards-yugioh',
    longDescription:
      'Recreación visual de las cartas icónicas de Yu-Gi-Oh! con parallax 3D y brillo holográfico que reacciona al cursor — como las cartas coleccionables reales. CSS 3D transforms con perspective y gradientes en capas, sin canvas.',
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
  /* SPA Web Component */
  {
    title: 'SPA Web Component',
    description: 'SPA con routing, state y lazy loading solo con Web Components nativos.',
    technologies: ['Web Components', 'JavaScript', 'CSS'],
    featured: false,
    projectType: 'frontend',
    github: 'https://github.com/veriel-dev/spa-vanilla-js',
    demo: 'https://spa-vanilla-js-beryl.vercel.app/',
    img: '/img/spa-web-component-preview.webp',
    status: 'completed',
    slug: 'spa-web-component',
    longDescription:
      'SPA con routing, estado global y lazy loading construida solo con APIs nativas del navegador — Custom Elements, Shadow DOM y HTML Templates. Cero frameworks, cero bibliotecas. Ejercicio para entender por qué los frameworks abstraen lo que abstraen.',
  },
  /* Web Personal */
  {
    title: 'Old Web Personal',
    description: 'Versión anterior de veriel.dev con tema Matrix y diseño outline.',
    technologies: ['React', 'Wouter', 'Vite', 'FramerMotion', 'Tailwind'],
    projectType: 'frontend',
    featured: false,
    github: 'https://github.com/veriel-dev/web-minimalista/tree/legacy/matrix',
    demo: 'https://old.veriel.dev/',
    status: 'completed',
    img: '/img/web-personal.webp',
    slug: 'old-web-personal',
    longDescription:
      'Portfolio anterior con tema Matrix: React + Tailwind, animaciones declarativas con Framer Motion y router Wouter (~1.5kb). Más de 50 componentes con design system propio — el precedente del actual diseño Phantom Menu.',
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
