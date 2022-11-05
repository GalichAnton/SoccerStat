import { configureStore } from "@reduxjs/toolkit";

import competitionReducer from "./slices/competitionSlice";
import dateReducer from "./slices/dateSlice";
import matchesReducer from "./slices/matchesSlice";
import scheduleReducer from "./slices/scheduleSlice";
import searchReducer from "./slices/searchSlice";
import teamMatchesReducer from "./slices/teamMatchesSlice";
import teamsReducer from "./slices/teamsSlice";

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
