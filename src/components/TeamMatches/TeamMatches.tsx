import React, { useEffect, useState } from "react";

import teamMatches from "@mobx/TeamMatchesStore";
import { observer } from "mobx-react-lite";
import { useParams, useSearchParams } from "react-router-dom";

import DateBar from "../generic/DateBar/DateBar";
import Loader from "../generic/Loader/Loader";
import Match from "../Match/Match";
import styles from "./teamMatches.module.css";

const TeamteamMatches = observer(() => {
  const { teamId } = useParams();
  const [limit, setLimit] = useState(10);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");
    if (teamId) {
      teamMatches.fetchTeamMatches({ teamId, dateFrom, dateTo });
    }
  }, [searchParams]);

  const onClickMore = () => {
    setLimit((prev) => prev + 10);
  };
  return (
    <section className={styles.teamMatches}>
      <DateBar instanseId={teamId} instanseType={"teams"} />
      {teamMatches.loading === "loading" ? (
        <Loader />
      ) : teamMatches.matches.length ? (
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
            {teamMatches.matches.slice(0, limit).map((match) => (
              <Match key={match.id} match={match} teamId={teamId} />
            ))}
          </ul>
          {teamMatches.matches.length > limit && (
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
});

export default TeamteamMatches;
