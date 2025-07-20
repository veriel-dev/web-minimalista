import { Download, Mail } from 'lucide-react';
import { Button, Section } from '../ui';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { configAnimate } from '../../config/animation';
import { homePage } from '../../data/pages';
import LogoMatrix from '../svg/LogoMatrix';

const HeroSectionMatrix = memo(() => {
  const scrollToContact = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const { heroSection } = homePage;
  const {
    animateHeroSecion: { initial, animate },
  } = configAnimate;
  return (
    <Section className="z-10 relative">
      <motion.div
        initial={{ opacity: initial.opacity, y: initial.y }}
        animate={{ opacity: animate.opacity, y: animate.y }}
        className="flex flex-col items-center text-center gap-6 px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="relative inline-block mb-12">
          <div className="flex items-center justify-center mx-auto shadow-2xl hover:shadow-green-400/50 transition-all duration-300 hover:scale-105">
            <LogoMatrix />
            <div className="absolute inset-0 border-2 border-green-400 rounded-lg animate-pulse"></div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold mb-6 text-green-400 tracking-wider">
            {'> '}
            {heroSection.title}
          </h1>
          <p className="text-xl text-green-300 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            {'// '}
            {heroSection.description}
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            className="bg-green-900/50 border-2 border-green-400 hover:bg-green-900/70 text-green-400 px-4 py-4 rounded-none transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
            onClick={scrollToContact}
            title="Email Contacnt"
            ariaLabel="Aria Email Contact"
          >
            <Mail className="mr-2 h-4 w-4" />
            {heroSection.contact}
          </Button>

          <a href={heroSection.cv.to} rel="noopener noreferrer" target="_blank">
            <Button
              variant="outline"
              className="bg-black border-2 border-green-400 text-green-400 hover:bg-green-900/30 px-4 py-4 rounded-none transition-all duration-300 hover:scale-105"
              title="Download CV"
              ariaLabel="Aria Donwload CV"
            >
              <Download className="mr-2 h-4 w-4" />
              {heroSection.cv.text}
            </Button>
          </a>
        </div>
      </motion.div>
    </Section>
  );
});
export default HeroSectionMatrix;
