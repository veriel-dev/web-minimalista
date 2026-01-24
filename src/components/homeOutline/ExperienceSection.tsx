import { useState } from 'react';
import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';
import { ExperienceListItem } from './ExperienceListItem';
import { ExperienceDetail } from './ExperienceDetail';
import type { ExperienceItem } from '../../data/pages/home.outline';

interface ExperienceSectionProps {
  title: string;
  experiences: ExperienceItem[];
  className?: string;
}

export function ExperienceSection({ title, experiences, className }: ExperienceSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExperience = experiences[selectedIndex];

  return (
    <div className={cn('max-w-5xl mx-auto w-full', className)}>
      {/* Header */}
      <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 font-mono">
        03 / Experiencia
      </p>
      <h2 className="font-black font-syne leading-none mb-6 sm:mb-8 md:mb-10">
        <OutlineText as="span" size="2xl" color="emerald" hoverFill>
          {title}
        </OutlineText>
      </h2>

      {/* Split Layout */}
      <div className="grid md:grid-cols-5 gap-6 md:gap-8">
        {/* Lista */}
        <div className="md:col-span-2 space-y-1 max-h-[40vh] md:max-h-[50vh] overflow-y-auto">
          {experiences.map((experience, index) => (
            <ExperienceListItem
              key={`${experience.company}-${index}`}
              {...experience}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        {/* Detalle */}
        <div className="md:col-span-3">
          <ExperienceDetail
            key={selectedIndex}
            experience={selectedExperience}
            className="animate-stagger"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
