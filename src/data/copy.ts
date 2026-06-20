export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  href: string;
  label: string;
}

export const copy = {
  hero: {
    name: 'Veriel.Dev',
    title: 'Senior Software',
    titleHighlight: 'Engineer',
    subtitle:
      'Software Engineer con 5+ años en lo enterprise (Oracle WebCenter Sites) y el resto del tiempo construyendo desde cero con TypeScript, Java y Go.',
    ctaPrimary: { label: 'Ver Proyectos', href: '/projects' },
    ctaSecondary: { label: 'Contactar', href: '#contact' },
  },

  about: {
    title: 'SOBRE MÍ',
    paragraphs: [
      'Aterricé en el código por hartazgo, no por vocación. Empecé a aprender a programar harto de la carrera de Física y el reto técnico me enganchó. Llevo aquí 5 años.',
      'Tres obsesiones se repiten en cada proyecto: construir desde cero para entender qué pasa por debajo, arquitectura que se lee sola y sistema de diseño hasta el último pixel.',
      'Las recreaciones (Game Boy, Yu-Gi-Oh!, OS retro, periódico) son ejercicios de gimnasio. ¿Puedo hacerlo solo con CSS? ¿Sin librerías? ¿Pixel-perfect? Eso.',
    ],
  },

  process: {
    title: 'PROCESO',
    paragraphs: [
      'Antes de tocar el editor, entiendo qué problema estoy resolviendo y qué pasa por debajo del framework.',
      'Refactor cuando algo me empieza a gritar, no cuando me sobra tiempo. Si vamos a usarlo dos veces, lo abstraigo; tres, lo documento.',
      'Sistema de diseño hasta el último pixel: si dos componentes se parecen, comparten tokens; si un comportamiento se repite, vive en un sitio.',
      'Cuando el bug no está en mi código sino en el de otro, me toca a mí arreglarlo. He tirado de proxy, caché y queries cuando «no es cosa mía» dejaba el sistema parado.',
      'Lo que no se ve también importa: logs útiles, builds reproducibles, dependencias justificadas. Lo que ahorra tiempo mañana lo escribo hoy.',
    ],
  },

  contact: {
    title: 'HABLEMOS',
    subtitle:
      '¿Construimos algo? Para hablar de trabajo, de código o de cualquier idea rara que tengas.',
    email: 'vmordiales@gmail.com',
    socialLinks: [
      { platform: 'github', href: 'https://github.com/veriel-dev', label: 'GitHub' },
      {
        platform: 'linkedin',
        href: 'https://www.linkedin.com/in/v%C3%ADctor-manuel-ordiales-garc%C3%ADa/',
        label: 'LinkedIn',
      },
      { platform: 'email', href: 'mailto:vmordiales@gmail.com', label: 'Email' },
    ] as SocialLink[],
  },
};
