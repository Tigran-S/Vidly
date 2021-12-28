export function sorting(header, stateMovies, stateSortColumn) {
  let movies = [];
  let sortColumn = {};
  let ascSorting = () => {
    if (header === "genre") {
      movies = stateMovies.sort((a, b) =>
        a[header].name > b[header].name ? 1 : -1
      );
    } else {
      movies = stateMovies.sort((a, b) => (a[header] > b[header] ? 1 : -1));
    }
    sortColumn.path = header;
    sortColumn.order = !stateSortColumn.order;
    sortColumn.clicked = true;
    return movies;
  };
  movies = ascSorting();
  if (sortColumn.path === stateSortColumn.path && sortColumn.order === false) {
    movies = stateMovies.reverse();
  }
  return [movies, sortColumn];
}
