import React from "react";

const ListGroup = (props) => {
  return (
    <ul className="list-group">
      <li
        className={
          props.currentGenre === "All Genres"
            ? "list-group-item active"
            : "list-group-item"
        }
        style={{ cursor: "pointer" }}
        onClick={() => props.onGenreSelect(undefined)}
      >
        All Genres
      </li>
      {props.genres.map((genre) => {
        return (
          <li
            className={
              genre.name === props.currentGenre
                ? "list-group-item active"
                : "list-group-item"
            }
            key={genre._id}
            style={{ cursor: "pointer" }}
            onClick={() => props.onGenreSelect(genre.name)}
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
