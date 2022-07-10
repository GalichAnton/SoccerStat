import React, { ChangeEvent, FC, SyntheticEvent } from "react";

import date from "@mobx/DateStore";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";

import styles from "./dateBar.module.css";
interface IProps {
  instanseType?: string;
  instanseId?: string;
}
const DateBar: FC<IProps> = observer(() => {
  const [, setSearchParams] = useSearchParams();
  const onChangeDateTo = (e: ChangeEvent<HTMLInputElement>) => {
    date.setDateTo(e.currentTarget.value);
  };
  const onChangeDateFrom = (e: ChangeEvent<HTMLInputElement>) => {
    date.setDateFrom(e.currentTarget.value);
  };

  const filterByDate = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (new Date(date.dateFrom) <= new Date(date.dateTo)) {
      setSearchParams({ dateFrom: date.dateFrom, dateTo: date.dateTo });
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
          value={date.dateFrom}
        />
      </div>
      <div className={styles.dateBar__inputContainer}>
        <label className={styles.dateBar__label}>To</label>
        <input
          onChange={onChangeDateTo}
          className={styles.dateBar__input}
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          value={date.dateTo}
        />
      </div>
      <button onClick={(e) => filterByDate(e)} className={styles.dateBar__btn}>
        Filter
      </button>
    </form>
  );
});

export default DateBar;
