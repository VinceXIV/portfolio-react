import React from "react";
import "./Navbar.css"

function Navbar({activePage, setActivePage}){
    return (
        <nav id="navbar">
            <div className="container">
                <div id="div-left">
                    {/* {`< git commit -m 'what am I doing' /> `} */}
                </div>
        
                <div id="div-right">
                    <ul>
                        <li className={activePage === 'introduction'? 'active' : ''}
                            onClick={()=>setActivePage('introduction')}
                            >
                            <a href="#section-1--introduction">{`< Introduction />`}</a>
                        </li>
                        <li className={activePage === 'about-me'? 'active' : ''}
                            onClick={()=>setActivePage('about-me')}
                            >
                            <a href="#section-2--about-me">{`< About Me />`}</a>
                        </li>
                        <li className={activePage === 'my-skills'? 'active' : ''}
                            onClick={()=>setActivePage('my-skills')}
                            >
                            <a href="#section-3--skills">{`< My Skills />`}</a>
                        </li>
                        <li className={activePage === 'projects'? 'active' : ''}
                            onClick={()=>setActivePage('projects')}
                            >
                            <a href="#section-4--featured-projects">{`< Projects />`}</a>
                        </li>
                        <li className={activePage === 'contact'? 'active' : ''}
                            onClick={()=>setActivePage('contact')}
                            >
                            <a href="#section-5--get-in-touch">{`< Contact />`}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;