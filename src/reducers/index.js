import {
  RESET_GAME,
  SHOW_SETTINGS,
  HIDE_SETTINGS,
  SET_GAME_MODE,
  SET_GAME_LENGTH,
  MAKE_MOVE
} from "../constants";

import { makeMove, isGameOver, makeChoice } from "../helpers/helpers";

const initialState = {
  result: { win: 0, lose: 0, draw: 0 },
  isSettingsOpen: false,
  gameMode: ["rock", "paper", "scissor", "spock", "lizard"],
  gameLength: 3,
  playerOneChoice: null,
  playerTwoChoice: null,
  isGameOver: "",
  GameStatus: "You won"
};

function gameStatus(result) {
  return "you lost";
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case MAKE_MOVE:
      const randomChoice = makeChoice(state.gameMode);
      const newResult = makeMove(
        state.result,
        payload,
        randomChoice,
        state.gameMode
      );
      return {
        ...state,
        playerOneChoice: payload,
        playerTwoChoice: randomChoice,
        result: newResult,
        isGameOver: isGameOver(newResult, state.gameLength),
        GameStatus: gameStatus(newResult)
      };
    case SET_GAME_MODE:
      return { ...state, gameMode: payload };
    case SET_GAME_LENGTH:
      return { ...state, gameLength: payload };
    case SHOW_SETTINGS:
      return { ...state, isSettingsOpen: true };
    case HIDE_SETTINGS:
      return { ...state, isSettingsOpen: false };
    case RESET_GAME:
      return { ...state, result: { win: 0, lose: 0, draw: 0 }, isGameOver: "" };
    default:
      return state;
  }
}
