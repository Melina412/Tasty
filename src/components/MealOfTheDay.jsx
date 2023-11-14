import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../functions/FetchAPI";
import styles from "./MealOfTheDay.module.css";
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
          <h3>Meal of the Day</h3>
          <Link to={`/detail/${randomMeal.mealId}`}>
            <div className={styles.meal_card}>
              <img
                src={randomMeal.mealImg}
                alt={randomMeal.mealName}
                className={styles.img_random_meal}
              />
              <h2>{randomMeal.mealName}</h2>
              <div>
                <p>{randomMeal.mealCategorie}</p>
                <p>{randomMeal.mealArea}</p>
              </div>
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default MealOfTheDay;
