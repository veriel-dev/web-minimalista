import { useMemo, useState } from "react";
import { Section } from "../ui"
import { Grid, List, Search, } from "lucide-react";
import LazyProjectCard from "./LazyProjectCard";
import projects from "../../data/projects";
import { Selector } from "./Selector";

export interface TechDetail {
    name: string;
    reason: string;
}

export interface TypeProject {
    title: string;
    description: string;
    technologies: string[];
    featured: boolean;
    proyectType: 'frontend' | 'backend' | 'fullstack' | 'games';
    github?: string;
    demo?: string;
    img?: string;
    status: 'completed' | 'progress';
    // Campos para página de detalle
    slug: string;
    longDescription: string;
    features: string[];
    techDetails: TechDetail[];
    challenges?: string;
    learnings?: string;
    screenshots?: string[];
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
                (activeFilter === "frontend" && project.proyectType === "frontend") ||
                (activeFilter === "completed" && project.status === "completed") ||
                (activeFilter === "progress" && project.status === "progress") ||
                (activeFilter === "fullstack" && project.proyectType === "fullstack");

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
                            aria-label="Vista cuadrícula"
                            className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-zinc-700' : ''
                                }`}
                            onClick={() => setViewMode('grid')}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            title="List"
                            aria-label="Vista lista"
                            className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-zinc-700' : ''
                                }`}
                            onClick={() => setViewMode('list')}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <Selector activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                    </div>
                </div>
            </div>
            <div className={
                viewMode === 'grid'
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
            }>
                {filteredProjects.map((project) => (
                    <LazyProjectCard
                        key={project.title}
                        project={project}
                        viewMode={viewMode}
                    />
                ))}
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