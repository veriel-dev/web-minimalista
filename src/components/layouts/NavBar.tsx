import { FolderKanban, Github, Home, Linkedin, Mail } from "lucide-react"
import { LinkNavBar } from "../ui/LinkNavBar"
import { Link } from "wouter"
import { Button } from "../ui"
import { memo } from "react"

export const NavBar = memo(() => {
    return (
        <nav className="sticky top-0 bg-zinc-950/80 backdrop-blur-sm z-10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link href="/" title="Inicio">
                        <Button variant={"ghost"} ariaLabel="Aria Inicio" title="Incio">
                            <Home className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/projects" title="Proyectos">
                        <Button variant={"ghost"} ariaLabel="Aria Proyectos" title="Proctos">
                            <FolderKanban className="h-5 w-5" />    
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <LinkNavBar
                        to="mailto:vmordiales@gmail.com"
                        title="Email"
                        ariaLabel="Aria Email"
                        isEmail
                    >
                        <Mail className="h-5 w-5" />
                    </LinkNavBar>
                    <LinkNavBar
                        to="https://github.com/veriel-dev/"
                        target="_blank"
                        title="GitHub"
                        ariaLabel="Aria GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </LinkNavBar>
                    <LinkNavBar
                        to="https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/"
                        target="_blank"
                        title="Linkedin"
                        ariaLabel="Aria Linkedin"
                    >
                        <Linkedin className="h-5 w-5" />
                    </LinkNavBar>
                </div>
            </div>
        </nav>
    )
})
