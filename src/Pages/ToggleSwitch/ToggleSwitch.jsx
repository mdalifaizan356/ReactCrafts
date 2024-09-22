import { useState } from 'react'
import React from 'react'
import offBulb from "../../../public/offBulb.png"
import onBulb from "../../../public/onBulb.png"


const ToggleSwitch = () => {
  const [isOff, isOn]=useState(false);
  const [BtnOff, BtnOn]=useState("Off");

  const handleButton =()=>{
    isOn(!isOff);
    BtnOn (isOff? "Off" : "On");
  }


  return (
    <>
      <img src = {isOff ? offBulb : onBulb}  width="10%" />
      <button type='button' onClick={handleButton}>{BtnOff}</button>
    </>
  )
}

export default ToggleSwitch