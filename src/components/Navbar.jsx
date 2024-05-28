import React from "react"
import { Link } from "react-router-dom"
import About from "./About.jsx"
import Vans from "./Vans.jsx"

export default function Navbar() {
    return (
        <nav>
            <Link className="link" to="/">#VANLIFE</Link>
            <div className="links">
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/vans">Vans</Link>
            </div>
        </nav>
    )
}