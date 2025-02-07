import { Download, Mail } from "lucide-react"
import { Button, Section } from "../ui"
import Logo from "../svg/Logo"
import { motion } from 'framer-motion';
import { memo } from "react";
import { configAnimate } from "../../config/animation";
import { homePage } from "../../data/pages";

const HeroSection = memo(() => {

    const scrollToContact = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    const { heroSection } = homePage
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
                <div className="flex items-center justify-center overflow-hidden">
                    <Logo />
                </div>
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        {heroSection.title}
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl font-semibold">
                        {heroSection.description}
                    </p>
                </div>
                <div className="flex gap-4">

                    <Button 
                        className="bg-blue-600 transition-all transform duration-300 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600" 
                        onClick={scrollToContact}
                        title="Email Contacnt"
                        ariaLabel="Aria Email Contact"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        {heroSection.contact}
                    </Button>

                    <a
                        href={heroSection.cv.to}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Button 
                            variant="outline" 
                            className="border-secondary transition-all transform duration-300 hover:-translate-y-2"
                            title="Download CV"
                            ariaLabel="Aria Donwload CV"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            {heroSection.cv.text}
                        </Button>
                    </a>
                </div>
            </motion.div>
        </Section>
    )
})
export default HeroSection