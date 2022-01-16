import { AxiosResponse } from "axios";
import { competitionResponseType } from "../ResponseTypes/competitionResponseType";
import $competitionApi from "../api/competitionApi";
import { teamsResponseType } from "../ResponseTypes/teamsResponseTypes";

export default class StatsService {
  static async getCompetitions(
    plan: string
  ): Promise<AxiosResponse<competitionResponseType>> {
    return $competitionApi.get<competitionResponseType>(`?plan=${plan}`);
  }

  static async getTeams(
    competitionId: string
  ): Promise<AxiosResponse<teamsResponseType>> {
    return $competitionApi.get<teamsResponseType>(`${competitionId}/teams`);
  }
}
