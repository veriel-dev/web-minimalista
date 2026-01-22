import { useState } from 'react';
import { Github, ExternalLink, CircleCheckBig, LoaderCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { TypeProject } from './ProjectsSection';
import { Card } from '../ui';

interface Props {
  project: TypeProject;
  viewMode: string;
}

const ProjectCardMatrix = ({ project, viewMode = 'grid' }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-green-300 mb-2">{project.title}</h3>
            <p className="text-green-400 text-sm">{project.description}</p>
          </div>
          {/* {project.featured && (
                        <Tag className="w-4 h-4 text-yellow-400" />
                    )} */}

          {project.status === 'completed' ? (
            <CircleCheckBig className="w-6 h-6 text-green-500" />
          ) : (
            <LoaderCircle className="w-6 h-6 text-yellow-500 animate-spin" />
          )}
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm rounded-full bg-black/50 backdrop-blur-sm border-2 border-green-900/50 text-green-500"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className={`flex gap-3 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button
                className="p-2 rounded-lg rounded-full bg-black/50 backdrop-blur-sm border-2 border-green-900/50 text-green-500 transition-colors"
                title={`GitHub - ${project.title}`}
                aria-label={`GitHub - ${project.title}`}
              >
                <Github className="w-5 h-5" />
              </button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" title="External Link">
              <button
                className="p-2 rounded-lg rounded-full bg-black/50 backdrop-blur-sm border-2 border-green-900/50 text-green-500 transition-colors"
                title={`External Link - ${project.title}`}
                aria-label={`External Link - ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </button>
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-green-600/20 backdrop-blur-sm border-2 border-green-500/50 text-green-300 hover:bg-green-600/30 hover:border-green-400 transition-colors text-sm"
          >
            <span>Ver más</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );

  if (viewMode === 'list') {
    return (
      <div
        className="transform transition-transform duration-200 hover:scale-[1.01]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="rounded-lg bg-black/20 backdrop-blur-sm  shadow-2xl  border-2 md:border-2 border-green-900/50 hover:border-green-500 transition-colors">
          <div className="flex items-start p-4">
            <div className="flex-1">{cardContent}</div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="transform transition-transform duration-200 hover:scale-[1.01]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="rounded-lg bg-black/20 backdrop-blur-sm  shadow-2xl  border-2 md:border-2 border-green-900/50 hover:border-green-500 transition-colors cursor-pointer h-[250px]">
        {cardContent}
      </Card>
    </div>
  );
};

export default ProjectCardMatrix;
