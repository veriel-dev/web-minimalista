import { ChromeIcon, Database, Server } from 'lucide-react';

export const cvPage = {
  metadata: {
    title: 'Veriel Dev | Curriculum Vitae',
    description: 'Curriculum Vitae del desarrollador full stack Veriel.dev',
    keywords: 'desarrollador full stack, desarrollo web, frontend, backend, cv, bases de datos',
  },
  header: {
    name: 'Víctor Manuel Ordiales García',
    job: 'Full Stack Developer - Mid/Senior',
    street: 'Casar de Cáceres, Cáceres, España',
    phone: '685394859',
    email: 'vmordiales@gmail.com',
    linkedin: 'https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/',
    gitHub: 'https://github.com/veriel-dev',
    web: 'https://veriel.dev/',
  },
  about: {
    title: 'PERFIL PROFESIONAL',
    text: 'Desarrollador Full-Stack con más de 3 años de experiencia en entornos empresariales dinámicos, enfocado en el diseño, desarrollo e implementación de soluciones tecnológicas escalables y eficientes. He trabajado extensivamente en sistemas CMS empresariales (OWCS), desarrollando backend robusto con Spring Framework y creando interfaces frontend avanzadas utilizando JavaScript/TypeScript y web components, así como arquitecturas monolíticas y basadas en microservicios.',
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
        company: 'eCapture3D S.L · Badajoz · abr. 2021 - jun. 2021',
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
        company: 'Viewnext S.A · Cáceres · ago. 2021 - dic. 2023 | Portales Públicos Naturgy',
        expertise: [
          'Diseño e implementación de soluciones empresariales completas en Oracle WebCenter Sites (OWCS)',
          'Gestión y optimización del CMS adaptándolo a necesidades específicas del negocio',
          'Mejora del rendimiento y escalabilidad de aplicaciones, incrementando su eficiencia operativa',
        ],
      },
      {
        item: 'Desarrollador FullStack OWCS + Spring Framework',
        company:
          'Viewnext S.A · Cáceres · feb. 2023 - mar. 2025 | Portales Públicos Naturgy y Áreas Clientes',
        expertise: [
          'Evolución desde desarrollo a roles analíticos implementando soluciones con JavaScript/TypeScript y Java',
          'Arquitectura e implementación de soluciones empresariales integrales en OWCS/Spring Framework',
          'Optimización de rendimiento en aplicaciones críticas para el negocio',
        ],
      },
      {
        item: 'Desarrollador Frontend',
        company: 'Viewnext S.A · Cáceres · abr. 2025 - Actualidad | Portal de Contratación Naturgy',
        expertise: [
          'Desarrollo de interfaces modernas y responsivas con React',
          'Implementación de mejoras UX/UI basadas en necesidades de usuario y métricas de negocio',
          'Optimización de aplicaciones React para máximo rendimiento y escalabilidad',
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
        company: 'Universidad de Extremadura - 2014 - 2021',
        expertise: [
          'Especialización en física teórica y experimental',
          'Énfasis en mecánica cuántica y física estadística',
          'Formación en programación científica y análisis de datos',
          'Desarrollo de proyectos de investigación y análisis experimental',
        ],
      },
      {
        item: 'Bachiller',
        company: 'I.E.S.O. Norba Caesarina - 2012 - 2014',
        expertise: [
          'Modalidad de Ciencias y Tecnología con excelencia académica',
          'Desarrollo de fundamentos sólidos en matemáticas, física y química',
          'Participación activa en olimpiadas científicas y proyectos de investigación a nivel escolar',
        ],
      },
    ],
    isEducation: true,
  },
  skills: {
    title: 'COMPETENCIAS TÉCNICAS',
    tecs: [
      {
        title: 'FRONTEND',
        tec: ['HTML5/CSS3', 'JavaScript/Type Script', 'React', 'Vite', 'Astro', 'Web Components'],
        icon: ChromeIcon,
      },
      {
        title: 'BACKEND',
        tec: ['Node', 'Java', 'Spring', 'Express', 'Nest', 'Next.js'],
        icon: Server,
      },
      {
        title: 'BASES DE DATOS',
        tec: ['MongoDB', 'OracleSQL', 'PostgreSQL'],
        icon: Database,
      },
    ],
  },
  languages: {
    title: 'IDIOMAS',
    expertise: ['Español: Nativo', 'Inglés: Básico'],
  },
  achievements: {
    title: 'LOGROS',
    expertise: [
      'Mejora de arquitecturas empresariales, orientadas a aumentar la eficiencia del sistema y reducción de costes.',
      'Contribución a la mejora del rendimiento en aplicaciones de alto tráfico.',
      'Evolución profesional desde un rol técnico inicial hasta funciones analíticas.',
    ],
  },
};
