import { useState } from 'react'
import React from 'react'

const ShowInput = () => {
  const [currentInput, setInput]=useState("");
  return (
    <>
      <textarea rows="2" cols="100" type='textarea' placeholder='Type Here' value={currentInput} onChange={(e)=>setInput(e.target.value)}/>
      <p>{currentInput}</p>
    </>
  )
}

export default ShowInput