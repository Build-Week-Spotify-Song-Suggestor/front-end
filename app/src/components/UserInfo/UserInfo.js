import React from "react";

function UserInfo(props) {
  return (
    <section className="user-info">
      <h2>{props.user.email}</h2>
      <div className="genre-container">
        {props.genres.map((genre) => {
          return (
            <div className="genre-tab" key={genre.id}>
              {genre.genre}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default UserInfo;
