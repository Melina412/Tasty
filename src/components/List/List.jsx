import styles from "./List.module.css";
import CategoryAreaCards from "../CategoryAreaCards/CategoryAreaCards.jsx";

const List = () => {
  return (
    <section className={styles.category_area_list}>
      <CategoryAreaCards
        strMealThumb="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        strMeal="Irgendeine Pasta"
      />
      <CategoryAreaCards
        strMealThumb="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        strMeal="Irgendeine Pasta"
      />
      <CategoryAreaCards
        strMealThumb="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        strMeal="Irgendeine Pasta"
      />
      <CategoryAreaCards
        strMealThumb="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        strMeal="Irgendeine Pasta"
      />
      <CategoryAreaCards
        strMealThumb="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        strMeal="Irgendeine Pasta"
      />
      <CategoryAreaCards
        strMealThumb="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        strMeal="Irgendeine Pasta"
      />
    </section>
  );
};

export default List;
