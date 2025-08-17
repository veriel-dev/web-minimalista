import { useMemo, useState } from 'react';
import { Section } from '../ui';
import { Grid, List, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import projects from '../../data/projects';
import { Selector } from './Selector';
import ProjectCardMatrix from './ProjectCardMatrix';

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
  };
  proyectType: string;
  github?: string;
  demo?: string;
  img?: string;
  status: 'completed' | 'progress';
}
const ProjectsSectionMatrix = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('completed');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'featured' && project.featured) ||
        (activeFilter === 'backend' && project.proyectType === 'backend') ||
        (activeFilter === 'frontend' && project.proyectType === 'frontend') ||
        (activeFilter === 'completed' && project.status === 'completed') ||
        (activeFilter === 'progress' && project.status === 'progress') ||
        (activeFilter === 'fullstack' && project.proyectType === 'fullstack');

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);
  return (
    <Section className="z-10 relative  bg-black/20  backdrop-blur-sm shadow-2xl sm:p-12 rounded-lg mt-20 sm:mt-0">
      <div className="flex flex-col md:flex-row justify-end items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-4 ">
          <div className="relative flex items-center  backdrop-blur-sm shadow-2xl ">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
            <input
              type="text"
              placeholder="Buscar por etiqueta..."
              className="pl-10 pr-4 py-2 bg-black/20  rounded-lg  shadow-2xl  border-2 md:border-2 border-green-900/50 focus:outline-none focus:ring-2 focus:ring-green-500  text-green-400 placeholder:text-green-400"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 bg-black/20 backdrop-blur-sm  shadow-2xl  border-2 md:border-2 border-green-900/50 p-1 rounded-lg">
            <button
              title="Grid"
              aria-label="Aria Grid"
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'border-green-400/50 border-2' : ''
                }`}
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-5 h-5 text-green-400" />
            </button>
            <button
              title="List"
              aria-label="Aria List"
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'border-green-400/50 border-2' : ''
                }`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-5 h-5 text-green-400" />
            </button>
          </div>
          <div className="flex gap-2">
            <Selector activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>
        </div>
      </div>
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'flex flex-col gap-4'
        }
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCardMatrix project={project} viewMode={viewMode} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-green-400">
            No se encontraron proyectos que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </Section>
  );
};

export default ProjectsSectionMatrix;
