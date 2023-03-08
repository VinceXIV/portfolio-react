import React from "react";

function TwoSquares({width=3, height=10, gap=0.5, borderColor="var(--primary-color-2)", overlap=3}){
    const square1Style = {
        width: `${width}rem`,
        height: `${height}rem`,
        borderBottom: `0.05rem solid ${borderColor}`,
        borderRight: `0.05rem solid ${borderColor}`,
    }

    const square2Style = {
        width: `${width}rem`,
        height: `${height}rem`,
        borderTop: `0.05rem solid ${borderColor}`,
        borderLeft: `0.05rem solid ${borderColor}`,
    }

    const twoSquaresStyle = {
        height: `${(2*height) - overlap}rem`,
        display: "flex",
        gap: `${gap}rem`,
        top: "10rem",
        left: "10rem"
    }

    const squareContainerStyle = {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }


    return (
        <div style={twoSquaresStyle}>
            <div style={squareContainerStyle}>
                <div id="square-1" style={square1Style}></div>
                <div></div>
            </div>
            <div style={squareContainerStyle}>
                <div></div>
                <div id="square-2" style={square2Style}></div>
            </div>
        </div>
    )
}

export default TwoSquares;