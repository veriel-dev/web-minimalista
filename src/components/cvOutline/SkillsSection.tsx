import { cn } from '../../../libs/utils';
import { SectionHeader } from '../outlineUI';
import { Code2 } from 'lucide-react';
import type { CVSkillCategory, CVLanguage, CVAchievement } from '../../data/pages/cv.outline';

interface SkillsSectionProps {
  skills: CVSkillCategory[];
  languages: CVLanguage[];
  achievements: CVAchievement[];
  className?: string;
}

export function SkillsSection({
  skills,
  languages,
  achievements,
  className,
}: SkillsSectionProps) {
  return (
    <section className={cn('mb-16 sm:mb-20', className)}>
      <SectionHeader
        number="03"
        title="Competencias Técnicas"
        color="rose"
        icon={Code2}
      />

      {/* Skills Grid */}
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {skills.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="p-4 border border-zinc-800 hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-rose-500/10 rounded">
                  <Icon size={18} className="text-rose-500" />
                </div>
                <h3 className="font-syne font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Languages & Achievements row */}
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {/* Languages */}
        <div className="p-4 border border-zinc-800">
          <h3 className="font-syne font-bold text-white mb-4">Idiomas</h3>
          <div className="space-y-2">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-zinc-300">{lang.language}</span>
                <span className="text-zinc-500 font-mono">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements summary */}
        <div className="p-4 border border-zinc-800">
          <h3 className="font-syne font-bold text-white mb-4">Logros Destacados</h3>
          <ul className="space-y-2">
            {achievements.slice(0, 3).map((achievement, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-zinc-400"
              >
                <span className="text-rose-500/70 mt-0.5">▸</span>
                <span className="line-clamp-2">{achievement.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
