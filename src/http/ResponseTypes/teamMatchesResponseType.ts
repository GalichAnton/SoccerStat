import { matchType } from "./matchesResponseType";

const teamMatchesResponse = {
  count: 3,
  filters: {},
  matches: [] as matchType[],
};

export type teamMatchesResponseType = typeof teamMatchesResponse;
