import React, { useState } from "react";
import './ShortCircuit.css'

const ShortCircuit = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [isUser,setIsUser] = useState("");
  return (
    <div className="container short-container">
      <h1>Welcome to the <br /> ShortCircuit Evaluation !</h1>
      {isLoggedIn && <p>You are logged in</p>}
      {isUser ? <p>Hello {isUser}</p> : <p>Plz log in!</p>}
      <div className="grid-three-cols">
        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
        <button onClick={()=>setIsUser("Heer")}>Set User</button>
        <button onClick={()=>setIsUser(null)}>Clear User</button>
      </div>
    </div>
  );
};

export default ShortCircuit;
