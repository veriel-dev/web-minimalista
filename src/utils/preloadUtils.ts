// Utilidades para precargar componentes
export const preloadRoutes = {
    preloadHero: () => import("../components/HeroSection"),
    preloadAbout: () => import("../components/AboutSection"),
    preloadProjects: () => import("../components/ProjectsSection"),
    preloadSkills: () => import("../components/SkillsSection"),
    preloadEducation: () => import("../components/EducationSection"),
    preloadContact: () => import("../components/ContactSection"),
};

// Función para precargar la siguiente sección cuando sea necesario
export const preloadNextSection = (sectionName: keyof typeof preloadRoutes) => {
    const preloadFn = preloadRoutes[sectionName];
    if (preloadFn) {
        preloadFn();
    }
};

// Ejemplo de uso con Intersection Observer
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
