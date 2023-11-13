import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../../functions/FetchAPI";

import CategoriesButtonList from "../CategoriesButtonList";

// npm install react-slick --legacy-peer-deps
import Slider from "react-slick";

// CSS
import styles from "./AreasSlider.module.css";
import "./SliderStyle/slick.css";
import "./SliderStyle/slickTheme.css";
import { settings } from "./SliderStyle/sliderSetting";

const AreasSlider = () => {
  const [areas, setAreas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        // You can await here
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
    fetchData();
  }, []);
  console.log("Von AreasSlider==>", areas);

  return (
    <>
      <section className="areasSlider">
        <div className={styles.sliderHeader}>
          <h3>Areas</h3>
          {areas.length > 1 && (
            <Link to="/categoriebuttonlist" state={{ areas }}>
              See All
            </Link>
          )}
        </div>
        {areas.length > 0 && (
          <Slider {...settings}>
            {areas.map((area, index) => (
              <div key={index}>
                <Link to={`/categoryAreaList/${area.description}`}>
                  {area.description}
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </section>
    </>
  );
};

export default AreasSlider;
