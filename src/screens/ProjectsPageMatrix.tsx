import { memo } from 'react';
import { HeadSEO } from '../components';

import { MainLayoutNew } from '../components/layouts/MainLayoutNew';
import HeroSectionMatrix from '../components/projectsPage/HeroSectionMatrix';
import StatsSectionMatrix from '../components/projectsPage/StatsSectionMatrix';
import ProjectsSectionMatrix from '../components/projectsPage/ProjectsSectionMatrix';

const ProjectsPageMatrix = memo(() => {
  return (
    <MainLayoutNew>
      <HeadSEO
        title={'Veriel Dev | Proyectos'}
        description={'Sección de proyectos del desarrollador full stack Veriel.dev'}
        keywords={
          'desarrollador full stack, desarrollo web, proyectos frontend, proyectos backend, destacados'
        }
      />
      <HeroSectionMatrix />
      <StatsSectionMatrix />
      <ProjectsSectionMatrix />
    </MainLayoutNew>
  );
});

export default ProjectsPageMatrix;
