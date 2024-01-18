import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import Navbar from "../../components/navbar";

export default function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState("smartphones");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.products.filter(
            (product) => product.category === selectedCategory
          )
        )
      );
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <div className={styles.Homepage}>
        <h1>Welcome to our shop!</h1>
        <h2>Which device are you looking for?</h2>
        <ul className={styles.buttons}>
          <li>
            <button onClick={() => setSelectedCategory("smartphones")}>
              Smartphones
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("laptops")}>
              Laptops
            </button>
          </li>
        </ul>
        {products.map((product) => (
          <Link
            className={styles.products}
            to={`/products/${product.id}`}
            key={product.id}
          >
            <h3>{product.title}</h3>
            <img
              className={styles.thumbnail}
              src={product.thumbnail}
              alt={product.title}
            />
          </Link>
        ))}
      </div>{" "}
    </>
  );
}
