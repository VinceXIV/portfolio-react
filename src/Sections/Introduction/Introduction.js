import React from "react";
import CharacterPanels from "../../Components/CharacterPanels/CharacterPanels";
import Square from "../../Elements/Square/Square";
import Triangle from "../../Elements/Triangle/Triangle";
import TwoSquares from "../../Elements/TwoSquares/TwoSquares";
import "./Introduction.css"

function Introduction(){
    return (
        <section id="section-1--introduction">
            <div className="left-side">
                <h1>Hello there,</h1>
                <div className="name" >
                    <div id="i-am-and-decorative-div">
                        <div id="i-am">
                            <p>I</p>
                            <Triangle width={0.75} height={0.75} color={"#C89595"} className=""/>
                            <p>am</p>
                        </div>
                        <Square />
                    </div>

                    <div id="my-name" >
                        <div id="probably-nothing"></div>
                        <p>Vincent Makokha</p>
                    </div>
                </div>

                <div id="welcome-to-my-world">
                    <div className="text-content">
                        <p className="welcome-content"> Welcome to</p>
                        <p className="welcome-content">{`{ myWorld }`}</p>
                    </div>
                    <Triangle width={1} height={1} color={"#C89595"} className="welcome-content-triangle"/>
                </div>
            </div>

            <div className="right-side">
                <div className="borders">
                    {/* <TwoSquares height={8}/> */}
                    {/* <TwoSquares height={10}/> */}
                  
                    <CharacterPanels panels={[5, 4, 8, 9, 14, 12, 10,8, 10, 14, 8, 10, 14, 14,  18, 17, 15, 18, 25]} values={[1, 0,'', '','','', '', '', '', '', '']}/>
                </div>
            </div>
        </section>
    )
}

export default Introduction;