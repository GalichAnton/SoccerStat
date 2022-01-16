import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="competitions/" element={<MainPage />}>
          <Route path=":filter" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
