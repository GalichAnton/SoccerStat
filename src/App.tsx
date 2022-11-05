import "./App.css";

import MainPage from "@pages/MainPage";
import MatchesPage from "@pages/MatchesPage";
import SchedulePage from "@pages/SchedulePage";
import TeamMatchesPage from "@pages/TeamMatchesPage";
import TeamPage from "@pages/TeamPage";
import { Routes, Route } from "react-router-dom";

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
      </Routes>
    </div>
  );
}

export default App;
