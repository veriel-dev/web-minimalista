
import { useState } from 'react';
import { Github, ExternalLink, CircleCheckBig, LoaderCircle } from 'lucide-react';
import { TypeProject } from './ProjectsSection';
import { Card } from '../ui';



interface Props {
    project: TypeProject
    viewMode: string
}



const ProjectCard = ({ project, viewMode = 'grid' }: Props) => {
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
                    {/* {project.featured && (
                        <Tag className="w-4 h-4 text-yellow-400" />
                    )} */}

                    {
                        project.status === "completed" ? <CircleCheckBig className="w-6 h-6 text-green-500" /> : <LoaderCircle className='w-6 h-& text-yellow-500 animate-spin' />
                    }
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

                    {
                        project.github && (
                            <a href={project.github} target="_blank">
                                <button
                                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                                    title={`GitHub - ${project.title}`}
                                    aria-label={`Aria Github - ${project.title}`}>
                                    <Github className="w-5 h-5" />
                                </button>
                            </a>
                        )
                    }
                    {
                        project.demo && (
                            <a href={project.demo} target="_blank" title='ExtenalLink'>
                                <button
                                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                                    title={`External Link - ${project.title}`}
                                    aria-label={`Aria External Link - ${project.title}`}
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </button>
                            </a>
                        )
                    }
                    {/* {
                        project.img && (
                            <button
                                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                                title={`Maximize - ${project.title}`} 
                                aria-label={`Aria Maximize - ${project.title}`}
                                onClick={() => onOpenModal(project)}
                            >
                                <Maximize2 className="w-5 h-5" />
                            </button>
                        )
                    } */}
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
                <Card className="rounded-lg border-2 hover:border-blue-500 transition-colors">
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
            <Card className="rounded-lg border-2 hover:border-blue-500 transition-colors cursor-pointer h-[250px]">
                {cardContent}
            </Card>
        </div>
    );
};

export default ProjectCard;