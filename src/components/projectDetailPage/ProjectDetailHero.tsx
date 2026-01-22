import { motion } from 'framer-motion';
import { ArrowLeft, CircleCheckBig, LoaderCircle, Tag } from 'lucide-react';
import { Link } from 'wouter';
import { TypeProject } from '../projectsPage/ProjectsSection';

interface Props {
  project: TypeProject;
}

const projectTypeLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  fullstack: 'Full Stack',
  games: 'Videojuego',
};

const ProjectDetailHero = ({ project }: Props) => {
  return (
    <section className="relative">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 border border-green-900/50 text-green-400 hover:border-green-500 hover:text-green-300 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Volver a proyectos</span>
        </Link>
      </motion.div>

      {/* Main hero content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-green-900/50 bg-black/80">
            {project.img ? (
              <img
                src={project.img}
                alt={project.title}
                className={`w-full h-full ${
                  project.img.endsWith('.svg')
                    ? 'object-contain p-8'
                    : 'object-cover'
                }`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-900/20 to-black">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Tag className="w-8 h-8 text-green-500/50" />
                  </div>
                  <span className="text-green-500/50 text-sm">Sin preview</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col"
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
              <Tag className="w-3 h-3" />
              {projectTypeLabels[project.proyectType] || project.proyectType}
            </span>
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full ${
                project.status === 'completed'
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                  : 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-400'
              }`}
            >
              {project.status === 'completed' ? (
                <>
                  <CircleCheckBig className="w-3 h-3" />
                  Completado
                </>
              ) : (
                <>
                  <LoaderCircle className="w-3 h-3 animate-spin" />
                  En progreso
                </>
              )}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-300 mb-4 leading-tight">
            {project.title}
          </h1>

          {/* Short description */}
          <p className="text-lg text-green-400/80 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-lg bg-black/80 border border-green-900/40 text-green-500"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-6 text-sm text-green-500/60">
            <span className="flex items-center gap-2">
              <span className="font-bold text-green-400">{project.technologies.length}</span>
              tecnologías
            </span>
            <span className="flex items-center gap-2">
              <span className="font-bold text-green-400">{project.features.length}</span>
              características
            </span>
            {project.techDetails.length > 0 && (
              <span className="flex items-center gap-2">
                <span className="font-bold text-green-400">{project.techDetails.length}</span>
                tech detalladas
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
