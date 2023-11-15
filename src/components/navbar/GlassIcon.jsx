import PropTypes from 'prop-types';

const GlassIcon = ({ activeName, active }) => {
  return (
    <svg
      className={activeName === 'search' ? active : ''}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.7666"
        cy="11.7664"
        r="8.98856"
        stroke="#97A2B0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0183 18.4849L21.5423 21.9997"
        stroke="#97A2B0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

GlassIcon.propTypes = {
  activeName: PropTypes.string,
  active: PropTypes.string,
};

export default GlassIcon;
