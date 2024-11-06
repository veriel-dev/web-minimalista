import { useEffect, useState, useCallback } from 'react';
import { ExternalLink, Github, } from "lucide-react";
import { Button, Card, Section } from "../ui";
import { homePage } from "../../const";
import { motion, AnimatePresence } from "framer-motion";


const AUTOPLAY_DELAY = 8000;

const ProjectsSection = () => {
    const { projectsSections } = homePage;
    const [currentPage, setCurrentPage] = useState(1);
    const [direction, setDirection] = useState(0);
    const [isAutoplay] = useState(true);

    const projectsPerPage = 3;

    const totalPages = Math.ceil(projectsSections.projects.length / projectsPerPage);

    const goToNextPage = useCallback(() => {
        setDirection(1);
        setCurrentPage(prev => prev === totalPages ? 1 : prev + 1);
    }, [totalPages]);

    useEffect(() => {
        let timer: number | undefined;
        if (isAutoplay) {
            timer = setInterval(goToNextPage, AUTOPLAY_DELAY);
        }
        return () => clearInterval(timer);
    }, [isAutoplay, goToNextPage]);

    const getCurrentProjects = () => {
        const startIdx = (currentPage - 1) * projectsPerPage;
        let projects = [...projectsSections.projects];

        while (projects.length < startIdx + projectsPerPage) {
            projects = [...projects, ...projectsSections.projects];
        }

        return projects.slice(startIdx, startIdx + projectsPerPage);
    };

    const pageVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '50%' : '-50%',
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '50%' : '-50%',
            opacity: 0,
            scale: 0.8
        })
    };

    const pageTransition = {
        type: "spring",
        stiffness: 300,
        damping: 30
    };

    return (
        <Section className="relative">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-blue-500">
                    {projectsSections.title}
                </h2>
                {/* <Button
                    variant="ghost"
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    className="text-blue-500"
                >
                    {isAutoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button> */}
            </div>

            <div className="relative px-4">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={pageTransition}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {getCurrentProjects().map((project, index) => (
                            <motion.div
                                key={`${project.title}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <AnimatePresence>
                                    <motion.div
                                        key={project.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card
                                            className="rounded-lg p-4 border-2 hover:border-blue-500 transition-all hover:scale-105 h-[300px]"
                                        >
                                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-zinc-400 mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <motion.span
                                                        key={tagIndex}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                                                        className="px-3 py-1 bg-secondary rounded-full text-sm"
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                ))}
                                            </div>
                                            <motion.div
                                                className="flex items-center justify-center gap-2 mt-4"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 + 0.3 }}
                                            >
                                                {project.github.ok && (
                                                    <a href={project.github.url} target="_blank" rel="noopener noreferrer">
                                                        <Button
                                                            variant="ghost"
                                                            className="mt-4 w-[80px] border-2 border-main hover:scale-110 transition-transform"
                                                        >
                                                            <Github className="h-4 w-4" />
                                                        </Button>
                                                    </a>
                                                )}
                                                {!project.demo.ok ? (
                                                    <Button
                                                        variant="ghost"
                                                        className="mt-4 w-[80px] border-2 border-main bg-secondary"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                ) : (
                                                    <a href={project.demo.url} target="_blank" rel="noopener noreferrer">
                                                        <Button
                                                            variant="ghost"
                                                            className="mt-4 w-[80px] border-2 border-main hover:scale-110 transition-transform"
                                                        >
                                                            <ExternalLink className="h-4 w-4" />
                                                        </Button>
                                                    </a>
                                                )}
                                            </motion.div>
                                        </Card>
                                    </motion.div>
                                </AnimatePresence>

                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <motion.div
                        key={index}
                        className={`h-2 rounded-full cursor-pointer ${currentPage === index + 1 ? 'w-6 bg-blue-500' : 'w-2 bg-zinc-600'
                            }`}
                        onClick={() => {
                            setDirection(index + 1 > currentPage ? 1 : -1);
                            setCurrentPage(index + 1);
                        }}
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </div>
        </Section>
    );
};

export default ProjectsSection;