import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { HTTP_GET } from "@/utils/http";
import styles from "../../styles/Pokedex.module.scss";

import PokemonCard from "@/components/pokemonCard";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [otherPokemonData, setOtherPokemonData] = useState({});

  useEffect(() => {
    HTTP_GET(`/pokemon/${router.query.name}`).then((data) =>
      setPokemonData(data)
    );
    HTTP_GET(`/pokemon-species/${router.query.name}`).then((otherData) =>
      setOtherPokemonData(otherData)
    );
  }, [router.query.name]);

  return (
    <div className={styles.PokemonCardPage}>
      <PokemonCard
        pokemonData={pokemonData}
        otherPokemonData={otherPokemonData}
      />
    </div>
  );
}
