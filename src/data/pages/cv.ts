import { ChromeIcon, Database, Server } from 'lucide-react';

export const cvPage = {
  metadata: {
    title: 'Veriel Dev | Curriculum Vitae',
    description: 'Curriculum Vitae del desarrollador full stack Veriel.dev',
    keywords: 'desarrollador full stack, desarrollo web, frontend, backend, cv, bases de datos',
  },
  header: {
    name: 'Víctor Manuel Ordiales García',
    job: 'Software Developer',
    street: 'Casar de Cáceres, Cáceres, España',
    phone: '685394859',
    email: 'vmordiales@gmail.com',
    linkedin: 'https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/',
    gitHub: 'https://github.com/veriel-dev',
    web: 'https://veriel.dev/',
  },
  about: {
    title: 'PERFIL PROFESIONAL',
    text: 'Software Developer con más de 4 años de experiencia en entornos empresariales dinámicos, enfocado en el diseño, desarrollo e implementación de soluciones tecnológicas escalables y eficientes. He trabajado extensivamente en sistemas CMS empresariales (OWCS), desarrollando backend robusto con Spring Framework y creando interfaces frontend avanzadas utilizando JavaScript/TypeScript y web components, así como arquitecturas monolíticas y basadas en microservicios.',
    text1:
      'Además, en mis proyectos personales, he ampliado mi stack tecnológico para incluir herramientas avanzadas como React , el runtime Node.js junto con frameworks como Nest y Next.js para el desarrollo backend y frontend, respectivamente. También cuento con experiencia en herramientas de construcción de sitios estáticos como Astro y la orquestación de contenedores con Docker . Esta combinación de experiencia profesional y personal me permite abordar proyectos desde múltiples perspectivas, garantizando soluciones innovadoras y eficientes para problemas complejos.',
    expertise: [
      'Diseño e implementación de soluciones web eficientes y escalables.',
      'OWCS, Spring Framework, JavaScript/TypeScript, Java, Web Components, React, Node.js, Nest.js, Next.js, Astro, Docker.',
      'Dominio de stack tecnológico completo y actualizado para desarrollo empresarial.',
      'El uso de prácticas ágiles y la constante actualización del conocimiento técnico para ofrecer soluciones optimizadas y alineadas con las necesidades actuales del mercado.',
    ],
  },
  experience: {
    title: 'EXPERIENCIA PROFESIONAL',
    jobs: [
      {
        item: 'Desarrollador en I+D',
        company: 'eCapture3D S.L · Badajoz',
        period: 'Abr. 2021 - Jun. 2021',
        expertise: [
          'Modelos predictivos basados en Machine Learning y Deep Learning para análisis de variables climáticas con datos de AEMET.',
          'Identificación de patrones clave en grandes volúmenes de datos meteorológicos, mejorando la precisión de los modelos.',
          'Procesamiento y análisis de datos de AEMET.',
          'Participación en proyectos de investigación tecnológica avanzada en análisis de datos climáticos.',
        ],
      },
      {
        item: 'Desarrollador OWCS',
        project: 'Portales Públicos Naturgy',
        company: 'Viewnext S.A · Cáceres | Portales Públicos Naturgy',
        period: 'Ago. 2021 - Dic. 2023',
        expertise: [
          'Diseño e implementación de soluciones empresariales completas en Oracle WebCenter Sites (OWCS)',
          'Gestión y optimización del CMS adaptándolo a necesidades específicas del negocio',
          'Mejora del rendimiento y escalabilidad de aplicaciones, incrementando su eficiencia operativa',
        ],
      },
      {
        item: 'Desarrollador OWCS + Spring Boot',
        company: 'Viewnext S.A · Cáceres  | Portales Públicos Naturgy y Áreas Clientes',
        period: 'Feb. 2023 - Mar. 2025',
        expertise: [
          'Evolución desde desarrollo a roles analíticos implementando soluciones con JavaScript/TypeScript y Java',
          'Arquitectura e implementación de soluciones empresariales integrales en OWCS/Spring Framework',
          'Optimización de rendimiento en aplicaciones críticas para el negocio',
        ],
      },
      {
        item: 'Desarrollador Frontend',
        company: 'Viewnext S.A · Cáceres | Portal de Contratación Naturgy',
        period: 'Abr. 2025 - may 2025',
        expertise: [
          'Desarrollo de interfaces modernas y responsivas con React',
          'Implementación de mejoras UX/UI basadas en necesidades de usuario y métricas de negocio',
          'Optimización de aplicaciones React para máximo rendimiento y escalabilidad',
        ],
      },
      {
        item: 'Desarrollador OWCS + Spring Boot',
        company: 'Alvea Soluciones Tecnológicas S.L · Cáceres | Web Pública Aena',
        period: 'May. 2025 - Actualidad',
        expertise: [
          'Arquitectura e implementación de soluciones empresariales integrales utilizando OWCS y Spring Boot',
          'Optimización de rendimiento y escalabilidad en aplicaciones críticas para el negocio',
          'Resolución proactiva de incidencias técnicas y mantenimiento correctivo de sistemas en producción',
          'Gestión directa de relaciones con clientes, proporcionando soporte técnico especializado y seguimiento continuo',
          'Desarrollo e implementación de nuevas funcionalidades siguiendo metodologías ágiles y mejores prácticas de desarrollo',
          'Proyecto manejado y mantenido por Indra/Minsait',
        ],
      },
    ],
    isEducation: false,
  },
  education: {
    title: 'FORMACIÓN ACADÉMICA',
    jobs: [
      {
        item: 'Graduado en Física',
        company: 'Universidad de Extremadura',
        period: '2014 - 2021',
        expertise: [
          'Especialización en física teórica y experimental',
          'Énfasis en mecánica cuántica y física estadística',
          'Formación en programación científica y análisis de datos',
          'Desarrollo de proyectos de investigación y análisis experimental',
        ],
      },
      // {
      //   item: 'Bachiller',
      //   company: 'I.E.S.O. Norba Caesarina',
      //   period: '2012 - 2014',
      //   expertise: [
      //     'Modalidad de Ciencias y Tecnología con excelencia académica',
      //     'Desarrollo de fundamentos sólidos en matemáticas, física y química',
      //     'Participación activa en olimpiadas científicas y proyectos de investigación a nivel escolar',
      //   ],
      // },
    ],
    isEducation: true,
  },
  skills: {
    title: 'COMPETENCIAS TÉCNICAS',
    tecs: [
      {
        title: 'FRONTEND',
        tec: [
          'React.js & Next.js',
          'TypeScript & JavaScript (ES6+)',
          'HTML5 & CSS3',
          'Tailwind CSS & Sass',
          'Web Components',
          'Astro',
        ],
        icon: ChromeIcon,
      },
      {
        title: 'BACKEND',
        tec: ['Node.js & Express.js & Nest.js', 'Spring Boot & Java', 'Golang (Go)'],
        icon: Server,
      },
      {
        title: 'Database & Infrastructure',
        tec: [
          'MySQL & PostgreSQL & Oracle',
          'MongoDB & Redis',
          'ORM & ODM',
          'Docker & Container Orchestration',
        ],
        icon: Database,
      },
      {
        title: 'Development Tools',
        tec: [
          'Git & GitHub',
          'CI/CD (Jenkins, GitHub Actions)',
          'Agile Methodologies (Scrum, Kanban)',
          'Testing (Jest, Mocha, Chai)',
        ],
      },
    ],
  },
  languages: {
    title: 'Idiomas',
    expertise: ['Español: Nativo', 'Inglés: Básico'],
  },
  achievements: {
    title: 'Logros',
    expertise: [
      'Desarrollo full-stack en proyectos estratégicos para grandes corporaciones (Naturgy, AENA) utilizando tecnologías cómo React, Spring, JavaScript y CMS empresariales (OWCS), contribuyendo al éxito de iniciativas críticas de negocio',
      'Progresión técnica acelerada desde desarrollador junior hasta analista técnico con participación en arquitecturas de software, estimaciones de proyectos y toma de decisiones técnicas en 4 años',
      'Soporte técnico especializado N2/N3 resolviendo incidencias críticas y complejas, desde problemas de aplicaciones hasta análisis de sistemas, con escalación a nivel experto cuando se requiere desarrollo de soluciones personalizadas',
      'Gestión integral de proyectos desde análisis de requisitos hasta implementación, liderando tanto evolutivos como medianas transformaciones tecnológicas en entornos enterprise',
      'Versatilidad tecnológica comprobada en ecosistemas frontend (React, jQuery, JSP) y backend (Spring), con experiencia en integración de sistemas y arquitecturas escalables',
      'Contribución a la optimización de procesos mediante mejoras en arquitecturas empresariales que han resultado en mayor eficiencia operativa y reducción de costes',
    ],
  },
  projects: [
    {
      title: 'Portafolio Profesional',
      description:
        'Desarrollo de sitio web personal con React.js, TypeScript, Vite.JS y Tailwind CSS. Implementación de una SPA (Single Page Application) con contenido mayormente estático, donde la navegación y la presentación de la información se gestionan en el frontend. El contenido principal no cambia frecuentemente y no depende de un backend dinámico para su generación en tiempo real',
      links: [
        { text: 'Ver Sitio Web', href: 'https://veriel.dev' },
        { text: 'Código Fuente', href: 'https://github.com/veriel-dev/web-minimalista' },
      ],
    },
  ],
};
