import { IArea } from "@interfaces/shared/area";
import { Response } from "@interfaces/shared/response";
import { IResultSet } from "@interfaces/shared/resultSet";
import { ISeason } from "@interfaces/shared/season";
import { IShortCompetition } from "@interfaces/shared/shortCompetition";

export interface IMatch {
  area: IArea;
  competition: IShortCompetition;
  season: ISeason;
  id: number;
  utcDate: string;
  status: string;
  minute: string;
  injuryTime: number;
  attendance: null;
  venue: string;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: string;
  homeTeam: ITeam;
  awayTeam: ITeam;
  score: IScore;
  goals: IGoal[];
  penalties: IPenalty[];
  bookings: any[];
  substitutions: any[];
  odds: IOdds;
  referees: ICoach[];
}

interface ITeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  coach: ICoach;
  leagueRank: number;
  formation: string;
  lineup: any[];
  bench: any[];
}

interface ICoach {
  id: number;
  name: string;
  nationality: string;
  type?: string;
}

interface IGoal {
  minute: number;
  injuryTime: null;
  type: string;
  team: IScorer;
  scorer: IScorer;
  assist: IScorer | null;
  score: IFullTime;
}

interface IScorer {
  id: number;
  name: string;
}

interface IFullTime {
  home: number;
  away: number;
}

interface IOdds {
  homeWin: number;
  draw: number;
  awayWin: number;
}

interface IPenalty {
  player: IScorer;
  team: IScorer;
  scored: boolean;
}

interface IScore {
  winner: string;
  duration: string;
  fullTime: IFullTime;
  halfTime: IFullTime;
}

export interface IMatchesResponse extends Response {
  competition: IShortCompetition;
  resultSet: IResultSet;
  matches: IMatch[];
}

export interface ITeamMatchesResponse extends Response {
  resultSet: IResultSet;
  matches: IMatch[];
}
