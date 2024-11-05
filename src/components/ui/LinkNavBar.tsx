import React from "react"
import { Button } from "./Button"



interface Props {
    to: string
    target?: string
    children: React.ReactNode
    variant?: "ghost" | "default" | "outline" | "subtle"
    isEmail?: boolean
    isTel?: boolean
}
export const LinkNavBar = ({ to, target = "_blank", children, variant = "ghost", isEmail = false, isTel = false }: Props) => {
    return (
        <>
            {
                ( isEmail || isTel) && (
                    <a href={to}>
                        <Button variant={variant}>
                            {children}
                        </Button>
                    </a>
                )
            }
            {
                !isEmail && !isTel && (
                    <a 
                        href={to}
                        target={target}
                        rel="noopener noreferrer"
                    >
                        <Button variant={variant}>
                            {children}
                        </Button>
                    </a>
                )
            }
        </>
    )
}
