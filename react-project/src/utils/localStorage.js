export const savePokemon = (pokemon) => {
  const savedPokemons = JSON.parse(localStorage.getItem("savedPokemons")) || [];
  savedPokemons.push(pokemon);
  localStorage.setItem("savedPokemons", JSON.stringify(savedPokemons));
};

export const getSavedPokemons = () => {
  return JSON.parse(localStorage.getItem("savedPokemons")) || [];
};

export const removePokemon = (pokemonName) => {
  const savedPokemons = JSON.parse(localStorage.getItem("savedPokemons")) || [];

  const updatedPokemons = savedPokemons.filter(
    (pokemon) => pokemon.name !== pokemonName
  );

  localStorage.setItem("savedPokemons", JSON.stringify(updatedPokemons));
};
