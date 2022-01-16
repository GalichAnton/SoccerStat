import React, { useEffect } from "react";
import styles from "./teams.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getTeams } from "../../store/Slices/teamsSlice";
import { useNavigate, useParams } from "react-router-dom";
import {
  filteredTeamsSelector,
  searchSelector,
} from "../../store/selectors/selectors";
import { searchActions } from "../../store/Slices/searchSlice";
import SearchBar from "../generic/SearchBar/SearchBar";
const Teams = () => {
  const { competitionId, filter } = useParams();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(searchSelector);
  const navigate = useNavigate();
  const teams = useAppSelector(filteredTeamsSelector);
  useEffect(() => {
    if (competitionId) {
      dispatch(getTeams(competitionId));
    }
    filter && dispatch(searchActions.setSearchTerm(filter));
  }, []);
  useEffect(() => {
    if (searchTerm) {
      navigate(`/teams/${competitionId}/${searchTerm}`);
    }
  }, [searchTerm]);
  return (
    <section className={styles.teams}>
      <div className={styles.teams__wrapper}>
        <SearchBar />
        <div className={styles.teams__head}>
          <h2>Teams</h2>
          <h2>Tag Name</h2>
          <h2>Founded</h2>
        </div>
        <ul className={styles.teams__list}>
          {teams.map((team) => (
            <li key={team.id} className={styles.teams__item}>
              <div className={styles.teams__team}>
                <img
                  className={styles.teams__logo}
                  src={team.crestUrl}
                  alt="logo"
                />
                <span>{team.name}</span>
              </div>
              <span>{team.tla ? team.tla : team.name}</span>
              <span>{team.founded}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Teams;
