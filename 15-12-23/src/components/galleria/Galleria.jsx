import { useState } from "react";
import "./index.css";
import GalleriaItem from "../galleria-item/GalleriaItem";

const Galleria = ({ galleriaListItem }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const onBtnLeft = () => {
    const newIndex =
      imageIndex - 1 < 0 ? galleriaListItem.list.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  };

  const onBtnRight = () => {
    const newIndex =
      imageIndex + 1 >= galleriaListItem.list.length ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  };

  const currentImage = galleriaListItem.list[imageIndex];

  return (
    <div className="Galleria">
      <h2>Galleria</h2>
      <div className="Galleria__items">
        <button className="Galleria__button__left" onClick={onBtnLeft}>
          &lt;
        </button>
        <GalleriaItem
          galleriaObj={currentImage}
          key={currentImage.id}
          alt={`Immagine ${currentImage.id}`}
        />
        <button className="Galleria__button__right" onClick={onBtnRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Galleria;
