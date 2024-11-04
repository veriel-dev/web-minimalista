export const homePage = {
    heroSection: {
        title: "Veriel.Dev",
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
        titleExperience: "Experiencia",
        experience: "3+ años",
        titleProjects: "Proyectos",
        projects: "30+",
        titleTec: "Tecnologías",
        tec: "20+",
    },
    skillsSection: {
        title: "Habilidades Técnicas",
        technologies: {
            frontend: [
                {
                    name: "React",
                    level: 90,
                    description:
                        "Biblioteca JavaScript para construir interfaces de usuario",
                },
                {
                    name: "Astro.js",
                    level: 50,
                    description:
                        "Framework de JS para crear sitios estáticos de manera rápida",
                },
                {
                    name: "Next.js",
                    level: 50,
                    description:
                        "MetaFramework de ReactJS",
                },
                {
                    name: "HTML/CSS",
                    level: 90,
                    description: "Tecnologías base para desarrollo web",
                },
                {
                    name: "Tailwind",
                    level: 85,
                    description: "Framework CSS utility-first",
                },
                {
                    name: "Vite.js",
                    level: 55, 
                    description: "Empaquetador moderno de proyectos JavaScript"
                },
                {
                    name: "WebComponents", 
                    level: 45, 
                    description: "Forma nativa de crear elementos personalizables y encapsulados"
                }
            ],
            backend: [
                {
                    name: "Node.js",
                    level: 85,
                    description: "Entorno de ejecución para JavaScript",
                },
                {
                    name: "Spring",
                    level: 85,
                    description: "Framework Java para aplicaciones empresariales",
                },
                {
                    name: "JSP",
                    level: 50,
                    description: "Java Server Pages"
                },
                {
                    name: "OWCS",
                    level: 50,
                    description: "Sistema de gestión de contenido de ámbito empresarial basado en Java"
                },
                {
                    name: "Express",
                    level: 85,
                    description: "Framework web para Node.js",
                },
                {
                    name: "Nest.js",
                    level: 55,
                    description: "Framework web escalable basado en Node.js"
                }
            ],
            database: [
                {
                    name: "PostgreSQL",
                    level: 80,
                    description: "Sistema de gestión de bases de datos relacional",
                },
                {
                    name: "MongoDB",
                    level: 75,
                    description: "Base de datos NoSQL orientada a documentos",
                },
                {
                    name: "OracleSQL",
                    level: 55,
                    description: "Sistema de gestión de bases de datos relacional del gigante Oracle", 
                },
            ],
            languages: [
                {
                    name: "Java",
                    level: 70,
                    description: "Lenguaje multiplataforma orientado a objetos, ideal para aplicaciones empresariales robustas y escalables"
                },
                {
                    name: "JavaScript",
                    level: 85,
                    description: "Lenguaje versátil para desarrollo web, que permite crear aplicaciones interactivas tanto en frontend como backend"
                },
                {
                    name: "TypeScript",
                    level: 80,
                    description: "Extensión de JavaScript que añade tipado estático y características de POO para desarrollo más seguro y mantenible"
                },
                {
                    name: "Python",
                    level: 65,
                    description: "Lenguaje de alto nivel conocido por su simplicidad y potencia, ideal para desarrollo web, análisis de datos e IA"
                }
            ]
        },
    },
    educationSection: {
        title: "Formación Académica",
        titles: [
            {
                degree: "Graduado en Física",
                institution: "Universidad de Extremadura",
                period: "2014 - 2021",
                description: "Especialización en el entendimiento del mundo que nos rodea",
            },
            {
                degree: "Bachiller",
                institution: "I.E.S.O. Norba Caesarina", 
                period: "2012 - 2014",
                description: "Instituto de secundaria obligatoria", 
            },
        ]
    },
    projectsSections: {
        title: "Proyectos Destacado",
        projects: [
            {
                title: "Portfolio",
                description: "Mi actual web hasta el día de hoy",
                tags: ["React", "Node.js", "NextJS", "NodeMailer", "FramerMotion", "TailwindCss"],
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
                tags: ["Node.js", "TypeScript", "ReflectMetaData"],
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
                tags: ["NodeJS", "TypeScript"],
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
                tags: ["TypeScript", "React", "Mongo", "Express", "Node.js"],
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
                tags: ["React", "DndKit", "TypeScript"],
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
                tags: ["ReactJS", "ViteJS", "React-Icons"],
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
                tags:["AstroJS", "Css Vanilla"],
                github: {
                    ok: true,
                    url: "https://github.com/samuraiOrDev/web-personal-paper"
                },
                demo: {
                    ok: true,
                    url: "https://web-personal-paper.vercel.app/"
                }
            }
        ]

    }
};