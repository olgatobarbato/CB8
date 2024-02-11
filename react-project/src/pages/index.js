import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.Homepage}>
      <div className={styles.backgroundImg}>
        <Image
          src="https://preview.redd.it/ive-been-drawing-every-pok%C3%A9mon-in-order-and-now-that-ive-v0-80ay1eu132na1.jpg?width=1080&crop=smart&auto=webp&s=d0303f46b660d00a8996f669fb175b4d5ee7f764"
          alt="pokemons"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} href="/pokedex">
          Gotta catch 'em all
        </Link>
      </div>
    </div>
  );
}
