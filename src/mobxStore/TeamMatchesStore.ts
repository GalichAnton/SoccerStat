import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";

import { matchType } from "../http/ResponseTypes/matchesResponseType";
import { teamMatchesResponseType } from "../http/ResponseTypes/teamMatchesResponseType";
import StatsService from "../http/services/StatsService";

class TeamMatchesStore {
  matches: matchType[] = [];

  loading: "idle" | "loading" | "rejected";

  error: string;

  constructor() {
    makeAutoObservable(this);
  }

  *fetchTeamMatches(req: {
    teamId: string;
    dateFrom: string | null;
    dateTo: string | null;
  }) {
    try {
      const { data }: AxiosResponse<teamMatchesResponseType> =
        yield StatsService.getTeamMatches(req);
      this.matches = data.matches;
      this.loading = "idle";
    } catch (error) {
      const e = error as AxiosError;
      this.loading = "rejected";
      this.error = e.message;
    }
  }
}

export default new TeamMatchesStore();
