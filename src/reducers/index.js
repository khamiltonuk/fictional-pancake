import {
  RESET_GAME,
  SHOW_SETTINGS,
  HIDE_SETTINGS,
  SET_GAME_MODE,
  SET_GAME_LENGTH,
  MAKE_MOVE
} from "../constants";

import { makeMove, isGameOver, makeChoice, setMoves } from "../helpers/helpers";

const initialState = {
  result: { win: 0, lose: 0, draw: 0 },
  isSettingsOpen: false,
  gameMode: "rpsls",
  moves: ["paper", "rock", "lizard", "spock", "scissors"],
  gameLength: 3,
  playerOneChoice: null,
  playerTwoChoice: null,
  isGameOver: "",
  GameStatus: "You won"
};

export default function(state = initialState, { type, payload }) {
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
    case RESET_GAME:
      return { ...state, result: { win: 0, lose: 0, draw: 0 }, isGameOver: "" };
    default:
      return state;
  }
}
