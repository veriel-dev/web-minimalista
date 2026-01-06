import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import ProjectCard from './ProjectCard';
import { TypeProject } from './ProjectsSection';

interface Props {
  project: TypeProject;
  viewMode: string;
}

const LazyProjectCard = memo(({ project, viewMode }: Props) => {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '100px',
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={viewMode === 'grid' ? 'min-h-[250px]' : 'min-h-[150px]'}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard project={project} viewMode={viewMode} />
        </motion.div>
      ) : (
        <div className="h-full w-full bg-zinc-900/50 rounded-lg animate-pulse" />
      )}
    </div>
  );
});

LazyProjectCard.displayName = 'LazyProjectCard';

export default LazyProjectCard;
