// Code EyesOnMe Component Here
import React from "react"

function handleFocus(e){
    e.preventDefault();
    console.log('Good!')
}

function handleBlur(e){
    e.preventDefault;
    console.log('Hey! Eyes on me!')
}

function EyesOnMe(){
    return (
    <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
    </button>
    )
}

export default EyesOnMe