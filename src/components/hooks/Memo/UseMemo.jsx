import { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(5);

    const expensiveCal = (num)=>{
        console.log(num * 2);
        return num * 2;
        
    }
    // const res = expensiveCal (number); // re-render thaya rakhe ae change nthi thatu to pn
    const res = useMemo(()=>expensiveCal(number),[number])
  return (
    <div className='p-4 h-lvh flex flex-col justify-center items-center gap-1'>
      <h1 className='text-5xl text-cyan-900 text-center'>{count}</h1>
      <button className='btn py-2 px-5 bg-cyan-500  rounded-xl ' onClick={()=>setCount(count + 1)}>Increament</button> <br />
      <button className='btn py-2 px-5 bg-cyan-500 rounded-xl' onClick={()=>setNumber(number + 1)}>Change number</button>
    </div>
  )
}

export default UseMemo
