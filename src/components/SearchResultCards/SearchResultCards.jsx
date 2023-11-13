import styles from "./SearchResultCards.module.css";

const SearchResultCards = (props) => {
  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            className={styles.image}
            src={props.strMealThumb}
            alt="meal image"
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.name}>{props.strMeal}</p>
          <div>
            <img src="#" alt="icon" />
            <p>{props.strCategory}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SearchResultCards;
