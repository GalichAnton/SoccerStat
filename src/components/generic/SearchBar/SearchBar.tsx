import React, { ChangeEvent, FC } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { searchSelector } from "../../../store/selectors/selectors";
import { searchActions } from "../../../store/Slices/searchSlice";
import styles from "./searchBar.module.css";
const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(searchSelector);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.setFilter(e.currentTarget.value));
  };

  return (
    <form className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchBar__input}
        placeholder="Search"
        value={filter}
        onChange={onChangeHandler}
      />
      <button className={styles.searchBar__button}>Найти</button>
    </form>
  );
};

export default SearchBar;
