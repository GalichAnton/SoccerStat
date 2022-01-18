import React, { useEffect } from "react";
import styles from "./schedule.module.css";
import Loader from "../generic/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getSchedule } from "../../store/Slices/scheduleSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  filteredTableTeamsSelector,
  searchSelector,
} from "../../store/selectors/selectors";
import SearchBar from "../generic/SearchBar/SearchBar";
import { searchActions } from "../../store/Slices/searchSlice";
const Schedule = () => {
  const { competitionId, filter } = useParams();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(searchSelector);
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.schedule.loading);
  const error = useAppSelector((state) => state.schedule.error);
  const table = useAppSelector(filteredTableTeamsSelector);
  useEffect(() => {
    if (competitionId) {
      dispatch(getSchedule(competitionId));
    }
    filter && dispatch(searchActions.setSearchTerm(filter));
  }, []);
  useEffect(() => {
    if (searchTerm) {
      navigate(`${searchTerm}`);
    }
  }, [searchTerm]);
  return (
    <section className={styles.schedule}>
      <SearchBar />
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
          {error ? (
            <h1>{error}</h1>
          ) : (
            <ul className={styles.schedule__list}>
              {table?.map((item) => (
                <Link key={item.team.id} to={`/teams/${item.team.id}/matches`}>
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
                    <span className={styles.schedule__info}>{item.points}</span>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
};

export default Schedule;
