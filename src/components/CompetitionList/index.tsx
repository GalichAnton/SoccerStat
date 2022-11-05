import { useEffect } from "react";

import Competition from "@components/Competition";
import Loader from "@components/Generic/Loader";
import SearchBar from "@components/Generic/SearchBar";
import { fadeInUp, stagger } from "@helpers/animation";
import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks";
import { useFilterToUrl } from "@hooks/useFilterToUrl";
import { filteredCompetitionSelector } from "@store/selectors/selectors";
import { getCompetitions } from "@store/slices/competitionSlice";
import { motion } from "framer-motion";

import styles from "./competitionList.module.css";

const CompetitionList = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.competitions.loading);
  const error = useAppSelector((state) => state.competitions.error);
  const competitions = useAppSelector(filteredCompetitionSelector);

  useFilterToUrl();

  useEffect(() => {
    dispatch(getCompetitions("TIER_ONE"));
  }, []);

  return (
    <section className={styles.competitionList}>
      {loading === "loading" ? (
        <Loader />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <SearchBar />
          {!competitions.length ? (
            <h1>Competitions with these name not found</h1>
          ) : (
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
                    <Competition competition={competition} />
                  </motion.div>
                ))}
              </ul>
            </motion.div>
          )}
        </>
      )}
    </section>
  );
};

export default CompetitionList;
