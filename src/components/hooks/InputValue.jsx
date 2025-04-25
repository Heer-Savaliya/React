import React, { useState } from 'react'

const InputValue = ({inputVal,setInputVal}) => {
    
  return (
    <div>
      <input type="text" placeholder='Enter value'  value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} className='px-36 py-7 bg-red-400 text-3xl text-black rounded-3xl'/>
      {/* <p>{inputVal}</p> */}
    </div>
  )
}

export default InputValue
