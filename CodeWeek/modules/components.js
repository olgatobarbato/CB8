const navbarGen = (tvGenres, movieGenres, tvShows, movies) => {
  const navWrapperEl = document.createElement("div");
  const searchContainerEl = document.createElement("div");
  const logoEl = document.createElement("img");
  const inputEl = document.createElement("input");

  const linksDivEl = document.createElement("div");
  const linksListEl = document.createElement("ul");
  const firstListItemEl = document.createElement("li");
  const secondListItemEl = document.createElement("li");
  const tvGenresLabelEl = document.createElement("label");
  const movieGenresLabelEl = document.createElement("label");
  const tvGenresSelectEl = document.createElement("select");
  const movieGenresSelectEl = document.createElement("select");

  navWrapperEl.className = "nav-wrapper";
  searchContainerEl.className = "search";

  logoEl.src = "https://www.svgrepo.com/show/285842/movie.svg";
  logoEl.alt = "Star Movies Logo";
  logoEl.className = "logo-img";

  inputEl.type = "text";
  inputEl.placeholder = "Search";

  linksDivEl.className = "links";
  linksListEl.className = "links-list";

  firstListItemEl.id = "tv-shows-links";
  secondListItemEl.id = "movies-links";

  firstListItemEl.textContent = "TV Shows";
  secondListItemEl.textContent = "Movies";

  tvGenresLabelEl.htmlFor = "tv";
  movieGenresLabelEl.htmlFor = "movie";

  tvGenresSelectEl.name = "tv";
  tvGenresSelectEl.id = "tv";

  movieGenresSelectEl.name = "movie";
  movieGenresSelectEl.id = "movie";

  const placeholderOptionEl = document.createElement("option");
  placeholderOptionEl.value = "";
  placeholderOptionEl.textContent = "Select Genre";

  tvGenresSelectEl.append(placeholderOptionEl.cloneNode(true));
  movieGenresSelectEl.append(placeholderOptionEl.cloneNode(true));

  const filteredTvGenres = tvGenres.filter((genre) =>
    tvShows.some((tvShow) => tvShow.genre_ids.includes(genre.id))
  );

  const filteredMovieGenres = movieGenres.filter((genre) =>
    movies.some((movie) => movie.genre_ids.includes(genre.id))
  );

  filteredTvGenres.forEach((genre) => {
    const optionEl = document.createElement("option");
    optionEl.value = genre.name;
    optionEl.textContent = genre.name;
    tvGenresSelectEl.append(optionEl);
  });

  filteredMovieGenres.forEach((genre) => {
    const optionEl = document.createElement("option");
    optionEl.value = genre.name;
    optionEl.textContent = genre.name;
    movieGenresSelectEl.append(optionEl);
  });

  searchContainerEl.append(logoEl, inputEl);

  linksListEl.append(
    firstListItemEl,
    tvGenresLabelEl,
    tvGenresSelectEl,
    secondListItemEl,
    movieGenresLabelEl,
    movieGenresSelectEl
  );
  linksDivEl.append(linksListEl);

  navWrapperEl.append(searchContainerEl, linksDivEl);

  return navWrapperEl;
};

const heroGen = (movie) => {
  const heroWrapperEl = document.createElement("div");
  const overlayEl = document.createElement("div");
  const heroTitleEl = document.createElement("h1");
  const heroBtnTitleWrapperEl = document.createElement("div");
  const heroBtnWrapperEl = document.createElement("div");
  const heroBtnUnoEl = document.createElement("button");
  const heroBtnDueEl = document.createElement("button");

  heroWrapperEl.className = "hero-wrapper";
  overlayEl.className = "overlay";
  heroBtnTitleWrapperEl.className = "hero-btn-title-wrapper";
  heroBtnWrapperEl.className = "hero-btn-wrapper";
  heroWrapperEl.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`;
  heroWrapperEl.style.backgroundSize = "cover";

  heroTitleEl.textContent = movie.title;
  heroBtnUnoEl.textContent = "Info";
  heroBtnDueEl.textContent = "Watch trailer";

  heroBtnWrapperEl.append(heroBtnUnoEl, heroBtnDueEl);
  heroBtnTitleWrapperEl.append(heroTitleEl, heroBtnWrapperEl);
  heroWrapperEl.append(overlayEl, heroBtnTitleWrapperEl);

  return heroWrapperEl;
};

const typeWrapperGen = (title) => {
  const typeWrapperEl = document.createElement("div");
  const typeTitleEl = document.createElement("h2");

  typeTitleEl.textContent = title;
  typeWrapperEl.className = "type-wrapper";
  typeTitleEl.className = "media-type";

  typeWrapperEl.append(typeTitleEl);

  return typeWrapperEl;
};

const genreContainerElGen = (genre) => {
  const containerEl = document.createElement("div");
  const titleEl = document.createElement("h3");

  containerEl.className = "lists-container";
  titleEl.textContent = genre.name;

  containerEl.append(titleEl);
  return containerEl;
};

const movieListElGen = () => {
  const container = document.createElement("div");

  container.className = "movie-list";

  return container;
};

const movieCardElGen = (movie) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.id = movie.id;
  imageEl.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  imageEl.alt = movie.name;

  return imageEl;
};

const movieModalElGen = (media) => {
  const wrapperEl = document.createElement("div");
  const imageEl = document.createElement("img");
  const infoEl = document.createElement("div");

  const infoHeaderEl = document.createElement("div");
  const infoTitleRatingEl = document.createElement("div");
  const infoHeaderTitleEl = document.createElement("h1");
  const ratingContainerEl = document.createElement("div");
  const starRatingEl = document.createElement("div");
  const infoHeaderLangEl = document.createElement("h4");
  const infoHeaderAirDate = document.createElement("h4");

  const infoMainEl = document.createElement("div");
  const infoMainDescEl = document.createElement("p");

  const backHomeBtnEl = document.createElement("button");

  wrapperEl.className = "movie-modal";
  imageEl.src = "https://image.tmdb.org/t/p/w500" + media.poster_path;
  imageEl.alt = media.name || media.title;
  imageEl.className = "movie-modal-img";
  infoEl.className = "movie-modal-info";

  infoHeaderEl.className = "movie-modal-header";
  infoTitleRatingEl.className = "title-rating-container";
  infoHeaderTitleEl.textContent =
    media.name || media.title || media.original_title;
  const formattedLang = media.original_language
    ? new Intl.DisplayNames(["en"], { type: "language" }).of(
        media.original_language
      )
    : "";
  infoHeaderLangEl.textContent = formattedLang
    ? "ORIGINAL LANGUAGE: " + formattedLang
    : "";
  const formattedAirDate = media.first_air_date
    ? new Date(media.first_air_date).toLocaleDateString("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
  infoHeaderAirDate.textContent = formattedAirDate
    ? "FIRST AIR DATE: " + formattedAirDate
    : "";

  starRatingEl.className = "Stars";
  starRatingEl.style.setProperty(
    "--rating",
    (media.vote_average / 2).toFixed(1)
  );

  infoMainEl.className = "movie-modal-main";
  infoMainDescEl.textContent = media.overview;
  backHomeBtnEl.textContent = "Home";
  backHomeBtnEl.className = "modal-home-btn";

  ratingContainerEl.appendChild(starRatingEl);

  infoTitleRatingEl.append(infoHeaderTitleEl, ratingContainerEl);

  infoHeaderEl.append(
    infoTitleRatingEl,
    ratingContainerEl,
    infoHeaderLangEl,
    infoHeaderAirDate
  );

  infoMainEl.append(infoMainDescEl);
  infoEl.append(infoHeaderEl, infoMainEl, backHomeBtnEl);
  wrapperEl.append(imageEl, infoEl);

  return wrapperEl;
};

const footerElGen = () => {
  const footerEl = document.createElement("footer");
  const footertextEl = document.createElement("p");

  footerEl.className = "footer";
  footertextEl.textContent = "© Star Movies, 2023 - All rights reserved";

  footerEl.append(footertextEl);

  return footerEl;
};

export {
  navbarGen,
  heroGen,
  typeWrapperGen,
  genreContainerElGen,
  movieListElGen,
  movieCardElGen,
  movieModalElGen,
  footerElGen,
};
