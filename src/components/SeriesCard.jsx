import React from "react";
// import "./Netflix.css";
import styles from "./Netflix.module.css";
import styled from "styled-components";

const SeriesCard = (props) => {
  // const data = props      {data.img_url}
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    props.data;

  // const BtnStyle =styled.button ({
  //   padding: "10px 15px" ,
  //   border: "none",
  //   // backgroundColor: "rgb(76, 76, 177)",
  //   backgroundColor: `${rating >= 8.5 ? "yellowgreen" : "rgb(238, 238, 70)"}`,
  //   color: "black",
  //   borderRadius : "4px" ,
  // })

  const btnStyle = {
    padding: "10px 15px" ,
     border: "none",
    // backgroundColor: "rgb(76, 76, 177)",
    backgroundColor: `${rating >= 8.5 ? "yellowgreen" : "rgb(238, 238, 70)"}`,
     color: "black",
     borderRadius : "4px" ,
  };
  return (
    <>
       <li key={id} className={styles.card}>    {/* className="card" */}
        <div>
          <img src={img_url} alt="" width="40%" height="40%" />
        </div>
        {/* <div className={styles["card-content"]}> */}
        <div className="flex flex-col gap-5 py-[3.2rem] px-[1.2rem]">
          <h3>Name : {name} </h3>
          <h5>
            Rating : <span className={rating >= 8.5 ? styles.superhit : styles.average}> {rating} </span>
          </h5>
          <p className="text-3xl ">Summary : {description}</p>
          <p className="text-2xl">Genrel : {genre}</p>
          <p className="text-2xl">Cast : {cast}</p>
          <a href={watch_url} target="_blank">
            <button style={btnStyle}>Watch Now</button>
            {/* <BtnStyle>Watch now</BtnStyle> */}
          </a>
        </div>
      </li>
    </>
  );
};

export default SeriesCard;
