import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

interface Props {
  features: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const ProjectDetailFeatures = ({ features }: Props) => {
  if (features.length === 0) return null;

  return (
    <section className="mt-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="p-2 rounded-lg bg-green-500/10">
          <Sparkles className="w-5 h-5 text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-green-300">Características</h2>
        <span className="ml-auto px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-500">
          {features.length} features
        </span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p-6 rounded-xl bg-black/80 border border-green-900/40"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-500/5 transition-colors duration-200"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-400" />
                </div>
              </div>
              <span className="text-green-400/90 leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ProjectDetailFeatures;
