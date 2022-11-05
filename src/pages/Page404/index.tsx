import React from "react";

import errorGif from "@assets/img/error.gif";
import MainLayout from "@pages/MainLayout";
import { Link } from "react-router-dom";

import styles from "./page404.module.css";

const Page404 = () => {
  return (
    <MainLayout>
      <section>
        <div className={styles.page404__wrapper}>
          <p className={styles.page404__descr}>Error 404 page not found</p>
          <img src={errorGif} alt="error" className={styles.page404__img} />
          <Link to={"/"} className={styles.page404__link}>
            To Main
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Page404;
