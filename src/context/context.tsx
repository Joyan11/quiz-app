import React, { createContext, useContext, useReducer } from "react";
import { Questions } from "../data/type";
import { reducer } from "../reducer/reducer";

export type Scores = {
  quizname: string;
  name: string;
  score: number;
  tag: string;
};

type QuizData = {
  id: string;
  name: string;
  questions: Questions[] | any[];
};

type InitialStateType = {
  quizData: QuizData;
  currentQuestion: number;
  currentScore: number;
  leaderBoard: Scores[] | any[];
};

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
