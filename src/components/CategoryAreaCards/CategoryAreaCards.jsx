import { Link } from "react-router-dom";
import styles from "./CategoryAreaCards.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/Context";

const CategoryAreaCards = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <article className={`${styles.card} ${theme ? styles.dark : ""}`}>
      <Link className={styles.link} to={`/detail/${props.item.idMeal}`}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              className={styles.image}
              src={props.item.strMealThumb}
              alt="meal image"
            />
          </div>
          <div className={styles.name_container}>
            <p className={styles.name}>{props.item.strMeal}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CategoryAreaCards;
