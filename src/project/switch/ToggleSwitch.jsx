import React, { useState } from 'react'
import './Toggle.css'
import { IoIosSwitch } from "react-icons/io";

const ToggleSwitch = () => {
  const handleToggle=()=>{
    setIsOn(!isOn);
  }
  const [isOn,setIsOn]=useState(false)
  const toogleison = isOn?"on" :"off";
  return (
    <>
    <h1 className='title'>Toggle switch</h1>
    <h1 ><IoIosSwitch className='title'/></h1>
      <div className='toggle-swtich' style={{backgroundColor : isOn?"yellowgreen" :"red"}} onClick={handleToggle}>
        <div className={`switch ${toogleison}`}>
          <span className='circle'>{toogleison}</span>
        </div>
      </div>
    </>
  )
}

export default ToggleSwitch
