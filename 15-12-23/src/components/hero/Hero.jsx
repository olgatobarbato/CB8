import Button from "../button/Button";
import "./index.css";

const Hero = ({ title, text }) => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>{title}</h1>
        <p>{text}</p>
        <Button textContent="Go!" />
      </div>
    </div>
  );
};

export default Hero;
