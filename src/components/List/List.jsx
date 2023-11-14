import SearchResultCards from '../SearchResultCards/SearchResultCards';
import CategoryAreaCards from '../CategoryAreaCards/CategoryAreaCards.jsx';
import styles from './List.module.css';

const List = ({ currentData, categories }) => {
  return (
    <>
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

      <section className={styles.search_result_list}>
        <SearchResultCards
          strMealThumb="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
          strMeal="Irgendeine Pasta"
          strCategory="Random Category"
          idMeal="52771"
        />
      </section>
    </>
  );
};

export default List;
