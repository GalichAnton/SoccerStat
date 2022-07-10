import searchFilter from "@mobx/SearchStore";
import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";

import {
  competitionResponseType,
  competitionType,
} from "../http/ResponseTypes/competitionResponseType";
import StatsService from "../http/services/StatsService";
class CompetitionsStore {
  competitions: competitionType[] = [];

  loading: "idle" | "loading" | "rejected";

  error: string;

  constructor() {
    makeAutoObservable(this);
  }

  *fetchCompetitions(plan: string) {
    try {
      const { data }: AxiosResponse<competitionResponseType> =
        yield StatsService.getCompetitions(plan);
      this.competitions = data.competitions;
      this.loading = "idle";
    } catch (error) {
      const e = error as AxiosError;
      this.loading = "rejected";
      this.error = e.message;
    }
  }

  get filteredCompetitions() {
    return this.competitions.filter((competition) =>
      competition.name.toLowerCase().includes(searchFilter.filter)
    );
  }

  getCurrentcompetition(id: number) {
    return this.competitions.find((competition) => competition.id === id);
  }
}

export default new CompetitionsStore();
