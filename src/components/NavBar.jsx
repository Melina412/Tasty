import { NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/Context";

import PropTypes from "prop-types";

import HomeIcon from "./navbar/HomeIcon";
import GlassIcon from "./navbar/GlassIcon";
import FavoriteIcon from "./navbar/FavoriteIcon";
import ProfileIcon from "./navbar/ProfileIcon";

const NavBar = ({ activeName }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDarkmode = () => {
    setTheme((mode) => !mode);
  };

  return (
    <>
      <div className={`${styles.navbar} ${theme ? styles.dark : ""}`}>
        <NavLink to="/home">
          <HomeIcon activeName={activeName} active={styles.active} />
        </NavLink>
        <NavLink to="/search/categories/all">
          <GlassIcon activeName={activeName} active={styles.active_glass} />
        </NavLink>
        <NavLink to="/favorites">
          <FavoriteIcon activeName={activeName} active={styles.active} />
        </NavLink>
        <NavLink to="/profile">
          <ProfileIcon activeName={activeName} active={styles.active_profile} />
        </NavLink>
        <button onClick={toggleDarkmode}>
          <img src="/img/darkmode.png" alt="Darkmode" />
        </button>
      </div>
    </>
  );
};

NavBar.propTypes = {
  activeName: PropTypes.string,
};

export default NavBar;
