import React, { useEffect } from "react";

import Error from "@components/Generic/Error";
import Loader from "@components/Generic/Loader";
import SearchBar from "@components/Generic/SearchBar";
import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks";
import { useFilterToUrl } from "@hooks/useFilterToUrl";
import { filteredTableTeamsSelector } from "@store/selectors/selectors";
import { getSchedule } from "@store/slices/scheduleSlice";
import { Link, useParams } from "react-router-dom";

import styles from "./schedule.module.css";

const Schedule = () => {
  const { competitionId } = useParams();
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.schedule.loading);
  const error = useAppSelector((state) => state.schedule.error);
  const table = useAppSelector(filteredTableTeamsSelector);

  useFilterToUrl();

  useEffect(() => {
    if (competitionId) {
      dispatch(getSchedule(competitionId));
    }
  }, [competitionId]);

  return (
    <section className={styles.schedule}>
      {loading === "loading" ? (
        <Loader />
      ) : (
        <div>
          {error ? (
            <Error>{error}</Error>
          ) : (
            <>
              <SearchBar />
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
                {table?.map((item) => (
                  <Link
                    key={item.team.id}
                    to={`/teams/${item.team.id}/matches`}
                  >
                    <li className={styles.schedule__item}>
                      <span>{item.position}</span>
                      <div className={styles.schedule__teamItem}>
                        <img
                          src={item.team.crestUrl}
                          alt="teamLogo"
                          className={styles.schedule__teamLogo}
                        />
                        <span>{item.team.name}</span>
                      </div>

                      <span className={styles.schedule__info}>
                        {item.playedGames}
                      </span>
                      <span className={styles.schedule__info}>{item.won}</span>
                      <span className={styles.schedule__info}>{item.draw}</span>
                      <span className={styles.schedule__info}>{item.lost}</span>
                      <span className={styles.schedule__info}>
                        {item.points}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Schedule;
