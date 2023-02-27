import React from "react";
import "./Introduction.css"

function Introduction(){
    return (
        <section id="section-1--introduction">
            <h1>Hello there,</h1>
            <div class="name">
                <div id="i-am-and-decorative-div">
                    <p id="i-am">I am</p>
                    <div class="decoration-div"></div>
                </div>

                <div id="my-name">
                    <div id="probably-nothing"></div>
                    <p>Vincent Makokha</p>
                </div>
            </div>

            <div id="welcome-to-my-world">
                <p className="welcome-content"> Welcome to</p>
                <p className="welcome-content">myWorld</p>
            </div>
        </section>
    )
}

export default Introduction;