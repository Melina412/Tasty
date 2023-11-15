import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

/* CSS */
import styles from './SearchPage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useEffect, useReducer, useRef, useState } from 'react';
import FetchAPI from '../functions/FetchAPI';

import SearchButtonList from '../components/SearchButtonList';
import Slider from 'react-slick';
import SearchBox from '../components/SearchBox';
import List from '../components/List/List';
import { returnSettings } from '../functions/setSliderSettings';
import DataLoader from '../components/searchpage/DataLoader';

let settings = null;

let tempData = null;

const SearchPage = ({ children }) => {
  const [currentData, setCurrentData] = useState(null);
  const [typeState, setTypeState] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [force, forceUpdate] = useReducer((x) => x + 1, 0);

  const { type, name } = useParams();

  const sliderRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentData(null);
    let typeUrl = '';
    let nameUrl = '';
    switch (type) {
      case 'categories':
        typeUrl = 'categories.php';
        nameUrl = `filter.php?c=${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        break;
      case 'areas':
        typeUrl = 'list.php?a=list';
        nameUrl = `filter.php?a=${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        break;

      default:
        break;
    }

    async function fetchData(_typeUrl, _callback) {
      const response = await FetchAPI(_typeUrl);

      _callback(response.categories ? response.categories : response.meals ? response.meals : []); // für category response.categories

      // slider settings
      settings = returnSettings(
        response.categories
          ? response.categories.map((val) => val.strCategory)
          : response.meals
          ? response.meals.map((val) => val.strArea)
          : [],
        name
      );

      sliderRef.current && sliderRef.current.slickGoTo(settings.initialSlide);

      // Wir fetchen daten insofern name != all
      if (name !== 'all') {
        fetchDataByName(nameUrl, setCurrentData);
      }
    }

    // Wir fetchen den type => categories oder areas
    fetchData(typeUrl, setTypeState);
  }, [type, name, force]);

  async function fetchDataByName(_typeUrl, _callback) {
    const response = await FetchAPI(_typeUrl);
    _callback(response);
    tempData = response;
  }

  const handleSearchByType = async (_val) => {
    setSearchInput(_val);

    if (_val) {
      if (name !== 'all') {
        let filteredResult = {
          meals: tempData.meals?.filter((item) =>
            item.strMeal.startsWith(_val.charAt(0).toUpperCase() + _val.slice(1))
          ),
        };

        if (type === 'areas') {
          setCurrentData([]);

          await filteredResult.meals.forEach(async (fil) => {
            let tempData = await FetchAPI(`/search.php?s=${fil.strMeal}`);

            for (const value of tempData.meals) {
              if (value.strArea === `${name.charAt(0).toUpperCase()}${name.slice(1)}`) {
                setCurrentData((cur) => [...cur, value]);
              }
            }
          });

          return;
        }

        setCurrentData(filteredResult);
      } else {
        const filteredResult = await FetchAPI(`/search.php?s=${_val}`);
        setCurrentData(filteredResult);
      }
    } else {
      name !== 'all' ? setCurrentData(tempData) : setCurrentData([]);
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
          type === 'categories' ? (
            name === 'all' ? (
              <>
                {currentData && currentData?.meals?.length > 0 && (
                  <List currentData={currentData} categories={null} />
                )}
                <article className={styles.buttons_all}>
                  {typeState?.map((ts) => {
                    return (
                      <SearchButtonList
                        key={ts.idCategory}
                        linkName={`categories/${ts.strCategory
                          .charAt(0)
                          .toLowerCase()}${ts.strCategory.slice(1)}`}
                        categoryName={ts.strCategory}
                        typeName={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                        setSearchInput={setSearchInput}
                        setForceUpdate={forceUpdate}
                      />
                    );
                  })}
                </article>
              </>
            ) : (
              <article className={styles.article_section}>
                <Link
                  className={styles.see_all}
                  to="/search/categories/all"
                  onClick={() => setSearchInput('')}
                >
                  See All
                </Link>
                {settings && (
                  <Slider {...settings} className={styles.buttons_named} ref={sliderRef}>
                    {typeState?.map((ts) => {
                      return (
                        <SearchButtonList
                          key={ts.idCategory}
                          linkName={`categories/${ts.strCategory
                            .charAt(0)
                            .toLowerCase()}${ts.strCategory.slice(1)}`}
                          categoryName={ts.strCategory}
                          typeName={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                          setSearchInput={setSearchInput}
                          setForceUpdate={forceUpdate}
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
                  <DataLoader styles={styles.loading} loadingText="LOADING...." />
                )}
              </article>
            )
          ) : type === 'areas' ? (
            name === 'all' ? (
              <>
                {currentData && currentData?.meals?.length > 0 && (
                  <List currentData={currentData} categories={null} />
                )}
                <article className={styles.buttons_all}>
                  {typeState?.map((ts) => {
                    return (
                      <SearchButtonList
                        key={ts.strArea}
                        linkName={`areas/${ts.strArea.charAt(0).toLowerCase()}${ts.strArea.slice(
                          1
                        )}`}
                        categoryName={ts.strArea}
                        typeName={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                        setSearchInput={setSearchInput}
                        setForceUpdate={forceUpdate}
                      />
                    );
                  })}
                </article>
              </>
            ) : (
              <article className={styles.article_section}>
                <Link
                  className={styles.see_all}
                  to="/search/areas/all"
                  onClick={() => setSearchInput('')}
                >
                  See All
                </Link>
                (
                <Slider {...settings} className={styles.buttons_named} ref={sliderRef}>
                  {typeState?.map((ts) => {
                    return (
                      <SearchButtonList
                        key={crypto.randomUUID()}
                        linkName={`areas/${ts.strArea.charAt(0).toLowerCase()}${ts.strArea.slice(
                          1
                        )}`}
                        categoryName={ts.strArea}
                        typeName={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                        setSearchInput={setSearchInput}
                        setForceUpdate={forceUpdate}
                      />
                    );
                  })}
                </Slider>
                )
                {currentData ? (
                  searchInput.length > 0 ? (
                    <List currentData={{ meals: currentData }} categories="areas" />
                  ) : (
                    <List currentData={currentData} categories={null} />
                  )
                ) : (
                  <DataLoader styles={styles.loading} loadingText="LOADING...." />
                )}
              </article>
            )
          ) : (
            <p>No Type available!!</p>
          )
        ) : (
          <DataLoader styles={styles.loading} loadingText="LOADING...." />
        )}
      </section>
      {children}
    </main>
  );
};

SearchPage.propTypes = {
  children: PropTypes.object,
};

export default SearchPage;
