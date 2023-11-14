import styles from "./CategoryAreaCards.module.css";

const CategoryAreaCards = (props) => {
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
        <p className={styles.name}>{props.strMeal}</p>
      </div>
    </article>
  );
};

export default CategoryAreaCards;
