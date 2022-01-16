import React, { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./mainLayout.module.css";
import SearchBar from "../../components/generic/SearchBar/SearchBar";
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
