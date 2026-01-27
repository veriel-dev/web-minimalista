import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'wouter';
import { cn } from '../../lib/utils';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { ProgressIndicator } from './ProgressIndicator';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { mainNavLinks, homeSections } from '../../config/navigation';

type PageType = 'home' | 'list' | 'detail' | 'static';

interface MainLayoutOutlineProps {
  children: ReactNode;
  showProgress?: boolean;
  showNav?: boolean;
  showFooter?: boolean;
  footerVariant?: 'full' | 'minimal';
  pageType?: PageType;
  className?: string;
}

export function MainLayoutOutline({
  children,
  showProgress = false,
  showNav = true,
  showFooter = true,
  footerVariant = 'full',
  pageType = 'home',
  className,
}: MainLayoutOutlineProps) {
  const [location] = useLocation();
  const sectionIds = homeSections.map(s => s.id);
  const activeSection = useActiveSection(sectionIds);
  const scrollToSection = useScrollToSection();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isHomePage = pageType === 'home';

  const homeNavLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'CV', href: '/curriculum-vitae' },
  ];

  const navLinks = isHomePage ? homeNavLinks : mainNavLinks;

  return (
    <div
      className={cn(
        'min-h-screen bg-zinc-950 text-white',
        isHomePage && 'scroll-snap-y scroll-snap-mandatory overflow-y-auto',
        className,
      )}
    >
      {showNav && <NavBar links={navLinks} transparent={isHomePage} blur />}

      {showProgress && isHomePage && (
        <ProgressIndicator
          sections={homeSections}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          position="right"
        />
      )}

      <main className={cn(!isHomePage && 'pt-16 md:pt-20')}>{children}</main>

      {showFooter && <Footer variant={isHomePage ? 'full' : footerVariant} showSocial />}
    </div>
  );
}

export default MainLayoutOutline;
