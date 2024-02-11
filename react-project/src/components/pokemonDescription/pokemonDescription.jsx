import styles from "./index.module.scss";

const PokemonDescription = ({ flavorTextEntries }) => {
  if (!flavorTextEntries || !Array.isArray(flavorTextEntries)) {
    return (
      <div>
        <h3>Description:</h3>
        <p>No English description available.</p>
      </div>
    );
  }

  const englishDescriptions = flavorTextEntries.filter(
    (entry) => entry.language.name === "en"
  );

  const description =
    englishDescriptions.length > 0
      ? englishDescriptions[0]?.flavor_text
      : "No English description available.";

  return (
    <div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default PokemonDescription;
