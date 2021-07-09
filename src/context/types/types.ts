import { Questions } from "../../data/type";

export type Scores = {
  quizname: string;
  name: string;
  score: number;
  tag: string;
};

export type QuizData = {
  id: string;
  name: string;
  questions: Questions[] | any[];
};

export type InitialStateType = {
  quizData: QuizData;
  currentQuestion: number;
  currentScore: number;
  leaderBoard: Scores[] | any[];
};
