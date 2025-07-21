import { motion } from 'framer-motion';
import { Section } from '../ui';
import { projectsPage } from '../../data/pages/projects';
import { configAnimate } from '../../config/animation';
const HeroSectionMatrix = () => {
  const { heroSection } = projectsPage;
  const {
    animateHeroSecion: { initial, animate },
  } = configAnimate;
  return (
    <Section className="z-10 relative mt-20">
      <motion.div
        initial={{ opacity: initial.opacity, y: initial.y }}
        animate={{ opacity: animate.opacity, y: animate.y }}
        className="flex flex-col items-center text-center gap-6"
      >
        <h1 className="text-5xl font-bold text-green-400  mb-6">{heroSection.title}</h1>
        <p className="text-xl text-green-300 max-w-2xl mb-8">{heroSection.description}</p>
      </motion.div>
    </Section>
  );
};

export default HeroSectionMatrix;
