const associateGenresWithMovies = (genres, movies) => {
  return genres.map((genre) => ({
    id: genre.id,
    name: genre.name,
    movies: movies.filter((movie) => movie.genre_ids.includes(genre.id)),
  }));
};

export { associateGenresWithMovies };
