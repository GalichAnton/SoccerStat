import { FC } from "react";

import competition from "@mobx/CompetitionsStore";
import teams from "@mobx/TeamStore";
import { observer } from "mobx-react-lite";
import { Link, useLocation, useParams } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import styles from "./header.module.css";
const Header: FC = observer(() => {
  const { competitionId, teamId } = useParams();
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__link}>
          <img className={styles.header__logo} src={logo} alt="logo" />
          <h1 className={styles.header__title}>
            {competition.getCurrentcompetition(+competitionId!)?.name ||
              teams.getCurrentteam(+teamId!)?.name ||
              "Soccer Stat"}
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
});

export default Header;
