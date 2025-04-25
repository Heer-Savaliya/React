import { useCallback, useState } from 'react'

const UseCallback = () => {
    const [count ,setCount]=useState(0);

    // const handleClick =()=>{
    //     console.log("Button clicked");
    // }
    const handleClick =useCallback(()=>{
        console.log("Button clicked");
    },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Child handleClick={handleClick}/>
    </div>
  )
}

export const Child = ({handleClick}) => {
    console.log("Child re-rendered");
    return <button onClick={handleClick}>Click Me</button>;
}


export default UseCallback



