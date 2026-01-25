import { Link } from 'wouter';
import { cn } from '../../lib/utils';
import { OutlineText } from './OutlineText';
import { footerLinks, socialLinks } from '../../config/navigation';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  variant?: 'full' | 'minimal';
  showSocial?: boolean;
  className?: string;
}

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={20} />,
  LinkedIn: <Linkedin size={20} />,
  Email: <Mail size={20} />,
};

export function Footer({ variant = 'full', showSocial = true, className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === 'minimal') {
    return (
      <footer className={cn('border-t border-zinc-800/50 bg-zinc-950', className)}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {currentYear} Veriel. Todos los derechos reservados.
            </p>
            {showSocial && (
              <div className="flex items-center gap-4">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    {socialIcons[link.label] || link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn('border-t border-zinc-800/50 bg-zinc-950', className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <OutlineText as="span" size="sm" color="violet" hoverFill>
                V
              </OutlineText>
              <span className="font-syne font-bold text-xl text-white">ERIEL</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs">
              Full Stack Developer apasionado por crear experiencias web únicas y funcionales.
            </p>
          </div>

          {/* Enlaces de navegación */}
          <div className="space-y-4">
            <p className="font-syne font-semibold text-white">Navegación</p>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          {showSocial && (
            <div className="space-y-4">
              <p className="font-syne font-semibold text-white">Conecta</p>
              <ul className="space-y-2">
                {socialLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {socialIcons[link.label]}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {currentYear} Veriel. Todos los derechos reservados.
            </p>
            <p className="text-sm text-zinc-400">
              Hecho con <span className="text-rose-500">♥</span> y mucho código
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
