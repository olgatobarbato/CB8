import { useState } from "react";
import "./index.css";

const Card = ({ day }) => {
  const [imageId, setImageId] = useState(null);

  const handleImageClick = () => {
    if (imageId !== null) {
      setImageId(null);
    } else {
      const randomImageId = Math.floor(Math.random() * 100) + 1;
      setImageId(randomImageId);
    }
  };

  return (
    <div className="Card" onClick={handleImageClick}>
      {imageId ? (
        <img
          src={`https://picsum.photos/id/${imageId}/200/200`}
          alt={`Day ${day}`}
        />
      ) : (
        <p>🎁 {day}</p>
      )}
    </div>
  );
};

export default Card;
