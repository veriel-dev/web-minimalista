
import { memo } from "react"

import { HeadSEO, MainLayout } from "../components";
import HeroSection from '../components/homePage/HeroSection';
import AboutSection from '../components/homePage/aboutSection/AboutSection';
import ProjectsSection from '../components/homePage/ProjectsSection';
import SkillsSection from '../components/homePage/TechSkillsCardsSection';
import ContactSection from '../components/homePage/ContactSection';


const HomePage = memo(() => {
    return (
        <MainLayout>
            <HeadSEO
                title="Veriel Dev | Desarrollador Full Stack"
                description={"Desarrollador Full Stack especializado en crear experiencias web únicas y aplicaciones modernas. Experto en React, Node.js, Java y más"}
                keywords={"desarrollador full stack, react, node.js, javascript, java, desarrollo web, frontend, backend"}
            />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </MainLayout>
    );
});
export default HomePage
