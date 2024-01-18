import { Link } from "react-router-dom";

import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img
        className={styles.logo}
        src="https://img.logoipsum.com/294.svg"
        alt="logo"
      />{" "}
      <ul className={styles.list}>
        <li>
          <Link className={styles.Link} to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.Link} to={"/about"}>
            About us
          </Link>
        </li>
        <li>
          <Link className={styles.Link} to={"/contacts"}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
