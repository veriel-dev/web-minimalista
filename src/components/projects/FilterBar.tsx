import { cn } from '../../lib/utils';
import { OutlineText } from '../ui';
import type { FilterOption, ProjectCategory } from '../../data/pages/projects.outline';

interface FilterBarProps {
  filters: FilterOption[];
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
  className?: string;
}

export function FilterBar({ filters, activeFilter, onFilterChange, className }: FilterBarProps) {
  return (
    <div className={cn('max-w-5xl mx-auto w-full px-6', className)}>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {filters.map(filter => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={cn(
                'px-4 py-2 sm:px-6 sm:py-3 border transition-all duration-300 font-syne text-sm sm:text-base',
                isActive ? 'border-current bg-zinc-900' : 'border-zinc-800 hover:border-zinc-600',
              )}
            >
              <OutlineText
                as="span"
                size="sm"
                color={filter.color}
                className={cn(isActive && 'text-outline-filled')}
              >
                {filter.label}
              </OutlineText>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBar;
