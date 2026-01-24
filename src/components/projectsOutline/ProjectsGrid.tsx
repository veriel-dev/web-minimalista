import { cn } from '../../../libs/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { ProjectOutline } from '../../data/pages/projects.outline';

interface ProjectsGridProps {
  projects: ProjectOutline[];
  className?: string;
}

export function ProjectsGrid({ projects, className }: ProjectsGridProps) {
  const shouldReduceMotion = useReducedMotion();

  if (projects.length === 0) {
    return (
      <div className={cn('max-w-5xl mx-auto w-full px-6 text-center py-12', className)}>
        <p className="text-zinc-500 font-mono">No hay proyectos en esta categoría</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
    },
  };

  return (
    <div className={cn('max-w-5xl mx-auto w-full px-6', className)}>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectsGrid;
