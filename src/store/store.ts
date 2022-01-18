import { configureStore } from "@reduxjs/toolkit";
import competitionReducer from "./Slices/competitionSlice";
import searchReducer from "./Slices/searchSlice";
import teamsReducer from "./Slices/teamsSlice";
import matchesReducer from "./Slices/matchesSlice";
import scheduleReducer from "./Slices/scheduleSlice";
import dateReducer from "./Slices/dateSlice";
import teamMatchesReducer from "./Slices/teamMatchesSlice";
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
