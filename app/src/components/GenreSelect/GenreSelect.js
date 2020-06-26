import React from "react";
import Card from "../Card/Card";

// Data
import genreData from "../../mockData/genre";

function GenreSelect() {
  return (
    <section className="suggestions">
      {genreData.map((item) => (
        <Card title={item.genre} img={item.image} id={item.id} key={item.id} />
      ))}
    </section>
  );
}

export default GenreSelect;
