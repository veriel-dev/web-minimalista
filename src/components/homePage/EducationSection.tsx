import { GraduationCap } from "lucide-react";
import { Card, Section } from "../ui"


const education = [
    {
        degree: "Graduado en Física",
        institution: "Universidad de Extremadura",
        period: "2014 - 2021",
        description: "Especialización en el entendimiento del mundo que nos rodea",
    },
    {
        degree: "Bachiller",
        institution: "I.E.S.O Norba Ceserina",
        period: "2012 - 2024",
        description: "Instituo secundaria obligatoria",
    },
];

const EducationSection = () => {
    return (
        <Section>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 text-blue-500">
                <GraduationCap className="h-8 w-8" />
                Formación Académica
            </h2>
            <div className="space-y-8">
                {education.map((edu, index) => (
                    <Card key={index} className=" hover:border-blue-500/50 transition-all duration-300 p-6 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-4">
                                <div className="text-blue-400 font-medium">
                                    {edu.period}
                                </div>
                                {/* Detalles principales */}
                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-zinc-400 mb-4">{edu.institution}</p>
                                    <p className="text-zinc-400 mb-4">{edu.description}</p>
                                </div>
                            </div>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
export default EducationSection