import { configureStore } from "@reduxjs/toolkit";
import competitionReduer from "./Slices/competitionSlice";
import searchReducer from "./Slices/searchSlice";
export const store = configureStore({
  reducer: {
    competitions: competitionReduer,
    search: searchReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
