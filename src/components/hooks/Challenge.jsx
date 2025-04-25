import React, { useState } from "react";
// const user = [
//   { name: "Heer", age: 20 },
//   { name: "Henu", age: 22 },
//   { name: "Yashu", age: 25 },
// ];

const Challenge = () => {
  const [user,setUser]= useState([
    { name: "Heer", age: 20 },
    { name: "Henu", age: 22 },
    { name: "Yashu", age: 25 },
  ])
  console.log(user.length)
  const userCount = user.length;     //userCount is an derivedState
  const userAvg = user.reduce((accum,curElem)=>accum + curElem.age ,0) /userCount;
  return (
    <div>
      <h1>User list</h1>
      <ul >
        {user.map(({name,age}, index) => {
          return (
              <li key={index}>
                <h1>Name : {name}   Age : {age}</h1>
              </li>
          );
        })} 
      </ul>
      <h2>Length : {userCount}</h2>
      <h2>Average : {userAvg}</h2>
    </div>
  );
};

export default Challenge;
