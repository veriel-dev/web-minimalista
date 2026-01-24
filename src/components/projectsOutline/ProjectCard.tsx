import { Link } from 'wouter';
import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';
import { Github, ExternalLink } from 'lucide-react';
import type { ProjectOutline } from '../../data/pages/projects.outline';

interface ProjectCardProps {
  project: ProjectOutline;
  index: number;
  className?: string;
}

const categoryColors = {
  frontend: 'cyan',
  backend: 'emerald',
  games: 'rose',
  all: 'white',
} as const;

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const color = categoryColors[project.category] || 'white';
  const isInProgress = project.status === 'progress';

  return (
    <div
      className={cn(
        'group border border-zinc-800 p-4 sm:p-6 transition-all duration-300 h-full',
        'hover:border-zinc-600 hover:bg-zinc-900/50',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-zinc-400 text-xs font-mono">
              {String(index + 1).padStart(2, '0')}
            </span>
            {isInProgress && (
              <span className="text-amber-500 text-xs font-mono uppercase">En progreso</span>
            )}
          </div>
          <h3 className="font-black font-syne leading-tight">
            <OutlineText as="span" size="lg" color={color} hoverFill>
              {project.title}
            </OutlineText>
          </h3>
        </div>

        {/* Links */}
        <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label={`Ver código de ${project.title} en GitHub`}
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label={`Ver demo de ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map(tech => (
          <span
            key={tech}
            className="text-zinc-500 text-xs px-2 py-1 border border-zinc-800 font-mono"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-zinc-400 text-xs px-2 py-1 font-mono">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* View Details Link */}
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-2 text-zinc-500 text-xs font-mono
                   group-hover:text-white transition-colors"
      >
        Ver detalles
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  );
}

export default ProjectCard;
