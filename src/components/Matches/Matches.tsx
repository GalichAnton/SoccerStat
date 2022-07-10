import React, { useEffect, useState } from "react";

import { useParams, useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { matchesSelector } from "../../store/selectors/selectors";
import { getMatches } from "../../store/Slices/matchesSlice";
import DateBar from "../generic/DateBar/DateBar";
import Error from "../generic/Error/Error";
import Loader from "../generic/Loader/Loader";
import Match from "../Match/Match";
import styles from "./matches.module.css";

const Matches = () => {
  const dispatch = useAppDispatch();
  const { competitionId } = useParams();
  const [limit, setLimit] = useState(10);
  const matches = useAppSelector(matchesSelector);
  const loading = useAppSelector((state) => state.matches.loading);
  const error = useAppSelector((state) => state.matches.error);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const dateFrom = searchParams.get("dateFrom")!;
    const dateTo = searchParams.get("dateTo")!;
    if (competitionId) {
      dispatch(getMatches({ competitionId, dateFrom, dateTo }));
    }
  }, [searchParams]);

  const onClickMore = () => {
    setLimit((prev) => prev + 10);
  };

  return (
    <section className={styles.matches}>
      {loading === "loading" ? (
        <Loader />
      ) : (
        <>
          <DateBar instanseId={competitionId} instanseType={"competitions"} />
          {matches.length !== 0 ? (
            <div>
              <div className={styles.matches__head}>
                <span>Date</span>
                <span>Home</span>
                <span></span>
                <span>Guest</span>
                <span>Status</span>
                <span>Score</span>
              </div>
              <ul className={styles.matches__list}>
                {matches.slice(0, limit).map((match) => (
                  <Match key={match.id} match={match} />
                ))}
              </ul>
              {limit < matches.length && (
                <button
                  className={styles.matches__button}
                  onClick={onClickMore}
                >
                  More
                </button>
              )}
            </div>
          ) : (
            <Error>{error || "No matches for this dates"}</Error>
          )}
        </>
      )}
    </section>
  );
};

export default Matches;
