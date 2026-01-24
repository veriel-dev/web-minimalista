import { cn } from '../../../libs/utils'
import { OutlineText } from '../outlineUI'
import { ExperienceCard } from './ExperienceCard'
import type { ExperienceItem } from '../../data/pages/home.outline'

interface ExperienceSectionProps {
  title: string
  experiences: ExperienceItem[]
  className?: string
}

export function ExperienceSection({
  title,
  experiences,
  className,
}: ExperienceSectionProps) {
  return (
    <div className={cn('max-w-5xl mx-auto w-full', className)}>
      {/* Header */}
      <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 font-mono">
        03 / Experiencia
      </p>
      <h2 className="font-black font-syne leading-none mb-6 sm:mb-8 md:mb-10">
        <OutlineText as="span" size="2xl" color="emerald">
          {title}
        </OutlineText>
      </h2>

      {/* Timeline */}
      <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-2">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${index}`}
            {...experience}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection
