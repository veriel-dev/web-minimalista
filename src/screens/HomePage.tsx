
import { memo} from "react"
import { MainLayout } from "../components";



import HeroSection from '../components/homePage/HeroSection';
import AboutSection from '../components/homePage/aboutSection/AboutSection';
import ProjectsSection from '../components/homePage/ProjectsSection'; 
import SkillsSection from '../components/homePage/TechSkillsCardsSection';
import ContactSection from '../components/homePage/ContactSection';


const HomePage = memo(() => {
    return (
        <MainLayout>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </MainLayout>
    );
});
export default HomePage
