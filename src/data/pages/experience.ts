interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  description: string[];
}
export const TITLE_EXPERIENCE = 'EXPERIENCIA';
export const experienceData: ExperienceItem[] = [
  {
    title: 'Desarrollador en I+D',
    company: 'eCapture3D S.L',
    dates: 'Abr 2021 - Jun 2021',
    description: [
      '1. Modelos predictivos basados en Machine Learning y Deep Learning para análisis de variables climáticas con datos de AEMET.',
      '2. Identificación de patrones clave en grandes volúmenes de datos meteorológicos, mejorando la precisión de los modelos.',
      '3. Procesamiento y análisis de datos de AEMET.',
      '4. Participación en proyectos de investigación tecnológica avanzada en análisis de datos climáticos.',
    ],
  },
  {
    title: 'Desarrollador OWCS',
    company: 'Viewnext S.A',
    dates: 'Ago 2021 - Dic 2023',
    description: [
      '1. Proyecto: Portales Públicos Naturgy',
      '2. Diseño e implementación de soluciones empresariales completas en Oracle WebCenter Sites (OWCS).',
      '3. Gestión y optimización del CMS adaptándolo a necesidades específicas del negocio.',
      '4. Mejora del rendimiento y escalabilidad de aplicaciones, incrementando su eficiencia operativa.',
    ],
  },
  {
    title: 'Desarrollador OWCS + Spring Boot',
    company: 'Viewnext S.A',
    dates: 'Febre 2023 - Mar 2025',
    description: [
      '1. Proyectos: Portales Públicos Naturgy y Áreas Clientes Naturgy',
      '2. Evolución desde desarrollo a roles analíticos implementando soluciones con JavaScript/TypeScript y Java.',
      '3. Arquitectura e implementación de soluciones empresariales integrales en OWCS/Spring Framework.',
      '4. Optimización de rendimiento en aplicaciones críticas para el negocio.',
    ],
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Viewnext S.A',
    dates: 'Abr 2025 - Mayo 2025',
    description: [
      '1. Proyecto: Portal de Contratación Naturgy',
      '2. Desarrollo de interfaces modernas y responsivas con React.',
      '3. Implementación de mejoras UX/UI basadas en necesidades de usuario y métricas de negocio.',
      '4. Optimización de aplicaciones React para máximo rendimiento y escalabilidad.',
    ],
  },
  {
    title: 'Desarrollador OWCS / Spring Boot',
    company: 'Alvea Soluciones Tecnológicas S.L',
    dates: 'May 2025 - Presente',
    description: [
      '1. Proyecto: Web Pública Aena',
      '2. Arquitectura e implementación de soluciones empresariales integrales utilizando OWCS y Spring Boot.',
      '3. Optimización de rendimiento y escalabilidad en aplicaciones críticas para el negocio.',
      '4. Resolución proactiva de incidencias técnicas y mantenimiento correctivo de sistemas en producción.',
      '5. Gestión directa de relaciones con clientes, proporcionando soporte técnico especializado y seguimiento continuo',
      '6. Desarrollo e implementación de nuevas funcionalidades siguiendo metodologías ágiles y mejores prácticas de desarrollo',
      '7. Proyecto manejado y mantenido por Indra/Minsait',
    ],
  },
];
