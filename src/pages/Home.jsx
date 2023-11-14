import { useEffect, useState } from "react";
import FetchAPI from "../functions/FetchAPI";
import AreasSlider from "../components/sliders/AreasSlider";
import CategoriesSlider from "../components/sliders/CategoriesSlider";
import MealOfTheDay from "../components/MealOfTheDay";

const Home = () => {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await FetchAPI("random.php");
      // console.log("Von Home==> ", response);
      // ...
    }
    fetchData();
  }, []);
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
