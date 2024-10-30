import { Github, Linkedin, Mail } from "lucide-react"
import { Button, Card, Section } from "../ui"


const ContactSection = () => {
    return (
        <Section variant="light"  className="rounded-lg">
            <h2 className="text-3xl font-bold mb-10 text-blue-500">Contacto</h2>
            <Card className="p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">¡Hablemos!</h3>
                        <p className="text-zinc-400">
                            Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
                        </p>
                        <div className="space-y-2">
                            <p className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                tucorreo@ejemplo.com
                            </p>
                            <p className="flex items-center gap-2">
                                <Github className="h-4 w-4" />
                                github.com/tuusuario
                            </p>
                            <p className="flex items-center gap-2">
                                <Linkedin className="h-4 w-4" />
                                linkedin.com/in/tuusuario
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            <Mail className="mr-2 h-4 w-4" />
                            Enviar Mensaje
                        </Button>
                    </div>
                </div>
            </Card>
        </Section>
    )
}
export default ContactSection