import { TypeProject } from '../components/projectsPage/ProjectsSection';

const projects: TypeProject[] = [
  /* Clone Spring MVC */
  {
    title: 'Clone Spring MVC',
    description: 'Clone de esta mítica tecnología',
    technologies: ['Node', 'TypeScript', 'Reflect MetaData'],
    featured: true,
    github: 'https://github.com/veriel-dev/clone-spring-mvc',
    demo: 'https://clone-spring-mvc-production.up.railway.app/',
    img: '/img/clone-spring-mvc-preview.png',
    proyectType: 'backend',
    status: 'completed',
    slug: 'clone-spring-mvc',
    longDescription:
      'Implementación desde cero del patrón MVC inspirado en Spring Framework de Java, pero desarrollado completamente en Node.js con TypeScript. Este proyecto demuestra cómo funcionan internamente los decoradores, la inyección de dependencias y el enrutamiento basado en anotaciones que hacen tan popular a Spring.',
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
        reason:
          'Tipado estático necesario para implementar decoradores y reflexión de tipos',
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
    description: 'Juego básico por turnos en phaser ',
    technologies: ['Vite', 'TypeScript', 'Phaser'],
    featured: true,
    github: 'https://github.com/veriel-dev/screen-battle',
    demo: 'https://kodamon.veriel.dev/',
    img: '/img/kodamon-digital-battles-preview.png',
    proyectType: 'games',
    status: 'completed',
    slug: 'kodamon-digital-battles',
    longDescription:
      'Juego de batallas por turnos inspirado en los clásicos RPG japoneses. Los jugadores eligen su criatura digital y se enfrentan en combates estratégicos donde cada decisión cuenta. Desarrollado con Phaser 3, el proyecto explora mecánicas de juego, animaciones sprite y gestión de estados.',
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
    description: 'API REST para sistema de méritos grupales con votación en tiempo real',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    featured: true,
    github: 'https://github.com/veriel-dev/cunado-net-backend',
    demo: 'https://cunado-net-backend-production.up.railway.app/api/info',
    img: '/img/nodejs-logo.svg',
    proyectType: 'backend',
    status: 'completed',
    slug: 'merit-app-backend',
    longDescription:
      'Backend completo para una aplicación de gestión de méritos en grupos. Permite crear grupos, añadir miembros y realizar votaciones en tiempo real mediante WebSockets. Incluye autenticación, autorización y persistencia en MongoDB.',
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
    description:
      'Sistema de colas y tareas programadas con prioridades, DLQ y recuperación automática',
    technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Prisma'],
    featured: true,
    github: 'https://github.com/veriel-dev/task-scheduler-service',
    img: '/img/nodejs-logo.svg',
    proyectType: 'backend',
    status: 'progress',
    slug: 'task-scheduler-service',
    longDescription:
      'Servicio de programación de tareas empresarial con soporte para colas de mensajes, prioridades, reintentos automáticos y Dead Letter Queue (DLQ). Diseñado para manejar trabajos en segundo plano de forma confiable y escalable.',
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
    description: 'Web para visualizar tu web en diferentes resoluciones',
    technologies: ['React', 'Vite', 'React-Icons'],
    featured: false,
    proyectType: 'frontend',
    github: 'https://github.com/veriel-dev/responsive-web',
    demo: 'https://responsive-web-pi.vercel.app/',
    img: '/img/responsive-web-preview.png',
    status: 'completed',
    slug: 'responsive-web',
    longDescription:
      'Herramienta de desarrollo que permite previsualizar cualquier sitio web en múltiples resoluciones de pantalla simultáneamente. Útil para desarrolladores y diseñadores que necesitan verificar el comportamiento responsive de sus proyectos.',
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
    description: 'Maquetación de un antiguo periódico',
    technologies: ['Astro', 'CSS'],
    featured: false,
    proyectType: 'frontend',
    github: 'https://github.com/veriel-dev/web-personal-paper',
    demo: 'https://web-personal-paper.vercel.app/',
    img: '/img/old-newspaper-preview.png',
    status: 'completed',
    slug: 'old-newspaper',
    longDescription:
      'Ejercicio de maquetación CSS avanzada recreando el diseño de un periódico antiguo. El proyecto explora técnicas de layout como CSS Grid y multi-column para lograr un diseño editorial auténtico.',
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
    description: 'Diseño de cartas similares a la mítica serie YuGiOh',
    technologies: ['React', 'CSS', 'Atropos', 'Vite'],
    featured: true,
    proyectType: 'frontend',
    github: 'https://github.com/veriel-dev/cards-yu-gi-oh',
    demo: 'https://cards-yu-gi-oh.vercel.app/',
    img: '/img/card-yu-gi-oh_preview.png',
    status: 'completed',
    slug: 'clone-cards-yugioh',
    longDescription:
      'Recreación visual de las icónicas cartas del juego Yu-Gi-Oh! con efectos 3D interactivos. Cada carta responde al movimiento del cursor creando un efecto de profundidad y brillo holográfico similar a las cartas coleccionables reales.',
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
    description: 'Maquetación de la mítica video consola',
    technologies: ['CSS', 'Vite', 'JavaScript'],
    featured: false,
    proyectType: 'frontend',
    github: 'https://github.com/veriel-dev/gameboy-color',
    demo: 'https://gameboy-color.vercel.app/',
    img: '/img/gameboy-color-preview.png',
    status: 'completed',
    slug: 'gameboy-color',
    longDescription:
      'Recreación pixel-perfect de la Game Boy Color usando únicamente CSS. El proyecto demuestra el poder del CSS moderno para crear ilustraciones detalladas sin imágenes, incluyendo botones interactivos y la pantalla con efecto de encendido.',
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
    description: 'Single Page Application realizada con Web Component',
    technologies: ['Web Components', 'JavaScript', 'CSS'],
    featured: false,
    proyectType: 'frontend',
    github: 'https://github.com/veriel-dev/spa-vanilla-js',
    demo: 'https://spa-vanilla-js-beryl.vercel.app/',
    img: '/img/spa-web-component-preview.png',
    status: 'completed',
    slug: 'spa-web-component',
    longDescription:
      'Single Page Application construida exclusivamente con Web Components nativos, sin frameworks ni bibliotecas. Demuestra cómo crear aplicaciones modernas usando solo las APIs del navegador: Custom Elements, Shadow DOM y HTML Templates.',
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
    title: 'Web Personal',
    description: 'Mi actual web hasta el día de hoy',
    technologies: ['React', 'Wouter', 'Vite', 'FramerMotion', 'Tailwind'],
    proyectType: 'frontend',
    featured: false,
    github: 'https://github.com/veriel-dev/web-minimalista',
    demo: 'https://veriel.dev/',
    status: 'completed',
    img: '/img/web-personal.png',
    slug: 'web-personal',
    longDescription:
      'Portfolio personal con diseño minimalista y temática Matrix. Desarrollado con React y Tailwind CSS, incluye animaciones fluidas con Framer Motion y un diseño completamente responsive.',
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
  },
  /* Veriel SO */
  {
    title: 'Veriel SO',
    description: 'Portfolio retro interactivo',
    technologies: ['React', 'TypeScript', 'CSS Modules'],
    proyectType: 'frontend',
    featured: false,
    demo: 'https://os.veriel.dev/',
    img: '/img/veriel-so-preview.png',
    status: 'completed',
    slug: 'veriel-so',
    longDescription:
      'Portfolio interactivo que simula un sistema operativo retro. Los visitantes pueden interactuar con ventanas arrastrables, explorar carpetas con proyectos y experimentar una interfaz nostálgica inspirada en sistemas operativos clásicos.',
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
    description: 'Editor de cartas estilo yu-gi-oh',
    technologies: ['React', 'Canvas', 'TypeScript', 'Astro', 'IndexedDB'],
    featured: false,
    proyectType: 'frontend',
    demo: 'https://sugioh.veriel.dev/',
    status: 'completed',
    slug: 'cartas-sugioh',
    longDescription:
      'Editor visual que permite crear cartas personalizadas con el estilo de Yu-Gi-Oh!. Los usuarios pueden subir imágenes, editar textos y exportar sus creaciones. Las cartas se guardan localmente usando IndexedDB.',
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
