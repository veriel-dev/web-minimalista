import { cn } from '../../../libs/utils'
import type { ExperienceItem } from '../../data/pages/home.outline'

interface ExperienceListItemProps extends ExperienceItem {
  isSelected: boolean
  onClick: () => void
}

export function ExperienceListItem({
  company,
  position,
  period,
  current,
  isSelected,
  onClick,
}: ExperienceListItemProps) {
  const periodText = period.end
    ? `${period.start} - ${period.end}`
    : `${period.start} - Presente`

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left p-4 border-l-2 transition-all',
        isSelected
          ? current
            ? 'bg-emerald-500/10 border-emerald-500'
            : 'bg-zinc-800/50 border-white'
          : 'border-transparent hover:border-zinc-600 hover:bg-zinc-900/50'
      )}
    >
      <span
        className={cn(
          'text-xs font-mono',
          isSelected && current ? 'text-emerald-400' : 'text-zinc-500'
        )}
      >
        {periodText}
      </span>
      <h4
        className={cn(
          'font-bold font-syne mt-1',
          isSelected ? 'text-white' : 'text-zinc-400'
        )}
      >
        {position}
      </h4>
      <p className="text-zinc-500 text-sm">{company}</p>
    </button>
  )
}

export default ExperienceListItem
