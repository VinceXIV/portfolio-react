import React from "react";
import "./Square.css"

function Square({className, width=3, height=3, borderColor="var(--primary-color-2)",}){
    const styles = {
        width: `${width}rem`,
        height: `${height}rem`,
        borderTop: `0.05rem solid ${borderColor}`,
        borderRight: `0.05rem solid ${borderColor}`,
    }


    return (
        <div className={className} style={styles}></div>
    )
}

export default Square;