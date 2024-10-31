import { User } from "lucide-react"
import { Card, Section } from "../ui"
import { homePage } from "../../const"

const AboutSection = () => {
    const {aboutSection} = homePage
    return (
        <Section variant="light" className="rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-500">
                        <User className="h-6 w-6" />
                        {aboutSection.titlte}
                    </h2>
                    <p className="text-primary leading-relaxed mb-6">
                        {aboutSection.description}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { label: aboutSection.titleExperience, value: aboutSection.experience },
                        { label: aboutSection.titleProjects, value: aboutSection.projects },
                        { label: aboutSection.titleClients, value: aboutSection.clients },
                        { label: aboutSection.titleTec, value: aboutSection.tec }
                    ].map((stat, index) => (
                        <Card 
                            key={index} 
                            className="rounded-lg p-6  border-2"
                        >
                            <div className="text-3xl font-bold mb-2">{stat.value}</div>
                            <div className="text-zinc-400">{stat.label}</div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    )
}
export default AboutSection