import CardList from "./components/cardList/CardList";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Galleria from "./components/galleria/Galleria";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];
  const galleriaList = [
    {
      id: 30,
      img: "https://picsum.photos/200/400?30",
    },
    {
      id: 31,
      img: "https://picsum.photos/200/400?31",
    },
    {
      id: 32,
      img: "https://picsum.photos/200/400?32",
    },
    {
      id: 33,
      img: "https://picsum.photos/200/400?33",
    },
    {
      id: 34,
      img: "https://picsum.photos/200/400?34",
    },
    {
      id: 35,
      img: "https://picsum.photos/200/400?35",
    },
    {
      id: 36,
      img: "https://picsum.photos/200/400?36",
    },
    {
      id: 37,
      img: "https://picsum.photos/200/400?37",
    },
    {
      id: 38,
      img: "https://picsum.photos/200/400?38",
    },
    {
      id: 39,
      img: "https://picsum.photos/200/400?39",
    },
    {
      id: 40,
      img: "https://picsum.photos/200/400?40",
    },
    {
      id: 41,
      img: "https://picsum.photos/200/400?41",
    },
    {
      id: 42,
      img: "https://picsum.photos/200/400?42",
    },
    {
      id: 43,
      img: "https://picsum.photos/200/400?43",
    },
    {
      id: 44,
      img: "https://picsum.photos/200/400?44",
    },
    {
      id: 45,
      img: "https://picsum.photos/200/400?45",
    },
    {
      id: 46,
      img: "https://picsum.photos/200/400?46",
    },
    {
      id: 47,
      img: "https://picsum.photos/200/400?47",
    },
    {
      id: 48,
      img: "https://picsum.photos/200/400?48",
    },
    {
      id: 49,
      img: "https://picsum.photos/200/400?49",
    },
    {
      id: 50,
      img: "https://picsum.photos/200/400?50",
    },
  ];

  return (
    <div className="App">
      {/* <button>Ciao</button> */}
      {/* <Button textContent="cliccami!" color="white" />
      <Button textContent="Accetta!" />
      <Button textContent="Annulla!" /> */}
      <Navbar />
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      {/* <CardList cardListObj={{ title: "Sci-Fi" }} />
      <CardList cardListObj={{ title: "Adventure" }} /> */}
      <Galleria galleriaListItem={{ list: galleriaList }} />
      <Footer />
    </div>
  );
}

export default App;
