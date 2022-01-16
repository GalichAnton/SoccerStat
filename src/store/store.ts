import { configureStore } from "@reduxjs/toolkit";
import competitionReduer from "./Slices/competitionSlice";
import searchReducer from "./Slices/searchSlice";
import teamsReducer from "./Slices/teamsSlice";
export const store = configureStore({
  reducer: {
    competitions: competitionReduer,
    search: searchReducer,
    teams: teamsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
