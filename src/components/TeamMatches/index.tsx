import React, { useEffect, useState } from "react";

import DateBar from "@components//Generic/DateBar";
import Loader from "@components/Generic/Loader";
import Match from "@components/Match";
import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks";
import { getTeamMatches } from "@store/slices/teamMatchesSlice";
import { useParams, useSearchParams } from "react-router-dom";

import styles from "./teamMatches.module.css";

const TeamMatches = () => {
  const dispatch = useAppDispatch();
  const { teamId } = useParams();
  const [limit, setLimit] = useState(10);
  const teamMatches = useAppSelector((state) => state.teamMatches.matches);
  const loading = useAppSelector((state) => state.teamMatches.loading);
  const [searchParams] = useSearchParams();

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
      <DateBar />
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

export default TeamMatches;
