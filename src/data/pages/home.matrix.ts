import { Database, Server, Terminal } from 'lucide-react';
import { Tags } from '../../const/enums/tags';

export const homePageMatrix = {
  heroSection: {
    title: 'Veriel.dev',
    description: 'Del código a la experiencia: Construyendo soluciones que importan',
    contact: 'Contactar',
    cv: {
      text: 'Descargar CV',
      to: '/curriculum-vitae',
    },
  },
  aboutSection: {
    title: 'sobre_mí',
    description:
      'Software Developer con 4+ años de experiencia en aplicaciones web empresariales de gran escala',
    tags: ['TyepScript', 'Node.js', 'Java', 'Spring', 'SQL-NoSQL', 'OWCS'],
    stats: [
      {
        icon: Terminal,
        label: 'Experiencia',
        value: 4,
        plus: '+ años',
      },
      {
        icon: Database,
        label: 'Proyectos/Evol',
        value: 30,
        plus: '+',
      },
      {
        icon: Server,
        label: 'Tecnologías',
        value: 20,
        plus: '+',
      },
    ],
  },
  skillsSection: {
    title: 'Habilidades Técnicas',
    technologies: {
      frontend: [
        {
          name: 'React',
          description:
            'Biblioteca líder para construcción de interfaces modernas y aplicaciones SPA',
          level: 85,
        },
        {
          name: 'Astro',
          description:
            'Framework moderno para sitios web de alto rendimiento con hidratación parcial',
          level: 50,
        },
        {
          name: 'Next',
          description: 'Framework React para aplicaciones web de alto rendimiento con SSR y SSG',
          level: 50,
        },
        {
          name: 'HTML/CSS',
          description: 'Dominio avanzado de estándares web modernos y layouts responsive',
          level: 85,
        },
        {
          name: 'Tailwind',
          level: 85,
          description: 'Framework CSS utility-first para diseño rápido y consistent',
        },
        {
          name: 'Vite',
          description: 'Build tool de nueva generación para desarrollo web moderno',
          level: 55,
        },
        {
          name: 'Web Components',
          description: 'Desarrollo de componentes web nativos reutilizables y encapsulados',
          level: 55,
        },
      ],
      backend: [
        {
          name: 'Node',
          description:
            'Runtime JavaScript para backend de alto rendimiento y aplicaciones en tiempo real',
          level: 65,
        },
        {
          name: 'Spring',
          description: 'Framework empresarial Java para aplicaciones robustas y escalables',
          level: 75,
        },
        {
          name: 'JSP',
          description: 'Java Server Pages',
          level: 70,
        },
        {
          name: 'OWCS',
          description: 'Sistema de gestión de contenido empresarial Oracle WebCenter Sites',
          level: 75,
        },
        {
          name: 'Express',
          description: 'Framework web minimalista y flexible para Node.js',
        },
        {
          name: 'Nest',
          description: 'Framework Node.js progresivo para aplicaciones escalables y empresariales',
          level: 65,
        },
      ],
      database: [
        {
          name: 'PostgreSQL',
          description: 'Sistema de gestión de bases de datos relacional avanzad',
          level: 55,
        },
        {
          name: 'MongoDB',
          description: 'Base de datos NoSQL líder para aplicaciones moderna',
          level: 65,
        },
        {
          name: 'OracleSQL',
          description: 'RDBMS empresarial para aplicaciones de alta disponibilidad',
          level: 55,
        },
      ],
      languages: [
        {
          name: 'Java',
          description: 'Lenguaje robusto para aplicaciones empresariales de alto rendimiento',
          level: 70,
        },
        {
          name: 'Java Script',
          description: 'Lenguaje versátil para desarrollo full-stack moderno',
          level: 80,
        },
        {
          name: 'Type Script',
          description: 'Superset de JavaScript con tipado estático para desarrollo escalable',
          level: 80,
        },
        {
          name: 'Python',
          description: 'Lenguaje versátil para desarrollo backend y análisis de datos',
          level: 50,
        },
      ],
      devOps: [
        {
          name: 'Git',
          description: 'Sistema de control de versiones distribuido',
          level: 75,
        },
        {
          name: 'Docker',
          description: 'Plataforma de containerización para desarrollo y despliegue',
          level: 60,
        },
      ],
    },
  },
  projectsSections: {
    title: 'Proyectos Destacado',
    projects: [
      {
        title: 'Portfolio',
        description: 'Mi actual web hasta el día de hoy',
        tags: [Tags.REACT, Tags.NODE, Tags.NEXT, 'NodeMailer', 'FramerMotion', Tags.TAILWIND],
        github: {
          ok: true,
          url: 'https://github.com/veriel-dev/01-portfolio',
        },
        demo: {
          ok: true,
          url: 'https://01-portfolio-samuraidevord.vercel.app/',
        },
      },
      {
        title: 'Clone Spring MVC',
        description: 'Clone de esta mítica tecnología',
        tags: [Tags.NODE, Tags.TS, 'Reflect MetaData'],
        github: {
          ok: true,
          url: 'https://github.com/veriel-dev/clone-spring-mvc',
        },
        demo: {
          ok: true,
          url: 'https://clone-spring-mvc-production.up.railway.app/',
        },
      },
      {
        title: 'Ts-Engine-Template',
        description: 'Clone de handlebars',
        tags: [Tags.NODE, Tags.TS],
        github: {
          ok: true,
          url: 'https://github.com/veriel-dev/ts-engine-template',
        },
        demo: {
          ok: false,
          url: '',
        },
      },
      // {
      //   title: "CRUD-REACT",
      //   description: "Proyecto Full Stack",
      //   tags: [Tags.TS, Tags.REACT, Tags.MONGO, Tags.EXPRESS, Tags.NODE],
      //   github: {
      //     ok: true,
      //     url: "https://github.com/veriel-dev/CRUD-REACT",
      //   },
      //   demo: {
      //     ok: true,
      //     url: "https://crud-react-snowy.vercel.app/",
      //   },
      // },
      {
        title: 'Trello Clone',
        description: 'Clome del famoso software Trello Clone',
        tags: [Tags.REACT, 'DndKit', Tags.TS],
        github: {
          ok: true,
          url: 'https://github.com/samuraiOrDev/trello-clone',
        },
        demo: {
          ok: true,
          url: 'https://github.com/veriel-dev/trello-clone',
        },
      },
      {
        title: 'Responsive Web',
        description: 'Web para visualizar tu web en diferentes resoluciones',
        tags: [Tags.REACT, Tags.VITE, 'React-Icons'],
        github: {
          ok: true,
          url: 'https://github.com/veriel-dev/responsive-web',
        },
        demo: {
          ok: true,
          url: 'https://responsive-web-pi.vercel.app/',
        },
      },
      {
        title: 'Old newspaper',
        description: 'Maquetación de un antinguo periódico',
        tags: [Tags.ASTRO, Tags.CSS],
        github: {
          ok: true,
          url: 'https://github.com/veriel-dev/web-personal-paper',
        },
        demo: {
          ok: true,
          url: 'https://web-personal-paper.vercel.app/',
        },
      },
      {
        title: 'Clone Cards Yu-Gi-oh',
        description: 'Diseño de cartas similares a la mítica serie YuGiOh',
        tags: [Tags.REACT, Tags.CSS, 'Atropos', Tags.VITE],
        github: {
          ok: true,
          url: 'https://github.com/veriel-dev/cards-yu-gi-oh/',
        },
        demo: {
          ok: true,
          url: 'https://cards-yu-gi-oh.vercel.app/',
        },
      },
      {
        title: 'Game  Boy Color',
        description: 'Maquetación de la mítica video consola',
        tags: [Tags.CSS, Tags.VITE, Tags.JS],
        github: {
          ok: true,
          url: 'https://github.com/veriel-dev/gameboy-color',
        },
        demo: {
          ok: true,
          url: 'https://gameboy-color.vercel.app/',
        },
      },
      {
        title: 'SPA Web Component',
        description: 'Single Page Application realizada con Web Component',
        tags: [Tags.WEB_COMPONENTS, Tags.JS, Tags.CSS],
        github: {
          ok: true,
          url: 'https://github.com/veriel-dev/spa-vanilla-js/',
        },
        demo: {
          ok: true,
          url: 'https://spa-vanilla-js-beryl.vercel.app/',
        },
      },
      // {
      //   title: "Pokedex: Los primeros 151 pokemons",
      //   description: "Pokdex basada en la PokeAPI",
      //   tags: [Tags.NEXT, Tags.CSS, Tags.TS],
      //   github: {
      //     ok: true,
      //     url: "https://github.com/veriel-dev/pokedex/",
      //   },
      //   demo: {
      //     ok: true,
      //     url: "https://pokedex-roan-alpha.vercel.app/",
      //   },
      // },
      // {
      //   title: "To Do React",
      //   description: "Lista de tareas realizada en React",
      //   tags: [Tags.TS, Tags.REACT, Tags.CSS],
      //   github: {
      //     ok: true,
      //     url: "https://github.com/veriel-dev/To-Do-React/",
      //   },
      //   demo: {
      //     ok: true,
      //     url: "https://tod-do-react.vercel.app/",
      //   },
      // },
    ],
  },
  contactSetion: {
    title: 'Contacto',
    subTitles: {
      one: '!Hablemos!',
      two: 'Gracias por visitar mi sitio web !',
    },
    description:
      'Espero que hayas disfrutado explorando mi trabajo y que hayas obtenido una idea clara de mis habilidades y experiencia.',
    form: {
      title: 'Enviar Mensaje',
      placeholder: {
        name: 'Nombre',
        email: 'Email',
        msg: 'Mensaje',
      },
    },
  },
};
