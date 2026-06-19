import type { SectionColor } from './colors';
import { cvData } from './cv';

export type PersonaSectionId = 'hero' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

export interface PersonaSection {
  id: PersonaSectionId;
  number: string;
  label: string;
  sublabel: string;
  color: SectionColor;
}

export interface PersonaPartyMember {
  id: string;
  name: string;
  color: SectionColor;
  href: string;
}

export interface PersonaUI {
  brand: { name: string; suffix: string };
  splash: { subtitle: string; hint: string };
  hudHeader: { year: string; badgePrefix: string };
  menuStage: { heading: string; subtitle: string };
  money: { currency: string; amount: string; caption: string };
  party: PersonaPartyMember[];
  partyLabel: string;
  controls: { nav: string; open: string; back: string; location: string };
  takeover: { back: string; menuPrefix: string; watermark: string };
  wipe: { backLabel: string };
}

export const personaSections: PersonaSection[] = [
  { id: 'hero', number: '01', label: 'Inicio', sublabel: 'Quién soy', color: 'violet' },
  { id: 'about', number: '02', label: 'Sobre mí', sublabel: 'El fondo', color: 'cyan' },
  {
    id: 'experience',
    number: '03',
    label: 'Experiencia',
    sublabel: 'Currículum · CV',
    color: 'emerald',
  },
  { id: 'skills', number: '04', label: 'Skills', sublabel: 'Stack técnico', color: 'rose' },
  {
    id: 'projects',
    number: '05',
    label: 'Proyectos',
    sublabel: 'Todo el catálogo',
    color: 'amber',
  },
  { id: 'contact', number: '06', label: 'Contacto', sublabel: 'Hablemos', color: 'blue' },
];

const { github, linkedin, website } = cvData.header;

export const personaUI: PersonaUI = {
  brand: { name: 'Veriel', suffix: '.dev' },

  splash: {
    subtitle: 'Phantom Menu',
    hint: '▶ Pulsa para entrar',
  },

  hudHeader: {
    year: '2026',
    badgePrefix: 'Portfolio',
  },

  menuStage: {
    heading: 'MENU : MAIN',
    subtitle: 'Select a command',
  },

  money: {
    currency: '¥',
    amount: '54',
    caption: 'Repos · GitHub',
  },

  party: [
    { id: 'V', name: 'Veriel', color: 'red', href: website },
    { id: 'GH', name: 'GitHub', color: 'violet', href: github },
    { id: 'in', name: 'LinkedIn', color: 'blue', href: linkedin },
    { id: 'W', name: 'Web', color: 'emerald', href: website },
  ],
  partyLabel: 'Party',

  controls: {
    nav: '↑↓ Navegar',
    open: '⏎ Abrir',
    back: 'esc Atrás',
    location: 'España',
  },

  takeover: {
    back: '◀ Volver',
    menuPrefix: 'Menu //',
    watermark: 'Veriel.dev — Phantom Menu',
  },

  wipe: {
    backLabel: 'Menu Main',
  },
};
