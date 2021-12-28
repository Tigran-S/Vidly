import React from "react";
import { getMovies } from "./services/fakeMovieService";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";
import { genres } from "./services/fakeGenreService";
import MoviesTable from "./components/moviesTable";
import { sorting } from "./utils/sorting";
import { useState } from "react/cjs/react.development";
import ListGroup from "./components/common/listGroup";
import { Link } from "react-router-dom";

// class Movies extends React.Component {
//   state = {
//     movies: getMovies(),
//     genres: genres,
//     pageSize: 4,
//     currentPage: 1,
//     sortColumn: { path: "title", order: false, clicked: false },
//     currentGenre: "All Genres",
//   };
//   handleDelete = (movie) => {
//     const movies = this.state.movies.filter((el) => !(el._id === movie._id));

//     this.setState({
//       movies,
//     });
//   };
//   handlePageChange = (pageNumber) => {
//     this.setState({ currentPage: pageNumber });
//   };
//   handleGenreSelect = (genre) => {
//     if (genre === undefined) {
//       console.log(genre);
//       this.setState({ movies: getMovies(), currentGenre: "All Genres" });
//     } else {
//       let movies = [...getMovies()];
//       movies = movies.filter((movie) => {
//         return movie.genre.name === genre;
//       });
//       this.setState({ movies, currentGenre: genre, currentPage: 1 });
//     }
//   };
//   handleSort = (header) => {
//     const [movies, sortColumn] = sorting(
//       header,
//       this.state.movies,
//       this.state.sortColumn
//     );
//     this.setState({ movies, sortColumn });
//   };
//   render() {
//     const {
//       movies: allMovies,
//       pageSize,
//       currentPage,
//       currentGenre,
//     } = this.state;

//     if (allMovies.length === 0)
//       return <p>There are no movies in the database</p>;
//     const movies = paginate(allMovies, currentPage, pageSize);
//     return (
//       <div className="row">
//         <div className="col-2">
//           <ListGroup
//             onGenreSelect={this.handleGenreSelect}
//             currentGenre={currentGenre}
//             genres={this.state.genres}
//           />
//         </div>
//         <div className="col">
//           <p>Showing {allMovies.length} mvoies in the database</p>
//           <MoviesTable
//             movies={movies}
//             onDelete={this.handleDelete}
//             onSort={this.handleSort}
//             sortColumn={this.state.sortColumn}
//           />
//           <Pagination
//             itemsCount={this.state.movies.length}
//             pageSize={pageSize}
//             onPageChange={this.handlePageChange}
//             currentPage={currentPage}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const [genre] = useState(genres);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({
    path: "title",
    order: false,
    clicked: false,
  });
  const [currentGenre, setCurrentGenre] = useState("All Genres");
  const pageSize = 4;

  const handleDelete = (movie) => {
    const movies1 = movies.filter((el) => !(el._id === movie._id));
    setMovies(movies1);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleGenreSelect = (genre) => {
    if (genre === undefined) {
      setMovies(getMovies());
      setCurrentGenre("All Genres");
    } else {
      let movies = [...getMovies()].filter((movie) => {
        return movie.genre.name === genre;
      });
      setMovies(movies);
      setCurrentGenre(genre);
      setCurrentPage(1);
    }
  };
  const handleSort = (header) => {
    const [movie, sortNewColumn] = sorting(header, movies, sortColumn);
    setMovies(movie);
    setSortColumn(sortNewColumn);
  };
  let a = "";
  const handleChange = (e) => {
    let b = getMovies().filter((el) =>
      el.title.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );
    setMovies(b);
    setCurrentPage(1);
    a = e.target.value;
  };

  if (movies.length === 0 && a) {
    return <p>There are no movies in the database</p>;
  }
  return (
    <div className="row">
      <div className="col-2">
        <ListGroup
          onGenreSelect={handleGenreSelect}
          currentGenre={currentGenre}
          genres={genre}
        />
      </div>
      <div className="col">
        <Link
          to="/movies/new"
          className="btn btn-primary"
          style={{ marginbottom: 20 }}
        >
          New Movie
        </Link>
        <p>Showing {movies.length} movies in the database</p>
        <input
          type="text"
          className="form-control my-3"
          style={{ width: 500 }}
          placeholder="Search..."
          onChange={handleChange}
        ></input>
        <MoviesTable
          movies={paginate(movies, currentPage, pageSize)}
          onDelete={handleDelete}
          onSort={handleSort}
          sortColumn={sortColumn}
        />
        <Pagination
          itemsCount={movies.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Movies;
