import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import TeamPage from "./Pages/TeamPage/TeamPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="competitions/" element={<MainPage />}>
          <Route path=":filter" element={<MainPage />} />
        </Route>
        <Route path="/teams/:competitionId" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
