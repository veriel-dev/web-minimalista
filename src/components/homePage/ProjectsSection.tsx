import { useEffect, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Card, Section } from "../ui";
import { homePage } from "../../const";
import { motion, AnimatePresence } from "framer-motion";


const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Llamada inicial

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const ProjectsSection = () => {
    const { projectsSections } = homePage;
    const [currentPage, setCurrentPage] = useState(1);
    const [direction, setDirection] = useState(0);
    const { width } = useWindowSize();
    const projectsPerPage = width < 768 ? 3 : 6;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projectsSections.projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projectsSections.projects.length / projectsPerPage);

    const goToNextPage = () => {
        setDirection(1);
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const goToPrevPage = () => {
        setDirection(-1);
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const pageVariants = {
        enter: (direction:number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction:number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };
    const pageTransition = {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut"
    };

    return (
        <Section>
            <h2 className="text-3xl font-bold mb-10 text-blue-500">
                {projectsSections.title}
            </h2>
            
            <div className="relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={pageTransition}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {currentProjects.map((project, index) => (
                            <Card
                                key={index}
                                className="rounded-lg p-4 border-2 hover:border-blue-500 transition-colors"
                            >
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-zinc-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-secondary rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    {project.github.ok && (
                                        <a href={project.github.url} target="_blank">
                                            <Button
                                                variant="ghost"
                                                className="mt-4 w-[80px] border-2 border-main"
                                            >
                                                <Github className="h-4 w-4" />
                                            </Button>
                                        </a>
                                    )}
                                    {!project.demo.ok ? (
                                        <Button variant="ghost" className="mt-4 w-[80px] border-2 border-main bg-secondary">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    ) : (
                                        <a href={project.demo.url} target="_blank">
                                            <Button variant="ghost" className="mt-4 w-[80px] border-2 border-main">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                    variant="ghost"
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="p-2 text-blue-500"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <span className="text-sm text-blue-500">
                    Página <strong>{currentPage} </strong> de {totalPages}
                </span>
                
                <Button
                    variant="ghost"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="p-2 text-blue-500"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </Section>
    );
};

export default ProjectsSection;