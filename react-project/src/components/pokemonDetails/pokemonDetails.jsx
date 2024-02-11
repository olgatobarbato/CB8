import styles from "./index.module.scss";

import StatsChart from "../statsCharts";

const PokemonDetails = ({
  baseExperience,
  height,
  weight,
  abilities,
  stats,
}) => {
  const heightConversionFactor = 0.1;
  const weightConversionFactor = 0.1;

  const convertedHeight = parseFloat(
    (height * heightConversionFactor).toFixed(1)
  );
  const convertedWeight = parseFloat(
    (weight * weightConversionFactor).toFixed(1)
  );

  return (
    <div className={styles.PokemonDetails}>
      <div className={styles.baseExperience}>
        <h4>Base experience: {baseExperience}</h4>
      </div>

      <h4>Height: {convertedHeight} m</h4>
      <h4>Weight: {convertedWeight} kg</h4>
      <div className={styles.abilities}>
        <div>
          <h4>Abilities:</h4>
        </div>
        <div className={styles.list}>
          <ul>
            {abilities &&
              abilities.map((ability, index) => (
                <li key={index}>
                  <p>{ability.ability.name} </p>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <h4>Stats:</h4>
      <StatsChart stats={stats} />
    </div>
  );
};

export default PokemonDetails;
