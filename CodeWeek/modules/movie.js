import { movieModalElGen } from "./components.js";
import { httpGET } from "./http.js";

const urlParams = new URLSearchParams(window.location.search);
const mediaId = urlParams.get("id");
const mediaType = urlParams.get("type");

const asyncMovieModalElGen = async (mediaId, mediaType) => {
  const data = await httpGET(`/${mediaType}/${mediaId}`);
  const movieModalEl = movieModalElGen(data);

  const homeBtnEL = movieModalEl.querySelector("button");

  document.body.append(movieModalEl);

  homeBtnEL.addEventListener("click", () => {
    window.close();
  });
};

asyncMovieModalElGen(mediaId, mediaType);
