import { motion } from 'framer-motion';
import { Layers, ChevronRight } from 'lucide-react';
import { TechDetail } from '../projectsPage/ProjectsSection';

interface Props {
  techDetails: TechDetail[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectDetailTech = ({ techDetails }: Props) => {
  if (techDetails.length === 0) return null;

  return (
    <section className="mt-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="p-2 rounded-lg bg-green-500/10">
          <Layers className="w-5 h-5 text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-green-300">Stack Tecnológico</h2>
        <span className="ml-auto px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-500">
          {techDetails.length} tecnologías
        </span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {techDetails.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-5 rounded-xl bg-black/80 border border-green-900/40 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                {/* Number indicator */}
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-400">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-green-300 group-hover:text-green-200 transition-colors">
                      {tech.name}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-green-500/80 leading-relaxed">
                    {tech.reason}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectDetailTech;
