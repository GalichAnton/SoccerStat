import React, { FC } from "react";

import Footer from "@components/Footer";
import Header from "@components/Header";

import styles from "./mainLayout.module.css";

const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
