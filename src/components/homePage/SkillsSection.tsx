import { Code, Cog } from "lucide-react";
import { Section } from "../ui"


const SkillsSection = () => {

    const skills = [
        {
            category: "Frontend",
            technologies: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "HTML/CSS", level: 90 },
                { name: "Tailwind", level: 85 },
            ]
        },
        {
            category: "Backend",
            technologies: [
                { name: "Node.js", level: 85 },
                { name: "Spring", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "Express", level: 85 }
            ]
        }
    ];


    const renderSkillBar = (level: number) => (
        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden ">
            <div
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500"
                style={{ width: `${level}%` }}
            />
        </div>
    );
    return (
        <Section variant="light"  className="rounded-lg">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 text-blue-500">
                <Cog className="h-8 w-8" />
                Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {skills.map((skillCategory, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-6">
                        <h3 className="text-3xl font-bold text-blue-400 flex items-center gap-2">
                            <Code className="h-6 w-6" />
                            {skillCategory.category}
                        </h3>
                        <div className="space-y-4">
                            {skillCategory.technologies.map((tech, techIndex) => (
                                <div key={techIndex} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span className="text-zinc-300">{tech.name}</span>
                                        <span className="text-zinc-400">{tech.level}%</span>
                                    </div>
                                    {renderSkillBar(tech.level)}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default SkillsSection