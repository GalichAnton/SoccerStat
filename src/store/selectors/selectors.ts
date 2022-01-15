import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const searchSelector = (state: RootState) => state.search.searchTerm;
export const competitionsSelector = (state: RootState) =>
  state.competitions.competitions;

export const filteredCompetitionSelector = createSelector(
  [searchSelector, competitionsSelector],
  (searchTerm, competitions) => {
    return competitions.filter((competition) =>
      competition.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);
