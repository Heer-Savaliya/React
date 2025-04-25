import React, { useState } from 'react'
import '../ShortCircuit.css'

const UseStateHooks = () => {
    const history = document.querySelector(".history")
    const [count,setCount]=useState(0);
    const [inputVal,setInputVal]=useState(0);
    let pElem = document.createElement("p");
    
    const handleInc=()=>{
        setCount(count+inputVal)
        console.log(count);
        history.append(pElem);
        pElem.innerText = `Last value = ${count}`;
        // console.log(inputVal);
        
    }
    const handleDec=()=>{
        setCount(count-inputVal)
        history.append(pElem);
        pElem.innerText = `Last value = ${count}`;
    }
  return (
    // <div className='container short-container'>
    //   <h1>UseState Hook !</h1>
    //   <br />
    //   <p style={{textAlign:"center"}}>Count = {count}</p>
    //   <div className="grid-three-cols">
    //   <button onClick={()=>setCount(count+1)}>Increase the counter</button>
    //   <button onClick={()=>setCount(0)}>Reset</button>

    //   </div>
    // </div>


    //!Challenge
    <div className='container short-container'>
      <h1>UseState Hook Challenge !</h1>
      <p style={{textAlign:"center"}}>Count generator between 0 and 100 with adding number of steps</p>
      <br />
      <p style={{textAlign:"center"}}>Count = {count}</p>
      <p style={{textAlign:"center"}}>Step : <input type="number" name="" id="" value={inputVal} onChange={(e)=>setInputVal(Number(e.target.value))}  placeholder='Enter steps to inc or dec....'/></p>
      <div className="grid-three-cols">
      <button onClick={()=>handleInc()} disabled={count >= 100}>Increment</button>
      <button onClick={()=>handleDec()} disabled={count <= 0}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>

      </div>
      <h4>History</h4>
      <div className="history" style={{textAlign:"left"}}>
      </div>
    </div>
  )
}

export default UseStateHooks
