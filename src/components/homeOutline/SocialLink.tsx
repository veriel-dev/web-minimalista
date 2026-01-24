import { cn } from '../../../libs/utils'
import { Github, Linkedin, Mail } from 'lucide-react'

type Platform = 'github' | 'linkedin' | 'email'

interface SocialLinkProps {
  platform: Platform
  href: string
  label?: string
  className?: string
}

const icons: Record<Platform, React.ReactNode> = {
  github: <Github size={24} />,
  linkedin: <Linkedin size={24} />,
  email: <Mail size={24} />,
}

export function SocialLink({
  platform,
  href,
  label,
  className,
}: SocialLinkProps) {
  const isExternal = platform !== 'email'

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'flex items-center gap-3 px-6 py-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-all duration-300 group',
        className
      )}
      aria-label={label || platform}
    >
      <span className="group-hover:scale-110 transition-transform">
        {icons[platform]}
      </span>
      {label && <span className="text-sm font-medium">{label}</span>}
    </a>
  )
}

export default SocialLink
