import { useEffect, useState } from "react";
import FetchAPI from "../functions/FetchAPI";
import AreasSlider from "../components/sliders/AreasSlider";
import CategoriesSlider from "../components/sliders/CategoriesSlider";
import MealOfTheDay from "../components/MealOfTheDay";
import SearchBox from "../components/SearchBox";
import styles from "./Home.module.css";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <header className={styles.header}>
          <SearchBox />
        </header>
        <main className={styles.main}>
          <MealOfTheDay />
          <AreasSlider />
          <CategoriesSlider />
        </main>
        <footer></footer>
        <NavBar />
      </section>
    </>
  );
};

export default Home;
