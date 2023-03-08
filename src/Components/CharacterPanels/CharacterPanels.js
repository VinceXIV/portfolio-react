import React from "react";
import CharacterList from "../../Elements/CharacterList/CharacterList";
import "./CharacterPanels.css"

function CharacterPanels({panels=[21, 15, 9], values=[0, 1]}){

    function handleOnClick(e){
        e.target.style.visibility = 'hidden'
    }

    return (
        <div id="character-panels">
            {
                panels.map((panel, index) => {
                    return (
                        <CharacterList key={index}  count={panel} values={values} handleOnClick={handleOnClick}/>
                    )
                })
            }
        </div>
    )
}

export default CharacterPanels;