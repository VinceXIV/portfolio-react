import React from "react";
import "./Navbar.css"

function Navbar(){
    return (
        <nav id="navbar">
            <div className="container">
                <div id="div-left">
                    {`< git commit -m 'what am I doing' /> `}
                </div>
        
                <div id="div-right">
                    <ul>
                        <li><a href="#section-1--introduction">Introduction</a></li>
                        <li><a href="#section-2--about-me">About Me</a></li>
                        <li><a href="#section-3--skills">My Skills</a></li>
                        <li><a href="#section-4--featured-projects">Projects</a></li>
                        <li><a href="#section-5--get-in-touch">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;