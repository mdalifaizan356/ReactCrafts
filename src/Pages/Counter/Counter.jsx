import { useState } from 'react'
import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Counter = () => {
  const [number, setnumber]=useState(0);

  function increement(){
    setnumber(number -1)
  }

  function decreement(){
    setnumber(number - 1)
  }
  return (
    <>
      <button type='button' onClick={increement}>Increement</button>
      <h1>{number}</h1>
      <button type='button' onClick={decreement}>Decreement</button>
    </>
  )
}

export default Counter