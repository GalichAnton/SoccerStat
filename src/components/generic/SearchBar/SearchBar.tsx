import React, { ChangeEvent, FC } from "react";

import searchFilter from "@mobx/SearchStore";
import { observer } from "mobx-react-lite";

import styles from "./searchBar.module.css";
const SearchBar: FC = observer(() => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchFilter.setFilter(e.currentTarget.value);
  };

  return (
    <form className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchBar__input}
        placeholder="Search"
        value={searchFilter.filter}
        onChange={onChangeHandler}
      />
      <button className={styles.searchBar__button}>Найти</button>
    </form>
  );
});

export default SearchBar;
