import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div
      className="card"
      onClick={(e) => {
        props.onClick(e, props);
      }}
    >
      <div className="shader"></div>
      <img src={props.img} className="genre-img" />
      <header className="genre-header">{props.genre}</header>
    </div>
  );
}

export default Card;
