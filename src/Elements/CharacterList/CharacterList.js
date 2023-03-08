import React from "react";
import "./CharacterList.css"
import CharacterItem from "../CharacterItem/CharacterItem";

function CharacterList({count = 10, values = [0, 1], height="40vh", position="space-between", handleOnClick}){
    const characterList = []
    for(let i = 0; i < count; i++){
        characterList.push(
          <CharacterItem values={values} handleOnClick={handleOnClick} />
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