import CategoryAreaCards from "./CategoryAreaCards";
import styles from "./CategoryAreaCards.module.css";
const List = () => {
  return (
    <section className={styles.list}>
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
