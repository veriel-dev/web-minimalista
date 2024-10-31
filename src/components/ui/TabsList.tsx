import React from "react"

interface Props {
    children: React.ReactNode
}
export const TabsList = ({children}: Props) => {
    return (
        <div className="flex mb-8 border-b flex-wrap">
            {children}
        </div>
    )
}
