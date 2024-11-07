import { memo } from "react"


export const Footer = memo(() => {
    return (
        <footer className="border-t border-main mt-6">
            <div className=" mx-w-6xl mx-auto px-4 py-8">
                <p className="text-center text-zinc-500">
                    © {new Date().getFullYear()} VerielDev. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
})
