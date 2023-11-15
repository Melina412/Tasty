import PropTypes from 'prop-types';

const HomeIcon = ({ activeName, active }) => {
  return (
    <svg
      className={activeName === 'home' ? active : ''}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.15722 20.7714L9.13797 18.5618C9.13796 17.7818 9.77388 17.148 10.5618 17.1428H13.4478C14.2395 17.1428 14.8813 17.7781 14.8813 18.5618L14.9005 20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714"
        stroke="#97A2B0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.0905 13.8896H14.9097"
        stroke="#97A2B0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HomeIcon.propTypes = {
  activeName: PropTypes.string,
  active: PropTypes.string,
};

export default HomeIcon;
