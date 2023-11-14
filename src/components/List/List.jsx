import SearchResultCards from "../SearchResultCards/SearchResultCards";
import CategoryAreaCards from "../CategoryAreaCards/CategoryAreaCards.jsx";
import styles from "./List.module.css";

const List = ({ currentData, categories }) => {
  console.log({ currentData });
  console.log({ categories });
  // # die Klasse der section muss noch vertauscht werden, wenn der categories wert da ist
  return (
    <>
      <section
        className={
          categories ? styles.search_result_list : styles.category_area_list
        }
        // className={
        //   categories ? styles.category_area_list : styles.search_result_list
        // }
      >
        {currentData.meals && currentData.meals.length > 0 ? (
          currentData.meals.map((item, index) =>
            categories ? (
              <SearchResultCards key={index} item={item} />
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
