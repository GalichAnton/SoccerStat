import { IArea } from "@interfaces/shared/area";
import { Response } from "@interfaces/shared/response";

export interface ITeam {
  area: IArea;
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  runningCompetitions: IRunningCompetition[];
  coach: ICoach;
  marketValue: number;
  squad: ISquad[];
  staff: any[];
  lastUpdated: string;
}

export interface ICoach {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: Date;
  nationality: string;
  contract: IContract;
}

export interface IContract {
  start: string;
  until: string;
}

export interface IRunningCompetition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface ISquad {
  id: number;
  firstName: string;
  lastName: null | string;
  name: string;
  position: string;
  dateOfBirth: Date;
  nationality: string;
  shirtNumber: number | null;
  marketValue: number;
  contract: IContract;
}

export interface ITeamResponse extends Response {
  area: IArea;
  teams: ITeam[];
}
