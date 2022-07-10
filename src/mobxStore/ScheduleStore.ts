import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";

import {
  standingsResponseType,
  standingType,
} from "../http/ResponseTypes/standingsResponseType";
import StatsService from "../http/services/StatsService";

class ScheduleStore {
  schedule: standingType;

  loading: "idle" | "loading" | "rejected";

  error: string;

  constructor() {
    makeAutoObservable(this);
  }

  *fetchSchedule(competitionId: string) {
    try {
      const { data }: AxiosResponse<standingsResponseType> =
        yield StatsService.getStandings(competitionId);
      this.schedule = data.standings[0];
      this.loading = "idle";
    } catch (error) {
      const e = error as AxiosError;
      this.loading = "rejected";
      this.error = e.message;
    }
  }
}

export default new ScheduleStore();
