import React from "react";
import styles from "./dateBar.module.css";
const DateBar = () => {
  return (
    <form className={styles.dateBar}>
      <label className={styles.dateBar__label}>From</label>
      <input
        className={styles.dateBar__input}
        type="date"
        pattern="\d{4}-\d{2}-\d{2}"
      />
      <label className={styles.dateBar__label}>To</label>
      <input
        className={styles.dateBar__input}
        type="date"
        pattern="\d{4}-\d{2}-\d{2}"
      />
      <button className={styles.dateBar__btn}>Filter</button>
    </form>
  );
};

export default DateBar;
