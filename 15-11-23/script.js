const cE = (tag) => document.createElement(tag);
const sA = (elementName, attributeName, attributeValue) => {
  elementName.setAttribute(attributeName, attributeValue);
};
const tC = (elementName, content) => {
  elementName.textContent = content;
};

const mockData = [
  {
    id: 1,
    Name: "Giovanna",
    price: 300,
    imageUrl: "https://robohash.org/Giovanna",
  },
  {
    id: 2,
    Name: "Gilda",
    price: 400,
    imageUrl: "https://robohash.org/Gilda",
  },
  {
    id: 3,
    Name: "Genoveffa",
    price: 250,
    imageUrl: "https://robohash.org/Genoveffa",
  },
  {
    id: 4,
    Name: "Goliarda",
    price: 250,
    imageUrl: "https://robohash.org/Goliarda",
  },
];
const titleContEl = cE("div");
const findBestEl = cE("div");
const lenteEl = cE("div");
const cartEl = cE("div");
const navEl = cE("div");
const allEl = cE("div");
const chairEl = cE("div");
const tableEl = cE("div");
const sofaEl = cE("div");
const lampEl = cE("div");

const sectionEl = cE("section");
const titleEl = cE("h3");
const wrapperEl = cE("div");

titleContEl.className = "container";
findBestEl.className = "findBest";
lenteEl.className = "roboshop";
cartEl.className = "roboshop";
navEl.className = "barra";
allEl.className = "icona";
chairEl.className = "icona";
tableEl.className = "icona";
sofaEl.className = "icona";
lampEl.className = "icona";
sectionEl.className = "recommended";
wrapperEl.className = "robo-list";

tC(findBestEl, "Find Best Furnitures");
tC(lenteEl, "🔍");
tC(cartEl, "🛒");
tC(titleEl, "Recommended For You");

tC(allEl, "🔍 All");
tC(chairEl, "🪑 Chair");
tC(tableEl, "🚽 Table");
tC(sofaEl, "🛋️ Sofa");
tC(lampEl, "💡 Lamp");

const roboGen = (roboData) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const textEl = cE("div");
  const priceEl = cE("p");
  const nameEl = cE("h4");
  const piuEl = cE("div");
  const cuoreEl = cE("div");

  cardEl.className = "robo";
  imgEl.src = roboData.imageUrl;
  sA(imgEl, "alt", roboData.Name);
  textEl.className = "text";
  tC(priceEl, "€ " + roboData.price);
  tC(nameEl, roboData.Name);
  piuEl.className = "piu";
  cuoreEl.className = "cuore";
  tC(piuEl, "➕");
  tC(cuoreEl, "❤️");

  textEl.append(priceEl, nameEl);
  cardEl.append(imgEl, textEl, piuEl, cuoreEl);

  return cardEl;
};

mockData.map((robo) => wrapperEl.append(roboGen(robo)));

sectionEl.append(titleEl, wrapperEl);

navEl.append(allEl, chairEl, tableEl, sofaEl, lampEl);

titleContEl.append(findBestEl, lenteEl, cartEl);

document.body.append(titleContEl, navEl, sectionEl);

// TRY & CATCH

/* const roboGen = (roboData) => {
  try {
    const cardEl = cE("div");
    const imgEl = cE("img");
    const textEl = cE("div");
    const priceEl = cE("p");
    const nameEl = cE("h4");
    const piuEl = cE("div");
    const cuoreEl = cE("div");

    cardEl.className = "robo";
    imgEl.src = roboData.imageUrl;
    sA(imgEl, "alt", roboData.Name);
    textEl.className = "text";
    tC(priceEl, "€ " + roboData.price);
    tC(nameEl, roboData.Name);
    piuEl.className = "piu";
    cuoreEl.className = "cuore";
    tC(piuEl, "➕");
    tC(cuoreEl, "❤️");

    textEl.append(priceEl, nameEl);
    cardEl.append(imgEl, textEl, piuEl, cuoreEl);

    return cardEl;
  } catch (error) {
    console.error(
      "Si è verificato un errore durante la generazione della card:",
      error
    );

    return "La tua card non può essere creata";
  }
};
 */
