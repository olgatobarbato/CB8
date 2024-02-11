import { stack as Menu } from "react-burger-menu";
import Link from "next/link";

import { FaBookOpen } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaShieldCat } from "react-icons/fa6";

const HamburgerMenu = () => {
  return (
    <Menu
      customBurgerIcon={
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/30px-Pok%C3%A9_Ball_icon.svg.png" />
      }
      right
    >
      <Link href="/">
        <FaHome /> Home
      </Link>
      <Link href="/pokedex">
        <IoGameController /> Pokedex
      </Link>
      <Link href="/myPokemons">
        <FaShieldCat /> My Pokemons
      </Link>
      <Link href="/userGuide">
        <FaBookOpen /> User Guide
      </Link>

      <div className="bm-burger-button">
        <div className="bm-burger-bars"></div>
      </div>
    </Menu>
  );
};

export default HamburgerMenu;
