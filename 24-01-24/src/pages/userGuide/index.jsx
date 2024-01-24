import styles from "../../styles/UserGuide.module.scss";
import Link from "next/link";

export default function UserGuide() {
  return (
    <div className={styles.UserGuide}>
      <h1>Pokedex User Guide</h1>
      <h2>Introduction to the Pokedex</h2>
      <p>
        Welcome to the Pokedex, your ultimate companion in the world of Pokémon!
        The Pokedex is a comprehensive tool designed to help you identify, learn
        about, and explore the vast array of Pokémon species. Whether you're a
        seasoned Trainer or just starting your journey, this guide will walk you
        through the various features and functionalities of the Pokedex.
      </p>
      <h2>Accessing the Pokedex:</h2>
      <p>To access the Pokedex, follow these simple steps: </p>
      <ul>
        <li>Open your Pokémon app</li>
        <li>
          Navigate to the <Link href="/pokedex">Pokedex</Link> section
        </li>
      </ul>
      <p>Now you're ready to dive into the world of Pokémon information!</p>
      <h2>Searching for Pokémon</h2>
      <h3>By Name:</h3>
      <ul>
        <li>Enter the name of the Pokémon in the search bar.</li>
        <li>
          The Pokedex will display detailed information about the specified
          Pokémon.
        </li>
      </ul>
      <h3>By Pokedex Number:</h3>
      <ul>
        <li>Search for Pokémon using their unique Pokedex number.</li>
        <li>Access a quick overview and stats for the desired Pokémon.</li>
      </ul>
    </div>
  );
}
