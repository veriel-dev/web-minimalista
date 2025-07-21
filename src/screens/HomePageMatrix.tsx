import { HeadSEO } from '../components';

import AboutSectionMatrix from '../components/homePage/aboutSection/AboutSectionMatrix';
import ContactSectionMatrix from '../components/homePage/ContactSectionMatrix';
import ExperienceSectionMatrix from '../components/homePage/ExperienceSectionMatrix';

import HeroSectionMatrix from '../components/homePage/HeroSectionMatrix';
import TechSkillsCardsSectionMatrix from '../components/homePage/TechSkillsCardsSectionMatrix';

import { MainLayoutNew } from '../components/layouts/MainLayoutNew';
const HomePageMatrix = () => {
  return (
    <MainLayoutNew>
      <HeadSEO
        title="Veriel Dev | Desarrollador Full Stack"
        description={
          'Desarrollador Full Stack especializado en crear experiencias web únicas y aplicaciones modernas. Experto en React, Node.js, Java y más'
        }
        keywords={
          'desarrollador full stack, react, node.js, javascript, java, desarrollo web, frontend, backend'
        }
      />
      <HeroSectionMatrix />
      <AboutSectionMatrix />
      <ExperienceSectionMatrix />
      <TechSkillsCardsSectionMatrix />
      <ContactSectionMatrix />
    </MainLayoutNew>
  );
};

export default HomePageMatrix;
