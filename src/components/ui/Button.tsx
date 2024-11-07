
import React from "react"
import {cn} from "../../../libs/utils"
interface Props {
    children: React.ReactNode
    className?: string
    variant?: "ghost" | "default" | "outline" | "subtle",
    onClick?: (() => void) | ((e: React.MouseEvent<HTMLElement>) => void)
    disabled?: boolean
}

const buttonVariants = {
    default: "bg-zinc-900 hover:bg-secondary text-white",
    ghost: "hover:bg-secondary text-zinc-400",
    outline: "border border-main hover:bg-secondary text-zinc-400",
    subtle: "bg-secondary/50 hover:bg-secondary text-zinc-400",
}
export const Button = ({ children, variant = "default", className, onClick, disabled }: Props) => {
    return (
        <button className={cn(
            "p-2 rounded-md hover:bg-secondary transition-colors duration-200 flex items-center justify-center",
            buttonVariants[variant],
            className
        )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
