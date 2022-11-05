import axios from "axios";

export const TEAMS_URL = `https://api.football-data.org/v2/teams/`;

const $teamsApi = axios.create({
  baseURL: TEAMS_URL,
  headers: {
    "X-Auth-Token":
      process.env.REACT_APP_API_TOKEN || "964422d5d12e44c1bdabae0fef479866",
  },
});

export default $teamsApi;
