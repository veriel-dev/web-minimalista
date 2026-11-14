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
      'Más de 5 años desarrollando portales web de alto tráfico sobre Oracle WebCenter Sites para grandes empresas. En mi tiempo libre construyo herramientas y productos propios desde cero con TypeScript, Java y Go.',
    ctaPrimary: { label: 'Ver Proyectos', href: '/projects' },
    ctaSecondary: { label: 'Contactar', href: '#contact' },
  },

  about: {
    title: 'SOBRE MÍ',
    paragraphs: [
      'Soy Veriel, desarrollador de software. Vengo de la Física y desde 2021 trabajo en portales web de alto tráfico para grandes empresas, donde hoy soy responsable técnico de mis proyectos.',
    ],
    profileTitle: 'Ficha',
    profile: [
      { label: 'Alias', value: 'Veriel' },
      { label: 'Rol', value: 'Responsable técnico' },
      { label: 'Formación', value: 'Física' },
      { label: 'Ubicación', value: 'España · remoto' },
      { label: 'Especialidad', value: 'Oracle WebCenter Sites' },
    ],
  },

  contact: {
    title: 'HABLEMOS',
    subtitle:
      '¿Quieres comentar algún proyecto, hablar de desarrollo o proponerme una oportunidad? Escríbeme.',
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
