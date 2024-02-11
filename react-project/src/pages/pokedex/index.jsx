import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "@/styles/Pokedex.module.scss";

export default function Pokedex() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await router.push(`/pokedex/${input}`);

    setLoading(false);
  };

  const onHandleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <Image
            src="https://64.media.tumblr.com/93345311779201f1a31868b3fd999065/tumblr_ny96gguwnC1rzsfkvo1_250.gifv" // Sostituisci con il percorso corretto della tua GIF di caricamento
            alt="loading"
            width={120}
            height={120}
          />
        </div>
      )}

      {!loading && (
        <div className={styles.Pokedex}>
          <form className={styles.form} onSubmit={onHandleSubmit}>
            <input
              className={styles.searchbar}
              type="text"
              value={input}
              onChange={onHandleChange}
              placeholder="Search your Pokemon"
            />
            <input className={styles.button} type="submit" value="Search" />
          </form>
          <Image
            src="https://31.media.tumblr.com/11ba7df56075ffa8f27649ed437fc2d1/tumblr_mt10t8YbwE1svfmkro1_500.gif" // Sostituisci con il percorso corretto della tua GIF della Pokedex
            alt="pokedex"
            width={300}
            height={200}
          />
        </div>
      )}
    </>
  );
}
