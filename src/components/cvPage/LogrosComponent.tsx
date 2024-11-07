import { Landmark } from "lucide-react"
import { cvPage } from "../../locales/cv"

const LogrosComponent = () => {
    const {achievements} = cvPage
    return (

        <section className="mb-12">
            <div className="flex items-center gap-2 mb-6 border-b-2 border-blue-400 text-blue-600">
                <Landmark className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold">{achievements.title}</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 ">
                    {
                        achievements.expertise.map((item, index) => (
                            <li key={index} className="pl-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default LogrosComponent