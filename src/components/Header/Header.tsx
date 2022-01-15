import { FC } from "react";
import styles from "./header.module.css";
import Navbar from "./NavBar/Navbar";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__link}>
          <img className={styles.header__logo} src="/img/ball.svg" alt="logo" />
          <h1 className={styles.header__title}>SoccerStat</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
