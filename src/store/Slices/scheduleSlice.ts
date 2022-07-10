import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import {
  standingsResponseType,
  standingType,
} from "../../http/ResponseTypes/standingsResponseType";
import StatsService from "../../http/services/StatsService";

export interface IState {
  schedule: standingType;
  loading: "idle" | "loading" | "rejected";
  error: string;
}

const initialState: IState = {
  schedule: {} as standingType,
  loading: "idle",
  error: "",
};

export const getSchedule = createAsyncThunk(
  "standing/getStanding",
  async (competitionId: string) => {
    const { data }: AxiosResponse<standingsResponseType> =
      await StatsService.getStandings(competitionId);
    return data.standings[0];
  }
);

const standingsSlice = createSlice({
  name: "standing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSchedule.rejected, (state) => {
      state.loading = "rejected";
      state.error =
        "Sorry, there is no table for this competition in the database yet";
    });
    builder.addCase(getSchedule.fulfilled, (state, { payload }) => {
      if (payload) {
        state.schedule = payload;
        state.loading = "idle";
        state.error = "";
      } else {
        state.error =
          "Sorry, there is no table for this competition in the database yet";
      }
    });
    builder.addCase(getSchedule.pending, (state) => {
      state.loading = "loading";
    });
  },
});

export default standingsSlice.reducer;
