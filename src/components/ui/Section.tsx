import React from "react"
import { cn } from "../../../libs/utils"

const variants = {
    default: "",
    light: "bg-zinc-900/50"
}

interface Props {
    variant?: "default" | "light"
    className?: string
    children: React.ReactNode
    id?: string
}

export const Section = ({variant = "default", className, children, id}:Props) => {
    return (
        <section 
            id={id}    
            className={cn(
                "max-w-6xl mx-auto px-4 py-20",
                variants[variant],
                className
            )}
        >
            {children}
        </section>
    )
}
