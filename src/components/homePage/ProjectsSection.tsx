import { ExternalLink } from "lucide-react";
import { Button, Card, Section } from "../ui"

const projects = [
    {
        title: "Portfolio",
        description: "Mi actual web hasta el día de hoy",
        tags: ["React", "Node.js", "NextJS", "NodeMailer", "FramerMotion", "TailwindCss"]
    },
    {
        title: "Clone Spring MVC",
        description: "Clone de esta mítica tecnología",
        tags: ["Node.js", "TypeScript", "ReclectMetaDaa"]
    },
    {
        title: "Ts-Engine-Template",
        description: "Clone de handlebars",
        tags: ["React Native", "Firebase"]
    },
    {
        title: "CRUD-REACT",
        description: "Proyecto Full Stack",
        tags: ["TS", "React", "Mongo", "Express", "Node.js"]
    },
    {
        title: "Trello Clone",
        description: "Clome del famoso software Trello Clone",
        tags: ["React", "DndKit", "TS"]
    },
];

const ProjectsSection = () => {
    return (
        <Section>
            <h2 className="text-3xl font-bold mb-10 text-blue-500">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
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
                                        className="px-3 py-1 bg-zinc-800 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Button variant="ghost" className="mt-4 w-full">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Ver Proyecto
                            </Button>
                    </Card>
                ))}
            </div>
        </Section>
    )
}

export default ProjectsSection
