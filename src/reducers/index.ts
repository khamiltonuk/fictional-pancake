import {
  RESET_GAME,
  SHOW_SETTINGS,
  HIDE_SETTINGS,
  SET_GAME_MODE,
  SET_GAME_LENGTH,
  MAKE_MOVE,
  ANIMATE_HANDS,
} from "../actions";
import type { ResultsT } from "../types";
import type { ActionT } from "../actions";

import { makeMove, isGameOver, makeChoice, setMoves } from "../helpers";

export const initialState: StateT = {
  result: { win: 0, lose: 0, draw: 0 },
  isSettingsOpen: false,
  gameMode: "rpsls",
  moves: ["paper", "rock", "lizard", "spock", "scissors"],
  gameLength: "3",
  playerOneChoice: "rock",
  playerTwoChoice: "rock",
  isGameOver: "",
};

export type StateT = {
  result: ResultsT;
  isSettingsOpen: boolean;
  gameMode: string;
  moves: string[];
  gameLength: string;
  playerOneChoice: string;
  playerTwoChoice: string;
  isGameOver: string;
};

function reducer(state: StateT, action: ActionT): StateT {
  switch (action.type) {
    case MAKE_MOVE: {
      const randomChoice = makeChoice(state.moves);
      const newResult = makeMove(
        state.result,
        action.payload,
        randomChoice,
        state.moves
      );
      return {
        ...state,
        playerOneChoice: action.payload,
        playerTwoChoice: randomChoice,
        result: newResult,
        isGameOver: isGameOver(newResult, state.gameLength),
      };
    }
    case SET_GAME_MODE:
      return {
        ...state,
        gameMode: action.payload,
        moves: setMoves(action.payload),
      };
    case SET_GAME_LENGTH:
      return { ...state, gameLength: action.payload };
    case SHOW_SETTINGS:
      return { ...state, isSettingsOpen: true };
    case HIDE_SETTINGS:
      return { ...state, isSettingsOpen: false };
    case ANIMATE_HANDS:
      return {
        ...state,
        playerOneChoice: "animate",
        playerTwoChoice: "animate",
      };
    case RESET_GAME:
      return {
        ...state,
        playerOneChoice: "rock",
        playerTwoChoice: "rock",
        result: { win: 0, lose: 0, draw: 0 },
        isGameOver: "",
      };
    default:
      return state;
  }
}

export default reducer;
