import React from "react";
import "./Square.css"

function Square({width, height, minHeight, borderColor, className}){
    const styles = {
        width: width || "3rem",
        minHeight: minHeight || "3rem",
        height: height || "100%",
        borderTop: `0.05rem solid ${borderColor || "var(--primary-color-2)"}`,
        borderRight: `0.05rem solid ${borderColor || "var(--primary-color-2)"}`
    }


    return (
        <div className={className} style={styles}></div>
    )
}

export default Square;