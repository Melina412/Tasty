import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../functions/FetchAPI";
import styles from "./MealOfTheDay.module.css";
import Circle from "./Circle";
const MealOfTheDay = (props) => {
  // console.log("von MealOfTheDay==>", props.randomMeal);
  return (
    <>
      {props.randomMeal && (
        <section className={styles.random_meal}>
          <h2 className={styles.random_meal_title}>Meal of the Day</h2>
          <Link to={`/detail/${props.randomMeal.mealId}`}>
            <article className={styles.meal_card}>
              <img
                src={props.randomMeal.mealImg}
                alt={props.randomMeal.mealName}
                className={styles.img_random_meal}
              />
              <h2>{props.randomMeal.mealName}</h2>
              <div className={styles.area_category}>
                <div className={styles.meal_category}>
                  <Circle categorie={props.randomMeal.mealCategorie} />
                  <p>{props.randomMeal.mealCategorie}</p>
                </div>

                <p>{props.randomMeal.mealArea}</p>
              </div>
            </article>
          </Link>
        </section>
      )}
    </>
  );
};

export default MealOfTheDay;
