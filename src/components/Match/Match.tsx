import React, { FC } from "react";

import { dateParser } from "../../helpers/DateParser";
import { matchType } from "../../http/ResponseTypes/matchesResponseType";
import styles from "./match.module.css";
interface IProps {
  match: matchType;
  teamId?: string;
}
const Match: FC<IProps> = ({ match, teamId }) => {
  return (
    <li key={match.id} className={styles.match__item}>
      <span>{dateParser(match.utcDate)}</span>
      <span
        className={
          Number(teamId) === match.homeTeam.id ? styles.match__selectedTeam : ""
        }
      >
        {match.homeTeam.name}
      </span>
      <span>|</span>
      <span
        className={
          Number(teamId) === match.awayTeam.id ? styles.match__selectedTeam : ""
        }
      >
        {match.awayTeam.name}
      </span>
      <span className={styles.match__status}>{match.status}</span>
      <span>
        {match.score.fullTime.homeTeam} : {match.score.fullTime.awayTeam}
      </span>
    </li>
  );
};

export default Match;
