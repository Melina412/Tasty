import { Link } from "react-router-dom";
import styles from "./CategoryAreaCards.module.css";

const CategoryAreaCards = (props) => {
  return (
    <article className={styles.card}>
      <Link className={styles.link} to={`/detail/${props.item.idMeal}`}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              className={styles.image}
              src={props.item.strMealThumb}
              alt="meal image"
            />
          </div>
          <p className={styles.name}>{props.item.strMeal}</p>
        </div>
      </Link>
    </article>
  );
};

export default CategoryAreaCards;
