import { Github, Linkedin, Mail } from "lucide-react"
import { Card, Section } from "../ui"
import { FormSendEmail } from "./formSendEmail"

const ContactSection = () => {
    return (
        <Section className="rounded-lg">
            <h2 className="text-3xl font-bold mb-10 text-blue-500">Contacto</h2>
            <Card className="p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">¡Hablemos!</h3>
                        <p className="text-zinc-400">
                            Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
                        </p>
                        <div className="space-y-2">
                            <a className="flex items-center gap-2" href="mailto:vmordiales@gmail.com">
                                <Mail className="h-4 w-4" />
                                vmordiales@gmail.com
                            </a>
                            <a className="flex items-center gap-2" href="https://github.com/samuraiOrDev" target="_blank">
                                <Github className="h-4 w-4" />
                                https://github.com/samuraiOrDev
                            </a>
                            <a className="flex items-center gap-2" href="https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/" target="_blank">
                                <Linkedin className="h-4 w-4" />
                                https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/
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