import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { TypeProject } from '../projectsPage/ProjectsSection';

interface Props {
  prevProject: TypeProject | null;
  nextProject: TypeProject | null;
}

const NavigationSection = ({ prevProject, nextProject }: Props) => {
  return (
    <section className="mt-16 pt-8 border-t border-green-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-between gap-4"
      >
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-green-900/50 hover:border-green-500/50 transition-colors group flex-1"
          >
            <ArrowLeft className="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors" />
            <div className="text-left">
              <span className="text-xs text-green-600 uppercase tracking-wider">Anterior</span>
              <p className="text-green-400 group-hover:text-green-300 transition-colors font-medium">
                {prevProject.title}
              </p>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center justify-end gap-3 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-green-900/50 hover:border-green-500/50 transition-colors group flex-1"
          >
            <div className="text-right">
              <span className="text-xs text-green-600 uppercase tracking-wider">Siguiente</span>
              <p className="text-green-400 group-hover:text-green-300 transition-colors font-medium">
                {nextProject.title}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </motion.div>
    </section>
  );
};

export default NavigationSection;
