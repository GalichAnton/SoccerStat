import { FC } from "react";
import styles from "./header.module.css";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";
import logo from "../../assets/img/logo.png";
const Header: FC = () => {
  const { competitionId, teamId } = useParams();
  const competition = useAppSelector((state) =>
    state.competitions.competitions.find(
      (competition) => competition.id === Number(competitionId)
    )
  );

  const team = useAppSelector((state) =>
    state.teams.teams.find((team) => team.id === Number(teamId))
  );

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link to={"/competitions"} className={styles.header__linkBox}>
          <div className={styles.header__link}>
            <img className={styles.header__logo} src={logo} alt="logo" />
            <h1 className={styles.header__title}>
              {competition?.name || team?.name || "Soccer Stat"}
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
