import { FC } from "react";

import logo from "@assets/img/logo.png";
import { useAppSelector } from "@hooks/redux-hooks";
import {
  competitionByIdSelector,
  teamByIdSelector,
} from "@store/selectors/selectors";
import { Link, useLocation, useParams } from "react-router-dom";

import styles from "./header.module.css";
const Header: FC = () => {
  const { competitionId, teamId } = useParams();
  const { pathname } = useLocation();

  const competition = useAppSelector(
    competitionByIdSelector(Number(competitionId))
  );
  const team = useAppSelector(teamByIdSelector(Number(teamId)));

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__link}>
          <img className={styles.header__logo} src={logo} alt="logo" />
          <h1 className={styles.header__title}>
            {competition?.name || team?.name || "Soccer Stat"}
          </h1>
        </div>

        {pathname !== "/" ? (
          <Link to={"/"} className={styles.header__linkBox}>
            {" "}
            Back{" "}
          </Link>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
