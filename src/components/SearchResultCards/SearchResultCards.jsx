import { Link } from "react-router-dom";
import styles from "./SearchResultCards.module.css";

const SearchResultCards = (props) => {
  return (
    <article className={styles.card}>
      <div className={styles.container}>
        {/*  */}
        <div className={styles.img_container}>
          <img
            className={styles.image}
            src={props.strMealThumb}
            alt="meal image"
          />
        </div>
        {/*  */}
        {/*  */}
        <div className={styles.text_container}>
          <div className={styles.meal_container}>
            <p className={styles.name}>{props.strMeal}</p>
            <div className={styles.category}>
              <img src="/public/circle.svg" alt="icon" />
              <p>{props.strCategory}</p>
            </div>
          </div>

          {/*  */}
          <div>
            <Link to={`/details/${props.idMeal}`}>
              <button className={styles.button}>
                <img src="/public/arrow-white.svg" alt="link to meal" />
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </article>
  );
};

export default SearchResultCards;
