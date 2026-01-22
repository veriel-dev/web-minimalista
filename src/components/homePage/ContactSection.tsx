import { Github, Linkedin, Mail } from "lucide-react"
import { Card, Section } from "../ui"
import { FormSendEmail } from "./formSendEmail"
import { homePage } from "../../data/pages"

const ContactSection = () => {
    const {contactSetion} = homePage
    return (
        <Section className="rounded-lg" id="contact">
            <h2 className="text-3xl font-bold mb-10 text-blue-500">
                {contactSetion.title}
            </h2>
            <Card className="p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">{contactSetion.subTitles.one}</h3>
                        <h4 className="text-xl text-blue-500 font-bold">
                            {contactSetion.subTitles.two}
                        </h4>
                        <p className="text-zinc-400">{contactSetion.description}</p>
                        <div className="flex items-center justify-start gap-4">
                            <a href="mailto:vmordiales@gmail.com" title="Email">
                                <Mail className="h-5 w-5" />
                            </a>
                            <a href="https://github.com/samuraiOrDev" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <FormSendEmail />
                    </div>
                </div>
            </Card>
        </Section>
    )
}
export default ContactSection