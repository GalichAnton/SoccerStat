import { IMatch, ITeamMatchesResponse } from "@interfaces/match";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import StatsService from "../../http/services/StatsService";

export interface IState {
  matches: IMatch[];
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
  async (req: {
    teamId: string;
    dateFrom: string | null;
    dateTo: string | null;
  }) => {
    const { data }: AxiosResponse<ITeamMatchesResponse> =
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
