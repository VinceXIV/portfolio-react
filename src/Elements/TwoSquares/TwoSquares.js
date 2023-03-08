import React from "react";
import "./TwoSquares.css"

function TwoSquares({width=3, height=10, gap=0.5, borderColor="var(--primary-color-2)", overlap=3}){
    const squareStyle = {
        width: `${width}rem`,
        height: `${height}rem`,
    }
    const square1Style = {
        borderBottom: `0.05rem solid ${borderColor}`,
        borderRight: `0.05rem solid ${borderColor}`,
    }

    const square4Style = {
        borderTop: `0.05rem solid ${borderColor}`,
        borderLeft: `0.05rem solid ${borderColor}`,
    }

    const twoSquaresStyle = {
        height: `${(2*height) - overlap}rem`,
        display: "grid",
        gap: `${gap}rem`,
    }

    const dummyStyle = {
        height:`${height - (overlap/2)}rem`
    }


    return (
        <div style={twoSquaresStyle} id='two-squares'>
                <div id="square-1" style={{...square1Style, ...squareStyle}} className="square"></div>
                <div id="square-2" className="square dummy" style={dummyStyle}></div>
            {/* <div style={squareContainerStyle}>
            </div> */}
                <div id="square-3" className="square dummy" style={dummyStyle}></div>
                <div id="square-4" style={{...square4Style, ...squareStyle}}></div>
            {/* <div style={squareContainerStyle}>
            </div> */}
        </div>
    )
}

export default TwoSquares;