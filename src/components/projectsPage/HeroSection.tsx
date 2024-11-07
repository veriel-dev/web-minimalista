import { motion } from 'framer-motion';
import { Button, Section } from '../ui';
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
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    {heroSection.title}
                </h1>
                <p className="text-xl text-zinc-300 max-w-2xl mb-8">
                    {heroSection.description}
                </p>
                <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 p-3">
                        {heroSection.projects}
                    </Button>
                    <Button variant="outline" className="border-zinc-700 p-3">
                        {heroSection.contact}
                    </Button>
                </div>
            </motion.div>
        </Section>
    )
}

export default HeroSection