import { useEffect, useState } from "react";
import FetchAPI from "../functions/FetchAPI";
import AreasSlider from "../components/sliders/AreasSlider";
import CategoriesSlider from "../components/sliders/CategoriesSlider";
import MealOfTheDay from "../components/MealOfTheDay";
import SearchBox from "../components/SearchBox";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <SearchBox />
        <MealOfTheDay />
        <AreasSlider />
        <CategoriesSlider />
        <p></p>
      </section>
    </>
  );
};

export default Home;
