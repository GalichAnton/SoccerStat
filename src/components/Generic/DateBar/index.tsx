import React, { ChangeEvent, SyntheticEvent } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks";
import { dateActions } from "@store/slices/dateSlice";
import { useSearchParams } from "react-router-dom";

import styles from "./dateBar.module.css";

const DateBar = () => {
  const dispatch = useAppDispatch();
  const dateTo = useAppSelector((state) => state.date.dateTo);
  const dateFrom = useAppSelector((state) => state.date.dateFrom);
  const [, setSearchParams] = useSearchParams();
  const onChangeDateTo = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(dateActions.setDateTo(e.currentTarget.value));
  };
  const onChangeDateFrom = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(dateActions.setDateFrom(e.currentTarget.value));
  };

  const filterByDate = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (new Date(dateFrom) <= new Date(dateTo)) {
      setSearchParams({ dateFrom, dateTo });
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
