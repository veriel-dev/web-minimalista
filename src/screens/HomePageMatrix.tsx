import { HeadSEO } from '../components';

import AboutSectionMatrix from '../components/homePage/aboutSection/AboutSectionMatrix';
import ContactSectionMatrix from '../components/homePage/ContactSectionMatrix';
import ExperienceSectionMatrix from '../components/homePage/ExperienceSectionMatrix';

import HeroSectionMatrix from '../components/homePage/HeroSectionMatrix';
import TechSkillsCardsSectionMatrix from '../components/homePage/TechSkillsCardsSectionMatrix';
import { MainLayoutMatrix } from '../components/layouts/MainLayoutMatrix';

const HomePageMatrix = () => {
  return (
    <MainLayoutMatrix>
      <HeadSEO
        title="Veriel Dev | Software Developer"
        description={
          'Software Developer especializado en crear experiencias web únicas y aplicaciones modernas'
        }
        keywords={
          'Software Developer, react, node.js, javascript, java, desarrollo web, frontend, backend'
        }
      />
      <HeroSectionMatrix />
      <AboutSectionMatrix />
      <ExperienceSectionMatrix />
      <TechSkillsCardsSectionMatrix />
      <ContactSectionMatrix />
    </MainLayoutMatrix>
  );
};

export default HomePageMatrix;
