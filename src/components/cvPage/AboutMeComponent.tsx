import { User } from "lucide-react"
import { cvPage } from "../../locales/cv"

const AboutMeComponent = () => {
    const { about } = cvPage
    return (
        <>
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-blue-400 text-blue-600">
                    <User className="w-5 h-5" />
                    <h2 className="text-2xl font-bold ">{about.title}</h2>
                </div>

                <p className="text-gray-600 leading-relaxed w-[95%]">
                    {about.text}
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 ">
                    {
                        about.expertise.map((item, index) => (
                            <li key={index} className="pl-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </section>

        </>


    )
}

export default AboutMeComponent