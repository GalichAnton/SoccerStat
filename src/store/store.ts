import { configureStore } from "@reduxjs/toolkit";

import competitionReducer from "./Slices/competitionSlice";
import dateReducer from "./Slices/dateSlice";
import matchesReducer from "./Slices/matchesSlice";
import scheduleReducer from "./Slices/scheduleSlice";
import searchReducer from "./Slices/searchSlice";
import teamMatchesReducer from "./Slices/teamMatchesSlice";
import teamsReducer from "./Slices/teamsSlice";
export const store = configureStore({
  reducer: {
    competitions: competitionReducer,
    search: searchReducer,
    teams: teamsReducer,
    matches: matchesReducer,
    schedule: scheduleReducer,
    date: dateReducer,
    teamMatches: teamMatchesReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
