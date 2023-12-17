import CardList from "./components/cardList/CardList";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Galleria from "./components/galleria/Galleria";
import Hero from "./components/hero";

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
      img: "https://picsum.photos/600/400?30",
    },
    {
      id: 31,
      img: "https://picsum.photos/600/400?31",
    },
    {
      id: 32,
      img: "https://picsum.photos/600/400?32",
    },
  ];
  const Lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse asperiores quisquam itaque hic repudiandae minima commodi quod ducimus vero excepturi!";

  return (
    <div className="App">
      <Navbar />
      <Hero title={"LOREM IPSUM"} text={Lorem} />
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      <Galleria galleriaListItem={{ list: galleriaList }} />
      <Footer />
    </div>
  );
}

export default App;
