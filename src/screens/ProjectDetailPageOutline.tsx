import { useMemo } from 'react';
import { useParams } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { MainLayoutOutline, Breadcrumb } from '../components/ui';
import {
  HeroSection,
  OverviewSection,
  TechStackSection,
  FeaturesSection,
  ChallengesSection,
  NavigationSection,
} from '../components/projectDetail';
import projects from '../data/projects';
import NotFoundPageOutline from './NotFoundPageOutline';

export default function ProjectDetailPageOutline() {
  const { slug } = useParams<{ slug: string }>();

  const { project, prevProject, nextProject } = useMemo(() => {
    const currentIndex = projects.findIndex(p => p.slug === slug);
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
    return <NotFoundPageOutline />;
  }

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/projects' },
    { label: project.title },
  ];

  return (
    <>
      <Helmet>
        <title>{project.title} | Veriel.dev</title>
        <meta
          name="description"
          content={project.longDescription?.slice(0, 160) || project.description}
        />
        <meta name="keywords" content={project.technologies.join(', ')} />
        <meta property="og:title" content={`${project.title} | Veriel.dev`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://veriel.dev/projects/${project.slug}`} />
        {project.img && <meta property="og:image" content={project.img} />}
      </Helmet>

      <MainLayoutOutline showNav showFooter footerVariant="minimal" pageType="detail">
        <div className="min-h-screen pt-24 pb-16">
          <div className="max-w-5xl mx-auto px-6 mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="max-w-5xl mx-auto px-6">
            <HeroSection
              title={project.title}
              description={project.description}
              status={project.status}
              github={project.github}
              demo={project.demo}
              img={project.img}
            />

            {project.longDescription && <OverviewSection content={project.longDescription} />}

            <TechStackSection
              technologies={project.technologies}
              techDetails={project.techDetails}
            />

            <FeaturesSection features={project.features} />

            <ChallengesSection challenges={project.challenges} learnings={project.learnings} />

            <NavigationSection
              prevProject={
                prevProject ? { slug: prevProject.slug, title: prevProject.title } : null
              }
              nextProject={
                nextProject ? { slug: nextProject.slug, title: nextProject.title } : null
              }
            />
          </div>
        </div>
      </MainLayoutOutline>
    </>
  );
}
