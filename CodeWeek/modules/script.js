import {
  asyncNavGen,
  asyncHeroGen,
  asyncMovieAndTvShowListsGen,
} from "./asyncComponents.js";

import { footerElGen } from "./components.js";

const asyncAll = async () => {
  const [navElement, heroElement, tvShowsElement, moviesElement] =
    await Promise.all([
      asyncNavGen("/genre/tv/list", "/genre/movie/list"),
      asyncHeroGen("/movie/popular"),
      asyncMovieAndTvShowListsGen("/genre/tv/list", "/tv/popular", "Tv Shows"),
      asyncMovieAndTvShowListsGen(
        "/genre/movie/list",
        "/movie/popular",
        "Movies"
      ),
    ]);

  document.body.append(navElement);
  document.body.append(heroElement);

  document.body.append(tvShowsElement);
  tvShowsElement.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {
      const mediaId = event.target.id;
      window.open(`movie.html?id=${mediaId}&type=tv`, "_blank");
    }
  });

  document.body.append(moviesElement);
  moviesElement.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {
      const mediaId = event.target.id;
      window.open(`movie.html?id=${mediaId}&type=movie`, "_blank");
    }
  });

  document.body.append(footerElGen());
};

asyncAll();
