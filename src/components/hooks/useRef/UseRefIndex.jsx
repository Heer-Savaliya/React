import React, { useRef } from 'react'

const UseRefIndex = () => {
    //! Traditional way
    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

    const username = useRef(null);
    const password = useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
        
    }
  return (
    <div>
      <h1>Hello useRef</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="username" ref={username}/>
        <input type="password" id="password" ref={password} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UseRefIndex
