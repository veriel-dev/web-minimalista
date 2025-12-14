import { memo } from 'react';
import { HeadSEO } from '../components';

import HeroSectionMatrix from '../components/projectsPage/HeroSectionMatrix';
import StatsSectionMatrix from '../components/projectsPage/StatsSectionMatrix';
import ProjectsSectionMatrix from '../components/projectsPage/ProjectsSectionMatrix';
import { MainLayoutMatrix } from '../components/layouts/MainLayoutMatrix';

const ProjectsPageMatrix = memo(() => {
  return (
    <MainLayoutMatrix>
      <HeadSEO
        title={'Veriel Dev | Proyectos'}
        description={'Sección de proyectos del software developer Veriel.dev'}
        keywords={
          'software developer, desarrollo web, proyectos frontend, proyectos backend, destacados'
        }
      />
      <HeroSectionMatrix />
      <StatsSectionMatrix />
      <ProjectsSectionMatrix />
    </MainLayoutMatrix>
  );
});

export default ProjectsPageMatrix;
