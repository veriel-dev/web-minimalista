import { type ReactNode } from 'react'
import { cn } from '../../../libs/utils'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { ProgressIndicator } from './ProgressIndicator'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { mainNavLinks, homeSections } from '../../config/navigation'

type PageType = 'home' | 'list' | 'detail' | 'static'

interface MainLayoutOutlineProps {
  children: ReactNode
  showProgress?: boolean
  showNav?: boolean
  showFooter?: boolean
  footerVariant?: 'full' | 'minimal'
  pageType?: PageType
  className?: string
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
  const sectionIds = homeSections.map((s) => s.id)
  const activeSection = useActiveSection(sectionIds)
  const scrollToSection = useScrollToSection()

  const isHomePage = pageType === 'home'

  const navLinks = isHomePage
    ? homeSections.slice(0, 4).map((section) => ({
        label: section.label,
        href: `#${section.id}`,
      }))
    : mainNavLinks

  return (
    <div
      className={cn(
        'min-h-screen bg-zinc-950 text-white',
        isHomePage && 'scroll-snap-y scroll-snap-mandatory overflow-y-auto',
        className
      )}
    >
      {showNav && (
        <NavBar
          links={navLinks}
          ctaLabel={isHomePage ? 'Contacto' : undefined}
          ctaHref={isHomePage ? '#contact' : undefined}
          transparent={isHomePage}
          blur
        />
      )}

      {showProgress && isHomePage && (
        <ProgressIndicator
          sections={homeSections}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          position="right"
        />
      )}

      <main className={cn(!isHomePage && 'pt-16 md:pt-20')}>
        {children}
      </main>

      {showFooter && (
        <Footer
          variant={isHomePage ? 'full' : footerVariant}
          showSocial
        />
      )}
    </div>
  )
}

export default MainLayoutOutline
