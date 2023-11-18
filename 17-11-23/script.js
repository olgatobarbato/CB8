// Esercizio 1

const cE = (tag) => document.createElement(tag);
const sA = (elementName, attributeName, attributeValue) => {
  elementName.setAttribute(attributeName, attributeValue);
};
const tC = (elementName, content) => {
  elementName.textContent = content;
};

const popupMagg = (text) => {
  const wrapperEl = cE("div");
  const parEl = cE("p");
  const btnDivEl = cE("div");
  const btnSiEl = cE("button");
  const btnNoEl = cE("button");

  wrapperEl.className = "popup";
  parEl.className = "popup-text";
  btnDivEl.className = "buttons";
  btnNoEl.className = "button";
  btnSiEl.className = "button";
  tC(parEl, text);
  tC(btnSiEl, "Sì");
  tC(btnNoEl, "No");

  btnDivEl.append(btnSiEl, btnNoEl);
  wrapperEl.append(parEl, btnDivEl);

  btnSiEl.addEventListener("click", () => {
    document.body.classList.remove("popup-active");
    wrapperEl.remove();
  });
  btnNoEl.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });

  return wrapperEl;
};

setTimeout(() => {
  document.body.classList.add("popup-active");
  const popup = popupMagg("Sei maggiorenne?");
  document.body.append(popup);
}, 3500);

//Esercizio 2

const prodGen = (product) => {
  const { brand, category, description, price, images } = product;
  const cardEl = cE("div");
  const brandEl = cE("p");
  const categoryEl = cE("p");
  const descriptionEl = cE("p");
  const priceEl = cE("p");
  const imgEl = cE("img");

  cardEl.className = "card";

  tC(brandEl, brand);
  tC(categoryEl, category);
  tC(descriptionEl, description);
  tC(priceEl, price + " €");

  sA(imgEl, "alt", "product-image");
  imgEl.src = images[0];
  sA(imgEl, "width", "150");
  sA(imgEl, "height", "150");

  cardEl.append(brandEl, categoryEl, descriptionEl, priceEl, imgEl);
  return cardEl;
};

/* fetch("https://dummyjson.com/products")
  .then((res) => res.json())                        Controllo la presenza dei dati
  .then((data) => console.log(data));
 */
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const wrapperEl = cE("div");
    wrapperEl.className = "prod-container";

    const filteredProducts = data.products.filter((product) => {
      return product.price > 50;
    });

    const titleEl = cE("h1");
    tC(titleEl, "E-commerce");
    titleEl.className = "title";

    const contentEl = cE("div");
    contentEl.className = "content";

    console.log(filteredProducts);

    filteredProducts.forEach((filteredProduct) => {
      wrapperEl.append(prodGen(filteredProduct));
    });

    contentEl.append(titleEl, wrapperEl);

    document.body.append(contentEl);
  });
