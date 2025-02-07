import { Code } from "lucide-react"
import { cvPage } from "../../data/pages/cv"


const SkillsComponents = () => {
    const {skills} = cvPage
    return (
        <section className="mb-12">
            <div className="flex items-center gap-2 mb-6 border-b-2 border-blue-400 text-blue-600">
                <Code className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold">{skills.title}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {
                    skills.tecs.map(({title, tec, icon:Icon}, index) => (
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm print:bg-white print:border print:border-gray-200 flex flex-col gap-2 w-full" key={index}>
                            <div className="flex items-center gap-2 mb-4">
                                <Icon className="w-5 h-5 text-blue-600" />
                                <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tec.map((skill) => (
                                    <span key={skill} className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm shadow-sm print:border print:border-blue-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SkillsComponents