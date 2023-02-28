import React from "react";
import "./Triangle.css"

function Triangle({width, height, color, className}){
    const triangleStyles = {
        width: 0,
        height: 0,
        borderLeft: `${width}rem solid transparent`,
        borderRight: `${width}rem solid transparent`,
        borderBottom: `${height}rem solid ${color}`
    }

    return (
        <div id="triangle" style={triangleStyles} className={className}>

        </div>
    )
}

export default Triangle;