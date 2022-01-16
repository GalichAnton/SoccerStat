import React, { useEffect } from "react";
import styles from "./teams.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getTeams } from "../../store/Slices/teamsSlice";
import { useParams } from "react-router-dom";
const Teams = () => {
  const { competitionId } = useParams();
  const dispatch = useAppDispatch();
  const teams = useAppSelector((state) => state.teams.teams);
  useEffect(() => {
    if (competitionId) {
      dispatch(getTeams(competitionId));
    }
  }, []);
  return (
    <section className={styles.teams}>
      <div className={styles.teams__wrapper}>
        <div className={styles.teams__head}>
          <h2 className={styles.teams__title}>Teams</h2>
          <h2 className={styles.teams__title}>Tag Name</h2>
          <h2 className={styles.teams__title}>Founded</h2>
        </div>
        <ul className={styles.teams__list}>
          {teams.map((team) => (
            <li key={team.id} className={styles.teams__item}>
              <div className={styles.teams__team}>
                <img
                  className={styles.teams__logo}
                  src={team.crestUrl}
                  alt="logo"
                />
                <span className={styles.teams__name}>{team.name}</span>
              </div>
              <span className={styles.teams__tag}>{team.shortName}</span>
              <span className={styles.teams__date}>{team.founded}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Teams;
