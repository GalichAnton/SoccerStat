import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getCompetitions } from "../../store/Slices/competitionSlice";
import styles from "./competitionList.module.css";
import Comptetition from "../Competition/Competition";
import {
  filteredCompetitionSelector,
  searchSelector,
} from "../../store/selectors/selectors";
import { Link, useNavigate, useParams } from "react-router-dom";
import { searchActions } from "../../store/Slices/searchSlice";
import SearchBar from "../generic/SearchBar/SearchBar";
import Loader from "../generic/Loader/Loader";

const CompetitionList = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.competitions.loading);
  const error = useAppSelector((state) => state.competitions.error);
  const competitions = useAppSelector(filteredCompetitionSelector);
  const searchTerm = useAppSelector(searchSelector);
  const navigate = useNavigate();
  const { filter } = useParams();
  useEffect(() => {
    dispatch(getCompetitions("TIER_ONE"));
    filter && dispatch(searchActions.setSearchTerm(filter));
  }, []);
  useEffect(() => {
    navigate(`/competitions/${searchTerm}`);
  }, [searchTerm]);
  return (
    <section className={styles.competitionList}>
      {loading === "loading" ? (
        <Loader />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <SearchBar />
          <ul className={styles.competitionList__wrapper}>
            {competitions.map((competition) => (
              <Comptetition key={competition.id} competition={competition} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default CompetitionList;
