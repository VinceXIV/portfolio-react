import React from "react";
import CharacterPanels from "../../Components/CharacterPanels/CharacterPanels";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import Introduction from "../../Sections/Introduction/Introduction";
import "./Home.css"

function Home(){
    return (
        <div id="home" className="container">
            <Introduction />
            <AboutMe />
        </div>
    )
}

export default Home;