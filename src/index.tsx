import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from "./context/context";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { MusicProvider } from "./context/musicContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <MusicProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
        </MusicProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
