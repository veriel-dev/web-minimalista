import { Link } from 'wouter'
import { cn } from '../../../libs/utils'
import { OutlineText } from '../outlineUI'
import { ArrowDown } from 'lucide-react'
import { useScrollToSection } from '../../hooks/useScrollToSection'

interface HeroSectionProps {
  name: string
  title: string
  titleHighlight?: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  className?: string
}

export function HeroSection({
  name,
  title,
  titleHighlight,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  className,
}: HeroSectionProps) {
  const scrollToSection = useScrollToSection()

  // Split name into first and last name for two-line display
  const nameParts = name.split(' ')
  const firstName = nameParts[0]
  const lastName = nameParts.slice(1).join(' ')

  return (
    <div className={cn('max-w-5xl mx-auto px-6 text-center', className)}>
      {/* Section number */}
      <p className="text-zinc-600 text-xs uppercase tracking-[0.4em] mb-4 font-mono">
        01 / Portfolio 2026
      </p>

      {/* Name - Two lines */}
      <h1 className="font-black font-syne leading-none mb-4 sm:mb-6">
        <OutlineText as="span" size="3xl" color="white" thick className="block">
          {firstName}
        </OutlineText>
        <span className="block text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">{lastName}</span>
      </h1>

      {/* Title with highlight */}
      <p className="text-zinc-500 text-lg sm:text-xl md:text-2xl font-light mt-6 sm:mt-8 mb-4">
        {title}{' '}
        {titleHighlight && (
          <OutlineText as="span" size="md" color="violet" hoverFill className="font-bold">
            {titleHighlight}
          </OutlineText>
        )}
      </p>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12">
          {subtitle}
        </p>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {ctaPrimary && (
          <Link
            href={ctaPrimary.href}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition flex items-center justify-center gap-2"
          >
            {ctaPrimary.label}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        )}
        {ctaSecondary && (
          <Link
            href={ctaSecondary.href}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-zinc-700 hover:border-white rounded-full transition text-white text-center"
          >
            {ctaSecondary.label}
          </Link>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="mt-12 sm:mt-20 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-zinc-600 hover:text-white transition inline-block cursor-pointer"
          aria-label="Ir a la sección Sobre mí"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </div>
  )
}

export default HeroSection
