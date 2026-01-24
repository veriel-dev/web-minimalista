import { Link } from 'wouter'
import { cn } from '../../lib/utils'
import { OutlineText } from '../ui'
import type { OutlineColor } from '../../config/theme'

export interface ProjectRowProps {
  number: string
  title: string
  description: string
  tags: string[]
  color: OutlineColor
  slug: string
}

const arrowColorClasses: Record<OutlineColor, string> = {
  white: 'group-hover:text-white',
  violet: 'group-hover:text-violet-400',
  cyan: 'group-hover:text-cyan-400',
  emerald: 'group-hover:text-emerald-400',
  rose: 'group-hover:text-rose-400',
  amber: 'group-hover:text-amber-400',
  blue: 'group-hover:text-blue-400',
}

export function ProjectRow({
  number,
  title,
  description,
  tags,
  color,
  slug,
}: ProjectRowProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block border-b border-zinc-800 pb-4 sm:pb-6 cursor-pointer"
    >
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0 flex-1">
          {/* Number */}
          <span className="text-zinc-400 text-[10px] sm:text-xs font-mono">{number}</span>

          {/* Title */}
          <h3 className="font-bold font-syne mt-1 sm:mt-2">
            <OutlineText as="span" size="md" color={color} hoverFill>
              {title}
            </OutlineText>
          </h3>

          {/* Description */}
          <p className="text-zinc-500 text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-2">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 py-0.5 sm:py-1 border border-zinc-700 rounded-full text-[10px] sm:text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <span
          className={cn(
            'text-xl sm:text-2xl md:text-4xl text-zinc-700 group-hover:translate-x-2 transition-all flex-shrink-0 mt-4',
            arrowColorClasses[color]
          )}
        >
          →
        </span>
      </div>
    </Link>
  )
}

export default ProjectRow
