import { AxiosResponse } from "axios";

import $competitionApi from "../api/competitionApi";
import $teamsApi from "../api/teamsApi";
import { competitionResponseType } from "../ResponseTypes/competitionResponseType";
import { matchesResponseType } from "../ResponseTypes/matchesResponseType";
import { standingsResponseType } from "../ResponseTypes/standingsResponseType";
import { teamMatchesResponseType } from "../ResponseTypes/teamMatchesResponseType";
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

  static async getMatches(req: {
    competitionId: string;
    dateFrom: string | null;
    dateTo: string | null;
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
    dateFrom: string | null;
    dateTo: string | null;
  }): Promise<AxiosResponse<teamMatchesResponseType>> {
    return $teamsApi.get<teamMatchesResponseType>(`${req.teamId}/matches`, {
      params: {
        dateFrom: req.dateFrom,
        dateTo: req.dateTo,
      },
    });
  }
}
