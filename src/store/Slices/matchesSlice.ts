import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import StatsService from "../../http/services/StatsService";
import { AxiosResponse } from "axios";
import {
  matchesResponseType,
  matchType,
} from "../../http/ResponseTypes/matchesResponseType";

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

export const getMatches = createAsyncThunk(
  "matches/getMatches",
  async (
    req: { competitionId: string; dateFrom?: string; dateTo?: string },
    thunkApi
  ) => {
    const { data }: AxiosResponse<matchesResponseType> =
      await StatsService.getMatches(req);
    return data.matches;
  }
);

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatches.rejected, (state) => {
      state.loading = "rejected";
      state.error = "Matches not Found";
    });
    builder.addCase(getMatches.fulfilled, (state, { payload }) => {
      if (payload) {
        state.matches = payload;
        state.loading = "idle";
        state.error = "";
        console.log(payload);
      } else {
        state.error = "Matches not Found";
      }
    });
    builder.addCase(getMatches.pending, (state) => {
      state.loading = "loading";
    });
  },
});

export default matchesSlice.reducer;
