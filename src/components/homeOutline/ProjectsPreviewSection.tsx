import { Link } from 'wouter';
import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';
import { ProjectRow } from './ProjectRow';
import type { OutlineColor } from '../../config/theme';

interface ProjectPreviewItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
  color: OutlineColor;
  slug: string;
}

interface ProjectsPreviewSectionProps {
  projects: ProjectPreviewItem[];
  viewAllLabel?: string;
  viewAllHref?: string;
  className?: string;
}

export function ProjectsPreviewSection({
  projects,
  viewAllLabel = 'VER TODOS LOS PROYECTOS',
  viewAllHref = '/projects',
  className,
}: ProjectsPreviewSectionProps) {
  return (
    <div className={cn('max-w-5xl mx-auto w-full', className)}>
      {/* Header */}
      <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 font-mono">
        05 / Portfolio
      </p>
      <h2 className="font-black font-syne leading-none mb-6 sm:mb-8 md:mb-10">
        <OutlineText as="span" size="2xl" color="violet" hoverFill>
          PROYECTOS
        </OutlineText>
      </h2>

      {/* Projects List */}
      <div className="space-y-4 sm:space-y-6 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-2">
        {projects.map(project => (
          <ProjectRow key={project.slug} {...project} />
        ))}
      </div>

      {/* View all link */}
      <div className="text-center mt-8 sm:mt-12">
        <Link href={viewAllHref} className="inline-block">
          <OutlineText as="span" size="sm" color="white" hoverFill>
            {viewAllLabel} →
          </OutlineText>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsPreviewSection;
