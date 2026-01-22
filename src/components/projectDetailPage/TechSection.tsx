import { motion } from 'framer-motion';
import { TechDetail } from '../projectsPage/ProjectsSection';

interface Props {
  techDetails: TechDetail[];
}

const TechSection = ({ techDetails }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-green-300 mb-6"
      >
        Tecnologías
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {techDetails.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-green-900/50 hover:border-green-500/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-green-400 mb-2">{tech.name}</h3>
            <p className="text-green-500/80 text-sm">{tech.reason}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechSection;
