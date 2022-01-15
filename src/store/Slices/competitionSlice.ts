import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  competitionResponseType,
  competitionType,
} from "../../http/ResponseTypes/competitionResponseType";
import CompetitionService from "../../http/services/CompetitionService";
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
      await CompetitionService.getCompetitions(plan);
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
