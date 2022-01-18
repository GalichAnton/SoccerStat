import { useEffect } from "react";
import { motion } from "framer-motion";
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
import { fadeInUp, stagger } from "../../animation";

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
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="relative grid grid-cols-12 gap-4 my-3"
          >
            <ul className={styles.competitionList__wrapper}>
              {competitions.map((competition) => (
                <motion.div
                  variants={fadeInUp}
                  key={competition.id}
                  className="col-span-12 p-2 bg-gray-500 rounded-lg dark:bg-black-200 sm:col-span-6 lg:col-span-4"
                >
                  <Comptetition competition={competition} />
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default CompetitionList;
