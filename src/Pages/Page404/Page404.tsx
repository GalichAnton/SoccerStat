import React from "react";
import styles from "./page404.module.css";
import { Link } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import errorGif from "../../assets/img/error.gif";
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
