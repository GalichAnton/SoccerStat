import { Response } from "./shared/response";

export interface ICompetition {
  id: number;
  area: IArea;
  name: string;
  code: string;
  type: string;
  emblemUrl: string;
  plan: string;
  currentSeason: ICurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: Date;
}

interface IArea {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface ICurrentSeason {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday: number;
  winner: string;
}

export interface ICompetitionResponse extends Response {
  competitions: ICompetition[];
}
