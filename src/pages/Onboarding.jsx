import { Link } from "react-router-dom";
import Home from "./Home";
import style from "../pages/Onboarding.module.css";
import onboarding from "/img/onboarding.png";

const Onboarding = () => {
  return (
    <section className={`${style.onboarding}`}>
      <img className={`${style.img}`} src={onboarding} alt="food" />
      <article className={`${style.started}`}>
        <h1>All recipe you needed</h1>
        <p>5000+ healthy recipes made by people for your healthy life</p>
        <Link to="/home">Get Started</Link>
      </article>
    </section>
  );
};

export default Onboarding;
