import React from "react";

const ListGroup = ({ currentGenre, onGenreSelect, genres }) => {
  return (
    <ul className="list-group">
      <li
        className={
          currentGenre === "All Genres"
            ? "list-group-item active"
            : "list-group-item"
        }
        style={{ cursor: "pointer" }}
        onClick={() => onGenreSelect(undefined)}
      >
        All Genres
      </li>
      {genres.map((genre) => {
        return (
          <li
            className={
              genre.name === currentGenre
                ? "list-group-item active"
                : "list-group-item"
            }
            key={genre._id}
            style={{ cursor: "pointer" }}
            onClick={() => onGenreSelect(genre.name)}
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
