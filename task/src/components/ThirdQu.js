import React, { useRef, useState } from 'react'

const ThirdQu = () => {

const inputRef=useRef(null);
const [display,setInputValue]=useState('')
const handleButton=()=>{
    setInputValue(inputRef.current.value);
}

  return (
    <div>
      <label>Name</label>
      <input type='text' ref={inputRef} placeholder='type someting...'/>
      <button type='submit' onClick={handleButton}>Show Input value</button>
      <p>Input value:{display}</p>
    </div>
  )
}

export default ThirdQu
 
//3)Create a React component with a text input and a button. When the button is clicked, display the current value of the text input below the button.(using useRef hook)
