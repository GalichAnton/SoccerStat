import React, { useEffect } from "react";

import table from "@mobx/ScheduleStore";
import searchFilter from "@mobx/SearchStore";
import { observer } from "mobx-react-lite";
import { Link, useParams, useSearchParams } from "react-router-dom";

import Error from "../generic/Error/Error";
import Loader from "../generic/Loader/Loader";
import SearchBar from "../generic/SearchBar/SearchBar";
import styles from "./schedule.module.css";

const Schedule = observer(() => {
  const { competitionId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (competitionId) {
      table.fetchSchedule(competitionId);
    }
    const filterParam = searchParams.get("filter");
    if (filterParam) searchFilter.setFilter(filterParam);
  }, []);

  useEffect(() => {
    if (searchFilter.filter) {
      setSearchParams({ filter: searchFilter.filter });
    } else setSearchParams({});
  }, [searchFilter.filter]);

  return (
    <section className={styles.schedule}>
      {table.loading === "loading" ? (
        <Loader />
      ) : (
        <div>
          {table.error ? (
            <Error>{table.error}</Error>
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
                {table.schedule.table?.map((item) => (
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
});

export default Schedule;
