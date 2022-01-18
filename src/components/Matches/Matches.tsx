import React, { useEffect, useState } from "react";
import styles from "./matches.module.css";
import DateBar from "../generic/DateBar/DateBar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { matchesSelector } from "../../store/selectors/selectors";
import { getMatches } from "../../store/Slices/matchesSlice";
import { useNavigate, useParams } from "react-router-dom";
import { dateParser } from "../../helpers/DateParser";
import Loader from "../generic/Loader/Loader";

const Matches = () => {
  const dispatch = useAppDispatch();
  const { competitionId, dateFrom, dateTo } = useParams();
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const matches = useAppSelector(matchesSelector);
  const dateToRed = useAppSelector((state) => state.date.dateTo);
  const dateFromRed = useAppSelector((state) => state.date.dateFrom);
  const loading = useAppSelector((state) => state.matches.loading);
  const error = useAppSelector((state) => state.matches.error);

  useEffect(() => {
    if (competitionId) {
      dispatch(getMatches({ competitionId, dateFrom, dateTo }));
    }
  }, []);

  const onClickMore = () => {
    setLimit((prev) => prev + 10);
  };

  return (
    <section className={styles.matches}>
      <DateBar competitionId={competitionId} />
      {loading === "loading" ? (
        <Loader />
      ) : (
        <div className={styles.matches__wrapper}>
          <div className={styles.matches__head}>
            <span>Date</span>
            <span>Home</span>
            <span></span>
            <span>Guest</span>
            <span>Status</span>
            <span>Score</span>
          </div>
          <ul className={styles.matches__list}>
            {matches.length !== 0 ? (
              matches.slice(0, limit).map((match) => (
                <li key={match.id} className={styles.matches__item}>
                  <span>{dateParser(match.utcDate)}</span>
                  <span>{match.homeTeam.name}</span>
                  <span>|</span>
                  <span>{match.awayTeam.name}</span>
                  <span>{match.status}</span>
                  <span>
                    {match.score.fullTime.homeTeam} :{" "}
                    {match.score.fullTime.awayTeam}
                  </span>
                </li>
              ))
            ) : (
              <h2>{error}</h2>
            )}
          </ul>
          <button onClick={onClickMore}>More</button>
        </div>
      )}
    </section>
  );
};

export default Matches;
