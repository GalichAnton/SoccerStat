import $competitionApi from "@http/api/competitionApi";
import $teamsApi from "@http/api/teamsApi";
import { ICompetitionResponse } from "@interfaces/competition";
import { IMatchesResponse, ITeamMatchesResponse } from "@interfaces/match";
import { IStandingResponse } from "@interfaces/standings";
import { ITeamResponse } from "@interfaces/team";
import { AxiosResponse } from "axios";

export default class StatsService {
  static async getCompetitions(
    plan: string
  ): Promise<AxiosResponse<ICompetitionResponse>> {
    return $competitionApi.get<ICompetitionResponse>(`?plan=${plan}`);
  }

  static async getTeams(
    competitionId: string
  ): Promise<AxiosResponse<ITeamResponse>> {
    return $competitionApi.get<ITeamResponse>(`${competitionId}/teams`);
  }

  static async getMatches(req: {
    competitionId: string;
    dateFrom: string | null;
    dateTo: string | null;
  }): Promise<AxiosResponse<IMatchesResponse>> {
    return $competitionApi.get<IMatchesResponse>(
      `${req.competitionId}/matches`,
      {
        params: { dateFrom: req.dateFrom, dateTo: req.dateTo },
      }
    );
  }

  static async getStandings(
    competitionId: string
  ): Promise<AxiosResponse<IStandingResponse>> {
    return $competitionApi.get<IStandingResponse>(`${competitionId}/standings`);
  }

  static async getTeamMatches(req: {
    teamId: string;
    dateFrom: string | null;
    dateTo: string | null;
  }): Promise<AxiosResponse<ITeamMatchesResponse>> {
    return $teamsApi.get<ITeamMatchesResponse>(`${req.teamId}/matches`, {
      params: {
        dateFrom: req.dateFrom,
        dateTo: req.dateTo,
      },
    });
  }
}
