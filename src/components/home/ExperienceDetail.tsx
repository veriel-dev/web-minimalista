import { cn } from '../../lib/utils';
import { OutlineText } from '../ui';
import type { ExperienceItem } from '../../data/pages/home.outline';

interface ExperienceDetailProps {
  experience: ExperienceItem;
  className?: string;
}

export function ExperienceDetail({ experience, className }: ExperienceDetailProps) {
  const { company, position, period, description, current } = experience;

  const periodText = period.end ? `${period.start} - ${period.end}` : `${period.start} - Presente`;

  return (
    <div
      className={cn(
        'p-6 sm:p-8 rounded-2xl transition-all',
        current
          ? 'border border-emerald-500/30 bg-emerald-500/5'
          : 'border border-zinc-800 bg-zinc-900/30',
        className,
      )}
    >
      {/* Header con badge y fecha */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
        {current && (
          <span className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">
            Posición actual
          </span>
        )}
        <span className="text-zinc-500 text-sm font-mono">{periodText}</span>
      </div>

      {/* Título del puesto */}
      <h3 className="font-black font-syne mb-2">
        <OutlineText as="span" size="lg" color={current ? 'emerald' : 'white'} hoverFill>
          {position}
        </OutlineText>
      </h3>

      {/* Empresa */}
      <p className="text-lg sm:text-xl text-zinc-300 mb-6">{company}</p>

      {/* Responsabilidades */}
      <div>
        <p
          className={cn('text-sm font-medium mb-3', current ? 'text-emerald-400' : 'text-zinc-400')}
        >
          Responsabilidades
        </p>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-zinc-400">
              <span className={current ? 'text-emerald-500' : 'text-zinc-500'}>→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceDetail;
