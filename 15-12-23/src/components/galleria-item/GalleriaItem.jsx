import "./index.css";

const GalleriaItem = ({ galleriaObj }) => {
  return (
    <div className="galleria__item">
      <img src={galleriaObj.img} alt={`Immagine ${galleriaObj.id}`} />
    </div>
  );
};

export default GalleriaItem;
