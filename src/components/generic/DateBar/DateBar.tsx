import React, { ChangeEvent, FC, SyntheticEvent } from "react";
import styles from "./dateBar.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { dateActions } from "../../../store/Slices/dateSlice";
import { useNavigate } from "react-router-dom";
interface IProps {
  instanseType?: string;
  instanseId?: string;
}
const DateBar: FC<IProps> = ({ instanseType, instanseId }) => {
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

  const filterByDate = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (new Date(dateFrom) <= new Date(dateTo)) {
      navigate(`/${instanseType}/${instanseId}/matches/${dateFrom}/${dateTo}`);
    } else {
      alert("Incorrect date");
    }
  };
  return (
    <form className={styles.dateBar}>
      <div className={styles.dateBar__inputContainer}>
        <label className={styles.dateBar__label}>From</label>
        <input
          onChange={onChangeDateFrom}
          className={styles.dateBar__input}
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          value={dateFrom}
        />
      </div>
      <div className={styles.dateBar__inputContainer}>
        <label className={styles.dateBar__label}>To</label>
        <input
          onChange={onChangeDateTo}
          className={styles.dateBar__input}
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          value={dateTo}
        />
      </div>
      <button onClick={(e) => filterByDate(e)} className={styles.dateBar__btn}>
        Filter
      </button>
    </form>
  );
};

export default DateBar;
