import { useEffect } from "react";

import competitions from "@mobx/CompetitionsStore";
import searchFilter from "@mobx/SearchStore";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";

import { fadeInUp, stagger } from "../../animation";
import Comptetition from "../Competition/Competition";
import Loader from "../generic/Loader/Loader";
import SearchBar from "../generic/SearchBar/SearchBar";
import styles from "./competitionList.module.css";

const CompetitionList = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filterParam = searchParams.get("filter");
    competitions.fetchCompetitions("TIER_ONE");
    if (filterParam) searchFilter.setFilter(filterParam);
  }, []);

  useEffect(() => {
    if (searchFilter.filter) {
      setSearchParams({ filter: searchFilter.filter });
    } else setSearchParams({});
  }, [searchFilter.filter]);
  return (
    <section className={styles.competitionList}>
      {competitions.loading === "loading" ? (
        <Loader />
      ) : competitions.error ? (
        <h1>{competitions.error}</h1>
      ) : (
        <>
          <SearchBar />
          {!competitions.filteredCompetitions.length ? (
            <h1>Competitions with these name not found</h1>
          ) : (
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="relative grid grid-cols-12 gap-4 my-3"
            >
              <ul className={styles.competitionList__wrapper}>
                {competitions.filteredCompetitions.map((competition) => (
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
          )}
        </>
      )}
    </section>
  );
});

export default CompetitionList;
