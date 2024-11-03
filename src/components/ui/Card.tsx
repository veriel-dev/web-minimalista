import React from "react"
import { cn } from "../../../libs/utils"



const variants = {
    default: "bg-main-light border-main",
    light: "bg-gray-400 border-gray-500 "    
}

interface Props {
    className?: string
    variant?: "default" | "light"
    children: React.ReactNode
}

export const Card = ({className, variant = "default", children}:Props) => {
    return (
        <div className={cn(
            variants[variant],
            className
        )}>
            {children}
        </div>
    )
}
