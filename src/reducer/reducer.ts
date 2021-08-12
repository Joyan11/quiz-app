import { initialState } from "../context/context";
import { ACTIONTYPE } from "./type";

export const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
      return {
        ...state,
        quizData: action.payload,
      };
    case "INCREMENT_SCORE":
      return {
        ...state,
        currentScore: state.currentScore + action.payload,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "RESET":
      return {
        ...state,
        currentScore: 0,
        currentQuestion: 0,
      };
    case "ADD_TO_LEADERBOARD":
      return {
        ...state,
        leaderBoard: action.payload,
      };

    default:
      return state;
  }
};
