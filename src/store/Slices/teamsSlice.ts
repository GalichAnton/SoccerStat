import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import StatsService from "../../http/services/StatsService";
import { AxiosResponse } from "axios";
import {
  teamsResponseType,
  teamType,
} from "../../http/ResponseTypes/teamsResponseTypes";

export interface IState {
  teams: teamType[];
  loading: "idle" | "loading" | "rejected";
  error: string;
}

const initialState: IState = {
  teams: [],
  loading: "idle",
  error: "",
};

export const getTeams = createAsyncThunk(
  "teams/getTeams",
  async (competitionId: string, thunkApi) => {
    const { data }: AxiosResponse<teamsResponseType> =
      await StatsService.getTeams(competitionId);
    return data.teams;
  }
);

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeams.rejected, (state) => {
      state.loading = "rejected";
    });
    builder.addCase(getTeams.fulfilled, (state, { payload }) => {
      if (payload) {
        state.teams = payload;
        state.loading = "idle";
      } else {
        state.error = "error";
      }
    });
    builder.addCase(getTeams.pending, (state) => {
      state.loading = "loading";
    });
  },
});

export default teamsSlice.reducer;
