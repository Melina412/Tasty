import { FavoriteContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../functions/FetchAPI";
import styles from "../pages/Favorites.module.css";
import Circle from "../components/Circle";
import { ThemeContext } from "../context/Context";
import useLocalStorage from "../functions/useLocalStorage";

const Favorites = ({ children }) => {
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const [singleMeal, setSingleMeal] = useState();
  const { theme } = useContext(ThemeContext);
  const [localFavorite, setLocalFavorite] = useLocalStorage(
    "favorites",
    favorite
  );

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

  const deleteFav = (idToDelete) => {
    if (idToDelete) {
      setFavorite((currentFavorites) =>
        currentFavorites.filter((cur) => cur.idMeal !== idToDelete)
      );
      setLocalFavorite((currentFavorites) =>
        currentFavorites.filter((cur) => cur.idMeal !== idToDelete)
      );
      console.log("Von Favorite: delete ==>", favorite);
    }
  };

  console.log("Von Favorite: SingleMeal ==>", singleMeal);
  console.log("Von Favorite: favorite ==>", favorite);

  return (
    <main className={`${styles.main} ${theme ? styles.dark : ""}`}>
      {favorite && favorite.length > 0 ? (
        <>
          <section>
            <h1 className={styles.fav}>
              You have {favorite.length} recipes in your Favorites
            </h1>
            {favorite.map((meal) => {
              return (
                <div key={crypto.randomUUID()}>
                  <div className={styles.card}>
                    <Link
                      to={`/detail/${meal.idMeal}`}
                      className={`${styles.favorite}`}
                    >
                      <div className={styles.card_link}>
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
                    </Link>
                    <input
                      className={`${styles.input}`}
                      type="checkbox"
                      name="favorite"
                      defaultChecked="false"
                      onChange={() => deleteFav(meal.idMeal)}
                    />
                  </div>
                </div>
              );
            })}
          </section>
          <div className={styles.icon}>
            <a target="_blank" href="https://icons8.com/icon/581/herzen">
              Herz
            </a>
            <p> Icon von </p>
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </div>
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
