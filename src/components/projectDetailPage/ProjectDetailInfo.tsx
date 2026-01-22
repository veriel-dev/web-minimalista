import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { TypeProject } from '../projectsPage/ProjectsSection';

interface Props {
  project: TypeProject;
}

const ProjectDetailInfo = ({ project }: Props) => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Long description - takes 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="h-full p-6 rounded-xl bg-black/80 border border-green-900/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10">
                <FileText className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-xl font-bold text-green-300">Sobre el Proyecto</h2>
            </div>
            <p className="text-green-400/90 leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        </motion.div>

        {/* Links sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {/* Links card */}
          <div className="p-6 rounded-xl bg-black/80 border border-green-900/40">
            <h3 className="text-lg font-semibold text-green-300 mb-4">Enlaces</h3>
            <div className="flex flex-col gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-green-900/30 text-green-400 hover:border-green-500 hover:bg-green-500/5 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:text-green-300 transition-colors" />
                  <div className="flex-1 min-w-0">
                    <span className="block font-medium group-hover:text-green-300 transition-colors">
                      Código fuente
                    </span>
                    <span className="block text-xs text-green-600 truncate">
                      github.com
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 group"
                >
                  <ExternalLink className="w-5 h-5" />
                  <div className="flex-1 min-w-0">
                    <span className="block font-medium">Ver demo en vivo</span>
                    <span className="block text-xs text-green-500 truncate">
                      {new URL(project.demo).hostname}
                    </span>
                  </div>
                </a>
              )}
              {!project.github && !project.demo && (
                <p className="text-green-600 text-sm italic">
                  No hay enlaces disponibles
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailInfo;
