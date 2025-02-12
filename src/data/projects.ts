import { TypeProject } from "../components/projectsPage/ProjectsSection";

const projects: TypeProject[] = [
    /* Portfolio Antiguo */
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
        proyectType: "frontend",
        github: "https://github.com/veriel-dev/01-portfolio",
        demo: "https://01-portfolio-samuraidevord.vercel.app/",
        img: "/img/portfolio_preview.png",
        status: "completed"
    },
    /* Clone Spring MVC */
    {
        title: "Clone Spring MVC",
        description: "Clone de esta mítica tecnología",
        technologies: ["Node", "TypeScript", "Reflect MetaData"],
        featured: true,
        github: "https://github.com/veriel-dev/clone-spring-mvc",
        proyectType: "backend",
        demo: "https://clone-spring-mvc-production.up.railway.app/",
        status: "completed"
    },
    /* Ts-Engine-Template */
    {
        title: "Ts-Engine-Template",
        description: "Clone de handlebars",
        technologies: ["Node", "TypeScript"],
        featured: false,
        proyectType: "backend",
        github: "https://github.com/veriel-dev/ts-engine-template/",
        status: "progress"
    },
    /* CRUD-REACT 
    {
        title: "CRUD-REACT",
        description: "Proyecto Full Stack",
        technologies: ["TypeScript", "React", "MongoDB", "Express", "Node"],
        featured: false,
        github: "https://github.com/veriel-dev/CRUD-REACT",
        demo: "https://crud-react-snowy.vercel.app/"
    },
    */
    /* Trello Clone */
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
        proyectType: "frontend",
        github: "https://github.com/veriel-dev/trello-clone",
        demo: "https://trello-clone-five-dusky.vercel.app/",
        img: "/img/trello-clone_preview.png",
        status: "completed"
    },
    /* Responsive Web */
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
        proyectType: "frontend",
        github: "https://github.com/veriel-dev/responsive-web",
        demo: "https://responsive-web-pi.vercel.app/",
        img: "/img/response-web_preview.png",
        status: "completed"
    },
    /* Old NewsPaper */
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
        proyectType: "frontend",
        github: "https://github.com/veriel-dev/web-personal-paper",
        demo: "https://web-personal-paper.vercel.app/",
        img: "/img/new-paper_preview.png",
        status: "completed"
    },
    /* Clone Cards Yu-gi-oh */
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
        proyectType: "frontend",
        github: "https://github.com/veriel-dev/cards-yu-gi-oh",
        demo: "https://cards-yu-gi-oh.vercel.app/",
        img: "/img/card-yu-gi-oh_preview.png",
        status: "completed"
    },
    /* Game Boy Color */
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
        proyectType: "frontend",
        github: "https://github.com/veriel-dev/gameboy-color",
        demo: "https://gameboy-color.vercel.app/",
        img: "/img/css-pikachu_preview.png",
        status: "completed"
    },
    /* Spa Web Component */
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
        proyectType: "frontend",
        github: "https://github.com/veriel-dev/spa-vanilla-js",
        demo: "https://spa-vanilla-js-beryl.vercel.app/",
        img: "/img/spa-vanilla_preview.png",
        status: "completed"
    },
    /* Pokedex 
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
        github: "https://github.com/veriel-dev/pokedex",
        demo: "https://pokedex-roan-alpha.vercel.app/",
        img: "/img/pokedex_preview.png"
    },*/
    /* To Do React
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
        github: "https://github.com/veriel-dev/To-Do-React",
        demo: "https://tod-do-react.vercel.app/",
        img: "/img/toDoReact_preview.png"
    },*/
    /* Fakemon */
    {
        title: "Fakemon",
        description: "Galería de imágens de fakemon reaclizados con IA",
        technologies: [
            "Astro",
            "Tailwind",
            "Node",
            "Express",
            "Copilot",
        ],
        proyectType: "frontend",
        featured: true,
        stats: {
            stars: 24,
            forks: 8,
            startDate: "2024-01",
            lastUpdate: "2 días",
        },
        github: "https://github.com/veriel-dev/Astro",
        demo: "https://eclectic-snickerdoodle-cac957.netlify.app/",
        status: "completed"
    },
    {
        title: "Clone Landing Vite Dev",
        description: "Clone de la landing actual de https://vite.dev/",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "CSS",
            "GSAP",
            "Vite"
        ],
        proyectType: "frontend",
        featured: true,
        github: "https://github.com/veriel-dev/clone-landing-vite-dev",
        demo: "https://clone-landing-vite-dev.vercel.app/",
        status: "completed"
    },
    {
        title: "Web Personal",
        description: "Mi actual web hasta el día de hoy",
        technologies: [
            "React",
            "Wouter",
            "Vite",
            "FramerMotion",
            "Tailwind",
        ],
        proyectType: "frontend",
        featured: false,
        github: "https://github.com/veriel-dev/web-minimalista",
        demo: "https://veriel.dev/",
        status: "completed"
    },
    {
        title: "Auth Service",
        description: "Servicio de autenticación y autorización",
        technologies: [
            "Nest",
            "TypeOrm",
            "PostgreSQL",
            "Docker",
            "Passport"
        ],
        proyectType: "backend",
        featured: false,
        github: "https://github.com/veriel-dev/auth-service",
        status: "progress"
    },
    {
        title: "Web Builder Frontend",
        description: "Constructor de páginas web flexbile e intuitivo",
        technologies: [
            "React",
            "TypeScript",
            "Zustand",
            "Tailwind",
            "Lucide React"
        ],
        proyectType: "frontend",
        featured: false,
        github: "https://github.com/veriel-dev/web-builder-frontend",
        status: "progress"
    },
    {
        title: "Node JS",
        description: "Proyectos de NodeJS atendiendo a su dificultad",
        technologies: [
            "Node"
        ],
        proyectType: "backend",
        featured: false,
        github: "https://github.com/veriel-dev/NodeJS",
        status: "progress"
    },
    {
        title: "Fakemo API",
        description: "API de fakemon realizada en NodeJS",
        technologies: [
            "Node",
            "ExpressJS",
            "TypeScript",
            "MonogDB",
            "Railway"
        ],
        proyectType: "backend",
        featured: false,
        github: "https://github.com/veriel-dev/fakemon-api",
        demo: "https://fakemon-api-production.up.railway.app/api/v1/fakemons",
        status: "completed"
    },
    {
        title: "Healthcare System",
        description: "Sistema de gestión de salud",
        technologies: [
            "Node",
            "ExpressJS",
            "TypeScript",
            "React",
            "MonogDB",
        ],
        proyectType: "fullstack",
        featured: false,
        github: "https://github.com/veriel-dev/healthcare-system",
        status: "progress"
    },
    /*{
        title: "crud-clients-spring",
        description: "Crud básico de clientes en Spring",
        technologies: [
            "Spring",
            "Java 17",
            "Lombok",
            "MySQL",
            "Thymeleaf"
        ],
        proyectType: "backend",
        featured: false,
        github: "https://github.com/veriel-dev/crud-clients-spring",
        status: "completed"
    },*/
    {
        title: "API-REST-CRM",
        description: "API resct de un ecommerce",
        technologies: [
            "Node",
            "JavaScript",
            "Cors",
            "body-parses",
            "cors",
            "dotenv",
            "multer"
        ],
        proyectType: "backend",
        featured: false,
        github: "https://github.com/veriel-dev/REST-API-CRM/",
        status: "progress"
    }
];
export default projects;