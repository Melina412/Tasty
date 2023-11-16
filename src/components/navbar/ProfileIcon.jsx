import PropTypes from 'prop-types';

const ProfileIcon = ({ activeName, active }) => {
  return (
    <svg
      className={activeName === 'profile' ? active : ''}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8479 15.3462C8.9803 15.3462 5.67744 15.931 5.67744 18.2729C5.67744 20.6148 8.95935 21.2205 12.8479 21.2205C16.7155 21.2205 20.0174 20.6348 20.0174 18.2938C20.0174 15.9529 16.7365 15.3462 12.8479 15.3462Z"
        stroke="#97A2B0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8479 12.0059C15.386 12.0059 17.4432 9.94779 17.4432 7.40969C17.4432 4.8716 15.386 2.81445 12.8479 2.81445C10.3098 2.81445 8.25174 4.8716 8.25174 7.40969C8.24316 9.93922 10.287 11.9973 12.8155 12.0059H12.8479Z"
        stroke="#97A2B0"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ProfileIcon.propTypes = {
  activeName: PropTypes.string,
  active: PropTypes.string,
};

export default ProfileIcon;
