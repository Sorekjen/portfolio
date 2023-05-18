import {  Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import "../../output.css"

export default function Root() {
    return (
        <div className="bg-slate-900">
            <Navigation/>
            <div className="max-w-4xl m-auto
            p-6">
            <Outlet />
            </div>
        </div>
    )
}