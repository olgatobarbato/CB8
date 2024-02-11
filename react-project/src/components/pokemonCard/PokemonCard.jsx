import styles from "@/components/pokemonCard/index.module.scss";
import { useState } from "react";
import { savePokemon, getSavedPokemons } from "@/utils/localStorage";

import PokemonCardHeader from "../pokemonCardHeader";
import PokemonTypesInfo from "../pokemonTypesInfo";
import PokemonDescription from "../pokemonDescription";
import PokemonDetails from "../pokemonDetails";

const PokemonCard = ({ pokemonData, otherPokemonData }) => {
  const [savedPokemons, setSavedPokemons] = useState([]);

  const onHandleClick = () => {
    const isPokemonAlreadySaved = savedPokemons.some(
      (savedPokemon) => savedPokemon.name === pokemonData.name
    );

    if (!isPokemonAlreadySaved) {
      savePokemon(pokemonData);
      setSavedPokemons((prevSavedPokemons) => [
        ...prevSavedPokemons,
        pokemonData,
      ]);
    } else {
      alert("Pokemon already present in My Pokemons!");
    }
  };
  if (!pokemonData || !otherPokemonData) {
    return <div className={styles.PokemonNotFound}>Pokemon not found.</div>;
  }

  return (
    <div className={styles.PokemonCard}>
      <div className={styles.cardExceptBtn}>
        <div className={styles.mainInfo}>
          <PokemonCardHeader
            name={pokemonData.name}
            imageUrl={pokemonData?.sprites?.other?.dream_world?.front_default}
          />
          <PokemonTypesInfo types={pokemonData.types} />
          <PokemonDescription
            flavorTextEntries={otherPokemonData.flavor_text_entries}
          />
        </div>
        <div className={styles.details}>
          <PokemonDetails
            baseExperience={pokemonData.base_experience}
            height={pokemonData.height}
            weight={pokemonData.weight}
            abilities={pokemonData.abilities}
            stats={pokemonData.stats}
          />
        </div>
      </div>
      <button className={styles.button} onClick={onHandleClick}>
        Add to My Pokemons
      </button>
    </div>
  );
};

export default PokemonCard;
