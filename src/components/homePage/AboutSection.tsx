import { User } from "lucide-react"
import { Card, Section } from "../ui"


const AboutSection = () => {
    return (
        <Section variant="light" className="rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-500">
                        <User className="h-6 w-6" />
                        Sobre Mí
                    </h2>
                    <p className="text-primary leading-relaxed mb-6">
                        Soy un desarrollador full stack con más de 3 años de experiencia en la creación de aplicaciones web y móviles.
                        Me especializo en tecnologías modernas como React, Node.js y TypeScript.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { label: "Experiencia", value: "3+ años" },
                        { label: "Proyectos", value: "30+" },
                        { label: "Clientes", value: "1+" },
                        { label: "Tecnologías", value: "20+" }
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