import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";

import {
  matchesResponseType,
  matchType,
} from "../http/ResponseTypes/matchesResponseType";
import StatsService from "../http/services/StatsService";

class MatchesStore {
  matches: matchType[] = [];

  loading: "idle" | "loading" | "rejected";

  error: string;

  constructor() {
    makeAutoObservable(this);
  }

  *fetchMathes(req: {
    competitionId: string;
    dateFrom: string | null;
    dateTo: string | null;
  }) {
    try {
      const { data }: AxiosResponse<matchesResponseType> =
        yield StatsService.getMatches(req);
      this.matches = data.matches;
      this.loading = "idle";
    } catch (error) {
      const e = error as AxiosError;
      this.loading = "rejected";
      this.error = e.message;
    }
  }
}

export default new MatchesStore();
