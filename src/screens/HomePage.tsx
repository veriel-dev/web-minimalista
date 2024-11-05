
import { lazy, memo} from "react"
import { MainLayout } from "../components";



const HeroSection = lazy(() => import('../components/homePage/HeroSection'));
const AboutSection = lazy(() => import('../components/homePage/aboutSection/AboutSection'));
const ProjectsSection = lazy(() => import('../components/homePage/ProjectsSection'));
const SkillsSection = lazy(() => import('../components/homePage/TechSkillsCardsSection'));
const ContactSection = lazy(() => import('../components/homePage/ContactSection'));



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
