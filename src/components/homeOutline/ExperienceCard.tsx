import { useState } from 'react'
import { cn } from '../../../libs/utils'
import { OutlineText } from '../outlineUI'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { ExperienceItem } from '../../data/pages/home.outline'

interface ExperienceCardProps extends ExperienceItem {
  className?: string
}

export function ExperienceCard({
  company,
  position,
  period,
  description,
  current,
  className,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const periodText = period.end
    ? `${period.start} - ${period.end}`
    : `${period.start} - Presente`

  return (
    <div
      className={cn(
        'relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 last:pb-0',
        current ? 'border-emerald-500' : 'border-zinc-700',
        className
      )}
    >
      {/* Timeline dot */}
      <div
        className={cn(
          'absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full -translate-x-[7px] sm:-translate-x-[9px]',
          current ? 'bg-emerald-500' : 'bg-zinc-700'
        )}
      />

      {/* Content */}
      <div className="space-y-1 sm:space-y-2">
        <OutlineText
          as="h3"
          size="sm"
          color={current ? 'emerald' : 'white'}
          hoverFill
        >
          {position}
        </OutlineText>

        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <span className="text-zinc-300 font-medium">{company}</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-500">{periodText}</span>
        </div>

        {/* Expandable description */}
        <div className={cn('overflow-hidden transition-all duration-300', isExpanded ? 'max-h-96' : 'max-h-0')}>
          <ul className="mt-2 sm:mt-4 space-y-1 sm:space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2">
                <span className="text-zinc-600 mt-0.5 sm:mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs sm:text-sm text-zinc-500 hover:text-zinc-300 transition-colors mt-2"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} />
              Ver menos
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              Ver más
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default ExperienceCard
