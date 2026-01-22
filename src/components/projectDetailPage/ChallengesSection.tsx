import { motion } from 'framer-motion';
import { AlertTriangle, Lightbulb } from 'lucide-react';

interface Props {
  challenges?: string;
  learnings?: string;
}

const ChallengesSection = ({ challenges, learnings }: Props) => {
  if (!challenges && !learnings) return null;

  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-green-300 mb-6"
      >
        Desafíos y Aprendizajes
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-yellow-900/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-yellow-500/20">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-yellow-400">Desafíos</h3>
            </div>
            <p className="text-green-400/90 leading-relaxed">{challenges}</p>
          </motion.div>
        )}

        {learnings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-blue-900/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Lightbulb className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">Aprendizajes</h3>
            </div>
            <p className="text-green-400/90 leading-relaxed">{learnings}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ChallengesSection;
