import "./index.css";
import { useState, useEffect } from "react";

const Post = ({ postData }) => {
  const { userId, title, body, tags } = postData;
  const [userData, setUserData] = useState({});
  const [reactions, setReactions] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const handleLikeClick = () => {
    setReactions((prevReactions) => prevReactions + 1);
  };

  return (
    <div className="Post">
      <div className="Post__user">
        <div className="Post__user--img">
          <img alt="user photo" src={userData.image} />
        </div>
        <h2>{`${userData.firstName} ${userData.lastName}`}</h2>
      </div>
      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/50px-Facebook_Thumb_icon.svg.png"
              alt="like"
            />
          </span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="Post__buttons">
        <button onClick={handleLikeClick}>Like</button>
        <button>Commenta</button>
        <button>Condividi</button>
      </div>
    </div>
  );
};

export default Post;
