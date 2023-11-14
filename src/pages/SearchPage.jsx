import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

/* CSS */
import styles from "./SearchPage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from 'react';
import FetchAPI from '../functions/FetchAPI';

import SearchButtonList from '../components/SearchButtonList';
import Slider from 'react-slick';
import SearchBox from '../components/SearchBox';
import List from '../components/List/List';
import { returnSettings } from '../functions/setSliderSettings';

let settings = null;

let tempData = null;

const SearchPage = () => {
  const [currentData, setCurrentData] = useState([]);
  const [typeState, setTypeState] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { type, name } = useParams();

  const sliderRef = useRef();

  useEffect(() => {
    let typeUrl = "";
    let nameUrl = "";
    switch (type) {
      case "categories":
        typeUrl = "categories.php";
        nameUrl = `filter.php?c=${name.charAt(0).toUpperCase()}${name.slice(
          1
        )}`;
        break;
      case "areas":
        typeUrl = "list.php?a=list";
        nameUrl = `filter.php?a=${name.charAt(0).toUpperCase()}${name.slice(
          1
        )}`;
        break;

      default:
        break;
    }

    async function fetchData(_typeUrl, _callback) {
      const response = await FetchAPI(_typeUrl);

      _callback(
        response.categories
          ? response.categories
          : response.meals
          ? response.meals
          : []
      ); // für category response.categories

      // slider settings
      settings = returnSettings(
        response.categories ? response.categories : response.meals ? response.meals : [],
        name
      );

      sliderRef.current && sliderRef.current.slickGoTo(settings.initialSlide);

      // Wir fetchen daten insofern name != all
      if (name !== "all") {
        fetchDataByName(nameUrl, setCurrentData);
      }
    }

    // Wir fetchen den type => categories oder areas
    fetchData(typeUrl, setTypeState);
  }, [type, name]);

  async function fetchDataByName(_typeUrl, _callback) {
    const response = await FetchAPI(_typeUrl);
    _callback(response);
    tempData = response;
  }

  const handleSearchByType = (_val) => {
    setSearchInput(_val);
    if (_val) {
      const filteredResult = {
        meals: currentData.meals?.filter((item) => item.strMeal.startsWith(_val.toUpperCase())),
      };
      setCurrentData(filteredResult);
    } else {
      setCurrentData(tempData);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.header_section}>
        <article className={styles.search_header}>
          <Link to="/home">
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </Link>
          <h2 className={styles.h2}>Search</h2>
        </article>
        <SearchBox onHandleSearchByType={handleSearchByType} searchInput={searchInput} />
      </section>

      <section className={styles.content_section}>
        {typeState && typeState.length > 0 ? (
          type === "categories" ? (
            name === "all" ? (
              <article className={styles.buttons_all}>
                {typeState.map((ts) => {
                  return (
                    <SearchButtonList
                      key={ts.idCategory}
                      linkName={`categories/${ts.strCategory
                        .charAt(0)
                        .toLowerCase()}${ts.strCategory.slice(1)}`}
                      categoryName={ts.strCategory}
                      typeName={`${name.charAt(0).toUpperCase()}${name.slice(
                        1
                      )}`}
                    />
                  );
                })}
              </article>
            ) : (
              <article className={styles.article_section}>
                <Link className={styles.see_all} to="/search/categories/all">
                  See All
                </Link>
                {settings && (
                  <Slider {...settings} className={styles.buttons_named} ref={sliderRef}>
                    {typeState.map((ts) => {
                      return (
                        <SearchButtonList
                          key={ts.idCategory}
                          linkName={`categories/${ts.strCategory
                            .charAt(0)
                            .toLowerCase()}${ts.strCategory.slice(1)}`}
                          categoryName={ts.strCategory}
                          typeName={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                        />
                      );
                    })}
                  </Slider>
                )}
                {currentData ? (
                  searchInput.length > 0 ? (
                    <List currentData={currentData} categories={name} />
                  ) : (
                    <List currentData={currentData} categories={null} />
                  )
                ) : (
                  <p>Loading...</p>
                )}
              </article>
            )
          ) : type === "areas" ? (
            name === "all" ? (
              <article className={styles.buttons_all}>
                {typeState.map((ts) => {
                  return (
                    <SearchButtonList
                      key={ts.strArea}
                      linkName={`areas/${ts.strArea
                        .charAt(0)
                        .toLowerCase()}${ts.strArea.slice(1)}`}
                      categoryName={ts.strArea}
                      typeName={`${name.charAt(0).toUpperCase()}${name.slice(
                        1
                      )}`}
                    />
                  );
                })}
              </article>
            ) : (
              <article className={styles.article_section}>
                <Link className={styles.see_all} to="/search/areas/all">
                  See All
                </Link>
                (
                <Slider {...settings} className={styles.buttons_named} ref={sliderRef}>
                  {typeState.map((ts) => {
                    return (
                      <SearchButtonList
                        key={crypto.randomUUID()}
                        linkName={`areas/${ts.strArea.charAt(0).toLowerCase()}${ts.strArea.slice(
                          1
                        )}`}
                        categoryName={ts.strArea}
                        typeName={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                      />
                    );
                  })}
                </Slider>
                )
                {currentData ? (
                  searchInput.length > 0 ? (
                    <List currentData={currentData} categories={name} />
                  ) : (
                    <List currentData={currentData} categories={null} />
                  )
                ) : (
                  <p>Loading...</p>
                )}
              </article>
            )
          ) : (
            <p>No Type available!!</p>
          )
        ) : (
          <p>LOADING...</p>
        )}
      </section>
    </main>
  );
};

export default SearchPage;
