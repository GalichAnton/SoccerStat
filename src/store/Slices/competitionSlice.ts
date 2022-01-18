import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  competitionResponseType,
  competitionType,
} from "../../http/ResponseTypes/competitionResponseType";
import StatsService from "../../http/services/StatsService";
import { AxiosResponse } from "axios";

export interface IState {
  competitions: competitionType[];
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
  async (plan: string, thunkApi) => {
    const { data }: AxiosResponse<competitionResponseType> =
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
        console.log(payload);
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
