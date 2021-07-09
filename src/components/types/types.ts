export type State = {
  from: string | null;
};

export type Choice = {
  option: string;
  isRight: boolean;
};

export type Questions = {
  questionNo: number;
  question?: string;
  choices: Choice[];
  point: number;
};

export type Data = {
  name: string;
  questions: Questions[];
  id: string;
};

export type ServerError = {
  message: string;
};

export type LeaderBoard = {
  _id: string;
  name: string;
  score: number;
  tag: string;
};
