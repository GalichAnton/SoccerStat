import StatsService from "@http/services/StatsService";
import { IMatch, IMatchesResponse } from "@interfaces/match";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

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

export const getMatches = createAsyncThunk(
  "matches/getMatches",
  async (req: {
    competitionId: string;
    dateFrom: string | null;
    dateTo: string | null;
  }) => {
    const { data }: AxiosResponse<IMatchesResponse> =
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
