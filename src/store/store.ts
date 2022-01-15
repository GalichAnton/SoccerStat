import { configureStore } from "@reduxjs/toolkit";
import competitionReduer from "./Slices/competitionSlice";
export const store = configureStore({
  reducer: {
    competitions: competitionReduer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
