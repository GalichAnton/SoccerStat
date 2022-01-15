import { NavLink } from "react-router-dom";
import { competitionType } from "../../http/ResponseTypes/competitionResponseType";
import { FC } from "react";
import styles from "./competition.module.css";
interface IProps {
  competition: competitionType;
}

export const Comptetition: FC<IProps> = ({ competition }) => {
  const url = process.env.REACT_APP_PUBLIC_URL || "http://localhost:3000";
  return (
    <NavLink
      className={styles.competitionlist__link}
      to={`/competitions/${competition.id}/teams`}
    >
      <li className={styles.competitionlist__item}>
        <img
          className={styles.competitionlist__itemImg}
          src={`${url}/images/${competition.id}.png`}
          alt="item"
        />

        <p className={styles.competitionlist__itemName}>{competition.name}</p>
        <p className={styles.competitionlist__itemCountry}>
          {competition.area.name}
        </p>
      </li>
    </NavLink>
  );
};

export default Comptetition;
