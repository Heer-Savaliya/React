import React, { useState } from 'react'
import InputValue from './InputValue'
import DisplayValue from './DisplayValue'

const LiftingStateUp = () => {
    const [inputVal,setInputVal]=useState("")
  return (
    <div>
      <InputValue inputVal={inputVal} setInputVal={setInputVal} />
      <DisplayValue inputVal={inputVal}  />
    </div>
  )
}

export default LiftingStateUp
