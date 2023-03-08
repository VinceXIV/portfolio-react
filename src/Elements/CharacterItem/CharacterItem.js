import React, {useEffect, useState, useRef} from "react";
import "./CharacterItem.css"

function CharacterItem({values=[0, 1], handleOnClick}){
    const charValueRef = useRef()
    const [randomInterval, setRandomInterval] = useState(Math.random()*100000)

    useEffect(()=>{
        const intrvl = setInterval(()=>{
            charValueRef.current.innerText = values[Math.floor(Math.random()*values.length)]
            setRandomInterval(5000 + Math.random()*10000)
        }, randomInterval)

        return ()=> clearInterval(intrvl)
    }, randomInterval)

return (
        <div id="character-item" onClick={handleOnClick} ref={charValueRef}>
            {values[Math.floor(Math.random()*values.length)]}
        </div>
    )
}

export default CharacterItem;