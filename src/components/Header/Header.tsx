import { FC } from "react";

import { Link, useLocation, useParams } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import { useAppSelector } from "../../hooks/redux-hooks";
import styles from "./header.module.css";
const Header: FC = () => {
  const { competitionId, teamId } = useParams();
  const { pathname } = useLocation();
  const currentCompetition = useAppSelector((state) =>
    state.competitions.competitions.find(
      (competition) => competition.id === Number(competitionId)
    )
  );

  const currentTeam = useAppSelector((state) =>
    state.teams.teams.find((team) => team.id === Number(teamId))
  );
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__link}>
          <img className={styles.header__logo} src={logo} alt="logo" />
          <h1 className={styles.header__title}>
            {currentCompetition?.name || currentTeam?.name || "Soccer Stat"}
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
