import "./index.css";

const GalleriaItem = ({ galleriaObj }) => {
  return (
    <div className="galleria__item">
      <img src={galleriaObj.img} alt="img" />
    </div>
  );
};

export default GalleriaItem;
