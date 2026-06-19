export interface TechDetail {
  name: string;
  reason: string;
}

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
  features?: string[];
  techDetails?: TechDetail[];
  challenges?: string;
  learnings?: string;
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
    features: [
      'Despliegues con un click a tres entornos (DES/PRE/PRO) con tracking en tiempo real vía SSE',
      'Rollback instantáneo desde artefactos versionados en R2',
      'Promote release → main con PR automático y guard de cobertura ≥ 80%',
      'Onboarding de proyectos: crea repo, DNS, Pages y secrets en un único pipeline',
      'Dashboard reactivo con TanStack Query y tema claro/oscuro + 5 variantes',
      'App de escritorio nativa multi-plataforma con Tauri 2',
      'Webhooks de GitHub que disparan workflows reutilizables',
      'Persistencia con Bun SQLite (WAL, prepared statements)',
    ],
    techDetails: [
      {
        name: 'Bun',
        reason:
          'Runtime ultrarrápido con SQLite nativo, server persistente y soporte de TypeScript sin compilar',
      },
      {
        name: 'Hono',
        reason: 'Framework web ligero sobre Bun, ideal para API REST con SSE y webhooks de GitHub',
      },
      {
        name: 'React 19',
        reason:
          'Dashboard reactivo con las últimas APIs (transitions, actions) sin Redux ni Zustand',
      },
      {
        name: 'TanStack Query',
        reason: 'Cache servidor, revalidación y SSE como única fuente de estado remoto',
      },
      {
        name: 'Tauri 2',
        reason: 'Bundle nativo multi-plataforma reutilizando el dashboard web sin Electron',
      },
      {
        name: 'SQLite',
        reason:
          'Bun SQLite con WAL para persistencia local de pipelines, jobs y deploys sin infra adicional',
      },
    ],
    challenges:
      'Orquestar GitHub Actions, Cloudflare Pages, Workers, R2 y DNS desde una sola API manteniendo el progreso de cada deploy en vivo a través de SSE y persistido en SQLite, con rollback instantáneo desde artefactos versionados.',
    learnings:
      'Profundicé en Bun como runtime productivo, SSE para tracking en tiempo real de pipelines distribuidos, y empaquetado de aplicaciones de escritorio con Tauri 2 reutilizando el mismo SPA web.',
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
    features: [
      'Pokédex completa con búsqueda, filtros por tipo y detalle por Pokémon',
      'Team Builder con persistencia local (localStorage) y exportación/importación',
      'Damage Calculator con la fórmula de Gen 9: STAB, climas, terrenos, screens, ítems, habilidades',
      'Meta dashboard con uso, core pairs, top moves y win rates derivados de los chaos JSON de Smogon',
      'Battle Bot para simular combates rápidos',
      'Pipeline de datos (PokeAPI + Smogon) ejecutado offline con scripts Node',
      '0 KB de framework JS en el cliente — solo HTML, CSS y vanilla JS',
      'Tests con Vitest + happy-dom y coverage ≥ 80% sobre src/lib/',
    ],
    techDetails: [
      {
        name: 'Astro',
        reason:
          'SSG file-based con frontmatter en Node y scripts vanilla en el cliente, ideal para un toolkit estático con interactividad puntual',
      },
      {
        name: 'TypeScript',
        reason:
          'Modo estricto con astro check para tipar el motor de daño, las naturalezas y los datasets de PokeAPI',
      },
      {
        name: 'Vitest',
        reason:
          'Tests unitarios con happy-dom sobre las funciones puras (damage-calc, naturalezas, navegación) con threshold del 80%',
      },
      {
        name: 'Biome',
        reason: 'Lint y format unificados con configuración compartida y rendimiento muy alto',
      },
    ],
    challenges:
      'Implementar la fórmula completa de daño de Gen 9 (incluyendo doubles spread, weather, terrain, screens, ítems y habilidades) compartiendo el mismo motor entre el render del servidor y el script cliente del calculator, sin duplicar lógica.',
    learnings:
      'Profundicé en los tres contextos de ejecución de Astro (frontmatter, template y client script), en cómo serializar datos del build al cliente vía <script type="application/json">, y en construir un pipeline de datos reproducible a partir de los chaos JSON de Smogon.',
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
    features: [
      'Escaneo de URLs con progreso en tiempo real',
      'Resultados agrupados por categoría con nivel de severidad',
      'Historial de escaneos con paginación y eliminación',
      'Internacionalización completa (español e inglés)',
      'Traducciones específicas por vulnerabilidad',
      'Contexto del escaneo: servidor, TLS, tecnologías detectadas, WAF',
      'Diseño responsive con tema oscuro',
    ],
    techDetails: [
      {
        name: 'React',
        reason: 'UI reactiva para mostrar resultados de escaneo en tiempo real',
      },
      {
        name: 'TypeScript',
        reason: 'Tipado estricto para los modelos de vulnerabilidades y respuestas de la API',
      },
      {
        name: 'Vite',
        reason: 'Build tool con proxy de desarrollo hacia la API y HMR instantáneo',
      },
      {
        name: 'Tailwind CSS',
        reason: 'Sistema de diseño con variables CSS personalizadas para colores de severidad',
      },
      {
        name: 'React Query',
        reason: 'Gestión de estado servidor con polling automático durante los escaneos',
      },
    ],
    challenges:
      'Diseñar un sistema de polling eficiente que actualice los resultados sin sobrecargar la API, y crear un sistema de i18n ligero que traduzca tanto la UI como las descripciones de cada vulnerabilidad.',
    learnings:
      'Aprendí a construir interfaces de monitorización en tiempo real con React Query, y a diseñar sistemas de internacionalización con traducciones dinámicas basadas en patrones.',
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
    features: [
      '8 analizadores: cabeceras, TLS, cookies, DNS, CORS, mixed-content, info disclosure, tech fingerprint',
      'Protección SSRF con validación DNS de IPs privadas',
      'Rate limiting in-memory (5 req/min por IP)',
      'Límite de escaneos concurrentes (máx. 5)',
      'Migraciones automáticas con Drizzle ORM',
      'Graceful shutdown con espera de escaneos en curso',
      'Sanitización de errores antes de almacenar en base de datos',
      'Health check endpoint para monitorización',
    ],
    techDetails: [
      {
        name: 'Hono',
        reason: 'Framework web ultraligero con tipado nativo y middleware composable',
      },
      {
        name: 'TypeScript',
        reason: 'Clean Architecture con tipos estrictos en domain, application e infrastructure',
      },
      {
        name: 'SQLite',
        reason: 'Base de datos embebida sin infraestructura externa, persistida en volumen Railway',
      },
      {
        name: 'Drizzle ORM',
        reason: 'ORM con migraciones tipadas y zero-overhead sobre better-sqlite3',
      },
      {
        name: 'Node.js',
        reason: 'Acceso a módulos nativos (tls, dns) necesarios para los analizadores de seguridad',
      },
    ],
    challenges:
      'Implementar la protección SSRF resolviendo DNS antes de cada escaneo para bloquear IPs privadas, y manejar correctamente los redirects que podrían apuntar a direcciones internas.',
    learnings:
      'Profundicé en Clean Architecture aplicada a TypeScript, seguridad de APIs (SSRF, rate limiting), y despliegue de aplicaciones con SQLite persistente en Railway.',
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
    features: [
      'Decoradores personalizados para rutas (@Get, @Post, @Put, @Delete)',
      'Inyección de dependencias con contenedor IoC',
      'Middleware system configurable',
      'Validación de parámetros automática',
      'Manejo de errores centralizado',
      'Hot reload en desarrollo',
    ],
    techDetails: [
      {
        name: 'Node.js',
        reason: 'Entorno de ejecución que permite usar JavaScript/TypeScript en el servidor',
      },
      {
        name: 'TypeScript',
        reason: 'Tipado estático necesario para implementar decoradores y reflexión de tipos',
      },
      {
        name: 'Reflect Metadata',
        reason:
          'API de reflexión para almacenar y recuperar metadatos en tiempo de ejecución, esencial para los decoradores',
      },
    ],
    challenges:
      'El mayor desafío fue implementar el sistema de inyección de dependencias sin usar bibliotecas externas, entendiendo a fondo cómo TypeScript maneja los decoradores y la metadata de reflexión.',
    learnings:
      'Aprendí en profundidad cómo funcionan los decoradores en TypeScript, el patrón IoC (Inversión de Control), y cómo frameworks como Spring o NestJS implementan su "magia" internamente.',
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
    features: [
      'Sistema de combate por turnos',
      'Selección de criaturas con stats únicos',
      'Animaciones de ataque y defensa',
      'Sistema de puntos de vida y daño',
      'Interfaz de usuario retro',
      'Efectos de sonido y música',
    ],
    techDetails: [
      {
        name: 'Vite',
        reason: 'Bundler ultrarrápido con HMR para desarrollo ágil de juegos',
      },
      {
        name: 'TypeScript',
        reason: 'Tipado fuerte para manejar la complejidad de estados y mecánicas del juego',
      },
      {
        name: 'Phaser',
        reason: 'Framework de juegos 2D maduro con excelente documentación y comunidad activa',
      },
    ],
    challenges:
      'Implementar un sistema de turnos fluido manteniendo la sincronización entre la lógica del juego y las animaciones visuales fue complejo.',
    learnings:
      'Profundicé en el desarrollo de videojuegos, game loops, máquinas de estados finitos y cómo Phaser maneja escenas y sprites.',
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
    features: [
      'API RESTful completa con CRUD de usuarios y grupos',
      'Autenticación JWT con refresh tokens',
      'Votaciones en tiempo real con Socket.io',
      'Sistema de roles y permisos',
      'Validación de datos con Joi',
      'Documentación con Swagger',
    ],
    techDetails: [
      {
        name: 'Node.js',
        reason: 'Ideal para aplicaciones en tiempo real por su modelo de I/O no bloqueante',
      },
      {
        name: 'Express',
        reason: 'Framework minimalista y flexible para construir APIs REST',
      },
      {
        name: 'MongoDB',
        reason: 'Base de datos NoSQL flexible para esquemas que evolucionan',
      },
      {
        name: 'Socket.io',
        reason: 'Biblioteca robusta para comunicación bidireccional en tiempo real',
      },
    ],
    challenges:
      'Sincronizar el estado entre múltiples clientes conectados y manejar reconexiones sin perder votos fue el reto principal.',
    learnings:
      'Aprendí patrones de diseño para aplicaciones en tiempo real, manejo de salas en Socket.io y estrategias de reconexión.',
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
    features: [
      'Programación de tareas con cron expressions',
      'Sistema de colas con prioridades',
      'Reintentos automáticos con backoff exponencial',
      'Dead Letter Queue para tareas fallidas',
      'Dashboard de monitorización',
      'API REST para gestión de tareas',
    ],
    techDetails: [
      {
        name: 'TypeScript',
        reason: 'Tipado estricto para un sistema crítico que no puede fallar silenciosamente',
      },
      {
        name: 'Express',
        reason: 'API REST para gestionar y monitorizar las tareas programadas',
      },
      {
        name: 'PostgreSQL',
        reason: 'Base de datos relacional robusta para persistencia de tareas y logs',
      },
      {
        name: 'Redis',
        reason: 'Almacenamiento en memoria para colas de alta velocidad y bloqueos distribuidos',
      },
      {
        name: 'Prisma',
        reason: 'ORM moderno con migraciones y tipado automático desde el esquema',
      },
    ],
    challenges:
      'Garantizar exactly-once delivery en un sistema distribuido y manejar fallos de nodos sin perder tareas.',
    learnings:
      'Estoy aprendiendo sobre sistemas distribuidos, patrones de mensajería y cómo construir servicios resilientes.',
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
    features: [
      'Previsualización en múltiples resoluciones',
      'Dispositivos predefinidos (móvil, tablet, desktop)',
      'Resoluciones personalizadas',
      'Rotación de viewport',
      'URL editable en tiempo real',
    ],
    techDetails: [
      {
        name: 'React',
        reason: 'Gestión eficiente de múltiples iframes y estado de la aplicación',
      },
      {
        name: 'Vite',
        reason: 'Desarrollo rápido con HMR instantáneo',
      },
      {
        name: 'React-Icons',
        reason: 'Iconos consistentes para la interfaz de usuario',
      },
    ],
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
    features: [
      'Layout multi-columna estilo periódico',
      'Tipografía vintage cuidadosamente seleccionada',
      'Ornamentos y separadores decorativos',
      'Diseño completamente responsive',
      'Optimización de rendimiento con Astro',
    ],
    techDetails: [
      {
        name: 'Astro',
        reason: 'Genera HTML estático sin JavaScript innecesario, ideal para contenido editorial',
      },
      {
        name: 'CSS',
        reason: 'CSS puro para demostrar dominio de Grid, Flexbox y tipografía web',
      },
    ],
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
    features: [
      'Efecto 3D parallax interactivo',
      'Brillo holográfico dinámico',
      'Diseño fiel al original',
      'Múltiples tipos de cartas (monstruo, magia, trampa)',
      'Animaciones suaves con CSS',
    ],
    techDetails: [
      {
        name: 'React',
        reason: 'Componentización de cada carta con su estado independiente',
      },
      {
        name: 'CSS',
        reason: 'Efectos visuales avanzados con transforms 3D y gradientes',
      },
      {
        name: 'Atropos',
        reason: 'Biblioteca especializada en efectos parallax 3D touch-friendly',
      },
      {
        name: 'Vite',
        reason: 'Bundler moderno para desarrollo rápido',
      },
    ],
    challenges:
      'Lograr el efecto holográfico realista requirió experimentar con múltiples capas de gradientes y blend modes.',
    learnings:
      'Profundicé en CSS 3D transforms, perspective y cómo crear efectos visuales complejos sin canvas.',
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
    features: [
      'Diseño 100% CSS sin imágenes',
      'Botones interactivos con feedback táctil',
      'Efecto de pantalla LCD',
      'Colores fieles al hardware original',
      'Animación de encendido',
    ],
    techDetails: [
      {
        name: 'CSS',
        reason: 'Demostración de CSS art y técnicas avanzadas de diseño',
      },
      {
        name: 'Vite',
        reason: 'Setup mínimo para desarrollo rápido',
      },
      {
        name: 'JavaScript',
        reason: 'Interactividad básica para los botones',
      },
    ],
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
    features: [
      'Routing sin bibliotecas externas',
      'Componentes encapsulados con Shadow DOM',
      'Sistema de eventos personalizado',
      'Lazy loading de componentes',
      'Estado global simple',
    ],
    techDetails: [
      {
        name: 'Web Components',
        reason: 'APIs nativas del navegador para crear elementos HTML personalizados',
      },
      {
        name: 'JavaScript',
        reason: 'Vanilla JS para demostrar que no siempre se necesita un framework',
      },
      {
        name: 'CSS',
        reason: 'Estilos encapsulados dentro de cada componente',
      },
    ],
    challenges:
      'Implementar un router funcional y gestión de estado sin ninguna dependencia externa.',
    learnings:
      'Comprendí a fondo cómo funcionan los Web Components y por qué los frameworks abstraen ciertas complejidades.',
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
    features: [
      'Diseño minimalista con tema Matrix',
      'Animaciones fluidas con Framer Motion',
      'Navegación con Wouter (router ligero)',
      'SEO optimizado con React Helmet',
      'Modo oscuro por defecto',
      'Completamente responsive',
    ],
    techDetails: [
      {
        name: 'React',
        reason: 'Biblioteca UI para construir interfaces componentizadas',
      },
      {
        name: 'Wouter',
        reason: 'Router minimalista (~1.5kb) perfecto para SPAs pequeñas',
      },
      {
        name: 'Vite',
        reason: 'Build tool ultrarrápido con excelente DX',
      },
      {
        name: 'Framer Motion',
        reason: 'Animaciones declarativas y performantes',
      },
      {
        name: 'Tailwind',
        reason: 'Utility-first CSS para desarrollo rápido y consistente',
      },
    ],
    challenges:
      'Organizar más de 50 componentes de forma mantenible, estableciendo una arquitectura clara que facilitara la evolución del proyecto.',
    learnings:
      'Aprendí a crear un design system consistente desde cero, definiendo tokens, variantes y patrones reutilizables.',
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
    features: [
      'Ventanas arrastrables y redimensionables',
      'Sistema de archivos simulado',
      'Barra de tareas funcional',
      'Iconos de escritorio interactivos',
      'Efectos de sonido retro',
      'Menú de inicio desplegable',
    ],
    techDetails: [
      {
        name: 'React',
        reason: 'Gestión de estado complejo para múltiples ventanas',
      },
      {
        name: 'TypeScript',
        reason: 'Tipado necesario para manejar eventos de drag & drop',
      },
      {
        name: 'CSS Modules',
        reason: 'Estilos encapsulados para cada componente del SO',
      },
    ],
    challenges:
      'Implementar el sistema de ventanas con z-index dinámico y detección de colisiones para el snap.',
    learnings:
      'Aprendí sobre drag & drop APIs, gestión de focus y cómo recrear comportamientos de UI complejos.',
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
    features: [
      'Editor visual WYSIWYG',
      'Subida de imágenes personalizadas',
      'Múltiples templates de cartas',
      'Exportación a PNG de alta calidad',
      'Guardado local con IndexedDB',
      'Galería de cartas creadas',
    ],
    techDetails: [
      {
        name: 'React',
        reason: 'UI interactiva para el editor de cartas',
      },
      {
        name: 'Canvas',
        reason: 'Renderizado y exportación de las cartas a imagen',
      },
      {
        name: 'TypeScript',
        reason: 'Tipado para el modelo de datos de las cartas',
      },
      {
        name: 'Astro',
        reason: 'Framework para la estructura de la aplicación',
      },
      {
        name: 'IndexedDB',
        reason: 'Almacenamiento local de cartas sin necesidad de backend',
      },
    ],
    challenges:
      'Renderizar texto con saltos de línea automáticos y efectos visuales en Canvas manteniendo la calidad.',
    learnings:
      'Profundicé en la API de Canvas 2D, manipulación de imágenes y almacenamiento offline con IndexedDB.',
  },
];

export default projects;
