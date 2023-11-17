import SearchResultCards from "../SearchResultCards/SearchResultCards";
import CategoryAreaCards from "../CategoryAreaCards/CategoryAreaCards.jsx";
import styles from "./List.module.css";

const List = ({ currentData, categories }) => {
  return (
    <div className={styles.list_container}>
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
                  categories === "home" || categories === "areas"
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
    </div>
  );
};

export default List;
