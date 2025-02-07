import { useMemo, useState } from "react";
import { Section } from "../ui"
import { Grid, List, Search, } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

export interface TypeProject {
    title: string;
    description: string;
    technologies: string[];
    featured: boolean;
    stats?: {
        stars: number;
        forks: number;
        startDate: string;
        lastUpdate: string;
    },
    proyectType: string;
    github?: string,
    demo?: string,
    img?: string
}
const ProjectsSection = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesFilter = 
                activeFilter === 'all' ||
                (activeFilter === 'featured' && project.featured) ||
                (activeFilter === "backend" && project.proyectType === "backend") ||
                (activeFilter === "frontend" && project.proyectType === "frontend");
            
            const matchesSearch = 
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies.some(tech =>
                    tech.toLowerCase().includes(searchQuery.toLowerCase())
                );
                
            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchQuery]);
    return (
        <Section>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-blue-500">
                    Proyectos 
                </h2>
                <div className="flex flex-wrap gap-4">
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Buscar por etiqueta..."
                            className="pl-10 pr-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 bg-secondary p-1 rounded-lg">
                        <button
                            title="Grid"
                            aria-label="Aria Grid"
                            className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-zinc-700' : ''
                                }`}
                            onClick={() => setViewMode('grid')}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            title="List"
                            aria-label="Aria List"
                            className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-zinc-700' : ''
                                }`}
                            onClick={() => setViewMode('list')}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button
                            className={`px-4 py-2 rounded-lg transition-colors ${activeFilter === 'all' ? 'bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600' : 'bg-zinc-800'
                                }`}
                            onClick={() => setActiveFilter('all')}
                        >
                            Todos
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg transition-colors ${activeFilter === 'featured' ? 'bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600' : 'bg-zinc-800'
                                }`}
                            onClick={() => setActiveFilter('featured')}
                        >
                            Destacados
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg transition-colors ${activeFilter === 'backend' ? 'bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600' : 'bg-zinc-800'
                                }`}
                            onClick={() => setActiveFilter('backend')}
                        >
                            Backend
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg transition-colors ${activeFilter === 'frontend' ? 'bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600' : 'bg-zinc-800'
                                }`}
                            onClick={() => setActiveFilter('frontend')}
                        >
                            Frontend
                        </button>
                    </div>
                </div>
            </div>
            <div className={
                viewMode === 'grid'
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
            }>
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard
                                project={project}
                                viewMode={viewMode}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-zinc-400">No se encontraron proyectos que coincidan con tu búsqueda.</p>
                </div>
            )}
        </Section >
    )
}

export default ProjectsSection