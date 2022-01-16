import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const searchSelector = (state: RootState) => state.search.searchTerm;
export const competitionsSelector = (state: RootState) =>
  state.competitions.competitions;
export const teamsSelector = (state: RootState) => state.teams.teams;
export const matchesSelector = (state: RootState) => state.matches.matches;
export const filteredCompetitionSelector = createSelector(
  [searchSelector, competitionsSelector],
  (searchTerm, competitions) => {
    return competitions.filter((competition) =>
      competition.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

export const filteredTeamsSelector = createSelector(
  [searchSelector, teamsSelector],
  (searchTerm, teams) => {
    return teams.filter((team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);
