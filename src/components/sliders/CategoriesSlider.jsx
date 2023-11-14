import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../../functions/FetchAPI";

import CategoriesButtonList from "../CategoriesButtonList";

import Slider from "react-slick";

// CSS
import styles from "./AreasSlider.module.css";
import "./SliderStyle/slick.css";
import "./SliderStyle/slickTheme.css";
import { settings } from "./SliderStyle/sliderSetting";

const CategoriesSlider = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    async function fetchData() {
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
    fetchData();
  }, []);
  return (
    <>
      <section className="categorysSlider">
        <div className={styles.sliderHeader}>
          <h3>Categories</h3>
          {categorys.length > 1 && (
            <Link to="/search/categories/all">See All</Link>
          )}
        </div>
        {categorys.length > 0 && (
          <Slider {...settings}>
            {categorys.map((category, index) => (
              <div key={index}>
                <Link
                  to={`/categoryAreaList/categories/${category.categoryName}`}
                >
                  <div>
                    <img
                      src={category.categoryImg}
                      alt={category.categoryName}
                    />
                    <h3>{category.categoryName}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </section>
    </>
  );
};

export default CategoriesSlider;
