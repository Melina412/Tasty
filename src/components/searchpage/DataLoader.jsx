import PropTypes from 'prop-types';

const DataLoader = ({ styles, loadingText }) => {
  return (
    <div
      className={styles}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}
    >
      <img src="/img/loading.gif" alt="loading" style={{ width: '100px' }} />
      <div className={styles}>
        {loadingText.split('').map((text) => {
          return <span key={crypto.randomUUID()}>{text}</span>;
        })}
      </div>
    </div>
  );
};

DataLoader.propTypes = {
  styles: PropTypes.string,
  loadingText: PropTypes.string,
};

export default DataLoader;
