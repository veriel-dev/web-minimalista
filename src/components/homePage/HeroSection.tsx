import { Download, Mail } from "lucide-react"
import { Button, Section } from "../ui"


const HeroSection = () => {
    return (
        <Section>
            <div className="flex flex-col items-center text-center gap-6">
                {/* Img */}
                <div className="w-32 h-32 rounded-full bg-secondary overflow-hidden">
                    <img
                        src="https://www.claudeusercontent.com/api/placeholder/128/128"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Text */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        Desarrollador Full Stack
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        Apasionado por crear experiencias web únicas y resolver problemas complejos a través del código.
                    </p>
                </div>
                {/* Buttons */}
                <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        <Mail className="mr-2 h-4 w-4" />
                        Contactar
                    </Button>
                    <Button variant="outline" className="border-zinc-700">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar CV
                    </Button>
                </div>
            </div>
        </Section>
    )
}
export default HeroSection