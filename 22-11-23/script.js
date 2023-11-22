// Esercizio 1

const ImageListGET = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data;
};

ImageListGET().then((data) => {
  data.forEach((image) => {
    console.log(image.download_url);
  });
});

// Esercizio 2

const bodyEl = document.body;
const cE = (tag) => document.createElement(tag);
const tC = (nameEl, content) => (nameEl.textContent = content);

const RenderImageAndText = (data) => {
  const wrapperEl = cE("div");
  const imgEl = cE("img");
  const textEl = cE("p");

  wrapperEl.className = "wrapper";

  imgEl.src = data.download_url;
  imgEl.alt = "image";
  imgEl.className = "img";
  imgEl.setAttribute("width", "500");
  imgEl.setAttribute("height", "333");

  textEl.className = "text";
  tC(textEl, `Photo by ${data.author}`);

  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};

const imageData = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/500/500",
};

/* bodyEl.append(RenderImageAndText(imageData)); */

// Esercizio Avanzato

ImageListGET().then((data) => {
  data.forEach((image) => {
    bodyEl.append(RenderImageAndText(image));
  });
});
