import React from "react";
import "./CharacterList.css"

function CharacterList({count = 10, values = [0, 1], height="50vh", position="space-between", handleOnClick}){
    const characterList = []
    for(let i = 0; i < count; i++){
        characterList.push(
            <div className="item" onClick={handleOnClick}>
                {values[Math.floor(Math.random()*values.length)]}
            </div>
        )
    }  

    const characterListStyle = {
        minHeight: height,
        justifyContent: position
    }
    
    return (
        <div id="character-list" style={characterListStyle}>
            {characterList}
        </div>
    )
}

export default CharacterList