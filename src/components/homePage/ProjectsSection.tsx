import { ExternalLink, Github } from "lucide-react";
import { Button, Card, Section } from "../ui"
import { homePage } from "../../const";
import { Link } from "react-router-dom";



const ProjectsSection = () => {
    const { projectsSections } = homePage
    return (
        <Section>
            <h2 className="text-3xl font-bold mb-10 text-blue-500">
                {projectsSections.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsSections.projects.map((project, index) => (
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
                            {
                                project.github.ok && (
                                    <Link to={project.github.url} target="_blank">
                                        <Button
                                            variant="ghost"
                                            className="mt-4 w-[80px] border-2 border-main"
                                        >
                                            <Github className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                )
                            }
                            {
                                project.demo.ok ? (
                                    <Button variant="ghost" className="mt-4 w-[80px] border-2 border-main bg-secondary">
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>

                                ) : (
                                    <Link to={project.demo.url} target="_blank">
                                        <Button variant="ghost" className="mt-4 w-[80px] border-2 border-main">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                )
                            }

                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    )
}

export default ProjectsSection
