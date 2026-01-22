import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  features: string[];
}

const FeaturesSection = ({ features }: Props) => {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-green-300 mb-6"
      >
        Características
      </motion.h2>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex items-start gap-3 p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-green-900/30"
          >
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-green-400">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default FeaturesSection;
