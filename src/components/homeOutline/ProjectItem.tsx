import { Link } from 'wouter'
import { cn } from '../../../libs/utils'
import { OutlineText } from '../outlineUI'
import { ArrowRight } from 'lucide-react'
import type { OutlineColor } from '../../config/theme'

interface ProjectItemProps {
  number: string
  title: string
  description: string
  tags: string[]
  color: OutlineColor
  href: string
  className?: string
}

export function ProjectItem({
  number,
  title,
  description,
  tags,
  color,
  href,
  className,
}: ProjectItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group block p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Number */}
          <span className="text-xs font-mono text-zinc-600 mb-2 block">
            {number}
          </span>

          {/* Title */}
          <OutlineText as="h3" size="lg" color={color} hoverFill className="mb-2">
            {title}
          </OutlineText>

          {/* Description */}
          <p className="text-sm text-zinc-400 mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight
          size={20}
          className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all"
        />
      </div>
    </Link>
  )
}

export default ProjectItem
