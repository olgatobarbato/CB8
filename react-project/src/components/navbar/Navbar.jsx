import styles from "@/components/navbar/index.module.scss";
import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu";
import { useState, useEffect } from "react";
import Link from "next/link";

import { FaBookOpen } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaShieldCat } from "react-icons/fa6";

const Navbar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowBurgerMenu(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.Navbar}>
      <Image
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="logo"
        width={200}
        height={45}
      />

      {showBurgerMenu ? (
        <HamburgerMenu />
      ) : (
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            <FaHome />
            Home
          </Link>
          <Link className={styles.link} href="/pokedex">
            <IoGameController />
            Pokedex
          </Link>
          <Link className={styles.link} href="/myPokemons">
            <FaShieldCat />
            My Pokemons
          </Link>
          <Link className={styles.link} href="/userGuide">
            <FaBookOpen />
            User Guide
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
