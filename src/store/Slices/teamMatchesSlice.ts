import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import StatsService from "../../http/services/StatsService";
import { AxiosResponse } from "axios";
import {
  matchesResponseType,
  matchType,
} from "../../http/ResponseTypes/matchesResponseType";
import { teamMatchesResponseType } from "../../http/ResponseTypes/teamMatchesResponseType";

export interface IState {
  matches: matchType[];
  loading: "idle" | "loading" | "rejected";
  error: string;
}

const initialState: IState = {
  matches: [],
  loading: "idle",
  error: "",
};

export const getTeamMatches = createAsyncThunk(
  "teamMatches/getTeamMatches",
  async (
    req: { teamId: string; dateFrom: string | null; dateTo: string | null },
    thunkApi
  ) => {
    const { data }: AxiosResponse<teamMatchesResponseType> =
      await StatsService.getTeamMatches(req);
    return data.matches;
  }
);

const teamMatchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeamMatches.rejected, (state) => {
      state.loading = "rejected";
      state.error = "Matches not Found";
    });
    builder.addCase(getTeamMatches.fulfilled, (state, { payload }) => {
      if (payload) {
        state.matches = payload;
        state.loading = "idle";
        state.error = "";
        console.log(payload);
      } else {
        state.error = "Matches not Found";
      }
    });
    builder.addCase(getTeamMatches.pending, (state) => {
      state.loading = "loading";
    });
  },
});

export default teamMatchesSlice.reducer;
