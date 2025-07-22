import { User } from 'lucide-react';
import { ElementTitle, Section } from '../../ui';
import { motion } from 'framer-motion';

import { memo } from 'react';
import { configAnimate } from '../../../config/animation';
import { homePageMatrix } from '../../../data/pages/home.matrix';
import { StatsContainerMatrix } from './StatsContainerMatrix';

const AboutSectionMatrix = memo(() => {
  const { aboutSection } = homePageMatrix;
  const {
    animateHeroSecion: { initial, animate },
  } = configAnimate;
  return (
    <Section
      variant="light"
      className="z-10 relative  bg-black/20  backdrop-blur-sm md:border-2 md:border-green-900/50 shadow-2xl p-12 rounded-lg"
    >
      <motion.div
        initial={{ opacity: initial.opacity, y: initial.y }}
        animate={{ opacity: animate.opacity, y: animate.y }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div>
          <ElementTitle title={aboutSection.title} Icon={User} />
          <div className="space-y-4 text-green-300">
            <p className="text-lg leading-relaxed">{aboutSection.description}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {aboutSection.tags.map(skill => (
              <div
                key={skill}
                className="px-3 py-2 bg-black border border-green-900/50 text-green-400 text-sm text-center hover:border-green-400 transition-colors cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <StatsContainerMatrix />
      </motion.div>
    </Section>
  );
});
export default AboutSectionMatrix;
