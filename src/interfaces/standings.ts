import { IArea } from "@interfaces/shared/area";
import { Response } from "@interfaces/shared/response";
import { ISeason } from "@interfaces/shared/season";
import { IShortCompetition } from "@interfaces/shared/shortCompetition";

export interface IStandings {
  stage: string;
  type: string;
  group: null;
  table: ITable[];
}
interface ITable {
  position: number;
  team: ITeam;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

interface ITeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
}

export interface IStandingResponse extends Response {
  area: IArea;
  competition: IShortCompetition;
  season: ISeason;
  standings: IStandings[];
}
