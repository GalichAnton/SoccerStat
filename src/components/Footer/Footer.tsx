import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <h2 className={styles.footer__title}>Copyright &copy;</h2>
        <p className={styles.footer__text}>
          Football data provided by the
          <a
            className={styles.footer__link}
            href="https://www.football-data.org/"
            target="_blank"
            rel="noreferrer"
          >
            Football-Data.org
          </a>
          API
        </p>
      </div>
    </footer>
  );
};

export default Footer;
