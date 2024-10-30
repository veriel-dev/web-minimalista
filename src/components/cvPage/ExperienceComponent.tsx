import { Briefcase } from "lucide-react"


const ExperienceComponent = () => {
    const experience = {
        title: "EXPERIENCIA PROFESIONA",
        jobs: [
            {
                job: "Desarrollador FullStack",
                company: "Viewnext S.A · Cáceres · ago. 2021 - Actualidad",
                description: "Pertenezco al equipo de desarrollo de la área pública y privada de Naturgy. Mi trabajo consiste en el desarrollo de nuevas funcionalidades y mantenimiento de las ya existentes, todo esto dentro del un marco trabajo FullStack (JS(TS/Java)). Actulamente estoy realizando funciones de analista."
            },
            {
                job: "Desarrollador en I+D",
                company: "eCapture3D S.L · Badajoz · abr. 2021 - jun. 2021",
                description: "Desarrollo de algoritmos predictivos para detectar la evolución de variables climáticas en España mediante técnicas de Machine Learning y Deep Learning."
            }
        ]
    }
    return (
        <section className="mb-12">
            <div className="flex items-center gap-2 mb-6 border-b-2 border-blue-400 text-blue-600">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold ">EXPERIENCIA PROFESIONAL</h2>
            </div>
            <div className="space-y-8">
                {
                    experience.jobs.map((job, index) => (
                        <div className="relative pl-8 border-l-2 border-blue-400" key={index}>
                            <div className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -left-[9px] top-0"></div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-800">{job.job}</h3>
                                <p className="text-gray-600 mb-2">{job.company}</p>
                                <p className="text-gray-600 text-sm w-[95%]">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default ExperienceComponent