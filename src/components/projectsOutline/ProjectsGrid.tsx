import { cn } from '../../../libs/utils';
import { ProjectCard } from './ProjectCard';
import type { ProjectOutline } from '../../data/pages/projects.outline';

interface ProjectsGridProps {
  projects: ProjectOutline[];
  className?: string;
}

export function ProjectsGrid({ projects, className }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className={cn('max-w-5xl mx-auto w-full px-6 text-center py-12', className)}>
        <p className="text-zinc-500 font-mono">No hay proyectos en esta categoría</p>
      </div>
    );
  }

  return (
    <div className={cn('max-w-5xl mx-auto w-full px-6', className)}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;
