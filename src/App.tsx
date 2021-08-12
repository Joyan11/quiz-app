import "./App.css";
import "./css/style.css";
import { QuizPage } from "./components/QuizPage";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { Leaderboard } from "./components/Leaderboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Box height="100vh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <ToastContainer />
      </Box>
    </div>
  );
}

export default App;
