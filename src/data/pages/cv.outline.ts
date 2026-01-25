import type { LucideIcon } from 'lucide-react';
import { Chrome, Server, Database, Wrench } from 'lucide-react';

export interface CVHeader {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface CVSummary {
  title: string;
  paragraphs: string[];
  highlights: string[];
}

export interface CVJob {
  role: string;
  company: string;
  project?: string;
  period: string;
  achievements: string[];
}

export interface CVEducation {
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
}

export interface CVSkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface CVLanguage {
  language: string;
  level: string;
}

export interface CVAchievement {
  text: string;
}

export interface CVData {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  header: CVHeader;
  summary: CVSummary;
  experience: CVJob[];
  education: CVEducation[];
  skills: CVSkillCategory[];
  languages: CVLanguage[];
  achievements: CVAchievement[];
}

export const cvData: CVData = {
  metadata: {
    title: 'Veriel Dev | Curriculum Vitae',
    description: 'Curriculum Vitae del desarrollador full stack Veriel.dev',
    keywords: 'desarrollador full stack, desarrollo web, frontend, backend, cv, bases de datos',
  },
  header: {
    name: 'Víctor Manuel Ordiales García',
    title: 'Lead Developer',
    location: 'Casar de Cáceres, Cáceres, España',
    phone: '685394859',
    email: 'vmordiales@gmail.com',
    linkedin: 'https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/',
    github: 'https://github.com/veriel-dev',
    website: 'https://veriel.dev/',
  },
  summary: {
    title: 'Perfil Profesional',
    paragraphs: [
      'Lead Developer con más de 4 años de experiencia en aplicaciones web empresariales. Especializado en CMS empresariales (OWCS), backend con Spring Framework y frontend con JavaScript/TypeScript y Web Components.',
      'En proyectos personales, he ampliado mi stack con React, Node.js, NestJS y Next.js. También trabajo con Astro para sitios estáticos y Docker para contenedores.',
    ],
    highlights: [
      'Diseño e implementación de soluciones web eficientes y escalables',
      'Stack completo: OWCS, Spring, JavaScript/TypeScript, React, Node.js, Docker',
      'Prácticas ágiles y actualización técnica constante',
    ],
  },
  experience: [
    {
      role: 'Desarrollador OWCS + Spring Boot',
      company: 'Alvea Soluciones Tecnológicas S.L',
      project: 'Web Pública Aena',
      period: 'May. 2025 - Actualidad',
      achievements: [
        'Desarrollo del portal público de AENA con OWCS y Spring Boot',
        'Mejora de tiempos de respuesta en aplicaciones de alto tráfico',
        'Resolución de incidencias técnicas N2/N3',
        'Comunicación directa con cliente para requisitos y soporte',
      ],
    },
    {
      role: 'Desarrollador Frontend',
      company: 'Viewnext S.A',
      project: 'Portal de Contratación Naturgy',
      period: 'Abr. 2025 - May. 2025',
      achievements: [
        'Desarrollo de interfaces con React para portal de contratación',
        'Implementación de mejoras UX/UI según métricas de conversión',
        'Reducción de re-renders y optimización de componentes',
      ],
    },
    {
      role: 'Desarrollador OWCS + Spring Boot',
      company: 'Viewnext S.A',
      project: 'Portales Públicos y Áreas Clientes Naturgy',
      period: 'Feb. 2023 - Mar. 2025',
      achievements: [
        'Evolución de desarrollador a analista técnico en 2 años',
        'Diseño de arquitectura para portales públicos y áreas de cliente',
        'Implementación de features con JavaScript/TypeScript y Java/Spring',
      ],
    },
    {
      role: 'Desarrollador OWCS',
      company: 'Viewnext S.A',
      project: 'Portales Públicos Naturgy',
      period: 'Ago. 2021 - Dic. 2023',
      achievements: [
        'Desarrollo de portales corporativos en Oracle WebCenter Sites (OWCS)',
        'Configuración y personalización del CMS según requisitos de negocio',
        'Creación de componentes reutilizables y templates',
      ],
    },
    {
      role: 'Desarrollador en I+D',
      company: 'eCapture3D S.L',
      period: 'Abr. 2021 - Jun. 2021',
      achievements: [
        'Modelos predictivos con Machine Learning y Deep Learning',
        'Análisis de variables climáticas con datos de AEMET',
        'Procesamiento y análisis de grandes volúmenes de datos meteorológicos',
      ],
    },
  ],
  education: [
    {
      degree: 'Graduado en Física',
      institution: 'Universidad de Extremadura',
      period: '2014 - 2021',
      highlights: [
        'Especialización en física teórica y experimental',
        'Énfasis en mecánica cuántica y física estadística',
        'Formación en programación científica y análisis de datos',
      ],
    },
  ],
  skills: [
    {
      title: 'Frontend',
      icon: Chrome,
      skills: [
        'React.js & Next.js',
        'TypeScript & JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Tailwind CSS & Sass',
        'Web Components',
        'Astro',
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js & Express.js & Nest.js', 'Spring Boot & Java', 'Golang (Go)'],
    },
    {
      title: 'Database & Infrastructure',
      icon: Database,
      skills: [
        'MySQL & PostgreSQL & Oracle',
        'MongoDB & Redis',
        'ORM & ODM',
        'Docker & Container Orchestration',
      ],
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: [
        'Git & GitHub',
        'CI/CD (Jenkins, GitHub Actions)',
        'Agile Methodologies (Scrum, Kanban)',
        'Testing (Jest, Mocha, Chai)',
      ],
    },
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Básico' },
  ],
  achievements: [
    {
      text: 'Desarrollo full-stack en proyectos estratégicos para grandes corporaciones (Naturgy, AENA) utilizando tecnologías como React, Spring, JavaScript y CMS empresariales',
    },
    {
      text: 'Progresión técnica acelerada desde desarrollador junior hasta analista técnico en 4 años',
    },
    { text: 'Soporte técnico especializado N2/N3 resolviendo incidencias críticas y complejas' },
    { text: 'Gestión integral de proyectos desde análisis de requisitos hasta implementación' },
    {
      text: 'Versatilidad tecnológica en ecosistemas frontend (React, jQuery, JSP) y backend (Spring)',
    },
  ],
};
