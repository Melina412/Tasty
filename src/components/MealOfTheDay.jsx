import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../functions/FetchAPI";
import styles from "./MealOfTheDay.module.css";
import Circle from "./Circle";
const MealOfTheDay = () => {
  const [randomMeal, setRandomMeal] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await FetchAPI("random.php");
        if (response && response.meals) {
          console.log("response.meals", response.meals);
          const mealItem = {
            mealId: response.meals[0].idMeal,
            mealName: response.meals[0].strMeal,
            mealImg: response.meals[0].strMealThumb,
            mealArea: response.meals[0].strArea,
            mealCategorie: response.meals[0].strCategory,
          };
          setRandomMeal(mealItem);
        }
      } catch (err) {
        console.error("Fehler beim Laden der Daten:", err);
      }
    }
    fetchData();
  }, []);
  console.log("von MealOfTheDay==>", randomMeal);
  return (
    <>
      {randomMeal && (
        <section className={styles.random_meal}>
          <h2 className={styles.random_meal_title}>Meal of the Day</h2>
          <Link to={`/detail/${randomMeal.mealId}`}>
            <article className={styles.meal_card}>
              <img
                src={randomMeal.mealImg}
                alt={randomMeal.mealName}
                className={styles.img_random_meal}
              />
              <h2>{randomMeal.mealName}</h2>
              <div className={styles.area_category}>
                <div className={styles.meal_category}>
                  <Circle categorie={randomMeal.mealCategorie} />
                  <p>{randomMeal.mealCategorie}</p>
                </div>

                <p>{randomMeal.mealArea}</p>
              </div>
            </article>
          </Link>
        </section>
      )}
    </>
  );
};

export default MealOfTheDay;
