import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import FetchAPI from "../functions/FetchAPI";
import { FavoriteContext } from "../context/Context";
import { ThemeContext } from "../context/Context";

import styles from "../pages/Detailpage.module.css";
import VideoPlayer from "../components/player/VideoPlayer";
import useLocalStorage from "../functions/useLocalStorage";

const DetailPage = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [singleMeal, setSingleMeal] = useState();
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const [isShownVideo, setIsShownVideo] = useState(false);

  // - für die id vom Meal of the Day
  const idParams = useParams();
  const id = idParams.id;

  const [localFavorite, setLocalFavorite] = useLocalStorage(
    "favorites",
    favorite
  );

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

  const ifchecked = favorite?.some((item) => item.idMeal === id);

  const [toggle, setToggle] = useState(true);

  const toggleFunction = () => {
    setToggle((toggle) => !toggle);
  };

  const handleSetFavorites = () => {
    if (favorite.some((item) => item.idMeal === id)) {
      setFavorite((currentFavorites) =>
        currentFavorites.filter((cur) => cur.idMeal !== singleMeal[0].idMeal)
      );
      setLocalFavorite((currLocal) =>
        currLocal.filter((cur) => cur.idMeal !== singleMeal[0].idMeal)
      );
    } else {
      setFavorite((currentFavorites) => [...currentFavorites, singleMeal[0]]);
      setLocalFavorite([...localFavorite, singleMeal[0]]);
    }
  };

  const handleSetShownVideo = () => {
    setIsShownVideo(!isShownVideo);
    window.scrollTo(0, 0);
  };

  console.log("Meal Detailpage =>", singleMeal);

  return (
    <>
      {singleMeal ? (
        <section className={`${styles.mediaflex} ${theme ? styles.dark : ""}`}>
          <img
            className={`${styles.img}`}
            src={singleMeal[0].strMealThumb}
            alt="Foto vom Gericht"
          />
          <article className={`${styles.details}`}>
            <div className={`${styles.flex}`}>
              {" "}
              <h1>{singleMeal[0].strMeal}</h1>{" "}
              <input
                className={`${styles.input}`}
                onClick={handleSetFavorites}
                type="checkbox"
                name="favorite"
                defaultChecked={ifchecked}
              />
            </div>

            <h3>{singleMeal[0].strCategory}</h3>
            <h4>{singleMeal[0].strArea}</h4>

            <div className={`${styles.buttondiv}`}>
              <button
                className={toggle ? `${styles.black}` : null}
                onClick={toggleFunction}
              >
                Ingredients
              </button>

              <button
                onClick={toggleFunction}
                className={toggle ? null : `${styles.black}`}
              >
                Instructions
              </button>
            </div>
          </article>
          {toggle ? (
            <article className={`${styles.ingredients}`}>
              <h2>Ingredients</h2>
              {singleMeal[0].strIngredient1 ? (
                <p>{`${singleMeal[0].strMeasure1} ${singleMeal[0].strIngredient1}`}</p>
              ) : null}
              {singleMeal[0].strIngredient2 ? (
                <p>{`${singleMeal[0].strMeasure2} ${singleMeal[0].strIngredient2}`}</p>
              ) : null}
              {singleMeal[0].strIngredient3 ? (
                <p>{`${singleMeal[0].strMeasure3} ${singleMeal[0].strIngredient3}`}</p>
              ) : null}
              {singleMeal[0].strIngredient4 ? (
                <p>{`${singleMeal[0].strMeasure4} ${singleMeal[0].strIngredient4}`}</p>
              ) : null}
              {singleMeal[0].strIngredient5 ? (
                <p>{`${singleMeal[0].strMeasure5} ${singleMeal[0].strIngredient5}`}</p>
              ) : null}
              {singleMeal[0].strIngredient6 ? (
                <p>{`${singleMeal[0].strMeasure6} ${singleMeal[0].strIngredient6}`}</p>
              ) : null}
              {singleMeal[0].strIngredient7 ? (
                <p>{`${singleMeal[0].strMeasure7} ${singleMeal[0].strIngredient7}`}</p>
              ) : null}
              {singleMeal[0].strIngredient8 ? (
                <p>{`${singleMeal[0].strMeasure8} ${singleMeal[0].strIngredient8}`}</p>
              ) : null}
              {singleMeal[0].strIngredient9 ? (
                <p>{`${singleMeal[0].strMeasure9} ${singleMeal[0].strIngredient9}`}</p>
              ) : null}
              {singleMeal[0].strIngredient10 ? (
                <p>{`${singleMeal[0].strMeasure10} ${singleMeal[0].strIngredient10}`}</p>
              ) : null}
              {singleMeal[0].strIngredient11 ? (
                <p>{`${singleMeal[0].strMeasure11} ${singleMeal[0].strIngredient11}`}</p>
              ) : null}
              {singleMeal[0].strIngredient12 ? (
                <p>{`${singleMeal[0].strMeasure12} ${singleMeal[0].strIngredient12}`}</p>
              ) : null}
              {singleMeal[0].strIngredient13 ? (
                <p>{`${singleMeal[0].strMeasure13} ${singleMeal[0].strIngredient13}`}</p>
              ) : null}
              {singleMeal[0].strIngredient14 ? (
                <p>{`${singleMeal[0].strMeasure14} ${singleMeal[0].strIngredient14}`}</p>
              ) : null}
              {singleMeal[0].strIngredient15 ? (
                <p>{`${singleMeal[0].strMeasure15} ${singleMeal[0].strIngredient15}`}</p>
              ) : null}
              {singleMeal[0].strIngredient16 ? (
                <p>{`${singleMeal[0].strMeasure16} ${singleMeal[0].strIngredient16}`}</p>
              ) : null}
            </article>
          ) : (
            <article className={`${styles.instructions}`}>
              <h2>Instructions</h2>
              <p>{singleMeal[0].strInstructions}</p>
              <a onClick={handleSetShownVideo}>Video</a>
              {isShownVideo && (
                <VideoPlayer
                  youtubeLink={singleMeal[0].strYoutube}
                  onHandleSetIsShownVideo={handleSetShownVideo}
                />
              )}
            </article>
          )}
          <div className={`${styles.icon}`}>
            <a target="_blank" href="https://icons8.com/icon/581/herzen">
              Herz
            </a>{" "}
            <p> Icon von </p>
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </div>
          {children}
        </section>
      ) : (
        <h1 className={`${styles.loading}`}>Loading...</h1>
      )}
    </>
  );
};

export default DetailPage;
