import React, { ChangeEvent, FC } from "react";
import styles from "./dateBar.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { dateActions } from "../../../store/Slices/dateSlice";
import { getMatches } from "../../../store/Slices/matchesSlice";
import { useNavigate } from "react-router-dom";
interface IProps {
  competitionId?: string;
}
const DateBar: FC<IProps> = ({ competitionId }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dateTo = useAppSelector((state) => state.date.dateTo);
  const dateFrom = useAppSelector((state) => state.date.dateFrom);
  const onChangeDateTo = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(dateActions.setDateTo(e.currentTarget.value));
  };
  const onChangeDateFrom = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(dateActions.setDateFrom(e.currentTarget.value));
  };

  const filterByDate = () => {
    if (new Date(dateFrom) <= new Date(dateTo)) {
      navigate(`/competitions/${competitionId}/matches/${dateFrom}/${dateTo}`);
      dispatch(dateActions.setDateTo(""));
      dispatch(dateActions.setDateFrom(""));
    } else {
      alert("Incorrect date");
    }
  };
  return (
    <form className={styles.dateBar}>
      <label className={styles.dateBar__label}>From</label>
      <input
        onChange={onChangeDateFrom}
        className={styles.dateBar__input}
        type="date"
        pattern="\d{4}-\d{2}-\d{2}"
        value={dateFrom}
      />
      <label className={styles.dateBar__label}>To</label>
      <input
        onChange={onChangeDateTo}
        className={styles.dateBar__input}
        type="date"
        pattern="\d{4}-\d{2}-\d{2}"
        value={dateTo}
      />
      <button onClick={filterByDate} className={styles.dateBar__btn}>
        Filter
      </button>
    </form>
  );
};

export default DateBar;
