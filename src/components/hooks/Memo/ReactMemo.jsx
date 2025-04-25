import  { useState } from 'react'
import MemoCount from './MemoCount';

const ReactMemo = () => {
    const [count,setCount] =useState(0);
  return (
    <>
    <div className='p-4 h-52 font-display tracking-wider flex flex-col justify-center items-center'>
      <h1>{count}</h1>
      <button className='btn py-2 px-5 bg-cyan-500' onClick={()=>setCount((prev)=>prev + 1)}>Increment</button>
    </div>

    <MemoCount/>
    </>
  )
}

export default ReactMemo
