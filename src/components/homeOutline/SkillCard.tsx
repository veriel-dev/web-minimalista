import { cn } from '../../../libs/utils'
import { outlineColors, type OutlineColor } from '../../config/theme'

interface SkillCardProps {
  name: string
  category: string
  color?: OutlineColor
  className?: string
}

export function SkillCard({
  name,
  category,
  color = 'white',
  className,
}: SkillCardProps) {
  const colorValue = outlineColors[color]

  return (
    <div
      className={cn(
        'group relative px-4 py-3 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-current transition-all duration-300 cursor-default',
        className
      )}
      style={{ '--skill-color': colorValue } as React.CSSProperties}
    >
      <span
        className="text-sm font-medium text-zinc-300 group-hover:text-current transition-colors"
        style={{ color: 'inherit' }}
      >
        {name}
      </span>
      <span className="block text-xs text-zinc-600 mt-0.5 capitalize">
        {category}
      </span>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: colorValue }}
      />
    </div>
  )
}

export default SkillCard
