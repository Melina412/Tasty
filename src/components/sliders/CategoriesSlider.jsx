import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../../functions/FetchAPI";

import Slider from "react-slick";

// CSS
import styles from "./AreasSlider.module.css";
import c_styles from "./CategoriesSlider.module.css";

const CategoriesSlider = (props) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={c_styles.categorysSlider}>
        <div className={styles.slider_header}>
          <h3>Categories</h3>
          {props.categorys.length > 1 && (
            <Link to="/search/categories/all">See All</Link>
          )}
        </div>
        {props.categorys.length > 0 && (
          <Slider {...settings}>
            {props.categorys.map((category, index) => (
              <div key={index}>
                <Link
                  className={c_styles.link_categorie}
                  to={`/search/categories/${category.categoryName}`}
                >
                  <div className={c_styles.item_category}>
                    <img
                      src={category.categoryImg}
                      alt={category.categoryName}
                      className={c_styles.img_category}
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
