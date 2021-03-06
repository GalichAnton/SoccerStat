import React, { useEffect } from "react";
import styles from "./teams.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getTeams } from "../../store/Slices/teamsSlice";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  filteredTeamsSelector,
  searchSelector,
} from "../../store/selectors/selectors";
import { searchActions } from "../../store/Slices/searchSlice";
import SearchBar from "../generic/SearchBar/SearchBar";
const Teams = () => {
  const { competitionId } = useParams();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(searchSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const teams = useAppSelector(filteredTeamsSelector);
  useEffect(() => {
    if (competitionId) {
      dispatch(getTeams(competitionId));
    }
    const filter = searchParams.get("filter");
    filter && dispatch(searchActions.setFilter(filter));
  }, []);
  useEffect(() => {
    if (filter) {
      setSearchParams({ filter });
    } else setSearchParams({});
  }, [filter]);
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
          {teams.map((team) => (
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
};

export default Teams;
