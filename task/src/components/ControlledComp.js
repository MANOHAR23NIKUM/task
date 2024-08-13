import React, { useRef, useState } from 'react'

const ControlledComp = () => {

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

export default ControlledComp;
