import SearchResultCards from "../SearchResultCards/SearchResultCards";
import styles from "./List.module.css";

const List = () => {
  return (
    <section className={styles.search_result_list}>
      <SearchResultCards
        strMealThumb="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        strMeal="Irgendeine Pasta"
        strCategory="Random Category"
        idMeal="52771"
      />
    </section>
  );
};

export default List;
