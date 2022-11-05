import StatsService from "@http/services/StatsService";
import { ITeam, ITeamResponse } from "@interfaces/team";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export interface IState {
  teams: ITeam[];
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
  async (competitionId: string) => {
    const { data }: AxiosResponse<ITeamResponse> = await StatsService.getTeams(
      competitionId
    );
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
