import { AxiosResponse } from "axios";
import { competitionResponseType } from "../ResponseTypes/competitionResponseType";
import $competitionApi from "../api/competitionApi";

export default class CompetitionService {
  static async getCompetitions(
    plan: string
  ): Promise<AxiosResponse<competitionResponseType, string>> {
    return $competitionApi.get<competitionResponseType>(`?plan=${plan}`);
  }
}
