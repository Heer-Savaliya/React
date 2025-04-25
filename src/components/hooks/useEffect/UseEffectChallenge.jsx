import React, { useEffect, useState } from 'react'
import './useEffect.css'


//! Add counter that increase the value by 1
//! Display name which is entered by user in input box and also in console.log
//! Change the title of page
//! Display the counter updated value in the title
const UseEffectChallenge = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");

    useEffect(()=>{
        document.title = `Count : ${count}`
    },[count])
    useEffect(()=>{
        console.log(`My name is : ${name}`);
    },[name])
    
  return (
    <div className='container effect-container'>
      <h1>UseEffect Challenge</h1>
      <p>Count : <span>{count}</span></p>
      <button onClick={()=>setCount(count+1)}>Increment</button>

      <p>Name : <span> {name} </span></p>
      <input type="text" name='name' autoComplete='off' required placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default UseEffectChallenge
