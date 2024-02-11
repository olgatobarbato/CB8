import styles from "./index.module.scss";

const PokemonTypesInfo = ({ types }) => {
  return (
    <div className={styles.PokemonTypesInfo}>
      <div>
        <h3>Types:</h3>
      </div>
      <div className={styles.list}>
        <ul>
          {types &&
            types.map((type, index) => (
              <li key={index} className={styles.typeItem}>
                <h4>{type.type.name}</h4>
                <img
                  src={`/types/${type.type.name}.svg`}
                  alt={type.type.name}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonTypesInfo;
