import styles from "./Profile.module.css";
import { ThemeContext } from "../context/Context";
import { useContext } from "react";

const Profile = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={`${styles.profile} ${theme ? styles.dark : ""}`}>
        <h1>Profil</h1>
        <section className={`${styles.flexcontainer}`}>
          <img src="../img/profile.png" alt="Profilbild" />
          <article>
            <h4>Name:</h4>
            <p>Max Mustermann</p>
            <h4>Username:</h4>
            <p>MaxTasty123</p>
          </article>
        </section>
        <div className={`${styles.inputcontainer}`}>
          <label htmlFor="input">Das esse ich am liebsten:</label>
          <input className={`${styles.input}`} type="text" name="input" />
        </div>

        <div className={`${styles.icon}`}>
          <a target="_blank" href="https://icons8.com/icon/107049/konto-testen">
            Profilbild
          </a>
          <p> Icon von </p>
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </div>
        {children}
      </main>
    </>
  );
};

export default Profile;
