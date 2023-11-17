import { useEffect, useState } from "react";
import FetchAPI from "../functions/FetchAPI";
import AreasSlider from "../components/sliders/AreasSlider";
import CategoriesSlider from "../components/sliders/CategoriesSlider";
import MealOfTheDay from "../components/MealOfTheDay";
import SearchBox from "../components/SearchBox";
import List from "../components/List/List";
import DataLoader from "../components/searchpage/DataLoader";

import styles from "./Home.module.css";
import loadingStyles from "./SearchPage.module.css";
const Home = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const [randomMeal, setRandomMeal] = useState();
  const [areas, setAreas] = useState([]);
  const [categorys, setCategorys] = useState([]);

  const fetchDataforName = async (_val) => {
    setSearchInput(_val);
    const response = await FetchAPI(`search.php?s=${_val}`);
    setCurrentData(response);
    console.log("Von Home ==>", response);
  };

  useEffect(() => {
    async function fetchForRandomMeal() {
      try {
        const response = await FetchAPI("random.php");
        if (response && response.meals) {
          console.log("Random-Meal", response.meals);
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

    async function fetchDataForArea() {
      try {
        const response = await FetchAPI("list.php?a=list");
        if (response && response.meals) {
          const areasItem = response.meals.map((area) => ({
            description: area.strArea,
          }));
          setAreas(areasItem);
        }
      } catch (err) {
        console.error("Fehler beim Laden der Daten:", err);
      }
    }

    async function fetchForCategory() {
      try {
        const response = await FetchAPI("categories.php");
        if (response && response.categories) {
          const categorysItem = response.categories.map((category) => ({
            categoryId: category.idCategory,
            categoryName: category.strCategory,
            categoryImg: category.strCategoryThumb,
            categoryDescription: category.strCategoryDescription,
          }));
          setCategorys(categorysItem);
        }
      } catch (err) {
        console.error("Fehler beim Laden der Daten:", err);
      }
    }
    fetchForRandomMeal();
    fetchDataForArea();
    fetchForCategory();
  }, []);

  return (
    <>
      <section className={styles.container}>
        <header className={styles.header}>
          <SearchBox
            searchInput={searchInput}
            onHandleSearchByType={fetchDataforName}
          />
        </header>

        {searchInput ? (
          currentData ? (
            <List currentData={currentData} categories="home" />
          ) : (
            <p>
              Leider konnten wir kein passendes Gericht für deine Suche finden.
            </p>
          )
        ) : randomMeal && areas && categorys ? (
          <main className={styles.main}>
            <MealOfTheDay randomMeal={randomMeal} />
            <AreasSlider areas={areas} />
            <CategoriesSlider categorys={categorys} />
          </main>
        ) : (
          <DataLoader
            styles={loadingStyles.loading}
            loadingText="LOADING...."
          />
        )}

        {children}
      </section>
    </>
  );
};

export default Home;
