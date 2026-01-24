import { cn } from '../../../libs/utils'
import { SectionHeader } from '../outlineUI'
import { SkillCard } from './SkillCard'
import type { SkillItem } from '../../data/pages/home.outline'

interface SkillsSectionProps {
  title: string
  skills: SkillItem[]
  className?: string
}

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de Datos',
  languages: 'Lenguajes',
  devops: 'DevOps',
}

export function SkillsSection({
  title,
  skills,
  className,
}: SkillsSectionProps) {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, SkillItem[]>
  )

  return (
    <div className={cn('max-w-4xl mx-auto w-full', className)}>
      <SectionHeader
        number="04"
        title={title}
        color="rose"
      />

      <div className="mt-10 space-y-8">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
              {categoryLabels[category] || category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {categorySkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  category={skill.category}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
