import styles from "./index.module.scss";

const PokemonCardHeader = ({
  name,
  imageUrl,
  customStyle,
  showDeleteButton,
  onDelete,
}) => {
  const uppercaseName = name?.toUpperCase();

  return (
    <div className={`${styles.PokemonCardHeader} ${customStyle}`}>
      <img className={styles.image} src={imageUrl} alt={name} />
      <h2 className={styles.name}>{uppercaseName}</h2>
      {showDeleteButton && (
        <button className={styles.deleteButton} onClick={onDelete}>
          X
        </button>
      )}
    </div>
  );
};

export default PokemonCardHeader;
