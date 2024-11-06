import {  memo } from "react"
import { MainLayout } from "../components"

import HeroSection from "../components/homePage/HeroSection"
import ProjectsSection from "../components/projectsPage/ProjectsSection"
import StatsSection from "../components/projectsPage/StatsSection"





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