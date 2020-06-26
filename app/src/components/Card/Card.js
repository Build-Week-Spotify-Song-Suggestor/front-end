import React from "react";
import "./Card.css";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="shader"></div>
      <img src={props.img} className="genre-img" />
      <header className="genre-header">{props.title}</header>
    </div>
  );
}

export default Card;
