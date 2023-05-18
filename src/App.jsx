import {  Outlet } from "react-router-dom"
import Navigation from "./Navigation/Navigation"

export default function App() {
    return (
        <div className="bg-slate-900 min-h-screen">
            <Navigation/>
            <div className="max-w-4xl m-auto
            p-6">
            <Outlet />
            </div>
        </div>
    )
}