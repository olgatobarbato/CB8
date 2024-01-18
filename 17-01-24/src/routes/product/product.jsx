import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./index.module.scss";
import Navbar from "../../components/navbar";

export default function Product() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.Product}>
        <h1>{product.title}</h1>
        <h2>{product.brand}</h2>
        <img
          className={styles.thumbnail}
          src={product.thumbnail}
          alt={product.title}
        />
        <h3>Price: {product.price} $</h3>
        <h3>Discount: {product.discountPercentage} %</h3>
        <div className={styles.images}>
          {product.images &&
            product.images.map((image) => (
              <img src={image} alt={image} key={image} />
            ))}
        </div>
      </div>
    </>
  );
}
