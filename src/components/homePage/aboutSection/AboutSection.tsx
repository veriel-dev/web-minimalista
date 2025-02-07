import { User } from "lucide-react"
import { Section } from "../../ui"
import { motion } from 'framer-motion';
import { StatsContainer } from "./StatsContainer"
import { memo } from "react";
import { configAnimate } from "../../../config/animation";
import { homePage } from "../../../data";

const AboutSection = memo(() => {
    const {aboutSection} = homePage
    const {
        animateHeroSecion: {
            initial,
            animate
        }
    } = configAnimate
    return (
        <Section variant="light" className="rounded-lg">
            <motion.div 
                initial={{ opacity: initial.opacity, y: initial.y }}
                animate={{ opacity: animate.opacity, y: animate.y }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-500">
                        <User className="h-6 w-6" />
                        {aboutSection.title}
                    </h2>
                    <p className="text-primary leading-relaxed mb-6">
                        {aboutSection.description}
                    </p>
                </div>
                <StatsContainer />
            </motion.div>
        </Section>
    )
})
export default AboutSection