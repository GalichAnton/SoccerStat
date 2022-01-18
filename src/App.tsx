import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import TeamPage from "./Pages/TeamPage/TeamPage";
import Page404 from "./Pages/Page404/Page404";
import MatchesPage from "./Pages/MatchesPage/MatchesPage";
import SchedulePage from "./Pages/SchedulePage/SchedulePage";
import TeamMatchesPage from "./Pages/TeamMatchesPage/TeamMatchesPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="competitions/" element={<MainPage />}>
          <Route path=":filter" element={<MainPage />} />
        </Route>
        <Route
          path="competitions/:competitionId/matches/"
          element={<MatchesPage />}
        >
          <Route path=":dateFrom/:dateTo" element={<MatchesPage />} />
        </Route>
        <Route
          path="competitions/:competitionId/schedule/"
          element={<SchedulePage />}
        >
          <Route path=":filter" element={<SchedulePage />} />
        </Route>
        <Route path="competitions/:competitionId/teams/" element={<TeamPage />}>
          <Route path=":filter" element={<TeamPage />} />
        </Route>
        <Route path="teams/:teamId/matches" element={<TeamMatchesPage />}>
          <Route path=":dateFrom/:dateTo" element={<TeamMatchesPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
