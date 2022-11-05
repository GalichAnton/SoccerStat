import { FC } from "react";

import ball from "@assets/img/ball.svg";
import { ICompetition } from "@interfaces/competition";
import { Link, NavLink } from "react-router-dom";

import styles from "./competition.module.css";

interface IProps {
  competition: ICompetition;
}

export const Competition: FC<IProps> = ({ competition }) => {
  return (
    <li className={styles.competitionList__item}>
      <NavLink
        className={styles.competitionList__link}
        to={`competitions/${competition.id}/teams`}
      >
        <img
          className={styles.competitionList__itemImg}
          src={competition.emblemUrl ? competition.emblemUrl : `${ball}`}
          alt="item"
        />
      </NavLink>
      <p className={styles.competitionList__itemName}>{competition.name}</p>
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

export default Competition;
