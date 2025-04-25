import React, { useState } from 'react'

const State  = () => {
    const [count,setCount]=useState(1)
    console.log("rendered")
  return (
    <>
      <section >
        <h1>{count}</h1 > <br />
        <button onClick={()=>setCount(count+1)}>Counter</button>
      </section>
    </>
  )
}

export default State
