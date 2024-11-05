
export const preloadRoutes = {
    preloadHero: () => import("../components/homePage/HeroSection"),
    preloadAbout: () => import("../components/homePage/aboutSection/AboutSection"),
    preloadProjects: () => import("../components/homePage/ProjectsSection"),
    preloadSkills: () => import("../components/homePage/SkillsSection"),
    preloadEducation: () => import("../components/homePage/EducationSection"),
    preloadContact: () => import("../components/homePage/ContactSection"),
};
export const preloadNextSection = (sectionName: keyof typeof preloadRoutes) => {
    const preloadFn = preloadRoutes[sectionName];
    if (preloadFn) {
        preloadFn();
    }
};
export const setupIntersectionObserver = (
    sectionName: keyof typeof preloadRoutes
    ) => {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            preloadNextSection(sectionName);
            observer.disconnect();
            }
        });
        },
        { threshold: 0.1 }
    );
    return observer;
};
