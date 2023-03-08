import React from "react";
import CharacterPanels from "../../Components/CharacterPanels/CharacterPanels";
import TwoSquares from "../../Elements/TwoSquares/TwoSquares";
import "./AboutMe.css"

function AboutMe(){
    return (
        <div id="about-me-section">
            <div id="about-me-decoration">
                <CharacterPanels />
                <div className="two-squares">
                    <TwoSquares height={5} width={2} overlap={2}/>
                    <TwoSquares height={5} width={2} overlap={2}/>
                    <TwoSquares height={5} width={2} overlap={2}/>
                    <TwoSquares height={5} width={2} overlap={2}/>
                    <TwoSquares height={5} width={2} overlap={2}/>
                </div>
            </div>
            <div id="about-me-content"></div>
        </div>
    )
}

export default AboutMe;