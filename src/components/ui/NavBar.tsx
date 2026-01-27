import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '../../lib/utils';
import { Menu, X } from 'lucide-react';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { Logo } from './Logo';

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  isCta?: boolean;
}

interface NavBarProps {
  links: NavLink[];
  transparent?: boolean;
  blur?: boolean;
  className?: string;
}

export function NavBar({ links, transparent = true, blur = true, className }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const scrollToSection = useScrollToSection();

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const sectionId = href.replace('#', '');
      scrollToSection(sectionId);
      setIsMobileMenuOpen(false);
    },
    [scrollToSection],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        transparent && !isScrolled ? 'bg-transparent' : 'bg-zinc-950/90',
        blur && isScrolled && 'backdrop-blur-md',
        isScrolled && 'border-b border-zinc-800/50',
        className,
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="group flex items-center gap-2">
          <Logo size="sm" className="md:w-10 md:h-10" />
          <span className="font-syne font-bold text-lg md:text-xl text-white">VERIEL</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => {
            const isAnchor = link.href.startsWith('#');
            const ctaStyles =
              'px-4 py-2 text-sm font-medium border border-zinc-700 rounded-full text-white hover:border-white transition-colors';
            const linkStyles = cn(
              'text-sm transition-colors',
              isActive(link.href) ? 'text-white font-medium' : 'text-zinc-400 hover:text-white',
            );

            return (
              <li key={link.href}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.isCta
                        ? ctaStyles
                        : 'text-sm text-zinc-400 hover:text-white transition-colors'
                    }
                  >
                    {link.label}
                  </a>
                ) : isAnchor ? (
                  <a
                    href={link.href}
                    onClick={e => handleAnchorClick(e, link.href)}
                    className={cn(
                      link.isCta
                        ? ctaStyles
                        : 'text-sm text-zinc-400 hover:text-white transition-colors',
                      'cursor-pointer',
                    )}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={link.isCta ? ctaStyles : linkStyles}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        aria-label="Menú de navegación móvil"
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="px-6 py-4 space-y-4">
          {links.map(link => {
            const isAnchor = link.href.startsWith('#');
            const ctaStyles =
              'inline-block px-4 py-2 text-sm font-medium border border-zinc-700 rounded-full text-white hover:border-white transition-colors';
            const linkStyles = cn(
              'block transition-colors',
              isActive(link.href) ? 'text-white font-medium' : 'text-zinc-400 hover:text-white',
            );

            return (
              <li key={link.href}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.isCta
                        ? ctaStyles
                        : 'block text-zinc-400 hover:text-white transition-colors'
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : isAnchor ? (
                  <a
                    href={link.href}
                    className={cn(
                      link.isCta
                        ? ctaStyles
                        : 'block text-zinc-400 hover:text-white transition-colors',
                      'cursor-pointer',
                    )}
                    onClick={e => handleAnchorClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={link.isCta ? ctaStyles : linkStyles}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
