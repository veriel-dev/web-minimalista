import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { MainLayoutOutline, Breadcrumb } from '../components/ui';
import { HeroSection, StatsSection, FilterBar, ProjectsGrid } from '../components/projects';
import { projectsOutlineData, type ProjectCategory } from '../data/pages/projects.outline';

export default function ProjectsPageOutline() {
  const { hero, stats, filters, projects } = projectsOutlineData;
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter, projects]);

  const breadcrumbItems = [{ label: 'Inicio', href: '/' }, { label: 'Proyectos' }];

  return (
    <>
      <Helmet>
        <title>Proyectos | Veriel.dev</title>
        <meta
          name="description"
          content="Portfolio de proyectos de desarrollo web: aplicaciones full-stack, juegos, herramientas y experimentos con React, TypeScript, Node.js y más."
        />
        <meta
          name="keywords"
          content="proyectos, portfolio, desarrollo web, react, typescript, node.js"
        />
        <meta property="og:title" content="Proyectos | Veriel.dev" />
        <meta
          property="og:description"
          content="Explora mi portfolio de proyectos de desarrollo web"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://veriel.dev/projects" />
        <link rel="canonical" href="https://veriel.dev/projects" />
      </Helmet>

      <MainLayoutOutline showNav showFooter pageType="list">
        <div className="min-h-screen pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="max-w-5xl mx-auto px-6 mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero */}
          <section className="mb-12 sm:mb-16">
            <HeroSection
              title={hero.title}
              subtitle={hero.subtitle}
              description={hero.description}
            />
          </section>

          {/* Stats */}
          <section className="mb-12 sm:mb-16">
            <StatsSection stats={stats} />
          </section>

          {/* Filters */}
          <section className="mb-8 sm:mb-12">
            <FilterBar
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </section>

          {/* Projects Grid */}
          <section>
            <ProjectsGrid projects={filteredProjects} />
          </section>
        </div>
      </MainLayoutOutline>
    </>
  );
}
