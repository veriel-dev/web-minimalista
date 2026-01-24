import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';
import { MapPin, Phone, Mail, Linkedin, Github, Globe } from 'lucide-react';
import type { CVHeader, CVSummary } from '../../data/pages/cv.outline';

interface HeaderSectionProps {
  header: CVHeader;
  summary: CVSummary;
  className?: string;
}

export function HeaderSection({ header, summary, className }: HeaderSectionProps) {
  const contactItems = [
    { icon: MapPin, value: header.location, href: null, label: 'Ubicación' },
    { icon: Phone, value: header.phone, href: `tel:${header.phone}`, label: 'Teléfono' },
    { icon: Mail, value: header.email, href: `mailto:${header.email}`, label: 'Email' },
    { icon: Linkedin, value: 'LinkedIn', href: header.linkedin, label: 'Perfil de LinkedIn' },
    { icon: Github, value: 'GitHub', href: header.github, label: 'Perfil de GitHub' },
    { icon: Globe, value: 'veriel.dev', href: header.website, label: 'Sitio web personal' },
  ];

  return (
    <section className={cn('mb-16 sm:mb-20', className)}>
      {/* Header principal */}
      <div className="mb-12">
        <h1 className="font-black font-syne leading-none mb-4">
          <OutlineText as="span" size="2xl" color="violet" hoverFill>
            {header.name}
          </OutlineText>
        </h1>

        <p className="text-xl sm:text-2xl text-zinc-400 font-mono mb-8">
          {header.title}
        </p>

        {/* Contact grid */}
        <address className="flex flex-wrap gap-4 sm:gap-6 not-italic">
          {contactItems.map(({ icon: Icon, value, href, label }) => (
            <div key={value} className="flex items-center gap-2 text-zinc-400">
              <Icon size={16} className="text-zinc-500" aria-hidden="true" />
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm hover:text-white transition-colors"
                  aria-label={label}
                >
                  {value}
                </a>
              ) : (
                <span className="text-sm">{value}</span>
              )}
            </div>
          ))}
        </address>
      </div>

      {/* Summary */}
      <div className="border-l-2 border-violet-500/30 pl-6">
        <h2 className="font-syne font-bold text-lg text-white mb-4">
          {summary.title}
        </h2>

        <div className="space-y-4 mb-6">
          {summary.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {summary.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
              <span className="text-violet-500 mt-1">▸</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HeaderSection;
