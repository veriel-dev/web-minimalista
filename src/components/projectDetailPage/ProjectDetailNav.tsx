import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { Link } from 'wouter';
import { TypeProject } from '../projectsPage/ProjectsSection';

interface Props {
  prevProject: TypeProject | null;
  nextProject: TypeProject | null;
}

const ProjectDetailNav = ({ prevProject, nextProject }: Props) => {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-8 border-t border-green-900/30"
      >
        {/* Navigation header */}
        <div className="flex items-center justify-center mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 border border-green-900/30 text-green-500 hover:border-green-500/50 hover:text-green-400 transition-all duration-300"
          >
            <Grid className="w-4 h-4" />
            <span className="text-sm font-medium">Ver todos los proyectos</span>
          </Link>
        </div>

        {/* Prev/Next navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-4 p-5 rounded-xl bg-black/80 border border-green-900/40 hover:border-green-500/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <ArrowLeft className="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs text-green-600 uppercase tracking-wider mb-1">
                    Proyecto anterior
                  </span>
                  <p className="text-green-400 group-hover:text-green-300 transition-colors font-medium truncate">
                    {prevProject.title}
                  </p>
                  <span className="text-xs text-green-600/60">
                    {prevProject.technologies.slice(0, 3).join(' · ')}
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-4 p-5 rounded-xl bg-black/80 border border-green-900/40 hover:border-green-500/50 transition-all duration-300">
                <div className="flex-1 min-w-0 text-right">
                  <span className="block text-xs text-green-600 uppercase tracking-wider mb-1">
                    Siguiente proyecto
                  </span>
                  <p className="text-green-400 group-hover:text-green-300 transition-colors font-medium truncate">
                    {nextProject.title}
                  </p>
                  <span className="text-xs text-green-600/60">
                    {nextProject.technologies.slice(0, 3).join(' · ')}
                  </span>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <ArrowRight className="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetailNav;
