import { Link } from "react-router-dom";
import styles from "./SearchResultCards.module.css";
import Circle from "../Circle";
import { useContext } from "react";
import { ThemeContext } from "../../context/Context";

const SearchResultCards = (props) => {
  const { theme } = useContext(ThemeContext);
  // console.log({ theme });
  // console.log({ props });
  return (
    <article className={`${styles.card} ${theme ? styles.dark : ""}`}>
      <div className={styles.container}>
        {/*  */}
        <div className={styles.img_container}>
          <img
            className={styles.image}
            src={props.item.strMealThumb}
            alt="meal image"
          />
        </div>
        {/*  */}
        {/*  */}
        <div className={styles.text_container}>
          <div className={styles.meal_container}>
            <p
              className={`${styles.name} ${theme ? styles.dark : styles.light}`}
            >
              {props.item.strMeal}
            </p>
            <div className={styles.category_container}>
              {/* -------------------- Circle props --------------------  */}
              <Circle categorie={props.categories} />
              <p className={styles.category}>{props.categories}</p>
            </div>
          </div>

          {/*  */}
          <Link className={styles.link} to={`/detail/${props.item.idMeal}`}>
            <div className={styles.button_container}>
              <button className={styles.button}>
                <img src="/arrow-white.svg" alt="link to meal" />
              </button>
            </div>
          </Link>
        </div>
        {/*  */}
      </div>
    </article>
  );
};

export default SearchResultCards;
