import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { InitialStateType } from "./types/types";

export const initialState = {
  quizData: {
    id: "",
    name: "",
    questions: [{}],
  },
  currentQuestion: 0,
  currentScore: 0,
  leaderBoard: [{}],
};

const QuizContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizprovider = () => {
  return useContext(QuizContext);
};
