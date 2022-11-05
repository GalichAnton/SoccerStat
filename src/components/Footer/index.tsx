import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <span>Copyright &copy;</span>
        <span>
          Created by{" "}
          <a
            className={styles.footer__link}
            href="https://github.com/GalichAnton"
            target="_blank"
            rel="noreferrer"
          >
            Anton Galich
          </a>
        </span>
        <div className={styles.footer__text}>
          <p>API</p>
          <a
            className={styles.footer__link}
            href="https://www.football-data.org/"
            target="_blank"
            rel="noreferrer"
          >
            Football-Data.org
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
