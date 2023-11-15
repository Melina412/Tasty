import { FavoriteContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../functions/FetchAPI";
import styles from "../pages/Favorites.module.css";

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

  console.log(singleMeal);

  console.log(favorite);
  return (
    <main>
      <h1 style={{ fontSize: "3rem" }}>FAVORITES!!</h1>
      {favorite.map((meal) => {
        return (
          <Link to={`/detail/${meal.idMeal}`} className={`${styles.favorite}`}>
            <div key={crypto.randomUUID()}>
              <h2>{meal.strMeal}</h2>
            </div>
          </Link>
        );
      })}
      {children}
    </main>
  );
};

export default Favorites;
