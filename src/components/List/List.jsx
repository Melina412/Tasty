import SearchResultCards from "../SearchResultCards/SearchResultCards";
import CategoryAreaCards from "../CategoryAreaCards/CategoryAreaCards.jsx";
import styles from "./List.module.css";

const List = ({ currentData, categories }) => {
  console.log({ currentData });
  console.log({ categories });
  return (
    <>
      <section
        className={
          categories ? styles.search_result_list : styles.category_area_list
        }
      >
        {currentData.meals && currentData.meals.length > 0 ? (
          currentData.meals.map((item, index) =>
            categories ? (
              <SearchResultCards
                key={index}
                item={item}
                categories={
                  categories === "home"
                    ? item.strCategory
                    : categories.charAt(0).toUpperCase() + categories.slice(1)
                }
              />
            ) : (
              <CategoryAreaCards key={index} item={item} />
            )
          )
        ) : (
          <p>noch keine Daten verfügbar...</p>
        )}
      </section>
    </>
  );
};

export default List;
