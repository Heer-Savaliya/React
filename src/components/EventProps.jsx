import React from 'react'
import WelcomeUser from './WelcomeUser'

const EventProps = () => {
    const handleWelcomeUser =(user)=>{
        alert(user)
    }
    const handleHover = () =>{
        alert("Hovering")
    }
  return (
    <>
      <WelcomeUser onClick={()=>handleWelcomeUser("Heerrrrrrrrrrrrrrrrrr")} onMouseEnter={handleHover}/>
    </>
  )
}

export default EventProps
