import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";

import {
  teamsResponseType,
  teamType,
} from "../http/ResponseTypes/teamsResponseTypes";
import StatsService from "../http/services/StatsService";

class TeamsStore {
  teams: teamType[] = [];

  loading: "idle" | "loading" | "rejected";

  error: string;

  constructor() {
    makeAutoObservable(this);
  }

  *fetchTeams(competitionId: string) {
    try {
      const { data }: AxiosResponse<teamsResponseType> =
        yield StatsService.getTeams(competitionId);
      this.teams = data.teams;
      this.loading = "idle";
    } catch (error) {
      const e = error as AxiosError;
      this.loading = "rejected";
      this.error = e.message;
    }
  }

  getCurrentteam(id: number) {
    return this.teams.find((team) => team.id === id);
  }
}

export default new TeamsStore();
