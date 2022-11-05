import StatsService from "@http/services/StatsService";
import { ICompetition, ICompetitionResponse } from "@interfaces/competition";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export interface IState {
  competitions: ICompetition[];
  loading: "idle" | "loading" | "rejected";
  error: string;
}

const initialState: IState = {
  competitions: [],
  loading: "idle",
  error: "",
};

export const getCompetitions = createAsyncThunk(
  "competitions/getCompetitions",
  async (plan: string) => {
    const { data }: AxiosResponse<ICompetitionResponse> =
      await StatsService.getCompetitions(plan);
    return data.competitions;
  }
);

const competitionsSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompetitions.rejected, (state) => {
      state.loading = "rejected";
      state.error = "Reject Response";
    });
    builder.addCase(getCompetitions.fulfilled, (state, { payload }) => {
      if (payload) {
        state.competitions = payload;
        state.loading = "idle";
      } else {
        state.error = "error";
      }
    });
    builder.addCase(getCompetitions.pending, (state) => {
      state.loading = "loading";
    });
  },
});

export default competitionsSlice.reducer;
