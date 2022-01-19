import { FC } from "react";
import styles from "./header.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";
import logo from "../../assets/img/logo.png";
const Header: FC = () => {
  const { competitionId, teamId } = useParams();
  const { pathname } = useLocation();
  const competition = useAppSelector((state) =>
    state.competitions.competitions.find(
      (competition) => competition.id === Number(competitionId)
    )
  );

  const team = useAppSelector((state) =>
    state.teams.teams.find((team) => team.id === Number(teamId))
  );
  console.log(pathname);
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__link}>
          <img className={styles.header__logo} src={logo} alt="logo" />
          <h1 className={styles.header__title}>
            {competition?.name || team?.name || "Soccer Stat"}
          </h1>
        </div>

        {pathname !== "/competitions/" ? (
          <Link to={"/competitions"} className={styles.header__linkBox}>
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
