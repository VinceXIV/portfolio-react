import React from "react";
import Triangle from "../../Elements/Triangle/Triangle";
import "./Introduction.css"

function Introduction(){
    return (
        <section id="section-1--introduction">
            <h1>Hello there,</h1>
            <div class="name">
                <div id="i-am-and-decorative-div">
                    <div id="i-am">
                        <p>I</p>
                        <Triangle width={12} height={16} color={"#C89595"} className=""/>
                        <p>am</p>
                    </div>
                    <div class="decoration-div"></div>
                </div>

                <div id="my-name">
                    <div id="probably-nothing"></div>
                    <p>Vincent Makokha</p>
                </div>
            </div>

            <div id="welcome-to-my-world">
                <p className="welcome-content"> Welcome to</p>
                <p className="welcome-content">{`{ myWorld }`}</p>
                <Triangle width={12} height={16} color={"#C89595"} className="welcome-content-triangle"/>
            </div>
        </section>
    )
}

export default Introduction;