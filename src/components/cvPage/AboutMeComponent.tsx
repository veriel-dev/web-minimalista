import { User } from "lucide-react"
const AboutMeComponent = () => {
    const about = {
        title: "SOBRE MI",
        text: "Desarrollador Full-Stack con experiencia en entornos empresariales, especializado en sistemas CMS (OWCS), Spring Framework y desarrollo JavaScript/TypeScript. Enfocado en la implementación de soluciones web eficientes y el desarrollo de aplicaciones escalables."
    }
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
            </section>

        </>


    )
}

export default AboutMeComponent