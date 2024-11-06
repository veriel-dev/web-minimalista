
import { useState } from 'react';
import { Github, ExternalLink, Maximize2, Tag } from 'lucide-react';
import { TypeProject } from './ProjectsSection';
import { Card } from '../ui';

interface Props {
    project: TypeProject
    viewMode: string
    onOpenModal: (project: TypeProject) => void
}



const ProjectCard = ({ project, viewMode = 'grid', onOpenModal }:Props) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardContent = (
        <>
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-zinc-400 text-sm">
                            {project.description}
                        </p>
                    </div>
                    {project.featured && (
                        <Tag className="w-4 h-4 text-yellow-400" />
                    )}
                </div>
            </div>

            <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className={`flex gap-3 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors">
                        <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                    </button>
                    <button
                        className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        onClick={() => onOpenModal(project)}
                    >
                        <Maximize2 className="w-5 h-5" />
                    </button>
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
                <Card  className="rounded-lg border-2 hover:border-blue-500 transition-colors">
                    <div className="flex items-start p-4">
                        <div className="flex-1">
                            {cardContent}
                        </div>
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
            <Card  className="rounded-lg border-2 hover:border-blue-500 transition-colors cursor-pointer">
                {cardContent}
            </Card>
        </div>
    );
};

export default ProjectCard;