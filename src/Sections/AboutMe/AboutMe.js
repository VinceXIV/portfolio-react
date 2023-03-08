import React from "react";
import CharacterPanels from "../../Components/CharacterPanels/CharacterPanels";
import "./AboutMe.css"

function AboutMe(){
    return (
        <div id="about-me-section">
            <div id="about-me-decoration">
                <CharacterPanels />
            </div>
            <div id="about-me-content"></div>
        </div>
    )
}

export default AboutMe;