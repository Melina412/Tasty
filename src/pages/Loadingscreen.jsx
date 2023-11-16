import { useContext, useEffect } from "react";
import { LoadingContext } from "../context/Context";

import style from "../pages/Loadingscreen.module.css";

const Loadingscreen = () => {
  const { setLoading } = useContext(LoadingContext);

  //* soll 2s angezeigt werden
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section className={`${style.loading}`}>
      <img
        className={`${style.vektor1}`}
        src="/img/oben.svg"
        alt="jicfnqovnnc"
      />
      <img
        className={`${style.vektor2}`}
        src="/img/oben2.svg"
        alt="jicfnqovnnc"
      />
      <div className={`${style.flex}`}>
        <img src="/img/logo.png" alt="Logo" />
        <p>Tasty</p>
      </div>
      <img
        className={`${style.vektor3}`}
        src="/img/unten.svg"
        alt="jicfnqovnnc"
      />
      <img
        className={`${style.vektor4}`}
        src="/img/unten2.svg"
        alt="jicfnqovnnc"
      />
    </section>
  );
};

export default Loadingscreen;
