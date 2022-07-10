import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainPage from "./Pages/MainPage/MainPage";
import MatchesPage from "./Pages/MatchesPage/MatchesPage";
import SchedulePage from "./Pages/SchedulePage/SchedulePage";
import TeamMatchesPage from "./Pages/TeamMatchesPage/TeamMatchesPage";
import TeamPage from "./Pages/TeamPage/TeamPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route
          path="/competitions/:competitionId/matches/"
          element={<MatchesPage />}
        >
          <Route path=":dateFrom/:dateTo" element={<MatchesPage />} />
        </Route>
        <Route
          path="/competitions/:competitionId/schedule/"
          element={<SchedulePage />}
        >
          <Route path=":filter" element={<SchedulePage />} />
        </Route>
        <Route
          path="/competitions/:competitionId/teams/"
          element={<TeamPage />}
        />
        <Route path="teams/:teamId/matches" element={<TeamMatchesPage />} />

        {/* <Route path="*" element={<Navigate to="/SoccerStat" />} />*/}
      </Routes>
    </div>
  );
}

export default App;
