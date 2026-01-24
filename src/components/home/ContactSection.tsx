import { cn } from '../../lib/utils'
import { OutlineText } from '../ui'
import type { SocialLinkItem } from '../../data/pages/home.outline'

interface ContactSectionProps {
  title: string
  subtitle?: string
  description?: string
  email: string
  socialLinks: SocialLinkItem[]
  className?: string
}

export function ContactSection({
  title,
  subtitle,
  description,
  email,
  socialLinks,
  className,
}: ContactSectionProps) {
  return (
    <div className={cn('max-w-4xl mx-auto w-full text-center', className)}>
      {/* Header */}
      <p className="text-zinc-400 text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 font-mono">
        06 / Contacto
      </p>
      <h2 className="font-black font-syne leading-none mb-4 sm:mb-6 md:mb-8">
        <OutlineText as="span" size="3xl" color="white">
          {title}
        </OutlineText>
      </h2>

      {/* Subtitle & Description */}
      {(subtitle || description) && (
        <p className="text-zinc-400 text-sm sm:text-base md:text-xl max-w-lg mx-auto mb-6 sm:mb-8 md:mb-12">
          {subtitle || description}
        </p>
      )}

      {/* Email */}
      <a
        href={`mailto:${email}`}
        className="inline-block font-syne font-bold mb-6 sm:mb-8 md:mb-12"
      >
        <OutlineText as="span" size="lg" color="violet" hoverFill>
          {email}
        </OutlineText>
      </a>

      {/* Social Links */}
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center mt-6 sm:mt-8 md:mt-12">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.href}
            target={link.platform !== 'email' ? '_blank' : undefined}
            rel={link.platform !== 'email' ? 'noopener noreferrer' : undefined}
            className="group"
          >
            <OutlineText as="span" size="sm" color="white" hoverFill className="font-bold">
              {link.label}
            </OutlineText>
          </a>
        ))}
      </div>

      {/* Availability note */}
      <p className="text-zinc-400 text-[10px] sm:text-xs md:text-sm mt-8 sm:mt-12 md:mt-16">
        Disponible para proyectos freelance y oportunidades full-time
      </p>
    </div>
  )
}

export default ContactSection
