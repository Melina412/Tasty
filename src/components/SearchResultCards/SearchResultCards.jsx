import { Link } from "react-router-dom";
import styles from "./SearchResultCards.module.css";

const SearchResultCards = (props) => {
  return (
    <article className={styles.card}>
      <Link to={`/detail/${props.item.idMeal}`}>
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
              <p className={styles.name}>{props.strMeal}</p>
              <div className={styles.category}>
                <img src="/circle.svg" alt="icon" />
                <p>{props.item.strCategory}</p>
              </div>
            </div>

            {/*  */}
            <div>
              <Link to={`/details/${props.item.idMeal}`}>
                <button className={styles.button}>
                  <img src="/arrow-white.svg" alt="link to meal" />
                </button>
              </Link>
            </div>
          </div>
          {/*  */}
        </div>
      </Link>
    </article>
  );
};

export default SearchResultCards;
