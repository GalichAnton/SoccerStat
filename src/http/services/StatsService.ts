import { AxiosResponse } from "axios";
import { competitionResponseType } from "../ResponseTypes/competitionResponseType";
import $competitionApi from "../api/competitionApi";
import { teamsResponseType } from "../ResponseTypes/teamsResponseTypes";
import { matchesResponseType } from "../ResponseTypes/matchesResponseType";
import { standingsResponseType } from "../ResponseTypes/standingsResponseType";
import { teamMatchesResponseType } from "../ResponseTypes/teamMatchesResponseType";
import $teamsApi from "../api/teamsApi";

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

  static async getMatches(req: {
    competitionId: string;
    dateFrom?: string;
    dateTo?: string;
  }): Promise<AxiosResponse<matchesResponseType>> {
    return $competitionApi.get<matchesResponseType>(
      `${req.competitionId}/matches`,
      {
        params: { dateFrom: req.dateFrom, dateTo: req.dateTo },
      }
    );
  }

  static async getStandings(
    competitionId: string
  ): Promise<AxiosResponse<standingsResponseType>> {
    return $competitionApi.get<standingsResponseType>(
      `${competitionId}/standings`
    );
  }

  static async getTeamMatches(req: {
    teamId: string;
    dateFrom?: string;
    dateTo?: string;
  }): Promise<AxiosResponse<teamMatchesResponseType>> {
    return $teamsApi.get<teamMatchesResponseType>(`${req.teamId}/matches`, {
      params: {
        dateFrom: req.dateFrom,
        dateTo: req.dateTo,
      },
    });
  }
}
