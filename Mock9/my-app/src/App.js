import "./App.css";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import QuestionBank from "./Component/QuestionBank";
import Result from "./Component/Result";
import Leaderboard from "./Component/Leaderboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuestionBank />} />
      <Route path="/results" element={<Result />} />
      <Route path="/dashboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
