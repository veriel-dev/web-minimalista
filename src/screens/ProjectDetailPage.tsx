import { useMemo } from 'react';
import { useParams } from 'wouter';
import { HeadSEO } from '../components';
import { MainLayoutMatrix } from '../components/layouts/MainLayoutMatrix';
import {
  ProjectDetailHero,
  ProjectDetailInfo,
  ProjectDetailTech,
  ProjectDetailFeatures,
  ProjectDetailInsights,
  ProjectDetailNav,
} from '../components/projectDetailPage';
import projects from '../data/projects';
import { NotFoundPage } from './NotFoundPage';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { project, prevProject, nextProject } = useMemo(() => {
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const currentProject = currentIndex !== -1 ? projects[currentIndex] : null;
    const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return {
      project: currentProject,
      prevProject: prev,
      nextProject: next,
    };
  }, [slug]);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <MainLayoutMatrix>
      <HeadSEO
        title={`${project.title} | Veriel Dev`}
        description={project.longDescription.slice(0, 160)}
        keywords={project.technologies.join(', ')}
        noIndex
      />

      <div
        key={slug}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        <ProjectDetailHero project={project} />

        <ProjectDetailInfo project={project} />

        <ProjectDetailTech techDetails={project.techDetails} />

        <ProjectDetailFeatures features={project.features} />

        <ProjectDetailInsights challenges={project.challenges} learnings={project.learnings} />

        <ProjectDetailNav prevProject={prevProject} nextProject={nextProject} />
      </div>
    </MainLayoutMatrix>
  );
};

export default ProjectDetailPage;
