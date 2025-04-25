import React from "react";
import './EV.css'

const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent Clicked");
  };
  const handleParentClick = () => {
    console.log("Parent Clicked");
  };
  const handleChildClick  = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child Clicked");
  };

  return (
    <>
      <section className="main-div">
        {/* <div className="g-div" onClick={handleGrandParent}> */}
        <div className="g-div" onClickCapture={handleGrandParent}>
          <div className="p-div" onClickCapture={handleParentClick}>
            <button className="c-div" onClickCapture={handleChildClick}>
              Child div
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventPropagation;
