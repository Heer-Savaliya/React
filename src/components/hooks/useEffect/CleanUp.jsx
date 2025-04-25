import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
      const timer =  setInterval(() => {
        setCount((prev)=> prev + 1);
      }, 500);
      return()=> clearInterval(timer);
  },[])
  return (
    <div className="container">
      <div className="counter">
        <h1>My Subscribers on Youtube</h1>
        <div className="odometer" id="odometer" style={{color:"darkgoldenrod", fontSize:"4rem"}}>
          {count}
        </div>

        <h2 className="title">
          Subscribes <br /> Realtime Counter
        </h2>
      </div>
    </div>
  );
};

export default CleanUp;
