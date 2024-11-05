import { User } from "lucide-react"
import { Section } from "../../ui"
import { homePage } from "../../../const"
import { StatsContainer } from "./StatsContainer"

const AboutSection = () => {
    const {aboutSection} = homePage
    return (
        <Section variant="light" className="rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-500">
                        <User className="h-6 w-6" />
                        {aboutSection.title}
                    </h2>
                    <p className="text-primary leading-relaxed mb-6">
                        {aboutSection.description}
                    </p>
                </div>
                <StatsContainer />
            </div>
        </Section>
    )
}
export default AboutSection