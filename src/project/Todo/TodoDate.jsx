import React, { useEffect, useState } from "react";

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  //Date and time
  const getTime = () => {
    const now = new Date();
    const formatedDate = now.toLocaleDateString();
    const formatedTime = now.toLocaleTimeString();
    setDateTime(`${formatedDate} - ${formatedTime}`);
  };

  // console.log("hey")
  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  });
  return <h2 className="datetime">{dateTime}</h2>;
};

export default TodoDate;
