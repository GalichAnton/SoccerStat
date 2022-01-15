import React, { ChangeEvent, FC, useState } from "react";
import styles from "./searchBar.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { searchActions } from "../../../store/Slices/searchSlice";
import { searchSelector } from "../../../store/selectors/selectors";
const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(searchSelector);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.setSearchTerm(e.currentTarget.value));
  };
  return (
    <form className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchBar__input}
        placeholder="Search"
        value={searchTerm}
        onChange={onChangeHandler}
      />
      <button className={styles.searchBar__button}>Найти</button>
    </form>
  );
};

export default SearchBar;
