import React from 'react'
import './EV.css'

const EventHandling = () => {
    // function handleButtonClick(){
    //     alert ("Hey myself heer")
    // }

    const handleButtonClick =(event)=>{
        console.log(event)
        console.log(event.target)
        alert("Hey myself Heer")
    }

    const handleButtonClick2 =(name)=>{
        alert(name)
    }
  return (
    <>
      {/* <button className='bg-orange-500 p-6 rounded-3xl text-xl' onClick={handleButtonClick}>Click me</button> */}
      {/* <button className='bg-orange-500 p-6 rounded-3xl text-xl' onClick={handleButtonClick("Henu")}>Click me</button> */}
      <button className='bg-orange-500 p-6 rounded-3xl text-xl' onClick={()=>handleButtonClick2("Henu")}>Click me</button>
      <button className='bg-orange-500 p-6 rounded-3xl text-xl' onClick={(event)=>handleButtonClick(event)}>Click me</button>
    </>
  )
}

export default EventHandling
