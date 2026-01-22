import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CircleCheckBig, LoaderCircle } from 'lucide-react';
import { Link } from 'wouter';
import { TypeProject } from '../projectsPage/ProjectsSection';

interface Props {
  project: TypeProject;
}

const HeroSection = ({ project }: Props) => {
  const projectTypeLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
    games: 'Videojuego',
  };

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a proyectos</span>
        </Link>
      </motion.div>

      {project.img && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 rounded-lg overflow-hidden border-2 border-green-900/50"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-auto max-h-[400px] object-cover"
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-300 mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-sm rounded-full bg-black/50 backdrop-blur-sm border border-green-900/50 text-green-400">
              {projectTypeLabels[project.proyectType] || project.proyectType}
            </span>
            <span
              className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-black/50 backdrop-blur-sm border ${
                project.status === 'completed'
                  ? 'border-green-500/50 text-green-400'
                  : 'border-yellow-500/50 text-yellow-400'
              }`}
            >
              {project.status === 'completed' ? (
                <>
                  <CircleCheckBig className="w-4 h-4" />
                  Completado
                </>
              ) : (
                <>
                  <LoaderCircle className="w-4 h-4 animate-spin" />
                  En progreso
                </>
              )}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm border-2 border-green-900/50 text-green-400 hover:border-green-500 hover:text-green-300 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/20 backdrop-blur-sm border-2 border-green-500/50 text-green-300 hover:bg-green-600/30 hover:border-green-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
