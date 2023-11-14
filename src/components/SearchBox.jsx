import PropTypes from 'prop-types';

const SearchBox = ({ searchInput, handleSearchByType }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => handleSearchByType(e.target.value)}
      value={searchInput}
    />
  );
};

SearchBox.propTypes = {
  searchInput: PropTypes.string,
  handleSearchByType: PropTypes.func,
};

export default SearchBox;
