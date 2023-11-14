import { useState, useEffect } from "react";
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import NavBar from "../components/NavBar";
import FetchAPI from "../functions/FetchAPI";

import styles from "../pages/Detailpage.module.css";

const DetailPage = () => {
  const [singleMeal, setSingleMeal] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await FetchAPI("lookup.php?i=52772");

        if (response && response.meals) {
          console.log(response.meals);
          setSingleMeal(response.meals);
        }
      } catch (err) {
        console.error("Fehler beim Laden der Daten:", err);
      }
    }
    fetchData();
  }, []);

  console.log(singleMeal);

  const [toggle, setToggle] = useState(true);

  const toggleFunction = () => {
    console.log("Ingredients" + toggle);
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      {singleMeal ? (
        <section>
          <img
            className={`${styles.img}`}
            src={singleMeal[0].strMealThumb}
            alt="Foto vom Gericht"
          />
          <article className={`${styles.details}`}>
            <h1>{singleMeal[0].strMeal}</h1>
            <h3>{singleMeal[0].strCategory}</h3>
            <h4>{singleMeal[0].strArea}</h4>
            <div>
              <button onClick={toggleFunction}>Ingredients</button>
              <button onClick={toggleFunction}>Instructions</button>
            </div>
          </article>
          {toggle ? <Ingredients /> : <Instructions />}

          <NavBar />
        </section>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default DetailPage;
