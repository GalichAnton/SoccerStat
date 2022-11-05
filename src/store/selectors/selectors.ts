import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const searchSelector = (state: RootState) => state.search.filter;
export const competitionsSelector = (state: RootState) =>
  state.competitions.competitions;
export const teamsSelector = (state: RootState) => state.teams.teams;
export const matchesSelector = (state: RootState) => state.matches.matches;
export const tableSelector = (state: RootState) =>
  state.schedule.schedule.table;
export const filteredCompetitionSelector = createSelector(
  [searchSelector, competitionsSelector],
  (filter, competitions) => {
    return competitions.filter((competition) =>
      competition.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const filteredTeamsSelector = createSelector(
  [searchSelector, teamsSelector],
  (filter, teams) => {
    return teams.filter((team) =>
      team.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const filteredTableTeamsSelector = createSelector(
  [searchSelector, tableSelector],
  (filter, table) => {
    return table?.filter((item) =>
      item.team.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const competitionByIdSelector = (id: number) => {
  return createSelector([competitionsSelector], (competitions) => {
    return competitions.find((competition) => competition.id === id);
  });
};

export const teamByIdSelector = (id: number) => {
  return createSelector([teamsSelector], (teams) => {
    return teams.find((team) => team.id === id);
  });
};
