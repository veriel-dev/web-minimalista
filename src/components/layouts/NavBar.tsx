import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "../ui"

export const NavBar = () => {
    return (
        <nav className=" sticky top-0 bg-zinc-950/80 backdrop-blur-sm z-70">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-end items-center">
                <div className="flex items-center gap-4">
                    <a href="mailto:vmordiales@gmail.com">
                        <Button variant="ghost">
                            <Mail className="h-5 w-5" />
                        </Button>
                    </a>
                    <a 
                        href="https://github.com/samuraiOrDev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <Button variant="ghost">
                            <Github className="h-5 w-5" />
                        </Button>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <Button variant="ghost">
                            <Linkedin className="h-5 w-5" />
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    )
}
