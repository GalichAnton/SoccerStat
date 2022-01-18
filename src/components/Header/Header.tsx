import { FC } from "react";
import styles from "./header.module.css";
import Navbar from "./NavBar/Navbar";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Navbar />
        <div className={styles.header__link}>
          <img className={styles.header__logo} src="/img/logo.png" alt="logo" />
          <h1 className={styles.header__title}>Soccer Stat</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
