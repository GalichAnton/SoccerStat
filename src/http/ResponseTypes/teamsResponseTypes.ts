const team = {
  id: 758,
  area: {
    id: 2257,
    name: "Uruguay",
  },
  name: "Uruguay",
  shortName: "Uruguay",
  tla: "URY",
  crestUrl: "",
  address: "Guayaybo 1531 Montevideo 11200",
  phone: "+59 (82) 4004814",
  website: "http://www.auf.org.uy",
  email: "auf@auf.org.uy",
  founded: 1900,
  clubColors: "Sky Blue / White / Black",
  venue: "Guangxi Sports Centre Stadium",
  lastUpdated: "2018-06-07T12:17:29Z",
};
export type teamType = typeof team;

const teamResponse = {
  count: 32,
  filters: {},
  competition: {
    id: 2000,
    area: {
      id: 2267,
      name: "World",
    },
    name: "FIFA World Cup",
    code: "WC",
    plan: "TIER_ONE",
    lastUpdated: "2018-06-04T00:02:58Z",
  },
  season: {
    id: 1,
    startDate: "2018-06-14",
    endDate: "2018-07-15",
    currentMatchday: null,
    availableStages: ["GROUP_STAGE"],
  },
  teams: [] as teamType[],
};

export type teamsResponseType = typeof teamResponse;
