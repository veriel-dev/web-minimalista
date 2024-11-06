import { lazy, memo } from "react"
import { MainLayout } from "../components"

const HeroSection = lazy(() => import('../components/projectsPage/HeroSection'));
const  StatsSection = lazy(() => import('../components/projectsPage/StatsSection'));
const ProjectsSection = lazy(() => import('../components/projectsPage/ProjectsSection'))
const ProjectsPage = memo(() => {
    return (
        <MainLayout>
            <HeroSection />
            <StatsSection />
            <ProjectsSection />
        </MainLayout>
    )
})

export default ProjectsPage