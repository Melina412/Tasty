import { useEffect, useState } from "react";
import FetchAPI from "../functions/FetchAPI";
import AreasSlider from "../components/sliders/AreasSlider";
import CategoriesSlider from "../components/sliders/CategoriesSlider";
import MealOfTheDay from "../components/MealOfTheDay";

const Home = () => {
  return (
    <>
      <MealOfTheDay />
      <AreasSlider />
      <CategoriesSlider />
      <p></p>
    </>
  );
};

export default Home;
