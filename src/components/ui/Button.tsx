
import React from "react"
import {cn} from "../../../libs/utils"
interface Props {
    children: React.ReactNode
    className?: string
    variant?: "ghost" | "default" | "outline" | "subtle"
}

const buttonVariants = {
    default: "bg-zinc-900 hover:bg-zinc-800 text-white",
    ghost: "hover:bg-zinc-800 text-zinc-400",
    outline: "border border-zinc-800 hover:bg-zinc-800 text-zinc-400",
    subtle: "bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400",
}
export const Button = ({ children, variant = "default", className }: Props) => {
    return (
        <button className={cn(
            "p-2 rounded-md hover:bg-zinc-800 transition-colors duration-200 flex items-center justify-center",
            buttonVariants[variant],
            className
        )}>
            {children}
        </button>
    )
}
