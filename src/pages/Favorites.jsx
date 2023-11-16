import { FavoriteContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../functions/FetchAPI";
import styles from "../pages/Favorites.module.css";
import Circle from "../components/Circle";

const Favorites = ({ children }) => {
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const [singleMeal, setSingleMeal] = useState();

  const id = favorite;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await FetchAPI(`lookup.php?i=${id}`);

        if (response && response.meals) {
          setSingleMeal(response.meals);
        }
      } catch (err) {
        console.error("Fehler beim Laden der Daten:", err);
      }
    }
    fetchData();
  }, []);

  console.log("Von Favorite : SingleMeal ==>", singleMeal);

  console.log("Von Favorite : favorite ==>", favorite);
  return (
    <main className={styles.main}>
      {favorite && favorite.length > 0 ? (
        <>
          <h1 className={styles.fav}>
            You have {favorite.length} recipes in your Favorites
          </h1>
          {favorite.map((meal) => {
            return (
              <Link
                to={`/detail/${meal.idMeal}`}
                className={`${styles.favorite}`}
              >
                <div key={crypto.randomUUID()}>
                  <div className={styles.card}>
                    <img
                      className={styles.image}
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <div className={styles.mealInfo}>
                      <p className={styles.name}>{meal.strMeal}</p>
                      <div className={styles.mealCategory}>
                        <Circle categorie={meal.strCategory} />
                        <p>{meal.strCategory}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      ) : (
        <div className={styles.noMeal}>
          <p>First, save a recipe to be able to see it in your favorites.</p>
          <Link to="/search/categories/all">Find favorite recipes</Link>
        </div>
      )}
      {children}
    </main>
  );
};

export default Favorites;
