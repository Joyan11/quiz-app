import "./App.css";
import "./css/style.css";
import { QuizPage } from "./components/QuizPage";
import { Routes, Route, Link } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { Navbar } from "./components/Navbar";
import { Leaderboard } from "./components/Leaderboard";

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
      </Box>
    </div>
  );
}

export default App;
