import { Link, NavLink } from "react-router-dom";
import { competitionType } from "../../http/ResponseTypes/competitionResponseType";
import { FC } from "react";
import styles from "./competition.module.css";
import { useAppSelector } from "../../hooks/redux-hooks";
interface IProps {
  competition: competitionType;
}

export const Comptetition: FC<IProps> = ({ competition }) => {
  const url = process.env.REACT_APP_PUBLIC_URL || "http://localhost:3000";
  return (
    <li className={styles.competitionlist__item}>
      <NavLink
        className={styles.competitionlist__link}
        to={`${competition.id}/teams`}
      >
        <img
          className={styles.competitionlist__itemImg}
          src={
            competition.emblemUrl
              ? competition.emblemUrl
              : `${url}/img/ball.svg`
          }
          alt="item"
        />
      </NavLink>
      <p className={styles.competitionlist__itemName}>{competition.name}</p>
      <p>{competition.area.name}</p>
      <div className={styles.competition__links}>
        <Link
          className={styles.competition__link}
          to={`/competitions/${competition.id}/matches/`}
        >
          Matches
        </Link>
        <Link
          className={styles.competition__link}
          to={`/competitions/${competition.id}/schedule`}
        >
          Schedule
        </Link>
      </div>
    </li>
  );
};

export default Comptetition;
