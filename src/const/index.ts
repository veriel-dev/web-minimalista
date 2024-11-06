import { TypeProject } from "../components/projectsPage/ProjectsSection";

const enum Tags {
  REACT = "React",
  JS = "Java Script",
  TS = "Type Script",
  NODE = "Node",
  TAILWIND = "Tailwind",
  NEXT = "Next.js",
  MONGO = "Mongo DB",
  EXPRESS = "Express",
  VITE = "Vite",
  CSS = "Css Vanilla",
  ASTRO = "Astro",
  WEB_COMPONENTS = "Web Component",
}

export const homePage = {
  heroSection: {
    title: "Veriel.dev",
    description:
      "Desarrollador que transforma desafíos de código en experiencias web modernas",
    contact: "Contactar",
    cv: {
      text: "Descargar CV",
      to: "/curriculum-vitae",
    },
  },
  aboutSection: {
    title: "Sobre Mí",
    description:
      "Desarrollador Full Stack con 3+ años de experiencia en aplicaciones web empresariales. Dominio de TypeScript, Node.js, Java y Spring Framework. Experiencia en bases de datos SQL y NoSQL",
    stats: [
      {
        label: "Experiencia",
        value: 3,
        plus: "+ años",
      },
      {
        label: "Proyectos/Evol",
        value: 30,
        plus: "+",
      },
      {
        label: "Tecnologías",
        value: 20,
        plus: "+",
      },
    ],
  },
  skillsSection: {
    title: "Habilidades Técnicas",
    technologies: {
      frontend: [
        {
          name: "React",
          description:
            "Biblioteca Java Script para construir interfaces de usuario",
        },
        {
          name: "Astro",
          description:
            "Framework de JS para crear sitios estáticos de manera rápida",
        },
        {
          name: "Next",
          description: "MetaFramework de React ",
        },
        {
          name: "HTML/CSS",
          description: "Tecnologías base para desarrollo web",
        },
        {
          name: "Tailwind",
          level: 85,
          description: "Framework CSS utility-first",
        },
        {
          name: "Vite",
          description: "Empaquetador moderno de proyectos JavaScript",
        },
        {
          name: "Web Components",
          description:
            "Forma nativa de crear elementos personalizables y encapsulados",
        },
      ],
      backend: [
        {
          name: "Node",
          description: "Entorno de ejecución para Java Script",
        },
        {
          name: "Spring",
          description: "Framework Java para aplicaciones empresariales",
        },
        {
          name: "JSP",
          description: "Java Server Pages",
        },
        {
          name: "OWCS",
          description:
            "Sistema de gestión de contenido de ámbito empresarial basado en Java",
        },
        {
          name: "Express",
          description: "Framework web para Node",
        },
        {
          name: "Nest",
          description: "Framework web escalable basado en Node",
        },
      ],
      database: [
        {
          name: "PostgreSQL",
          description: "Sistema de gestión de bases de datos relacional",
        },
        {
          name: "MongoDB",
          description: "Base de datos NoSQL orientada a documentos",
        },
        {
          name: "OracleSQL",
          description:
            "Sistema de gestión de bases de datos relacional del gigante Oracle",
        },
      ],
      languages: [
        {
          name: "Java",
          description:
            "Lenguaje multiplataforma orientado a objetos, ideal para aplicaciones empresariales robustas y escalables",
        },
        {
          name: "Java Script",
          description:
            "Lenguaje versátil para desarrollo web, que permite crear aplicaciones interactivas tanto en frontend como backend",
        },
        {
          name: "Type Script",
          description:
            "Extensión de JavaScript que añade tipado estático y características de POO para desarrollo más seguro y mantenible",
        },
        {
          name: "Python",
          description:
            "Lenguaje de alto nivel conocido por su simplicidad y potencia, ideal para desarrollo web, análisis de datos e IA",
        },
      ],
    },
  },

  projectsSections: {
    title: "Proyectos Destacado",
    projects: [
      {
        title: "Portfolio",
        description: "Mi actual web hasta el día de hoy",
        tags: [
          Tags.REACT,
          Tags.NODE,
          Tags.NEXT,
          "NodeMailer",
          "FramerMotion",
          Tags.TAILWIND,
        ],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/01-portfolio",
        },
        demo: {
          ok: true,
          url: "https://01-portfolio-samuraidevord.vercel.app/",
        },
      },
      {
        title: "Clone Spring MVC",
        description: "Clone de esta mítica tecnología",
        tags: [Tags.NODE, Tags.TS, "Reflect MetaData"],
        github: {
          ok: true,
          url: "https://github.com/VerielDev/clone-spring-mvc",
        },
        demo: {
          ok: false,
          url: "",
        },
      },
      {
        title: "Ts-Engine-Template",
        description: "Clone de handlebars",
        tags: [Tags.NODE, Tags.TS],
        github: {
          ok: true,
          url: "https://github.com/VerielDev/ts-engine-template",
        },
        demo: {
          ok: false,
          url: "",
        },
      },
      {
        title: "CRUD-REACT",
        description: "Proyecto Full Stack",
        tags: [Tags.TS, Tags.REACT, Tags.MONGO, Tags.EXPRESS, Tags.NODE],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/CRUD-REACT",
        },
        demo: {
          ok: false,
          url: "",
        },
      },
      {
        title: "Trello Clone",
        description: "Clome del famoso software Trello Clone",
        tags: [Tags.REACT, "DndKit", Tags.TS],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/trello-clone",
        },
        demo: {
          ok: true,
          url: "https://trello-clone-five-dusky.vercel.app/",
        },
      },
      {
        title: "Responsive Web",
        description: "Web para visualizar tu web en diferentes resoluciones",
        tags: [Tags.REACT, Tags.VITE, "React-Icons"],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/responsive-web",
        },
        demo: {
          ok: true,
          url: "https://responsive-web-pi.vercel.app/",
        },
      },
      {
        title: "Old newspaper",
        description: "Maquetación de un antinguo periódico",
        tags: [Tags.ASTRO, Tags.CSS],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/web-personal-paper",
        },
        demo: {
          ok: true,
          url: "https://web-personal-paper.vercel.app/",
        },
      },
      {
        title: "Clone Cards Yu-Gi-oh",
        description: "Diseño de cartas similares a la mítica serie YuGiOh",
        tags: [Tags.REACT, Tags.CSS, "Atropos", Tags.VITE],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/cards-yu-gi-oh/",
        },
        demo: {
          ok: true,
          url: "https://cards-yu-gi-oh.vercel.app/",
        },
      },
      {
        title: "Game  Boy Color",
        description: "Maquetación de la mítica video consola",
        tags: [Tags.CSS, Tags.VITE, Tags.JS],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/gameboy-color",
        },
        demo: {
          ok: true,
          url: "https://gameboy-color.vercel.app/",
        },
      },
      {
        title: "SPA Web Component",
        description: "Single Page Application realizada con Web Component",
        tags: [Tags.WEB_COMPONENTS, Tags.JS, Tags.CSS],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/spa-vanilla-js/",
        },
        demo: {
          ok: true,
          url: "https://spa-vanilla-js-beryl.vercel.app/",
        },
      },
      {
        title: "Pokedex: Los primeros 151 pokemons",
        description: "Pokdex basada en la PokeAPI",
        tags: [Tags.NEXT, Tags.CSS, Tags.TS],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/pokedex/",
        },
        demo: {
          ok: true,
          url: "https://pokedex-roan-alpha.vercel.app/",
        },
      },
      {
        title: "To Do React",
        description: "Lista de tareas realizada en React",
        tags: [Tags.TS, Tags.REACT, Tags.CSS],
        github: {
          ok: true,
          url: "https://github.com/samuraiOrDev/To-Do-React/",
        },
        demo: {
          ok: true,
          url: "https://tod-do-react.vercel.app/",
        },
      },
    ],
  },
};

export const cvPage = {
  experience: {
    title: "EXPERIENCIA PROFESIONAL",
    jobs: [
      {
        item: "Desarrollador FullStack",
        company: "Viewnext S.A · Cáceres · ago. 2021 - Actualidad",
        description:
          "Pertenezco al equipo de desarrollo de la área pública y privada de Naturgy. Mi trabajo consiste en el desarrollo de nuevas funcionalidades y mantenimiento de las ya existentes, todo esto dentro del un marco trabajo FullStack (JS(TS/Java)). Actulamente estoy realizando funciones de analista.",
      },
      {
        item: "Desarrollador en I+D",
        company: "eCapture3D S.L · Badajoz · abr. 2021 - jun. 2021",
        description:
          "Desarrollo de algoritmos predictivos para detectar la evolución de variables climáticas en España mediante técnicas de Machine Learning y Deep Learning.",
      },
    ],
    isEducation: false,
  },
  education: {
    title: "FORMACIÓN ACADÉMICA",
    jobs: [
      {
        item: "Graduado en Física",
        company: "Universidad de Extremadura - 2014 - 2021",
        description:
          "Especialización en física teórica y experimental con énfasis en mecánica cuántica, física estadística y electromagnetismo. Desarrollo de habilidades en análisis matemático, programación científica y metodología de investigación. Participación en proyectos de laboratorio y análisis de datos experimentales",
      },
      {
        item: "Bachiller",
        company: "I.E.S.O. Norba Caesarina - 2012 - 2014",
        description:
          "Modalidad de Ciencias y Tecnología con excelencia académica. Desarrollo de fundamentos sólidos en matemáticas, física y química. Participación activa en olimpiadas científicas y proyectos de investigación a nivel escolar",
      },
    ],
    isEducation: true,
  },
};

export const projectsPage = {
  heroSection: {
    title: "Proyectos",
    description:
      "Explora mi portfolio de proyectos full-stack, desde aplicaciones web hasta clones de tecnologías populares. Cada proyecto representa un desafío único y una oportunidad de aprendizaje.",
    projects: "Ver Proyectos",
    contact: "Contactar",
  },
  statsSection: [
    { label: "Proyectos Completados", value: "15+" },
    { label: "Tecnologías Utilizadas", value: "20+" },
    { label: "Años de Experiencia", value: "3+" },
    { label: "Contribuciones Open Source", value: "50+" },
  ],
};

export const configAnimate = {
  animateHeroSecion: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
  animateStatsSection: {
    animate: {
      opacity: 0,
      y: 20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
    },
  },
};

const projects: TypeProject[] = [
  {
    title: "Portfolio",
    description: "Mi actual web hasta el día de hoy",
    technologies: [
      "React",
      "Node",
      "Next.js",
      "NodeMailer",
      "FramerMotion",
      "Tailwind",
    ],
    featured: true,
    stats: {
      stars: 24,
      forks: 8,
      startDate: "2024-01",
      lastUpdate: "2 días",
    },
  },
  {
    title: "Clone Spring MVC",
    description: "Clone de esta mítica tecnología",
    technologies: ["Node", "TypeScript", "Reflect MetaData"],
    featured: false,
    stats: {
      stars: 15,
      forks: 3,
      startDate: "2023-12",
      lastUpdate: "5 días",
    },
  },
  {
    title: "Ts-Engine-Template",
    description: "Clone de handlebars",
    technologies: ["Node", "TypeScript"],
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "CRUD-REACT",
    description: "Proyecto Full Stack",
    technologies: ["TypeScript", "React", "MongoDB", "Express", "Node"],
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "Trello Clone",
    description: "Clome del famoso software Trello Clone",
    technologies: ["React", "DndKit", "TypeScript"],
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "Responsive Web",
    description: "Web para visualizar tu web en diferentes resoluciones",
    technologies: ["React", "Vite", "React-Icons"],
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "Old newspaper",
    description: "Maquetación de un antinguo periódico",
    technologies: ["Astro", "CSS"],
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "Clone Cards Yu-Gi-oh",
    description: "Diseño de cartas similares a la mítica serie YuGiOh",
    technologies: ["React", "CSS", "Atropos", "Vite"],
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "Game Boy Color",
    description: "Maquetación de la mítica video consola",
    technologies: ["CSS", "Vite", "JavaScript"],
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "SPA Web Component",
    description: "Single Page Application realizada con Web Component",
    technologies: ["Web Components", "JavaScript", "CSS"],
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "Pokedex: Los primeros 151 pokemons",
    description: "Pokdex basada en la PokeAPI",
    technologies: ["Next.js", "CSS", "TypeScript"],
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
  {
    title: "To Do React",
    description: "Lista de tareas realizada en React",
    technologies: ["TypeScript", "React", "CSS"],
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      startDate: "2023-12",
      lastUpdate: "N/A",
    },
  },
];
export const transitions = {
  // 1. Transición suave y lenta tipo spring
    smoothSpringTransition: {
        type: "spring",
        stiffness: 50, // Menor rigidez = más "bouncy"
        damping: 20, // Menor amortiguación = más rebote
        duration: 1.5, // Duración en segundos
        mass: 1.5, // Más masa = más inercia en el movimiento
    },

  // 2. Transición tipo tween con ease personalizado
    smoothTweenTransition: {
        type: "tween",
        duration: 2, // 2 segundos
        ease: [0.43, 0.13, 0.23, 0.96], // Curva de Bézier personalizada
        delay: 0.1, // Pequeño retraso antes de empezar
    },

  // 3. Transición con efecto de elasticidad
    elasticTransition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1.8,
        bounce: 0.5, // Añade un efecto de rebote
    },
  // 4. Transición suave y muy lenta
    extraSmoothTransition: {
        type: "spring",
        stiffness: 70,
        damping: 30,
        duration: 2.5,
        restSpeed: 0.5, // Velocidad más lenta al final
    },
  // 5. Transición con aceleración
    acceleratedTransition: {
        type: "tween",
        duration: 2,
        ease: "circOut", // Acelera al principio
        times: [0, 0.4, 1],
    },
    // 6. Transición con desaceleración
    deceleratedTransition: {
        type: "tween",
        duration: 2.2,
        ease: "circIn", // Desacelera al final
        times: [0, 0.6, 1],
    },

    // 7. Transición combinada (spring + tween)
    combinedTransition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 2,
        ease: "easeInOut",
        mass: 1.2,
    },

    // 8. Transición muy dramática
    dramaticTransition: {
        type: "spring",
        stiffness: 30,
        damping: 8,
        duration: 3,
        mass: 2,
        bounce: 0.8,
    },

  // 9. Transición profesional y suave
    professionalTransition: {
        type: "tween",
        duration: 1.8,
        ease: [0.645, 0.045, 0.355, 1], // Curva de Bézier especial
        delay: 0.1,
    },

    // 10. Transición de presentación
    presentationTransition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        duration: 2.5,
        mass: 1.8,
        restDelta: 0.01,
    },
};
export default projects;
