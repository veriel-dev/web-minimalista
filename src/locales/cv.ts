import { ChromeIcon, Database, Server } from "lucide-react";

export const cvPage = {
    header: {
        name: "Víctor Manuel Ordiales García",
        job: "Desarrollador Full Stack - Mid/Senior", 
        street: "Calle Sanguino Número 18 Bloque A 1ºB",
        phone: "685394859",
        email: "vmordiales@gmail.com",
        linkedin: "https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/",
        gitHub: "https://github.com/veriel-dev"
    },
    about: {
        title: "PERFIL PROFESIONAL",
        text: "Desarrollador Full-Stack con una sólida trayectoria de más de 3 años en entornos empresariales de alto impacto. Especializado en el desarrollo e implementación de soluciones tecnológicas escalables y eficientes. Experiencia destacada en sistemas CMS (OWCS), desarrollo backend con Spring Framework y frontend con JavaScript/TypeScript.",
        expertise: [
          "Implementación y mantenimiento de sistemas CMS empresariales (OWCS)",
          "Desarrollo backend con Spring Framework y diseño de arquitecturas robustas",
          "Desarrollo frontend avanzado con JavaScript/TypeScript y frameworks modernos",
          "Diseño e implementación de soluciones web eficientes y escalables",
          "Dominio de stack tecnológico completo y actualizado para desarrollo empresarial"
        ]
    },
    experience: {
      title: "EXPERIENCIA PROFESIONAL",
      jobs: [
        {
          item: "Desarrollador FullStack - Analista",
          company: "Viewnext S.A · Cáceres · ago. 2021 - Actualidad",
          expertise: [
            "Implementación de neuvas funcionalidades utilizando stack JavaScript/TypeScript/Java",
            "Evolución al rol de analista, participando en la definción y diseño de soluciones",
            "Gestión de sistemas CMS (OWCS) y desarrollos con Spring Framework",
            "Optimización de rendimiento y escalabilidad de aplicaciones existentes"
          ]
        },
        {
          item: "Desarrollador en I+D",
          company: "eCapture3D S.L · Badajoz · abr. 2021 - jun. 2021",
          expertise: [
            "Desarrollo de algoritmos predictivos para análisis de variables climáticas",
            "Implementación de soluciones de Machine Learning y Deep Learning",
            "Procesamiento y análisis de datos de AEMET",
            "Diseño de modelos predictivos para variables meteorológicas"
          ]
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
          expertise: [
            "Especialización en física teórica y experimental",
            "Énfasis en mecánica cuántica y física estadística",
            "Formación en programación científica y análisis de datos",
            "Desarrollo de proyectos de investigación y análisis experimental"
          ]
        },
        {
          item: "Bachiller",
          company: "I.E.S.O. Norba Caesarina - 2012 - 2014",
          expertise: [
            "Modalidad de Ciencias y Tecnología con excelencia académica",
            "Desarrollo de fundamentos sólidos en matemáticas, física y química",
            "Participación activa en olimpiadas científicas y proyectos de investigación a nivel escolar"
          ]
        },
      ],
      isEducation: true,
    },
    skills: {
      title: "COMPETENCIAS TÉCNICAS",
      tecs: [
          {
              title: "FRONTEND",
              tec: ['HTML5/CSS3', 'Java Script/Type Script', 'React', 'Vite', 'Astro', 'Web Component'],
              icon: ChromeIcon
          },
          {
              title: "BACKEND",
              tec: ['Node', 'Python', 'Java/JSP', 'Spring MVC', 'Expess', 'Nest'],
              icon: Server
          },
          {
              title: "DATA BASES",
              tec: ['MongoDB', 'OracleSQL', 'PostgeSQL', 'MySQL'],
              icon: Database
          }
    ]},
    languages: {
      title: "IDIOMAS",
      expertise: [
        "Español: Nativo",
        "Inglés: Profesional"
      ]
    },
    achievements: {
      title: "LOGROS",
      expertise: [
        "Implementación exitosa de nuevas arquitecturas en proyectos empresariales",
        "Contribución a la mejora del rendimiento en aplicaciones de alto tráfico",
        "Evolución profesional progresiva de desarrollador a analista durante estos 3 años"
      ]
    }
  };
  