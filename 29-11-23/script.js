import { httpGET } from "./modules/http.js";

// 1. Navbar

/* const searchSectionGen = (imageUrl, imageAlt) => {
  const searchContainerEl = document.createElement("div");
  const logoEl = document.createElement("img");
  const inputEl = document.createElement("input");

  searchContainerEl.className = "search";

  logoEl.src = imageUrl;
  logoEl.alt = imageAlt;

  inputEl.type = "text";
  inputEl.placeholder = "Search";

  searchContainerEl.append(logoEl, inputEl);

  return searchContainerEl;
};

const linkSectionGen = () => {
  const linksDivEl = document.createElement("div");
  const linksListEl = document.createElement("ul");
  const firstListItemEl = document.createElement("li");
  const secondListItemEl = document.createElement("li");
  const categoriesLabelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionEl = document.createElement("option");

  linksDivEl.className = "links";
  linksListEl.className = "links-list";

  firstListItemEl.textContent = "TV Shows";
  secondListItemEl.textContent = "Movies";

  categoriesLabelEl.for = "categories";
  categoriesLabelEl.textContent = "Categories";

  selectEl.name = "categories";
  selectEl.id = "categories";

  optionEl.value = "";

  selectEl.append(optionEl);
  linksListEl.append(
    firstListItemEl,
    secondListItemEl,
    categoriesLabelEl,
    selectEl
  );
  linksDivEl.append(linksListEl);

  return linksDivEl;
}; */

/* const navEl = document.querySelector(".navbar");
navEl.append(
  searchSectionGen(
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
    "etflix-clone-logo"
  ),
  linkSectionGen()
); */

// 2. Modale

const modalGen = (movies) => {
  const wrapperEl = document.createElement("div");
  const closeBtnDivEl = document.createElement("div");
  const closeBtnEl = document.createElement("button");
  const discoverEl = document.createElement("h2");
  const imgEl = document.createElement("img");
  const textDivEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const textEl = document.createElement("p");
  const buttonsDivEl = document.createElement("div");
  const movieBtnEl = document.createElement("button");
  const trailerBtnEl = document.createElement("button");

  wrapperEl.className = "modal-wrapper";
  textDivEl.className = "modal-text-container";
  buttonsDivEl.className = "buttons-div";
  closeBtnDivEl.className = "close-button";

  imgEl.src = `https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`;

  titleEl.textContent = movies.original_title;
  discoverEl.textContent = "Too lazy to choose? A random movie for you!";

  textEl.textContent = movies.overview;

  movieBtnEl.textContent = "Watch now";
  trailerBtnEl.textContent = "Watch trailer";
  closeBtnEl.textContent = "X";

  textDivEl.append(titleEl, textEl);
  closeBtnDivEl.append(closeBtnEl);
  buttonsDivEl.append(movieBtnEl, trailerBtnEl);
  wrapperEl.append(closeBtnDivEl, discoverEl, imgEl, textDivEl, buttonsDivEl);

  return wrapperEl;
};

const asyncModalGen = async (endpoint) => {
  const data = await httpGET(endpoint);

  const randomIndex = Math.floor(Math.random() * data.results.length);
  const randomMovie = data.results[randomIndex];

  const modalEl = modalGen(randomMovie);
  document.body.append(modalEl);

  return modalEl;
};

asyncModalGen("/discover/movie");
