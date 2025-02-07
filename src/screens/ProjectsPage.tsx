import { memo } from "react"
import { HeadSEO, MainLayout } from "../components"

import HeroSection from "../components/projectsPage/HeroSection"
import ProjectsSection from "../components/projectsPage/ProjectsSection"
import StatsSection from "../components/projectsPage/StatsSection"




const ProjectsPage = memo(() => {
    return (
        <MainLayout>
            <HeadSEO
                title={"Veriel Dev | Proyectos"}
                description={"Sección de proyectos del desarrollador full stack Veriel.dev"}
                keywords={"desarrollador full stack, desarrollo web, proyectos frontend, proyectos backend, destacados"}
            />
            <HeroSection />
            <StatsSection />
            <ProjectsSection />
        </MainLayout>
    )
})

export default ProjectsPage