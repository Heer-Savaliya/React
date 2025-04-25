import React, { useReducer, useState } from 'react'

const ReducerIndex = () => {
    const reducer = (state,action)=>{
        console.log(state,action);
        if(action.type === "INC"){
            return state + 1 ;
        }else if(action.type === "DEC"){
            return state - 1;
        }else{
            return state = 0;
        }
    };
    // const [count,setCount] = useState(0);
    const [count,dispatch] = useReducer(reducer , 0);
  return (
    <div className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white text-xl`}>
      <h1 className='text-4xl'>Hello useReducer Hook</h1>
      <h2>Count = {count}</h2>
        <button onClick={()=>dispatch({type:"INC"})} className={`text-1xl px-8 py-3 my-3 bg-slate-100 text-slate-900 rounded-2xl`}>Increment</button>
        <button onClick={()=>dispatch({type:"DEC"})}  className={`text-1xl px-8 py-3 my-3 bg-slate-100 text-slate-900 rounded-2xl`}>Decreament</button>
        <button onClick={()=>dispatch({type:"RESET"})}  className={`text-1xl px-8 py-3 my-3 bg-slate-100 text-slate-900 rounded-2xl`}>Reset</button>
    </div>
  )
}

export default ReducerIndex
