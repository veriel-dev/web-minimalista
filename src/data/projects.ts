import { TypeProject } from "../components/projectsPage/ProjectsSection";

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
        github:"https://github.com/veriel-dev/01-portfolio",
        demo: "https://01-portfolio-samuraidevord.vercel.app/",
        img: "/img/portfolio_preview.png" 
    },
    {
        title: "Clone Spring MVC",
        description: "Clone de esta mítica tecnología",
        technologies: ["Node", "TypeScript", "Reflect MetaData"],
        featured: true,
        github: "https://github.com/veriel-dev/clone-spring-mvc",
        demo: "https://clone-spring-mvc-production.up.railway.app/"
    },
    {
        title: "Ts-Engine-Template",
        description: "Clone de handlebars",
        technologies: ["Node", "TypeScript"],
        featured: false,
        github: "https://github.com/veriel-dev/ts-engine-template/"
    },
    {
        title: "CRUD-REACT",
        description: "Proyecto Full Stack",
        technologies: ["TypeScript", "React", "MongoDB", "Express", "Node"],
        featured: false,
        github: "https://github.com/veriel-dev/CRUD-REACT"
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
        github: "https://github.com/veriel-dev/trello-clone",
        demo: "https://trello-clone-five-dusky.vercel.app/",
        img: "/img/trello-clone_preview.png"
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
        github: "https://github.com/veriel-dev/responsive-web",
        demo: "https://responsive-web-pi.vercel.app/",
        img: "/img/response-web_preview.png"
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
        github: "https://github.com/veriel-dev/web-personal-paper",
        demo: "https://web-personal-paper.vercel.app/",
        img: "/img/new-paper_preview.png"
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
        github: "https://github.com/veriel-dev/cards-yu-gi-oh",
        demo: "https://cards-yu-gi-oh.vercel.app/",
        img: "/img/card-yu-gi-oh_preview.png"
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
        github: "https://github.com/veriel-dev/gameboy-color",
        demo: "https://gameboy-color.vercel.app/",
        img: "/img/css-pikachu_preview.png"
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
        github: "https://github.com/veriel-dev/spa-vanilla-js",
        demo: "https://spa-vanilla-js-beryl.vercel.app/",
        img: "/img/spa-vanilla_preview.png"
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
        github: "https://github.com/veriel-dev/pokedex",
        demo: "https://pokedex-roan-alpha.vercel.app/",
        img: "/img/pokedex_preview.png"
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
        github: "https://github.com/veriel-dev/To-Do-React",
        demo: "https://tod-do-react.vercel.app/",
        img: "/img/toDoReact_preview.png"
    },
];
export default projects;