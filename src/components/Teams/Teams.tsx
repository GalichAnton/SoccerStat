import React, { useEffect } from "react";

import searchFilter from "@mobx/SearchStore";
import teams from "@mobx/TeamStore";
import { observer } from "mobx-react-lite";
import { Link, useParams, useSearchParams } from "react-router-dom";

import SearchBar from "../generic/SearchBar/SearchBar";
import styles from "./teams.module.css";

const Teams = observer(() => {
  const { competitionId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (competitionId) {
      teams.fetchTeams(competitionId);
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
    <section className={styles.teams}>
      <div>
        <SearchBar />
        <div className={styles.teams__head}>
          <h2>Teams</h2>
          <h2>Tag</h2>
          <h2>Founded</h2>
        </div>
        <ul className={styles.teams__list}>
          {teams.teams.map((team) => (
            <li key={team.id} className={styles.teams__item}>
              <Link to={`/teams/${team.id}/matches`}>
                <div className={styles.teams__team}>
                  <img
                    className={styles.teams__logo}
                    src={team.crestUrl}
                    alt="logo"
                  />
                  <span>{team.name}</span>
                </div>
              </Link>
              <span className={styles.teams__info}>
                {team.tla ? team.tla : team.name}
              </span>
              <span className={styles.teams__info}>{team.founded}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default Teams;
