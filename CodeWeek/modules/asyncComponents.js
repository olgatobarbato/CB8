import { httpGET } from "./http.js";
import {
  navbarGen,
  heroGen,
  typeWrapperGen,
  genreContainerElGen,
  movieListElGen,
  movieCardElGen,
} from "./components.js";
import { associateGenresWithMovies } from "./other.js";

const asyncNavGen = async (tvEndpoint, movieEndpoint) => {
  const tvData = await httpGET(tvEndpoint);
  const movieData = await httpGET(movieEndpoint);

  const tvShowsData = await httpGET("/tv/popular");
  const moviesData = await httpGET("/movie/popular");

  const tvGenresWithShows = associateGenresWithMovies(
    tvData.genres,
    tvShowsData.results
  );
  const movieGenresWithMovies = associateGenresWithMovies(
    movieData.genres,
    moviesData.results
  );

  const navEl = navbarGen(
    tvGenresWithShows,
    movieGenresWithMovies,
    tvShowsData.results,
    moviesData.results
  );
  document.body.append(navEl);
  return navEl;
};

const asyncHeroGen = async (endpoint) => {
  const data = await httpGET(endpoint);

  const randomIndex = Math.floor(Math.random() * data.results.length);
  const randomMovie = data.results[randomIndex];

  const heroEl = heroGen(randomMovie);
  document.body.append(heroEl);

  return heroEl;
};

const asyncMovieAndTvShowListsGen = async (
  genreEndpoint,
  mediaEndpoint,
  title
) => {
  const genresData = await httpGET(genreEndpoint);
  const moviesData = await httpGET(mediaEndpoint);

  const genres = genresData.genres;
  const movies = moviesData.results;

  const genresWithMovies = associateGenresWithMovies(
    genres.filter((genre) =>
      moviesData.results.some((movie) => movie.genre_ids.includes(genre.id))
    ),
    movies
  );

  const typeWrapper = typeWrapperGen(title);
  document.body.append(typeWrapper);

  const genreContainerEl = genreContainerElGen(genresWithMovies);
  typeWrapper.append(genreContainerEl);

  genresWithMovies.forEach((genre) => {
    const movieListEl = movieListElGen();
    const genreHeaderEl = genreContainerElGen(genre);
    genreContainerEl.appendChild(genreHeaderEl);

    genre.movies.forEach((media) => {
      const movieCardEl = movieCardElGen(media);
      movieListEl.appendChild(movieCardEl);

      movieCardEl.addEventListener("mouseenter", () => {
        movieCardEl.style.transform = "scale(1.1)";
      });

      movieCardEl.addEventListener("mouseleave", () => {
        movieCardEl.style.transform = "scale(1)";
      });
    });

    genreContainerEl.appendChild(movieListEl);
  });

  return typeWrapper;
};

export { asyncNavGen, asyncHeroGen, asyncMovieAndTvShowListsGen };
