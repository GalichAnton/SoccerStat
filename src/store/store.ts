import { configureStore } from "@reduxjs/toolkit";
import competitionReducer from "./Slices/competitionSlice";
import searchReducer from "./Slices/searchSlice";
import teamsReducer from "./Slices/teamsSlice";
import matchesReducer from "./Slices/matchesSlice";
export const store = configureStore({
  reducer: {
    competitions: competitionReducer,
    search: searchReducer,
    teams: teamsReducer,
    matches: matchesReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
