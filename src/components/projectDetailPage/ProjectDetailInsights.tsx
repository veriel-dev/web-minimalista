import { motion } from 'framer-motion';
import { Zap, GraduationCap, Quote } from 'lucide-react';

interface Props {
  challenges?: string;
  learnings?: string;
}

const ProjectDetailInsights = ({ challenges, learnings }: Props) => {
  if (!challenges && !learnings) return null;

  return (
    <section className="mt-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="p-2 rounded-lg bg-green-500/10">
          <Quote className="w-5 h-5 text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-green-300">Reflexiones</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {challenges && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative h-full p-6 rounded-xl bg-black/80 border border-amber-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-300">Desafíos</h3>
                  <p className="text-xs text-amber-500/60">Lo que me costó más</p>
                </div>
              </div>
              <p className="text-green-400/90 leading-relaxed">{challenges}</p>
            </div>
          </motion.div>
        )}

        {learnings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative h-full p-6 rounded-xl bg-black/80 border border-cyan-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Aprendizajes</h3>
                  <p className="text-xs text-cyan-500/60">Lo que me llevo</p>
                </div>
              </div>
              <p className="text-green-400/90 leading-relaxed">{learnings}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailInsights;
