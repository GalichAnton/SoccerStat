import React, { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./navBar.module.css";
const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbar__link} to="/">
        Main
      </Link>
      <NavLink className={styles.navbar__link} to={"/#"}>
        Teams
      </NavLink>
      <NavLink className={styles.navbar__link} to={"/#"}>
        Score
      </NavLink>
      <NavLink className={styles.navbar__link} to={"/#"}>
        Matches
      </NavLink>
    </nav>
  );
};

export default Navbar;
