import type { OutlineColor } from './theme';

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Section {
  id: string;
  number: string;
  label: string;
  color: OutlineColor;
}

export const mainNavLinks: NavLink[] = [
  { label: 'Inicio', href: '/outline' },
  { label: 'Proyectos', href: '/outline/projects' },
  { label: 'CV', href: '/curriculum-vitae' },
];

export const homeSections: Section[] = [
  { id: 'hero', number: '01', label: 'Inicio', color: 'violet' },
  { id: 'about', number: '02', label: 'Sobre mí', color: 'cyan' },
  { id: 'experience', number: '03', label: 'Experiencia', color: 'emerald' },
  { id: 'skills', number: '04', label: 'Skills', color: 'rose' },
  { id: 'projects', number: '05', label: 'Proyectos', color: 'amber' },
  { id: 'contact', number: '06', label: 'Contacto', color: 'blue' },
];

export const socialLinks: NavLink[] = [
  { label: 'GitHub', href: 'https://github.com/veriel-dev', isExternal: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/veriel-dev', isExternal: true },
];

export const footerLinks: NavLink[] = [...mainNavLinks, { label: 'Contacto', href: '/#contact' }];
