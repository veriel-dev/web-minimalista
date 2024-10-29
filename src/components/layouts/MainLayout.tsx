import React from "react"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"


interface Props {
    children: React.ReactNode
}
export const MainLayout = ({children}:Props) => {
    return (
        <div className=" min-h-screen bg-main text-primary">
            {/* NavBar*/}
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
