
import { lazy, memo, Suspense, useEffect, useRef } from "react"
import { MainLayout } from "./components";
import { preloadRoutes, setupIntersectionObserver } from "./utils/preloadUtils";


const HeroSection = lazy(() => import('./components/HeroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>
);
const Section = memo(({ 
  id, 
  Component, 
  nextSection 
}: { 
  id: string; 
  Component: React.ComponentType; 
  nextSection?: keyof typeof preloadRoutes;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nextSection && sectionRef.current) {
      const observer = setupIntersectionObserver(nextSection);
      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, [nextSection]);

  return (
    <div id={id} ref={sectionRef}>
      <Suspense fallback={<LoadingFallback />}>
        <Component />
      </Suspense>
    </div>
  );
});


const App = memo(() => {
  return (
    <MainLayout>
      <Section 
        id="hero-section" 
        Component={HeroSection} 
        nextSection="preloadAbout" 
      />
      <Section 
        id="about-section" 
        Component={AboutSection} 
        nextSection="preloadProjects" 
      />
      <Section 
        id="projects-section" 
        Component={ProjectsSection} 
        nextSection="preloadSkills" 
      />
      <Section 
        id="skills-section" 
        Component={SkillsSection} 
        nextSection="preloadEducation" 
      />
      <Section 
        id="education-section" 
        Component={EducationSection} 
        nextSection="preloadContact" 
      />
      <Section 
        id="contact-section" 
        Component={ContactSection} 
      />
    </MainLayout>
  );
});
// Display names para debugging
Section.displayName = 'Section';
App.displayName = 'App';

export default App
