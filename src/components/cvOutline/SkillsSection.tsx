import { cn } from '../../../libs/utils';
import { motion, useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
    },
  };

  return (
    <section className={cn('mb-16 sm:mb-20', className)}>
      <SectionHeader
        number="03"
        title="Competencias Técnicas"
        color="rose"
        icon={Code2}
      />

      {/* Skills Grid */}
      <motion.div
        className="mt-8 grid sm:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {skills.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              className="p-4 border border-zinc-800 hover:border-rose-500/30 transition-colors"
              variants={itemVariants}
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
            </motion.div>
          );
        })}
      </motion.div>

      {/* Languages & Achievements row */}
      <motion.div
        className="mt-8 grid sm:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {/* Languages */}
        <motion.div className="p-4 border border-zinc-800" variants={itemVariants}>
          <h3 className="font-syne font-bold text-white mb-4">Idiomas</h3>
          <div className="space-y-2">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-zinc-300">{lang.language}</span>
                <span className="text-zinc-500 font-mono">{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements summary */}
        <motion.div className="p-4 border border-zinc-800" variants={itemVariants}>
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
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
