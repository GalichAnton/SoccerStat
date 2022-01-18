import React, { useEffect } from "react";
import styles from "./schedule.module.css";
import Loader from "../generic/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getSchedule } from "../../store/Slices/scheduleSlice";
import { useParams } from "react-router-dom";
import { tableSelector } from "../../store/selectors/selectors";
const Schedule = () => {
  const { competitionId } = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.schedule.loading);
  const error = useAppSelector((state) => state.schedule.error);
  const schedule = useAppSelector(tableSelector);
  useEffect(() => {
    if (competitionId) {
      dispatch(getSchedule(competitionId));
    }
  }, []);
  return (
    <section className={styles.schedule}>
      {loading === "loading" ? (
        <Loader />
      ) : (
        <div className={styles.schedule__wrapper}>
          <div className={styles.schedule__head}>
            <span>№</span>
            <span>Team</span>
            <span>M</span>
            <span>W</span>
            <span>T</span>
            <span>L</span>
            <span>P</span>
          </div>
          <ul className={styles.schedule__list}>
            {schedule?.table?.length !== 0 ? (
              schedule?.table?.map((item, i) => (
                <li key={i} className={styles.schedule__item}>
                  <span>{item.position}</span>
                  <div className={styles.schedule__teamItem}>
                    <img
                      src={item.team.crestUrl}
                      alt="teamLogo"
                      className={styles.schedule__teamLogo}
                    />
                    <span>{item.team.name}</span>
                  </div>
                  <span>{item.playedGames}</span>
                  <span>{item.won}</span>
                  <span>{item.draw}</span>
                  <span>{item.lost}</span>
                  <span>{item.points}</span>
                </li>
              ))
            ) : (
              <h2>{error}</h2>
            )}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Schedule;
