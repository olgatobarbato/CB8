import { useState, useEffect } from "react";
import { getSavedPokemons, removePokemon } from "@/utils/localStorage";

import styles from "@/styles/MyPokemons.module.scss";

import PokemonCardHeader from "@/components/pokemonCardHeader";

export default function MyPokedex() {
  const [savedPokemons, setSavedPokemons] = useState([]);

  useEffect(() => {
    const savedPokemonsData = getSavedPokemons();
    setSavedPokemons(savedPokemonsData);
  }, [savedPokemons.length]);

  const onHandleDelete = (pokemon) => {
    const pokemonNameCapitalized =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${pokemonNameCapitalized}?`
    );

    if (confirmDelete) {
      removePokemon(pokemon.name);
      setSavedPokemons((prevPokemons) =>
        prevPokemons.filter((p) => p.name !== pokemon.name)
      );
    }
  };

  return (
    <div className={styles.MyPokemons}>
      <ul className={styles.pokemonList}>
        {savedPokemons.map((pokemon, index) => (
          <li key={index}>
            <PokemonCardHeader
              name={pokemon.name}
              imageUrl={pokemon.sprites?.other?.dream_world?.front_default}
              customStyle={styles.CustomPokemonCard}
              showDeleteButton={true}
              onDelete={() => onHandleDelete(pokemon)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
