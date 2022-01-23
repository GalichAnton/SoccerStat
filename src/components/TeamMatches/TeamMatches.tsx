import React, { useEffect, useState } from "react";
import styles from "./teamMatches.module.css";
import DateBar from "../generic/DateBar/DateBar";
import Loader from "../generic/Loader/Loader";
import { dateParser } from "../../helpers/DateParser";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useParams, useSearchParams } from "react-router-dom";
import { getTeamMatches } from "../../store/Slices/teamMatchesSlice";
import Match from "../Match/Match";
const TeamteamMatches = () => {
  const dispatch = useAppDispatch();
  const { teamId } = useParams();
  const [limit, setLimit] = useState(10);
  const teamMatches = useAppSelector((state) => state.teamMatches.matches);
  const loading = useAppSelector((state) => state.teamMatches.loading);
  const error = useAppSelector((state) => state.teamMatches.error);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");
    if (teamId) {
      dispatch(getTeamMatches({ teamId, dateFrom, dateTo }));
    }
  }, [searchParams]);

  const onClickMore = () => {
    setLimit((prev) => prev + 10);
  };
  return (
    <section className={styles.teamMatches}>
      <DateBar instanseId={teamId} instanseType={"teams"} />
      {loading === "loading" ? (
        <Loader />
      ) : teamMatches.length ? (
        <div>
          <div className={styles.teamMatches__head}>
            <span>Date</span>
            <span>Home</span>
            <span></span>
            <span>Guest</span>
            <span className={styles.teamMatches__status}>Status</span>
            <span>Score</span>
          </div>
          <ul className={styles.teamMatches__list}>
            {teamMatches.slice(0, limit).map((match) => (
              <Match key={match.id} match={match} teamId={teamId} />
            ))}
          </ul>
          {teamMatches.length > limit && (
            <button
              className={styles.teamMatches__button}
              onClick={onClickMore}
            >
              More
            </button>
          )}
        </div>
      ) : (
        "Sorry there is no information on this team for this date ;("
      )}
    </section>
  );
};

export default TeamteamMatches;
