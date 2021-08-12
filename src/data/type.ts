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

export type Quiz = {
  quizName: string;
  spells: { name: string; questions: Questions[] };
  houseofhogwards: { name: string; questions: Questions[] };
  fantasticbeasts: { name: string; questions: Questions[] };
};
