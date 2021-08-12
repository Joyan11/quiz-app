type Choice = {
  option: string;
  isRight: boolean;
};

type Questions = {
  questionNo: number;
  question?: string;
  choices: Choice[];
  point: number;
};

type PersonalScore = {
  quizname: string;
  name: string;
  score: string;
  tag: string;
};

type QuizData = {
  id: string;
  name: string;
  questions: Questions[];
};

export type ACTIONTYPE =
  | { type: "SET_INITIAL_DATA"; payload: QuizData }
  | { type: "INCREMENT_SCORE"; payload: number }
  | { type: "NEXT_QUESTION" }
  | { type: "RESET" }
  | { type: "CLICKED_SESSION" }
  | { type: "ADD_TO_LEADERBOARD"; payload: PersonalScore[] };
