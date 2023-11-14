import { NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={`${styles.navbar}`}>
        <NavLink to="/home">
          <img src="../../public/img/profil.svg" alt="Home" />
        </NavLink>
        <NavLink to="/search/:type/:name">
          <img src="../../public/img/home.svg" alt="Search" />
        </NavLink>
        <NavLink to="/detail/:id">
          <img src="../../public/img/heart.svg" alt="Heart" />
        </NavLink>
        <NavLink>
          <img src="../../public/img/search.svg" alt="Profil" />
        </NavLink>
        <button>
          <img src="../../public/img/darkmode.png" alt="Darkmode" />
        </button>
      </div>
    </>
  );
};

export default NavBar;
