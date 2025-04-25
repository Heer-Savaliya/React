import React from "react";
import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";

const NetfixSeries = () => {
  // const name ="Wednesday"
  // const rate= 8.2
  // const summary = "Jenna Ortega’s Wednesday Addams isn’t exactly one for home decor beyond a black dahlia, a typewriter and her trusty cello. But that doesn’t mean you have to follow in her chunky-booted footsteps. Tudum is giving away five autographed Wednesday Season 1 posters — so here’s your chance to make your space all together ooky."
  // const age = 18
  // // let canWatch ="Not avaliable"
  // // if(age >= 18) canWatch="Watch now"
  // const returnGenrel =()=>{
  //   const genrel = "Horor"
  //   return genrel
  // }
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => {
        return <SeriesCard key={curElem.id} data={curElem} />;
      }
      )}
    </ul>
  );
};

{
  /* Normally  */
}
{
  /* <div>
      <div>
        <img src="p2.jpg" alt="" width="20%" height="20%" />
      </div>
      <h2>Name : {name} </h2>
      <h3>Rating : {3+3.2}</h3>
      <h4>Summary : {summary}</h4>
      <p>Genrel : {returnGenrel()}</p>
      <button>{ age >= 18 ? "Watch Now" : "Not avaliable"}</button>
      {/* <button>{canWatch}</button>   for complex if conditon }
    </div> */
}
export default NetfixSeries;
