import { FC } from "react";

import { Link, NavLink } from "react-router-dom";

import ball from "../../assets/img/ball.svg";
import { competitionType } from "../../http/ResponseTypes/competitionResponseType";
import styles from "./competition.module.css";
interface IProps {
  competition: competitionType;
}

export const Comptetition: FC<IProps> = ({ competition }) => {
  return (
    <li className={styles.competitionlist__item}>
      <NavLink
        className={styles.competitionlist__link}
        to={`competitions/${competition.id}/teams`}
      >
        <img
          className={styles.competitionlist__itemImg}
          src={competition.emblemUrl ? competition.emblemUrl : `${ball}`}
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
          to={`/competitions/${competition.id}/schedule/`}
        >
          Schedule
        </Link>
      </div>
    </li>
  );
};

export default Comptetition;
