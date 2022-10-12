// Code Keypad Component Here
import React from "react";

function handleChange(e){
    e.preventDefault();
    console.log("Entering password...")
}
function Keypad (){
    return (
        <div>
            <input type="password" onChange={handleChange} />
        </div>
    )
}

export default Keypad;