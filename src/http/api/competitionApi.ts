import axios from "axios";

export const COMPETITION_URL = `https://api.football-data.org/v2/competitions/`;

const $competitionApi = axios.create({
  baseURL: COMPETITION_URL,
  headers: {
    "X-Auth-Token": process.env.REACT_APP_API_TOKEN || "",
  },
});

export default $competitionApi;
