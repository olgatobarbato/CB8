import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src="./logoipsum-330.svg" alt="logo" />
      <div className="Navbar__text">
        <input id="search" type="search" placeholder="Search" />
        <ul className="Nav__list">
          <li>Home</li>
          <li>Galleria</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
