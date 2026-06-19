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
  languages: CVLanguage[];
  achievements: CVAchievement[];
}

export interface CVStat {
  value: string;
  label: string;
  color: SectionColor;
}

const CAREER_START = new Date(2021, 3, 1); // Abril 2021 (eCapture3D, primer empleo)

const computeYearsOfExperience = (): string => {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START.getFullYear();
  const monthAdjustment = now.getMonth() < CAREER_START.getMonth() ? -1 : 0;
  return `${years + monthAdjustment}+`;
};

export const cvStats: CVStat[] = [
  { value: computeYearsOfExperience(), label: 'Años de experiencia', color: 'violet' },
  { value: '20+', label: 'Proyectos profesionales', color: 'cyan' },
  { value: `${projects.length}`, label: 'Proyectos personales', color: 'emerald' },
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
      'Software Engineer con 5+ años de experiencia en aplicaciones web empresariales. Especialista en Oracle WebCenter Sites, con portales de alto tráfico para Naturgy y AENA usando Spring/Java en backend y JavaScript/TypeScript en frontend.',
      'Fuera del ámbito corporativo construyo plataformas, herramientas de desarrollador y recreaciones técnicas con React, Astro, Bun, Hono, Go y Tauri 2. Obsesión por construir desde cero y por el detalle del diseño.',
    ],
    highlights: [
      'Especialista en Oracle WebCenter Sites con portales de alto tráfico (Naturgy, AENA)',
      'Stack completo: TypeScript, Java, Go, Groovy + React/Angular/Astro y Spring/Node/Bun/Hono',
      'Progresión de desarrollador a analista técnico en 5 años',
    ],
  },
  experience: [
    {
      role: 'Desarrollador OWCS + Spring Boot',
      company: 'Alvea Soluciones Tecnológicas S.L',
      project: 'Web Pública AENA',
      period: 'May. 2025 - Actualidad',
      achievements: [
        'Mantenimiento y evolución del portal público de AENA sobre Oracle WebCenter Sites + Spring Boot',
        'Diagnóstico y resolución de incidencias críticas N2/N3/N4 en producción: bugs intermitentes sin logs útiles, problemas de caché, queries OWCS mal estructuradas, fallos de integración entre sistemas',
        'Integración del portal con múltiples sistemas internos del cliente (SPA CDC, plataforma de traducciones, otros)',
        'Desarrollo de proyectos nuevos desde cero en Angular + Spring Boot siguiendo la arquitectura corporativa del cliente',
        'Soporte funcional y técnico continuo a editores del gestor',
      ],
    },
    {
      role: 'Desarrollador Frontend',
      company: 'Viewnext S.A',
      project: 'Portal de Contratación Naturgy',
      period: 'Abr. 2025 - May. 2025',
      achievements: [
        'Desarrollo y mantenimiento de interfaces con React en el portal de contratación: refactorización de componentes, resolución de incidencias visuales y endurecimiento de validaciones de formularios',
        'Coordinación con diseño y QA para validar mejoras de UX antes de release',
      ],
    },
    {
      role: 'Desarrollador OWCS + Spring Boot',
      company: 'Viewnext S.A',
      project: 'Portales y Áreas Cliente Naturgy',
      period: 'Feb. 2023 - Mar. 2025',
      achievements: [
        'Mantenimiento evolutivo y correctivo de los portales y áreas cliente de Naturgy sobre Oracle WebCenter Sites',
        'Desarrollo backend en Spring para procesos batch, integraciones y nuevas funcionalidades del área privada (sistema de autenticación, recobro, batería virtual, etc.)',
        'Evolución de desarrollador a analista técnico: análisis de requisitos, diseño técnico y propuesta de soluciones end-to-end',
        'Comunicación directa con cliente para definición de features y soporte continuo',
      ],
    },
    {
      role: 'Desarrollador OWCS',
      company: 'Viewnext S.A',
      project: 'Portales Públicos Naturgy',
      period: 'Ago. 2021 - Dic. 2023',
      achievements: [
        'Desarrollo y mantenimiento del portal público corporativo sobre Oracle WebCenter Sites para varios mercados internacionales (España, Brasil, México)',
        'Migración íntegra de sites al gestor, reescribiendo HTML, JS y CSS completos cuando la herramienta no daba la contribución suficiente',
        'Implementación de landings interactivas con componentes vivos: calculadoras, simuladores, visualizaciones de datos',
        'Creación de componentes y templates reutilizables dentro de la arquitectura de OWCS',
      ],
    },
    {
      role: 'Desarrollador en I+D',
      company: 'eCapture3D S.L',
      period: 'Abr. 2021 - Jun. 2021',
      achievements: [
        'Análisis de datos meteorológicos de AEMET y desarrollo de modelos predictivos de variables climáticas',
        'Primer contacto profesional con el desarrollo de software',
      ],
    },
  ],
  education: [
    {
      degree: 'Graduado en Física',
      institution: 'Universidad de Extremadura',
      period: '2014 - 2021',
      highlights: [
        'Física teórica y experimental: mecánica cuántica, física estadística',
        'Formación en programación científica y análisis de datos',
      ],
    },
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Básico' },
  ],
  achievements: [
    {
      text: 'Desarrollo con Oracle WebCenter Sites y Spring en portales estratégicos para Naturgy y AENA',
    },
    {
      text: 'Progresión técnica acelerada desde desarrollador junior hasta analista técnico en 4 años',
    },
    { text: 'Soporte técnico N2/N3 en entornos de producción de alto tráfico' },
    { text: 'Gestión integral de proyectos desde análisis de requisitos hasta implementación' },
    {
      text: 'Comunicación directa con cliente en toma de requisitos y soporte técnico',
    },
  ],
};
