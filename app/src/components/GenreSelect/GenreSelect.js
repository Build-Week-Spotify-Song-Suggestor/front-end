import React, { useState } from "react";
import Card from "../Card/Card";

// Data
import genreData from "../../mockData/genre";

// Redux
import { connect } from "react-redux";
import { addGenres, loadUserDash } from "../../actions";

function GenreSelect(props) {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const removeElementFromState = (info) => {
    let arr = [];
    arr = [...selectedGenres.filter((element) => element.id !== info.id)];
    setSelectedGenres(arr);
  };

  const handleClick = (e, info) => {
    let arr = [];

    if (selectedGenres.length < 3) {
      if (selectedGenres.some((element) => element.id === info.id)) {
        removeElementFromState(info);
      } else {
        setSelectedGenres([...selectedGenres, info]);
      }
    } else {
      removeElementFromState(info);
    }
  };

  const handleSubmit = () => {
    // Send to reducer:
    props.addGenres(selectedGenres);
    props.loadUserDash();
  };

  return (
    <>
      <header>
        <h1>Select up to three genres</h1>
        You've selected:{" "}
        {selectedGenres.map((element) => element.genre).join(", ")}
        {selectedGenres.length === 3 ? (
          <div>
            {" "}
            You've selected 3, deselect your choices first if you'd like to
            change them
          </div>
        ) : null}
      </header>
      <section className="suggestions">
        {genreData.map((item) => (
          <Card
            genre={item.genre}
            img={item.image}
            id={item.id}
            key={item.id}
            onClick={handleClick}
          />
        ))}
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addGenres, loadUserDash })(
  GenreSelect
);
