
import { Star, GitFork, Calendar, Clock } from 'lucide-react';
import { TypeProject } from './ProjectsSection';

interface Props {
    project: TypeProject | null
    isOpen: boolean
    onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }:Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-black/50"
                onClick={onClose}
            />

            <div className="relative max-w-4xl w-full bg-zinc-900 text-white rounded-lg p-6">
                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-blue-400">
                        {project?.title}
                    </h2>
                    <p className="text-zinc-400">
                        {project?.description}
                    </p>
                </div>

                {/* Content */}
                <div className="mt-4">
                    {/* Project Preview */}
                    <div className="aspect-video bg-zinc-800 rounded-lg mb-4">
                        <img
                            src="/api/placeholder/800/450"
                            alt="Project preview"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Statistics Card */}
                        <div className="bg-zinc-800 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Estadísticas</h3>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Star className="w-4 h-4" />
                                <span>24 estrellas</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <GitFork className="w-4 h-4" />
                                <span>8 forks</span>
                            </div>
                        </div>

                        {/* Details Card */}
                        <div className="bg-zinc-800 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Detalles</h3>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Calendar className="w-4 h-4" />
                                <span>Iniciado: Enero 2024</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Clock className="w-4 h-4" />
                                <span>Última actualización: 2 días</span>
                            </div>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                        <h3 className="font-medium mb-2">Tecnologías</h3>
                        <div className="flex flex-wrap gap-2">
                            {project?.technologies?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;