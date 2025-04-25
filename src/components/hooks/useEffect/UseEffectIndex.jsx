import React, { useEffect, useState } from 'react'
import './useEffect.css'

const UseEffectIndex = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`THe counter value = ${count}`);
        
    },[count])
  return (
    <div>
      <h1>Hello ,useEffect</h1>
      <p>Count : {count}</p>
      <button onClick={()=>setCount(count +1)}>Increment</button>
    </div>
  )
}

export default UseEffectIndex
