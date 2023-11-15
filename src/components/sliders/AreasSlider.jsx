import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../../functions/FetchAPI";

// npm install react-slick --legacy-peer-deps
import Slider from "react-slick";

// CSS
import styles from "./AreasSlider.module.css";
// import "./SliderStyle/slick.css";
// import "./SliderStyle/slickTheme.css";
// import { settings } from "./SliderStyle/sliderSetting";

const AreasSlider = (props) => {
  // const [areas, setAreas] = useState([]);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  console.log("Von AreasSlider==>", props.areas);

  return (
    <>
      <section className={styles.areasSlider}>
        <div className={styles.slider_header}>
          <h3>Areas</h3>
          {props.areas.length > 1 && (
            <Link to="/search/areas/all">See All</Link>
          )}
        </div>
        {props.areas.length > 0 && (
          <Slider {...settings}>
            {props.areas.map((area, index) => (
              <Link
                to={`/search/areas/${area.description.toLowerCase()}`}
                className={styles.area_link}
              >
                <button
                  key={index}
                  className={`${styles.btn_area} ${
                    index === 0 ? styles.firstArea : ""
                  }`}
                >
                  {area.description}
                </button>
              </Link>
            ))}
          </Slider>
        )}
      </section>
    </>
  );
};

export default AreasSlider;
