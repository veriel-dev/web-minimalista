import projects from './projects';
import type { SectionColor } from './colors';

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

export interface CVLanguage {
  language: string;
  level: string;
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
  languages: CVLanguage[];
}

export interface CVStat {
  value: string;
  label: string;
  color: SectionColor;
}

const CAREER_START = new Date(2021, 7, 1); // Agosto 2021 (Viewnext, primer empleo como desarrollador)

const computeYearsOfExperience = (): string => {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START.getFullYear();
  const monthAdjustment = now.getMonth() < CAREER_START.getMonth() ? -1 : 0;
  return `${years + monthAdjustment}+`;
};

export interface CVSkillGroup {
  category: string;
  skills: string;
}

export const cvSkills: CVSkillGroup[] = [
  { category: 'Especialidad', skills: 'Oracle WebCenter Sites' },
  { category: 'Lenguajes', skills: 'Java · TypeScript · JavaScript · Groovy · SQL' },
  { category: 'Frontend', skills: 'Angular · React' },
  { category: 'Backend', skills: 'Spring Boot · Node.js' },
  {
    category: 'Integraciones',
    skills:
      'Sistemas corporativos y APIs de terceros (SAP CDC, SuccessFactors, MuleSoft, Entra ID, etc.)',
  },
  { category: 'Bases de datos', skills: 'Oracle · PostgreSQL' },
  { category: 'Herramientas', skills: 'Git · Docker · Claude Code' },
];

export const cvStats: CVStat[] = [
  { value: computeYearsOfExperience(), label: 'Años de experiencia', color: 'violet' },
  { value: '100+', label: 'Proyectos y evolutivos', color: 'cyan' },
  { value: `${projects.length}`, label: 'Proyectos públicos', color: 'emerald' },
];

export const cvData: CVData = {
  metadata: {
    title: 'Veriel Dev | Curriculum Vitae',
    description: 'Curriculum Vitae de Veriel.dev — Software Engineer',
    keywords: 'software engineer, desarrollo web, frontend, backend, cv, bases de datos',
  },
  header: {
    name: 'Víctor Manuel Ordiales García',
    title: 'Senior Software Engineer',
    location: 'Cáceres, España · remoto',
    phone: '685394859',
    email: 'vmordiales@gmail.com',
    linkedin: 'https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/',
    github: 'https://github.com/veriel-dev',
    website: 'https://veriel.dev/',
  },
  summary: {
    title: 'Perfil Profesional',
    paragraphs: [
      'Senior Software Engineer especializado en Oracle WebCenter Sites, con más de 5 años en portales web de alto tráfico para Naturgy y AENA. Hoy soy responsable técnico de proyectos completos de principio a fin: frontend, backend, integraciones entre sistemas e infraestructura.',
    ],
    highlights: [
      'Especialista en Oracle WebCenter Sites con portales de alto tráfico (Naturgy, AENA)',
      'Stack completo: TypeScript, Java, Go, Groovy + React/Angular/Astro y Spring/Node/Bun/Hono',
      'Progresión de desarrollador a analista técnico en 5 años',
    ],
  },
  experience: [
    {
      role: 'Responsable técnico y desarrollador',
      company: 'Alvea Soluciones Tecnológicas S.L',
      project: 'Cliente AENA',
      period: 'May. 2025 - Actualidad',
      achievements: [
        'Responsable técnico del mantenimiento y los evolutivos del portal público de AENA sobre Oracle WebCenter Sites: estimación, definición funcional y de arquitectura e implementación a partir de las necesidades del equipo funcional',
        'Diseño y desarrollo desde cero de nuevas aplicaciones con Angular y Spring Boot: documento funcional y de arquitectura, definición de funcionalidades e implementación completa',
        'Desarrollo de integraciones con sistemas corporativos y servicios de terceros (SAP CDC, SuccessFactors, MuleSoft, etc.) y gestión con los equipos de infraestructura de todo lo necesario para cada proyecto',
        'Diagnóstico y resolución de incidencias críticas en producción',
      ],
    },
    {
      role: 'Analista programador',
      company: 'Viewnext S.A',
      project: 'Portales y áreas cliente Naturgy',
      period: 'Feb. 2023 - Mar. 2025',
      achievements: [
        'Mantenimiento evolutivo y correctivo de los portales y áreas cliente de Naturgy sobre Oracle WebCenter Sites',
        'Desarrollo backend con Spring de procesos batch, integraciones y nuevas funcionalidades del área privada (autenticación, recobro, batería virtual, etc.)',
        'Análisis de requisitos, diseño técnico, implementación y validación de las soluciones en contacto directo con el cliente',
      ],
    },
    {
      role: 'Desarrollador OWCS',
      company: 'Viewnext S.A',
      project: 'Portales públicos Naturgy',
      period: 'Ago. 2021 - Dic. 2023',
      achievements: [
        'Desarrollo y mantenimiento de los portales públicos de Naturgy sobre Oracle WebCenter Sites para varios mercados (España, Brasil, México, etc.)',
        'Migración completa de sites al gestor: creación y adaptación de componentes de WCS y reescritura de su HTML, CSS y JavaScript',
        'Landings interactivas con componentes dinámicos (calculadoras, simuladores, visualizaciones de datos, etc.)',
        'Componentes y plantillas reutilizables dentro de la arquitectura de OWCS',
      ],
    },
  ],
  education: [
    {
      degree: 'Graduado en Física',
      institution: 'Universidad de Extremadura',
      period: '2014 - 2021',
      highlights: ['Formación en programación científica y análisis de datos'],
    },
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Básico' },
  ],
};
