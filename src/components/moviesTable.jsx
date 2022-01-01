import React from "react";
import { Link, Outlet } from "react-router-dom";
import Like from "./common/like";
const a = [
  { header: "Title", name: "title" },
  { header: "Genre", name: "genre" },
  { header: "Stock", name: "numberInStock" },
  { header: "Rate", name: "dailyRentalRate" },
];
const MoviesTable = ({ movies, onDelete, onSort, sortColumn }) => {
  const headerSymbol = (el) => {
    if (sortColumn.clicked) {
      if (sortColumn.path === el.name && !sortColumn.order) {
        return <i className="fa fa-sort-desc"></i>;
      }
      if (sortColumn.path === el.name && sortColumn.order) {
        return <i className="fa fa-sort-asc"></i>;
      }
    }
    return null;
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {a.map((el) => {
            return (
              <th
                scope="col"
                style={{ cursor: "pointer" }}
                onClick={() => onSort(el.name)}
                key={el.header}
              >
                {el.header}
                {headerSymbol(el)}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => {
          return (
            <tr key={movie._id}>
              <td>
                <Link to={`/movies/${movie._id}`} id={movie._id}>
                  {movie.title}
                </Link>
                <Outlet />
              </td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like />
              </td>
              <td>
                <button
                  id={movie._id}
                  className="btn btn-danger"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTable;
