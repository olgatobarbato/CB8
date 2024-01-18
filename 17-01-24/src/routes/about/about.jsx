import styles from "./index.module.scss";

import Navbar from "../../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <img
          src="https://i.pinimg.com/originals/82/ca/47/82ca47e16d1b19ee598a3e66e7d513de.jpg"
          alt="ecommerce image"
        />
        <div className={styles.text}>
          <h1>About Us</h1>
          <h2>We're here for you</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam
            cum quo eligendi ad. Dignissimos voluptatem autem ducimus eos odio
            voluptate a at animi voluptates minima error quod veritatis possimus
            consequuntur suscipit, itaque quisquam. Placeat accusantium
            cupiditate quidem fugiat quasi voluptatibus maxime nemo odit beatae
            veniam, recusandae labore sequi id quos, natus nulla sed rerum
            voluptates! Provident, atque, suscipit eveniet architecto tempora
            expedita molestias commodi inventore, ex in voluptas doloribus fuga
            non odio quod vel repellat nulla debitis at id laboriosam quia
            voluptatum. Velit tenetur ipsum, reprehenderit nulla in quasi
            laborum enim. Maiores vero voluptas labore voluptatibus obcaecati ex
            asperiores.
          </p>
        </div>
      </div>
    </>
  );
}
