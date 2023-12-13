import "./index.css";
import GalleriaItem from "../galleria-item/GalleriaItem";

const Galleria = ({ galleriaListItem }) => {
  return (
    <div className="Galleria">
      <h2>Galleria</h2>
      <div className="Galleria__items">
        {galleriaListItem.list.map((image) => (
          <GalleriaItem
            galleriaObj={image}
            key={image.id}
            alt={`Immagine ${image.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Galleria;
