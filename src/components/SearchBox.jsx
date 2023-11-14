import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
/* CSS */
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchInput, onHandleSearchByType }) => {
  return (
    <>
      <div className={styles.mag_glass_container}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            color: "#000000",
            height: "20px",
            position: "absolute",
            top: "15px",
            left: "10px ",
          }}
        />

        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onHandleSearchByType(e.target.value)}
          value={searchInput}
          className={styles.search_input}
        />
      </div>
    </>
  );
};

SearchBox.propTypes = {
  searchInput: PropTypes.string,
  onHandleSearchByType: PropTypes.func,
};

export default SearchBox;
