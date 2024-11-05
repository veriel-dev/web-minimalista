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
    WEB_COMPONENTS = "Web Component"

}

export const homePage = {
    heroSection: {
        title: "Veriel.dev",
        description:
        "Desarrollador que transforma desafíos de código en experiencias web modernas",
        contact: "Contactar",
        cv: {
            text: "Descargar CV",
            to: "/curriculum-vitae"
        }  
    },
    aboutSection: {
        title: "Sobre Mí",
        description:
        "Desarrollador Full Stack con 3+ años de experiencia en aplicaciones web empresariales. Dominio de TypeScript, Node.js, Java y Spring Framework. Experiencia en bases de datos SQL y NoSQL",
        stats : [
            {
                label: "Experiencia",
                value: 3,
                plus: "+ años"
            },
            {
                label: "Proyectos/Evol",
                value: 30,
                plus: "+"
            },
            {
                label: "Tecnologías",
                value: 20,
                plus: "+"
            }
        ]
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
                    description:
                        "MetaFramework de React ",
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
                    description: "Empaquetador moderno de proyectos JavaScript"
                },
                {
                    name: "Web Components", 
                    description: "Forma nativa de crear elementos personalizables y encapsulados"
                }
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
                    description: "Java Server Pages"
                },
                {
                    name: "OWCS",
                    description: "Sistema de gestión de contenido de ámbito empresarial basado en Java"
                },
                {
                    name: "Express",
                    description: "Framework web para Node",
                },
                {
                    name: "Nest",
                    description: "Framework web escalable basado en Node"
                }
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
                    description: "Sistema de gestión de bases de datos relacional del gigante Oracle", 
                },
            ],
            languages: [
                {
                    name: "Java",
                    description: "Lenguaje multiplataforma orientado a objetos, ideal para aplicaciones empresariales robustas y escalables"
                },
                {
                    name: "Java Script",
                    description: "Lenguaje versátil para desarrollo web, que permite crear aplicaciones interactivas tanto en frontend como backend"
                },
                {
                    name: "Type Script",
                    description: "Extensión de JavaScript que añade tipado estático y características de POO para desarrollo más seguro y mantenible"
                },
                {
                    name: "Python",
                    description: "Lenguaje de alto nivel conocido por su simplicidad y potencia, ideal para desarrollo web, análisis de datos e IA"
                }
            ]
        },
    },

    projectsSections: {
        title: "Proyectos Destacado",
        projects: [
            {
                title: "Portfolio",
                description: "Mi actual web hasta el día de hoy",
                tags: [Tags.REACT, Tags.NODE, Tags.NEXT, "NodeMailer", "FramerMotion", Tags.TAILWIND],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/01-portfolio"
                },
                demo: {
                    ok: true,
                    url: "https://01-portfolio-samuraidevord.vercel.app/"
                }
            },
            {
                title: "Clone Spring MVC",
                description: "Clone de esta mítica tecnología",
                tags: [Tags.NODE, Tags.TS, "Reflect MetaData"],
                github: {
                    ok: true,
                    url: "https://github.com/VerielDev/clone-spring-mvc"
                },
                demo: {
                    ok: false,
                    url: ""
                }
            },
            {
                title: "Ts-Engine-Template",
                description: "Clone de handlebars",
                tags: [Tags.NODE, Tags.TS],
                github: {
                    ok: true,
                    url: "https://github.com/VerielDev/ts-engine-template"
                },
                demo: {
                    ok: false,
                    url: ""
                }
            },
            {
                title: "CRUD-REACT",
                description: "Proyecto Full Stack",
                tags: [Tags.TS, Tags.REACT, Tags.MONGO, Tags.EXPRESS, Tags.NODE],
                github:{
                    ok: true,
                    url: "https://github.com/samuraiOrDev/CRUD-REACT"
                },
                demo: {
                    ok: false,
                    url: ""
                }
            },
            {
                title: "Trello Clone",
                description: "Clome del famoso software Trello Clone",
                tags: [Tags.REACT, "DndKit", Tags.TS],
                github: {
                    ok: true, 
                    url: "https://github.com/samuraiOrDev/trello-clone"
                },
                demo: {
                    ok: true,
                    url: "https://trello-clone-five-dusky.vercel.app/"
                }
            },
            {
                title: "Responsive Web",
                description: "Web para visualizar tu web en diferentes resoluciones",
                tags: [Tags.REACT, Tags.VITE, "React-Icons"],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/responsive-web"
                },
                demo: {
                    ok: true, 
                    url: "https://responsive-web-pi.vercel.app/"
                }
            },
            {
                title: "Old newspaper",
                description: "Maquetación de un antinguo periódico",
                tags:[Tags.ASTRO, Tags.CSS],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/web-personal-paper"
                },
                demo: {
                    ok: true,
                    url: "https://web-personal-paper.vercel.app/"
                }
            },
            {
                title: "Clone Cards Yu-Gi-oh",
                description: "Diseño de cartas similares a la mítica serie YuGiOh",
                tags: [Tags.REACT, Tags.CSS, "Atropos", Tags.VITE],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/cards-yu-gi-oh/"
                },
                demo: {
                    ok: true,
                    url: "https://cards-yu-gi-oh.vercel.app/"
                }
            },
            {
                title: "Game  Boy Color",
                description: "Maquetación de la mítica video consola",
                tags: [Tags.CSS, Tags.VITE, Tags.JS],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/gameboy-color"
                },
                demo: {
                    ok: true,
                    url: "https://gameboy-color.vercel.app/"
                }
            },
            {
                title: "SPA Web Component",
                description: "Single Page Application realizada con Web Component",
                tags: [Tags.WEB_COMPONENTS,Tags.JS, Tags.CSS ],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/spa-vanilla-js/"
                },
                demo: {
                    ok: true,
                    url: "https://spa-vanilla-js-beryl.vercel.app/"
                }
            },
            {
                title: "Pokedex: Los primeros 151 pokemons",
                description: "Pokdex basada en la PokeAPI",
                tags: [Tags.NEXT, Tags.CSS, Tags.TS ],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/pokedex/"
                },
                demo: {
                    ok: true,
                    url: "https://pokedex-roan-alpha.vercel.app/"
                }
            },
            {
                title: "To Do React",
                description: "Lista de tareas realizada en React",
                tags: [Tags.TS, Tags.REACT, Tags.CSS],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/To-Do-React/"
                },
                demo: {
                    ok: true,
                    url: "https://tod-do-react.vercel.app/"
                }
            }
            
        ]

    }
};


export const cvPage = {
    experience: {
        title: "EXPERIENCIA PROFESIONAL",
        jobs: [
            {
                item: "Desarrollador FullStack",
                company: "Viewnext S.A · Cáceres · ago. 2021 - Actualidad",
                description: "Pertenezco al equipo de desarrollo de la área pública y privada de Naturgy. Mi trabajo consiste en el desarrollo de nuevas funcionalidades y mantenimiento de las ya existentes, todo esto dentro del un marco trabajo FullStack (JS(TS/Java)). Actulamente estoy realizando funciones de analista."
            },
            {
                item: "Desarrollador en I+D",
                company: "eCapture3D S.L · Badajoz · abr. 2021 - jun. 2021",
                description: "Desarrollo de algoritmos predictivos para detectar la evolución de variables climáticas en España mediante técnicas de Machine Learning y Deep Learning."
            }
        ],
        isEducation: false
    },
    education: {
        title: "FORMACIÓN ACADÉMICA",
        jobs: [
            {
                item: "Graduado en Física",
                company: "Universidad de Extremadura - 2014 - 2021",
                description: "Especialización en física teórica y experimental con énfasis en mecánica cuántica, física estadística y electromagnetismo. Desarrollo de habilidades en análisis matemático, programación científica y metodología de investigación. Participación en proyectos de laboratorio y análisis de datos experimentales",
            },
            {
                item: "Bachiller",
                company: "I.E.S.O. Norba Caesarina - 2012 - 2014", 
                description: "Modalidad de Ciencias y Tecnología con excelencia académica. Desarrollo de fundamentos sólidos en matemáticas, física y química. Participación activa en olimpiadas científicas y proyectos de investigación a nivel escolar", 
            }
        ],
        isEducation: true
    }
}