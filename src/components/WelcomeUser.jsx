import React from 'react'

const WelcomeUser = (props) => {
    const handleClick=()=>{
        props.onClick();
    }
  return (
    <>
      <button onClick={props.onClick}>Click me</button>
      <button onMouseEnter={props.onMouseEnter}>Hover me</button>
      <button onClick={handleClick}>Gretting</button>
    </>
  )
}

export default WelcomeUser
