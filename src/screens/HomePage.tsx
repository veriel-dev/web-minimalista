
import { lazy, memo} from "react"
import { MainLayout } from "../components";



const HeroSection = lazy(() => import('../components/homePage/HeroSection'));
const AboutSection = lazy(() => import('../components/homePage/AboutSection'));
const ProjectsSection = lazy(() => import('../components/homePage/ProjectsSection'));
// const SkillsSection = lazy(() => import('../components/homePage/SkillsSection'));
const SkillsSection = lazy(() => import('../components/homePage/TechSkillsCardsSection'));
// const EducationSection = lazy(() => import('../components/homePage/EducationSection'));
const ContactSection = lazy(() => import('../components/homePage/ContactSection'));



const HomePage = memo(() => {
    return (
        <MainLayout>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            {/* <EducationSection /> */}
            <ContactSection />
        </MainLayout>
    );
});
export default HomePage
