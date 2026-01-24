import { cn } from '../../../libs/utils'
import { OutlineText } from '../outlineUI'
import type { OutlineColor } from '../../config/theme'

interface StatCardProps {
  value: string | number
  label: string
  color?: OutlineColor
  className?: string
}

export function StatCard({
  value,
  label,
  color = 'white',
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors',
        className
      )}
    >
      <OutlineText as="span" size="xl" color={color} hoverFill>
        {value}
      </OutlineText>
      <span className="mt-2 text-sm text-zinc-400 text-center">
        {label}
      </span>
    </div>
  )
}

export default StatCard
