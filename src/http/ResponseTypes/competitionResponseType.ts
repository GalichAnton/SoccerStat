export const competition = {
  id: 2003,
  emblemUrl: "",
  area: {
    id: 2163,
    name: "Netherlands",
  },
  name: "Eredivisie",
  code: null,
  plan: "TIER_ONE",
  currentSeason: {
    id: 4,
    startDate: " 2017-08-11T19:00:00Z",
    endDate: "2018-05-20T16:45:00Z",
    currentMatchday: 34,
  },
  seasons: [
    {
      id: 4,
      startDate: "2017-08-11T19:00:00Z",
      endDate: "2018-05-20T16:45:00Z",
      currentMatchday: 34,
    },
  ],
  lastUpdated: " 2018-06-05T00:17:50Z",
};

export type competitionType = typeof competition;

export type competitionResponseType = {
  count: number;
  competitions: competitionType[];
  filters: {
    plan: string;
  };
};
