import { Github, Linkedin, Moon } from "lucide-react"
import { Button } from "../ui"

export const NavBar = () => {
    return (
        <nav className=" sticky top-0 bg-zinc-950/80 backdrop-blur-sm z-70">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">VerielDev</h1>
                <div className="flex items-center gap-4">
                    <Button variant="ghost">
                        <Moon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost">
                        <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost">
                        <Linkedin className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
