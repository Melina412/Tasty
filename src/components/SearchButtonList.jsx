import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SearchButtonList.module.css';

const SearchButtonList = ({ linkName, categoryName, typeName }) => {
  return (
    <Link to={`/search/${linkName}`}>
      <button
        className={`${styles.buttons} ${typeName === categoryName ? styles.buttons_active : ''}`}
      >
        {categoryName}
      </button>
    </Link>
  );
};

SearchButtonList.propTypes = {
  linkName: PropTypes.string,
  categoryName: PropTypes.string,
  typeName: PropTypes.string,
};

export default SearchButtonList;
