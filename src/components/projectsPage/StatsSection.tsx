import { motion } from 'framer-motion';
import { Section } from '../ui';
import { projectsPage } from '../../data/pages/projects';
import { configAnimate } from '../../config/animation';


const StatsSection = () => {
    const {statsSection} = projectsPage

    const {
        animateStatsSection: {
            animate,
            whileInView,
            viewport
        }
    } = configAnimate
    return (
        <Section variant="light" className="rounded-lg">
            <div className="mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {statsSection.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: animate.opacity, y: animate.y }}
                            whileInView={{ opacity: whileInView.opacity, y: whileInView.y }}
                            viewport={{ once: viewport.once }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                            <div className="text-zinc-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default StatsSection