import { Link, NavLink } from "react-router-dom";
import { competitionType } from "../../http/ResponseTypes/competitionResponseType";
import { FC } from "react";
import styles from "./competition.module.css";
interface IProps {
  competition: competitionType;
}

export const Comptetition: FC<IProps> = ({ competition }) => {
  return (
    <li className={styles.competitionlist__item}>
      <NavLink
        className={styles.competitionlist__link}
        to={`/teams/${competition.id}`}
      >
        <img
          className={styles.competitionlist__itemImg}
          src={competition.emblemUrl ? competition.emblemUrl : "/img/ball.svg"}
          alt="item"
        />
      </NavLink>
      <p className={styles.competitionlist__itemName}>{competition.name}</p>
      <p>{competition.area.name}</p>
      <Link to={`/competitions/matches/${competition.id}`}>Matches</Link>
    </li>
  );
};

export default Comptetition;
