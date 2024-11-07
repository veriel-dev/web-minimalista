import { motion } from 'framer-motion';
import { Section } from '../ui';
import { projectsPage } from '../../locales/projects';
import { configAnimate } from '../../config/animation';
const HeroSection = () => {
    const { heroSection } = projectsPage
    const {
        animateHeroSecion: {
            initial,
            animate
        }
    } = configAnimate
    return (
        <Section>
            <motion.div
                initial={{ opacity: initial.opacity, y: initial.y }}
                animate={{ opacity: animate.opacity, y: animate.y }}
                className="flex flex-col items-center text-center gap-6"
            >
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6">
                    {heroSection.title}
                </h1>
                <p className="text-xl text-zinc-300 max-w-2xl mb-8">
                    {heroSection.description}
                </p>
            </motion.div>
        </Section>
    )
}

export default HeroSection