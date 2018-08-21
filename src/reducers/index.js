// @flow

import {
  RESET_GAME,
  SHOW_SETTINGS,
  HIDE_SETTINGS,
  SET_GAME_MODE,
  SET_GAME_LENGTH,
  MAKE_MOVE,
  ANIMATE_HANDS
} from "../constants";
import { type ResultsT } from "../types";

import { makeMove, isGameOver, makeChoice, setMoves } from "../helpers/helpers";

export const initialState = {
  result: { win: 0, lose: 0, draw: 0 },
  isSettingsOpen: false,
  gameMode: "rpsls",
  moves: ["paper", "rock", "lizard", "spock", "scissors"],
  gameLength: "3",
  playerOneChoice: "rock",
  playerTwoChoice: "rock",
  isGameOver: "",
  GameStatus: "You won"
};

type StateT = {
  result: ResultsT,
  isSettingsOpen: boolean,
  gameMode: string,
  moves: Array<string>,
  gameLength: string,
  playerOneChoice: string,
  playerTwoChoice: string,
  isGameOver: string,
  GameStatus: string
};

type ActionT = {
  type: string,
  payload: string
};

export default function(
  state: StateT = initialState,
  { type, payload }: ActionT
): StateT {
  switch (type) {
    case MAKE_MOVE:
      const randomChoice = makeChoice(state.moves);
      const newResult = makeMove(
        state.result,
        payload,
        randomChoice,
        state.moves
      );
      return {
        ...state,
        playerOneChoice: payload,
        playerTwoChoice: randomChoice,
        result: newResult,
        isGameOver: isGameOver(newResult, state.gameLength)
      };
    case SET_GAME_MODE:
      return { ...state, gameMode: payload, moves: setMoves(payload) };
    case SET_GAME_LENGTH:
      return { ...state, gameLength: payload };
    case SHOW_SETTINGS:
      return { ...state, isSettingsOpen: true };
    case HIDE_SETTINGS:
      return { ...state, isSettingsOpen: false };
    case ANIMATE_HANDS:
      return {
        ...state,
        playerOneChoice: "animate",
        playerTwoChoice: "animate"
      };
    case RESET_GAME:
      return {
        ...state,
        playerOneChoice: "rock",
        playerTwoChoice: "rock",
        result: { win: 0, lose: 0, draw: 0 },
        isGameOver: ""
      };
    default:
      return state;
  }
}
