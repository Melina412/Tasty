import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../../functions/FetchAPI";

// npm install react-slick --legacy-peer-deps
import Slider from "react-slick";

// CSS
import styles from "./AreasSlider.module.css";

const AreasSlider = (props) => {
  // const [areas, setAreas] = useState([]);
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log("Von AreasSlider==>", props.areas);

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
                key={index}
                to={`/search/areas/${area.description.toLowerCase()}`}
                className={styles.area_link}
              >
                <button
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
