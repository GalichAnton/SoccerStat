import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getCompetitions } from "../../store/Slices/competitionSlice";
import styles from "./competitionList.module.css";
import Comptetition from "../Competition/Competition";
import { filteredCompetitionSelector } from "../../store/selectors/selectors";
const CompetitionList = () => {
  const dispatch = useAppDispatch();
  const competitions = useAppSelector(filteredCompetitionSelector);
  useEffect(() => {
    dispatch(getCompetitions("TIER_ONE"));
  }, []);
  return (
    <section className={styles.competitionList}>
      <ul className={styles.competitionList__wrapper}>
        {competitions.map((competition) => (
          <Comptetition key={competition.id} competition={competition} />
        ))}
      </ul>
    </section>
  );
};

export default CompetitionList;
